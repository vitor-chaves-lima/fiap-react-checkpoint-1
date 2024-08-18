import "./styles.css";
import TwitterIcon from "../../assets/images/twitter_icon.png";
import InstagramIcon from "../../assets/images/instagram_icon.png";
import DiscordIcon from "../../assets/images/discord_icon.png";


function NetworkContact () {
    return (

        <div className="network">
            <h1>Dúvidas e suporte, entre em contato:</h1>

            <ul className="icones">
                <li>
                    <a href="https://x.com/" target="_blank">
                        <img src={TwitterIcon} alt="Ícone do Twitter" />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com/" target="_blank">
                    <img src={InstagramIcon} alt="Ícone do Instagram" />
                    </a>
                </li>
                <li>
                    <a href="https://discord.com/" target="_blank">
                    <img src={DiscordIcon} alt="Ícone do Discord" />
                    </a>
                </li>
            </ul>
        
        </div>

    )
}

export default NetworkContact