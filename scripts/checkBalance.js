async function main() {
    const [deployer] = await hre.ethers.getSigners();
    const Token = await hre.ethers.getContractFactory("AituSE2320");
    const token = await Token.attach("0x5042EF8dffa394b8d9Eb98120ADF47126e96B6ab"); // Укажите адрес развернутого контракта
  
    // Получаем баланс владельца
    const balance = await token.balanceOf(deployer.address);
    console.log("Owner balance:", ethers.utils.formatUnits(balance, 18));
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  