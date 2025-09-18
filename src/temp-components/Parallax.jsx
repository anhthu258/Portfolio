import { useRef, useEffect, useState } from "react";

const Parallax = () => {
  const parallaxRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (parallaxRef.current) observer.observe(parallaxRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={parallaxRef} className="parallax">
      <section className={`text-container${inView ? " pop" : ""}`}>
        <h1 className="color-pop">YOUR</h1>
        <h3>HEADTURNING, SCROLL-STOPPING</h3>
        <h1>GRAPHICS</h1>
        <h1>WEBSITES</h1>
        <h1>BRANDS</h1>
        <h3 className="color-pop">ALL IN ONE PLACE</h3>
      </section>
      <div className="doodlr"></div>
      <div className={`square-pink${inView ? " pop" : ""}`}></div>
      <div className={`square-grey${inView ? " pop" : ""}`}></div>
    </div>
  );
};

export default Parallax;