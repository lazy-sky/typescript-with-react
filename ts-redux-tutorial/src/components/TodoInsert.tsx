import { ChangeEvent, FormEvent, useState } from "react";

function TodoInsert() {
  const [value, setValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: 커스텀 훅으로 새 항목 등록
    // 사실 간단해서 그냥 여기서 useDispatch를 사용해도 된다.
    setValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input placeholder="what to do?" value={value} onChange={onChange} />
      <button type="submit">등록</button>
    </form>
  );
}

export default TodoInsert;
