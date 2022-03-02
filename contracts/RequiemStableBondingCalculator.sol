// SPDX-License-Identifier: MIT

pragma solidity 0.8.12;

import "./interfaces/IBondingCalculator.sol";
import "./interfaces/ERC20/IERC20.sol";
import "./interfaces/IRequiemSwap.sol";
import "./libraries/math/FixedPoint.sol";
import "./interfaces/IStableLPToken.sol";


/**
 * Bonding calculator for stable pool
 */
contract RequiemStableBondingCalculator is IBondingCalculator {
  using FixedPoint for *;

  address public immutable QUOTE;

  constructor(address _QUOTE) {
    require(_QUOTE != address(0));
    QUOTE = _QUOTE;
  }

  // calculates the liquidity value denominated in the provided token
  // uses the 0.01% inputAmount for that calculation
  // note that we never use the actual LP as input as the swap contains the LP address
  // and is also used to extract the balances
  function getTotalValue(address _lpAddress) public view returns (uint256 _value) {
    IRequiemStableSwap swap = IStableLPToken(_lpAddress).swap();
    uint256[] memory reserves = swap.getTokenBalances();
    uint8 quoteIndex = swap.getTokenIndex(QUOTE);
    for (uint8 i = 0; i < reserves.length; i++) {
      if (i != quoteIndex) {
        _value +=
          swap.calculateSwap(
            i,
            quoteIndex,
            reserves[i] / 10000
          ) *
          10000;
      }
    }
  }

  function valuation(address _lpAddress, uint256 amount_)
    external
    view
    override
    returns (uint256 _value)
  {
    uint256 totalValue = getTotalValue(_lpAddress);
    uint256 totalSupply = IStableLPToken(_lpAddress).totalSupply();

    _value =
      (totalValue *
        FixedPoint.fraction(amount_, totalSupply).decode112with18()) /
      1e18;
  }

  function markdown(address _lpAddress) external view returns (uint256) {
    return getTotalValue(_lpAddress);
  }
}
