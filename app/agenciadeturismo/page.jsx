import Card2 from "@/components/Card2";
import IMAGES from "@/public/Images";

export default function Home() {
  return (
    <div>
      <div className="flex flex-wrap justify-center m-5">
        <div className="flex flex-wrap justify-center items-center gap-5 max-w-[1200px]">
          <Card2
            título="Aptur Turismo"
            numero="+55 99687-2232"
            link="https://www.facebook.com/aguasepedrasturismo"
            img={IMAGES.Agênciasdeturismo.Aptur}
          />
          <Card2
            título="Citrino Turismo"
            numero="+55 99644-9492"
            link="https://citrinoturismo.com.br/"
            img={IMAGES.Agênciasdeturismo.Citrino}
          />
          <Card2
            título="Rota dos Cristais"
            numero="+55 99693-8924"
            link="https://www.facebook.com/agenciadeturismorotadoscristais/"
            img={IMAGES.Agênciasdeturismo.RotasdosCristais}
          />
          <Card2
            título="Andressa Zatti Turismo"
            numero="+55 99919-6119"
            link="https://www.facebook.com/turismoandressazatti/"
            img={IMAGES.Agênciasdeturismo.AndressaZatti}
          />
        </div>
      </div>
    </div>
  );
}
