const highlightText = (text: string, keyword: string) => {
  if (!keyword) return text

  // Create a regular expression to find the keyword (case insensitive)
  const regex = new RegExp(`(${keyword})`, 'gi')

  // Split the text based on the keyword match and wrap matches in a span
  return text.split(regex).map((part, index) =>
    part.toLowerCase() === keyword.toLowerCase() ? (
      <span key={index} className="bg-yellow-400 text-zinc-800 font-bold">
        {part}
      </span>
    ) : (
      part
    )
  )
}

export default highlightText
