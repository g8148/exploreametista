import Desc from "@/components/desc";
import IMAGES from "@/public/Images";

export default function Home() {
  return (
    <Desc
      título={"Criatório Ágata Azul"}
      fotos={[
        IMAGES.ÁgataAzul[1],
        IMAGES.ÁgataAzul[2],
        IMAGES.ÁgataAzul[3],
        IMAGES.ÁgataAzul[4],
      ]}
      mapa={
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7087.589521103734!2d-53.23087984044334!3d-27.350884278585944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fb710f88bdd5eb%3A0x4ec08ef71319242a!2s%C3%81gata%20Azul%20Criat%C3%B3rio%20de%20Aves%20Ornamentais!5e0!3m2!1spt-PT!2sbr!4v1685368033016!5m2!1spt-PT!2sbr"
      }
      mapalink={"https://goo.gl/maps/1mRuQbEMGsBhVnnWA"}
      parag={[
        "Horário de atendimento de sexta a domingo das 8:00 as 17:00 almoço por agendamento! Linha Barreiro Grande inaugurado em 2023, o Criatório Ágata Azul chega para trazer uma opção diferente ao turista que vem a Ametista do Sul. Lugar agradável para visitantes que querem conhecer animais e suas origens, bem como fotografar e se divertir!",
      ]}
    />
  );
}
