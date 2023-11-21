import Desc from "@/components/desc";
import IMAGES from "@/public/Images";

export default function Home() {
  return (
    <Desc
      título={"Museu do Bambu"}
      fotos={[
        IMAGES.Museudobambu[1],
        IMAGES.Museudobambu[2],
        IMAGES.Museudobambu[3],
        IMAGES.Museudobambu[4],
        IMAGES.Museudobambu[5],
      ]}
      mapa={
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.330441192009!2d-53.18142368494537!3d-27.365393782934813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fb6fe21498d1a7%3A0x2b7f266869fda205!2sMuseu%20do%20Bambu%20e%20Cia!5e0!3m2!1spt-BR!2sbr!4v1680758044700!5m2!1spt-BR!2sbr"
      }
      mapalink={"https://goo.gl/maps/6FRGq6Si6hdDaHtb8"}
      parag={[
        "O Museu do Bambu é uma atração imperdível em Ametista do Sul, contando com mais de 600 peças feitas de bambu em seu acervo. O museu oferece uma oportunidade única de adquirir conhecimento sobre a história e o potencial dessa gramínea, além de permitir a visualização de diferentes espécies.",
        "Além disso, o museu também oferece a oportunidade de saborear deliciosos produtos derivados do bambu, como broto em conserva, chá, biscoito e amendoim, todos produzidos localmente. É uma experiência única para os amantes da culinária e para aqueles que buscam conhecer melhor a cultura da região.",
      ]}
    />
  );
}
