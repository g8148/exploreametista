import Desc from "@/components/desc";
import IMAGES from "@/public/Images";

export default function Home() {
  return (
    <Desc
      título={"Geoparque Subterrâneo"}
      fotos={[
        IMAGES.GeoparqueSubterrâneo[1],
        IMAGES.GeoparqueSubterrâneo[2],
        IMAGES.GeoparqueSubterrâneo[3],
        IMAGES.GeoparqueSubterrâneo[4],
        IMAGES.GeoparqueSubterrâneo[5],
      ]}
      mapa={
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.141124055655!2d-53.186387423572576!3d-27.371307712522878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fb6f11dad0fcbb%3A0x7503450837a7fdf5!2sGeoparque%20Subterr%C3%A2neo!5e0!3m2!1spt-PT!2sbr!4v1686186668665!5m2!1spt-PT!2sbr"
      }
      mapalink={"https://goo.gl/maps/m7RzUB5PpcwY19pJ6"}
      // ! os textos de "parag" não foram modificados

      parag={[
        "A Pirâmide Esotérica de Ametista do Sul é um local de meditação e espiritualidade, que atrai visitantes de todo o país em busca de bem-estar e equilíbrio. Construída com blocos de ametista, a pirâmide sustenta em suas paredes internas o poder mágico dos minerais, criando uma atmosfera de energia positiva e cura.",
        "Dentro da pirâmide, é possível sentir a energia da ametista, que é conhecida por suas propriedades calmantes e purificadoras. Muitas pessoas relatam experiências de relaxamento profundo, alívio do estresse e até mesmo cura de doenças físicas e emocionais após meditar no interior da pirâmide. Além disso, a construção da pirâmide segue princípios da geometria sagrada, o que a torna ainda mais especial do ponto de vista espiritual.",
      ]}
    />
  );
}
