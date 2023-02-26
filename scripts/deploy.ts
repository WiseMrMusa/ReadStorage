import { ethers } from "hardhat";
import { getStorageAt } from "@nomicfoundation/hardhat-network-helpers";

const AddLoc = [
  {
    addr : "0xd65Da948b6E4719Ca6f41AB8836500e565e5C01D",
    loc : 0
  },
  {
    addr : "0xfe4ceFa233605973ABf1bFdfEE7436E472f4E381",
    loc : 1
  },
  {
    addr : "0xDFB1bd4120dF6628bd063CB532724a87A9b4471F",
    loc : 2
  },
  {
    addr : "0xDFB1bd4120dF6628bd063CB532724a87A9b4471F",
    loc : 1
  },
  {
    addr : "0xDFB1bd4120dF6628bd063CB532724a87A9b4471F",
    loc : 3
  },
  {
    addr : "0x76f1EF2448e03276f987aC3c2Dea44fD5E771E4f",
    loc : 3
  },
  {
    addr : "0x76f1EF2448e03276f987aC3c2Dea44fD5E771E4f",
    loc : 1
  },
]

async function main() {

  AddLoc.forEach(async e =>{
    console.log(await getStorageAt(e.addr,e.loc));
  } )
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
