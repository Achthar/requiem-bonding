/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RedeemHelper, RedeemHelperInterface } from "../RedeemHelper";

const _abi = [
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
    inputs: [
      {
        internalType: "address",
        name: "_bond",
        type: "address",
      },
    ],
    name: "addBondContract",
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
    name: "bonds",
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
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_stake",
        type: "bool",
      },
    ],
    name: "redeemAll",
    outputs: [],
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
    ],
    name: "removeBondContract",
    outputs: [],
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b0319163390811782556040519091907fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba908290a36107568061005f6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c806346f68ee91161005b57806346f68ee9146100e65780635a96ac0a146100f95780635f1c17c014610101578063b1e59ab71461011457600080fd5b80630505c8c91461008d578063089208d8146100b65780630a6d1860146100c057806346aed74e146100d3575b600080fd5b6000546001600160a01b03165b6040516001600160a01b03909116815260200160405180910390f35b6100be610127565b005b6100be6100ce36600461061c565b6101a4565b6100be6100e136600461063e565b610233565b6100be6100f436600461061c565b6103b6565b6100be6104a0565b61009a61010f36600461067a565b610566565b6100be61012236600461067a565b610590565b6000546001600160a01b0316331461015a5760405162461bcd60e51b815260040161015190610693565b60405180910390fd5b600080546040516001600160a01b03909116907fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba908390a3600080546001600160a01b0319169055565b6000546001600160a01b031633146101ce5760405162461bcd60e51b815260040161015190610693565b6001600160a01b0381166101e157600080fd5b600280546001810182556000919091527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0180546001600160a01b0319166001600160a01b0392909216919091179055565b60005b6002548110156103b15760006001600160a01b03166002828154811061025e5761025e6106c8565b6000918252602090912001546001600160a01b03161461039f5760006002828154811061028d5761028d6106c8565b600091825260209091200154604051623711dd60e31b81526001600160a01b038681166004830152909116906301b88ee890602401602060405180830381865afa1580156102df573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061030391906106de565b111561039f576002818154811061031c5761031c6106c8565b600091825260209091200154604051631feed31f60e01b81526001600160a01b038581166004830152841515602483015290911690631feed31f906044016020604051808303816000875af1158015610379573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061039d91906106de565b505b806103a9816106f7565b915050610236565b505050565b6000546001600160a01b031633146103e05760405162461bcd60e51b815260040161015190610693565b6001600160a01b0381166104455760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610151565b600080546040516001600160a01b03808516939216917fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba91a3600180546001600160a01b0319166001600160a01b0392909216919091179055565b6001546001600160a01b031633146105055760405162461bcd60e51b815260206004820152602260248201527f4f776e61626c653a206d757374206265206e6577206f776e657220746f2070756044820152611b1b60f21b6064820152608401610151565b600154600080546040516001600160a01b0393841693909116917faa151555690c956fc3ea32f106bb9f119b5237a061eaa8557cff3e51e3792c8d91a3600154600080546001600160a01b0319166001600160a01b03909216919091179055565b6002818154811061057657600080fd5b6000918252602090912001546001600160a01b0316905081565b6000546001600160a01b031633146105ba5760405162461bcd60e51b815260040161015190610693565b6000600282815481106105cf576105cf6106c8565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555050565b80356001600160a01b038116811461061757600080fd5b919050565b60006020828403121561062e57600080fd5b61063782610600565b9392505050565b6000806040838503121561065157600080fd5b61065a83610600565b91506020830135801515811461066f57600080fd5b809150509250929050565b60006020828403121561068c57600080fd5b5035919050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b600052603260045260246000fd5b6000602082840312156106f057600080fd5b5051919050565b600060001982141561071957634e487b7160e01b600052601160045260246000fd5b506001019056fea264697066735822122052cc10bfa15a41e8c4050a46e3508535ffa1d807d87e21f9516d296954533e4d64736f6c634300080b0033";

export class RedeemHelper__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RedeemHelper> {
    return super.deploy(overrides || {}) as Promise<RedeemHelper>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): RedeemHelper {
    return super.attach(address) as RedeemHelper;
  }
  connect(signer: Signer): RedeemHelper__factory {
    return super.connect(signer) as RedeemHelper__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RedeemHelperInterface {
    return new utils.Interface(_abi) as RedeemHelperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RedeemHelper {
    return new Contract(address, _abi, signerOrProvider) as RedeemHelper;
  }
}
