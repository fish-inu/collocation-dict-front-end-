import React, { useRef } from 'react';

function FormWord(props) {
  let input_tag = useRef();
    return (
    <div>
      <input ref={input_tag} type='text' placeholder="任意单词"></input>
      <button onClick={() => props.handleclick(input_tag.current.value) }>查询</button>
    </div>
  );
}

export default FormWord;