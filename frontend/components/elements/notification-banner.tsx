import Markdown from 'react-markdown'
import classNames from 'classnames'
import { MouseEventHandler } from 'react'

interface IProps {
  data: { text: string; type: 'info' | 'warning' | 'alert' }
  closeSelf: MouseEventHandler<HTMLButtonElement>
}

const NotificationBanner = ({ data: { text, type }, closeSelf }: IProps) => {
  return (
    <div
      className={classNames(
        // Common classes
        'text-white px-2 py-2',
        {
          // Apply theme based on notification type
          'bg-blue-600': type === 'info',
          'bg-orange-600': type === 'warning',
          'bg-red-600': type === 'alert',
        }
      )}
    >
      <div className="container flex flex-row justify-between items-center ">
        <div className="rich-text-banner flex-1">
          <Markdown>{text}</Markdown>
        </div>
        <button onClick={closeSelf} className="px-1 py-1 flex-shrink-0">
          <div className="h-6 w-auto text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  )
}

export default NotificationBanner
