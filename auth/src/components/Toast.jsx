import React, { Fragment, useState, useEffect } from "react";
import { Transition } from "@headlessui/react";

function Toast(props) {
  const { message } = props;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (message && message.length > 0) setIsOpen(true);

    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [message]);

  if (!isOpen) return null;

  return (
    <Transition
      as={Fragment}
      show={isOpen}
      appear
      enter="transform transition ease-in-out duration-300"
      enterFrom="translate-x-full"
      enterTo="translate-x-0"
      leave="transform transition ease-in-out duration-300"
      leaveFrom="translate-x-0"
      leaveTo="translate-x-full"
    >
      <div className="absolute top-10 right-14" role="alert">
        <div className="bg-red-100 border border-red-400 text-red-700 p-3 rounded flex items-center gap-x-1 text-sm">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline">{message}</span>
          <span onClick={() => setIsOpen(false)}>
            <svg
              className="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      </div>
    </Transition>
  );
}

export default Toast;
