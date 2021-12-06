import { useState } from "react";

import Layout from "../../components/Layout";
import Display from "../../components/pool/Containers/Display";
import PoolTab from "../../components/pool/Containers/PoolTab";

export default function Pool() {
	return (
		<div className='md:py-12 md:w-11/12 md:mx-auto text-white'>
			<PoolTab />
			<Display />
		</div>
	);
}

Pool.layout = Layout;
