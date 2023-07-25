import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Autopopulate from "../Autocomplete/autopopulate";
import { XMarkIcon } from "@heroicons/react/20/solid";

const AutopopulateModal = ({ isOpen, setModalOpen }) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setModalOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-overlay bg-opacity-60 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-[16px] bg-white text-left transition-all sm:my-8 sm:w-full sm:max-w-[911px]">
                <div className="bg-gray px-10 py-10 sm:pb-24">
                  <button
                    type="button"
                    className="absolute outline-none top-[20px] right-[25px] text-nobleBlack-400"
                    onClick={() => setModalOpen(false)}
                  >
                    <XMarkIcon height={20} width={20} />
                  </button>
                  <div className="sm:flex sm:items-start">
                    <div className="text-left w-full">
                      <Dialog.Title as="h3" className="text-nobleBlack-0">
                        Search for lessons dolor sit amet, consectetur
                        adipiscing elit, sed do
                      </Dialog.Title>
                      <div className="mt-4">
                        <p className="text-nobleBlack-300 font-medium">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt u
                        </p>
                      </div>
                      <div className="mt-6">
                        <Autopopulate />
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default AutopopulateModal;
