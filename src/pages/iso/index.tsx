import React from "react";
import Slider from "../../components/iso/Cards/Slider";

import Layout from "../../components/Layout";

export default function Iso() {
  return (
    <div className="md:py-12 md:w-11/12 md:mx-auto text-white">
      <Slider />
    </div>
  );
}

Iso.layout = Layout;
