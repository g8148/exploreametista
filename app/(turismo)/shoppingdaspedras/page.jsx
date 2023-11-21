import Desc from "@/components/desc";
import IMAGES from "@/public/Images";

export default function Home() {
  return (
    <Desc
      título={"Shopping das Pedras"}
      fotos={[
        IMAGES.ShoppingdasPedras[1],
        IMAGES.ShoppingdasPedras[2],
        IMAGES.ShoppingdasPedras[3],
        IMAGES.ShoppingdasPedras[4],
      ]}
      mapa={
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7087.110659557723!2d-53.20554897467065!3d-27.358367131750672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fb6fc0caf88b1d%3A0xb049574ac144a9d2!2sShopping%20das%20Pedras!5e0!3m2!1spt-PT!2sbr!4v1682365606865!5m2!1spt-PT!2sbr"
      }
      mapalink={"https://goo.gl/maps/ucQGrxioaRWC3bez5"}
      parag={[
        "Se você está procurando uma variedade incrível de joias e itens de artesanato em pedras preciosas, o Shopping das Pedras em Ametista do Sul é o lugar perfeito para você. Com uma ampla seleção de produtos, incluindo árvores, animais e outras peças decorativas esculpidas em pedras como ametista, quartzo e ágata, o shopping oferece uma experiência única de compras que agrada a todos os gostos.",
        "Além das incríveis joias e artesanatos, o Shopping das Pedras também oferece tours guiados por minas locais, onde os visitantes podem aprender mais sobre a história da cidade e a produção de pedras preciosas. É um lugar especial para quem procura por peças únicas de arte e um ambiente cultural rico em tradição e beleza natural.",
      ]}
    />
  );
}
