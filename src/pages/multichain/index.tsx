import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import Image from 'next/image';

import Layout from '../../components/Layout';
import { classNames } from '../../libs/helper';
import { useRouter } from 'next/router';
import Deposit from '../../components/multichain/Deposit';

export default function MultiChain() {
  const Tabs = [
    { id: 1, name: 'Deposit' },
    { id: 2, name: 'Withdrawal' },
    { id: 3, name: 'LFI Bridge' },
    { id: 4, name: 'Farming' },
  ];

  return (
    <Tab.Group as={'div'} className="px-4 md:px-0">
      <div className="bg-grey_60 py-6">
        <Tab.List
          as={'div'}
          className="w-full md:w-4/6 max-w-4xl flex items-center mx-auto px-6 md:px-0"
        >
          {Tabs.map((tab) => (
            <Tab
              as={'button'}
              className={({ selected }) =>
                classNames(
                  'py-6 mr-8',
                  selected
                    ? ' text-primary font-bold border-b border-primary'
                    : ' grey-10'
                )
              }
              key={tab.id}
            >
              {tab.name}
            </Tab>
          ))}
        </Tab.List>
      </div>
      <Tab.Panels>
        <Tab.Panel>
          <Deposit />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

MultiChain.layout = Layout;
