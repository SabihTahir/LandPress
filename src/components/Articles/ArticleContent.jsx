/* eslint-disable react/prop-types */
import article from '../../assets/Images/article.jpg'

const ArticleContent = ({heading, para}) => {
  return (
    <>
    <section className="py-6 flex flex-col gap-6">
        <img src={article} alt="" />
        <h1 className='text-2xl'>{heading}</h1>
        <p>{para}</p>
        <div>
        <button className='bg-white py-4 px-6 hover:bg-[#024550] hover:text-white'>Read More</button>
        </div>
    </section>
    </>
  )
}

export default ArticleContent