const hre = require("hardhat");

async function main() {
    const [owner, addr1] = await hre.ethers.getSigners();
    const Token = await hre.ethers.getContractFactory("AituSE2320");
    const token = await Token.attach("0x5042EF8dffa394b8d9Eb98120ADF47126e96B6ab"); // Адрес развернутого контракта

    const amount = hre.ethers.utils.parseUnits("100", 18); // 100 токенов
    const recipient = addr1.address;

    // Возврат токенов
    const tokenFromAddr1 = token.connect(addr1);
    const tx = await tokenFromAddr1.transfer(owner.address, amount);
    await tx.wait();

    console.log(`Successfully returned 100 tokens from ${recipient} to ${owner.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
