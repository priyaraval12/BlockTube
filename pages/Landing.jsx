import { useRouter } from "next/router";
import React, { useState } from "react";
import useMetamask from "../hooks/useMetamask";
import useStore from "../store/store";
import Network from "../constants/Networks";
function Landing() {
  const [currentAccount, setCurrentAccount] = useState("");
  const router = useRouter();
  const store = useStore();
  const connectWallet = () => {
    useMetamask().then((res) => {
      setCurrentAccount(res);
      store.setCurrentAccount(res);
      router.push("/home");
    });
  };

  return (
    <>
      <section className="relative  flex flex-col h-screen justify-center items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="text-center pb-12 md:pb-16">
              <h1
                className="text-5xl text-black md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                data-aos="zoom-y-out"
              >
                Welcome to{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                  BlockTube
                </span>
              </h1>
              <div className="max-w-4xl mx-auto">
                <p
                  className="text-xl text-black-100 mb-8 text-justify"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  Blocktube built on top of Polygon network, using the power of
                  The Graph and leveraging the Storage By FileCoin x IPFS allow
                  users to create, share and watch videos, without worrying
                  about their privacy.
                </p>
                <div className="flex flex-row gap-8 justify-center my-4 text-black-400 items-center text-2xl">
                  Build With :
                  <img src="/Assets/polygon.svg" className="w-8" />
                  <img src="/Assets/filecoin.svg" className="w-8" />
                  <img src="/Assets/graph.png" className="w-8" />
                </div>
                <button
                  className="items-center  bg-white rounded-lg font-medium  p-3 shadow-lg"
                  onClick={connectWallet}
                >
                  <span>Connect wallet</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
