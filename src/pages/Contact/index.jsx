import FormComponent from "../../components/ContactForm";
import NetworkComponent from "../../components/Network"
import Container from "../../components/Container";



function ContactPage (){
    return (
        <Container>
        <div className="contact" style={{ display: "flex", justifyContent: "center", marginTop:'75px' }}> 
            <NetworkComponent/>
            <FormComponent/>
            </div>
        </Container>
       
    )
}

export default ContactPage
