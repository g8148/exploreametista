import IMAGES from "../public/Images";
import Card from "@/components/Cards";

export default function Home() {
  return (
    <div>
      <div className="flex flex-wrap justify-center m-5">
        <div className="flex flex-wrap justify-center items-center gap-5 max-w-[1200px]">
          <Card
            título="Agro Industria São Valentin"
            texto="Passeio entre as estufas de morango, passando pela agroindústria de geleias e cerveja artesanal, podendo degustar de vários tipos de geleias, pães caseiros, salame e queijo suíço"
            link="saovalentin"
            img={IMAGES.AgroIndústriaSãoValentin.Main}
          />

          <Card
            título="Ametista Parque Museu"
            texto="Conta com restaurante subterrâneo, vinícola subterrânea Coperametista, Mina beer cervejaria, um passeio motorizado na mina de Ametista, lugar ótimo para quem busca por emoção."
            link="museu"
            img={IMAGES.Museu.Main}
          />

          <Card
            título="Belvedere Mina"
            texto="Belvedere é um complexo que conta com restaurante subterrâneo, construído dentro de uma mina desativada, além de chalés, piscinas, boliche, tirolesa, entre outros atrativos."
            link="belvedere"
            img={IMAGES.Belvedere.Main}
          />

          <Card
            título="Coperametista"
            texto="Uma fábrica que trabalha com envelhecimento de vinhos com alta qualidade e sabor inesquecível e único, diversos tipos de vinhos como vinho tinto seco com envelhecimento de até 10 anos."
            link="coperametista"
            img={IMAGES.Coperametista.Main}
          />

          <Card
            título="Criatório Ágata Azul"
            texto="Horário de atendimento de sexta a domingo das 8:00 as 17:00 almoço por agendamento! linha Barreiro Grande inaugurado em 2023, o Criatório Ágata Azul chega para trazer uma opção diferente ao turista que vem a Ametista do Sul."
            link="agataazul"
            img={IMAGES.ÁgataAzul.Main}
          />

          <Card
            título="Galeria Capra"
            texto="Começa com um tour mostrando variadas pedras, em destaque as ametistas, com um passeio em diferentes espaços, que unem arte e tecnologia, com experiência imersiva de sons, aromas, cores, textura e até sabores."
            link="galeriacapra"
            img={IMAGES.GaleriaCapra.Main}
          />

          <Card
            título="Garimpo em Atividade Dutra"
            texto="Se aventure no Garimpo em Atividade, pilote sua moto pelo subterrâneo e tenha uma experiência inesquecível explorando uma galeria de pedras ametistas."
            link="garimpodutra"
            img={IMAGES.GarimpoemAtividadeDutra.Main}
          />

          <Card
            título="Geoparque Subterrâneo"
            texto="Memorial do garimpeiro, bike aérea, garimpo demonstrativo, balanço do infinito, entre outras atrações."
            link="geoparquesubterraneo"
            img={IMAGES.GeoparqueSubterrâneo.Main}
          />

          <Card
            título="Igreja São Gabriel"
            texto="A Igreja São Gabriel de Ametista do Sul tem todo o seu interior revestido da pedra que dá o nome à cidade. Além do revestimento das paredes, a Igreja conta também com pia batismal feita com um geodo de Ametista."
            link="igrejasaogabriel"
            img={IMAGES.IgrejaSaoGabriel.Main}
          />

          <Card
            título="L.P. Minerais do Brasil"
            texto="Local com grande variedade de pedras, com itens diferenciados e muito bonitos, com importação de pedras semipreciosas dentro e fora do país."
            link="lp"
            img={IMAGES.LP.Main}
          />

          <Card
            título="Mina Beer"
            texto="É a primeira micro cervejaria subterrânea, que se encontra em uma mina desativada. Conta com a degustação de suas cervejas artesanais e também com a venda individual ou em kits."
            link="minabeer"
            img={IMAGES.MinaBeer.Main}
          />

          <Card
            título="Mirante das Pedras"
            texto="O passeio de Trenzinho das Pedras é um passeio diferenciado onde o visitante tem a oportunidade de conhecer as belas paisagens da cidade e interior, em contato com a natureza."
            link="mirantedaspedras"
            img={IMAGES.MirantedasPedras.Main}
          />

          <Card
            título="Museu do bambu"
            texto="Mais de 600 peças feitas de bambu, adquirir melhor conhecimento a história e o potencial dessa gramínea, visualizar diferente espécies, além de saborear o delicioso broto do bambu em conserva o chá, o biscoito, e o amendoim."
            link="museudobambu"
            img={IMAGES.Museudobambu.Main}
          />

          <Card
            título="Pirâmide Esotérica"
            texto="A pirâmide esotérica é um local para meditação, pois sustenta o poder mágico dos minerais em suas paredes internas."
            link="piramide"
            img={IMAGES.Pirâmide.Main}
          />

          <Card
            título="Restaurante Garimpo"
            texto="O garimpo restaurante subterrâneo é localizado no Parque Museu, em uma mina desativada de pedras ametista. Conta com buffet livre, e com variáveis tipos de pratos."
            link="restaurantegarimpo"
            img={IMAGES.RestauranteGarimpo.Main}
          />

          <Card
            título="Shopping das Pedras"
            texto="É um incrível lugar onde se encontra diversos tipos de joias e itens de artesanato, como árvores, animais, entre outros."
            link="shoppingdaspedras"
            img={IMAGES.ShoppingdasPedras.Main}
          />

          <Card
            título="Trenzinho das Pedras"
            texto="O passeio de Trenzinho das Pedras é um passeio diferenciado onde o visitante tem a oportunidade de conhecer as belas paisagens da cidade e interior, em contato com a natureza."
            link="trenzinhodaspedras"
            img={IMAGES.TrenzinhodasPedras.Main}
          />

          <Card
            título="Vinícola Ametista"
            texto="A Vinícola Ametista impressiona com a maior caverna subterrânea de envelhecimento de vinhos existente."
            link="vinicolaametista"
            img={IMAGES.VinícolaAmetista.Main}
          />
        </div>
      </div>
    </div>
  );
}
