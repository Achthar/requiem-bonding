// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

import "../interfaces/IWeightedPair.sol";

// solhint-disable func-name-mixedcase

contract TestPair is IWeightedPair {
  uint256 public totalSupply;
  ReserveData public reserveData;
  address public token0;
  address public token1;
  uint32 public weight0;
  uint32 public weight1;

  constructor(
    uint256 _supply,
    address _token0,
    address _token1,
    uint32 _weight0,
    uint32 _weight1
  ) {
    totalSupply = _supply;
    token0 = _token0;
    token1 = _token1;
    weight0 = _weight0;
    weight1 = _weight1;

    reserveData = ReserveData(0, 0, 0, 0);
  }

  function setReserves(
    uint256 _reserves0,
    uint256 _reserves1,
    uint256 _vReserves0,
    uint256 _vReserves1
  ) public {
    ReserveData memory _reserveData = ReserveData(
      _reserves0,
      _reserves1,
      _vReserves0,
      _vReserves1
    );
    reserveData = _reserveData;
  }

  function getReserves() external view returns (ReserveData memory) {
    ReserveData memory _reserveData = IWeightedPair.ReserveData(
      reserveData.reserve0,
      reserveData.reserve1,
      reserveData.vReserve0,
      reserveData.vReserve1
    );
    return _reserveData;
  }

  function getParameters()
    external
    view
    returns (
      uint32 _tokenWeight0,
      uint32 _tokenWeight1,
      uint32 _swapFee,
      uint32 _amp
    )
  {
    _tokenWeight0 = weight0;
    _tokenWeight1 = weight1;
    _swapFee = 0;
    _amp = 0;
  }
}
