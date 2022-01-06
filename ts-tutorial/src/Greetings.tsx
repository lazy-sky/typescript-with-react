type GreetingsProps = {
  name: string;
  mark: string;
  // 생략해도 되는 props가 있다면 ?를 사용한다.
  optional?: string;
  onClick: (name: string) => void;
};
function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
  const handleClick = () => onClick(name);

  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
}

Greetings.defaultProps = {
  mark: '!',
};

export default Greetings;
