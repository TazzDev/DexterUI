import React, { useId } from "react";
import { Enum, isNullOrUndefined } from "../../utils/utils";

type TCardSize = "S" | "M" | "L" | "XL" | "FULL";

interface ICardProps {
  id?: string;
  size?: TCardSize;
  overrideSize?: number;
  styleOverride?: string;
  children: React.ReactNode;
}

const CARD_SIZE_MAP = Enum({
  S: "w-sm",
  M: "w-md",
  L: "w-lg",
  XL: "w-2xl",
  FULL: "w-full",
});

const Card: React.FC<ICardProps> = ({
  id,
  size = "M",
  overrideSize,
  children,
  styleOverride = "",
}) => {
  const autoId = useId();
  const resolvedId = id ?? autoId;
  const effectiveSize: string = !isNullOrUndefined(overrideSize)
    ? overrideSize + "%"
    : CARD_SIZE_MAP[size];

  const classNames = `${effectiveSize} bg-card-background px-4 py-4 mx-4 my-4 rounded-lg text-card-text text-xl border border-gray-200 shadow-lg ${styleOverride}`;
  return (
    <div id={resolvedId} className={classNames}>
      {children}
    </div>
  );
};

export default Card;
