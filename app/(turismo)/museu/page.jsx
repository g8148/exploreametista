import Desc from "@/components/desc";
import IMAGES from "@/public/Images";

export default function Home() {
  return (
    <Desc
      título={"Ametista Parque Museu"}
      fotos={[
        IMAGES.Museu[1],
        IMAGES.Museu[2],
        IMAGES.Museu[3],
        IMAGES.Museu[4],
        IMAGES.Museu[5],
      ]}
      mapa={
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7942.237593692255!2d-53.20438209138052!3d-27.36643367588382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fb6fece2488fa1%3A0xec31f629d31b9b35!2sAmetista%20Parque%20Museu!5e0!3m2!1spt-BR!2sbr!4v1680178457867!5m2!1spt-BR!2sbr"
      }
      mapalink={"https://goo.gl/maps/6Bw31mUkTA1cRh2z8"}
      parag={[
        "O Museu de Pedras Preciosas de Ametista do Sul é um lugar único que oferece diversas atrações para os visitantes. Além de conhecer as diversas pedras preciosas encontradas na região, os visitantes também podem desfrutar de outras atividades emocionantes.",
        "No restaurante subterrâneo, os visitantes podem desfrutar de uma experiência gastronômica diferente, em um ambiente aconchegante e inusitado. Já a vinícola subterrânea Coperametista oferece degustações de vinhos produzidos na região, em um ambiente que explora as características do solo local.",
        "A Mina Beer, uma cervejaria artesanal, também está presente no local, proporcionando aos visitantes a oportunidade de degustar cervejas locais produzidas com ingredientes da região. Para quem busca emoção, há a opção de realizar um passeio motorizado pela mina de Ametista, que pode ser feito em quadriciclos, além de poder descer por uma tirolesa.",
        "Em suma, o Museu de Pedras Preciosas de Ametista do Sul é uma excelente opção de passeio para quem busca por experiências diferenciadas, aliando cultura, gastronomia, vinícola, cervejaria artesanal e aventura em um só lugar.",
      ]}
    />
  );
}
