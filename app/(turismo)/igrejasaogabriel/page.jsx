import Desc from "@/components/desc";
import IMAGES from "@/public/Images";

export default function Home() {
  return (
    <Desc
      título={"Igreja São Gabriel"}
      fotos={[
        IMAGES.IgrejaSaoGabriel[1],
        IMAGES.IgrejaSaoGabriel[2],
        IMAGES.IgrejaSaoGabriel[3],
        IMAGES.IgrejaSaoGabriel[4],
        IMAGES.IgrejaSaoGabriel[5],
      ]}
      mapa={
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.434473909322!2d-53.184727436380435!3d-27.36214348429015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fb6f99122701bb%3A0x55d64cfe0f291a7c!2sPar%C3%B3quia%20S%C3%A3o%20Gabriel!5e0!3m2!1spt-PT!2sbr!4v1686187358531!5m2!1spt-PT!2sbr"
      }
      mapalink={"https://goo.gl/maps/S1PkaykzgLd73Huq9"}
      parag={[
        "A Igreja São Gabriel de Ametista do Sul é um dos principais pontos turísticos da cidade, sendo conhecida por seu interior revestido totalmente com a pedra ametista, que dá nome à região. É um espetáculo visual único e impressionante.",
        "Além do revestimento das paredes, a igreja conta com uma pia batismal feita com um geodo de ametista, tornando-a ainda mais especial e significativa. É um local de grande importância religiosa e histórica na cidade, atraindo visitantes de diferentes partes do mundo.",
      ]}
    />
  );
}
