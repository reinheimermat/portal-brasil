import Image, { StaticImageData } from 'next/image'

// import image from '../../assets/img-default.png'

interface PostCardProps {
  image: StaticImageData
  title: string
  date: string
  tags: string[]
}

export function PostCard({ image, title, date, tags }: PostCardProps) {
  return (
    <div>
      <div className="relative">
        <Image
          src={image}
          alt="alt"
          className="h-[32.625rem] w-full rounded-md object-cover"
          width={417}
          height={522}
        />
        <div className="absolute bottom-0 left-0 transform space-y-2 px-7 py-5 font-sans text-[#212121]">
          <div className="flex items-center gap-2 text-[0.68rem] text-[#F7F6F4]">
            <p className="rounded-md bg-[#212121] px-2.5 py-1.5">{date}</p>

            {tags.map((tag, index) => (
              <p key={index} className="rounded-md bg-[#212121] px-2.5 py-1.5">
                {tag}
              </p>
            ))}
          </div>
          <p className="text-xl">{title}</p>
        </div>
      </div>
    </div>
  )
}
