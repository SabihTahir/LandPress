import ArticleContent from "./ArticleContent";

const Article = () => {
  

    const heading1 = 'Strategies for scaling your business successfully'
    const heading2 = 'Storytelling mastery: crafting compelling narratives'
    const heading3 = 'Optimizing your online presence for visibility'

    const para1 = 'When evaluating potential agencies, consider their expertise in various aspects of design.'
    const para2 = 'The multi-brand system has gained traction, allowing businesses to manage various brands.'
    const para3 = 'A well-defined statement helps participants and ensures everyone is on the same page.'
  
    return (

    
    <>
      <section className="bg-[#F4FAFA] px-4 py-12">
        <main className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 ">
            <div className="text-[#024550] text-5xl font-semibold">
              <h1 className="mb-1">Insights and</h1>
              <h1>expertise</h1>
            </div>
            <div className="">
              <p className="">
                Stay informed and inspired with our blog, offering valuable
                insights, tips, and industry updates to fuel your business
                growth.
              </p>
            </div>
            <div className="md:text-center text-start">
              <button className="bg-[#024550] text-white py-4 px-10 hover:bg-green-500 text-center">
                Read all articles
              </button>
            </div>
          </div>
          <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <ArticleContent heading={heading1} para={para1}/>
                <ArticleContent heading={heading2} para={para2}/>
                <ArticleContent heading={heading3} para={para3}/>
          </div>
        </main>
      </section>
    </>
  );
};

export default Article;
