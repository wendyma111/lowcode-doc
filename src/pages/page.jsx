import ReactMarkdown from 'react-markdown'

function Page(props) {
  return (
    <ReactMarkdown children={props.markdown} />
  )
}

export default Page