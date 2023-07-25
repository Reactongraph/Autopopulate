import { useState } from "react";
import AutopopulateModal from "./modal";

const ModalWrapper = () => {
  const [openModal, setModalOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        className="outline-none text-nobleBlack-400"
        onClick={() => setModalOpen(true)}
      >
        Open Autopopulate Modal
      </button>
      <AutopopulateModal isOpen={openModal} setModalOpen={setModalOpen} />
    </>
  );
};

export default ModalWrapper;
