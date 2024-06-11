import Action from "./Action"
import Navigation from "./Navigation"
import Rights from "./Rights"


const Footer = () => {
  return (
    <>
    <section className="bg-[#024550] text-white py-6">
        <Action/>
        <Navigation/>
        <Rights/>
    </section>
    </>
  )
}

export default Footer