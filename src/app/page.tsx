'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import defaultImage from '../assets/img-default.png'
import map from '../assets/map.png'
import nubank from '../assets/nu.png'
import { Card } from './components/card'
import { Header } from './components/header'
import { LogoXL } from './components/logo-xl'
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
        <div className="container mx-auto -mt-4 px-8 pb-36 pt-28 text-center leading-normal md:px-20">
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
          <h2 className="pb-20 text-center font-sans text-lg font-medium uppercase">
            Empresas que inspiramos <br /> Com a nossa transformação
          </h2>

          <article>
            <aside className="z-60 relative -mb-64 grid grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-4">
              {Array.from({ length: 12 }).map((_, index) => (
                <Image
                  key={index}
                  src={nubank}
                  alt="Client"
                  width={150}
                  height={150}
                  className="block w-full rounded-full"
                />
              ))}
            </aside>
            <aside>
              <Image src={map} alt="mapa" className="w-full bg-cover" />
            </aside>
          </article>

          <div className="mt-28 space-y-8">
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

      <footer className="bg-[#212121] pb-6 pt-24 text-[#F7F6F4]">
        <div className="container mx-auto space-y-32 px-4 pt-20 font-sans">
          <LogoXL />

          <div className="w-auto text-center text-lg uppercase">
            <p>+4367718069246</p>
            <p>hi@thedesignersclub.at</p>
          </div>

          <div className="flex flex-col gap-6 text-lg uppercase md:flex-row md:items-center md:justify-between">
            <div>
              <p>
                The Designers Club <br /> STEINGASSE 10-14/21A <br /> 1030 WIEN
              </p>
            </div>
            <div className="flex flex-col gap-1 text-center md:pe-[90px]">
              <Link href="#" className="hover:underline">
                Instagram
              </Link>
              <Link href="#" className="hover:underline">
                Linkedin
              </Link>
            </div>
            <div className="text-end">
              <p>
                Impressum <br /> Datenschutz
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
