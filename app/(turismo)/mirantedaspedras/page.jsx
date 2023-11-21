import Desc from "@/components/desc";
import IMAGES from "@/public/Images";

export default function Home() {
  return (
    <Desc
      título={"Mirante das Pedras"}
      fotos={[
        IMAGES.MirantedasPedras[1],
        IMAGES.MirantedasPedras[2],
        IMAGES.MirantedasPedras[3],
      ]}
      mapa={
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.6009832903246!2d-53.185279384945574!3d-27.356940482938306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fb6f5e07e4aec5%3A0x25ddef3d87087c8c!2sMirante%20das%20Pedras!5e0!3m2!1spt-PT!2sbr!4v1685368307700!5m2!1spt-PT!2sbr"
      }
      mapalink={"https://goo.gl/maps/N95TA92vuWYTXXNN9"}
      parag={[
        "Oferecemos pedras naturais, sem qualquer processo de industrialização, preservando integralmente sua energia e beleza intrínseca. Convidamos você a desfrutar de uma visita a esta deslumbrante paisagem. O Mirante das Pedras transcende a mera localidade, proporcionando uma experiência de vida verdadeiramente única.",
      ]}
    />
  );
}
