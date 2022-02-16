import React, { useState } from "react";

import Layout from "../../components/Layout";
import PoolGrid from "../../components/pool/Containers/PoolGrid";
import FarmingList from "../../components/farming/Containers/FarmingList";
import FarmingTab from "../../components/farming/Containers/FarmingTab";

export default function Farming() {
  const [isList, setIsList] = useState(true);

  return (
    <div className="md:py-12 md:w-11/12 md:mx-auto text-white">
      <FarmingTab isList={isList} setIsList={setIsList} />
      <div className="w-full py-8 px-8 rounded-t-md bg-primary mt-5">
        {<FarmingList />}
      </div>
    </div>
  );
}

Farming.layout = Layout;
