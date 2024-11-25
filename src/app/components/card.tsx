import Image from 'next/image'

import imgDefault from '../../assets/img-default.png'

interface CardProps {
  src: string
  title: string
  description: string
}

export function Card({ description, title }: CardProps) {
  return (
    <div className="space-y-4">
      <Image
        src={imgDefault}
        alt="Projetos"
        height={597}
        width={758}
        className="w-full rounded-md bg-cover"
      />

      <div className="space-y-1">
        <h2 className="text-[2.625rem] font-medium">{title}</h2>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  )
}
