/* eslint-disable react/prop-types */
import Case from '../../assets/Images/case.jpg'
const CaseStudentsContent = ({para}) => {
  return (
    <>
    <section className="flex flex-col gap-6 w-full">
        <div className="w-full">
            <img src={Case} alt="Case Studies" className='img-fluid' />
        </div>
        <div className='border-b pb-8'>
            <p className='text-2xl font-medium'>{para}</p>
        </div>
        <div className=''>
            <h1 className='text-5xl font-bold mb-2'>+ 120 %</h1>
            <p className='text-lg'>Increase in customer growth rate</p>
        </div>
    </section>
    </>
  )
}

export default CaseStudentsContent