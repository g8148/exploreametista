import Desc from "@/components/desc";
import IMAGES from "@/public/Images";

export default function Home() {
  return (
    <Desc
      título={"Belvedere Mina"}
      fotos={[
        IMAGES.Belvedere[6],
        IMAGES.Belvedere[2],
        IMAGES.Belvedere[1],
        IMAGES.Belvedere[3],
        IMAGES.Belvedere[4],
        IMAGES.Belvedere[5],
      ]}
      mapa={
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.3665689271456!2d-53.174666784945416!3d-27.364265082935205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fb6fcd715b987f%3A0x494b891ba65f4de4!2sComplexo%20Belvedere%20Mina%20-%20Hotel%20e%20Restaurante%20Subterr%C3%A2neo!5e0!3m2!1spt-PT!2sbr!4v1681861965790!5m2!1spt-PT!2sbr"
      }
      mapalink={"https://goo.gl/maps/CxTKWuvrc4jTGjWv7"}
      parag={[
        "O Belvedere é um complexo turístico imperdível em Ametista do Sul, que oferece uma variedade de atrações em um único lugar. Com opções para todos os gostos, o complexo conta com um restaurante subterrâneo construído dentro de uma mina desativada, chalés aconchegantes, piscinas, boliche, tirolesa e muito mais.",
        "Os visitantes podem desfrutar de uma experiência única ao se hospedar nos chalés do Belvedere, que oferecem conforto e tranquilidade em meio à natureza. Além disso, as piscinas são perfeitas para relaxar e se refrescar nos dias de calor, enquanto o boliche e a tirolesa garantem momentos de diversão.",
        "O Belvedere é uma excelente opção para quem busca um lugar completo e diversificado para passar o dia ou até mesmo se hospedar e desfrutar de todas as atrações que o complexo oferece.",
      ]}
    />
  );
}
