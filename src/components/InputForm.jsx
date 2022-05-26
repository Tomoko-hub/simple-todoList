import React,{ useState } from 'react'

const InputForm = ({ taskList, setTaskList }) => {

  const [inputText, setInputText ] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();

    setTaskList([
      ...taskList, 
      {
        id: taskList.length, 
        text: inputText,
        completed: false,
      }
    ]);

    setInputText("");
  };

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className='inputForm'>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={inputText} />
        <button>
          <i className="far fa-plus-square"></i>
        </button>
      </form>
    </div>
  );
};

export default InputForm;