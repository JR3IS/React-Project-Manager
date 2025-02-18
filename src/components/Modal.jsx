import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 pl-20 pr-20 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="my-3 text-center">
        <button className="px-6 py-2 rounded-lg bg-stone-900 text-stone-300 hover:bg-stone-800 hover:text-stone-200">
          {buttonCaption}
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
