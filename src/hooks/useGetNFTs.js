import { getNftsForOwner, initializeAlchemy, Network } from "@alch/alchemy-sdk"
import { useDispatch, useSelector } from "react-redux";
import { setmyNFTs } from "../store/slicers/accounts";

export const useGetNFTs=()=>{
    const settings = {
        apiKey: "CeaKRqIY1zDMeH9vWi_V1K-5jK3fnUro",
        network: Network.ETH_GOERLI,
        maxRetries:10,
    }
    const alchemy = initializeAlchemy(settings);

    const account = useSelector((state) => state.accounts.account);
    const dispatch = useDispatch();

    const getNFTs = async () => { 
        if(account){
        const NFTsforOwner = await getNftsForOwner(alchemy, account);
        dispatch(setmyNFTs(NFTsforOwner));
        }
    }
    return getNFTs;
}