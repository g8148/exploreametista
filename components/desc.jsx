import Slideshow from "@/components/slideshow";
import Link from "next/link";

export default function Desc({ título, fotos, mapa, mapalink, parag }) {
    return (
        <div>
            <div className="flex justify-center mb-6">
                <div className="flex w-[1200px] flex-col justify-center bg-[--background-corpo] h-auto p-8 mt-6 rounded-xl box-shadow2 md:p-0 md:py-8">
                    <h1 className="text-center mb-10 font-medium text-3xl">
                        {título}
                    </h1>
                    <div className="flex flex-col p-6 max-w-[900px] self-center text-center font-light md:p-3">
                        <h2 className="font-medium m-5 text-2xl">Fotos</h2>

                        <Slideshow imgs={fotos} />

                        <h2 className="font-medium m-5 text-2xl">Descrição</h2>
                        <div className="text-justify rounded-xl px-4 indent-4 borderr">
                            {parag.map((texto) => (
                                <p className="my-4">{texto}</p>
                            ))}
                        </div>

                        <div>
                            <h2 className="font-medium m-5 text-2xl">Mapa</h2>

                            <span>
                                <div className="relative overflow-hidden w-full pt-[56.25%] z-[1]">
                                    <iframe
                                        className="absolute top-0 left-0 bottom-0 right-0 w-full h-full rounded-xl borderr"
                                        src={mapa}
                                        allowFullScreen=""
                                        referrerPolicy="no-referrer-when-downgrade"
                                        loading="lazy"
                                    ></iframe>
                                </div>
                                <br />
                                Ou{" "}
                                <Link
                                    href={mapalink}
                                    target="_blank"
                                    className="no-underline text-[--black]"
                                >
                                    <strong>clique aqui</strong>
                                </Link>{" "}
                                para ser redirecionado automaticamente ao Google
                                Maps
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
