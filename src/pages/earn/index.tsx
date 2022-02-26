import { Tab } from "@headlessui/react";

import Layout from "../../components/Layout";
import { classNames } from "../../libs/helper";
import Pool from "../../components/pool";
import Farm from "../../components/farm";

export default function Earn() {
  return (
    <div className="md:py-12 md:w-11/12 md:mx-auto text-white">
      <Tab.Group>
        <Tab.List as={"div"} className="flex justify-center items-center mb-6">
          <Tab
            as={"button"}
            className={({ selected }) =>
              classNames(
                "font-semibold text-lg mr-10",
                selected ? " text-primary" : " text-white"
              )
            }
          >
            Pool
          </Tab>
          <Tab
            as={"button"}
            className={({ selected }) =>
              classNames(
                "font-semibold text-lg mr-10",
                selected ? " text-primary" : " text-white"
              )
            }
          >
            Farm
          </Tab>
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel>
            <Pool />
          </Tab.Panel>
          <Tab.Panel>
            <Farm />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

Earn.layout = Layout;
