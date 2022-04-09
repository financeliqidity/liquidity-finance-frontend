import { RadioGroup } from "@headlessui/react";

export default function PercentageSelect({ value, setValue }) {
  return (
    <RadioGroup
      value={value}
      onChange={setValue}
      as={"div"}
      className="flex justify-between mt-3"
    >
      <RadioGroup.Option as={"div"} className="w-23/100 text-center" value={25}>
        {({ checked }) => (
          <>
            <div
              className={`w-full h-5  mb-2 ${
                checked ? "btn-primary" : "bg-grey_70"
              }`}
            ></div>
            <p
              className={`text-lg ${checked ? "text-primary" : "text-grey_20"}`}
            >
              25%
            </p>
          </>
        )}
      </RadioGroup.Option>

      <RadioGroup.Option as={"div"} className="w-23/100 text-center" value={50}>
        {({ checked }) => (
          <>
            <div
              className={`w-full h-5  mb-2 ${
                checked ? "btn-primary" : "bg-grey_70"
              }`}
            ></div>
            <p
              className={`text-lg ${checked ? "text-primary" : "text-grey_20"}`}
            >
              50%
            </p>
          </>
        )}
      </RadioGroup.Option>

      <RadioGroup.Option as={"div"} className="w-23/100 text-center" value={75}>
        {({ checked }) => (
          <>
            <div
              className={`w-full h-5  mb-2 ${
                checked ? "btn-primary" : "bg-grey_70"
              }`}
            ></div>
            <p
              className={`text-lg ${checked ? "text-primary" : "text-grey_20"}`}
            >
              75%
            </p>
          </>
        )}
      </RadioGroup.Option>

      <RadioGroup.Option
        as={"div"}
        className="w-23/100 text-center"
        value={100}
      >
        {({ checked }) => (
          <>
            <div
              className={`w-full h-5  mb-2 ${
                checked ? "btn-primary" : "bg-grey_70"
              }`}
            ></div>
            <p
              className={`text-lg ${checked ? "text-primary" : "text-grey_20"}`}
            >
              100%
            </p>
          </>
        )}
      </RadioGroup.Option>
    </RadioGroup>
  );
}
