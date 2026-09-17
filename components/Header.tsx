"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header(){
  const [open,setOpen]=useState(false);
  return <header className="header">
    <div className="contactTop"><div className="container contactTopInner"><span>Qualidade - Garantia - Satisfação</span><span>vendas@novametal.ind.br</span><span>+55 11 99752-4931</span></div></div><div className="container nav">
      <Link href="/" className="logo" onClick={()=>setOpen(false)}>
        <img src="/logo-enm.png" alt="ENM Elétrica Nova Metal" />
      </Link>
      <nav className={open?"navlinks open":"navlinks"}>
        <Link href="/" onClick={()=>setOpen(false)}>Início</Link>
        <Link href="/empresa" onClick={()=>setOpen(false)}>Empresa</Link>
        <Link href="/produtos" onClick={()=>setOpen(false)}>Produtos</Link>
        <Link href="/solucoes" onClick={()=>setOpen(false)}>Soluções</Link>
        <Link href="/contato" onClick={()=>setOpen(false)}>Contato</Link>
        <Link href="/contato" className="quote mobileQuote" onClick={()=>setOpen(false)}>Solicitar orçamento</Link>
      </nav>
      <div className="navActions">
        <Link href="/contato" className="quote">Solicitar orçamento</Link>
        <button className="menuBtn" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button>
      </div>
    </div>
  </header>
}
