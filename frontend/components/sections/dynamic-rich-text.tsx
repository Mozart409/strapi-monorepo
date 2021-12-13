import React, { Fragment, ReactElement, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import cx from 'classnames'
import { useQuery } from 'react-query'
import MarkdownRender from 'utils/MarkdownRender'
import { getDynamicRT } from 'utils/api'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

type Props = {
  data: {
    __component: string
    id: number
    content: string
    RichTextSelektor: [
      {
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
      }
    ]
  }
}

function DynamicRichText({ data }: Props): ReactElement {
  //

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

  return (
    <div className="container">
      <button className="m-2 bg-primary-500 text-white" onClick={handleChange}>
        Test DataLayer
      </button>
      {dynamicData ? (
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
          {/*  <div className="relative lg:grid lg:grid-cols-10 lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:items-center lg:rounded-3xl">
            <div
              className="hidden overflow-hidden absolute inset-0 rounded-3xl lg:block"
              aria-hidden="true"
            >
              <svg
                className="absolute bottom-full left-full transform -translate-x-2/3 translate-y-1/3 xl:top-0 xl:bottom-auto xl:translate-y-0"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-primary-500"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                />
              </svg>
              <svg
                className="absolute top-full transform -translate-x-1/3 -translate-y-1/3 xl:-translate-y-1/2"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-primary-500"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                />
              </svg>
            </div>
          </div>
         */}

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="p-3 my-8 bg-gray-200 rounded">
                <MarkdownRender>{dynamicData.content}</MarkdownRender>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default DynamicRichText
