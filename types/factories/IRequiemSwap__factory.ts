/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IRequiemSwap, IRequiemSwapInterface } from "../IRequiemSwap";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    name: "calculateSwapGivenIn",
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
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    name: "calculateSwapGivenOut",
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
];

export class IRequiemSwap__factory {
  static readonly abi = _abi;
  static createInterface(): IRequiemSwapInterface {
    return new utils.Interface(_abi) as IRequiemSwapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRequiemSwap {
    return new Contract(address, _abi, signerOrProvider) as IRequiemSwap;
  }
}
