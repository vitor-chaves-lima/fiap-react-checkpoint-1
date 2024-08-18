import "./style.css";
import FormComponent from "../../components/Form";
import NetworkComponent from "../../components/Network"
import Container from "../../components/Container";



function ContactPage (){
    return (
        <Container>
            <div className="contact">
            <NetworkComponent/>
            <FormComponent/>
            </div>
        </Container>
       
    )
}

export default ContactPage
