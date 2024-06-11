import marketing from '../../assets/Images/market.jpg'

const StoriesContent = () => {
  return (
    <>
      <section className="md:px-0 px-2">
        <main className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 h-[70vh] w-full">
            <div className="bg-[#F4FAFA] md:p-8 p-4">
              <div className="h-full">
                <img src={marketing} alt="Content Marketing" className="img-fluid h-full" />
              </div>
            </div>
            <div className="flex flex-col justify-between h-full w-full">
              <div>
                <h3 className="text-green-500">Client stories</h3>
                <h1 className="text-5xl leading-[3.5rem] font-semibold">Hear success stories from our satisfied users</h1>
              </div>
              <div>
                <p className="text-lg w-96">Hear what our clients have to say about their experience working with us.</p>
                <button className="bg-[#024550] text-white py-4 px-10 hover:bg-green-500 mt-3">Why work with us</button>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

export default StoriesContent
