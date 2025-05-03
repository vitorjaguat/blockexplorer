import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';
import { Block, TransactionResponse } from '@ethersproject/abstract-provider';
import cn from 'classnames';
// import { Transaction } from 'alchemy-sdk/lib/types/src/api/alchemy-types';

import './App.css';

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

const colors = [
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
];

const colorClasses = {
  red: [
    'bg-red-900 text-red-100',
    'bg-red-800 text-red-100',
    'bg-red-700 text-red-100',
    'bg-red-600 text-red-100',
    'bg-red-500 text-red-100',
    'bg-red-400 text-red-900',
    'bg-red-300 text-red-900',
    'bg-red-200 text-red-900',
    'bg-red-100 text-red-900',
    'bg-red-50 text-red-900',
  ],
  orange: [
    'bg-orange-900 text-orange-100',
    'bg-orange-800 text-orange-100',
    'bg-orange-700 text-orange-100',
    'bg-orange-600 text-orange-100',
    'bg-orange-500 text-orange-100',
    'bg-orange-400 text-orange-900',
    'bg-orange-300 text-orange-900',
    'bg-orange-200 text-orange-900',
    'bg-orange-100 text-orange-900',
    'bg-orange-50 text-orange-900',
  ],
  amber: [
    'bg-amber-900 text-amber-100',
    'bg-amber-800 text-amber-100',
    'bg-amber-700 text-amber-100',
    'bg-amber-600 text-amber-100',
    'bg-amber-500 text-amber-100',
    'bg-amber-400 text-amber-900',
    'bg-amber-300 text-amber-900',
    'bg-amber-200 text-amber-900',
    'bg-amber-100 text-amber-900',
    'bg-amber-50 text-amber-900',
  ],
  yellow: [
    'bg-yellow-900 text-yellow-100',
    'bg-yellow-800 text-yellow-100',
    'bg-yellow-700 text-yellow-100',
    'bg-yellow-600 text-yellow-100',
    'bg-yellow-500 text-yellow-100',
    'bg-yellow-400 text-yellow-900',
    'bg-yellow-300 text-yellow-900',
    'bg-yellow-200 text-yellow-900',
    'bg-yellow-100 text-yellow-900',
    'bg-yellow-50 text-yellow-900',
  ],
  lime: [
    'bg-lime-900 text-lime-100',
    'bg-lime-800 text-lime-100',
    'bg-lime-700 text-lime-100',
    'bg-lime-600 text-lime-100',
    'bg-lime-500 text-lime-100',
    'bg-lime-400 text-lime-900',
    'bg-lime-300 text-lime-900',
    'bg-lime-200 text-lime-900',
    'bg-lime-100 text-lime-900',
    'bg-lime-50 text-lime-900',
  ],
  green: [
    'bg-green-900 text-green-100',
    'bg-green-800 text-green-100',
    'bg-green-700 text-green-100',
    'bg-green-600 text-green-100',
    'bg-green-500 text-green-100',
    'bg-green-400 text-green-900',
    'bg-green-300 text-green-900',
    'bg-green-200 text-green-900',
    'bg-green-100 text-green-900',
    'bg-green-50 text-green-900',
  ],
  emerald: [
    'bg-emerald-900 text-emerald-100',
    'bg-emerald-800 text-emerald-100',
    'bg-emerald-700 text-emerald-100',
    'bg-emerald-600 text-emerald-100',
    'bg-emerald-500 text-emerald-100',
    'bg-emerald-400 text-emerald-900',
    'bg-emerald-300 text-emerald-900',
    'bg-emerald-200 text-emerald-900',
    'bg-emerald-100 text-emerald-900',
    'bg-emerald-50 text-emerald-900',
  ],
  teal: [
    'bg-teal-900 text-teal-100',
    'bg-teal-800 text-teal-100',
    'bg-teal-700 text-teal-100',
    'bg-teal-600 text-teal-100',
    'bg-teal-500 text-teal-100',
    'bg-teal-400 text-teal-900',
    'bg-teal-300 text-teal-900',
    'bg-teal-200 text-teal-900',
    'bg-teal-100 text-teal-900',
    'bg-teal-50 text-teal-900',
  ],
  cyan: [
    'bg-cyan-900 text-cyan-100',
    'bg-cyan-800 text-cyan-100',
    'bg-cyan-700 text-cyan-100',
    'bg-cyan-600 text-cyan-100',
    'bg-cyan-500 text-cyan-100',
    'bg-cyan-400 text-cyan-900',
    'bg-cyan-300 text-cyan-900',
    'bg-cyan-200 text-cyan-900',
    'bg-cyan-100 text-cyan-900',
    'bg-cyan-50 text-cyan-900',
  ],
  sky: [
    'bg-sky-900 text-sky-100',
    'bg-sky-800 text-sky-100',
    'bg-sky-700 text-sky-100',
    'bg-sky-600 text-sky-100',
    'bg-sky-500 text-sky-100',
    'bg-sky-400 text-sky-900',
    'bg-sky-300 text-sky-900',
    'bg-sky-200 text-sky-900',
    'bg-sky-100 text-sky-900',
    'bg-sky-50 text-sky-900',
  ],
  blue: [
    'bg-blue-900 text-blue-100',
    'bg-blue-800 text-blue-100',
    'bg-blue-700 text-blue-100',
    'bg-blue-600 text-blue-100',
    'bg-blue-500 text-blue-100',
    'bg-blue-400 text-blue-900',
    'bg-blue-300 text-blue-900',
    'bg-blue-200 text-blue-900',
    'bg-blue-100 text-blue-900',
    'bg-blue-50 text-blue-900',
  ],
};

function App() {
  const [blockData, setBlockData] = useState<Block>();
  const [openTx, setOpenTx] = useState<string>();
  const [openTxData, setOpenTxData] = useState<TransactionResponse | null>();
  const [color, setColor] = useState<keyof typeof colorClasses>('red');

  useEffect(() => {
    async function getBlockData() {
      setInterval(async () => {
        const latest = await alchemy.core.getBlock('latest');
        // console.log('latest block number', latest);
        setColor(
          colors[
            +latest.number.toString().slice(-1)
          ] as keyof typeof colorClasses
        );
        setBlockData(latest);
        console.log(color);
      }, 12000);
    }

    getBlockData();
    // console.log('blockData', blockData);
  }, []);

  const openTransaction = (tx: string) => {
    setOpenTx(tx);
    async function getTransactionData() {
      const txData = await alchemy.core.getTransaction(tx);
      console.log('txData', txData);
      setOpenTxData(txData);
    }
    getTransactionData();
    console.log('openTx', openTx);
    console.log('openTxData', openTxData);
  };

  return (
    <div className='h-screen flex flex-col justify-between text-left bg-neutral-200 font-mono duration-700'>
      {openTx && openTxData && (
        <div className='fixed flex flex-col top-0 right-0 bg-red-500 text-white p-4 text-xs'>
          <div className=''>{openTxData?.hash}</div>
          <div className=''>From: {openTxData?.from}</div>
          <div className=''>To: {openTxData?.to}</div>
          <div className=''>Value: {openTxData?.value.toString()}</div>
          <div className=''>Nonce: {openTxData?.nonce}</div>
          <div className=''>Gas Price: {openTxData?.gasPrice?.toString()}</div>
          <div className=''>Gas Limit: {openTxData?.gasLimit?.toString()}</div>
          {/* <div className=''>Input: {openTxData?.data}</div> */}
          <div className=''>Block Number: {openTxData?.blockNumber}</div>
          <div className=''>Block Hash: {openTxData?.blockHash}</div>
          <div className=''>Confirmations: {openTxData?.confirmations}</div>
          <div
            className='text-black cursor-pointer'
            onClick={() => setOpenTx(undefined)}
          >
            x
          </div>
        </div>
      )}
      <div
        className={cn(
          'App flex-1 uppercase duration-700',
          colorClasses[color][0]
        )}
      >
        Latest Block Number: {blockData?.number}
      </div>
      <div
        className={cn(
          'flex-1 duration-700 animate-color',
          colorClasses[color][1]
        )}
      >
        Hash: {blockData?.hash}
      </div>
      <div
        className={cn(
          'flex-1 duration-700 animate-color',
          colorClasses[color][2]
        )}
      >
        Timestamp: {blockData?.timestamp}
      </div>
      <div
        className={cn(
          'flex-1 duration-700 animate-color',
          colorClasses[color][3]
        )}
      >
        Transactions: {blockData?.transactions.length}
      </div>
      <div
        className={cn(
          'flex-1 duration-700 animate-color',
          colorClasses[color][4]
        )}
      >
        Miner: {blockData?.miner}
      </div>
      <div
        className={cn(
          'flex-1 duration-700 animate-color',
          colorClasses[color][5]
        )}
      >
        Difficulty: {blockData?.difficulty}
      </div>
      <div
        className={cn(
          'flex-1 duration-700 animate-color',
          colorClasses[color][6]
        )}
      >
        Gas Limit: {blockData?.gasLimit.toString()}
      </div>
      <div
        className={cn(
          'flex-1 duration-700 animate-color',
          colorClasses[color][7]
        )}
      >
        Gas Used: {blockData?.gasUsed.toString()}
      </div>
      <div
        className={cn(
          'flex-1 duration-700 animate-color',
          colorClasses[color][8]
        )}
      >
        Base Fee Per Gas: {blockData?.baseFeePerGas?.toString()}
      </div>
      <div
        className={cn(
          'flex-1 duration-700 animate-color',
          colorClasses[color][9]
        )}
      >
        Extra Data: {blockData?.extraData}
      </div>
      {/* <div className={cn('flex-1 duration-700 animate-color', colorClasses[color][9])}>
        Size: {blockData?.size}
      </div> */}
      <div
        className={cn(
          'flex-1 duration-700 animate-color',
          'bg-stone-50',
          `text-stone-600`
        )}
      >
        Parent Hash: {blockData?.parentHash}
      </div>
      <div
        className={cn(
          'flex-1 duration-1000 animate-color transition-all',
          'bg-blue-100',
          'text-[6px]',
          'grid grid-cols-3 gap-1 text-center'
        )}
        style={{
          maxHeight: blockData?.transactions.length
            ? `${blockData.transactions.length * 2}rem`
            : '0',
        }}
      >
        {blockData?.transactions.map((tx, index) => (
          <div
            key={index}
            className='inline bg-stone-200 text-stone-900 cursor-pointer hover:text-black hover:bg-green-300'
            onClick={() => openTransaction(tx)}
          >
            {tx + ' '}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
