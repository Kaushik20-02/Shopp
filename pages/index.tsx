import HomeBanner from '../components/HomeBanner'
import ProductCard from '../components/ProductCard'

export default function Home({ }) {
  return (
      
      <main className="">
        <HomeBanner/>  
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        Cushioning for Your Miles
          </div>
          <div className="text-md md:text-xl">
                        A lightweight Nike ZoomX midsole is combined with
                        increased stack heights to help provide cushioning
                        during extended stretches of running.
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2
        lg:grid-cols-3 gap-5 my-14 px-5'>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </main>
  )
}