import React, { FC } from "react";
export const DesktopIcon: FC<propType> = function ({
  focused,
  setFocused,
  text,
  image,
  onClick,
}: propType) {
  return (
    <div
      onDoubleClick={(): void => {
        setFocused(text);
        onClick();
      }}
      className={`cursor-pointer relative mb-2 ${
        focused === text && "border border-dashed"
      }`}
      style={{ width: "70px" }}
    >
      <img
        className={"mx-auto"}
        src={image}
        alt={"start menu icon"}
        style={{ height: "50px" }}
      />
      <div style={{ maxWidth: "70px" }} className={"overflow-x-hidden mx-auto"}>
        <p className={"mb-0 text-center text-white break-words"}>{text}</p>
      </div>
    </div>
  );
};

export default DesktopIcon;

type propType = {
  focused: string;
  setFocused: (a: string) => void;
  text: string;
  image: string;
  onClick: () => void;
};