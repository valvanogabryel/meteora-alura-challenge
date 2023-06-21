import Image from "next/image";
import pix from "@/assets/facilities/Union.svg";
import arrowRepeat from "@/assets/facilities/Vector.svg";
import flower from "@/assets/facilities/Subtract.svg";

export function Facilities() {
  return (
    <section className="flex flex-col items-center bg-black text-white p-8 my-10 xl:py-10">
      <p className="font-medium text-2xl text-center md:text-3xl lg:text-[2rem] xl:mb-3">
        Conheça todas as nossas facilidades
      </p>

      <div className="lg:flex xl:gap-8 xl:justify-center xl:w-4/6">
        <div className="xl:max-w-[304px]">
          <ul className="md:w-[66%] md:m-auto">
            <li className="flex items-center gap-6 mt-8 xl:w-[19rem]">
              <div>
                <Image
                  src={pix}
                  alt=""
                  className="min-w-[56px] xl:min-w-[72px]"
                />
              </div>
              <div>
                <h4 className="font-bold text-meteora-lime-yellow uppercase mb-4">
                  Pague pelo pix
                </h4>
                <p className="text-xs+1 w-4/5">
                  Ganhe 5% OFF em pagamentos via PIX
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="xl:max-w-[304px]">
          <ul className="md:w-[66%] m-auto">
            <li className="flex items-center gap-6 mt-8 xl:w-[19rem]">
              <div>
                <Image
                  src={arrowRepeat}
                  alt=""
                  className="min-w-[56px]  xl:min-w-[72px]"
                />
              </div>
              <div>
                <h4 className="font-bold text-meteora-lime-yellow uppercase mb-4">
                  Troca grátis
                </h4>
                <p className="text-xs+1 w-4/5">
                  Fique livre para trocar em até 30 dias.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul className="md:w-[66%] md:m-auto">
            <li className="flex items-center gap-6 mt-8 xl:w-[19rem]">
              <div className="">
                <Image
                  src={flower}
                  alt=""
                  className="min-w-[56px] xl:min-w-[72px]"
                />
              </div>
              <div>
                <h4 className="font-bold text-meteora-lime-yellow uppercase mb-4">
                  Sustentabilidade
                </h4>
                <p className="text-xs+1 w-4/5 md:w-4/6 xl:w-[95%]">
                  Moda responsável, que respeita o meio ambiente.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
