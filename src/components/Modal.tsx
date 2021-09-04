import * as React from "react";

interface Props {
  title?: string;
  width?: string;
  show?: boolean;
  children?: React.ReactNode;
  onShow?: () => void;
}

const Modal: React.FC<Props> = ({ title, width, show, children, onShow }) => (
  <>
    <div
      className={`${
        show ? "lg:flex" : "hidden"
      } animate-fade-in fixed w-screen h-screen top-0 left-0 z-100 hidden items-center justify-center`}
    >
      <div className="fixed w-screen h-screen bg-black-800 opacity-50"></div>
      <div
        className={`${
          width ? width : "w-[820px]"
        } h-fit-content bg-white shadow-md rounded-2xl z-10`}
      >
        <div className="w-full px-6 py-5 flex justify-between items-center border-b border-black-300">
          <p className="text-body1 font-bold text-black-800">{title || ""}</p>
          <img src="/src/assets/img/close.svg" alt="close" className="cursor-pointer" onClick={onShow} />
        </div>
        <div className="w-full overflow-y-auto relative">{children}</div>
      </div>
    </div>

    <div
      className={`${
        show ? "" : "hidden"
      } animate-fade-in fixed w-screen h-screen top-0 left-0 z-100 flex lg:hidden items-center justify-center`}
    >
      <div className="fixed w-screen h-screen bg-black-800 opacity-50"></div>

      <div
        className={`animate-bottomsheet-in w-full max-w-[440px] absolute bottom-0 bg-white shadow-md rounded-2xl rounded-b-none z-10`}
      >
        <div className="w-full px-5 lg:px-6 py-3 lg:py-5 flex justify-between items-center border-b border-black-300">
          <p className="text-body2 lg:text-body1 font-bold text-black-800">
            {title || "Form Pendaftaran"}
          </p>
          <img
            src="/src/assets/img/close.svg"
            alt="close"
            className="cursor-pointer absolute top-3 right-3 w-2 lg:w-fit-content"
            onClick={onShow}
          />
        </div>
        <div className="w-full p-5 lg:p-6 max-h-[640px] overflow-y-auto relative">{children}</div>
      </div>
    </div>
  </>
);
export default Modal;
