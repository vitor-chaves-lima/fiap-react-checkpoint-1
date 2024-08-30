import Hero from "../../components/Hero";
import AboutHeroImage1 from "../../assets/images/about_hero_image_1.png";
import AboutHeroImage2 from "../../assets/images/about_hero_image_2.png";
import Container from "../../components/Container";
import PlanCard from "../../components/PlanCard";
import ImageCorporation from "../../assets/images/corporativo.png"
import "./styles.css";

/* =================== SubComponents =================== */

function PlansSection() {



	return (
		<section className="plans-section">
			<h3>Planos</h3>
			<div className="plans">
				<PlanCard title="Individual" buttonText="Cadastrar">
					<div className="users">
						<p>1 Usuário</p>
						<select>
						<option Value="Video-Limited-15">10 Vídeos <span style={{fontSize:'16px'}}>R$15</span></option>
						</select>
					</div>
				</PlanCard>

				<PlanCard title="Profissional - Times" buttonText="Cadastrar">
					<div className="users">
						<p>1 - 10 Usuários</p>
						<select>
						<option Value="Video-Ilimited-40">Vídeos Ilimitados <span>R$40</span></option>
						</select>
					</div>
				
					<div className="users">
						<p>+10 Usuários</p>
						<select>
						<option Value="Video-Ilimited-20">Vídeos Ilimitados <span style={{fontWeight: 100}}>R$20</span></option>
						</select>
					</div>
				</PlanCard>

				<PlanCard title="Corporativo" buttonText="Entrar Em Contato">
					<img src={ImageCorporation} alt="Corporativo"/>
				</PlanCard>
			</div>
		</section>
	);
}

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
		<>
			<Container>
				<Hero {...heroContent} />
			</Container>

			<div className="plans-wrapper">
				<Container>
					<PlansSection />
				</Container>
			</div>
		</>
	);
}

/* ====================== Exports ====================== */

export default AboutPage;
