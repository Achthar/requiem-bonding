/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { StakingHelper, StakingHelperInterface } from "../StakingHelper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_staking",
        type: "address",
      },
      {
        internalType: "address",
        name: "_REQT",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "stake",
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
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b5060405161049838038061049883398101604081905261002f91610089565b6001600160a01b03821661004257600080fd5b6001600160a01b03808316608052811661005b57600080fd5b6001600160a01b031660a052506100bc565b80516001600160a01b038116811461008457600080fd5b919050565b6000806040838503121561009c57600080fd5b6100a58361006d565b91506100b36020840161006d565b90509250929050565b60805160a05161039761010160003960008181604b0152818160e701526101a3015260008181608e015281816101740152818161022d01526102b801526103976000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806302bb41e5146100465780634cf088d914610089578063a694fc3a146100b0575b600080fd5b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200160405180910390f35b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b6100c36100be36600461031f565b6100c5565b005b6040516323b872dd60e01b8152336004820152306024820152604481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015610138573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061015c9190610338565b5060405163095ea7b360e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018390527f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b3906044016020604051808303816000875af11580156101ec573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102109190610338565b50604051637acb775760e01b8152600481018290523360248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690637acb7757906044016020604051808303816000875af115801561027e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102a29190610338565b50604051630f41a04d60e11b81523360048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690631e83409a90602401600060405180830381600087803b15801561030457600080fd5b505af1158015610318573d6000803e3d6000fd5b5050505050565b60006020828403121561033157600080fd5b5035919050565b60006020828403121561034a57600080fd5b8151801515811461035a57600080fd5b939250505056fea2646970667358221220f5cba89d67c060bbf262331582771673cfd68316c7d8956ccef4befe8efad13364736f6c634300080b0033";

export class StakingHelper__factory extends ContractFactory {
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
    _staking: string,
    _REQT: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StakingHelper> {
    return super.deploy(
      _staking,
      _REQT,
      overrides || {}
    ) as Promise<StakingHelper>;
  }
  getDeployTransaction(
    _staking: string,
    _REQT: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_staking, _REQT, overrides || {});
  }
  attach(address: string): StakingHelper {
    return super.attach(address) as StakingHelper;
  }
  connect(signer: Signer): StakingHelper__factory {
    return super.connect(signer) as StakingHelper__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakingHelperInterface {
    return new utils.Interface(_abi) as StakingHelperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StakingHelper {
    return new Contract(address, _abi, signerOrProvider) as StakingHelper;
  }
}