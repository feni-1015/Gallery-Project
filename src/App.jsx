import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from './components/Card'


const App = () => {

  const [userData, setUserData] = useState([])

  const [index, setIndex] = useState(1)

  useEffect(function () {
    const getData = async () => {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
      setUserData(response.data)
    }
    getData()
  }, [index])

  let printUserData = <h3 className='text-gray-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '> Loading...</h3>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {

      return <div key={idx} className='p-2'>
        <Card elem={elem} />
      </div>
    })
  }

  return (
    <div id='main' className=" overflow-auto h-screen flex flex-col">

      <div className='  flex flex-wrap h-[85%] p-2'>{printUserData}</div>
      <div className='p-2 flex justify-center gap-6 items-center'>
        <button
          style={{ opacity: index == 1 ? 0.6 : 1}}
          className='bg-amber-400 text-black px-4 py-2 rounded cursor-pointer active:scale-95'
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1)
              setUserData([])
            }
          }}
        >
          Prev
        </button>
        <h3>Page {index}</h3>
        <button
          className='bg-amber-400 text-black px-4 py-2 rounded cursor-pointer active:scale-95'
          onClick={() => {
            setUserData([])
            setIndex(index + 1)
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App