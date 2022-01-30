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
import type { RedRequiem, RedRequiemInterface } from "../RedRequiem";

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
        internalType: "address",
        name: "_lockedToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_minLockedAmount",
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
        name: "provider",
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
        internalType: "uint256",
        name: "locktime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "penalty",
        type: "uint256",
      },
    ],
    name: "EarlyWithdrawPenaltySet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "MinLockedAmountSet",
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
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "PenaltyCollectorSet",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "provider",
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
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "MAXDAYS",
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
    name: "MAXTIME",
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
    name: "MAX_WITHDRAWAL_PENALTY",
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
    name: "MINDAYS",
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
    name: "PRECISION",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
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
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_days",
        type: "uint256",
      },
    ],
    name: "create_lock",
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
        name: "_addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "deposit_for",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "earlyWithdrawPenaltyRate",
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
    name: "emergencyWithdraw",
    outputs: [],
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
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "increase_amount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_days",
        type: "uint256",
      },
    ],
    name: "increase_unlock_time",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "locked",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "end",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lockedToken",
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
        name: "_addr",
        type: "address",
      },
    ],
    name: "locked__end",
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
        name: "_addr",
        type: "address",
      },
    ],
    name: "locked__of",
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
    name: "minLockedAmount",
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
        name: "",
        type: "address",
      },
    ],
    name: "mintedForLock",
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
    name: "penaltyCollector",
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
        internalType: "uint256",
        name: "_earlyWithdrawPenaltyRate",
        type: "uint256",
      },
    ],
    name: "setEarlyWithdrawPenaltyRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_minLockedAmount",
        type: "uint256",
      },
    ],
    name: "setMinLockedAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "setPenaltyCollector",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_days",
        type: "uint256",
      },
    ],
    name: "voting_power_locked_days",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_unlock_time",
        type: "uint256",
      },
    ],
    name: "voting_power_unlock_time",
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
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200211038038062002110833981016040819052620000349162000270565b83836012826003908051906020019062000050929190620000fd565b50815162000066906004906020850190620000fd565b5060058054336101009081026001600160a81b031990921660ff9094169390931717908190556040519190046001600160a01b03169250600091507f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3600780546001600160a01b0319166001600160a01b0393909316929092179091556009555050617530600a55600160065562000340565b8280546200010b9062000303565b90600052602060002090601f0160209004810192826200012f57600085556200017a565b82601f106200014a57805160ff19168380011785556200017a565b828001600101855582156200017a579182015b828111156200017a5782518255916020019190600101906200015d565b50620001889291506200018c565b5090565b5b808211156200018857600081556001016200018d565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001cb57600080fd5b81516001600160401b0380821115620001e857620001e8620001a3565b604051601f8301601f19908116603f01168101908282118183101715620002135762000213620001a3565b816040528381526020925086838588010111156200023057600080fd5b600091505b8382101562000254578582018301518183018401529082019062000235565b83821115620002665760008385830101525b9695505050505050565b600080600080608085870312156200028757600080fd5b84516001600160401b03808211156200029f57600080fd5b620002ad88838901620001b9565b95506020870151915080821115620002c457600080fd5b50620002d387828801620001b9565b604087015190945090506001600160a01b0381168114620002f357600080fd5b6060959095015193969295505050565b600181811c908216806200031857607f821691505b602082108114156200033a57634e487b7160e01b600052602260045260246000fd5b50919050565b611dc080620003506000396000f3fe608060405234801561001057600080fd5b50600436106102485760003560e01c806370a082311161013b578063aaf5eb68116100b8578063db2e21bc1161007c578063db2e21bc1461053d578063dd62ed3e14610545578063ee00ef3a1461057e578063eff7a61214610586578063f2fde38b1461059957600080fd5b8063aaf5eb68146104af578063adc63589146104b9578063ae6ef65f146104e5578063cbf9fe5f146104ee578063d08a12ff1461052a57600080fd5b806395d89b41116100ff57806395d89b4114610465578063a25b39b71461046d578063a457c2d714610476578063a8a4a37614610489578063a9059cbb1461049c57600080fd5b806370a08231146103f8578063715018a61461042157806373426cff1461042957806379cc67901461043c5780638da5cb5b1461044f57600080fd5b8063308097b2116101c95780633ccfd60b1161018d5780633ccfd60b146103a457806342966c68146103ac5780634957677c146103bf5780635b7d8f05146103d257806365fc3873146103e557600080fd5b8063308097b214610341578063313ce5671461035457806338b4321b14610369578063395093511461037c5780633a46273e1461038f57600080fd5b8063113f665311610210578063113f6653146102f45780631767c4331461031457806318160ddd1461031d5780632060176b1461032557806323b872dd1461032e57600080fd5b80630193512b1461024d57806306fdde0314610289578063095ea7b31461029e5780630f45cc81146102c15780630f51c09c146102ec575b600080fd5b61027661025b366004611aba565b6001600160a01b03166000908152600b602052604090205490565b6040519081526020015b60405180910390f35b6102916105ac565b6040516102809190611b01565b6102b16102ac366004611b34565b61063e565b6040519015158152602001610280565b6007546102d4906001600160a01b031681565b6040516001600160a01b039091168152602001610280565b610276600781565b610276610302366004611aba565b600c6020526000908152604090205481565b61027661044781565b600254610276565b61027661c35081565b6102b161033c366004611b5e565b610655565b6008546102d4906001600160a01b031681565b60055460405160ff9091168152602001610280565b610276610377366004611b9a565b610704565b6102b161038a366004611b34565b610771565b6103a261039d366004611b34565b6107ad565b005b6103a26107df565b6103a26103ba366004611bbc565b61093c565b6103a26103cd366004611bbc565b610949565b6103a26103e0366004611aba565b610977565b6103a26103f3366004611b9a565b6109f0565b610276610406366004611aba565b6001600160a01b031660009081526020819052604090205490565b6103a2610b1d565b610276610437366004611b9a565b610b9c565b6103a261044a366004611b34565b610bcc565b60055461010090046001600160a01b03166102d4565b610291610c52565b61027660095481565b6102b1610484366004611b34565b610c61565b6103a2610497366004611bbc565b610cfa565b6102b16104aa366004611b34565b610dae565b610276620186a081565b6102766104c7366004611aba565b6001600160a01b03166000908152600b602052604090206001015490565b610276600a5481565b6105156104fc366004611aba565b600b602052600090815260409020805460019091015482565b60408051928352602083019190915201610280565b6103a2610538366004611bbc565b610dbb565b6103a2610e1d565b610276610553366004611bd5565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b610276610ef1565b6103a2610594366004611bbc565b610f03565b6103a26105a7366004611aba565b610fb2565b6060600380546105bb90611c08565b80601f01602080910402602001604051908101604052809291908181526020018280546105e790611c08565b80156106345780601f1061060957610100808354040283529160200191610634565b820191906000526020600020905b81548152906001019060200180831161061757829003601f168201915b5050505050905090565b600061064b3384846110ad565b5060015b92915050565b60006106628484846111d1565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156106ec5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6106f985338584036110ad565b506001949350505050565b60004280831161071857600091505061064f565b60006107248285611c59565b905061073561044762015180611c70565b811061074557849250505061064f565b61075461044762015180611c70565b61075e8287611c70565b6107689190611c8f565b95945050505050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161064b9185906107a8908690611cb1565b6110ad565b6009548110156107cf5760405162461bcd60e51b81526004016106e390611cc9565b6107db828260006113a1565b5050565b6006546001146108015760405162461bcd60e51b81526004016106e390611cf7565b60006006819055338152600b602052604090208054429061085a5760405162461bcd60e51b81526020600482015260136024820152724e6f7468696e6720746f20776974686472617760681b60448201526064016106e3565b81600101548110156108a75760405162461bcd60e51b8152602060048201526016602482015275546865206c6f636b206469646e27742065787069726560501b60448201526064016106e3565b815460006001840181905583556108ce335b336000908152600c6020526040902054611657565b336000818152600c60205260408120556007546108f7916001600160a01b0390911690836117a5565b604080518281526020810184905233917ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b568910160405180910390a25050600160065550565b6109463382611657565b50565b60095481101561096b5760405162461bcd60e51b81526004016106e390611cc9565b610946338260006113a1565b60055461010090046001600160a01b031633146109a65760405162461bcd60e51b81526004016106e390611d17565b600880546001600160a01b0319166001600160a01b0383169081179091556040517f2541601c97bce42b47813f2be715ba4eb0a571f2aafaf35cda2054137d9a79af90600090a250565b600954821015610a125760405162461bcd60e51b81526004016106e390611cc9565b336000908152600b602052604090205415610a6f5760405162461bcd60e51b815260206004820152601960248201527f5769746864726177206f6c6420746f6b656e732066697273740000000000000060448201526064016106e3565b6007811015610ac05760405162461bcd60e51b815260206004820152601d60248201527f566f74696e67206c6f636b2063616e20626520372064617973206d696e00000060448201526064016106e3565b610447811115610b125760405162461bcd60e51b815260206004820152601e60248201527f566f74696e67206c6f636b2063616e2062652034207965617273206d6178000060448201526064016106e3565b6107db3383836113a1565b60055461010090046001600160a01b03163314610b4c5760405162461bcd60e51b81526004016106e390611d17565b60055460405160009161010090046001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a360058054610100600160a81b0319169055565b60006104478210610bae57508161064f565b610447610bbb8385611c70565b610bc59190611c8f565b9392505050565b6000610bd88333610553565b905081811015610c365760405162461bcd60e51b8152602060048201526024808201527f45524332303a206275726e20616d6f756e74206578636565647320616c6c6f77604482015263616e636560e01b60648201526084016106e3565b610c4383338484036110ad565b610c4d8383611657565b505050565b6060600480546105bb90611c08565b3360009081526001602090815260408083206001600160a01b038616845290915281205482811015610ce35760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016106e3565b610cf033858584036110ad565b5060019392505050565b60055461010090046001600160a01b03163314610d295760405162461bcd60e51b81526004016106e390611d17565b61c350811115610d7b5760405162461bcd60e51b815260206004820152601e60248201527f7769746864726177616c2070656e616c747920697320746f6f2068696768000060448201526064016106e3565b600a81905560405181907fa7d10353d34f5fe96bad91fa358f55fbea8ad6ee0d30924022d2b58e77f476e390600090a250565b600061064b3384846111d1565b60055461010090046001600160a01b03163314610dea5760405162461bcd60e51b81526004016106e390611d17565b600981905560405181907f9a8dc7fb9d13b0f5acaf673226d570d31ec15d8a813fceced1eb36ad11afebc590600090a250565b600654600114610e3f5760405162461bcd60e51b81526004016106e390611cf7565b60006006819055338152600b6020526040902080544290610e985760405162461bcd60e51b81526020600482015260136024820152724e6f7468696e6720746f20776974686472617760681b60448201526064016106e3565b81546001830154821015610edd576000620186a0600a5483610eba9190611c70565b610ec49190611c8f565b9050610ecf81611808565b610ed98183611c59565b9150505b60006001840181905583556108ce336108b9565b610f0061044762015180611c70565b81565b6007811015610f545760405162461bcd60e51b815260206004820152601d60248201527f566f74696e67206c6f636b2063616e20626520372064617973206d696e00000060448201526064016106e3565b610447811115610fa65760405162461bcd60e51b815260206004820152601e60248201527f566f74696e67206c6f636b2063616e2062652034207965617273206d6178000060448201526064016106e3565b610946336000836113a1565b60055461010090046001600160a01b03163314610fe15760405162461bcd60e51b81526004016106e390611d17565b6001600160a01b0381166110465760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016106e3565b6005546040516001600160a01b0380841692610100900416907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600580546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b6001600160a01b03831661110f5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016106e3565b6001600160a01b0382166111705760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016106e3565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166112355760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016106e3565b6001600160a01b0382166112975760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016106e3565b6001600160a01b0383166000908152602081905260409020548181101561130f5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016106e3565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290611346908490611cb1565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161139291815260200190565b60405180910390a35b50505050565b6006546001146113c35760405162461bcd60e51b81526004016106e390611cf7565b600060068190556001600160a01b0384168152600b6020526040812080546001820154919242929082611420576113fa8787610b9c565b878655905061140c8662015180611c70565b6114169085611cb1565b600186015561155b565b856114425761142f8783610704565b905061143b8784611cb1565b855561155b565b86156114b65760405162461bcd60e51b815260206004820152603760248201527f43616e6e6f7420696e63726561736520616d6f756e7420616e6420657874656e60448201527f64206c6f636b20696e207468652073616d652074696d6500000000000000000060648201526084016106e3565b6114c08387610b9c565b90506114cf8662015180611c70565b6114d99083611cb1565b60018601556114ed61044762015180611c70565b8486600101546114fd9190611c59565b111561155b5760405162461bcd60e51b815260206004820152602760248201527f43616e6e6f7420657874656e64206c6f636b20746f206d6f7265207468616e206044820152663420796561727360c81b60648201526084016106e3565b600081116115a05760405162461bcd60e51b81526020600482015260126024820152714e6f2062656e6566697420746f206c6f636b60701b60448201526064016106e3565b86156115be576115be336007546001600160a01b031690308a611897565b6115c888826118cf565b6001600160a01b0388166000908152600c6020526040812080548392906115f0908490611cb1565b90915550508454600186015460408051928352602083019190915281018590526001600160a01b038916907f36af321ec8d3c75236829c5317affd40ddb308863a1236d2d277a4025cccee1e9060600160405180910390a250506001600655505050505050565b6001600160a01b0382166116b75760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016106e3565b6001600160a01b0382166000908152602081905260409020548181101561172b5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016106e3565b6001600160a01b038316600090815260208190526040812083830390556002805484929061175a908490611c59565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b6040516001600160a01b038316602482015260448101829052610c4d90849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526119ae565b6008546001600160a01b03161561183657600854600754610946916001600160a01b039182169116836117a5565b600754604051630852cd8d60e31b8152600481018390526001600160a01b03909116906342966c6890602401600060405180830381600087803b15801561187c57600080fd5b505af1158015611890573d6000803e3d6000fd5b5050505050565b6040516001600160a01b038085166024830152831660448201526064810182905261139b9085906323b872dd60e01b906084016117d1565b6001600160a01b0382166119255760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016106e3565b80600260008282546119379190611cb1565b90915550506001600160a01b03821660009081526020819052604081208054839290611964908490611cb1565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600080836001600160a01b0316836040516119c99190611d4c565b6000604051808303816000865af19150503d8060008114611a06576040519150601f19603f3d011682016040523d82523d6000602084013e611a0b565b606091505b50915091506000821415611a23573d6000803e3d6000fd5b61139b815160001480611a45575081806020019051810190611a459190611d68565b6101a2816107db5762461bcd60e51b600090815260206004526007602452600a808304818104828106603090810160101b848706949093060160081b929092010166524551230000300160c81b6044526107db91606490fd5b80356001600160a01b0381168114611ab557600080fd5b919050565b600060208284031215611acc57600080fd5b610bc582611a9e565b60005b83811015611af0578181015183820152602001611ad8565b8381111561139b5750506000910152565b6020815260008251806020840152611b20816040850160208701611ad5565b601f01601f19169190910160400192915050565b60008060408385031215611b4757600080fd5b611b5083611a9e565b946020939093013593505050565b600080600060608486031215611b7357600080fd5b611b7c84611a9e565b9250611b8a60208501611a9e565b9150604084013590509250925092565b60008060408385031215611bad57600080fd5b50508035926020909101359150565b600060208284031215611bce57600080fd5b5035919050565b60008060408385031215611be857600080fd5b611bf183611a9e565b9150611bff60208401611a9e565b90509250929050565b600181811c90821680611c1c57607f821691505b60208210811415611c3d57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082821015611c6b57611c6b611c43565b500390565b6000816000190483118215151615611c8a57611c8a611c43565b500290565b600082611cac57634e487b7160e01b600052601260045260246000fd5b500490565b60008219821115611cc457611cc4611c43565b500190565b6020808252601490820152731b195cdcc81d1a185b881b5a5b88185b5bdd5b9d60621b604082015260600190565b6020808252600690820152651313d0d2d15160d21b604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60008251611d5e818460208701611ad5565b9190910192915050565b600060208284031215611d7a57600080fd5b81518015158114610bc557600080fdfea26469706673582212201e786f0bbf5e6b6b793e1a9d9dbf681d2cdf3287d249fef5125b31a7fce72ee764736f6c634300080b0033";

export class RedRequiem__factory extends ContractFactory {
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
    _lockedToken: string,
    _minLockedAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RedRequiem> {
    return super.deploy(
      _name,
      _symbol,
      _lockedToken,
      _minLockedAmount,
      overrides || {}
    ) as Promise<RedRequiem>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    _lockedToken: string,
    _minLockedAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _lockedToken,
      _minLockedAmount,
      overrides || {}
    );
  }
  attach(address: string): RedRequiem {
    return super.attach(address) as RedRequiem;
  }
  connect(signer: Signer): RedRequiem__factory {
    return super.connect(signer) as RedRequiem__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RedRequiemInterface {
    return new utils.Interface(_abi) as RedRequiemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RedRequiem {
    return new Contract(address, _abi, signerOrProvider) as RedRequiem;
  }
}
