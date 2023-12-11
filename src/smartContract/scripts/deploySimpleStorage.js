const { ethers } = require("hardhat");


async function main() {
    const [deployer] = await ethers.getSigners();
    
    console.log("Deploying contracts with the account:", deployer.address);


    // 獲取並顯示帳戶餘額
    const balance = await ethers.provider.getBalance(deployer.address);
    console.log("Deployer's balance:", ethers.formatEther(balance), "ETH");


    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    const simpleStorage = await SimpleStorage.deploy();

    // const SimpleStorage = await ethers.deployContract("SimpleStorage");

    // simpleStorage.wait(5);
    // // 獲取交易回條
    // const receipt = await ethers.provider.getTransactionReceipt(simpleStorage.deployTransaction.hash);
 
    // if (receipt && receipt.status === 1) {
    //     console.log("SimpleStorage deployed to:", simpleStorage.address);
    // } else {
    //     console.error("Failed to deploy SimpleStorage.");
    // }

    // console.log(simpleStorage)
    
    // if (simpleStorage.address) {
    //     console.log("SimpleStorage deployed to:", simpleStorage.address);
    // } else {
    //     console.log("Failed to deploy SimpleStorage.");
    // }
    console.log("SimpleStorage deployed to:", simpleStorage.target);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });