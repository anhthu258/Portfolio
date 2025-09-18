import { useRef, useState, useEffect } from "react";

const galleryTexts = [
	"My Projects Gallery"
];

function useTypewriter(texts, typingSpeed = 100, pause = 1200) {
	const [displayed, setDisplayed] = useState("");
	const [index, setIndex] = useState(0);
	const [deleting, setDeleting] = useState(false);

	useEffect(() => {
		let timeout;
		const currentText = texts[index % texts.length];

		if (!deleting && displayed.length < currentText.length) {
			timeout = setTimeout(() => {
				setDisplayed(currentText.slice(0, displayed.length + 1));
			}, typingSpeed);
		} else if (!deleting && displayed.length === currentText.length) {
			timeout = setTimeout(() => setDeleting(true), pause);
		} else if (deleting && displayed.length > 0) {
			timeout = setTimeout(() => {
				setDisplayed(currentText.slice(0, displayed.length - 1));
			}, typingSpeed / 2);
		} else if (deleting && displayed.length === 0) {
			setDeleting(false);
			setIndex((i) => (i + 1) % texts.length);
		}
		return () => clearTimeout(timeout);
	}, [displayed, deleting, index, texts, typingSpeed, pause]);

	return displayed;
}

const Preview = () => {
	const swiperRef = useRef(null);
	const [slides, setSlides] = useState([]);
	const [current, setCurrent] = useState(0);
	const slideWidth = 350;

	useEffect(() => {
		fetch("/data/slide.json")
			.then((res) => res.json())
			.then((data) => setSlides(data));
	}, []);

	const scrollLeft = () => {
		if (swiperRef.current) {
			let newIndex = current - 1;
			if (newIndex < 0) {
				newIndex = slides.length - 1;
				swiperRef.current.scrollTo({ left: slideWidth * newIndex, behavior: "smooth" });
			} else {
				swiperRef.current.scrollBy({ left: -slideWidth, behavior: "smooth" });
			}
			setCurrent(newIndex);
		}
	};

	const scrollRight = () => {
		if (swiperRef.current) {
			let newIndex = current + 1;
			if (newIndex >= slides.length) {
				newIndex = 0;
				swiperRef.current.scrollTo({ left: 0, behavior: "smooth" });
			} else {
				swiperRef.current.scrollBy({ left: slideWidth, behavior: "smooth" });
			}
			setCurrent(newIndex);
		}
	};

	const typedH1 = useTypewriter(galleryTexts);

	return (
		<section className="projects-gallery">
			<h1>{typedH1}<span className="type-cursor">|</span></h1>
			<div className="carousel-arrows">
				<button className="arrow left" onClick={scrollLeft} aria-label="Scroll left">
					<img src="/assets/arrow-left.png" alt="Arrow left"/>
				</button>
				<div className="swiper" ref={swiperRef}>
					<div className="swiper-wrapper">
						{slides.map((slide, idx) => (
							<aside
								className={
									idx === 0 ? "swiper-slide" : "carusel-item"
								}
								key={slide.title}
							>
								<img src={slide.img} alt={slide.alt} />
								<div className="overlay">
									<h3>{slide.title}</h3>
									<p>{slide.desc}</p>
								</div>
							</aside>
						))}
					</div>
				</div>
				<button className="arrow right" onClick={scrollRight} aria-label="Scroll right">
					<img src="/assets/arrow-right.png" alt="Arrow right"/>
				</button>
			</div>
		</section>
	);
};

export default Preview;