import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import Link from "next/link";

//@ts-ignore
const injected = new InjectedConnector();

export default function Home() {
  const { active, activate, library: provider } = useWeb3React();

  const connect = async () => {
    try {
      activate(injected);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-dark_grey h-full min-h-screen w-full text-white font-bold">
      {active ? "Connected!" : <button onClick={connect}>Connect</button>}
      <br />
      <Link href="/dex">
        <a>DEX</a>
      </Link>
    </div>
  );
}
