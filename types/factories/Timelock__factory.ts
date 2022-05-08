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
import type { Timelock, TimelockInterface } from "../Timelock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "delay_",
        type: "uint256",
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
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "CancelTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "ExecuteTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "NewAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "NewDelay",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newPendingAdmin",
        type: "address",
      },
    ],
    name: "NewPendingAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "proposer",
        type: "address",
      },
    ],
    name: "NewProposerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "QueueTransaction",
    type: "event",
  },
  {
    inputs: [],
    name: "GRACE_PERIOD",
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
    name: "MAXIMUM_DELAY",
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
    name: "MINIMUM_DELAY",
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
    name: "acceptAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_propopser",
        type: "address",
      },
    ],
    name: "addProposer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "admin",
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
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "cancelTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "delay",
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
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "executeTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingAdmin",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "proposers",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "queueTransaction",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "queuedTransactions",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_propopser",
        type: "address",
      },
    ],
    name: "removeProposer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "delay_",
        type: "uint256",
      },
    ],
    name: "setDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pendingAdmin_",
        type: "address",
      },
    ],
    name: "setPendingAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051620019523803806200195283398101604081905261003191610168565b610e108110156100ae5760405162461bcd60e51b815260206004820152603760248201527f54696d656c6f636b3a3a636f6e7374727563746f723a2044656c6179206d757360448201527f7420657863656564206d696e696d756d2064656c61792e00000000000000000060648201526084015b60405180910390fd5b62278d008111156101275760405162461bcd60e51b815260206004820152603860248201527f54696d656c6f636b3a3a73657444656c61793a2044656c6179206d757374206e60448201527f6f7420657863656564206d6178696d756d2064656c61792e000000000000000060648201526084016100a5565b600080546001600160a01b039093166001600160a01b031990931683178155600291909155908152600460205260409020805460ff191660011790556101a2565b6000806040838503121561017b57600080fd5b82516001600160a01b038116811461019257600080fd5b6020939093015192949293505050565b6117a080620001b26000396000f3fe6080604052600436106100f35760003560e01c80636a42b8f81161008a578063c1a287e211610059578063c1a287e2146102bb578063e177246e146102d2578063f2b06537146102f2578063f851a4401461032257600080fd5b80636a42b8f8146102585780637d645fab1461026e578063b03cd41814610285578063b1b43ae5146102a557600080fd5b806326782247116100c657806326782247146101985780633a66f901146101ea5780634dd18bf514610218578063591fcdfe1461023857600080fd5b80630825f38f146100f857806309d632d3146101215780630e18b681146101435780631817749714610158575b600080fd5b61010b6101063660046114b7565b61034f565b60405161011891906115e2565b60405180910390f35b34801561012d57600080fd5b5061014161013c3660046115fc565b610810565b005b34801561014f57600080fd5b50610141610992565b34801561016457600080fd5b506101886101733660046115fc565b60046020526000908152604090205460ff1681565b6040519015158152602001610118565b3480156101a457600080fd5b506001546101c59073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610118565b3480156101f657600080fd5b5061020a6102053660046114b7565b610ae8565b604051908152602001610118565b34801561022457600080fd5b506101416102333660046115fc565b610d31565b34801561024457600080fd5b506101416102533660046114b7565b610e2f565b34801561026457600080fd5b5061020a60025481565b34801561027a57600080fd5b5061020a62278d0081565b34801561029157600080fd5b506101416102a03660046115fc565b610fb9565b3480156102b157600080fd5b5061020a610e1081565b3480156102c757600080fd5b5061020a6212750081565b3480156102de57600080fd5b506101416102ed366004611617565b6111e4565b3480156102fe57600080fd5b5061018861030d366004611617565b60036020526000908152604090205460ff1681565b34801561032e57600080fd5b506000546101c59073ffffffffffffffffffffffffffffffffffffffff1681565b60005460609073ffffffffffffffffffffffffffffffffffffffff1633146103fe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a20436160448201527f6c6c206d75737420636f6d652066726f6d2061646d696e2e000000000000000060648201526084015b60405180910390fd5b60008686868686604051602001610419959493929190611630565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291815281516020928301206000818152600390935291205490915060ff166104ee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603d60248201527f54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a20547260448201527f616e73616374696f6e206861736e2774206265656e207175657565642e00000060648201526084016103f5565b824210156105a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604560248201527f54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a20547260448201527f616e73616374696f6e206861736e2774207375727061737365642074696d652060648201527f6c6f636b2e000000000000000000000000000000000000000000000000000000608482015260a4016103f5565b6105b1621275008461168a565b421115610640576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603360248201527f54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a20547260448201527f616e73616374696f6e206973207374616c652e0000000000000000000000000060648201526084016103f5565b600081815260036020526040812080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690558551606091036106855750836106b1565b85805190602001208560405160200161069f9291906116c9565b60405160208183030381529060405290505b6000808973ffffffffffffffffffffffffffffffffffffffff1689846040516106da9190611711565b60006040518083038185875af1925050503d8060008114610717576040519150601f19603f3d011682016040523d82523d6000602084013e61071c565b606091505b5091509150816107ae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603d60248201527f54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a20547260448201527f616e73616374696f6e20657865637574696f6e2072657665727465642e00000060648201526084016103f5565b8973ffffffffffffffffffffffffffffffffffffffff16847fa560e3198060a2f10670c1ec5b403077ea6ae93ca8de1c32b451dc1a943cd6e78b8b8b8b6040516107fb949392919061172d565b60405180910390a39998505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146108b7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603460248201527f54696d656c6f636b3a3a72656d6f766550726f706f7365723a2043616c6c206d60448201527f75737420636f6d652066726f6d2061646d696e2e00000000000000000000000060648201526084016103f5565b73ffffffffffffffffffffffffffffffffffffffff811660009081526004602052604090205460ff16610946576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f50726f706f736572206e6f7420666f756e64000000000000000000000000000060448201526064016103f5565b73ffffffffffffffffffffffffffffffffffffffff16600090815260046020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b60015473ffffffffffffffffffffffffffffffffffffffff163314610a39576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f54696d656c6f636b3a3a61636365707441646d696e3a2043616c6c206d75737460448201527f20636f6d652066726f6d2070656e64696e6741646d696e2e000000000000000060648201526084016103f5565b60008054337fffffffffffffffffffffffff00000000000000000000000000000000000000009182168117835582526004602052604080832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600190811790915580549092169091558154905173ffffffffffffffffffffffffffffffffffffffff909116917f71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c91a2565b3360009081526004602052604081205460ff16610b87576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603a60248201527f54696d656c6f636b3a3a71756575655472616e73616374696f6e3a2043616c6c60448201527f206d75737420636f6d652066726f6d2070726f706f736572732e00000000000060648201526084016103f5565b600254610b94904261168a565b821015610c49576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604960248201527f54696d656c6f636b3a3a71756575655472616e73616374696f6e3a204573746960448201527f6d6174656420657865637574696f6e20626c6f636b206d75737420736174697360648201527f66792064656c61792e0000000000000000000000000000000000000000000000608482015260a4016103f5565b60008686868686604051602001610c64959493929190611630565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201206000818152600390925291902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055915073ffffffffffffffffffffffffffffffffffffffff88169082907f76e2796dc3a81d57b0e8504b647febcbeeb5f4af818e164f11eef8131a6a763f90610d1f908a908a908a908a9061172d565b60405180910390a39695505050505050565b333014610dc0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f54696d656c6f636b3a3a73657450656e64696e6741646d696e3a2043616c6c2060448201527f6d75737420636f6d652066726f6d2054696d656c6f636b2e000000000000000060648201526084016103f5565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040517f69d78e38a01985fbb1462961809b4b2d65531bc93b2b94037f3334b82ca4a75690600090a250565b60005473ffffffffffffffffffffffffffffffffffffffff163314610ed6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603760248201527f54696d656c6f636b3a3a63616e63656c5472616e73616374696f6e3a2043616c60448201527f6c206d75737420636f6d652066726f6d2061646d696e2e00000000000000000060648201526084016103f5565b60008585858585604051602001610ef1959493929190611630565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201206000818152600390925291902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055915073ffffffffffffffffffffffffffffffffffffffff87169082907f2fffc091a501fd91bfbff27141450d3acb40fb8e6d8382b243ec7a812a3aaf8790610fa990899089908990899061172d565b60405180910390a3505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611060576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f54696d656c6f636b3a3a61646450726f706f7365723a2043616c6c206d75737460448201527f20636f6d652066726f6d2061646d696e2e00000000000000000000000000000060648201526084016103f5565b73ffffffffffffffffffffffffffffffffffffffff81166110dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f496e76616c69642061646472657373000000000000000000000000000000000060448201526064016103f5565b73ffffffffffffffffffffffffffffffffffffffff811660009081526004602052604090205460ff161561116d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f50726f706f736572207761732070726576696f75736c7920616464656400000060448201526064016103f5565b73ffffffffffffffffffffffffffffffffffffffff811660008181526004602052604080822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055517fa2f70839f9551e638fde3f52959ae8362dd7eefcfec1c11eb402f75711700c7d9190a250565b333014611273576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f54696d656c6f636b3a3a73657444656c61793a2043616c6c206d75737420636f60448201527f6d652066726f6d2054696d656c6f636b2e00000000000000000000000000000060648201526084016103f5565b610e10811015611305576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603460248201527f54696d656c6f636b3a3a73657444656c61793a2044656c6179206d757374206560448201527f7863656564206d696e696d756d2064656c61792e00000000000000000000000060648201526084016103f5565b62278d00811115611398576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f54696d656c6f636b3a3a73657444656c61793a2044656c6179206d757374206e60448201527f6f7420657863656564206d6178696d756d2064656c61792e000000000000000060648201526084016103f5565b600281905560405181907f948b1f6a42ee138b7e34058ba85a37f716d55ff25ff05a763f15bed6a04c8d2c90600090a250565b803573ffffffffffffffffffffffffffffffffffffffff811681146113ef57600080fd5b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600067ffffffffffffffff8084111561143e5761143e6113f4565b604051601f85017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611484576114846113f4565b8160405280935085815286868601111561149d57600080fd5b858560208301376000602087830101525050509392505050565b600080600080600060a086880312156114cf57600080fd5b6114d8866113cb565b945060208601359350604086013567ffffffffffffffff808211156114fc57600080fd5b818801915088601f83011261151057600080fd5b61151f89833560208501611423565b9450606088013591508082111561153557600080fd5b508601601f8101881361154757600080fd5b61155688823560208401611423565b95989497509295608001359392505050565b60005b8381101561158357818101518382015260200161156b565b83811115611592576000848401525b50505050565b600081518084526115b0816020860160208601611568565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006115f56020830184611598565b9392505050565b60006020828403121561160e57600080fd5b6115f5826113cb565b60006020828403121561162957600080fd5b5035919050565b73ffffffffffffffffffffffffffffffffffffffff8616815284602082015260a06040820152600061166560a0830186611598565b82810360608401526116778186611598565b9150508260808301529695505050505050565b600082198211156116c4577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500190565b7fffffffff000000000000000000000000000000000000000000000000000000008316815260008251611703816004850160208701611568565b919091016004019392505050565b60008251611723818460208701611568565b9190910192915050565b8481526080602082015260006117466080830186611598565b82810360408401526117588186611598565b9150508260608301529594505050505056fea2646970667358221220118eba8180fad40fd18ad36f0d048d0617114a87e12f08b15ff6b63bdea1529764736f6c634300080d0033";

export class Timelock__factory extends ContractFactory {
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
    admin_: string,
    delay_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Timelock> {
    return super.deploy(admin_, delay_, overrides || {}) as Promise<Timelock>;
  }
  getDeployTransaction(
    admin_: string,
    delay_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(admin_, delay_, overrides || {});
  }
  attach(address: string): Timelock {
    return super.attach(address) as Timelock;
  }
  connect(signer: Signer): Timelock__factory {
    return super.connect(signer) as Timelock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimelockInterface {
    return new utils.Interface(_abi) as TimelockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Timelock {
    return new Contract(address, _abi, signerOrProvider) as Timelock;
  }
}
