import { useRef, useEffect, useState } from "react";
import Parallax from "../Components/Parallax";
import Preview from "../Components/Preview";

export default function Home() {
  const faceRef = useRef(null);
  const [faceInView, setFaceInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setFaceInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (faceRef.current) observer.observe(faceRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="home-wrapper">
          <aside className="social">
            <img src="/assets/line.png" alt="straight line"/>
            <a href="https://www.linkedin.com/in/anh-thu-kieu-411293383/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/linkedin.svg" alt="Linkedin Logo" />
            </a>
            <a href="./Chat" target="_blank" rel="noopener noreferrer">
              <img src="/assets/envelope.svg" alt="Mail Logo" />
            </a>
            <a href="https://www.facebook.com/anhthu.kieu.90/?locale=da_DK" target="_blank" rel="noopener noreferrer">
              <img src="/assets/facebook.svg" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/in_sane258?igsh=MTBoc2hiOHIyOG9oag==" target="_blank" rel="noopener noreferrer">
              <img src="/assets/instagram.svg" alt="Instagram" />
            </a>
            <a href="https://github.com/anhthu258" target="_blank" rel="noopener noreferrer">
              <img src="/assets/github.svg" alt="Github Logo" />
            </a>
            <img src="/assets/line.png" alt="straight line"/>
          </aside>
          <aside
            className={`face-wrapper${faceInView ? " pop" : ""}`}
            ref={faceRef}
          >
            <div className="img-wrapper">
             <img src="/assets/portrait_mono.jpg" alt="Anh Thu Kieu"/>
              <img src="/assets/items-2.png" alt="Squares"/>
            </div>
            <h1 className="overlay-title">GRAPHIC <span>DESIGNER</span></h1>
            <h1 className="overlay-title">FRONTEND <span>DEVELOPER</span></h1>
          </aside>
      </section>
      <section>
        <Parallax/>
      </section>
      <section>
        <Preview/>
      </section>
    </>
  );
}