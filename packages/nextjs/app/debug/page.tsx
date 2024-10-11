import { DebugContracts } from "./_components/DebugContracts";
import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Contratos Inteligentes",
  description: "Debug your deployed 🏗 Scaffold-ETH 2 contracts in an easy way",
});

const Debug: NextPage = () => {
  return (
    <>
      <DebugContracts />
      <div className="text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0"></h1>
        <p className="text-neutral">
          <br /> <code className="italic bg-base-300 text-base font-bold [word-spacing:-0.5rem] px-1"></code>{" "}
        </p>
      </div>
    </>
  );
};

export default Debug;
