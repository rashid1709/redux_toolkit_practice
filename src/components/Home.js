import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUser} from '../features/userDataSlice';

function Home() {
    const data = useSelector((state)=>state.app);
    console.log("data",data.users);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(getUser())
    }
  return (
    <div>
      <h1>Redux Toolkit</h1>
      <button className='btn btn-primary' onClick={handleClick}>OnClick</button>
      {
        data.users.length > 0 ? data.users.map((element,key)=>{
            return(
                <>
                <h1>{element.name}</h1>
                </>
            )
        }):""
      }
    </div>
  )
}

export default Home

