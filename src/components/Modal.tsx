import React from "react";

type ModalProps = {
  modalActive: boolean;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

const Modal = ({ modalActive, setModalActive, children }: ModalProps) => {
  return (
    <div
      className={`flex justify-center items-center h-[100vh] w-[100vw] bg-black/40 fixed top-0 left-0 transition-all pointer-events-none overflow-y-scroll z-20 ${
        modalActive ? "opacity-100 pointer-events-auto" : "opacity-0 "
      }`}
      onClick={() => setModalActive(false)}
    >
      <div
        className={`p-4 sm:p-8 rounded-lg bg-white transition-all ${
          modalActive ? "scale-100" : "scale-50"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="text-right text-lg pb-2 cursor-pointer absolute top-5 right-5 "
          onClick={() => setModalActive(false)}
        >
          &#10005;
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
