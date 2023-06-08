import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <header className="bg-[#dad3ee] flex gap-3 p-1 justify-around">
        <Link
          href="/"
          className="flex gap-2 self-center font-medium text-xl items-center text-[--black]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="300"
            viewBox="0 0 300 239"
            preserveAspectRatio="xMidYMid meet"
            stroke="currentColor"
            fill="currentColor"
            className="h-auto max-w-[70px]"
          >
            <g transform="translate(0,239) scale(0.1,-0.1)">
              <path d="M514 2202 c-11 -8 -76 -115 -179 -297 -38 -66 -97 -168 -132 -228 -34 -59 -63 -110 -63 -114 0 -4 37 -45 83 -92 112 -117 362 -382 547 -581 84 -91 197 -210 249 -265 114 -118 366 -386 441 -467 29 -32 58 -58 66 -58 12 0 104 92 249 250 66 71 383 411 565 605 47 50 144 153 216 230 72 77 178 191 237 254 59 62 107 119 107 125 0 7 -64 111 -141 232 -78 120 -153 238 -168 262 -14 24 -42 67 -62 95 l-35 52 -494 0 c-449 0 -494 -1 -503 -17 -8 -12 -7 -21 2 -32 12 -14 67 -16 490 -16 l476 0 50 -78 c94 -146 178 -277 200 -312 12 -19 44 -68 70 -108 l47 -73 -133 -142 c-74 -78 -163 -173 -199 -211 -36 -39 -101 -108 -146 -155 -44 -48 -114 -122 -155 -166 -40 -44 -76 -81 -80 -83 -3 -1 -317 313 -698 698 l-693 700 -101 0 c-56 0 -107 -4 -113 -8z m461 -334 c148 -150 456 -461 684 -690 l415 -417 -84 -88 c-79 -82 -292 -309 -404 -431 -50 -53 -69 -62 -83 -38 -4 8 -53 61 -107 117 -54 57 -126 133 -160 169 -60 65 -152 162 -316 335 -47 50 -116 124 -155 165 -38 41 -142 151 -230 244 -88 93 -164 174 -170 181 -5 6 -41 43 -79 82 l-69 71 64 113 c35 61 75 130 88 153 13 23 36 62 50 87 14 25 49 85 76 132 l50 87 81 0 80 0 269 -272z" />
            </g>
          </svg>
          <div className="">Explore Ametista</div>
        </Link>
        <div className="flex list-none gap-4 justify-evenly nav-itens">
          <Link
            href="/"
            className="flex items-center gap-y-[3px] gap-x-[5px] font-medium p-3 duration-300 text-[--black] no-underline w-auto text-center m-auto flex-grow rounded-xl hover:bg-[rgba(0, 0, 0, 0.1)] hover:rounded-xl hover:bg-[#0000001a] nav-links"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="6 3 18 3 22 9 12 22 2 9"></polygon>
              <path d="m12 22 4-13-3-6"></path>
              <path d="M12 22 8 9l3-6"></path>
              <path d="M2 9h20"></path>
            </svg>
            Turismo
          </Link>
          <Link
            href="/"
            className="flex items-center gap-y-[3px] gap-x-[5px] font-medium p-3 duration-300 text-[--black] no-underline w-auto text-center m-auto flex-grow rounded-xl hover:bg-[rgba(0, 0, 0, 0.1)] hover:rounded-xl hover:bg-[#0000001a] nav-links"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
              <path d="M3.5 12h6l.5-1 2 4.5 2-7 1.5 3.5h5"></path>
            </svg>
            Saúde
          </Link>
          <Link
            href="/"
            className="flex items-center gap-y-[3px] gap-x-[5px] font-medium p-3 duration-300 text-[--black] no-underline w-auto text-center m-auto flex-grow rounded-xl hover:bg-[rgba(0, 0, 0, 0.1)] hover:rounded-xl hover:bg-[#0000001a] nav-links"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
            </svg>
            Utilidades
          </Link>
          <Link
            href="Sobre-nos"
            className="flex items-center gap-y-[3px] gap-x-[5px] font-medium p-3 duration-300 text-[--black] no-underline w-auto text-center m-auto flex-grow rounded-xl hover:bg-[rgba(0, 0, 0, 0.1)] hover:rounded-xl hover:bg-[#0000001a] nav-links"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            Sobre nós
          </Link>
        </div>
      </header>
    </div>
  );
}
