import "./styles.css";

function ContactForm () {
    return (
        <form>
            <div className="input-wrapper">
                <label>Nome:</label>
                <input type="text"/>
            </div>

            <div className="input-wrapper">
                <label>E-mail:</label>
                <input type="email"/>
            </div>

            <div className="area">
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
