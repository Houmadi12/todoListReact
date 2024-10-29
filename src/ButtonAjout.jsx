
function ButtonAjout({onClick,name}) {
  return (
    <>
      <button type="button" className='px-6 py-2 text-lg font-semibold text-white shadow-sm hover:bg-[#5499c7] bg-[#5499c7] rounded-lg' onClick={onClick}>{name}</button>
    </>
  )
}

export default ButtonAjout
