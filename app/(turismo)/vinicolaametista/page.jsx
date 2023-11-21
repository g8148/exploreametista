import Desc from "@/components/desc";
import IMAGES from "@/public/Images";

export default function Home() {
  return (
    <Desc
      título={"Vinícola Ametista"}
      fotos={[
        IMAGES.VinícolaAmetista[1],
        IMAGES.VinícolaAmetista[5],
        IMAGES.VinícolaAmetista[2],
        IMAGES.VinícolaAmetista[3],
        IMAGES.VinícolaAmetista[4],
        IMAGES.VinícolaAmetista[6],
        IMAGES.VinícolaAmetista[7],
      ]}
      mapa={
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.5443420325055!2d-53.20651988494551!3d-27.358710482937532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fb6fc46122020b%3A0xfaf0e6868093c55f!2sVin%C3%ADcola%20Ametista!5e0!3m2!1spt-PT!2sbr!4v1681865918327!5m2!1spt-PT!2sbr"
      }
      mapalink={"https://goo.gl/maps/Jf7c2U7JaVvnWYyM6"}
      parag={[
        "A Vinícola Ametista é uma das atrações mais impressionantes da região, contando com a maior cave subterrânea de envelhecimento de vinhos existente. Os visitantes podem explorar essa impressionante estrutura subterrânea e descobrir os segredos por trás do envelhecimento dos vinhos.",
        "A vinícola também oferece degustações de seus premiados vinhos produzidos com uvas selecionadas e cultivadas na região, além de possuir um belo espaço para eventos e celebrações. É um destino perfeito para os amantes de vinho e para aqueles que buscam experiências gastronômicas únicas.",
      ]}
    />
  );
}
