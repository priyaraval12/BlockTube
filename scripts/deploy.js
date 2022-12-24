import { ethers } from 'hardhat'

async function main() {
    const BlockTubeContract = await ethers.getContractFactory('BlockTube')
    const DeployContract = await BlockTubeContract.deploy()

    await DeployContract.deployed()

    console.log('BlockTubeContract deployed to:', DeployContract.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
