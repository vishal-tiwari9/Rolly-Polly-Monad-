import { defineChain } from "viem";


export const skaleBiteV2Sandbox = defineChain({
  id: 103698795,
  name: "SKALE BITE V2 Sandbox",
  nativeCurrency: {
    decimals: 18,
    name: "sFUEL",
    symbol: "sFUEL",
  },
  rpcUrls: {
    default: {
      http: ["https://base-sepolia-testnet.skalenodes.com/v1/bite-v2-sandbox"],
    },
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://base-sepolia-testnet-explorer.skalenodes.com:10032",
    },
  },
  testnet: true,
});



export const monadTestnet = defineChain({
  id: 10143,
  name: 'Monad Testnet',
  network: 'monad-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'MON',
    symbol: 'MON',
  },
  rpcUrls: {
    default: { http: ['https://testnet-rpc.monad.xyz'] },
  },
  blockExplorers: {
    default: { name: 'MonadScan', url: 'https://testnet.monadexplorer.com' },
  },
  testnet: true,
});
export const BITE_RPC_URL =
  "https://base-sepolia-testnet.skalenodes.com/v1/bite-v2-sandbox";
