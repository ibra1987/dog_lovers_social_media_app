import { inputProps } from "@/types"

function InputComponent({type,placeholder,value,handler,cssClass,label,labelText,labelClass,name }:inputProps) {
  return (
 <>
 {label && <label className={labelClass}>{labelText}:</label>}
 <input type={type} placeholder={placeholder} name={name} onChange={handler} value={value} className={cssClass}/>
 </>
  )
}

export default InputComponent