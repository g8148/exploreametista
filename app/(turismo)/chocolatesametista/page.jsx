import Desc from "@/components/desc";
import IMAGES from "@/public/Images";

export default function Home() {
  return (
    <Desc
      título={"Chocolates Ametista"}
      fotos={[
        IMAGES.ChocolatesAmetista[6],
        IMAGES.ChocolatesAmetista[2],
        IMAGES.ChocolatesAmetista[1],
        IMAGES.ChocolatesAmetista[3],
        IMAGES.ChocolatesAmetista[4],
        IMAGES.ChocolatesAmetista[5],
      ]}
      mapa={
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.3665689271456!2d-53.174666784945416!3d-27.364265082935205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fb6fcd715b987f%3A0x494b891ba65f4de4!2sComplexo%20Belvedere%20Mina%20-%20Hotel%20e%20Restaurante%20Subterr%C3%A2neo!5e0!3m2!1spt-PT!2sbr!4v1681861965790!5m2!1spt-PT!2sbr"
      }
      mapalink={"https://goo.gl/maps/CxTKWuvrc4jTGjWv7"}
      parag={[
        "O Localizada no coração de uma mina de ametista preservada, a Chocolates Ametista é uma loja de chocolates artesanais verdadeiramente singular. Com um invejável mix de mais de 400 variedades de chocolates, é impossível não salivar ao explorar suas prateleiras. é um complexo turístico imperdível em Ametista do Sul, que oferece uma variedade de atrações em um único lugar. Com opções para todos os gostos, o complexo conta com um restaurante subterrâneo construído dentro de uma mina desativada, chalés aconchegantes, piscinas, boliche, tirolesa e muito mais.",
        "Além disso, os clientes podem desfrutar de uma adega subterrânea bem abastecida, oferecendo uma seleção cuidadosamente escolhida de vinhos, sucos e espumantes. Esta joia escondida está situada ao lado do restaurante subterrâneo do Complexo Belvedere Mina, proporcionando uma experiência gastronômica e de compras verdadeiramente única, em um ambiente que preserva as características naturais da mina.",
        "A atmosfera única da Chocolates Ametista começa assim que os visitantes adentram o espaço. O aroma rico e reconfortante do chocolate artesanal permeia o ar, convidando todos a se entregarem a uma experiência sensorial incomparável.",
        "Cada variedade de chocolate é cuidadosamente elaborada, desde os clássicos mais indulgentes até combinações inovadoras e exóticas que desafiam os paladares mais exigentes. Enquanto os clientes exploram as prateleiras repletas de tentações açucaradas, também são convidados a mergulhar na experiência completa oferecida pela Chocolates Ametista.",
        "A localização da loja, ao lado do restaurante subterrâneo do Complexo Belvedere Mina, adiciona uma camada adicional de encanto e autenticidade à experiência. Enquanto os clientes desfrutam de seus deleites gourmet, podem apreciar a vista única das formações rochosas naturais da mina, lembrando-se constantemente da origem única e especial dos produtos que estão saboreando.",
        "Em suma, a Chocolates Ametista não é apenas uma loja de chocolates, mas sim um destino imperdível para os amantes da boa comida e das experiências únicas. Com sua variedade de produtos de alta qualidade, ambiente encantador e localização pitoresca, é um verdadeiro tesouro escondido que merece ser descoberto e apreciado por todos os que valorizam o prazer gastronômico.",
      ]}
    />
  );
}
