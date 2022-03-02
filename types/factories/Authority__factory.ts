/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Authority, AuthorityInterface } from "../Authority";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_governor",
        type: "address",
      },
      {
        internalType: "address",
        name: "_guardian",
        type: "address",
      },
      {
        internalType: "address",
        name: "_policy",
        type: "address",
      },
      {
        internalType: "address",
        name: "_vault",
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
    ],
    name: "GovernorPulled",
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
        internalType: "bool",
        name: "_effectiveImmediately",
        type: "bool",
      },
    ],
    name: "GovernorPushed",
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
        internalType: "bool",
        name: "_effectiveImmediately",
        type: "bool",
      },
    ],
    name: "GuardianPushed",
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
    ],
    name: "PolicyPulled",
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
        internalType: "bool",
        name: "_effectiveImmediately",
        type: "bool",
      },
    ],
    name: "PolicyPushed",
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
    ],
    name: "VaultPulled",
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
        internalType: "bool",
        name: "_effectiveImmediately",
        type: "bool",
      },
    ],
    name: "VaultPushed",
    type: "event",
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
    name: "governor",
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
    name: "newGovernor",
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
    name: "newGuardian",
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
    name: "newPolicy",
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
    name: "newVault",
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
    name: "pullGovernor",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "pullPolicy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pullVault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newGovernor",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_effectiveImmediately",
        type: "bool",
      },
    ],
    name: "pushGovernor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newGuardian",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_effectiveImmediately",
        type: "bool",
      },
    ],
    name: "pushGuardian",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newPolicy",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_effectiveImmediately",
        type: "bool",
      },
    ],
    name: "pushPolicy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newVault",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_effectiveImmediately",
        type: "bool",
      },
    ],
    name: "pushVault",
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
  "0x60c0604052600c60808190526b15539055551213d49256915160a21b60a09081526200002f9160009190620001ff565b503480156200003d57600080fd5b5060405162000f8b38038062000f8b8339810160408190526200006091620002c2565b600180546001600160a01b0319163090811790915560405181907f2f658b440c35314f52658ea8a740e05b284cdc84dc9ae01e891f21b8933e7cad90600090a250600280546001600160a01b0319166001600160a01b038616908117909155604051600181526000907f4f337dcbb2512f18373c1f72d990a2f0a6ee5024b04007c52afd01eb73374a899060200160405180910390a3600380546001600160a01b0319166001600160a01b038516908117909155604051600181526000907fde655975891e8f09671597b37bd4d663bcc5c21dc6d7641b33cdf85fbe15d08b9060200160405180910390a3600480546001600160a01b0319166001600160a01b038416908117909155604051600181526000907f90a5902a45c24aae553d5aff384ca16d6560f08d74c9784a4fbd2796d9e13f2b9060200160405180910390a3600580546001600160a01b0319166001600160a01b038316908117909155604051600181526000907f05a80f5053574d6a62733e1692e8cbcfaf927dc82df0a7267ea2e489a7cc18ff9060200160405180910390a3505050506200035c565b8280546200020d906200031f565b90600052602060002090601f0160209004810192826200023157600085556200027c565b82601f106200024c57805160ff19168380011785556200027c565b828001600101855582156200027c579182015b828111156200027c5782518255916020019190600101906200025f565b506200028a9291506200028e565b5090565b5b808211156200028a57600081556001016200028f565b80516001600160a01b0381168114620002bd57600080fd5b919050565b60008060008060808587031215620002d957600080fd5b620002e485620002a5565b9350620002f460208601620002a5565b92506200030460408601620002a5565b91506200031460608601620002a5565b905092959194509250565b600181811c908216806200033457607f821691505b602082108114156200035657634e487b7160e01b600052602260045260246000fd5b50919050565b610c1f806200036c6000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c80635beede08116100a25780638fd20577116100715780638fd205771461021a578063be11f1dd1461022d578063bf7e214f14610235578063d8a0421214610248578063fbfa77cf1461025057600080fd5b80635beede08146101d95780636fe72c14146101e15780637a9e5e4b146101f457806388aaf0c81461020757600080fd5b8063215e92bc116100e9578063215e92bc146101855780633bf90c281461018d578063452a9320146101a057806352759694146101b357806354e3d703146101c657600080fd5b80630505c8c91461011b5780630c340a241461014a578063198598471461015d5780631afe871414610170575b600080fd5b60045461012e906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b60025461012e906001600160a01b031681565b60075461012e906001600160a01b031681565b61018361017e366004610ac2565b610263565b005b61018361039a565b60085461012e906001600160a01b031681565b60035461012e906001600160a01b031681565b6101836101c1366004610ac2565b610443565b6101836101d4366004610ac2565b610569565b61018361068f565b6101836101ef366004610ac2565b610739565b610183610202366004610b00565b61085f565b60095461012e906001600160a01b031681565b60065461012e906001600160a01b031681565b610183610955565b60015461012e906001600160a01b031681565b6101836109fe565b60055461012e906001600160a01b031681565b600160009054906101000a90046001600160a01b03166001600160a01b0316630c340a246040518163ffffffff1660e01b8152600401602060405180830381865afa1580156102b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102da9190610b24565b6001600160a01b0316336001600160a01b0316146000906103175760405162461bcd60e51b815260040161030e9190610b41565b60405180910390fd5b50801561033a57600380546001600160a01b0319166001600160a01b0384161790555b600780546001600160a01b0319166001600160a01b038481169182179092556003546040518415158152919216907fde655975891e8f09671597b37bd4d663bcc5c21dc6d7641b33cdf85fbe15d08b906020015b60405180910390a35050565b6009546001600160a01b031633146103e05760405162461bcd60e51b8152602060048201526009602482015268085b995dd5985d5b1d60ba1b604482015260640161030e565b6009546005546040516001600160a01b0392831692909116907f3d08e01e3b8340be6ca709db7a9321448661a1f490da4d7f3eb03d84fe73095390600090a3600954600580546001600160a01b0319166001600160a01b03909216919091179055565b600160009054906101000a90046001600160a01b03166001600160a01b0316630c340a246040518163ffffffff1660e01b8152600401602060405180830381865afa158015610496573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104ba9190610b24565b6001600160a01b0316336001600160a01b0316146000906104ee5760405162461bcd60e51b815260040161030e9190610b41565b50801561051157600280546001600160a01b0319166001600160a01b0384161790555b600680546001600160a01b0319166001600160a01b038481169182179092556002546040518415158152919216907f4f337dcbb2512f18373c1f72d990a2f0a6ee5024b04007c52afd01eb73374a899060200161038e565b600160009054906101000a90046001600160a01b03166001600160a01b0316630c340a246040518163ffffffff1660e01b8152600401602060405180830381865afa1580156105bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105e09190610b24565b6001600160a01b0316336001600160a01b0316146000906106145760405162461bcd60e51b815260040161030e9190610b41565b50801561063757600480546001600160a01b0319166001600160a01b0384161790555b600880546001600160a01b0319166001600160a01b038481169182179092556004546040518415158152919216907f90a5902a45c24aae553d5aff384ca16d6560f08d74c9784a4fbd2796d9e13f2b9060200161038e565b6008546001600160a01b031633146106d65760405162461bcd60e51b815260206004820152600a602482015269216e6577506f6c69637960b01b604482015260640161030e565b6008546004546040516001600160a01b0392831692909116907f64d2fa522b403ca222efff0c7ad07d2ef45472a45e5770918bdfa9a2845d29a890600090a3600854600480546001600160a01b0319166001600160a01b03909216919091179055565b600160009054906101000a90046001600160a01b03166001600160a01b0316630c340a246040518163ffffffff1660e01b8152600401602060405180830381865afa15801561078c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b09190610b24565b6001600160a01b0316336001600160a01b0316146000906107e45760405162461bcd60e51b815260040161030e9190610b41565b50801561080757600580546001600160a01b0319166001600160a01b0384161790555b600980546001600160a01b0319166001600160a01b038481169182179092556005546040518415158152919216907f05a80f5053574d6a62733e1692e8cbcfaf927dc82df0a7267ea2e489a7cc18ff9060200161038e565b600160009054906101000a90046001600160a01b03166001600160a01b0316630c340a246040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108d69190610b24565b6001600160a01b0316336001600160a01b03161460009061090a5760405162461bcd60e51b815260040161030e9190610b41565b50600180546001600160a01b0319166001600160a01b0383169081179091556040517f2f658b440c35314f52658ea8a740e05b284cdc84dc9ae01e891f21b8933e7cad90600090a250565b6007546001600160a01b0316331461099b5760405162461bcd60e51b8152602060048201526009602482015268085b995dd1dd585c9960ba1b604482015260640161030e565b6007546003546040516001600160a01b0392831692909116907f0960fb9900fb8096216606c4f7fc2fce5d08cc0c82da55cec8619b66b523848190600090a3600754600380546001600160a01b0319166001600160a01b03909216919091179055565b6006546001600160a01b03163314610a475760405162461bcd60e51b815260206004820152600c60248201526b10b732bba3b7bb32b93737b960a11b604482015260640161030e565b6006546002546040516001600160a01b0392831692909116907fffd6fed33fe8ec1016718bdd5d04ae6fecd9aba0da6578807daaaa7fc3d1682690600090a3600654600280546001600160a01b0319166001600160a01b03909216919091179055565b6001600160a01b0381168114610abf57600080fd5b50565b60008060408385031215610ad557600080fd5b8235610ae081610aaa565b915060208301358015158114610af557600080fd5b809150509250929050565b600060208284031215610b1257600080fd5b8135610b1d81610aaa565b9392505050565b600060208284031215610b3657600080fd5b8151610b1d81610aaa565b600060208083526000845481600182811c915080831680610b6357607f831692505b858310811415610b8157634e487b7160e01b85526022600452602485fd5b878601838152602001818015610b9e5760018114610baf57610bda565b60ff19861682528782019650610bda565b60008b81526020902060005b86811015610bd457815484820152908501908901610bbb565b83019750505b5094999850505050505050505056fea26469706673582212209955b6a4bd528ae8f83568e8b03d9958b53cb4d2a5d4bef8bfa28da373de76ae64736f6c634300080c0033";

export class Authority__factory extends ContractFactory {
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
    _governor: string,
    _guardian: string,
    _policy: string,
    _vault: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Authority> {
    return super.deploy(
      _governor,
      _guardian,
      _policy,
      _vault,
      overrides || {}
    ) as Promise<Authority>;
  }
  getDeployTransaction(
    _governor: string,
    _guardian: string,
    _policy: string,
    _vault: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _governor,
      _guardian,
      _policy,
      _vault,
      overrides || {}
    );
  }
  attach(address: string): Authority {
    return super.attach(address) as Authority;
  }
  connect(signer: Signer): Authority__factory {
    return super.connect(signer) as Authority__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AuthorityInterface {
    return new utils.Interface(_abi) as AuthorityInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Authority {
    return new Contract(address, _abi, signerOrProvider) as Authority;
  }
}
