import Desc from "@/components/desc";
import IMAGES from "@/public/Images";

export default function Home() {
  return (
    <Desc
      título={"Agro Indústria São Valentin"}
      fotos={[
        IMAGES.AgroIndústriaSãoValentin[1],
        IMAGES.AgroIndústriaSãoValentin[2],
        IMAGES.AgroIndústriaSãoValentin[3],
        IMAGES.AgroIndústriaSãoValentin[4],
        IMAGES.AgroIndústriaSãoValentin[5],
        IMAGES.AgroIndústriaSãoValentin[6],
      ]}
      mapa={
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d587.4596550668618!2d-53.13935855547131!3d-27.39438661339047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fb65fc9c0cc09f%3A0xf03dadab107626b2!2sGeleias%20S%C3%A3o%20Valentin!5e0!3m2!1spt-PT!2sbr!4v1686188871574!5m2!1spt-PT!2sbr"
      }
      mapalink={"https://goo.gl/maps/6Vz76bYdhtPyPbJR9"}
      parag={[
        "Passeio entre as estufas de morango, passando pela agroindústria de geleias e cerveja artesanal, podendo degustar de vários tipos de geleias, pães caseiros, salame e queijo suíço.",
      ]}
    />
  );
}
