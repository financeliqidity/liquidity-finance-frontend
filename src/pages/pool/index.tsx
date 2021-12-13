import { useState } from "react";

import Layout from "../../components/Layout";
import PoolGrid from "../../components/pool/Containers/PoolGrid";
import PoolList from "../../components/pool/Containers/PoolList";
import PoolTab from "../../components/pool/Containers/PoolTab";

export default function Pool() {
  const [isList, setIsList] = useState(true);
  return (
    <div className="md:py-12 md:w-11/12 md:mx-auto text-white">
      <PoolTab isList={isList} setIsList={setIsList} />
      <div className="w-full py-8 px-8 rounded-t-md bg-primary mt-5">
        {isList ? <PoolList /> : <PoolGrid />}
      </div>
    </div>
  );
}

Pool.layout = Layout;
