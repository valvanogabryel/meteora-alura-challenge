import classNames from "classnames";
import toast from "react-hot-toast";
import { ModalHeader } from "./ModalHeader";

export function EmailModal() {
  toast.custom(
    (t) => (
      <div
        className={classNames(`shadow-xl select-none rounded-md`, [
          t.visible ? "top-0" : "-top-96",
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
    { id: "unique-notification", position: "top-center" }
  );
}
