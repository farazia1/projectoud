import React from 'react'
import Navbar from './components/header'

import Footer from './components/footer'
import  Gallery4  from '../components/gallery4'
import { Products } from '@/components/products'
import EcommerceSection from '@/components/all-products'


const Home = () => {



  return (
    <div>
    <div>
      <Navbar />
      <Gallery4 />{/*  Gallery4 yahan add kiya */}
      <EcommerceSection/>
      <Products/>
            <Footer/>
    </div>
  </div>
  )
}

export default Home



// Main Page
// export default function Home() {
//   return (
//     <div>
//       <Head>
//         <title>Malbusaat - Fashion Store</title>a&$ A
//         <meta name="description" content="Shop t2 he latest fashion trends at Malbusaat." />
//         <link rel="icon" href="/favicon.ico" /> 
//       </Head>
//       <Navbar />
//       <Hero />
//       <ProductGrid />
//       <Footer />
//     </div>
//   );
// }




// <div className='min-h-screen bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500'>
// <div className="min-h-screen bg-[radial-gradient(circle_at_center,_#1e3a8a,_#2563eb,_#000)]">