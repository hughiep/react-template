import "./App.css";

import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Wallet from "~/modules/wallet";
import { config } from "~/modules/common/lib/wagmi";

console.log("???", import.meta.env.MODE);

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Wallet />
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
