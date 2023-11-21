import Desc from "@/components/desc";
import IMAGES from "@/public/Images";

export default function Home() {
  return (
    <Desc
      título={"Geoparque Subterrâneo"}
      fotos={[
        IMAGES.GeoparqueSubterrâneo[1],
        IMAGES.GeoparqueSubterrâneo[2],
        IMAGES.GeoparqueSubterrâneo[3],
        IMAGES.GeoparqueSubterrâneo[4],
        IMAGES.GeoparqueSubterrâneo[5],
      ]}
      mapa={
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.141124055655!2d-53.186387423572576!3d-27.371307712522878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fb6f11dad0fcbb%3A0x7503450837a7fdf5!2sGeoparque%20Subterr%C3%A2neo!5e0!3m2!1spt-PT!2sbr!4v1686186668665!5m2!1spt-PT!2sbr"
      }
      mapalink={"https://goo.gl/maps/m7RzUB5PpcwY19pJ6"}
      parag={[
        "O geoparque conta com diversas atrações, podendo te proporcionar a experiencia de pedalar apreciando a vista, mostrar também como foi a evolução do trabalho da mineração, trazendo aventuras radicais e muito mais.",
      ]}
    />
  );
}
