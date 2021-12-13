import Markdown from 'react-markdown'
import { getButtonAppearance } from 'utils/button'
import ButtonLink from '../elements/button-link'
import NextImage from '../elements/image'
const Hero = ({ data }) => {
  return (
    <main className="container flex flex-col justify-between items-center py-12 md:flex-row">
      <div className="flex-1 sm:pr-8">
        <p className="font-semibold tracking-wide uppercase">{data.label}</p>

        <h1 className="mt-2 mb-4 sm:mt-0 sm:mb-2 title">{data.title}</h1>

        <p className="mb-6 text-xl">{data.description}</p>

        <div className="flex flex-row flex-wrap gap-4">
          {data.buttons.map((button) => (
            <ButtonLink
              button={button}
              appearance={getButtonAppearance(button.type, 'light')}
              key={button.id}
            />
          ))}
        </div>

        <div className="mt-4 text-base sm:mt-3 md:text-sm rich-text-hero">
          <Markdown>{data.smallTextWithLink}</Markdown>
        </div>
      </div>

      <div className="flex-shrink-0 mt-6 w-full md:mt-0 md:w-6/12">
        <NextImage media={data.picture} className="" />
      </div>
    </main>
  )
}
export default Hero
