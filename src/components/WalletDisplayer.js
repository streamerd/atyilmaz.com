import dotenv from 'dotenv'
dotenv.config()

import {
    InjectedConnector,
    Provider,
    WalletConnectConnector,
    WalletLinkConnector,
    chain,
    defaultChains,
  } from 'wagmi'
  
  import { WalletProviders } from './WalletProviders'
  
  // API key for Ethereum node
  // Two popular services are Infura (infura.io) and Alchemy (alchemy.com)
  const infuraId = process.env.INFURA_ID
  
  // Chains for connectors to support
  const chains = defaultChains
  
  // Set up connectors
  const connectors = ({ chainId }) => {
    const rpcUrl =
      chains.find((x) => x.id === chainId)?.rpcUrls?.[0] ??
      chain.mainnet.rpcUrls[0]
    return [
      new InjectedConnector({ chains }),
      new WalletConnectConnector({
        options: {
          infuraId,
          qrcode: true,
        },
      }),
      new WalletLinkConnector({
        options: {
          appName: 'My wagmi app',
          jsonRpcUrl: `${rpcUrl}/${infuraId}`,
        },
      }),
    ]
  }