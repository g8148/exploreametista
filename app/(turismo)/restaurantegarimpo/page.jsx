import Desc from "@/components/desc";
import IMAGES from "@/public/Images";

export default function Home() {
  return (
    <Desc
      título={"Restaurante Garimpo"}
      fotos={[
        IMAGES.RestauranteGarimpo[2],
        IMAGES.RestauranteGarimpo[1],
        IMAGES.RestauranteGarimpo[3],
        IMAGES.RestauranteGarimpo[4],
      ]}
      mapa={
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.1558807230385!2d-53.20026458494531!3d-27.370846782932365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fb6fb56c17afe3%3A0x15d5b2a42679a1b4!2sGarimpo%20Restaurante%20Subterr%C3%A2neo!5e0!3m2!1spt-PT!2sbr!4v1684895868473!5m2!1spt-PT!2sbr"
      }
      mapalink={"https://goo.gl/maps/NAFKXNsNECFmU7tQ9"}
      parag={[
        "O garimpo restaurante subterrâneo é localizado no Parque Museu, em uma mina desativada de pedras ametista. Conta com buffet livre, e com variáveis tipos de pratos. E também conta com belezas naturais de nossas pedras ametistas.",
      ]}
    />
  );
}
