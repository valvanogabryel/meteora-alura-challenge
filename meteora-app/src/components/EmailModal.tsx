import classNames from "classnames";
import toast from "react-hot-toast";
import { ModalHeader } from "./ModalHeader";

export function EmailModal() {
  const isSmallScreen = false;

  toast.custom(
    (t) => (
      <div
        className={classNames(`shadow-xl select-none rounded-md`, [
          t.visible
            ? "top-0 lg:bottom-0 left-0"
            : "-top-64 lg:-bottom-10 -left-10",
        ])}
      >
        <ModalHeader>E-mail cadastrado com sucesso!</ModalHeader>
        <main className="pt-4 px-4 pb-8 z-50 bg-white animate-grow">
          <p className="leading-6 text-meteora-dark">
            Em breve você receberá novidades exclusivas da Meteora.
          </p>
        </main>
      </div>
    ),
    { id: "unique-notification", position: "bottom-left" }
  );
}
