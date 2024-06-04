import clientPromise from "./mongodb";
let client;
let db;
let cars;

async function init(){
   if (db) return 
   try {
    client=await clientPromise;
    db=await client.db("BetaRental")
    cars= await db.collection("cars");
    
   } catch (error) {
    throw new Error("Failed to establish connection")
   }
}

 async ()=>{
    await init()
 };

 export async function getCars({manufacturer,year,fuel,limit,model}){
    try {
          
        if(!cars) await init();
         const result =await cars.find({}).limit().toArray()
        return ({cars:result})
    } catch (error) {
        return {error:"failed to fetch the car collection"}
    }
 };