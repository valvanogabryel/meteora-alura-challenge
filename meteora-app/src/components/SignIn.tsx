"use client";
import { FormEvent } from "react";
import { PurpleButton } from "./PurpleButton";
import { EmailModal } from "./EmailModal";
import { Toaster } from "react-hot-toast";

export function SignIn() {
  const handleSignUp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Executa a lógica de cadastro de Email
    // ...

    EmailModal();
  };

  return (
    <section className="flex flex-col items-center outline outline-2 outline-meteora-dark-gray m-7 px-4 py-6 md:w-11/12 md:mx-auto md:my-10 md:p-10 xl:w-1/2 xl:border-2 lg:my-20">
      <Toaster />
      <p className="text-center text-meteora-dark mb-6 w-full md:text-xl md:w-[35.625rem] md:leading-tight xl:w-full">
        Quer receber nossas novidades, promoções exclusivas e 10% OFF na
        primeira compra? Cadastre-se!
      </p>
      <div>
        <form
          className="grid grid-cols-10 md:grid-cols-11"
          onSubmit={handleSignUp}
        >
          <input
            type="email"
            name="email"
            id="iemail"
            placeholder="Digite seu email"
            required
            min={3}
            className="text-meteora-dark-gray border focus:outline-none border-black pl-4 py-2 col-span-7 md:col-span-9"
          />
          <PurpleButton className="md:col-span-2">Enviar</PurpleButton>
        </form>
      </div>
    </section>
  );
}
