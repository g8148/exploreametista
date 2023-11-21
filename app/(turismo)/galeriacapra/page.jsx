import Desc from "@/components/desc";
import IMAGES from "@/public/Images";

export default function Home() {
  return (
    <Desc
      título={"Galeria Capra"}
      fotos={[
        IMAGES.GaleriaCapra[5],
        IMAGES.GaleriaCapra[1],
        IMAGES.GaleriaCapra[2],
        IMAGES.GaleriaCapra[3],
        IMAGES.GaleriaCapra[4],
      ]}
      mapa={
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.431343822158!2d-53.18618308494551!3d-27.36224128293612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fb6f006500e16b%3A0x91b6366f526e1dfa!2sGaleria%20Capra!5e0!3m2!1spt-BR!2sbr!4v1680785445005!5m2!1spt-BR!2sbr"
      }
      mapalink={"https://goo.gl/maps/oWWwoqmv5iuwQB6SA"}
      parag={[
        "A Galeria Capra em Ametista do Sul é um local imperdível para quem deseja conhecer mais sobre a cidade e suas pedras preciosas, em especial as ametistas. O tour começa com uma apresentação das variadas pedras, seguida por um passeio em diferentes espaços que combinam arte e tecnologia.",
        "Na Galeria Capra, os visitantes podem ter uma experiência imersiva com sons, aromas, cores, texturas e até sabores, enquanto aprendem sobre a história e a importância da mineração de pedras preciosas na região. É uma oportunidade única de explorar a cultura e a arte local, além de adquirir conhecimento sobre a cidade e suas riquezas naturais.",
      ]}
    />
  );
}
