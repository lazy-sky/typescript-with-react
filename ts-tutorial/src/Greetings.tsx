import React from 'react';

type GreetingsProps = {
  name: string;
  mark: string;
  // 생략해도 되는 props가 있다면 ?를 사용한다.
  optional?: string;
};
function Greetings({ name, mark, optional }: GreetingsProps) {
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
    </div>
  );
}

Greetings.defaultProps = {
  mark: '!',
};

export default Greetings;
