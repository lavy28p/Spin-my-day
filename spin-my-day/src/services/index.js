 // define our url
 export const baseUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}`;


 // create our config object (sort of like our Airtable passport)
 export const config = {
   headers: {
     Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
   }
  }