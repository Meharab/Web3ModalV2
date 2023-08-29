// import { useAccount, ConnectButton } from '@web3modal/react';
import { Web3Button } from '@web3modal/react';
import { Web3NetworkSwitch } from '@web3modal/react';
import { W3mQrCode } from '@web3modal/react';

export default function Home() {
  // const { address, isConnected } = useAccount();

  // if (!isConnected) {
  //   return <ConnectButton />
  // }

  // return <div>Your address is {address}</div>
  return <Web3Button />
  // return <Web3NetworkSwitch />
  // return <W3mQrCode size={200} imageUrl="url/to/image" uri="data" />
}
