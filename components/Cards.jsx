import Image from "next/image";
import Link from "next/link";

export default function Card({ título, texto, link, img }) {
  return (
    <Link
      href={link}
      className="flex flex-col bg-[--background-corpo] rounded-xl p-2 text-center w-[300px] h-[560px] no-underline box-shadow duration-200 hover:-translate-y-1"
    >
      <Image
        src={img}
        className=" rounded-xl min-h-[214px] object-cover"
        alt=""
        loading="eager"
      />
      <div className="p-4 mt-auto flex flex-col h-full">
        <div className="text-2xl font-medium mb-4">{título}</div>
        <p>{texto}</p>
        <div className="mt-auto mb-[5px]">
          <span className="py-3 px-6 rounded-3xl font-semibold text-[#694bff] bg-[#d8d1ff]">
            Leia mais
          </span>
        </div>
      </div>
    </Link>
  );
}
