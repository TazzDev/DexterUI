import React from "react";
import { Enum, isNullOrUndefined } from "../../utils/utils";

type TCardSize = "S" | "M" | "L" | "XL";

interface ICardProps {
  id?: string;
  size?: TCardSize;
  overrideSize?: number;
  children: React.ReactNode;
}

const CARD_SIZE_MAP = Enum({
  S: "w-sm",
  M: "w-md",
  L: "w-lg",
  XL: "w-2xl",
});

const Card: React.FC<ICardProps> = ({
  id = crypto.randomUUID(),
  size = "M",
  overrideSize,
  children,
}) => {
  const effectiveSize: string = !isNullOrUndefined(overrideSize)
    ? overrideSize + "%"
    : CARD_SIZE_MAP[size];

  const classNames = `${effectiveSize} bg-card-background px-2 py-2 mx-2 my-2 rounded-md text-card-text text-xl`;
  return (
    <div id={id} className={classNames}>
      {children}
    </div>
  );
};

export default Card;
