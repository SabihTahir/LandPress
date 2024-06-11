import { Link, NavLink } from "react-router-dom"


const Menu = () => {
  return (
    <>
    <section className="md:block hidden sticky top-0 shadow-sm py-3 bg-white z-50">
        <nav className="max-w-6xl mx-auto lg:px-0 px-2 ">
            <div className="flex items-center justify-between ">
                {/* Left Side */}
                <div className="flex items-center gap-10">
                    <div className="text-2xl font-semibold">
                        <Link to="/">LandPress</Link>
                    </div>
                    <ul className="lg:flex hidden items-center gap-8">
                        <li>
                            <NavLink to="/about" className='text-md hover:text-green-500'>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services" className='text-md hover:text-green-500'>Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/pricing" className='text-md hover:text-green-500'>Pricing</NavLink>
                        </li>
                        <li>
                            <NavLink to="/insights" className='text-md hover:text-green-500'>Insights</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className='text-md hover:text-green-500'>Contact</NavLink>
                        </li>
                    </ul>
                </div>
                {/* Right Side */}
                <div className="md:flex hidden items-center gap-3">
                    <button className="bg-green-500 text-white px-4 py-3 rounded hover:bg-blue-900">Book intro call</button>
                    <button className="bg-blue-900 text-white px-4 py-3 rounded hover:bg-green-500">Ready to talk?</button>
                </div>
            </div>
        </nav>
    </section>
    </>
  )
}

export default Menu