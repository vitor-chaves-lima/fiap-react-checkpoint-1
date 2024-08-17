import HeroImage from "../../assets/images/hero_image.png";
import YoutubeIcon from "../../assets/images/youtube_icon.jpg";
import TikTokIcon from "../../assets/images/tiktok_icon.jpg";
import FacebookIcon from "../../assets/images/facebook_icon.jpg";
import InstagramIcon from "../../assets/images/instagram_icon.jpg";
import Card from "../../components/Card";
import Hero from "../../components/Hero";
import "./styles.css";

/* =================== SubComponents =================== */

function CardSection() {
	const cardsContent = [
		{
			backgroundColor: "#F1C2B0",
			title: "Youtube",
			description:
				"Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.",
			iconSource: YoutubeIcon,
		},
		{
			backgroundColor: "#F9EB98",
			title: "Tiktok",
			description:
				"Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.",
			iconSource: TikTokIcon,
		},
		{
			backgroundColor: "#C0D9DD",
			title: "Facebook",
			description:
				"Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.",
			iconSource: FacebookIcon,
		},
		{
			backgroundColor: "#6975E8",
			title: "Instagram",
			description:
				"Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.",
			iconSource: InstagramIcon,
		},
	];

	return (
		<section className="card-section">
			{cardsContent.map((card, index) => (
				<Card
					key={index}
					backgroundColor={card.backgroundColor}
					title={card.title}
					description={card.description}
					iconSource={card.iconSource}
				/>
			))}
		</section>
	);
}

/* =================== Main Component ================== */

function HomePage() {
	const heroContent = {
		headline: "Crie conteúdo incrível e faça sucesso nas redes sociais",
		description:
			"Descubra como produzir vídeos incríveis e cativantes para engajar sua audiência nas principais redes sociais do mundo.",
		callToAction: "Comece Agora !",
		heroImageSource: HeroImage,
	};

	return (
		<>
			<Hero {...heroContent} />
			<CardSection />
		</>
	);
}

/* ====================== Exports ====================== */

export default HomePage;
