import marketing from '../../assets/Images/market.jpg'

const Marketresearch = () => {
  return (
    <>
    <section id="Market" className="md:py-20 py-10 md:px-0 px-2">
        <main className="max-w-6xl mx-auto border-b pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[70vh]">
                <div className='flex flex-col justify-between h-full'>
                    <div className=''>
                        <h3 className=' text-green-500'>Content marketing</h3>
                        <h1 className='text-5xl leading-[3.5rem] font-semibold'>Data-driven market research analysis</h1>
                    </div>
                    <div className=''>
                        <p className='text-lg w-96'>Engaging content strategies tailored to your audience to enhance brand awareness.</p>
                        <button className='bg-[#024550] text-white py-4 px-10 hover:bg-green-500 mt-3'>Learn More</button>
                    </div>
                </div>
                <div className="bg-[#F4FAFA] md:p-8 p-4 ">
                    <div className="h-full">
                        <img src={marketing} alt="Content Marketing" className='img-fluid h-full' />
                    </div>
                </div>
            </div>
        </main>
    </section>
    </>
  )
}

export default Marketresearch