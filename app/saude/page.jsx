import Card2 from "@/components/Card2";
import IMAGES from "@/public/Images";

export default function Home() {
  return (
    <div>
      <div className="flex flex-wrap justify-center m-5">
        <div className="flex flex-wrap justify-center items-center gap-5 max-w-[1200px]">
          <Card2
            título="Drogacenter"
            numero="+55 3752-1060"
            link="https://goo.gl/maps/u8kSo67SQo7WszVT8?coh=178572&entry=tt"
            img={IMAGES.Farmácia.FarmaciaDrogaCenter}
          />
          <Card2
            título="Cassol Farma"
            numero="+55 99955-0214"
            link="https://goo.gl/maps/NzC9D3cQxdzs5E2S9?coh=178572&entry=tt"
            img={IMAGES.Farmácia.FarmaciaCassol}
          />
          <Card2
            título="Farmácia Cristal"
            numero="+55 99671-5866"
            link="https://goo.gl/maps/mXvXnGJdSMTJKr1A9?coh=178572&entry=tt"
            img={IMAGES.Farmácia.FarmaciaCristal}
          />
          <Card2
            título="Gonzatti Farma"
            numero="+55 99999-6436"
            link="https://goo.gl/maps/ae5JWBcVrzehYwHT6?coh=178572&entry=tt"
            img={IMAGES.Farmácia.FarmaciaGonzatti}
          />
          <Card2
            título="Farmácia Econômica"
            numero="+55 99968-1508"
            link="https://goo.gl/maps/g9Yxv3NP4kKJR1Gv7?coh=178572&entry=tt"
            img={IMAGES.Farmácia.FarmaciaEconomica}
          />
          <Card2
            título="Farmácia Ametista"
            numero="+55 99645-5443"
            link="https://goo.gl/maps/YgACkAyAz3ycZrKL7?coh=178572&entry=tt"
            img={IMAGES.Farmácia.FarmaciaAmetista}
          />
          <Card2
            título="Farmácia Equilíbrio"
            numero="+55 99621-6191"
            link="https://goo.gl/maps/bAyGzLpb7H5oBEKU8"
            img={IMAGES.Farmácia.FarmaciaEquilibrio}
          />
        </div>
      </div>
    </div>
  );
}
