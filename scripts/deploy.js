async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const Token = await ethers.getContractFactory("AituSE2320");
  const initialSupply = ethers.utils.parseUnits("1000000", 18);
  const token = await Token.deploy(initialSupply);

  console.log("Token deployed to:", token.address); // This will print the address of the deployed contract
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
