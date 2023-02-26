import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config()

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  defaultNetwork: "hardhat",
  networks : {
    hardhat: {
      forking : {
        enabled : true,
        //@ts-ignore
        url : process.env.GOERLI
      }

  }}}

export default config;
