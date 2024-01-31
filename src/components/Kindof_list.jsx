import React from 'react'
import { Route,Routes} from "react-router-dom";
import { Link } from 'react-router-dom';
import List_pending from "./List_pending";
import In_progress from './In_progress';
import Done from './Done';
import "../index.css"

const Kindof_list = () => {
  return (
    <div className='flex'>
        
            <div className='flex'>
                <nav>
                    <div className='bg-[#FCF9FC] flex flex-row list-none absolute w-246 h-76'>
                        <button className='p-4 text-text-col font-medium'>
                            <Link to="/List_pending">pending</Link>
                        </button>
                        <button className='p-4 text-text-col font-medium'>
                            <Link to="/In_progress">In Progress</Link>
                        </button>
                        <button className='p-4 text-[#173857] font-medium'>
                            <Link to="/Done">Done</Link>
                        </button>
                    </div>
                </nav>
                <hr/>
                <Routes>
                    <Route path='/List_pending' element={<List_pending/>}/>
                    <Route path='/In_progress' element={<In_progress/>}/>
                    <Route path='/Done' element={<Done/>}/>
                </Routes>
                
            </div>
        
    </div>
  )
}

export default Kindof_list