

const MarketingBar = () => {
  return (
    <>
    <section className="md:block hidden border-b py-6 text-center">
        <nav className="max-w-6xl mx-auto">
            <ul className="flex items-center justify-between text-lg">
                <li>
                    <a href="#content" className="hover:text-green-500">Content marketing</a>
                </li>
                <li>
                    <a href="#compaign" className="hover:text-green-500">Compaign optimization</a>
                </li>
                <li>
                    <a href="#Market" className="hover:text-green-500">Market research</a>
                </li>
            </ul>
        </nav>
    </section>
    </>
  )
}

export default MarketingBar