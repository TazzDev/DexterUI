import React from "react";

export interface ToastMessageProps {
  message: string;
  autoBlur?: boolean;
  toastCloseCallback?: any;
}

const TOAST_TIMEOUT = 2000;

const ToastMessage: React.FC<ToastMessageProps> = ({
  message,
  autoBlur = false,
  toastCloseCallback = () => {},
}) => {
  const [canShow, setCanShow] = React.useState(true);
  const onClickOutside = () => {
    setCanShow(false);
    toastCloseCallback();
  };
  if (autoBlur)
    setTimeout(() => {
      setCanShow(false);
      toastCloseCallback();
    }, TOAST_TIMEOUT);

  if (!canShow) return <></>;

  return (
    <div
      className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-80 z-10 animate-fadeIn"
      onClick={onClickOutside}
    >
      <div className="w-[40vw] h-[10vh] bg-teal-800 absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg flex items-center justify-center p-[25px] text-white">
        {message}
      </div>
    </div>
  );
};

export default ToastMessage;
