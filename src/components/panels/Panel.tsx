import Modal from "react-modal";
import React, { useEffect, useState } from "react";
import { getStatsData } from "../../domain/stats";

interface PanelProps {
  title: string;
  isOpen: boolean;
  close: () => void;
  children?: React.ReactNode;
}

export function Panel({ title, isOpen, close, children }: PanelProps) {
  const [debug, setDebug] = useState(0);
  useEffect(() => {
    setDebug(0);
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={close}
      className="flex justify-center h-full"
      ariaHideApp={false}
      style={{ overlay: { zIndex: 100 } }}
    >
      <div className="w-full max-w-lg bg-white text-sm overflow-auto px-2">
        <header className="border-b-2 border-gray-200 mb-3 flex">
          <h2
            className="text-2xl font-bold uppercase tracking-wide text-center my-1 flex-auto"
            onClick={() => setDebug((prev) => prev + 1)}
          >
            {title}
          </h2>
          <button type="button" onClick={close}>
            ✖️
          </button>
        </header>
        {children}
        {debug >= 5 && <div>!!!{JSON.stringify(getStatsData())}</div>}
      </div>
    </Modal>
  );
}
