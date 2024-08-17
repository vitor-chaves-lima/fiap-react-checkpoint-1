import "./style.css";

function Form () {
    return (
        <section id="contact">
        <form>
            <div className="input">
                <p>Nome:</p>
                <input type="text"/>
            </div>

            <div className="input">
                <p>E-mail:</p>
                <input type="email"/>
            </div>

            <div className="area">
                <p>Mensagem</p>
                <textarea></textarea>
            </div>

            <button type="submit">Enviar</button>
        </form>
        </section>
    )
}

export default Form