import React from "react";

interface CardProps {
  /**
   * Set card height
   *
   * @type {(screen, full, 1/2, 2/3...)}
   */
  height?: number;
  /**
   * Set card width
   *
   * @type {(screen, full, 1/2, 2/3...)}
   */
  width?: string;
  /**
   * Set background color
   *
   * @type {(gray, indigo-100, red-200, blue-800, etc)}
   */
  bg?: string;
  /**
   * Set border-radius of card
   *
   * @type {sm | md | lg}
   *  */
  rounded?: string;
  /**
   * Set the flow of children element
   *
   * @type {col : row}
   */
  stack?: string;
  /**
   * Add other tailwindcss classes
   *
   * @type {(absolute, bg-transparent)}
   */
  className?: string;
  /**
   * Justify card children
   *
   * @type {(center, between, evenly)}
   */
  j?: string;
  /**
   * Align card children
   *
   * @type {(center, between, evenly)}
   */
  a?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  stack,
  width,
  j,
  className,
}) => {
  return (
    <div className={`${className} flex flex-${stack} w-${width} justify-${j}`}>
      {children}
    </div>
  );
};

export default Card;
