import Link from "next/link";
import { Mail, MapPin, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { company } from "../../lib/company";

export default function Contato(){
 const wa = "https://wa.me/5511974311272";
 return <main>
  <section className="pageHero">
   <div className="container">
    <span className="kicker">FALE COM A ENM</span>
    <h1>{company.slogan}</h1>
    <p>Entre em contato com nossa equipe comercial para solicitar informações, especificações ou orçamento de produtos.</p>
   </div>
  </section>

  <section className="section">
   <div className="container contactGrid">
    <div>
      <span className="kicker">CONTATO COMERCIAL</span>
      <h2>Estamos prontos para atender você.</h2>
      <p>Use nossos canais oficiais para falar com a Nova Metal. Para orçamento, informe o modelo do produto, quantidade e aplicação sempre que possível.</p>

      <div className="contactCard"><Mail/><div><b>E-mail</b><span><a href={`mailto:${company.email}`}>{company.email}</a></span></div></div>
      <div className="contactCard"><Phone/><div><b>Telefones</b><span>{company.phone}<br/>{company.phone2}</span></div></div>
      <div className="contactCard"><MessageCircle/><div><b>WhatsApp</b><span>{company.whatsapp1}<br/>{company.whatsapp2}</span></div></div>
      <div className="contactCard"><MapPin/><div><b>Endereço</b><span>{company.address}<br/>{company.neighborhood} - {company.city}<br/>CEP: {company.cep}</span></div></div>
    </div>

    <div className="contactRight">
      <div className="contactBrand">
        <img src="/logo-enm.png" alt="ENM Elétrica Nova Metal"/>
        <span>{company.slogan}</span>
      </div>
      <div className="quoteForm">
       <div className="formIntro"><span className="kicker">SOLICITE UM ORÇAMENTO</span><h3>Fale com nossa equipe</h3><p>Preencha os dados e envie sua solicitação pelo WhatsApp.</p></div>
       <form action={wa} method="get" target="_blank">
        <div className="formRow"><label>Nome<input name="nome" required placeholder="Seu nome"/></label><label>Empresa<input name="empresa" placeholder="Sua empresa"/></label></div>
        <div className="formRow"><label>E-mail<input type="email" name="email" placeholder="seu@email.com"/></label><label>Produto<input name="produto" placeholder="Código ou modelo"/></label></div>
        <label>Mensagem<textarea name="mensagem" rows={6} required placeholder="Conte o que você precisa..."/></label>
        <button className="primary" type="submit">Enviar solicitação <ArrowRight size={17}/></button>
       </form>
      </div>
      <div className="addressBox">
        <b>Localização</b>
        <p>{company.address}<br/>{company.neighborhood} - {company.city}<br/>CEP: {company.cep}</p>
        <a className="textLink" href="https://www.google.com/maps/search/?api=1&query=Rua+João+Francisco+Lisboa+365+Parque+Piratininga+Itaquaquecetuba+SP" target="_blank">Abrir no mapa <ArrowRight size={16}/></a>
      </div>
    </div>
   </div>
  </section>
 </main>
}
