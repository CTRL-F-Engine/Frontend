/* eslint-disable no-unused-vars */
import myImage from '../assets/favorDark.svg';
import setting from '../assets/settingsDark.svg';
import { LogOut } from './LogOut';
import { Link } from 'react-router-dom';

export const LittleSideBarWhite=()=>
{
 

    const handleSave=()=>
{

}
const handleChangeSettings=()=>
{

}

return( <div className='absolute  top-[70px] right-0 px-8'>
  <div className='bg-white rounded-[5px] box-content px-4 xs:w-[120px] h-[150px] w-[100px]  ml-auto grid xs:py-4 pb-2 pt-2 gap-y-3 '>
    <Link to="/Favors">
  <div className='flex items-center gap-x-2'>
          
            <button onClick={handleSave}>
              <img className='sm:w-5 w-5 ' src={myImage} />
            </button>
          
          <h1 className='text-sky-950 font-medium'>Favors</h1>
        </div>
</Link>
   <hr className='border-1  border-sky-950'></hr>
  

<Link  to="/UserSettings">
   <div className='flex items-center gap-x-2'>
   <button onClick={handleChangeSettings}>
<img className=' sm:w-5 w-5 ' src={setting} />  </button> 
<h1 className='text-sky-950 font-medium'>
    Settings</h1> 
</div>
</Link>
   <hr className='border-1  border-sky-950'></hr>
<LogOut mode='dark'/>
</div>



</div>
)
}
