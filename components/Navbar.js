import React from 'react'
import { useRouter } from 'next/router'
import useMetamask from '../hooks/useMetamask'
import useStore from '../store/store'
export default function Navbar() {
    const wallet = useMetamask('polygon-testnet')
    const router = useRouter()
    const store = useStore()
    const currentAccount = store.currentAccount
    return (
        <>
            <div className='text-white flex h-16 sticky top-0 z-10 w-full flex-row justify-between items-center px-6'>
                <div className='h-28 w-28'>
                    <img
                        src='/Assets/logo.png'
                        alt=''
                    />
                </div>
                <div>
                    <input
                        className='w-96 bg-[#2d2d2d] px-8 py-2 border-none rounded-md outline-1 outline-purple-500'
                        placeholder='Search what you want to see?'
                    ></input>
                </div>
                <div className='flex gap-4'>
                    {currentAccount.length > 0 && (
                        <button
                            className='border-2 px-4 py-1 rounded-md hover:border-purple-500 hover:text-purple-500 transition-all hover:bg-slate-800 hover:scale-105'
                            onClick={() => {
                                router.push('/upload')
                            }}
                        >
                            Upload
                        </button>
                    )}
                    <button
                        className='border-2 px-4 py-1 rounded-lg hover:border-purple-500 hover:text-purple-500 transition-all hover:bg-slate-800 hover:scale-105'
                        onClick={() => {
                            wallet.then(res => {
                                console.log(res)
                                store.setCurrentAccount(res)
                                router.push('/home')
                            })
                        }}
                    >
                        {currentAccount.length > 0 ? (
                            <>0x..{currentAccount.slice(38)}</>
                        ) : (
                            <>Connect</>
                        )}
                    </button>
                </div>
            </div>
        </>
    )
}
