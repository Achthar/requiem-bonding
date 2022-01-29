/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Guardable, GuardableInterface } from "../Guardable";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousGuardian",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newGuardian",
        type: "address",
      },
    ],
    name: "GuardianPulled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousGuardian",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newGuardian",
        type: "address",
      },
    ],
    name: "GuardianPushed",
    type: "event",
  },
  {
    inputs: [],
    name: "guardian",
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
    name: "pullGuardian",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newGuardian_",
        type: "address",
      },
    ],
    name: "pushGuardian",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceGuardian",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b0319163390811782556040519091907f0960fb9900fb8096216606c4f7fc2fce5d08cc0c82da55cec8619b66b5238481908290a361031c8061005f6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063452a932014610051578063a987f55a14610070578063be11f1dd14610085578063e9946f6c1461008d575b600080fd5b600054604080516001600160a01b039092168252519081900360200190f35b61008361007e366004610271565b610095565b005b610083610123565b6100836101f1565b6000546001600160a01b031633146100c85760405162461bcd60e51b81526004016100bf906102a1565b60405180910390fd5b600080546040516001600160a01b03808516939216917f1319a4636487e78c9c7018006e23fb80010cef0c7a0588a5b4612ca630b429aa91a3600180546001600160a01b0319166001600160a01b0392909216919091179055565b6001546001600160a01b0316331461018d5760405162461bcd60e51b815260206004820152602760248201527f477561726461626c653a206d757374206265206e657720677561726469616e206044820152661d1bc81c1d5b1b60ca1b60648201526084016100bf565b600154600080546040516001600160a01b0393841693909116917f0960fb9900fb8096216606c4f7fc2fce5d08cc0c82da55cec8619b66b523848191a360018054600080546001600160a01b03199081166001600160a01b03841617909155169055565b6000546001600160a01b0316331461021b5760405162461bcd60e51b81526004016100bf906102a1565b600080546040516001600160a01b03909116907f0960fb9900fb8096216606c4f7fc2fce5d08cc0c82da55cec8619b66b5238481908390a3600080546001600160a01b0319908116909155600180549091169055565b60006020828403121561028357600080fd5b81356001600160a01b038116811461029a57600080fd5b9392505050565b60208082526025908201527f477561726461626c653a2063616c6c6572206973206e6f742074686520677561604082015264393234b0b760d91b60608201526080019056fea264697066735822122056fc25a5124ddd4a022c2de7ac752498e47d55bd27aa09690ac76d95ed6ddd9264736f6c634300080b0033";

export class Guardable__factory extends ContractFactory {
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
  ): Promise<Guardable> {
    return super.deploy(overrides || {}) as Promise<Guardable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Guardable {
    return super.attach(address) as Guardable;
  }
  connect(signer: Signer): Guardable__factory {
    return super.connect(signer) as Guardable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GuardableInterface {
    return new utils.Interface(_abi) as GuardableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Guardable {
    return new Contract(address, _abi, signerOrProvider) as Guardable;
  }
}
