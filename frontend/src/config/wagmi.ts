// src/config/wagmi.ts
"use client";

import { createConfig } from "@privy-io/wagmi";
import { http } from "wagmi";
import { monadTestnet } from "./chains";

export const config = createConfig({
  chains: [monadTestnet],
  transports: {
    [monadTestnet.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}