/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RequiemWETHBondDepository,
  RequiemWETHBondDepositoryInterface,
} from "../RequiemWETHBondDepository";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_REQT",
        type: "address",
      },
      {
        internalType: "address",
        name: "_principle",
        type: "address",
      },
      {
        internalType: "address",
        name: "_treasury",
        type: "address",
      },
      {
        internalType: "address",
        name: "_DAO",
        type: "address",
      },
      {
        internalType: "address",
        name: "_feed",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "deposit",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "payout",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "expires",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "priceInUSD",
        type: "uint256",
      },
    ],
    name: "BondCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "priceInUSD",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "internalPrice",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "debtRatio",
        type: "uint256",
      },
    ],
    name: "BondPriceChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "payout",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "remaining",
        type: "uint256",
      },
    ],
    name: "BondRedeemed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "initialBCV",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBCV",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "adjustment",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "addition",
        type: "bool",
      },
    ],
    name: "ControlVariableAdjustment",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipPulled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipPushed",
    type: "event",
  },
  {
    inputs: [],
    name: "DAO",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "REQT",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "adjustment",
    outputs: [
      {
        internalType: "bool",
        name: "add",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "target",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "buffer",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastBlock",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "assetPrice",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "bondInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "payout",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "vesting",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pricePaid",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bondPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "price_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bondPriceInUSD",
    outputs: [
      {
        internalType: "uint256",
        name: "price_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentDebt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "debtDecay",
    outputs: [
      {
        internalType: "uint256",
        name: "decay_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "debtRatio",
    outputs: [
      {
        internalType: "uint256",
        name: "debtRatio_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxPrice",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_depositor",
        type: "address",
      },
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_controlVariable",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_vestingTerm",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minimumPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxPayout",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxDebt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_initialDebt",
        type: "uint256",
      },
    ],
    name: "initializeBondTerms",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lastDecay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxPayout",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "payoutFor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_depositor",
        type: "address",
      },
    ],
    name: "pendingPayoutFor",
    outputs: [
      {
        internalType: "uint256",
        name: "pendingPayout_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_depositor",
        type: "address",
      },
    ],
    name: "percentVestedFor",
    outputs: [
      {
        internalType: "uint256",
        name: "percentVested_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "policy",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "principle",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pullManagement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner_",
        type: "address",
      },
    ],
    name: "pushManagement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "recoverLostToken",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_stake",
        type: "bool",
      },
    ],
    name: "redeem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceManagement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_addition",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_increment",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_target",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_buffer",
        type: "uint256",
      },
    ],
    name: "setAdjustment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum RequiemWETHBondDepository.PARAMETER",
        name: "_parameter",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_input",
        type: "uint256",
      },
    ],
    name: "setBondTerms",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_staking",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_helper",
        type: "bool",
      },
    ],
    name: "setStaking",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "staking",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stakingHelper",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "standardizedDebtRatio",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "terms",
    outputs: [
      {
        internalType: "uint256",
        name: "controlVariable",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "vestingTerm",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minimumPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxPayout",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxDebt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalDebt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "treasury",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "useHelper",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6101006040523480156200001257600080fd5b50604051620023a6380380620023a6833981016040819052620000359162000138565b600080546001600160a01b0319163390811782556040519091907fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba908290a36001600160a01b0385166200008857600080fd5b6001600160a01b038086166080528416620000a257600080fd5b6001600160a01b0380851660a0528316620000bc57600080fd5b6001600160a01b0380841660c0528216620000d657600080fd5b6001600160a01b0380831660e0528116620000f057600080fd5b600280546001600160a01b0319166001600160a01b039290921691909117905550620001a892505050565b80516001600160a01b03811681146200013357600080fd5b919050565b600080600080600060a086880312156200015157600080fd5b6200015c866200011b565b94506200016c602087016200011b565b93506200017c604087016200011b565b92506200018c606087016200011b565b91506200019c608087016200011b565b90509295509295909350565b60805160a05160c05160e0516121696200023d6000396000818161042701526112c601526000818161039c01528181610ee801528181611020015261106101526000818161021001528181610eb601528181610ffd015261127001526000818161027501528181611231015281816113590152818161157b0152818161166f01528181611720015261182001526121696000f3fe608060405234801561001057600080fd5b50600436106102065760003560e01c80637927ebf81161011a578063cea55f57116100ad578063d7ccfb0b1161007c578063d7ccfb0b14610516578063e0176de81461051e578063e392a26214610526578063f5c2ab5b1461052e578063fc7b9c181461053757600080fd5b8063cea55f57146104b1578063d24378eb146104b9578063d4d863ce146104c1578063d5025625146104d457600080fd5b8063904b3ece116100e9578063904b3ece1461041a57806398fabd3a14610422578063b4abccba14610449578063cd1234b31461045c57600080fd5b80637927ebf8146103d95780637b261727146103ec578063844b5c7c146103ff5780638dbdbe6d1461040757600080fd5b80632f3f470a1161019d578063507930ec1161016c578063507930ec1461037c5780635a96ac0a1461038f57806361d027b314610397578063759076e5146103be57806377b81895146103c657600080fd5b80632f3f470a146102eb578063451ee4a11461030f57806346f68ee9146103565780634cf088d91461036957600080fd5b8063089208d8116101d9578063089208d8146102a85780631a3d0068146102b25780631e321a0f146102c55780631feed31f146102d857600080fd5b8063016a42841461020b57806301b88ee81461024f57806302bb41e5146102705780630505c8c914610297575b600080fd5b6102327f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b61026261025d366004611e2b565b610540565b604051908152602001610246565b6102327f000000000000000000000000000000000000000000000000000000000000000081565b6000546001600160a01b0316610232565b6102b061059a565b005b6102b06102c0366004611e54565b610617565b6102b06102d3366004611e8f565b6106ed565b6102626102e6366004611ebf565b61082b565b6004546102ff90600160a01b900460ff1681565b6040519015158152602001610246565b600a54600b54600c54600d54600e5461032c9460ff169392919085565b6040805195151586526020860194909452928401919091526060830152608082015260a001610246565b6102b0610364366004611e2b565b610a10565b600354610232906001600160a01b031681565b61026261038a366004611e2b565b610afa565b6102b0610b86565b6102327f000000000000000000000000000000000000000000000000000000000000000081565b610262610c4c565b600454610232906001600160a01b031681565b6102626103e7366004611ef6565b610c68565b6102b06103fa366004611f0f565b610c94565b610262610d65565b610262610415366004611f52565b610d8e565b610262611202565b6102327f000000000000000000000000000000000000000000000000000000000000000081565b6102ff610457366004611e2b565b61122d565b61049161046a366004611e2b565b600f6020526000908152604090208054600182015460028301546003909301549192909184565b604080519485526020850193909352918301526060820152608001610246565b610262611354565b610262611416565b6102b06104cf366004611ebf565b61149b565b6005546006546007546008546009546104ee949392919085565b604080519586526020860194909452928401919091526060830152608082015260a001610246565b610262611533565b61026261156d565b6102626115fb565b61026260115481565b61026260105481565b60008061054c83610afa565b6001600160a01b0384166000908152600f6020526040902054909150612710821061057957809250610593565b6127106105868383611f9d565b6105909190611fbc565b92505b5050919050565b6000546001600160a01b031633146105cd5760405162461bcd60e51b81526004016105c490611fde565b60405180910390fd5b600080546040516001600160a01b03909116907fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba908390a3600080546001600160a01b0319169055565b6000546001600160a01b031633146106415760405162461bcd60e51b81526004016105c490611fde565b6005546103e890610653906019611f9d565b61065d9190611fbc565b8311156106a25760405162461bcd60e51b8152602060048201526013602482015272496e6372656d656e7420746f6f206c6172676560681b60448201526064016105c4565b6040805160a0810182529415158086526020860185905290850183905260608501829052436080909501859052600a805460ff19169091179055600b92909255600c55600d55600e55565b6000546001600160a01b031633146107175760405162461bcd60e51b81526004016105c490611fde565b600082600281111561072b5761072b612013565b14156107955761271081101561078f5760405162461bcd60e51b8152602060048201526024808201527f56657374696e67206d757374206265206c6f6e676572207468616e20333620686044820152636f75727360e01b60648201526084016105c4565b60065550565b60018260028111156107a9576107a9612013565b1415610807576103e88111156108015760405162461bcd60e51b815260206004820181905260248201527f5061796f75742063616e6e6f742062652061626f766520312070657263656e7460448201526064016105c4565b60085550565b600282600281111561081b5761081b612013565b14156108275760098190555b5050565b6001600160a01b0382166000908152600f602090815260408083208151608081018352815481526001820154938101939093526002810154918301919091526003015460608201528161087d85610afa565b9050612710811061090f576001600160a01b0385166000818152600f60205260408082208281556001810183905560028101839055600301829055845190517f51c99f515c87b0d95ba97f616edd182e8f161c4932eac17c6fefe9dab58b77b1926108ef928252602082015260400190565b60405180910390a261090685858460000151611642565b92505050610a0a565b60006127108284600001516109249190611f9d565b61092e9190611fbc565b9050604051806080016040528082856000015161094b9190612029565b81526020018460400151436109609190612029565b856020015161096f9190612029565b8152436020808301919091526060868101516040938401526001600160a01b038a166000818152600f8452849020855180825586850151600183015586860151600283015595909201516003909201919091558251858152918201939093527f51c99f515c87b0d95ba97f616edd182e8f161c4932eac17c6fefe9dab58b77b1910160405180910390a2610a04868683611642565b93505050505b92915050565b6000546001600160a01b03163314610a3a5760405162461bcd60e51b81526004016105c490611fde565b6001600160a01b038116610a9f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016105c4565b600080546040516001600160a01b03808516939216917fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba91a3600180546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b0381166000908152600f6020908152604080832081516080810183528154815260018201549381019390935260028101549183018290526003015460608301528290610b4d9043612029565b60208301519091508015610b795780610b6883612710611f9d565b610b729190611fbc565b9350610b7e565b600093505b505050919050565b6001546001600160a01b03163314610beb5760405162461bcd60e51b815260206004820152602260248201527f4f776e61626c653a206d757374206265206e6577206f776e657220746f2070756044820152611b1b60f21b60648201526084016105c4565b600154600080546040516001600160a01b0393841693909116917faa151555690c956fc3ea32f106bb9f119b5237a061eaa8557cff3e51e3792c8d91a3600154600080546001600160a01b0319166001600160a01b03909216919091179055565b6000610c566115fb565b601054610c639190612029565b905090565b6000655af3107a4000610c8a610c8584610c80611533565b611910565b611a4b565b610a0a9190611fbc565b6000546001600160a01b03163314610cbe5760405162461bcd60e51b81526004016105c490611fde565b610cc6610c4c565b15610d1d5760405162461bcd60e51b815260206004820152602160248201527f44656274206d757374206265203020666f7220696e697469616c697a6174696f6044820152603760f91b60648201526084016105c4565b6040805160a081018252878152602081018790529081018590526060810184905260800182905260059590955560069390935560079190915560085560095560105543601155565b6000610d6f611416565b610d77611533565b610d819190611f9d565b610c6390620f4240611f9d565b60006001600160a01b038216610dd85760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b60448201526064016105c4565b610de0611a6b565b6009546010541115610e2b5760405162461bcd60e51b815260206004820152601460248201527313585e0818d85c1858da5d1e481c995858da195960621b60448201526064016105c4565b6000610e35610d65565b90506000610e41611a8f565b905080851015610e9f5760405162461bcd60e51b815260206004820152602360248201527f536c697070616765206c696d69743a206d6f7265207468616e206d617820707260448201526269636560e81b60648201526084016105c4565b604051630f762d4d60e11b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018890526000917f000000000000000000000000000000000000000000000000000000000000000090911690631eec5a9a90604401602060405180830381865afa158015610f31573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f559190612040565b90506000610f6282610c68565b905062989680811015610fa85760405162461bcd60e51b815260206004820152600e60248201526d109bdb99081d1bdbc81cdb585b1b60921b60448201526064016105c4565b610fb061156d565b811115610ff05760405162461bcd60e51b815260206004820152600e60248201526d426f6e6420746f6f206c6172676560901b60448201526064016105c4565b6110456001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016337f00000000000000000000000000000000000000000000000000000000000000008b611ad8565b6040516335106f4960e11b8152306004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636a20de9290604401600060405180830381600087803b1580156110ad57600080fd5b505af11580156110c1573d6000803e3d6000fd5b5050505081601060008282546110d79190612059565b9091555050604080516080810182526001600160a01b0388166000908152600f6020529190912054819061110c908490612059565b81526006805460208084019190915243604080850182905260609485018a90526001600160a01b038c166000908152600f845281902086518155928601516001840155850151600283015593909201516003909201919091555485916111729190612059565b827f1fec6dc81f140574bf43f6b1e420ae1dd47928b9d57db8cbd7b8611063b85ae58b6040516111a491815260200190565b60405180910390a46111b4611354565b6111bc611a8f565b6111c4610d65565b6040517f375b221f40939bfd8f49723a17cf7bc6d576ebf72efe2cc3e991826f5b3f390a90600090a46111f5611b49565b93505050505b9392505050565b60006305f5e100611211611416565b611219611354565b6112239190611f9d565b610c639190611fbc565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b0316141561126e57600080fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b031614156112ad57600080fd5b6040516370a0823160e01b815230600482015261134c907f0000000000000000000000000000000000000000000000000000000000000000906001600160a01b038516906370a0823190602401602060405180830381865afa158015611317573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061133b9190612040565b6001600160a01b0385169190611c3b565b506001919050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156113b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113d99190612040565b9050670de0b6b3a7640000611406610c856113f2610c4c565b61140090633b9aca00611f9d565b84611910565b6114109190611fbc565b91505090565b600080600260009054906101000a90046001600160a01b03166001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa15801561146c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611490919061208b565b509195945050505050565b6000546001600160a01b031633146114c55760405162461bcd60e51b81526004016105c490611fde565b6001600160a01b0382166114d857600080fd5b801561150557600480546001600160a01b0384166001600160a81b031990911617600160a01b1790555050565b6004805460ff60a01b19169055600380546001600160a01b0384166001600160a01b03199091161790555050565b6000620186a0611541611354565b60055461154e9190611f9d565b6115589190611fbc565b60075490915081101561156a57506007545b90565b6000620186a06005600301547f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156115d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112199190612040565b6000806011544361160c9190612029565b9050600560010154816010546116229190611f9d565b61162c9190611fbc565b915060105482111561163e5760105491505b5090565b6000826116e25760405163a9059cbb60e01b81526001600160a01b038581166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af11580156116b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116dc91906120db565b50611909565b600454600160a01b900460ff16156117f7576004805460405163095ea7b360e01b81526001600160a01b0391821692810192909252602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b3906044016020604051808303816000875af1158015611769573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061178d91906120db565b5060048054604051637acb775760e01b81529182018490526001600160a01b0386811660248401521690637acb775790604401600060405180830381600087803b1580156117da57600080fd5b505af11580156117ee573d6000803e3d6000fd5b50505050611909565b60035460405163095ea7b360e01b81526001600160a01b039182166004820152602481018490527f00000000000000000000000000000000000000000000000000000000000000009091169063095ea7b3906044016020604051808303816000875af115801561186b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061188f91906120db565b50600354604051637acb775760e01b8152600481018490526001600160a01b03868116602483015290911690637acb7757906044016020604051808303816000875af11580156118e3573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061190791906120db565b505b5092915050565b6040805160208101909152600081526000821161197e5760405162461bcd60e51b815260206004820152602660248201527f4669786564506f696e743a3a6672616374696f6e3a206469766973696f6e206260448201526579207a65726f60d01b60648201526084016105c4565b826119985750604080516020810190915260008152610a0a565b71ffffffffffffffffffffffffffffffffffff8311611a3a5760006119c183607086901b611fbc565b90506001600160e01b03811115611a1a5760405162461bcd60e51b815260206004820152601e60248201527f4669786564506f696e743a3a6672616374696f6e3a206f766572666c6f77000060448201526064016105c4565b6040518060200160405280826001600160e01b0316815250915050610a0a565b60006119c184600160701b85611c70565b8051600090610a0a906612725dd1d243ab906001600160e01b0316611fbc565b611a736115fb565b60106000828254611a849190612029565b909155505043601155565b6000620186a0611a9d611354565b600554611aaa9190611f9d565b611ab49190611fbc565b600754909150811015611ac8575060075490565b6007541561156a57600060075590565b6040516001600160a01b0380851660248301528316604482015260648101829052611b439085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611d1f565b50505050565b600d54600e54600091611b5b91612059565b600b5490915015801590611b6f5750804310155b15611c3857600554600a5460ff1615611bb257600b5460058054600090611b97908490612059565b9091555050600c5460055410611bad576000600b555b611bdd565b600b5460058054600090611bc7908490612029565b9091555050600c5460055411611bdd576000600b555b43600e55600554600b54600a5460408051858152602081019490945283019190915260ff16151560608201527fb923e581a0f83128e9e1d8297aa52b18d6744310476e0b54509c054cd7a93b2a9060800160405180910390a1505b50565b6040516001600160a01b038316602482015260448101829052611c6b90849063a9059cbb60e01b90606401611b0c565b505050565b600080806000198587098587029250828110838203039150508060001415611caa5760008411611c9f57600080fd5b5082900490506111fb565b808411611cb657600080fd5b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b600080836001600160a01b031683604051611d3a91906120f8565b6000604051808303816000865af19150503d8060008114611d77576040519150601f19603f3d011682016040523d82523d6000602084013e611d7c565b606091505b50915091506000821415611d94573d6000803e3d6000fd5b611b43815160001480611db6575081806020019051810190611db691906120db565b6101a2816108275762461bcd60e51b600090815260206004526007602452600a808304818104828106603090810160101b848706949093060160081b929092010166524551230000300160c81b60445261082791606490fd5b80356001600160a01b0381168114611e2657600080fd5b919050565b600060208284031215611e3d57600080fd5b6111fb82611e0f565b8015158114611c3857600080fd5b60008060008060808587031215611e6a57600080fd5b8435611e7581611e46565b966020860135965060408601359560600135945092505050565b60008060408385031215611ea257600080fd5b823560038110611eb157600080fd5b946020939093013593505050565b60008060408385031215611ed257600080fd5b611edb83611e0f565b91506020830135611eeb81611e46565b809150509250929050565b600060208284031215611f0857600080fd5b5035919050565b60008060008060008060c08789031215611f2857600080fd5b505084359660208601359650604086013595606081013595506080810135945060a0013592509050565b600080600060608486031215611f6757600080fd5b8335925060208401359150611f7e60408501611e0f565b90509250925092565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615611fb757611fb7611f87565b500290565b600082611fd957634e487b7160e01b600052601260045260246000fd5b500490565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b600052602160045260246000fd5b60008282101561203b5761203b611f87565b500390565b60006020828403121561205257600080fd5b5051919050565b6000821982111561206c5761206c611f87565b500190565b805169ffffffffffffffffffff81168114611e2657600080fd5b600080600080600060a086880312156120a357600080fd5b6120ac86612071565b94506020860151935060408601519250606086015191506120cf60808701612071565b90509295509295909350565b6000602082840312156120ed57600080fd5b81516111fb81611e46565b6000825160005b8181101561211957602081860181015185830152016120ff565b81811115612128576000828501525b50919091019291505056fea2646970667358221220e3b376f3739dd112fc143b96b05d648a668d55ffc331f01d1a261723494abfa264736f6c634300080b0033";

export class RequiemWETHBondDepository__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _REQT: string,
    _principle: string,
    _treasury: string,
    _DAO: string,
    _feed: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RequiemWETHBondDepository> {
    return super.deploy(
      _REQT,
      _principle,
      _treasury,
      _DAO,
      _feed,
      overrides || {}
    ) as Promise<RequiemWETHBondDepository>;
  }
  getDeployTransaction(
    _REQT: string,
    _principle: string,
    _treasury: string,
    _DAO: string,
    _feed: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _REQT,
      _principle,
      _treasury,
      _DAO,
      _feed,
      overrides || {}
    );
  }
  attach(address: string): RequiemWETHBondDepository {
    return super.attach(address) as RequiemWETHBondDepository;
  }
  connect(signer: Signer): RequiemWETHBondDepository__factory {
    return super.connect(signer) as RequiemWETHBondDepository__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RequiemWETHBondDepositoryInterface {
    return new utils.Interface(_abi) as RequiemWETHBondDepositoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RequiemWETHBondDepository {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RequiemWETHBondDepository;
  }
}
