import { useNavigate, useParams } from "react-router-dom"
import { useQuery } from '../../hooks/use-query';
import { ContractSelect } from './contract-select';
import { SampleNFTView } from './sample-nft-view';
import { StepsProgressBar } from "./steps-progress-bar";
import { AdditionalNftInfo } from "./additional-nft-info";
import { AddToCatalog } from "./add-to-catalog";
import { changeFCLEnvironment } from "src/flow/setup";
import { Network } from "../catalog/network-dropdown";

export default function ({
}: {
}) {
  const query = useQuery()
  const navigate = useNavigate()
  const { selectedAddress, selectedContract, selectedNetwork } = useParams<any>()

  const publicPath = query.get("path")
  const sampleAddress = query.get("sampleAddress")
  const confirmed = query.get("confirmed")

  const steps = [
    {
      id: "S1",
      title: "Select NFT Contract",
      href: `/v`,
      isActive: !selectedAddress || !selectedContract || !selectedNetwork,
      isComplete: selectedAddress && selectedContract && selectedNetwork
    },
    {
      id: "S2",
      title: "Enter Additional Info",
      href: `/v/${selectedAddress}/${selectedContract}/${selectedNetwork}`,
      isActive: selectedAddress && selectedContract && selectedNetwork,
      isComplete: selectedAddress && selectedContract && selectedNetwork &&
        sampleAddress && publicPath
    },
    {
      id: "S3",
      title: "Review Metadata",
      href: `/v/${selectedAddress}/${selectedContract}/${selectedNetwork}?path=${publicPath}&sampleAddress=${sampleAddress}`,
      isActive: selectedAddress && selectedContract && selectedNetwork &&
        sampleAddress && publicPath,
      isComplete: selectedAddress && selectedContract && selectedNetwork &&
        sampleAddress && publicPath && confirmed
    },
    {
      id: "S4",
      title: "Add to Catalog",
      onClick: () => { },
      isActive: selectedAddress && selectedContract && selectedNetwork &&
        sampleAddress && publicPath && confirmed,
      isComplete: false
    }
  ]

  return (
    <div className="mx-auto px-0 md:px-16 lg:px-64 py-16">
      <StepsProgressBar
        steps={steps}
      />
      <div className="px-4 sm:px-8 md:px-16 lg:px-48 mt-8">
        {
          steps[0].isActive && !steps[0].isComplete && (
            <ContractSelect
              selectContract={(contractAddress: String, contractName: string, network: string) => {
                changeFCLEnvironment(network as Network)
                navigate(`/v/${contractAddress}/${contractName}/${network}`);
              }}
            />
          )
        }

        {
          steps[1].isActive && !steps[1].isComplete && (
            <AdditionalNftInfo />
          )
        }
        {
          steps[2].isActive && !steps[2].isComplete && (
            <SampleNFTView sampleAddress={sampleAddress} publicPath={publicPath} />
          )
        }

        {
          steps[3].isActive && !steps[3].isComplete && (
            <AddToCatalog sampleAddress={sampleAddress} publicPath={publicPath} />
          )
        }
      </div>
    </div>
  )
}
