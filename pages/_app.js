import '@/styles/globals.css';
// import { Web3Modal } from '@web3modal/react';
// import { chains, providers} from '@web3modal/ethereum';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { configureChains, createConfig, sepolia, WagmiConfig } from 'wagmi';
import { arbitrum, arbitrumGoerli, auroraTestnet, avalancheFuji, goerli, lineaTestnet, optimismGoerli, polygon, polygonMumbai } from 'wagmi/chains';

// const modalConfig = {
//   theme: "dark",
//   accentColor: "default",
//   ethereum: {
//     appName: "Test",
//     chains: [chains.goerli, chains.polygonMumbai],
//     providers: [
//       providers.walletConnectProvider({
//         projectId: "7cc6f5638a4cbaafc5052e5a179687e6",
//       }),
//     ],
//     autoConnect: true,
//   },
//   projectId: "7cc6f5638a4cbaafc5052e5a179687e6",
// }

const chains = [arbitrumGoerli, goerli, polygonMumbai, optimismGoerli, sepolia, lineaTestnet, avalancheFuji, auroraTestnet];
const projectId = '7cc6f5638a4cbaafc5052e5a179687e6';

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Component {...pageProps} />
      <Web3Modal config={modalConfig} /> */}
      <WagmiConfig config={wagmiConfig}>
        <Component {...pageProps} />
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}
