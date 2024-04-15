// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract CurrencyConverter {
    AggregatorV3Interface internal avaxUsdPriceFeed;
    AggregatorV3Interface internal dotUsdPriceFeed;
    AggregatorV3Interface internal maticUsdPriceFeed;
    AggregatorV3Interface internal linkUsdPriceFeed;

    constructor() {
        avaxUsdPriceFeed = AggregatorV3Interface(0x5498BB86BC934c8D34FDA08E81D444153d0D06aD);
        dotUsdPriceFeed = AggregatorV3Interface(0x3C07402a102647102d03E14582251Cf49D6217B4);
        maticUsdPriceFeed = AggregatorV3Interface(0xB0924e98CAFC880ed81F6A4cA63FD61006D1f8A0);
        linkUsdPriceFeed = AggregatorV3Interface(0x34C4c526902d88a3Aa98DB8a9b802603EB1E3470);
    }

    function getAvaxUsdPrice() external view returns (int) {
    (, int price, , ,) = avaxUsdPriceFeed.latestRoundData();
    return price;
    }

    function getDotUsdPrice() external view returns (int) {
        (, int price, , ,) = dotUsdPriceFeed.latestRoundData();
        return price;
    }

    function getMaticUsdPrice() external view returns (int) {
        (, int price, , ,) = maticUsdPriceFeed.latestRoundData();
        return price;
    }

    function getLinkUsdPrice() external view returns (int) {
        (, int price, , ,) = linkUsdPriceFeed.latestRoundData();
        return price;
    }
}