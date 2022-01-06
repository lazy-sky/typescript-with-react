// Type Alias
// type 키워드를 통해 특정 타입에 별칭을 붙일 수 있다.

type Person = {
  name: string;
  age?: number;
};

// &는 두 개 이상의 타입을 합쳐준다.
type Developer = Person & {
  skills: string[];
};

const person = {
  name: "김사람",
};

const expert: Developer = {
  name: "김개발",
  skills: ["javascript", "react"],
};

type People = Person[]; // Person[]를 People 타입으로 사용할 수 있게 되었다.
const people: People = [person, expert];

type Color = "red" | "orange" | "yellow";
const color: Color = "red";
const colors: Color[] = ["red", "orange"];

// type과 interface에 많은 차이가 있는 것은 아니다.
// 무엇이든 써도 되지만 일관성을 지켜야 한다.
// 다만 라이브러리를 작성하고 다른 라이브러리를 위한 타입 지원 파일을 작성하게 될 때는 interface가 권장된다.
