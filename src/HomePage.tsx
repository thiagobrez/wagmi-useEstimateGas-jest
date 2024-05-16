import { useAccount, useConnect } from 'wagmi';
import SendTransaction from './SendTransaction';

export default function HomePage() {
  const { isConnected } = useAccount();
  const { connect, connectors } = useConnect();

  if (!isConnected) {
    return (
      <div>
        <button onClick={() => connect({ connector: connectors[0] })}>
          Connect Wallet
        </button>
      </div>
    );
  }

  return <SendTransaction />;
}
