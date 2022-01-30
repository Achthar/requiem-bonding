/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockERC20, MockERC20Interface } from "../MockERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
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
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
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
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000e4038038062000e408339810160408190526200003491620001f9565b82828282600390805190602001906200004f92919062000086565b5081516200006590600490602085019062000086565b506005805460ff191660ff9290921691909117905550620002bb9350505050565b82805462000094906200027e565b90600052602060002090601f016020900481019282620000b8576000855562000103565b82601f10620000d357805160ff191683800117855562000103565b8280016001018555821562000103579182015b8281111562000103578251825591602001919060010190620000e6565b506200011192915062000115565b5090565b5b8082111562000111576000815560010162000116565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200015457600080fd5b81516001600160401b03808211156200017157620001716200012c565b604051601f8301601f19908116603f011681019082821181831017156200019c576200019c6200012c565b81604052838152602092508683858801011115620001b957600080fd5b600091505b83821015620001dd5785820183015181830184015290820190620001be565b83821115620001ef5760008385830101525b9695505050505050565b6000806000606084860312156200020f57600080fd5b83516001600160401b03808211156200022757600080fd5b620002358783880162000142565b945060208601519150808211156200024c57600080fd5b506200025b8682870162000142565b925050604084015160ff811681146200027357600080fd5b809150509250925092565b600181811c908216806200029357607f821691505b60208210811415620002b557634e487b7160e01b600052602260045260246000fd5b50919050565b610b7580620002cb6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806340c10f191161008c5780639dc29fac116100665780639dc29fac146101a8578063a457c2d7146101bb578063a9059cbb146101ce578063dd62ed3e146101e157600080fd5b806340c10f191461016257806370a082311461017757806395d89b41146101a057600080fd5b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461011557806323b872dd14610127578063313ce5671461013a578063395093511461014f575b600080fd5b6100dc61021a565b6040516100e99190610993565b60405180910390f35b610105610100366004610a04565b6102ac565b60405190151581526020016100e9565b6002545b6040519081526020016100e9565b610105610135366004610a2e565b6102c2565b60055460405160ff90911681526020016100e9565b61010561015d366004610a04565b610371565b610175610170366004610a04565b6103ad565b005b610119610185366004610a6a565b6001600160a01b031660009081526020819052604090205490565b6100dc6103bb565b6101756101b6366004610a04565b6103ca565b6101056101c9366004610a04565b6103d4565b6101056101dc366004610a04565b61046d565b6101196101ef366004610a8c565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461022990610abf565b80601f016020809104026020016040519081016040528092919081815260200182805461025590610abf565b80156102a25780601f10610277576101008083540402835291602001916102a2565b820191906000526020600020905b81548152906001019060200180831161028557829003601f168201915b5050505050905090565b60006102b933848461047a565b50600192915050565b60006102cf84848461059f565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156103595760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b610366853385840361047a565b506001949350505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916102b99185906103a8908690610b10565b61047a565b6103b7828261076e565b5050565b60606004805461022990610abf565b6103b7828261084d565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156104565760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610350565b610463338585840361047a565b5060019392505050565b60006102b933848461059f565b6001600160a01b0383166104dc5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610350565b6001600160a01b03821661053d5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610350565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383166106035760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610350565b6001600160a01b0382166106655760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610350565b6001600160a01b038316600090815260208190526040902054818110156106dd5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610350565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610714908490610b10565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161076091815260200190565b60405180910390a350505050565b6001600160a01b0382166107c45760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610350565b80600260008282546107d69190610b10565b90915550506001600160a01b03821660009081526020819052604081208054839290610803908490610b10565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b0382166108ad5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610350565b6001600160a01b038216600090815260208190526040902054818110156109215760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610350565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610950908490610b28565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610592565b600060208083528351808285015260005b818110156109c0578581018301518582016040015282016109a4565b818111156109d2576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146109ff57600080fd5b919050565b60008060408385031215610a1757600080fd5b610a20836109e8565b946020939093013593505050565b600080600060608486031215610a4357600080fd5b610a4c846109e8565b9250610a5a602085016109e8565b9150604084013590509250925092565b600060208284031215610a7c57600080fd5b610a85826109e8565b9392505050565b60008060408385031215610a9f57600080fd5b610aa8836109e8565b9150610ab6602084016109e8565b90509250929050565b600181811c90821680610ad357607f821691505b60208210811415610af457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610b2357610b23610afa565b500190565b600082821015610b3a57610b3a610afa565b50039056fea26469706673582212202e6e92beae70060545c1564ee55e07e90cfdb5ec75a65a363cf327b411ba04fb64736f6c634300080b0033";

export class MockERC20__factory extends ContractFactory {
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
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockERC20> {
    return super.deploy(
      _name,
      _symbol,
      _decimals,
      overrides || {}
    ) as Promise<MockERC20>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _decimals,
      overrides || {}
    );
  }
  attach(address: string): MockERC20 {
    return super.attach(address) as MockERC20;
  }
  connect(signer: Signer): MockERC20__factory {
    return super.connect(signer) as MockERC20__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockERC20Interface {
    return new utils.Interface(_abi) as MockERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockERC20 {
    return new Contract(address, _abi, signerOrProvider) as MockERC20;
  }
}
