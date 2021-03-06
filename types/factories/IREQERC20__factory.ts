/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IREQERC20, IREQERC20Interface } from "../IREQERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IREQERC20__factory {
  static readonly abi = _abi;
  static createInterface(): IREQERC20Interface {
    return new utils.Interface(_abi) as IREQERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IREQERC20 {
    return new Contract(address, _abi, signerOrProvider) as IREQERC20;
  }
}
