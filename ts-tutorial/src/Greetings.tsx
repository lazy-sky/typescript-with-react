import React from 'react';

type GreetingsProps = {
  name: string;
  mark: string;
};

// React.FC를 사용할 땐 props의 타입을 Generics로 넣어서 사용한다. 이를 통해,
// 1. props에 기본적으로 children이 들어간다.
// 2. 컴포넌트의 defaultProps, propTypes, contextTypes를 설정할 때 자동완성될 수 있다.
// 한편 단점으로는,
// - children이 옵셔널로 들어가기 때문에 props의 타입이 명백하지 않다.
// - defaultProps가 제대로 작동하지 않는다.

// const Greetings: React.FC<GreetingsProps> = ({ name, mark = '!' }) => (
//   <div>
//     Hello, {name} {mark}
//   </div>
// );

// 일단은 function 키워드를 이용하는 것으로!
function Greetings({ name, mark }: GreetingsProps) {
  return (
    <div>
      Hello, {name} {mark}
    </div>
  );
}

Greetings.defaultProps = {
  mark: '!',
};

export default Greetings;
