import React,{useState} from 'react'
import DisplayProfile from './DisplayProfile';
function Showprofile() {
    const [userName,setUserName] = useState("");
    const [data,setData] = useState({});
    const[showView,setShowView] = useState(false);


    const onChangeHandler =(e)=>{
        setUserName(e.target.value)
    }

    const onSubmitHandler =(e)=>{
        e.preventDefault();
        setShowView(!showView);
        fetch(`https://api.github.com/users/${userName}`)
        .then((response)=>{
          return response.json();
        }).then((originalData)=>{
          if(originalData){
            setData(originalData);
          }
        })
    }
    return (
        <>
        <div className="container my-5 mx-auto">
            <div className="row mt-auto">
                <div className="col-lg-8 col-sm-12 text-center mx-auto">
                    <h1 className="display-4 mb-3">GitHub Profile Searcher</h1>
                </div>
            </div>
            <div className="row">
                
                <div className="col-md-6 mx-auto text-center">
                    <div className="row mb-5 justify-content-center">
                        <form id="myform" autoComplete='off' onSubmit={onSubmitHandler}>
                         <div className="col-lg-12 col-sm-12 my-2 form-group">
                            <input className="form-control form-control-lg" placeholder="Github username" type={userName} id="w"  onChange={onChangeHandler}/>
                        </div>
                        <div className="col-lg-3 col-sm-12 my-5 form-group">
                            <button className="btn btn-primary btn-block w-100 btn-lg">Search</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className={showView ?"d-block":"d-none"}>
            <DisplayProfile data={data}/>
        </div>
        </>

    )
}

export default Showprofile;
