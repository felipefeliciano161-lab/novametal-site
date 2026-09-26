import Link from "next/link";
import { ArrowRight, ShieldCheck, Factory, Lightbulb, Wrench, Search } from "lucide-react";
import data from "../lib/products.json";

export default function Home() {
  const categories = [...new Set(data.products.map((p) => p.category))];

  return (
    <main>
      <section className="hero">
        <div className="heroPattern"></div>

        <div className="container heroContent">
          <div className="eyebrow">ENM ELÉTRICA NOVA METAL</div>

          <h1>
            Qualidade, garantia e satisfação em{" "}
            <em>soluções elétricas industriais.</em>
          </h1>

          <p>
            Equipamentos, iluminação, conexões e acessórios para aplicações
            que exigem robustez, proteção e desempenho.
          </p>

          <div className="heroBtns">
            <Link href="/produtos" className="primary">
              Ver catálogo <ArrowRight />
            </Link>

            <Link href="/contato" className="heroSecondary">
              Solicitar orçamento
            </Link>
          </div>

          <div className="heroStats">
            <div>
              <b>{data.products.length}+</b>
              <span>itens no catálogo</span>
            </div>

            <div>
              <b>7</b>
              <span>linhas de produtos</span>
            </div>

            <div>
              <b>ENM</b>
              <span>Elétrica Nova Metal</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <div>
              <span className="kicker">NOSSAS SOLUÇÕES</span>
              <h2>Produtos para ambientes exigentes.</h2>
            </div>

            <p>
              Encontre rapidamente equipamentos, iluminação e conexões
              organizados por aplicação e família de produto.
            </p>
          </div>

          <div className="featureGrid">
            <Feature
              icon={<ShieldCheck />}
              t="Segurança"
              d="Soluções para aplicações que exigem proteção e confiabilidade."
            />

            <Feature
              icon={<Factory />}
              t="Aplicação industrial"
              d="Catálogo organizado para facilitar a especificação técnica."
            />

            <Feature
              icon={<Lightbulb />}
              t="Iluminação"
              d="Linhas blindadas, reforçadas, industriais e específicas."
            />

            <Feature
              icon={<Wrench />}
              t="Conexões"
              d="Acessórios e conexões para diferentes sistemas elétricos."
            />
          </div>
        </div>
      </section>

      <section className="catalogHighlight">
        <div className="container highlightInner">
          <div>
            <span className="kicker">CATÁLOGO ENM</span>
            <h2>Encontre o produto pelo código.</h2>
            <p>
              Pesquise por modelo, família ou categoria e consulte as
              informações disponíveis.
            </p>
          </div>

          <Link href="/produtos" className="catalogButton">
            <Search size={18} /> Pesquisar catálogo
          </Link>
        </div>
      </section>

      <section className="section categoriesSection">
        <div className="container">
          <div className="sectionHead">
            <div>
              <span className="kicker">LINHAS DE PRODUTOS</span>
              <h2>Conheça nosso catálogo.</h2>
            </div>

            <Link href="/produtos" className="textLink">
              Ver tudo <ArrowRight />
            </Link>
          </div>

          <div className="categoryGrid">
            {categories.slice(0, 8).map((c, i) => (
              <Link
                href={`/produtos?categoria=${encodeURIComponent(c)}`}
                key={c}
                className="categoryCard"
              >
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{c}</h3>
                <ArrowRight />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container ctaInner">
          <div>
            <span className="kicker">FALE CONOSCO</span>
            <h2>Precisa de uma solução?</h2>
            <p>
              Envie o produto de interesse e sua necessidade para nossa equipe
              comercial.
            </p>
          </div>

          <Link href="/contato" className="primary">
            Solicitar orçamento <ArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}

function Feature({
  icon,
  t,
  d,
}: {
  icon: any;
  t: string;
  d: string;
}) {
  return (
    <div className="feature">
      <div className="icon">{icon}</div>
      <h3>{t}</h3>
      <p>{d}</p>
    </div>
  );
}