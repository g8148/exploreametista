import Desc from "@/components/desc";
import IMAGES from "@/public/Images";

export default function Home() {
  return (
    <Desc
      título={"Coperametista"}
      fotos={[IMAGES.Coperametista[1]]}
      mapa={
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.4582760489716!2d-53.19212808494551!3d-27.361399782936413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fb6f9616bc2979%3A0xd70a249c15e22498!2sCoper%20Ametista%20Vinhos%20e%20Sucos!5e0!3m2!1spt-PT!2sbr!4v1684160119928!5m2!1spt-PT!2sbr"
      }
      mapalink={"https://goo.gl/maps/B57zvz9cA7DbXK8r5"}
      parag={[
        "Uma fábrica que trabalha com envelhecimento de vinhos com alta qualidade e sabor inesquecível e único, diversos tipos de vinhos como vinho tinto seco com envelhecimento de até 10 anos, vinho branco, tinto de mesa seco e suave entre outros sabores e tipos, possuem até mesmo espumantes rosé e branco e por fim sucos de uva e laranja.",
      ]}
    />
  );
}
