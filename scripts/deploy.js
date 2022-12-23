import { ethers } from 'hardhat'

async function main() {
    const VideoGramContract = await ethers.getContractFactory('VideoGram')
    const DeployContract = await VideoGramContract.deploy()

    await DeployContract.deployed()

    console.log('YouTube deployed to:', DeployContract.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
