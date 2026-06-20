// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MockUSDC is ERC20 {
    constructor() ERC20("Mock USDC", "USDC") {
        // This mints 1,000,000 tokens to the wallet that deploys it
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}