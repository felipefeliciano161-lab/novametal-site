import Link from "next/link";
import {notFound} from "next/navigation";
import {ArrowLeft, MessageCircle, CheckCircle2} from "lucide-react";
import data from "../../../lib/products.json";

export function generateStaticParams(){return data.products.map(p=>({slug:p.slug}))}
export default async function Product({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params; const p=data.products.find(x=>x.slug===slug); if(!p) return notFound();
 return <main><section className="productDetail"><div className="container"><Link href="/produtos" className="back"><ArrowLeft size={17}/> Voltar ao catálogo</Link>
 <div className="detailGrid"><div className="detailImage">{p.image ? <img src={p.image} alt={p.name}/> : <><span>IMAGEM DO PRODUTO</span><b>{p.name}</b></>}</div><div><span className="kicker">{p.category}</span><h1>{p.name}</h1><p className="lead">{p.description}</p>
 <div className="specBox"><h3>Informações</h3><div><span>Categoria</span><b>{p.category}</b></div><div><span>Modelo / código</span><b>{p.name}</b></div><div><span>Atendimento</span><b>Consulte a equipe comercial</b></div></div>
 <div className="detailActions"><Link href={`/contato?produto=${encodeURIComponent(p.name)}`} className="primary">Solicitar orçamento</Link><a href="https://wa.me/?text=Olá!%20Gostaria%20de%20informações%20sobre%20o%20produto%20${encodeURIComponent(p.name)}" className="whats"><MessageCircle size={18}/> WhatsApp</a></div>
 </div></div>
 <div className="detailBottom"><h2>Aplicações e especificações</h2><p>Consulte a ficha técnica oficial para confirmar dimensões, roscas, materiais, potência e demais características da configuração desejada. Use o formulário de orçamento para informar medidas, quantidade e aplicação.</p><div className="checkList"><span><CheckCircle2/> Produto do catálogo Nova Metal</span><span><CheckCircle2/> Solicitação técnica sob consulta</span><span><CheckCircle2/> Atendimento para orçamento</span></div></div>
 </div></section></main>
}
