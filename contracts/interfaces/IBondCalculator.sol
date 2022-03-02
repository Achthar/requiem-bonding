// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;

interface IBondCalculator {
  function valuation(address _LP, uint256 _amount)
    external
    view
    returns (uint256);

  function markdown(address _LP) external view returns (uint256);
}
