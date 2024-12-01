'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

import defaultImage from '../assets/img-default.png'
import { Card } from './components/card'
import { Header } from './components/header'
import { PostCard } from './components/post-card'

const cases = [
  {
    title: 'Título do post com breve descrição do conteúdo ou chamada atrativa',
    tags: ['tag 1', 'tag 2'],
  },
  {
    title: 'Título do post com breve descrição do conteúdo ou chamada atrativa',
    tags: ['tag 1', 'tag 2'],
  },
  {
    title: 'Título do post com breve descrição do conteúdo ou chamada atrativa',
    tags: ['tag 1', 'tag 2'],
  },
  {
    title: 'Título do post com breve descrição do conteúdo ou chamada atrativa',
    tags: ['tag 1', 'tag 2'],
  },
  {
    title: 'Título do post com breve descrição do conteúdo ou chamada atrativa',
    tags: ['tag 1', 'tag 2'],
  },
  {
    title: 'Título do post com breve descrição do conteúdo ou chamada atrativa',
    tags: ['tag 1', 'tag 2'],
  },
]

export default function Home() {
  const { scrollYProgress } = useScroll()
  const text =
    'Temos a inovação como base do nosso negócio. Não basta apenas conhecer as tendências, é necessário interpretá-las corretamente. Aplicamos isso na construção de produtos que valorizam a beleza, combinando design e estratégia para fortalecer sua marca.'
  const words = text.split('  ')

  return (
    <div>
      <Header />

      <main className="cover flex h-screen flex-col justify-between text-white">
        <section className="my-auto">
          <p className="text-center text-4xl italic md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            <span className="font-sans text-3xl not-italic md:text-[2.75rem] lg:text-[4rem] 2xl:text-[5.2rem]">
              CRIAMOS
            </span>{' '}
            PRODUTOS <br /> DE SUCESSO{' '}
            <span className="font-sans text-3xl not-italic md:text-[2.75rem] lg:text-[4rem] 2xl:text-[5.2rem]">
              E TORNAMOS <br /> A{' '}
            </span>
            BELEZA ACESSÍVEL
          </p>
        </section>

        <section className="container mx-auto mb-8 flex flex-col items-center justify-between gap-6 px-4 text-center font-sans text-sm tracking-wider md:flex-row md:text-start">
          <p>
            Somos líderes no mercado brasileiro no segmento de fast fashion
            desde 2007
          </p>
          <p>Levamos o Brasil para o mundo e trazemos o mundo para o Brasil</p>
        </section>
      </main>

      <section className="bg-[#212121]">
        <div className="container mx-auto px-8 pb-36 pt-28 text-center leading-normal md:px-20">
          {words.map((word, index) => {
            const color = useTransform(
              scrollYProgress,
              [0 + index * 0.004, 0.2 + index * 0.004],
              ['#454545', '#fff'],
            )

            return (
              <motion.span
                key={index}
                style={{ color }}
                className="inline-block text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
              >
                <span className="italic">
                  Temos a inovação como base do nosso negócio. <br />
                </span>
                Não basta apenas conhecer as tendências, é necessário
                interpretá-las corretamente. Aplicamos isso na construção de
                produtos que valorizam a beleza, combinando design e estratégia
                para fortalecer sua marca
              </motion.span>
            )
          })}
        </div>
      </section>

      <section className="container mx-auto space-y-5 px-4 pb-16 pt-20">
        <div className="space-y-6 pb-9 text-center">
          <h2 className="font-sans text-lg">
            AQUI VOCÊ ENCONTRARÁ UM POUCO DE TUDO <br /> DO QUE NOS ORGULHAMOS
          </h2>
          <h1 className="text-7xl">Cases que amamos</h1>
        </div>

        <div className="grid grid-cols-1 gap-x-5 gap-y-[3.75rem] lg:grid-cols-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <Card
              key={index}
              src="/images/card-1.jpg"
              title={`Título ${index + 1}`}
              description={`Descrição ${index + 1}`}
            />
          ))}

          <button className="mx-auto w-full max-w-[26rem] rounded-md bg-zinc-100 px-16 py-8 text-center font-sans text-xl text-zinc-400 lg:col-span-2">
            Ver todos os cases
          </button>
        </div>
      </section>

      <section className="bg-[#212121] pt-24 text-[#F7F6F4]">
        <div className="container mx-auto px-4">
          <h2 className="pb-20 text-center font-sans text-lg font-medium">
            Empresas que inspiramos <br /> Com a nossa transformação
          </h2>

          <div className="space-y-8">
            <h2 className="text-center font-sans text-lg">
              AQUI VOCÊ ENCONTRARÁ UM POUCO DE <br /> TUDO DO QUE NOS{' '}
              <span className="font-serif italic">ORGULHAMOS</span>
            </h2>

            <div className="grid grid-cols-2 gap-5 lg:grid-cols-3">
              {cases.map((item, index) => (
                <PostCard
                  key={index}
                  image={defaultImage}
                  title={item.title}
                  tags={item.tags}
                  date="10/10/2021"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
