import Desc from "@/components/desc";
import IMAGES from "@/public/Images";

export default function Home() {
  return (
    <Desc
      título={"Trenzinho das Pedras"}
      fotos={[
        IMAGES.TrenzinhodasPedras[1],
        IMAGES.TrenzinhodasPedras[2],
        IMAGES.TrenzinhodasPedras[3],
        IMAGES.TrenzinhodasPedras[4],
      ]}
      mapa={
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.4347043913067!2d-53.18421023494529!3d-27.362136282936074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fb6f9cf9602405%3A0x50f648a42af1b3b7!2sValitur%20-%20Ametista%20do%20Sul%20-%20RS!5e0!3m2!1spt-PT!2sbr!4v1681907903458!5m2!1spt-PT!2sbr"
      }
      mapalink={"https://goo.gl/maps/tZ4SG6CfS3v9ud428"}
      parag={[
        "O passeio de treinzinho das pedras é uma ótima opção para quem deseja conhecer as belas paisagens da cidade e do interior de uma forma diferente. Durante o passeio, o visitante tem a oportunidade de contemplar a natureza e observar de perto a exuberância das pedras ametistas que compõem a região.",
        "O passeio é guiado por um profissional que compartilha informações sobre a história e a cultura da cidade, tornando a experiência ainda mais enriquecedora. Além disso, o passeio é seguro e confortável, ideal para toda a família.",
      ]}
    />
  );
}
