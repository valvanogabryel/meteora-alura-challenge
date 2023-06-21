import Image from "next/image";
import pix from "@/assets/mobile/Ícones/x-diamond.png";
import arrowRepeat from "@/assets/mobile/Ícones/arrow-repeat.png";
import flower from "@/assets/mobile/Ícones/flower1.png";

export function Facilities() {
  return (
    <section className="flex flex-col items-center bg-black text-white p-8 my-10">
      <p className="font-medium text-2xl text-center">
        Conheça todas as nossas facilidades
      </p>

      <div>
        <div>
          <ul>
            <li className="flex items-center gap-6 mt-8">
              <div>
                <Image src={pix} alt="" className="" width={56} height={56} />
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
        <div>
          <ul>
            <li className="flex items-center gap-6 mt-8">
              <div>
                <Image
                  src={arrowRepeat}
                  alt=""
                  className=""
                  width={54.02}
                  height={42}
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
          <ul>
            <li className="flex items-center gap-6 mt-8">
              <div>
                <Image
                  src={flower}
                  alt=""
                  className=""
                  width={70}
                  height={70}
                />
              </div>
              <div>
                <h4 className="font-bold text-meteora-lime-yellow uppercase mb-4">
                  Sustentabilidade
                </h4>
                <p className="text-xs+1 w-4/5">
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
