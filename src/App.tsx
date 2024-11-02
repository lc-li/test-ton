
import './App.css'
import { TonConnectButton } from '@tonconnect/ui-react'
import { useMainContract } from './hooks/useMainContract'
import { useTonConnect } from './hooks/useTonConnect';


function App() {

  const { 
    contract_address, 
    counter_value, 
    owner_address,
    contract_balance,
    sendIncrement,
    sendDeposit,
    sendWithdrawalRequest
  } = useMainContract();

  const { connected } = useTonConnect();

  return (
    <div>
      <div>
        <TonConnectButton />
      </div>
      <div>
        <div className='Card'>
          <b>Our contract address:</b>
          <div className='Hint'>{contract_address?.slice(0, 30) + "..."}</div>
          <b>owner address:</b>
          <div className='Hint'>{owner_address?.toString()}</div>
          <b>Our contract Balacne:</b>
          {contract_balance && (
            <div className='Hint'>{contract_balance}</div>
            )}
        </div>

        <div className='Card'>
          <b>Counter value:</b>
          <div>{counter_value ?? "Loading..."}</div>
        </div>

        {connected && (
          <a onClick={() => {
            sendIncrement()
          }}>
            Increment by 5
          </a>
        )}

        <br/>

        {connected && (
          <a 
          onClick={() => {
            sendDeposit()
          }}>
            Request deposit of 1 TON
          </a>
        )}

        <br/>

        {connected && (
          <a onClick={() => {
            sendWithdrawalRequest()
          }}>
            Request withdrawal of 0.7 TON
          </a>
        )}
      </div>
    </div>
  );
}

export default App;
