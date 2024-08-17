import HeroImage from "../../assets/images/hero_image.png";
import YoutubeIcon from "../../assets/images/youtube_icon.jpg";
import TikTokIcon from "../../assets/images/tiktok_icon.jpg";
import FacebookIcon from "../../assets/images/facebook_icon.jpg";
import InstagramIcon from "../../assets/images/instagram_icon.jpg";
import Card from "../../components/Card";
import "./styles.css";

/* =================== SubComponents =================== */

function HeroSection() {
	return (
		<section className="hero-section">
			<div className="headline">
				<h1>Crie seus vídeos online</h1>
				<p>
					Transforme suas ideias em filmes memoráveis: onde a
					criatividade encontra a simplicidade.
				</p>
				<button className="call-to-action">Comecar Agora!</button>
			</div>

			<div>
				<img className="hero" src={HeroImage} />
			</div>
		</section>
	);
}

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
	return (
		<>
			<HeroSection />
			<CardSection />
		</>
	);
}

export default HomePage;
