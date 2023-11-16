import Image from 'next/image'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="space-y-2 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          About
        </h1>
      </div>
      <div className="flex flex-row flex-wrap">
        <Image
          src="/static/images/logo.png"
          alt="avatar"
          width={300}
          height={300}
          className="dark:invert"
        />
        <div className="p-8">
          <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight text-[#27272a] dark:text-white">
            Zoey 🥷
          </h3>
          <div className="text-gray-500 dark:text-gray-400">全沾工程师</div>
          {/* <div className="flex space-x-3 pt-6">
            <SocialIcon kind="mail" href={`mailto:${email}`} />
            <SocialIcon kind="github" href={github} />
          </div> */}
        </div>
      </div>
    </div>
  )
}
