/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { VaultOwned, VaultOwnedInterface } from "../VaultOwned";

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
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "vault_",
        type: "address",
      },
    ],
    name: "setVault",
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
        name: "newOwner_",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vault",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b0319163390811782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a36103278061005f6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80636817031b1461005c578063715018a6146100845780638da5cb5b1461008e578063f2fde38b146100b3578063fbfa77cf146100c6575b600080fd5b61006f61006a36600461028c565b6100d7565b60405190151581526020015b60405180910390f35b61008c61012e565b005b6000546001600160a01b03165b6040516001600160a01b03909116815260200161007b565b61008c6100c136600461028c565b6101a2565b6001546001600160a01b031661009b565b600080546001600160a01b0316331461010b5760405162461bcd60e51b8152600401610102906102bc565b60405180910390fd5b50600180546001600160a01b0383166001600160a01b0319909116178155919050565b6000546001600160a01b031633146101585760405162461bcd60e51b8152600401610102906102bc565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031633146101cc5760405162461bcd60e51b8152600401610102906102bc565b6001600160a01b0381166102315760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610102565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b60006020828403121561029e57600080fd5b81356001600160a01b03811681146102b557600080fd5b9392505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260408201526060019056fea264697066735822122030cc8b488776617bb677f0b0da7d0a901eb8fed84adcf8833843736dd1a877b064736f6c634300080b0033";

export class VaultOwned__factory extends ContractFactory {
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
  ): Promise<VaultOwned> {
    return super.deploy(overrides || {}) as Promise<VaultOwned>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): VaultOwned {
    return super.attach(address) as VaultOwned;
  }
  connect(signer: Signer): VaultOwned__factory {
    return super.connect(signer) as VaultOwned__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VaultOwnedInterface {
    return new utils.Interface(_abi) as VaultOwnedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VaultOwned {
    return new Contract(address, _abi, signerOrProvider) as VaultOwned;
  }
}