import classNames from 'classnames'

const Pricing = ({ data }) => {
  return (
    <div className="container py-12">
      <h1 className="text-4xl text-center">{data.title}</h1>
      <div className="flex flex-col gap-4 mt-6 lg:flex-row lg:justify-center">
        {data.plans.map((plan) => (
          <div
            className={classNames(
              // Common classes
              'rounded-md border-2 py-4 px-4 flex-1 md:w-lg',
              // Normal plan
              {
                'bg-gray-100 text-gray-900 border-gray-300':
                  !plan.isRecommended,
              },
              // Recommended plan
              {
                'bg-primary-100 text-primary-900 border-primary-300':
                  plan.isRecommended,
              }
            )}
            key={plan.id}
          >
            <h2 className="text-2xl">{plan.name}</h2>
            <p
              className={classNames('mt-4 text-lg', {
                'text-primary-700': plan.isRecommended,
                'text-gray-700': !plan.isRecommended,
              })}
            >
              {plan.description}
            </p>
            <p className="mt-4 text-3xl">
              {plan.price === 0 ? 'Free ' : `$${plan.price} `}
              <span className="text-base font-medium">{plan.pricePeriod}</span>
            </p>
            <ul className="flex flex-col gap-3 mt-4">
              {plan.features.map((feature) => (
                <li
                  className="flex flex-row justify-between items-center"
                  key={feature.id}
                >
                  <span>{feature.name}</span>

                  <div className="w-auto h-6 text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing
