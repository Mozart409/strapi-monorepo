import React, { Fragment, ReactElement, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import { useQuery } from 'react-query'
import MarkdownRender from 'utils/MarkdownRender'
import { getDynamicRT } from 'utils/api'
import { useRouter } from 'next/router'
import slugify from 'slugify'

type Props = {
  data: {
    __component: string
    id: number
    content: string
    RichTextSelektor: {
      id: number
      label: string
      dynamic_rich_text: {
        id: number
        shortName: string
        content: string
        slug: string
        published_at: string
        created_at: string
        updated_at: string
      }
    }[]
  }
}

function DynamicRichText({ data }: Props): ReactElement {
  //

  const router = useRouter()
  const [selected, setSelected] = useState({
    slug: data?.RichTextSelektor[0].dynamic_rich_text?.slug,
    shortName: data?.RichTextSelektor[0].dynamic_rich_text?.shortName,
  })

  /* useEffect(() => {
    window.dataLayer.push({
      event: 'dynamic-content',
      selected: selected.name,
    })
    return () => {
      // window.dataLayer.push({
      //  event: 'dynamic-content',
      //  selected: selected.name,
      //}) 
    }
  }, [selected]) */

  const [dyHide, setDyHide] = useState(true)

  const {
    status,
    data: dynamicData,
    error,
  } = useQuery(['pageData', selected.slug], async () =>
    getDynamicRT(selected.slug)
  )

  const handleChange = () => {
    console.log('Start handleChange')
    window.dataLayer.push({
      event: 'test',
    })
    console.log('END handleChange')
  }

  useEffect(() => {
    if (router.query.dyn) {
      const shortName = router.query.dyn
      const slug: string = slugify(router.query.dyn as string, {
        locale: 'de',
        lower: true,
      })
      //@ts-ignore
      setSelected({ slug, shortName })
    }
  }, [router.query.dyn])

  if (dynamicData)
    return (
      <div className="container py-16 px-4 lg:px-8 lg:py-24">
        {/* <button className="m-2 bg-primary-500 text-white" onClick={handleChange}>
        Test DataLayer
      </button> */}

        {console.log(router)}
        <div className="">
          <MarkdownRender>{data.content}</MarkdownRender>
          <br />
          <div
            className="mx-auto w-full max-w-xs"
            onClick={() => setDyHide(false)}
          >
            <Listbox value={selected} onChange={setSelected}>
              {({ open }) => (
                <>
                  <Listbox.Label className="block text-sm font-medium text-gray-700">
                    {' '}
                  </Listbox.Label>
                  <div className="relative mt-1">
                    <Listbox.Button className="relative py-2 pr-10 pl-3 w-full text-left bg-white rounded-md border border-gray-300 shadow-sm cursor-default sm:text-sm focus:ring-1 focus:outline-none focus:border-primary-500 focus:ring-primary-500">
                      <span className="block truncate">
                        {selected.shortName}
                      </span>
                      <span className="flex absolute inset-y-0 right-0 items-center pr-2 pointer-events-none">
                        <SelectorIcon
                          className="w-5 h-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="overflow-auto absolute z-10 py-1 mt-1 w-full max-h-60 text-base bg-white rounded-md ring-1 ring-black ring-opacity-5 shadow-lg sm:text-sm focus:outline-none">
                        {data.RichTextSelektor.map((item) => (
                          <div key={item.id}>
                            <Listbox.Option
                              className={({ active }) =>
                                classNames(
                                  active
                                    ? 'text-white bg-primary-600'
                                    : 'text-gray-900',
                                  'cursor-default select-none relative py-2 pl-3 pr-9'
                                )
                              }
                              value={item.dynamic_rich_text}
                            >
                              {({ selected, active }) => (
                                <>
                                  <span
                                    className={classNames(
                                      selected
                                        ? 'font-semibold'
                                        : 'font-normal',
                                      'block truncate'
                                    )}
                                  >
                                    {item.dynamic_rich_text.shortName}
                                  </span>

                                  {selected ? (
                                    <span
                                      className={classNames(
                                        active
                                          ? 'text-white'
                                          : 'text-primary-600',
                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                      )}
                                    >
                                      <CheckIcon
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          </div>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="p-3 my-8 bg-gray-200 rounded">
                <MarkdownRender>{dynamicData.content}</MarkdownRender>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

  return null
}

export default DynamicRichText
