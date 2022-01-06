import React, { useState } from "react";
import Link from "next/link";

export default function SocialLinks() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-8 bg-grey_70 w-full rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center">
      <div
        className="bg-grey_50 w-full flex justify-between p-2 cursor-pointer rounded-t-lg"
        onClick={() => setOpen(!open)}
      >
        <p className="text-sm">Social Links</p>
        {open ? (
          <img src="/assets/icons/arrow-up.svg" alt="arrow-up" />
        ) : (
          <img src="/assets/icons/arrow-down.svg" alt="arrow-down" />
        )}
      </div>
      <div
        className={`flex-col justify-center items-center w-full p-3 rounded-b-lg mt-2 bg-tertiary border-gray ${
          open ? " flex " : " hidden "
        }`}
      >
        <p className="text-tertiary">
          Website
          <Link href="#website">
            <a className="isLink ml-1">www.clever.io</a>
          </Link>
        </p>
        <p className="text-tertiary">
          Social Link 1
          <Link href="#social1">
            <a className="isLink ml-1">https://t.me/c/1234567890</a>
          </Link>
        </p>
        <p className="text-tertiary">
          Social Link 2
          <Link href="#social2">
            <a className="isLink ml-1">https://twitter/c/123467890</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
