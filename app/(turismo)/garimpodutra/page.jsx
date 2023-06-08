import Desc from "@/components/desc";
import IMAGES from "@/public/Images";

export default function Home() {
  return (
    <Desc
      título={"Garimpo em Atividade Dutra"}
      fotos={[
        IMAGES.GarimpoemAtividadeDutra[1],
        IMAGES.GarimpoemAtividadeDutra[2],
        IMAGES.GarimpoemAtividadeDutra[3],
        IMAGES.GarimpoemAtividadeDutra[4],
      ]}
      mapa={
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.574074314425!2d-53.19386308494558!3d-27.357781382937905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fb6fdaa817d08f%3A0xab308957640daed8!2sGarimpo%20em%20Atividade!5e0!3m2!1spt-PT!2sbr!4v1682384445855!5m2!1spt-PT!2sbr"
      }
      mapalink={"https://goo.gl/maps/FZ1C4uwJV1CoEJfD7"}
      parag={[
        "Se você é uma pessoa aventureira e adora desafios, não pode deixar de conhecer o Garimpo em Atividade em Ametista do Sul. Com essa experiência única, você poderá pilotar sua moto pelo subterrâneo da mina e explorar uma galeria de pedras ametistas, tendo uma experiência inesquecível e emocionante.",
        "O Garimpo em Atividade oferece a oportunidade de sentir a adrenalina de pilotar uma moto em um cenário único, onde é possível ver de perto a beleza das pedras ametistas e conhecer mais sobre a história da extração dessas pedras na região. É uma atividade perfeita para quem quer se divertir e vivenciar novas experiências.",
      ]}
    />
  );
}
