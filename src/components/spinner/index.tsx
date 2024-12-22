import React from "react";

interface LoadingSpinnerProps {
  loading: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ loading }) => {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-80 z-10 animate-fadeIn">
      LoadingSpinner
    </div>
  );
};

export default LoadingSpinner;
