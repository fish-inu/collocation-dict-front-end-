import React, { useState } from 'react';

function FormWord(props) {
  const [word, setWord] = useState()
    return (
    <div>
      <input type='text' value={word} placeholder="任意单词" onInput={(e)=>{setWord(e.target.value)}}></input>
      <button onClick={() => props.handleclick(word) }>查询</button>
    </div>
  );
}

export default FormWord;