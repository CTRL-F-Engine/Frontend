/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export const KeyWord=(props)=>
{
    return (
        <div className="w-fit h-[38px] sm:h-[40px] sm:px-[10px]  bg-gray-300 rounded-[3px] sm:rounded-[5px] justify-center items-center px-2 inline-flex">
  <div className="text-gray-900 text-[3.5vw] xs:text-[15px] font-medium font-['TT Commons']">{props.content}</div>
</div>
    )
}