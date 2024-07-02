import codethinking from './assets/codethinking.svg';

const Hero = () => {
	return (
		<section className="hero">
			<div className="hero-center">
				<div className="hero-title">
					<h1>David McGee</h1>
					<p>
						A portfolio of sample projects completed over the past few months. I'm a
						Full Stack Software Developer - certified through the
						University of Texas at Austin. Passionate about learning new
						technologies and building web applications. Resilient.
						Curious. Complex problem solver. Plays nice with others.
					</p>
				</div>
				<div className="img-container">
					<img
						src={codethinking}
						alt="woman and the browser"
						className="img"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
