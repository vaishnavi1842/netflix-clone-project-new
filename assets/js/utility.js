const cl=console.log;

const BASE_URL=`https://api.themoviedb.org/3`;
const API_KEY=`b33b743d6d15dc8e7123aaae652a8a4b`;
const IMG_URL=`https://image.tmdb.org/t/p`;	
const TRENDING_URL=`${BASE_URL}/trending/all/week?api_key=${API_KEY}`;


const makeApicall=async(apiUrl,methodName,msgBody)=>{
	msgBody = msgBody ? JSON.stringify(msgBody) : null;
 let res= await fetch(apiUrl,{
		method:methodName,
		body:msgBody
	})
	return res.json()
}