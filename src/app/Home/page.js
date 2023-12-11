"use client";

// import "@rainbow-me/rainbowkit/styles.css";
// import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
// import { configureChains, createConfig, WagmiConfig } from "wagmi";
// import { mainnet, polygon, optimism, arbitrum, base, zora } from "wagmi/chains";
// import { alchemyProvider } from "wagmi/providers/alchemy";
// import { publicProvider } from "wagmi/providers/public";

// const { chains, publicClient } = configureChains(
//   [mainnet, polygon, optimism, arbitrum, base, zora],
//   [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
// );
// const { connectors } = getDefaultWallets({
//   appName: "tbw-blockchain-hackathon", // "My RainbowKit App",
//   projectId: "3499818462e1e734d222570b7b7e4f46", //"YOUR_PROJECT_ID",
//   chains,
// });
// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors,
//   publicClient,
// });

import Image from "next/image";
import styles from "../page.module.css"; //"./page.module.css";
import { useState, useEffect, useRef } from "react";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  const [data, setData] = useState([]);

  const postGPTresponse = async () => {
    const response = await fetch("/api/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({
      //   message: '我想寫一本書'
      // })
    });
    const dataJSON = await response.json();
    setData(dataJSON);
    console.log(dataJSON);
  };

  useEffect(() => {
    postGPTresponse();
  }, []);

  useEffect(() => {
    console.log(123);
    console.log(document.getElementsByClassName("iekbcc0 ju367va ju367v1s"));
  });

  return (
    // <WagmiConfig config={wagmiConfig}>
    //   <RainbowKitProvider chains={chains}>
    <main className={styles.main}>
      hello
      <div
        style={{
          width: 200,
          height: 100,
          //   backgroundColor: "red",
        }}
      >
        <ConnectButton style={{ opacity: NaN }} />
      </div>
      <a href="/dashboard">dashboard</a>
      {data.map((item, index) => {
        return (
          <div key={index}>
            {item.id}: {item.title} =====
            {item.body}
          </div>
        );
      })}
    </main>
    //   </RainbowKitProvider>
    // </WagmiConfig>
  );
}
