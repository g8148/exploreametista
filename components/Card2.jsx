import Image from "next/image";
import Link from "next/link";

export default function Card2({ título, numero, link, img }) {
  return (
    <Link
      href={link}
      className="flex flex-col bg-[--background-corpo] rounded-xl p-2 text-center w-[300px] h-[480px] no-underline box-shadow duration-200 hover:-translate-y-1"
      target="_blank"
    >
      <Image
        src={img}
        className=" rounded-xl min-h-[214px] object-cover w-full"
        alt=""
      />
      <div className="p-4 mt-auto flex flex-col h-full">
        <div className="text-2xl font-medium mb-4">{título}</div>
        <ul className="borderr rounded-xl">
          <li>Número de telefone para contato:</li>
          <li className="m-1">{numero}</li>
        </ul>
        <div className="mt-auto mb-[5px]">
          <span className="py-3 px-6 rounded-3xl font-semibold text-[#8d22ff] bg-[#e5d4fc]">
            Veja mais
          </span>
        </div>
      </div>
    </Link>
  );
}
