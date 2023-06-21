export function SignIn() {
  return (
    <section className="flex flex-col items-center outline outline-2 outline-meteora-dark-gray m-7 px-4 py-6">
      <p className="text-center text-meteora-dark mb-6 w-full">
        Quer receber nossas novidades, promoções exclusivas e 10% OFF na
        primeira compra? Cadastre-se!
      </p>
      <div>
        <form className="grid grid-cols-10">
          <input
            type="email"
            name="email"
            id="iemail"
            placeholder="Digite seu email"
            className="text-meteora-dark-gray border border-black pl-4 py-2 col-span-7"
          />
          <button className="bg-meteora-light-purple text-white font-medium py-2 pr-4 pl-[18px] col-span-3">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
