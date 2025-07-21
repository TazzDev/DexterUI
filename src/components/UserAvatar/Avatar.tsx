import React from "react";

interface IAvatarColor {
  backgroundColorHex: string;
  textColorHex: string;
}

interface IAvatarProps {
  id: string;
  firstName: string;
  lastName: string;
  color: IAvatarColor;
}

const Avatar: React.FC<IAvatarProps> = () => {
  return <div>Avatar</div>;
};

export default Avatar;
