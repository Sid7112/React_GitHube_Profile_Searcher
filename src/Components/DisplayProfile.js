import React from 'react'

function DisplayProfile({ data }) {

    return (
        <div className='container'>

            <div className="card p-3 mb-5">
                <div className="d-flex align-items-center">
                    <div className="image"> 
                    <img src={data.avatar_url} className="rounded" height="100%"/> 
                    </div>
                    <div className="ml-3 w-100 p-4" style={{fontSize:"20px",fontFamily:"sans-serif"}}>
                        <h4 className="my-3"style={{fontSize:"50px",fontFamily:"fantasy"}}>{data.login}</h4><span className="py-5">{data.bio}</span>
                        <div className="p-2 my-4 bg-primary d-flex justify-content-between rounded text-white stats">
                            <div className="d-flex flex-column"> <span className="articles">Repo</span> <span className="number1">{data.public_repos}</span> </div>
                            <div className="d-flex flex-column"> <span className="followers">Followers</span> <span className="number2">{data.followers}</span> </div>
                            <div className="d-flex flex-column"> <span className="rating">following</span> <span className="number3">{data.following}</span> </div>
                        </div>
                        <div className='d-flex'>
                            <h4>GitHub Link :  </h4>
                            <a href={`//github.com/${data.login}`} target="_blank" className='px-2'>https://github.com/{data.login}</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DisplayProfile
