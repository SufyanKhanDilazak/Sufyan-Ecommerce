import Products from './components/Products'
import Main from './components/Main'
import Footer from './components/Footer'
export const dynamic = "force-dynamic";

const page = () => {
  return (
    <div>
      <Main/>
      <Products/>
      <Footer/>
    
    </div>
  )
}

export default page