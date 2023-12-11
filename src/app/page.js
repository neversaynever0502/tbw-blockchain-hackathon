"use client";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base, zora } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import Home from "./Home/page";

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: "tbw-blockchain-hackathon", // "My RainbowKit App",
  projectId: "3499818462e1e734d222570b7b7e4f46", //"YOUR_PROJECT_ID",
  chains,
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

// import Image from "next/image";
// import styles from "./page.module.css";
// import { useState, useEffect } from "react";

// export default function Home() {
//   const [data, setData] = useState([]);

//   const postGPTresponse = async () => {
//     const response = await fetch("/api/posts", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       // body: JSON.stringify({
//       //   message: '我想寫一本書'
//       // })
//     });
//     const dataJSON = await response.json();
//     setData(dataJSON);
//     console.log(dataJSON);
//   };

//   useEffect(() => {
//     postGPTresponse();
//   }, []);

//   return (
//     // <WagmiConfig config={wagmiConfig}>
//     //   <RainbowKitProvider chains={chains}>
//     <main className={styles.main}>
//       hello
//       <a href="/dashboard">dashboard</a>
//       {data.map((item, index) => {
//         return (
//           <div key={index}>
//             {item.id}: {item.title} =====
//             {item.body}
//           </div>
//         );
//       })}
//     </main>
//     //   </RainbowKitProvider>
//     // </WagmiConfig>
//   );
// }

// export const App = () => {
export default function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        {/* Your App */}
        <Home />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
