/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IRequiemSwapInterface extends ethers.utils.Interface {
  functions: {
    "calculateSwapGivenIn(address,address,uint256)": FunctionFragment;
    "calculateSwapGivenOut(address,address,uint256)": FunctionFragment;
    "onSwap(address,address,uint256,uint256,address)": FunctionFragment;
    "onSwapGivenIn(address,address,uint256,uint256,address)": FunctionFragment;
    "onSwapGivenOut(address,address,uint256,uint256,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "calculateSwapGivenIn",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateSwapGivenOut",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "onSwap",
    values: [string, string, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "onSwapGivenIn",
    values: [string, string, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "onSwapGivenOut",
    values: [string, string, BigNumberish, BigNumberish, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "calculateSwapGivenIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateSwapGivenOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "onSwap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onSwapGivenIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onSwapGivenOut",
    data: BytesLike
  ): Result;

  events: {};
}

export class IRequiemSwap extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IRequiemSwapInterface;

  functions: {
    calculateSwapGivenIn(
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    calculateSwapGivenOut(
      tokenIn: string,
      tokenOut: string,
      amountOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    onSwap(
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      amountOut: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    onSwapGivenIn(
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    onSwapGivenOut(
      tokenIn: string,
      tokenOut: string,
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  calculateSwapGivenIn(
    tokenIn: string,
    tokenOut: string,
    amountIn: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateSwapGivenOut(
    tokenIn: string,
    tokenOut: string,
    amountOut: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  onSwap(
    tokenIn: string,
    tokenOut: string,
    amountIn: BigNumberish,
    amountOut: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  onSwapGivenIn(
    tokenIn: string,
    tokenOut: string,
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  onSwapGivenOut(
    tokenIn: string,
    tokenOut: string,
    amountOut: BigNumberish,
    amountInMax: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    calculateSwapGivenIn(
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateSwapGivenOut(
      tokenIn: string,
      tokenOut: string,
      amountOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onSwap(
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      amountOut: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    onSwapGivenIn(
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onSwapGivenOut(
      tokenIn: string,
      tokenOut: string,
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    calculateSwapGivenIn(
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateSwapGivenOut(
      tokenIn: string,
      tokenOut: string,
      amountOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onSwap(
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      amountOut: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    onSwapGivenIn(
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    onSwapGivenOut(
      tokenIn: string,
      tokenOut: string,
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    calculateSwapGivenIn(
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateSwapGivenOut(
      tokenIn: string,
      tokenOut: string,
      amountOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onSwap(
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      amountOut: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    onSwapGivenIn(
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    onSwapGivenOut(
      tokenIn: string,
      tokenOut: string,
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
