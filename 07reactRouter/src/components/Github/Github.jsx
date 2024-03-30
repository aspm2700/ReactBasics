import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
   
  return (
    <>
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
            <div className=' flex justify-center items-center'>
                <img className='mt-5' src={data.avatar_url} alt="Git picture" width = {300}/>
            </div>
        </div>
    </>
  )
}



export default Github

export const githubInfoLoader = async({params}) => {
    let response = await fetch(`https://api.github.com/users/${params.username}`)
    return response.json()
}
