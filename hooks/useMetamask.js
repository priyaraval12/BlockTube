import { ethers } from 'ethers'
/**
 *
 * @param  NetworkName
 * @returns Address of Currnent Account
 *
 * You can pass the name of network that you wants to connect
 * Supported network is:
 * Ethereum main-net,
 * Goerli,
 * Rinkeby,
 * Polygon,
 * Polygon-testnet
 *
 * @example
 * const wallet=useMetamask(Network.Goerli);
 * wallet.then(res=>console.log(res));
 */
const useMetamask = async Network_Name => {
    const chainId = getChainIdFromNetwork(Network_Name)
    try {
        const { ethereum } = window
        if (!ethereum) {
            alert('Install Metamask')
            return
        }
        const accounts = await ethereum.request({
            method: 'eth_requestAccounts',
        })
        const provider = new ethers.providers.Web3Provider(ethereum, 'any')
        const currentNetwork = await provider.getNetwork()
        if (currentNetwork.chainId !== parseInt(chainId)) {
            const switchNetwork = await ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: chainId.toString() }],
            })
            const accounts = await ethereum.request({
                method: 'eth_requestAccounts',
            })
        }
        const currentAccount = accounts[0]
        return currentAccount
    } catch (error) {
        return
    }
}

/**
 *
 * @param {*} NetworkName
 * @returns chainID of given Netwotk
 * @default polygon-testnet
 */
const getChainIdFromNetwork = NetworkName => {
    let chainId_ = '0x13881'
    const requested_network = NetworkName
    if (requested_network === 'mainnet') {
        chainId_ = '0x1'
    }
    if (requested_network === 'polygon') {
        chainId_ = '0x89'
    }
    if (requested_network === 'polygon-testnet') {
        chainId_ = '0x13881'
    }
    if (requested_network === 'goerli') {
        chainId_ = '0x5'
    }
    if (requested_network === 'rinkeby') {
        chainId_ = '0x4'
    }
    return chainId_
}

export default useMetamask
