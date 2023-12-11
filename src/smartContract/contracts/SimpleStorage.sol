// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract SimpleStorage is Ownable {
    uint256 private number;

    function store(uint256 _number) public onlyOwner {
        number = _number;
    }

    function retrieve() public view returns (uint256) {
        return number;
    }
}