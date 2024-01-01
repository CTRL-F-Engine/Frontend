/* eslint-disable no-unused-vars */
import myImage from '../assets/Favor.svg';
import setting from '../assets/settings.svg';
import { LogOut } from './LogOut';

export const LittleSideBar=()=>
{
 

    const handleSave=()=>
{

}
const handleChangeSettings=()=>
{

}
return( <div className='absolute right-0 px-8'>
  <div className='bg-sky-950 rounded-[5px] box-content px-4 xs:w-[120px] h-[150px] w-[100px]  ml-auto grid xs:py-4 pb-2 gap-y-3'>
<div className='flex items-center gap-x-2'>
   <button onClick={handleSave}>
<img className=' sm:w-5 w-5 ' src={myImage} />  </button> 
<h1 className='text-white font-medium'>
    Favors</h1> 
</div>

   <hr className='border-1  border-cyan-300'></hr>
  


   <div className='flex items-center gap-x-2'>
   <button onClick={handleChangeSettings}>
<img className=' sm:w-5 w-5 ' src={setting} />  </button> 
<h1 className='text-white font-medium'>
    Settings</h1> 
</div>

   <hr className='border-1  border-cyan-300'></hr>
<LogOut mode='light'/>
</div>



</div>
)
}