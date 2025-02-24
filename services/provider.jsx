
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";


import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http('https://eth-mainnet.g.alchemy.com/v2/...'),
    [sepolia.id]: http('https://eth-sepolia.g.alchemy.com/v2/...'),
  },
});

// import React, { useState, useEffect } from 'react'
// import { RainbowKitSiweNextAuthProvider } from '@rainbow-me/rainbowkit-siwe-next-auth'
// import { WagmiConfig, configureChains, createConfig } from 'wagmi'
// import { RainbowKitProvider, connectorsForWallets, darkTheme } from '@rainbow-me/rainbowkit'
// import {
//   metaMaskWallet,
//   trustWallet,
//   coinbaseWallet,
//   rainbowWallet,
// } from '@rainbow-me/rainbowkit/wallets'
// import { mainnet, polygonMumbai, sepolia, hardhat } from 'wagmi/chains'
// import { alchemyProvider } from 'wagmi/providers/alchemy'
// import { publicProvider } from 'wagmi/providers/public'
// import { SessionProvider } from 'next-auth/react'

// const { chains, publicClient } = configureChains(
//   [mainnet, polygonMumbai, sepolia, hardhat],
//   [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID }), publicProvider()]
// )

// const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

// const connectors = connectorsForWallets([
//   {
//     groupName: 'Recommended',
//     wallets: [
//       metaMaskWallet({ projectId, chains }),
//       trustWallet({ projectId, chains }),
//       coinbaseWallet({ appName: 'Coinbase', chains }),
//       rainbowWallet({ projectId, chains }),
//     ],
//   },
// ])

// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors,
//   publicClient,
// })

// const demoAppInfo = {
//   appName: 'Event Ticket',
// }

// const getSiweMessageOptions = () => ({
//   statement: `
//   Once you're signed in, you'll be able to access all of our dApp's features.
//   Thank you for partnering with DappBnb!`,
// })

// const Providers = ({ children, pageProps }) => {
//   const [mounted, setMounted] = useState(false)
//   useEffect(() => setMounted(true), [])

//   return (
//     <WagmiConfig config={wagmiConfig}>
//       <SessionProvider refetchInterval={0} session={pageProps.session}>
//         <RainbowKitSiweNextAuthProvider getSiweMessageOptions={getSiweMessageOptions}>
//           <RainbowKitProvider theme={darkTheme()} chains={chains} appInfo={demoAppInfo}>
//             {mounted && children}
//           </RainbowKitProvider>
//         </RainbowKitSiweNextAuthProvider>
//       </SessionProvider>
//     </WagmiConfig>
//   )
// }

// export default Providers
