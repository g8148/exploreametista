import Desc from "@/components/desc";
import IMAGES from "@/public/Images";

export default function Home() {
  return (
    <Desc
      título={"Pirâmide Esotérica"}
      fotos={[
        IMAGES.Pirâmide[2],
        IMAGES.Pirâmide[3],
        IMAGES.Pirâmide[4],
        IMAGES.Pirâmide[5],
        IMAGES.Pirâmide[1],
      ]}
      mapa={
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221.46554148437716!2d-53.18289330599105!3d-27.361700122875764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fb6f9909d6de81%3A0x6d78183dcbcb46c!2zUGlyw6JtaWRlIEVzb3TDqXJpY2E!5e0!3m2!1spt-BR!2sbr!4v1679520292158!5m2!1spt-BR!2sbr"
      }
      mapalink={"https://goo.gl/maps/aWTGxnhK2jehQJRK7"}
      parag={[
        "A Pirâmide Esotérica de Ametista do Sul é um local de meditação e espiritualidade, que atrai visitantes de todo o país em busca de bem-estar e equilíbrio. Construída com blocos de ametista, a pirâmide sustenta em suas paredes internas o poder mágico dos minerais, criando uma atmosfera de energia positiva e cura.",
        "Dentro da pirâmide, é possível sentir a energia da ametista, que é conhecida por suas propriedades calmantes e purificadoras. Muitas pessoas relatam experiências de relaxamento profundo, alívio do estresse e até mesmo cura de doenças físicas e emocionais após meditar no interior da pirâmide. Além disso, a construção da pirâmide segue princípios da geometria sagrada, o que a torna ainda mais especial do ponto de vista espiritual.",
      ]}
    />
  );
}
