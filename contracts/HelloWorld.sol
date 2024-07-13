// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract HelloWorld {
    string private greet = "Hello, World!";

    // Function to return the greeting message
    function getGreeting() public view returns (string memory) {
        return greet;
    }
}
