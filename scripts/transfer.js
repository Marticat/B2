const hre = require("hardhat");

async function main() {
    const [owner] = await hre.ethers.getSigners();
    const Token = await hre.ethers.getContractFactory("AituSE2320");
    const token = await Token.attach("0x5042EF8dffa394b8d9Eb98120ADF47126e96B6ab"); // Адрес развернутого контракта

    const recipient = "0x9CeD9F76b87f28383DdD5aF2142d27E75c234Df3"; // Замените на адрес получателя
    const amount = hre.ethers.utils.parseUnits("100", 18); // 100 токенов

    // Выполнить перевод
    const tx = await token.transfer(recipient, amount);
    await tx.wait();

    console.log(`Successfully transferred 100 tokens to ${recipient}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
