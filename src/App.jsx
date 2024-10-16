import { useEffect,useState } from 'react'
import axios from 'axios'

function App() {

  const [data,setData] = useState([])

  const getData= async ()=>{
    const response=await axios.get("https://picsum.photos/v2/list?page=2&limit=20")
    setData(response.data)
    console.log(data);
  }

  useEffect(() => {
    getData()
  }, [])
  

  return (
    <>
    <div className="container p-10 w-screen h-max bg-black">
  {/* <button className="bg-teal-700 text-white text-xl rounded-md px-4 py-2 transition-transform transform hover:scale-105 active:scale-90 focus:outline-none focus:ring-2 focus:ring-teal-500" onClick={getData}>
    Get data
  </button> */}
  <div className="p-5 bg-slate-800 rounded-md mt-5 shadow-lg">
    {data.map(function(elem, idx) {
      return (
        <div key={idx} className="w-full mb-5 rounded-md flex items-center justify-between p-4 bg-slate-700 hover:bg-slate-600 transition duration-300 text-blue-200">
          <img src={elem.download_url} alt="" className="w-2/4 object-cover rounded-md shadow-md" />
          <h1 className="text-lg font-semibold">{elem.author}</h1>
        </div>
      );
    })}
  </div>
</div>

    </>
  )
}

export default App
