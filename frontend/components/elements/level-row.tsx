import classNames from "classnames"
import MarkdownRender from "utils/MarkdownRender"
const LevelRow = ({ data: { id, title, titleColor, content } }) => {
  return (
    <div key={id}>
      <div className="mx-auto mt-8 max-w-prose">
        <ul className="mx-auto max-w-prose py-4">
          <li className="list-check list-inside align-baseline">
            <span
              className={classNames(
                "bg-gradient-to-r bg-clip-text text-left text-2xl font-bold text-transparent",
                {
                  "from-yellow-800 to-yellow-500": titleColor === "orange",
                  "from-primary-500 to-green-400": titleColor === "green",
                  "from-yellow-300 to-green-500": titleColor === "yellow",
                  "from-cyan-500 to-green-300": titleColor === "blue",
                  "from-red-600 to-yellow-300": titleColor === "red",
                  "text-black": !titleColor,
                }
              )}
            >
              {title}
            </span>

            <div>
              <div className="mx-auto max-w-prose md:max-w-3xl lg:ml-10">
                <MarkdownRender>{content}</MarkdownRender>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default LevelRow
