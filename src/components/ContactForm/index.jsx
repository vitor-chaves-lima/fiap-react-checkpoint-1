import "./styles.css";

function ContactForm () {
    return (
        <form>
            <div className="input-wrapper">
                <label for='text-name' >Nome:</label>
                <input type="text" id="text-name"/>
            </div>

            <div className="input-wrapper">
                <label for='text-email'>E-mail:</label>
                <input type="email" id="text-email"/>
            </div>

            <div className="textarea-wrapper">
                <label>Mensagem:</label>
                <textarea></textarea>
            </div>

            <div class="button-wrapper">
                <button type="submit">Enviar</button>
            </div>
        </form>
    )
}

export default ContactForm
