import React, { useState } from "react";
import Link from "next/link";

export default function SocialLinks() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-8 bg-grey_70 w-full rounded-md p-6 flex flex-col items-center justify-center">
      <div
        className="bg-grey_50 w-5/6 flex justify-between rounded-md p-2 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <p className="">Social Links</p>
        {open ? (
          <img src="/assets/icons/arrow-up.svg" alt="arrow-up" />
        ) : (
          <img src="/assets/icons/arrow-down.svg" alt="arrow-down" />
        )}
      </div>
      <div
        className={`flex-col justify-center items-center w-5/6 p-3 rounded-lg mt-2 bg-tertiary border-gray ${
          open ? " flex " : " hidden "
        }`}
      >
        <p className="text-tertiary">
          Website
          <Link href="#website">
            <a className="isLink">www.clever.io</a>
          </Link>
        </p>
        <p className="text-tertiary">
          Social Link 1
          <Link href="#social1">
            <a className="isLink">https://t.me/c/1234456780528/411</a>
          </Link>
        </p>
        <p className="text-tertiary">
          Social Link 2
          <Link href="#social2">
            <a className="isLink">https://twitter/c/1234456780528/411</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
