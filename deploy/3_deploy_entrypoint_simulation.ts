import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'
import { ethers } from 'hardhat'

const deployEntryPointSimulations: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const provider = ethers.provider
  const from = await provider.getSigner().getAddress()

  const ret = await hre.deployments.deploy(
    'EntryPointSimulations', {
      from,
      args: [],
      gasLimit: 6e6,
      deterministicDeployment: process.env.SALT ?? true,
      log: true
    })
  console.log('==entrypoint simulations addr=', ret.address)
}

export default deployEntryPointSimulations
