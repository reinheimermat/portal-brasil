import { Card } from './components/card'
import { Header } from './components/header'

export default function Home() {
  return (
    <div>
      <Header />

      <main className="cover flex h-screen flex-col justify-between text-white">
        <section className="my-auto">
          <p className="lg:6xl text-center text-4xl italic md:text-5xl xl:text-7xl 2xl:text-8xl">
            <span className="font-sans not-italic 2xl:text-[5.2rem]">
              CRIAMOS
            </span>{' '}
            PRODUTOS <br /> DE SUCESSO{' '}
            <span className="font-sans not-italic 2xl:text-[5.2rem]">
              E TORNAMOS <br /> A{' '}
            </span>
            BELEZA ACESSÍVEL
          </p>
        </section>

        <section className="container mx-auto mb-20 flex flex-col items-center justify-between gap-6 px-4 text-center font-sans text-lg tracking-wider md:flex-row md:text-start">
          <p>
            Somos líderes no mercado brasileiro no segmento de fast fashion
            desde 2007
          </p>
          <p>Levamos o Brasil para o mundo e trazemos o mundo para o Brasil</p>
        </section>
      </main>

      <section className="-mt-3 bg-[#212121] pb-28 pt-11 text-white">
        <p className="container mx-auto px-4 text-center text-2xl italic leading-normal md:text-4xl 2xl:text-5xl">
          Temos a inovação como base do nosso negócio. Não basta apenas conhecer
          as tendências, é necessário interpretá-las corretamente. Aplicamos
          isso na construção de produtos que valorizam a beleza, combinando
          design e estratégia para fortalecer sua marca.
        </p>
      </section>

      <section className="container mx-auto space-y-5 px-4 pt-14">
        <h1 className="text-3xl">Cases de sucesso</h1>

        <div className="grid grid-cols-1 gap-x-5 gap-y-[3.75rem] lg:grid-cols-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <Card
              key={index}
              src="/images/card-1.jpg"
              title={`Título ${index + 1}`}
              description={`Descrição ${index + 1}`}
            />
          ))}

          <div className="rounded-md bg-zinc-100 py-10 text-center text-xl text-zinc-500 lg:col-span-2">
            <p>Ver Ver todos os cases</p>
          </div>
        </div>
      </section>
    </div>
  )
}
