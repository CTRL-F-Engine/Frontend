/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export const FinalBtn2=(props)=>
{
    const handleReadMore=()=>
    {
        
    }
    return (
        <button  
        style={{ opacity: 0.6 }}
        className={`  sm:w-[110px] w-fit
        box-border xs:h-[38px] h-[30px] text-neutral-50 text-[13px] sm:text-[15px] font-medium sm:font-bold bg-item-col  font-['TT Commons'] sm:px-4 px-2 sm:rounded-[5px] rounded-[3px]` }>
      {props.content}
        </button>  
    )
}