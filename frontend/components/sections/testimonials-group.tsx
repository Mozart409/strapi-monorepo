import classNames from "classnames"
import { useState } from "react"
import NextImage from "../elements/image"
import CustomLink from "../elements/custom-link"
import CustomImage from "../elements/custom-image"
const TestimonialsGroup = ({ data }) => {
  // Only show one testimonial at a time
  const [selectedTestimonialIndex, setSelectedTestimonialIndex] = useState(0)
  const selectedTestimonial = data.testimonials[selectedTestimonialIndex]
  return (
    <section className="mx-auto w-full max-w-prose rounded bg-slate-200 p-4 pt-12 pb-16 text-center text-lg md:max-w-3xl">
      <h2 className="title mb-4">{data.title}</h2>
      <p className="mx-auto mb-4 max-w-prose text-gray-700">
        {data.description}
      </p>
      <CustomLink link={data.link}>
        <span className="with-arrow text-primary-700 hover:underline">
          {data.link.text}
        </span>
      </CustomLink>

      <div className="mx-auto mt-10 flex w-8/12 max-w-5xl flex-col bg-white text-left shadow-md sm:w-8/12 sm:flex-row sm:shadow-xl">
        <div className="m-2 my-auto block flex-shrink-0 md:w-4/12">
          <CustomImage
            className="rounded"
            media={selectedTestimonial.picture}
            layout="responsive"
          />
        </div>
        <div className="flex flex-col justify-between py-4 px-4 sm:px-12 sm:pt-12 sm:pb-4">
          <div className="">
            <div className="h-16 w-16 rounded">
              <CustomImage media={selectedTestimonial.logo} />
            </div>
            <p className="mb-6 italic">
              &quot;{selectedTestimonial.text}&quot;
            </p>
            <p className="text-base font-bold sm:text-sm">
              {selectedTestimonial.authorName}
            </p>
            <p className="text-base sm:text-sm">
              {selectedTestimonial.authorTitle}
            </p>
          </div>
          {/* {selectedTestimonial.link && (
            <CustomLink
              link={{
                url: selectedTestimonial.link.url,
                text: '',
                newTab: false,
                title: selectedTestimonial.text,
                id: 0,
              }}
            >
              <span className="with-arrow mt-6 uppercase tracking-wide text-primary-700 hover:underline sm:mt-0 sm:self-end">
                Read story
              </span>
            </CustomLink>
          )} */}
        </div>
      </div>

      {data.testimonials.length > 1 && (
        <div className="mt-10 flex flex-row justify-center gap-4">
          {data.testimonials.map((testimonial, index) => (
            <button
              onClick={() => setSelectedTestimonialIndex(index)}
              className={classNames(
                // Common classes
                "h-3 w-3 rounded-full",
                {
                  "bg-gray-500": index !== selectedTestimonialIndex,
                  "bg-primary-600": index === selectedTestimonialIndex,
                }
              )}
              key={testimonial.id}
            />
          ))}
        </div>
      )}

      <div className="mt-10 flex flex-row flex-wrap items-center justify-center gap-6 px-6 sm:gap-20 sm:px-0">
        {data.logos.map((logo) => (
          <NextImage key={logo.id} width="120" height="33" media={logo.logo} />
        ))}
      </div>
    </section>
  )
}
export default TestimonialsGroup
