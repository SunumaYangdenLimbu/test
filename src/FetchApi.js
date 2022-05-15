import React, {useState,useEffect} from 'react'

const FetchApi = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            console.log(res);
            if(!res.ok){
                throw Error(res.statusText)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data);
            setData(data)
        })
        .catch((error)=>{
            console.log(error)
        })
    })
  return (
    <>
      <div className='fetchapi'>
          <h1>Json Data</h1>
      </div>
      <div className='inside-fetchApi'>
        {
            data.map((elem)=>{
                return(
                    <>
                        <p>UserTD:{elem.userId}</p>
                        <p>ID:{elem.id}</p>
                        <p>Title:{elem.title}</p>
                        <p>Body:{elem.body}</p>
                        <hr/>
                    </>
                )
            })
        }
      </div>  
      
    </>
  )
}

export default FetchApi;
