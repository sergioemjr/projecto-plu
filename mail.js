function sendEmail(){
//constante para 'pegar' o que estiver dentro da caixa de texto nome
const message = document.querySelector("#txtMail").value

//inicializar o componente EmailJS
emailjs.init("user_Y5OTIW0SqFxmQ76304UfO")

const template_params = {
    "message_html": message
 }

 const service_id = "default_service"
 const template_id = "template_qJKWX96f"
 emailjs.send(service_id,template_id,template_params)

//mensagem é apresentada em um popup
alert("Pronto! Agora é só aproveitar")


}
