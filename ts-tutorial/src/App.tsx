import React from 'react';
import Greetings from './Greetings';

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };

  // 컴포넌트를 렌더링할 때 필요한 props를 빠뜨리게 되면 에디터에 오류가 나타날 것이다.
  // 컴포넌트를 사용하는 과정에서 어떤 게 필요했는지 기억이 나지 않을 땐,
  // 커서를 컴포넌트 위에 올려보거나,
  // 컴포넌트의 props를 설정하는 부분에서 Ctrl + Space를 눌러보면 된다.
  return <Greetings name="Sky" onClick={onClick} />;
};

export default App;
