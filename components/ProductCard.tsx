import Link from "next/link";
import { ArrowUpRight, Box } from "lucide-react";
export function ProductCard({p}:{p:any}){
 return <Link href={`/produtos/${p.slug}`} className="productCard">
  <div className="productImage">{p.image?<img src={p.image} alt={p.name} loading="lazy"/>:<><Box size={42}/><span>IMAGEM DO PRODUTO</span></>}</div>
  <div className="productInfo"><small>{p.category}</small><h3>{p.name}</h3><p>{p.description}</p><span className="learn">Ver produto <ArrowUpRight size={16}/></span></div>
 </Link>
}