import Desc from "@/components/desc";
import IMAGES from "@/public/Images";

export default function Home() {
  return (
    <Desc
      título={"Mina Beer"}
      fotos={[
        IMAGES.MinaBeer[1],
        IMAGES.MinaBeer[2],
        IMAGES.MinaBeer[3],
        IMAGES.MinaBeer[4],
        IMAGES.MinaBeer[5],
      ]}
      mapa={
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.1683503923023!2d-53.20040698494524!3d-27.370457282932662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fb6f7eb5935589%3A0x578d262cdd8a5544!2sMina%20beer!5e0!3m2!1spt-BR!2sbr!4v1680173674746!5m2!1spt-BR!2sbr"
      }
      mapalink={"https://goo.gl/maps/LhKq372YUhF4N6316"}
      parag={[
        "A Mina Beer é uma micro cervejaria localizada em Ametista do Sul, que oferece uma experiência única para os amantes de cerveja artesanal. Ela se destaca por estar instalada dentro de uma mina desativada, o que confere um ambiente inusitado e aconchegante para a degustação de suas cervejas.",
        "Além de poder experimentar diferentes estilos de cerveja, os visitantes também podem comprar as bebidas individualmente ou em kits para levar para casa. A cervejaria é conhecida por sua produção artesanal de alta qualidade e por utilizar ingredientes locais, como a água da região, que é conhecida por sua pureza. A Mina Beer é uma excelente opção de passeio para quem busca uma experiência diferente e autêntica em Ametista do Sul.",
      ]}
    />
  );
}
