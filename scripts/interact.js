const hre = require("hardhat");

async function main() {
  // Contract related
  const contractAddress = "0x89A7760C6348225361306759ceD197Bf64E3d5b7";
  const Contract = await hre.ethers.getContractFactory("HelloWorld");
  const contract = Contract.attach(contractAddress);

  // Calling
  const message = await contract.getGreeting();
  console.log("Message", message);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
