import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { ethers, waffle } from 'hardhat';

// const { solidity } = 'ethereum-waffle'
// const { expect } = 'chai'
import { DeployFunction } from "hardhat-deploy/types";
import { parseUnits } from 'ethers/lib/utils';
import { BigNumber } from "ethers";
import { constants } from 'ethers';
import { Console } from 'console';
// import { deploy, deployedAt } from "./contract";


const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	const { deployments, getNamedAccounts, network } = hre;
	const { deploy, execute, get } = deployments;
	const { deployer, user } = await getNamedAccounts();
	const ONEE18 = BigNumber.from('1000000000000000000')


	console.log('deployer', deployer);
	console.log('2ndParty', user);
	const provider = waffle.provider;


	const pairREQT_DAI = '0xcde9f3be9786e91b3b309bcf5f6de69c9ea8739c'

	console.log("get stables contracts")
	console.log("usdc")
	const usdc = await ethers.getContractAt('MockERC20', '0xca9ec7085ed564154a9233e1e7d8fef460438eea');
	console.log("usdt")
	const usdt = await ethers.getContractAt('MockERC20', '0xffb3ed4960cac85372e6838fbc9ce47bcf2d073e');
	console.log("dai")
	const dai = await ethers.getContractAt('MockERC20', '0xaea51e4fee50a980928b4353e852797b54deacd8');
	console.log("tusd")
	const tusd = await ethers.getContractAt('MockERC20', '0xccf7ed44c5a0f3cb5c9a9b9f765f8d836fb93ba1');

	const bondingCalculatorAddress = '0x2A03A0B4e33B922d381B9f7DF16111cd2C77b4b3'

	const REQ = await deploy('RequiemERC20Token', {
		contract: 'RequiemERC20Token',
		from: deployer,
		log: true,
		args: [],
	});

	const reqtContract = await ethers.getContractAt('RequiemERC20Token', REQ.address);

	await reqtContract.connect(deployer)
	await reqtContract.setMinter(deployer, ethers.constants.MaxInt256)


	const sREQ = await deploy('sRequiem', {
		contract: 'sRequiem',
		from: deployer,
		log: true,
		args: [],
	});
	const sReqtContract = await ethers.getContractAt('sRequiem', sREQ.address);
	await sReqtContract.setIndex('50000000000000000000')

	const gREQ = await deploy('gREQ', {
		contract: 'gREQ',
		from: deployer,
		log: true,
		args: [
			deployer,
			sReqtContract.address
		],
	});


	const gReqtContract = await ethers.getContractAt('gREQ', gREQ.address);
	await gReqtContract.mint(deployer, ONEE18.mul(BigNumber.from(10)))

	const authority = await deploy('Authority', {
		contract: 'Authority',
		from: deployer,
		log: true,
		args: [
			deployer, // address _governor,
			deployer, // address _guardian,
			deployer, // address _policy,
			deployer // address _vault
		],
	});


	const staking = await deploy('Staking', {
		contract: 'Staking',
		from: deployer,
		log: true,
		args: [
			REQ.address, //address _REQT,
			sREQ.address, // address _sREQT,
			gREQ.address,
			10000,// uint256 _epochLength,
			1,// uint256 _firstEpochNumber,
			0, // uint256 _firstEpochBlock
			authority.address
		],
	});
	console.log("init sreq")

	await sReqtContract.initialize(staking.address)

	const pairContract = await ethers.getContractAt('RequiemWeightedPair', pairREQT_DAI);

	const treasuryFactory = await ethers.getContractFactory('Treasury');

	const treasury = await treasuryFactory.deploy(
		REQ.address, // address _req,
		0, // uint256 _timelock,
		authority.address // address _authority
	);


	const bondingDepository = await deploy('BondDepository', {
		contract: 'BondDepository',
		from: deployer,
		log: true,
		args: [
			authority.address, // IAuthority _authority,
			REQ.address, // IERC20 _req,
			gREQ.address, // IgREQ _greq,
			staking.address, // IStaking _staking,
			treasury.address// ITreasury _treasury
		],
	});

	console.log('set treasury as vault')
	await reqtContract.setMinter(treasury.address, ethers.constants.MaxInt256)

	const depositoryContract = await ethers.getContractAt('BondDepository', bondingDepository.address);
	const treasuryContract = await ethers.getContractAt('Treasury', treasury.address);

	console.log("connect to pair")

	await pairContract.connect(deployer)

	const lpBalante = await pairContract.balanceOf(deployer)
	console.log("approve spending of treasury")
	await pairContract.approve(treasuryContract.address, ethers.constants.MaxInt256)

	console.log("approve spending of Depository")
	await pairContract.approve(bondingDepository.address, ethers.constants.MaxInt256)
	await reqtContract.approve(bondingDepository.address, ethers.constants.MaxInt256)

	// enum according to the contract
	enum STATUS {
		RESERVEDEPOSITOR,
		RESERVESPENDER,
		RESERVETOKEN,
		RESERVEMANAGER,
		LIQUIDITYDEPOSITOR,
		LIQUIDITYTOKEN,
		LIQUIDITYMANAGER,
		RESERVEDEBTOR,
		REWARDMANAGER,
		SREQ,
		REQDEBTOR
	}

	console.log("connect to treasury")
	await treasuryContract.connect(deployer)

	console.log("init Treasury")
	await treasuryContract.initialize()

	console.log("queueTimelock depositor")
	await treasuryContract.queueTimelock(
		STATUS.LIQUIDITYDEPOSITOR, // STATUS _managing,
		deployer, // address _address,
		bondingCalculatorAddress// address _calculator
	)
	await treasuryContract.execute(0)


	console.log("queueTimelock token")
	const togToken = await treasuryContract.queueTimelock(
		STATUS.LIQUIDITYTOKEN, // STATUS _managing,
		pairREQT_DAI, // address _address,
		bondingCalculatorAddress// address _calculator
	)
	await treasuryContract.execute(1)

	console.log("queueTimelock deposoitorC")
	await treasuryContract.queueTimelock(
		STATUS.LIQUIDITYDEPOSITOR, // STATUS _managing,
		bondingDepository.address, // address _address,
		bondingCalculatorAddress// address _calculator
	)
	await treasuryContract.execute(2)

	console.log("queueTimelock spender")
	await treasuryContract.queueTimelock(
		STATUS.RESERVESPENDER, // STATUS _managing,
		bondingDepository.address, // address _address,
		bondingCalculatorAddress// address _calculator
	)
	await treasuryContract.execute(3)

	console.log("queueTimelock rewardmanager")
	await treasuryContract.queueTimelock(
		STATUS.REWARDMANAGER, // STATUS _managing,
		bondingDepository.address, // address _address,
		bondingCalculatorAddress// address _calculator
	)
	await treasuryContract.execute(4)

	console.log("queueTimelock reserveToken")
	await treasuryContract.queueTimelock(
		STATUS.RESERVETOKEN, // STATUS _managing,
		reqtContract.address, // address _address,
		bondingCalculatorAddress// address _calculator
	)
	await treasuryContract.execute(5)


	console.log("queueTimelock reserveToken g")

	await treasuryContract.queueTimelock(
		STATUS.RESERVETOKEN, // STATUS _managing,
		gReqtContract.address, // address _address,
		bondingCalculatorAddress// address _calculator
	)
	await treasuryContract.execute(6)

	console.log("queueTimelock sreq")
	await treasuryContract.queueTimelock(
		STATUS.SREQ, // STATUS _managing,
		sREQ.address, // address _address,
		bondingCalculatorAddress// address _calculator
	)
	await treasuryContract.execute(7)

	await reqtContract.mint(treasury.address, '1000000000000000000000000')
	// await gReqtContract.mint(treasury.address, '1000000000000000000000000')

	await treasury.auditReserves()

	const bc2 = await treasuryContract.bondCalculator(pairREQT_DAI)
	console.log("is bc after toggle", bc2)


	const bn2 = await ethers.provider.getBlockNumber()
	console.log("block number", bn2)


	const capacity = BigNumber.from('500000').mul(ONEE18);
	const initialPrice = BigNumber.from('4').mul(ONEE18);
	const buffer = 2e5;

	const vesting = 100000;
	const timeToConclusion = 60 * 60 * 24;

	const depositInterval = 60 * 60 * 30;
	const tuneInterval = 60 * 60;

	const refReward = 10;
	const daoReward = 50;

	var bid = 0;
	const block = await ethers.provider.getBlock("latest");
	const conclusion = block.timestamp + timeToConclusion;

	const mP = capacity.mul(BigNumber.from(depositInterval)).div(BigNumber.from(timeToConclusion))
	console.log("TD1", capacity.mul(ONEE18.mul(ONEE18)).div(initialPrice).div(ONEE18).toString())
	console.log("TD2", capacity.toString())
	console.log("MP", mP.toString())
	await depositoryContract.setRewards(refReward, daoReward);

	/**
	 * @notice             creates a new market type
	 * @dev                current price should be in 9 decimals.
	 * @param _quoteToken  token used to deposit
	 * @param _market      [capacity (in REQ or quote), initial price / REQ (x decimals), debt buffer (3 decimals)]
	 * @param _booleans    [capacity in quote, fixed term]
	 * @param _terms       [vesting length (if fixed term) or vested timestamp, conclusion timestamp]
	 * @param _intervals   [deposit interval (seconds), tune interval (seconds)]
	 * @return id_         ID of new bond market
	 */

	const _quoteToken = pairREQT_DAI

	await depositoryContract.create(
		_quoteToken, // IERC20 _quoteToken,
		[capacity, initialPrice, buffer],
		[false, true],
		[vesting, conclusion],
		[depositInterval, tuneInterval]
	)

	const mD = await depositoryContract.metadata(0)
	const dR = await depositoryContract.debtRatio(0)
	const cD = await depositoryContract.currentDebt(0)
	const bS = await treasuryContract.baseSupply()
	const tD = await treasuryContract.totalDebt()
	const tR = await treasuryContract.totalReserves()
	const terms = await depositoryContract.terms(0)
	const cV = await depositoryContract.currentControlVariable(0)
	const excessRes = await treasury.excessReserves()
	const tS = await reqtContract.totalSupply()

	console.log("metaData", mD)
	console.log("debtRatio", dR.toString())
	console.log("currentDebt", cD.toString())
	console.log("baseSupply", bS.toString())
	console.log("totalDebt", tD.toString())
	console.log("totalReserves", tR.toString())
	console.log("totalSupply", tS.toString())
	console.log("terms", terms)
	console.log("CVariable", terms.controlVariable.toString())
	console.log("CVariable Current", cV.toString())
	console.log("excess Reserves", excessRes.toString())

	const bp = await depositoryContract.marketPrice(
		0
	)
	console.log("bond price", bp.toString())
	console.log("bond price manual", cV.mul(dR).div(BigNumber.from('1000000000000000000')).toString())

	const payoutInp = lpBalante.div(10)

	/**
	 * @notice             deposit quote tokens in exchange for a bond from a specified market
	 * @param _id          the ID of the market
	 * @param _amount      the amount of quote token to spend
	 * @param _maxPrice    the maximum price at which to buy
	 * @param _user        the recipient of the payout
	 * @param _referral    the front end operator address
	 * @return payout_     the amount of gREQ due
	 * @return expiry_     the timestamp at which payout is redeemable
	 * @return index_      the user index of the Note (used to redeem or query information)
	 */
	await depositoryContract.deposit(
		0, // uint256 _id,
		payoutInp, // uint256 _amount,
		BigNumber.from('9999999999999999999999999999999'), // uint256 _maxPrice,
		deployer, // address _user,
		deployer // address _referral
	)

	const mD1 = await depositoryContract.metadata(0)
	const dR1 = await depositoryContract.debtRatio(0)
	const cD1 = await depositoryContract.currentDebt(0)
	const bS1 = await treasuryContract.baseSupply()
	const tD1 = await treasuryContract.totalDebt()
	const tR1 = await treasuryContract.totalReserves()
	const terms1 = await depositoryContract.terms(0)
	const cV1 = await depositoryContract.currentControlVariable(0)
	const excessRes1 = await treasury.excessReserves()
	const tS1 = await reqtContract.totalSupply()

	console.log("metaData", mD1)
	console.log("debtRatio", dR1.toString())
	console.log("currentDebt", cD1.toString())
	console.log("baseSupply", bS1.toString())
	console.log("totalDebt", tD1.toString())
	console.log("totalReserves", tR1.toString())
	console.log("totalSupply", tS1.toString())
	console.log("terms", terms1)
	console.log("CVariable", terms1.controlVariable.toString())
	console.log("CVariable Current", cV1.toString())
	console.log("excess Reserves", excessRes1.toString())


	const bp1 = await depositoryContract.marketPrice(0)
	console.log("bond price", bp1.toString())
	console.log("bond price manual", cV1.mul(dR1).div(BigNumber.from('1000000000000000000')).toString())

};
export default func;
func.tags = ['bonding-depo-fuji'];
