const Bar = ({height}) => {
  return (
    <div className="w-full">
      <div className={`h-[${height*4}px] bg-blue-400 px-1`}>{height}</div>
    </div>

  )
}

export default Bar