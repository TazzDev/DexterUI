import React from "react";

interface HomepageNavCardProps {
  title: string;
  description?: string;
  path?: string;
}

const HomepageNavCard = ({
  title,
  description,
  path,
}: HomepageNavCardProps) => {
  return (
    <div className="h-[100px] w-1/2 m-4 rounded-lg bg-gradient-to-r from-pink-400 to-blue-500">
      {title}
    </div>
  );
};

export default HomepageNavCard;
