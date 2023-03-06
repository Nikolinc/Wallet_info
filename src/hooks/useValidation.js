import Web3 from "web3";

const web3 = new Web3("https://node1.tmyblockchain.org/rpc");

export function getTokenStore() {
  let address = localStorage.getItem("token");
  if (address !== "") {
    return checkAddress(address);
  } else {
    return false;
  }
}

export function checkAddress(address) {
  return web3.utils.toChecksumAddress(address);
}
