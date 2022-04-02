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
  "0x608060405234801561001057600080fd5b50600080546001600160a01b0319163390811782556040519091907fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba908290a3610ab88061005f6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c806346f68ee91161005b57806346f68ee9146101005780635a96ac0a146101135780635f1c17c01461011b578063b1e59ab71461012e57600080fd5b80630505c8c91461008d578063089208d8146100d05780630a6d1860146100da57806346aed74e146100ed575b600080fd5b60005473ffffffffffffffffffffffffffffffffffffffff165b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100d8610141565b005b6100d86100e8366004610964565b610236565b6100d86100fb366004610986565b61034e565b6100d861010e366004610964565b610538565b6100d86106e9565b6100a76101293660046109c2565b610823565b6100d861013c3660046109c2565b61085a565b60005473ffffffffffffffffffffffffffffffffffffffff1633146101c7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff909116907fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba908390a3600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102b7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101be565b73ffffffffffffffffffffffffffffffffffffffff81166102d757600080fd5b600280546001810182556000919091527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60005b60025481101561053357600073ffffffffffffffffffffffffffffffffffffffff1660028281548110610386576103866109db565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1614610521576000600282815481106103c2576103c26109db565b6000918252602090912001546040517f01b88ee800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8681166004830152909116906301b88ee890602401602060405180830381865afa15801561043b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061045f9190610a0a565b11156105215760028181548110610478576104786109db565b6000918252602090912001546040517f1feed31f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152841515602483015290911690631feed31f906044016020604051808303816000875af11580156104fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061051f9190610a0a565b505b8061052b81610a23565b915050610351565b505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146105b9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101be565b73ffffffffffffffffffffffffffffffffffffffff811661065c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016101be565b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba91a3600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60015473ffffffffffffffffffffffffffffffffffffffff163314610790576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f4f776e61626c653a206d757374206265206e6577206f776e657220746f20707560448201527f6c6c00000000000000000000000000000000000000000000000000000000000060648201526084016101be565b6001546000805460405173ffffffffffffffffffffffffffffffffffffffff93841693909116917faa151555690c956fc3ea32f106bb9f119b5237a061eaa8557cff3e51e3792c8d91a3600154600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909216919091179055565b6002818154811061083357600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b60005473ffffffffffffffffffffffffffffffffffffffff1633146108db576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101be565b6000600282815481106108f0576108f06109db565b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461095f57600080fd5b919050565b60006020828403121561097657600080fd5b61097f8261093b565b9392505050565b6000806040838503121561099957600080fd5b6109a28361093b565b9150602083013580151581146109b757600080fd5b809150509250929050565b6000602082840312156109d457600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215610a1c57600080fd5b5051919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610a7b577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b506001019056fea2646970667358221220f755d764609d16504f97917eeb7c4e408a5fa2da5bb4098253bfc6556a699fb264736f6c634300080d0033";

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
