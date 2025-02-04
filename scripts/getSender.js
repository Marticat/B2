const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log("Using account:", deployer.address);

    const Token = await hre.ethers.getContractFactory("AituSE2320");
    const token = await Token.attach("0x5042EF8dffa394b8d9Eb98120ADF47126e96B6ab"); // Убедитесь, что используете правильный адрес контракта

    const sender = await token.getTransactionSender();
    console.log("Sender address:", sender);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
