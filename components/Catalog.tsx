"use client";
import {useMemo,useState} from "react";
import {Search, SlidersHorizontal, X} from "lucide-react";
import {ProductCard} from "./ProductCard";
import data from "../lib/products.json";

export function Catalog(){
 const [q,setQ]=useState(""); const [cat,setCat]=useState("Todos"); const [filter,setFilter]=useState(false);
 const list=useMemo(()=>data.products.filter(p=>(cat==="Todos"||p.category===cat)&&(`${p.name} ${p.category} ${p.description}`).toLowerCase().includes(q.toLowerCase())),[q,cat]);
 return <section className="catalogSection">
  <div className="catalogToolbar">
   <div className="search"><Search size={19}/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Buscar produto, código ou categoria..."/>{q&&<button onClick={()=>setQ("")}><X size={17}/></button>}</div>
   <button className="filterBtn" onClick={()=>setFilter(!filter)}><SlidersHorizontal size={18}/> Filtros</button>
  </div>
  <div className={filter?"catalogGrid filterOpen":"catalogGrid"}>
   <aside className="filters"><div className="filterTitle">Categorias</div><button className={cat==="Todos"?"active":""} onClick={()=>setCat("Todos")}>Todos os produtos</button>
   {data.categories.map(c=><button key={c} className={cat===c?"active":""} onClick={()=>setCat(c)}>{c}</button>)}</aside>
   <div className="productsArea"><div className="resultLine"><b>{list.length}</b> produtos encontrados</div><div className="productsGrid">{list.map(p=><ProductCard key={p.slug} p={p}/>)}</div></div>
  </div>
 </section>
}
