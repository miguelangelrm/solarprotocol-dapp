import { ethers } from 'ethers'
import { Chain, defaultChains } from 'wagmi'

export const FTM_CHAIN_PARAMS_ADD = {
  chainId: '0x19',
  chainName: 'Fantom',
  nativeCurrency: {
    name: 'Fantom',
    symbol: 'FTM', // 2-6 characters long
    decimals: 18,
  },
  rpcUrls: ['https://rpc.ftm.tools/'],
  blockExplorerUrls: ['https://ftmscan.com/'],
}

export const METIS_CHAIN_PARAMS = {
  chainId: '0x19',
  networkId: 25,
  chainName: 'Fantom',
  nativeCurrency: {
    name: 'Fantom',
    symbol: 'FTM', // 2-6 characters long
    decimals: 18,
  },
  rpcUrls: ['https://rpc.ftm.tools/'],
  blockExplorerUrls: ['https://ftmscan.com/'],
}

interface INetworkDetails {
  [key: number]: {
    rpcUrl: string
    chainProviders: ethers.providers.BaseProvider
    blockExplorerURL: string
    blockExplorerName: string
    prefix: string
    logoURI: string
  }
}

interface IConnectorIcon {
  [key: string]: {
    logoURI: string
  }
}

export const connectorIcons: IConnectorIcon = {
  MetaMask: {
    logoURI:
      'https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg',
  },
  'Coinbase Wallet': {
    logoURI: 'https://avatars.githubusercontent.com/u/1885080?s=200&v=4',
  },
  WalletConnect: {
    logoURI:
      'https://raw.githubusercontent.com/WalletConnect/walletconnect-assets/master/png/circle/walletconnect-circle-blue.png',
  },
}

interface ISecondsByDuration {
  [key: string]: number
}

export const networkDetails: INetworkDetails = {
  43114: {
    rpcUrl: 'https://api.avax.network/ext/bc/C/rpc',
    chainProviders: new ethers.providers.JsonRpcProvider(
      'https://api.avax.network/ext/bc/C/rpc'
    ),
    blockExplorerURL: 'https://snowtrace.io/',
    blockExplorerName: 'Snowtrace',
    prefix: 'avax',
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/avalanchex/info/logo.png',
  },
  137: {
    rpcUrl: 'https://polygon-rpc.com/',
    chainProviders: new ethers.providers.JsonRpcProvider(
      'https://polygon-rpc.com/'
    ),
    blockExplorerURL: 'https://polygonscan.com/',
    blockExplorerName: 'Polygonscan',
    prefix: 'polygon',
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/info/logo.png',
  },
  250: {
    rpcUrl: 'https://rpc.ftm.tools/',

    chainProviders: new ethers.providers.JsonRpcProvider(
      'https://rpc.ftm.tools/'
    ),

    blockExplorerURL: 'https://ftmscan.com',
    blockExplorerName: 'FTMScan',
    prefix: 'fantom',
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/fantom/info/logo.png',
  },
  1: {
    rpcUrl: 'https://rpc.ankr.com/eth',

    chainProviders: new ethers.providers.JsonRpcProvider(
      'https://rpc.ankr.com/eth'
    ),

    blockExplorerURL: 'https://etherscan.io/',
    blockExplorerName: 'Etherscan',
    prefix: 'ethereum',
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png',
  },
  10: {
    rpcUrl: 'https://mainnet.optimism.io',
    chainProviders: new ethers.providers.JsonRpcProvider(
      'https://mainnet.optimism.io'
    ),
    blockExplorerURL: 'https://optimistic.etherscan.io/',
    blockExplorerName: 'Etherscan',
    prefix: 'optimism',
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/optimism/info/logo.png',
  },
  56: {
    rpcUrl: 'https://bsc-dataseed.binance.org',
    chainProviders: new ethers.providers.JsonRpcProvider(
      'https://bsc-dataseed.binance.org'
    ),
    blockExplorerURL: 'https://www.bscscan.com/',
    blockExplorerName: 'BscScan',
    prefix: 'bsc',
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/info/logo.png',
  },
}

export const ftmChain: Chain = {
  id: 250,
  name: 'Fantom',
  network: 'Fantom Opera',
  rpcUrls: { default: 'https://rpc.ftm.tools' },
  blockExplorers: { default: { name: 'ftmscan', url: 'https://ftmscan.com' } },
  nativeCurrency: { name: 'Fantom', symbol: 'FTM', decimals: 18 },
}

export const allChains: Chain[] = [...defaultChains, ftmChain]
export const secondsByDuration: ISecondsByDuration = {
  week: 7 * 24 * 60 * 60,
  month: 30 * 24 * 60 * 60,
  year: 365 * 24 * 60 * 60,
}