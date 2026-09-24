import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  FileText,
} from "lucide-react";
import productsData from "../../../lib/products.json";

type Spec = {
  codigo: string;
  A?: string;
  B?: string;
  C?: string;
  potencia?: string;
};

type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  specs?: Spec[];
};

const products = productsData.products as Product[];

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    return (
      <main>
        <section className="productDetail">
          <div className="container">
            <h1>Produto não encontrado</h1>

            <Link href="/produtos" className="back">
              <ArrowLeft size={17} />
              Voltar ao catálogo
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const whatsappNumber = "5511997524931";

  const whatsappMessage = encodeURIComponent(
    `Olá! Gostaria de solicitar um orçamento do produto ${product.name}.`
  );

  const whatsappUrl =
    `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const hasSpecs =
    Array.isArray(product.specs) &&
    product.specs.length > 0;

  const hasC =
    hasSpecs &&
    product.specs?.some((spec) => spec.C);

  return (
    <main>
      <section className="productDetail">
        <div className="container">

          {/* CAMINHO */}
          <div className="productBreadcrumb">
            <Link href="/">Início</Link>
            <span>/</span>
            <Link href="/produtos">Produtos</Link>
            <span>/</span>
            <strong>{product.name}</strong>
          </div>

          {/* VOLTAR */}
          <Link href="/produtos" className="back">
            <ArrowLeft size={17} />
            Voltar ao catálogo
          </Link>

          {/* PRODUTO */}
          <div className="detailGrid">

            {/* IMAGEM */}
            <div className="detailImage">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                />
              ) : (
                <>
                  <span>IMAGEM DO PRODUTO</span>
                  <b>{product.name}</b>
                </>
              )}
            </div>

            {/* INFORMAÇÕES */}
            <div className="detailContent">

              <span className="kicker">
                {product.category}
              </span>

              <h1>{product.name}</h1>

              <p className="lead">
                {product.description}
              </p>

              {/* INFORMAÇÕES DO PRODUTO */}
              <div className="specBox">

                <h3>Informações do produto</h3>

                <div>
                  <span>Categoria</span>
                  <b>{product.category}</b>
                </div>

                <div>
                  <span>Modelo / código</span>
                  <b>{product.name}</b>
                </div>

                <div>
                  <span>Ficha técnica</span>
                  <b>
                    {hasSpecs
                      ? "Disponível abaixo"
                      : "Sob consulta"}
                  </b>
                </div>

              </div>

              {/* BOTÕES */}
              <div className="detailActions">

                <Link
  href={`/contato?produto=${encodeURIComponent(product.name)}`}
  className="primary"
>
  <MessageCircle size={17} />
  Solicitar orçamento
</Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whats"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>

              </div>

            </div>
          </div>

          {/* FICHA TÉCNICA */}
          {hasSpecs && (
            <section className="technicalSection">

              <div className="technicalHeader">

                <div>
                  <span className="kicker">
                    FICHA TÉCNICA
                  </span>

                  <h2>
                    Dimensões e configurações
                  </h2>
                </div>

                <span className="technicalHint">
                  Medidas conforme configuração do produto.
                </span>

              </div>

              <div className="technicalTableWrap">

                <table className="technicalTable">

                  <thead>
                    <tr>
                      <th>Código</th>
                      <th>A (mm)</th>
                      <th>B (mm)</th>

                      {hasC && (
                        <th>C (mm)</th>
                      )}

                      <th>
                        Lâmpada / Potência
                      </th>
                    </tr>
                  </thead>

                  <tbody>

                    {product.specs?.map(
                      (spec, index) => (
                        <tr
                          key={`${spec.codigo}-${index}`}
                        >

                          <td>
                            <strong>
                              {spec.codigo}
                            </strong>
                          </td>

                          <td>
                            {spec.A || "—"}
                          </td>

                          <td>
                            {spec.B || "—"}
                          </td>

                          {hasC && (
                            <td>
                              {spec.C || "—"}
                            </td>
                          )}

                          <td>
                            {spec.potencia || "—"}
                          </td>

                        </tr>
                      )
                    )}

                  </tbody>

                </table>

              </div>

              <p className="technicalFoot">
                As dimensões e configurações devem ser
                conferidas de acordo com a versão solicitada.
              </p>

            </section>
          )}

          {/* SEM FICHA TÉCNICA */}
          {!hasSpecs && (
            <section className="technicalEmpty">

              <FileText size={25} />

              <div>

                <h2>
                  Informações técnicas
                </h2>

                <p>
                  Entre em contato com nossa equipe
                  comercial para confirmar medidas,
                  configurações e especificações
                  deste produto.
                </p>

              </div>

            </section>
          )}

          {/* PARTE INFERIOR */}
          <div className="detailBottom">

            <h2>
              Aplicações e especificações
            </h2>

            <p>
              Para solicitar um orçamento, informe o
              modelo, quantidade e aplicação. Nossa
              equipe comercial poderá confirmar a
              configuração adequada para sua necessidade.
            </p>

            <div className="checkList">

              <span>
                <CheckCircle2 />
                Produto do catálogo Nova Metal
              </span>

              <span>
                <CheckCircle2 />
                Informações técnicas disponíveis
              </span>

              <span>
                <CheckCircle2 />
                Atendimento para orçamento
              </span>

            </div>

          </div>

          {/* BOTÃO VOLTAR */}
          <div className="productBackBottom">

            <Link
              href="/produtos"
              className="back"
            >
              <ArrowLeft size={17} />
              Voltar ao catálogo
            </Link>

          </div>

        </div>
      </section>
    </main>
  );
}