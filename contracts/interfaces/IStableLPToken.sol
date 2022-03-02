// SPDX-License-Identifier: MIT

pragma solidity ^0.8.12;

import "./IRequiemStableSwap.sol";

interface IStableLPToken {
  function swap() external view returns (IRequiemStableSwap);

  function totalSupply() external view returns (uint256);
}
