import React, {useState, useRef} from 'react'; 

interface ToDoFormProps {
  onAdd(title:string):void
}


const ToDoForm : React.FC <ToDoFormProps>= (props) => {
  // ------ Variant with useState ------
  // const [title, setTitle] = useState<string>('');
  
  // const changeHandler = (event : React.ChangeEvent<HTMLInputElement>) =>{
  //   setTitle(event.target.value)
  // };

  // const keyPressHandler = (event: React.KeyboardEvent)=>{
  //   if(event.key === 'Enter'){
  //     setTitle('');
  //   }
  // };
//  ------ END ------

  const inputRef = useRef<HTMLInputElement>(null);

  const keyPressHandler = (event: React.KeyboardEvent)=>{
      if(event.key === 'Enter'){
        props.onAdd(inputRef.current!.value);
        inputRef.current!.value = ''
      }
    };

  return ( 
   <div className="input-field m-t-2">
      <label  
      htmlFor="title" 
      className="active">
        Type what you need to do
      </label>
      <input 
        type="text"
        id="title"
        ref={inputRef}
        // value={title} 
        // onChange={changeHandler}
        onKeyPress={keyPressHandler}
        />
   </div>
  )
}

export default ToDoForm;

/* 
useState<string>(''); 
типизация того что принимает стейт

типизирует пропсы
вариант с описанием в месте объявления компоненты
const ToDoForm : React.FC <{onAdd(title:string):void}>= (props) => {

*/