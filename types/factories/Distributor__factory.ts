/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Distributor, DistributorInterface } from "../Distributor";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_treasury",
        type: "address",
      },
      {
        internalType: "address",
        name: "_req",
        type: "address",
      },
      {
        internalType: "address",
        name: "_staking",
        type: "address",
      },
      {
        internalType: "address",
        name: "_authority",
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
        indexed: true,
        internalType: "contract IAuthority",
        name: "authority",
        type: "address",
      },
    ],
    name: "AuthorityUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_rewardRate",
        type: "uint256",
      },
    ],
    name: "addRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "adjustments",
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
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "authority",
    outputs: [
      {
        internalType: "contract IAuthority",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bounty",
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
    name: "distribute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "info",
    outputs: [
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rate",
        type: "uint256",
      },
    ],
    name: "nextRewardAt",
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
        name: "_recipient",
        type: "address",
      },
    ],
    name: "nextRewardFor",
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
        name: "_index",
        type: "uint256",
      },
    ],
    name: "removeRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "retrieveBounty",
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
        name: "_index",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_add",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_rate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_target",
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
        internalType: "contract IAuthority",
        name: "_newAuthority",
        type: "address",
      },
    ],
    name: "setAuthority",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_bounty",
        type: "uint256",
      },
    ],
    name: "setBounty",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x610140604052600c6101008190526b15539055551213d49256915160a21b610120908152620000329160009190620001d7565b50620f424060e0523480156200004757600080fd5b50604051620018ad380380620018ad8339810160408190526200006a916200029a565b600180546001600160a01b0319166001600160a01b0383169081179091556040518291907f2f658b440c35314f52658ea8a740e05b284cdc84dc9ae01e891f21b8933e7cad90600090a2506001600160a01b038416620001115760405162461bcd60e51b815260206004820152601660248201527f5a65726f20616464726573733a2054726561737572790000000000000000000060448201526064015b60405180910390fd5b6001600160a01b0380851660a0528316620001635760405162461bcd60e51b81526020600482015260116024820152705a65726f20616464726573733a2052455160781b604482015260640162000108565b6001600160a01b038084166080528216620001c15760405162461bcd60e51b815260206004820152601560248201527f5a65726f20616464726573733a205374616b696e670000000000000000000000604482015260640162000108565b506001600160a01b031660c05250620003349050565b828054620001e590620002f7565b90600052602060002090601f01602090048101928262000209576000855562000254565b82601f106200022457805160ff191683800117855562000254565b8280016001018555821562000254579182015b828111156200025457825182559160200191906001019062000237565b506200026292915062000266565b5090565b5b8082111562000262576000815560010162000267565b80516001600160a01b03811681146200029557600080fd5b919050565b60008060008060808587031215620002b157600080fd5b620002bc856200027d565b9350620002cc602086016200027d565b9250620002dc604086016200027d565b9150620002ec606086016200027d565b905092959194509250565b600181811c908216806200030c57607f821691505b602082108114156200032e57634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160e0516115236200038a60003960008181610ae00152610f68015260008181610ba701528181610d430152610dee015260008181610c3f0152610dc101526000610b0201526115236000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063943dfef11161008c578063c9fa8b2a11610066578063c9fa8b2a146101fd578063e4fc6b6d14610210578063e7187e8a14610218578063f79822431461022057600080fd5b8063943dfef114610178578063bc3b2b1214610181578063bf7e214f146101d257600080fd5b80632e340599146100d457806336d33f44146101095780635d87d3631461012a5780635db854b01461013f5780637a9e5e4b146101525780638e69e25514610165575b600080fd5b6100e76100e2366004611256565b610233565b604080519283526001600160a01b039091166020830152015b60405180910390f35b61011c610117366004611284565b61026a565b604051908152602001610100565b61013d610138366004611256565b61030d565b005b61013d61014d3660046112a8565b610406565b61013d610160366004611284565b6107b6565b61013d610173366004611256565b6108ac565b61011c60035481565b6101b561018f366004611256565b600260208190526000918252604090912080546001820154919092015460ff9092169183565b604080519315158452602084019290925290820152606001610100565b6001546101e5906001600160a01b031681565b6040516001600160a01b039091168152602001610100565b61011c61020b366004611256565b610adc565b61013d610b9c565b61011c610d36565b61013d61022e3660046112ea565b610e64565b6004818154811061024357600080fd5b6000918252602090912060029091020180546001909101549091506001600160a01b031682565b60008060005b60045481101561030657836001600160a01b03166004828154811061029757610297611316565b60009182526020909120600160029092020101546001600160a01b031614156102f4576102e7600482815481106102d0576102d0611316565b906000526020600020906002020160000154610adc565b6102f19083611342565b91505b806102fe8161135a565b915050610270565b5092915050565b600160009054906101000a90046001600160a01b03166001600160a01b0316630c340a246040518163ffffffff1660e01b8152600401602060405180830381865afa158015610360573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103849190611375565b6001600160a01b0316336001600160a01b0316146000906103c15760405162461bcd60e51b81526004016103b89190611392565b60405180910390fd5b5063773594008111156104015760405162461bcd60e51b81526020600482015260086024820152670a8dede40daeac6d60c31b60448201526064016103b8565b600355565b600160009054906101000a90046001600160a01b03166001600160a01b0316630c340a246040518163ffffffff1660e01b8152600401602060405180830381865afa158015610459573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061047d9190611375565b6001600160a01b0316336001600160a01b031614806105235750600160009054906101000a90046001600160a01b03166001600160a01b031663452a93206040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061050e9190611375565b6001600160a01b0316336001600160a01b0316145b61053f5760405162461bcd60e51b81526004016103b89061143a565b60006001600160a01b03166004858154811061055d5761055d611316565b60009182526020909120600160029092020101546001600160a01b031614156105c35760405162461bcd60e51b8152602060048201526018602482015277149958da5c1a595b9d08191bd95cc81b9bdd08195e1a5cdd60421b60448201526064016103b8565b600160009054906101000a90046001600160a01b03166001600160a01b031663452a93206040518163ffffffff1660e01b8152600401602060405180830381865afa158015610616573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063a9190611375565b6001600160a01b0316336001600160a01b031614156106e0576103e86004858154811061066957610669611316565b9060005260206000209060020201600001546019610687919061147c565b610691919061149b565b8211156106e05760405162461bcd60e51b815260206004820152601f60248201527f4c696d697465723a2063616e6e6f742061646a757374206279203e322e35250060448201526064016103b8565b8261077157600484815481106106f8576106f8611316565b9060005260206000209060020201600001548211156107715760405162461bcd60e51b815260206004820152602f60248201527f43616e6e6f742064656372656173652072617465206279206d6f72652074686160448201526e6e20697420616c726561647920697360881b60648201526084016103b8565b6040805160608101825293151584526020808501938452848201928352600095865260029081905294209251835460ff19169015151783559051600183015551910155565b600160009054906101000a90046001600160a01b03166001600160a01b0316630c340a246040518163ffffffff1660e01b8152600401602060405180830381865afa158015610809573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061082d9190611375565b6001600160a01b0316336001600160a01b0316146000906108615760405162461bcd60e51b81526004016103b89190611392565b50600180546001600160a01b0319166001600160a01b0383169081179091556040517f2f658b440c35314f52658ea8a740e05b284cdc84dc9ae01e891f21b8933e7cad90600090a250565b600160009054906101000a90046001600160a01b03166001600160a01b0316630c340a246040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108ff573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109239190611375565b6001600160a01b0316336001600160a01b031614806109c95750600160009054906101000a90046001600160a01b03166001600160a01b031663452a93206040518163ffffffff1660e01b8152600401602060405180830381865afa158015610990573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109b49190611375565b6001600160a01b0316336001600160a01b0316145b6109e55760405162461bcd60e51b81526004016103b89061143a565b60006001600160a01b031660048281548110610a0357610a03611316565b60009182526020909120600160029092020101546001600160a01b03161415610a695760405162461bcd60e51b8152602060048201526018602482015277149958da5c1a595b9d08191bd95cc81b9bdd08195e1a5cdd60421b60448201526064016103b8565b600060048281548110610a7e57610a7e611316565b906000526020600020906002020160010160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550600060048281548110610ac857610ac8611316565b600091825260209091206002909102015550565b60007f0000000000000000000000000000000000000000000000000000000000000000827f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b5e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b8291906114bd565b610b8c919061147c565b610b96919061149b565b92915050565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610c035760405162461bcd60e51b815260206004820152600c60248201526b4f6e6c79207374616b696e6760a01b60448201526064016103b8565b60005b600454811015610d3357600060048281548110610c2557610c25611316565b9060005260206000209060020201600001541115610d21577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166340c10f1960048381548110610c7f57610c7f611316565b906000526020600020906002020160010160009054906101000a90046001600160a01b0316610cba600485815481106102d0576102d0611316565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b158015610d0057600080fd5b505af1158015610d14573d6000803e3d6000fd5b50505050610d218161106b565b80610d2b8161135a565b915050610c06565b50565b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610d9f5760405162461bcd60e51b815260206004820152600c60248201526b4f6e6c79207374616b696e6760a01b60448201526064016103b8565b60035415610e5d576003546040516340c10f1960e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016916340c10f1991610e2a917f0000000000000000000000000000000000000000000000000000000000000000916004016001600160a01b03929092168252602082015260400190565b600060405180830381600087803b158015610e4457600080fd5b505af1158015610e58573d6000803e3d6000fd5b505050505b5060035490565b600160009054906101000a90046001600160a01b03166001600160a01b0316630c340a246040518163ffffffff1660e01b8152600401602060405180830381865afa158015610eb7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610edb9190611375565b6001600160a01b0316336001600160a01b031614600090610f0f5760405162461bcd60e51b81526004016103b89190611392565b506001600160a01b038216610f665760405162461bcd60e51b815260206004820152601760248201527f5a65726f20616464726573733a20526563697069656e7400000000000000000060448201526064016103b8565b7f0000000000000000000000000000000000000000000000000000000000000000811115610fd65760405162461bcd60e51b815260206004820152601e60248201527f526174652063616e6e6f74206578636565642064656e6f6d696e61746f72000060448201526064016103b8565b604080518082019091529081526001600160a01b03918216602082019081526004805460018101825560009190915291517f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b600290930292830155517f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19c90910180546001600160a01b03191691909216179055565b6000818152600260208181526040928390208351606081018552815460ff1615158152600182015492810183905292015492820192909252901561115c57805115611160578060200151600483815481106110c8576110c8611316565b906000526020600020906002020160000160008282546110e89190611342565b90915550506040810151600480548490811061110657611106611316565b9060005260206000209060020201600001541061115c5760008281526002602052604080822060010191909155810151600480548490811061114a5761114a611316565b60009182526020909120600290910201555b5050565b80602001516004838154811061117857611178611316565b90600052602060002090600202016000015411156111d3578060200151600483815481106111a8576111a8611316565b906000526020600020906002020160000160008282546111c891906114d6565b909155506111fa9050565b6000600483815481106111e8576111e8611316565b60009182526020909120600290910201555b80604001516004838154811061121257611212611316565b9060005260206000209060020201600001541161115c5760008281526002602052604080822060010191909155810151600480548490811061114a5761114a611316565b60006020828403121561126857600080fd5b5035919050565b6001600160a01b0381168114610d3357600080fd5b60006020828403121561129657600080fd5b81356112a18161126f565b9392505050565b600080600080608085870312156112be57600080fd5b84359350602085013580151581146112d557600080fd5b93969395505050506040820135916060013590565b600080604083850312156112fd57600080fd5b82356113088161126f565b946020939093013593505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082198211156113555761135561132c565b500190565b600060001982141561136e5761136e61132c565b5060010190565b60006020828403121561138757600080fd5b81516112a18161126f565b600060208083526000845481600182811c9150808316806113b457607f831692505b8583108114156113d257634e487b7160e01b85526022600452602485fd5b8786018381526020018180156113ef57600181146114005761142b565b60ff1986168252878201965061142b565b60008b81526020902060005b868110156114255781548482015290850190890161140c565b83019750505b50949998505050505050505050565b60208082526022908201527f43616c6c6572206973206e6f7420676f7665726e6f72206f722067756172646960408201526130b760f11b606082015260800190565b60008160001904831182151516156114965761149661132c565b500290565b6000826114b857634e487b7160e01b600052601260045260246000fd5b500490565b6000602082840312156114cf57600080fd5b5051919050565b6000828210156114e8576114e861132c565b50039056fea2646970667358221220192a51cd9fbe91780245c76535cb579f2d3c7f7aaaf54028929c366a43614ea864736f6c634300080b0033";

export class Distributor__factory extends ContractFactory {
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
    _treasury: string,
    _req: string,
    _staking: string,
    _authority: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Distributor> {
    return super.deploy(
      _treasury,
      _req,
      _staking,
      _authority,
      overrides || {}
    ) as Promise<Distributor>;
  }
  getDeployTransaction(
    _treasury: string,
    _req: string,
    _staking: string,
    _authority: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _treasury,
      _req,
      _staking,
      _authority,
      overrides || {}
    );
  }
  attach(address: string): Distributor {
    return super.attach(address) as Distributor;
  }
  connect(signer: Signer): Distributor__factory {
    return super.connect(signer) as Distributor__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DistributorInterface {
    return new utils.Interface(_abi) as DistributorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Distributor {
    return new Contract(address, _abi, signerOrProvider) as Distributor;
  }
}