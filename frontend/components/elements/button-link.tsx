import classNames from 'classnames'

import CustomLink from './custom-link'
const ButtonContent = ({ button, appearance, compact }) => {
  return (
    <div
      className={classNames(
        // Common classes
        'block w-full rounded-md border-2 text-center text-base font-semibold uppercase tracking-wide md:text-sm lg:w-auto',
        // Full-size button
        {
          'px-8 py-4': compact === false,
        },
        // Compact button
        {
          'px-6 py-2': compact === true,
        },
        // Specific to when the button is fully dark
        {
          'border-primary-600 bg-primary-600 text-white': appearance === 'dark',
        },
        // Specific to when the button is dark outlines
        {
          'border-primary-600 text-primary-600': appearance === 'dark-outline',
        },
        // Specific to when the button is fully white
        {
          'border-white bg-white text-primary-600': appearance === 'white',
        },
        // Specific to when the button is white outlines
        {
          'border-white text-black': appearance === 'white-outline',
        }
      )}
    >
      {button.text}
    </div>
  )
}
type ButtonLinkProps = {
  button?: any
  appearance?: 'dark' | 'white-outline' | 'white' | 'dark-outline'
  compact?: boolean
}
const ButtonLink: React.FC<ButtonLinkProps> = ({
  button,
  appearance,
  compact = false,
}) => {
  return (
    <CustomLink link={button}>
      <ButtonContent
        button={button}
        appearance={appearance}
        compact={compact}
      />
    </CustomLink>
  )
}
export default ButtonLink
