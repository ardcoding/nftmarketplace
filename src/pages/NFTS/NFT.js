// import styles from "./NFT.module.scss";
import { parseAddress } from "../../utils/parseAddress";
import style from "./NFT.css"
// import { useContractFunctions } from "../../Hooks/useContractFunctions";
import { useState } from "react";
const NFT = ({ type, contractAddress, tokenId, price, deadline, id }) => {
//   const { startNFTSale } = useContractFunctions();
  const [fixedPriceInput, setFixedPriceInput] = useState();
  return (
    <div>
      <div >
        <div>
          Contract: {parseAddress(contractAddress)}
        </div>
        <div> Token Id: {tokenId}</div>
      </div>
      {type === "bir" ? (
        <div >
          <div >
            <input
              autoComplete="off"
              autoCorrect="off"
              type="text"
              inputMode="decimal"
              pattern="^[0-9]*[.,]?[0-9]*$"
              minLength={1}
              maxLength={79}
              spellCheck="false"
              placeholder={"0.0"}
              onChange={(value) => {
                setFixedPriceInput(Number(value.target.value));
              }}
            />
            {/* <button className={styles.button} onClick={()=>{startNFTSale(contractAddress,fixedPriceInput,tokenId)}}>Fixed Price</button> */}
          </div>
          <div >
            <input
              autoComplete="off"
              autoCorrect="off"
              type="text"
              inputMode="decimal"
              pattern="^[0-9]*[.,]?[0-9]*$"
              minLength={1}
              maxLength={79}
              spellCheck="false"
              placeholder={"0.0"}
            />
            <button>Auction</button>
          </div>
        </div>
      ) : type === "iki" ? (
        <div>
          <div>{price} Wei</div>
          {/* <button className={styles.button} onClick={() => buyNFT(id,price)}>Buy </button> */}
        </div>
      ) : (
        <div>
          <div>5 Ether</div>
          <div>
            <input
        
              autoComplete="off"
              autoCorrect="off"
              type="text"
              inputMode="decimal"
              pattern="^[0-9]*[.,]?[0-9]*$"
              minLength={1}
              maxLength={79}
              spellCheck="false"
              placeholder={"0.0"}
            />
            <button>Auction</button>
          </div>
        </div>
      )}
    </div>
  );
};

export { NFT };
