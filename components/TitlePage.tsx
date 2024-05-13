import React from 'react'

const TitlePage = (props) => {
  return (
    <>
      <h1 className="text-slate-200 font-bold text-4xl text-center tracking-widest">{props.title}</h1>
      <h1 className="text-slate-200 font-extralight text-2xl text-center tracking-widest">{props.subtext}</h1>
    </>
  )
}

export default TitlePage