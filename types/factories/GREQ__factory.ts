/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GREQ, GREQInterface } from "../GREQ";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_migrator",
        type: "address",
      },
      {
        internalType: "address",
        name: "_sREQ",
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
        name: "delegator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "fromDelegate",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toDelegate",
        type: "address",
      },
    ],
    name: "DelegateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "DelegateVotesChanged",
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
    inputs: [],
    name: "approved",
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
    name: "balanceFrom",
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
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "balanceTo",
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
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
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
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "checkpoints",
    outputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "votes",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
        name: "delegatee",
        type: "address",
      },
    ],
    name: "delegate",
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
    name: "delegates",
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
        name: "account",
        type: "address",
      },
    ],
    name: "getCurrentVotes",
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
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPriorVotes",
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
    inputs: [],
    name: "index",
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
        name: "_staking",
        type: "address",
      },
      {
        internalType: "address",
        name: "_sREQ",
        type: "address",
      },
    ],
    name: "migrate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "migrated",
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
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "numCheckpoints",
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
    name: "sREQ",
    outputs: [
      {
        internalType: "contract IsREQ",
        name: "",
        type: "address",
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
  "0x60806040523480156200001157600080fd5b5060405162001ab238038062001ab2833981016040819052620000349162000268565b604080518082018252600e81526d476f7665726e616e63652052455160901b6020808301918252835180850190945260048452636752455160e01b9084015281519192916012916200008a9160039190620001a5565b508151620000a0906004906020850190620001a5565b506005805460ff191660ff9290921691909117905550506001600160a01b038216620001135760405162461bcd60e51b815260206004820152601660248201527f5a65726f20616464726573733a204d69677261746f720000000000000000000060448201526064015b60405180910390fd5b600680546001600160a01b0319166001600160a01b03848116919091179091558116620001785760405162461bcd60e51b81526020600482015260126024820152715a65726f20616464726573733a207352455160701b60448201526064016200010a565b600580546001600160a01b0390921661010002610100600160a81b031990921691909117905550620002dd565b828054620001b390620002a0565b90600052602060002090601f016020900481019282620001d7576000855562000222565b82601f10620001f257805160ff191683800117855562000222565b8280016001018555821562000222579182015b828111156200022257825182559160200191906001019062000205565b506200023092915062000234565b5090565b5b8082111562000230576000815560010162000235565b80516001600160a01b03811681146200026357600080fd5b919050565b600080604083850312156200027c57600080fd5b62000287836200024b565b915062000297602084016200024b565b90509250929050565b600181811c90821680620002b557607f821691505b60208210811415620002d757634e487b7160e01b600052602260045260246000fd5b50919050565b6117c580620002ed6000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c80635c19a95c116100de57806395d89b4111610097578063a824876811610071578063a8248768146103c8578063a9059cbb146103db578063b4b5ea57146103ee578063dd62ed3e1461040157600080fd5b806395d89b411461039a5780639dc29fac146103a2578063a457c2d7146103b557600080fd5b80635c19a95c1461030057806366a5236c146103135780636fcfff451461032657806370a0823114610346578063782d6fe11461036f5780638cb649e11461038257600080fd5b806323b872dd1161014b578063313ce56711610125578063313ce5671461029c57806339509351146102b157806340c10f19146102c4578063587cde1e146102d757600080fd5b806323b872dd1461026d5780632986c0e5146102805780632c678c641461028857600080fd5b806306fdde0314610193578063095ea7b3146101b15780630cdfebfa146101d45780631068361f1461021b57806318160ddd1461023057806319d40b0814610242575b600080fd5b61019b61043a565b6040516101a8919061145d565b60405180910390f35b6101c46101bf3660046114ce565b6104cc565b60405190151581526020016101a8565b6102066101e23660046114ce565b60076020908152600092835260408084209091529082529020805460019091015482565b604080519283526020830191909152016101a8565b61022e6102293660046114f8565b6104e3565b005b6002545b6040519081526020016101a8565b600654610255906001600160a01b031681565b6040516001600160a01b0390911681526020016101a8565b6101c461027b36600461152b565b610695565b61023461073f565b6006546101c490600160a01b900460ff1681565b60055460405160ff90911681526020016101a8565b6101c46102bf3660046114ce565b6107bd565b61022e6102d23660046114ce565b6107f9565b6102556102e5366004611567565b6009602052600090815260409020546001600160a01b031681565b61022e61030e366004611567565b610831565b610234610321366004611582565b61083e565b610234610334366004611567565b60086020526000908152604090205481565b610234610354366004611567565b6001600160a01b031660009081526020819052604090205490565b61023461037d3660046114ce565b61086d565b6005546102559061010090046001600160a01b031681565b61019b610a8f565b61022e6103b03660046114ce565b610a9e565b6101c46103c33660046114ce565b610ad2565b6102346103d6366004611582565b610b6b565b6101c46103e93660046114ce565b610b8c565b6102346103fc366004611567565b610b99565b61023461040f3660046114f8565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546104499061159b565b80601f01602080910402602001604051908101604052809291908181526020018280546104759061159b565b80156104c25780601f10610497576101008083540402835291602001916104c2565b820191906000526020600020905b8154815290600101906020018083116104a557829003601f168201915b5050505050905090565b60006104d9338484610bfc565b5060015b92915050565b6006546001600160a01b031633146105165760405162461bcd60e51b815260040161050d906115d6565b60405180910390fd5b600654600160a01b900460ff161561055b5760405162461bcd60e51b8152602060048201526008602482015267135a59dc985d195960c21b604482015260640161050d565b6006805460ff60a01b198116600160a01b179091556001600160a01b03838116911614156105be5760405162461bcd60e51b815260206004820152601060248201526f125b9d985b1a5908185c99dd5b595b9d60821b604482015260640161050d565b6001600160a01b0382166106095760405162461bcd60e51b815260206004820152601260248201527116995c9bc81859191c995cdcc8199bdd5b9960721b604482015260640161050d565b600680546001600160a01b0319166001600160a01b0384811691909117909155811661066c5760405162461bcd60e51b815260206004820152601260248201527116995c9bc81859191c995cdcc8199bdd5b9960721b604482015260640161050d565b600580546001600160a01b0390921661010002610100600160a81b031990921691909117905550565b60006106a2848484610d21565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156107275760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b606482015260840161050d565b6107348533858403610bfc565b506001949350505050565b6000600560019054906101000a90046001600160a01b03166001600160a01b0316632986c0e56040518163ffffffff1660e01b8152600401602060405180830381865afa158015610794573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b891906115fd565b905090565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916104d99185906107f490869061162c565b610bfc565b6006546001600160a01b031633146108235760405162461bcd60e51b815260040161050d906115d6565b61082d8282610efc565b5050565b61083b3382610fe7565b50565b600061084861073f565b60055460ff1661085990600a611728565b6108639084611737565b6104dd9190611756565b60004382106108ce5760405162461bcd60e51b815260206004820152602760248201527f675245513a3a6765745072696f72566f7465733a206e6f742079657420646574604482015266195c9b5a5b995960ca1b606482015260840161050d565b6001600160a01b038316600090815260086020526040902054806108f65760009150506104dd565b6001600160a01b0384166000908152600760205260408120849161091b600185611778565b81526020019081526020016000206000015411610970576001600160a01b038416600090815260076020526040812090610956600184611778565b8152602001908152602001600020600101549150506104dd565b6001600160a01b03841660009081526007602090815260408083208380529091529020548310156109a55760009150506104dd565b6000806109b3600184611778565b90505b81811115610a5f57600060026109cc8484611778565b6109d69190611756565b6109e09083611778565b6001600160a01b0388166000908152600760209081526040808320848452825291829020825180840190935280548084526001909101549183019190915291925090871415610a39576020015194506104dd9350505050565b8051871115610a4a57819350610a58565b610a55600183611778565b92505b50506109b6565b506001600160a01b0385166000908152600760209081526040808320938352929052206001015491505092915050565b6060600480546104499061159b565b6006546001600160a01b03163314610ac85760405162461bcd60e51b815260040161050d906115d6565b61082d8282611060565b3360009081526001602090815260408083206001600160a01b038616845290915281205482811015610b545760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161050d565b610b613385858403610bfc565b5060019392505050565b6000610b7960055460ff1690565b610b8490600a611728565b61085961073f565b60006104d9338484610d21565b6001600160a01b03811660009081526008602052604081205480610bbe576000610bf5565b6001600160a01b038316600090815260076020526040812090610be2600184611778565b8152602001908152602001600020600101545b9392505050565b6001600160a01b038316610c5e5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161050d565b6001600160a01b038216610cbf5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161050d565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b038316610d855760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161050d565b6001600160a01b038216610de75760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161050d565b610df28383836111b7565b6001600160a01b03831660009081526020819052604090205481811015610e6a5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161050d565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610ea190849061162c565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610eed91815260200190565b60405180910390a35b50505050565b6001600160a01b038216610f525760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161050d565b610f5e600083836111b7565b8060026000828254610f70919061162c565b90915550506001600160a01b03821660009081526020819052604081208054839290610f9d90849061162c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038083166000818152600960208181526040808420805485845282862054949093528787166001600160a01b03198416811790915590519190951694919391928592917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a4610ef68284836111e5565b6001600160a01b0382166110c05760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161050d565b6110cc826000836111b7565b6001600160a01b038216600090815260208190526040902054818110156111405760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161050d565b6001600160a01b038316600090815260208190526040812083830390556002805484929061116f908490611778565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610d14565b505050565b6001600160a01b038084166000908152600960205260408082205485841683529120546111b2929182169116835b816001600160a01b0316836001600160a01b0316141580156112075750600081115b156111b2576001600160a01b03831615611298576001600160a01b0383166000908152600860205260408120549081611241576000611278565b6001600160a01b038516600090815260076020526040812090611265600185611778565b8152602001908152602001600020600101545b905060006112868483611778565b905061129486848484611328565b5050505b6001600160a01b038216156111b2576001600160a01b03821660009081526008602052604081205490816112cd576000611304565b6001600160a01b0384166000908152600760205260408120906112f1600185611778565b8152602001908152602001600020600101545b90506000611312848361162c565b905061132085848484611328565b505050505050565b60008311801561136c57506001600160a01b03841660009081526007602052604081204391611358600187611778565b815260200190815260200160002060000154145b156113af576001600160a01b03841660009081526007602052604081208291611396600187611778565b8152602081019190915260400160002060010155611413565b60408051808201825243815260208082018481526001600160a01b0388166000908152600783528481208882529092529290209051815590516001918201556113f990849061162c565b6001600160a01b0385166000908152600860205260409020555b60408051838152602081018390526001600160a01b038616917fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724910160405180910390a250505050565b600060208083528351808285015260005b8181101561148a5785810183015185820160400152820161146e565b8181111561149c576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146114c957600080fd5b919050565b600080604083850312156114e157600080fd5b6114ea836114b2565b946020939093013593505050565b6000806040838503121561150b57600080fd5b611514836114b2565b9150611522602084016114b2565b90509250929050565b60008060006060848603121561154057600080fd5b611549846114b2565b9250611557602085016114b2565b9150604084013590509250925092565b60006020828403121561157957600080fd5b610bf5826114b2565b60006020828403121561159457600080fd5b5035919050565b600181811c908216806115af57607f821691505b602082108114156115d057634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600d908201526c13db9b1e48185c1c1c9bdd9959609a1b604082015260600190565b60006020828403121561160f57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561163f5761163f611616565b500190565b600181815b8085111561167f57816000190482111561166557611665611616565b8085161561167257918102915b93841c9390800290611649565b509250929050565b600082611696575060016104dd565b816116a3575060006104dd565b81600181146116b957600281146116c3576116df565b60019150506104dd565b60ff8411156116d4576116d4611616565b50506001821b6104dd565b5060208310610133831016604e8410600b8410161715611702575081810a6104dd565b61170c8383611644565b806000190482111561172057611720611616565b029392505050565b6000610bf560ff841683611687565b600081600019048311821515161561175157611751611616565b500290565b60008261177357634e487b7160e01b600052601260045260246000fd5b500490565b60008282101561178a5761178a611616565b50039056fea26469706673582212206c71ccde70acb4c20d6dec92bd2358dc3b35289c30be57877bcf845e82c9bb1064736f6c634300080b0033";

export class GREQ__factory extends ContractFactory {
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
    _migrator: string,
    _sREQ: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GREQ> {
    return super.deploy(_migrator, _sREQ, overrides || {}) as Promise<GREQ>;
  }
  getDeployTransaction(
    _migrator: string,
    _sREQ: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_migrator, _sREQ, overrides || {});
  }
  attach(address: string): GREQ {
    return super.attach(address) as GREQ;
  }
  connect(signer: Signer): GREQ__factory {
    return super.connect(signer) as GREQ__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GREQInterface {
    return new utils.Interface(_abi) as GREQInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): GREQ {
    return new Contract(address, _abi, signerOrProvider) as GREQ;
  }
}
