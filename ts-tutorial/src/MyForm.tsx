import React, { useState, useRef } from 'react';

// useRef는 리액트 컴포넌트에서 외부 라이브러리의 인스턴스 또는 DOM을 특정 값에 담을 때 사용한다.
// 이를 통해 컴포넌트 내부 값을 관리할 떄 유용하다.
// 단, 이 값은 렌더링과 관계가 없어야 한다.

type MyFormProps = {
  onSubmit: (form: { name: string; description: string }) => void;
};

function MyForm({ onSubmit }: MyFormProps) {
  // 초기값은 null로 설정한다.
  const inputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    name: '',
    description: '',
  });

  const { name, description } = form;

  // onChange에 커서를 대면 e 객체 타입을 알 수 있다.
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: '',
      description: '',
    });

    // useRef를 쓸 땐 제네릭을 통해 ~.current의 값을 추론할 수 있다.
    if (!inputRef.current) return;
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={onChange} ref={inputRef} />
      <input name="description" value={description} onChange={onChange} />
      <button type="submit">등록</button>
    </form>
  );
}

export default MyForm;
