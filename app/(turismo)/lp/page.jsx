import Desc from "@/components/desc";
import IMAGES from "@/public/Images";

export default function Home() {
  return (
    <Desc
      título={"L.P. Minerais do Brasil"}
      fotos={[
        IMAGES.LP[1],
        IMAGES.LP[2],
        IMAGES.LP[3],
        IMAGES.LP[4],
        IMAGES.LP[5],
      ]}
      mapa={
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.377169259259!2d-53.18336528255615!3d-27.3639339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fb6f999e491ba7%3A0x89f98cf4b596780!2sLP%20MINERAIS%20do%20BRASIL%20-%20Loja%20e%20F%C3%A1brica%20(Ametista%20do%20Sul)!5e0!3m2!1spt-PT!2sbr!4v1683679317808!5m2!1spt-PT!2sbr"
      }
      mapalink={"https://goo.gl/maps/WbHjJAdoJQ1boc3w8"}
      parag={[
        "A LP Minerais do Brasil é um destino obrigatório para os amantes de pedras preciosas e semipreciosas. Localizado em Ametista do Sul, o espaço apresenta uma grande variedade de pedras com itens diferenciados e muito bonitos, muitos dos quais são importados de diferentes partes do mundo.",
        "Os visitantes podem explorar a grande variedade de pedras disponíveis para compra, desde as mais conhecidas até as mais raras e exclusivas. Além disso, podem aprender mais sobre a geologia da região e a história da extração de pedras em Ametista do Sul. É um lugar incrível para os colecionadores e para aqueles que buscam por presentes únicos e especiais.",
      ]}
    />
  );
}
