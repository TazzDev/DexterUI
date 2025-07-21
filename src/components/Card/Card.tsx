import React from "react";
import { isNullOrUndefined } from "../../utils/utils";

type TCardSize = "S" | "M" | "L" | "XL";

// const cardSize = {
//     S: 'S', M : 'M', L: 'L', XL: 'XL'
// }

interface ICardProps {
  id?: string;
  size?: TCardSize;
  overrideSize?: number;
  children: React.ReactNode;
}

const CARD_SIZE_MAP = {
  S: "40%",
  M: "45%",
  L: "50%",
  XL: "60%",
};

const Card: React.FC<ICardProps> = ({
  id = crypto.randomUUID(),
  size = "M",
  overrideSize = 0,
  children
}) => {
  const effectiveSize: string =
    !isNullOrUndefined(overrideSize) && !isNaN(overrideSize)
      ? overrideSize + "%"
      : CARD_SIZE_MAP[size];

  const classNames = `w-${effectiveSize}`;
  return (
    <div id={id} className={classNames}>
      {children}
    </div>
  );
};

export default Card;
