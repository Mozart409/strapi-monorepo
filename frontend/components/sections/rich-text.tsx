import Markdown from 'react-markdown'
type RichTextProps = {
  data?: {
    content?: string
  }
}
const RichText: React.FC<RichTextProps> = ({ data }) => {
  return (
    <div className="container py-12 prose prose-lg">
      <Markdown>{data.content}</Markdown>
    </div>
  )
}
export default RichText
