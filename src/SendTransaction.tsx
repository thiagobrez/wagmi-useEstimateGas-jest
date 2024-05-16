import { parseEther } from 'viem';
import { useEstimateGas, useSendTransaction } from 'wagmi';

const VITALIK_ADDRESS = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045';
// const VALUE = parseEther('0.0001');
const VALUE = parseEther('100');

export default function SendTransaction() {
  const {
    data: gas,
    isLoading: isGasLoading,
    isError: isGasError,
    isSuccess: isGasSuccess,
    error: gasError,
  } = useEstimateGas({
    to: VITALIK_ADDRESS,
    value: VALUE,
  });

  const {
    sendTransaction,
    isPending: txLoading,
    isError: txError,
    isSuccess: isTxSuccess,
  } = useSendTransaction();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <button
        onClick={() =>
          sendTransaction({
            gas,
            to: VITALIK_ADDRESS,
            value: VALUE,
          })
        }
      >
        Send 0.001 ETH to Vitalik
      </button>
      <span>
        Estimate gas status:{' '}
        {isGasLoading
          ? 'Loading'
          : isGasError
          ? 'Error'
          : isGasSuccess
          ? 'Success'
          : 'None'}
      </span>

      <span>Estimate gas error: {gasError ? gasError.message : 'None'}</span>

      {/* <span>
        Transaction status:{' '}
        {txLoading
          ? 'Loading'
          : txError
          ? 'Error'
          : isTxSuccess
          ? 'Success'
          : 'None'}
      </span> */}
    </div>
  );
}
