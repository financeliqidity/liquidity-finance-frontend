import React from "react";
import { escapeRegExp } from "../../../utils";

const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`);

export const NumericInput = React.memo(function InnerInput({
  value,
  onUserInput,
  placeholder,
  classNames,
  ...rest
}: {
  value: string | number;
  onUserInput: (input: string) => void;
  error?: boolean;
  fontSize?: string;
  align?: "right" | "left";
  classNames?: string;
} & Omit<React.HTMLProps<HTMLInputElement>, "ref" | "onChange" | "as">) {
  const enforcer = (nextUserInput: string) => {
    if (nextUserInput === "" || inputRegex.test(escapeRegExp(nextUserInput))) {
      onUserInput(nextUserInput);
    }
  };

  return (
    <input
      {...rest}
      value={value}
      onChange={(event) => {
        // replace commas with periods, because uniswap exclusively uses period as the decimal separator
        enforcer(event.target.value.replace(/,/g, "."));
      }}
      // universal input options
      inputMode="decimal"
      title="Token Amount"
      autoComplete="off"
      autoCorrect="off"
      type="text"
      pattern="^[0-9]*[.,]?[0-9]*$"
      placeholder={placeholder || "0.0"}
      minLength={1}
      maxLength={79}
      spellCheck="false"
      className={`text-white bg-transparent border-none focus:border-none outline-none focus:outline-none text-base font-bold w-full ${classNames}`}
    />
  );
});
