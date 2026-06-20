// src/providers/Web3Provider.tsx
"use client";

import { useEffect } from "react";
import { PrivyProvider } from "@privy-io/react-auth";
import { WagmiProvider } from "@privy-io/wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "@/config/wagmi";
import { monadTestnet } from "@/config/chains";
import { migrateFromLocalStorage } from "@/utils/encryptedStore";
import { AgentProvider } from "@/providers/AgentProvider";

const queryClient = new QueryClient();

export function Web3Provider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    migrateFromLocalStorage().catch((err) =>
      console.error("[Migration] Failed to migrate localStorage to IndexedDB:", err)
    );
  }, []);
  
  const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID;

  if (!appId) return null; // Add error handling UI if preferred

  return (
    <PrivyProvider
      appId={appId}
      config={{
        defaultChain: monadTestnet,
        supportedChains: [monadTestnet],
        loginMethods: ["wallet", "email", "sms", "google", "apple"],
        appearance: {
          theme: "dark",
          accentColor: "#A76FFA",
        },
        embeddedWallets: {
          ethereum: { createOnLogin: "users-without-wallets" },
          showWalletUIs: true,
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={config}>
          <AgentProvider>{children}</AgentProvider>
        </WagmiProvider>
      </QueryClientProvider>
    </PrivyProvider>
  );
}