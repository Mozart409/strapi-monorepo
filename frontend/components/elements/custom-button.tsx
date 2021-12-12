import React, { ReactElement } from 'react'

interface Props {
  text: string
}

export default function CustomButton({ text }: Props): ReactElement {
  return (
    <div>
      <button className="inline-flex items-center py-2 px-4 mx-auto text-sm font-medium text-white rounded-md border border-transparent shadow-sm focus:ring-2 focus:ring-offset-2 focus:outline-none items.center bg-lava-orange-500 hover:bg-rubber-gray focus:ring-lava-orange-500">
        {text}
      </button>
    </div>
  )
}
