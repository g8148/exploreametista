"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "../public/slideshow.css";

export default function Slideshow({ imgs }) {
  const [slideIndex, setSlideIndex] = useState(1);

  function plusSlides(n) {
    setSlideIndex((prevIndex) => prevIndex + n);
  }

  function currentSlide(n) {
    setSlideIndex(n);
  }

  function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (slides.length === 0 || dots.length === 0) {
      return;
    }

    if (n > slides.length) {
      setSlideIndex(1);
      return;
    }

    if (n < 1) {
      setSlideIndex(slides.length);
      return;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-dot", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active-dot";
  }

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  return (
    <div>
      <div className="slideshow-container">
        <div>
          {imgs.map((img, index) => (
            <div className="mySlides fade" key={index}>
              <Image src={img} alt="" />
            </div>
          ))}
        </div>
        <button className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </button>
        <button className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </button>
      </div>

      <div className="dots">
        {imgs.map((img, index) => (
          <span
            className={`dot ${slideIndex === index + 1 ? "active-dot" : ""}`}
            onClick={() => currentSlide(index + 1)}
            key={index}
          ></span>
        ))}
      </div>
    </div>
  );
}

// import "../public/slideshow.css";
// import Image from "next/image";
// import { useEffect } from "react";

// let slideIndex = 1;

// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   if (typeof window !== "undefined") {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {
//       slideIndex = 1;
//     }
//     if (n < 1) {
//       slideIndex = slides.length;
//     }
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active-dot", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active-dot";
//   }
// }

// export default function Slideshow({ imgs }) {
//   useEffect(() => {
//     showSlides(slideIndex);
//   }, []);
//   return (
//     <div>
//       <div class="slideshow-container">
//         <div>
//           {imgs.map((imgs) => {
//             return (
//               <div class="mySlides fade">
//                 <Image src={imgs} />
//               </div>
//             );
//           })}
//         </div>
//         <button class="prev" onclick="plusSlides(-1)">
//           &#10094;
//         </button>
//         <button class="next" onclick="plusSlides(1)">
//           &#10095;
//         </button>
//       </div>

//       <div class="dots">
//         {imgs.map(() => {
//           const imgsLength = imgs.length;
//           return <span class="dot" onclick="currentSlide(imgsLength)"></span>;
//         })}
//       </div>
//     </div>
//   );
// }
