import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
// import { SiEthereum } from "react-icons/si";
// import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../context/TransactionContext";
// import { shortenAddress } from "../utils/shortenAddress";
// import { Loader } from ".";

const companyCommonStyles =
  "min-h-[70px] sm:px-0 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Welcome = () => {
  const { currentAccount, connectWallet } = useContext(TransactionContext);
  return (
    <div>
      <div>
        <h1 className="text-3xl sm:text-5xl text-white text-gradient py-12 px-4">
          Send Crypto <br />
          accross the world
        </h1>
        <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
          Explore the crypto world. Buy and sell cryptocurrencies easily on
          Krypto.
        </p>
        {!currentAccount && (
          <button
            type="button"
            onClick={connectWallet}
            className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          >
            <AiFillPlayCircle className="text-white mr-2 " />
            <p className="text-white text-base font-semibold">Connect Wallet</p>
          </button>
        )}

        <div className="">
          <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
            Reliability
          </div>
          <div className={companyCommonStyles}>Security</div>
          <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
            Ethereum
          </div>
          <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
            Web 3.0
          </div>
          <div className={companyCommonStyles}>Low Fees</div>
          <div className={`rounded-br-2xl ${companyCommonStyles}`}>
            Blockchain
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
