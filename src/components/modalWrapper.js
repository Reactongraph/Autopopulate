import { useState } from "react";
import AutopopulateModal from "./modal";

const ModalWrapper = () => {
  const [openModal, setModalOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        className="outline-none text-[#61DAFA]"
        onClick={() => setModalOpen(true)}
      >
        Click here to open autopopulate modal
      </button>
      <AutopopulateModal isOpen={openModal} setModalOpen={setModalOpen} />
    </>
  );
};

export default ModalWrapper;
