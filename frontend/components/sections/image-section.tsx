import * as React from 'react'
import CustomLink from '../elements/custom-link'
import CustomImage from '../elements/image'

interface IImageSectionProps {
  data: any
}

const ImageSection: React.FunctionComponent<IImageSectionProps> = ({
  data,
}) => {
  if (data.link)
    return (
      <div className="container grid grid-cols-1 mx-auto max-w-prose md:max-w-screen-md lg:max-w-screen-lg">
        <CustomLink link={data?.link}>
          <CustomImage
            media={data?.picture}
            width={1024}
            height={768}
            className="object-contain mx-auto w-full"
          />
        </CustomLink>
      </div>
    )
  return (
    <div className="container grid grid-cols-1 mx-auto max-w-prose md:max-w-screen-md lg:max-w-screen-lg">
      <CustomImage
        media={data?.picture}
        width={1024}
        height={768}
        className="object-contain mx-auto w-full"
      />
    </div>
  )
}

export default ImageSection
