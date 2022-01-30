import React, { FormEvent, useState, ChangeEvent } from 'react';
import './GithubUsernameForm.css';

type GithubUsernmaeFormProps = {
  onSubmitUsername: (username: string) => void;
}

function GithubUsernameForm({onSubmitUsername}: GithubUsernmaeFormProps) {
  const [input, setInput] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitUsername(input);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  return(
    <form className='GithubUsernameForm' onSubmit={onSubmit}>
      <input 
        onChange={onChange} 
        value={input} 
        placeholder="계정명을 입력하세요" 
      />
      <button type='submit'>조회</button>
    </form>
  )
}

export default GithubUsernameForm;