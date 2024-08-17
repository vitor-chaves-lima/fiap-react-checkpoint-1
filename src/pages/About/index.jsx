import Hero from "../../components/Hero";
import AboutHeroImage1 from "../../assets/images/about_hero_image_1.png";
import AboutHeroImage2 from "../../assets/images/about_hero_image_2.png";
import Container from "../../components/Container";

/* =================== Main Component ================== */

function AboutPage() {
	const heroContent = {
		headline: "Bem-vindo à revolução dos vídeos!",
		description:
			"Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores.",
		callToAction: "Baixe o app",
		heroElement: (
			<>
				<img src={AboutHeroImage1} alt="Hero 1" />
				<img src={AboutHeroImage2} alt="Hero 2" />
			</>
		),
	};

	return (
		<Container>
			<Hero {...heroContent} />
		</Container>
	);
}

/* ====================== Exports ====================== */

export default AboutPage;
