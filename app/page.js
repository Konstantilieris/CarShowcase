
import Hero from '@/components/Hero'
import CustomFilter from '@/components/CustomFilter'
import SearchBar from '@/components/SearchBar'
import CarCard from '@/components/CarCard'
import { getCars } from '@/utils/fetchDB'
import { yearsOfProduction,fuels } from '@/constants'
import ShowMore from '@/components/ShowMore'
export default async function Home({searchParams}) {
 
 
 
  const allCars=await getCars({manufacturer:searchParams.manufacturer,year:searchParams.year,fuel:searchParams.fuel,limit:searchParams.limit||10,model:searchParams.model});
  console.log(allCars)
  const isDataEmpty= !Array.isArray(allCars)||allCars.length<1||!allCars;
  //const vehicles=allCars?.cars.map(car=>{
   // const _id=car._id.toString();
    //car._id=_id;
   //return car
 // })
 
  
  

  
  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className='mt-12 padding-x padding-y max-width' id="discover">
         <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore the cars you might like</p>
         </div>
         <div className='home__filters'>
              <SearchBar />
            <div className="home__filter-container">
              <CustomFilter title="fuel" options={fuels}/>
              <CustomFilter title="year" options={yearsOfProduction}/>
            </div>
         </div>
        {!isDataEmpty?(
         <section>
          <div className='home__cars_wrapper'>
           { vehicles?.map((car)=>(
            <CarCard  key={car._id} car={car}/> 
           ))}
          </div>
           <ShowMore pageNumber={(searchParams.pageNumber||10)/10} isNext={(searchParams.limit||10)>vehicles.length}/>
         </section>

        )
        :(
         <div className='home__error-container'>
          <h2 className='text-black text-xl font-bold'>Oops,no results </h2>
          <p>{allCars?.message}</p>
         </div>
        )
      }
      </div>
    </main>
  )
}
          
