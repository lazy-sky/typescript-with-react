// interface는 클래스 또는 객체를 위한 타입을 지정할 때 사용되는 문법이다.
// 클래스를 만들 때, 특정 조건을 준수해야 함을 명시하고 싶을 때 interface를 사용하여,
// 클래스가 가지고 있어야 할 요구사항을 설정한다.
// implements 키워드를 사용하여 해당 클래스가 특정 interface의요구사항을 구현한다는 것을 명시한다.

interface Shape {
  getArea(): number;
}

// implements 키워드를 사용하여 해당 클래스가 Shape interface 의 조건을 충족하겠다는 것을 명시.
class Circle implements Shape {
  // constructor의 파라미터에 public 또는 private 접근자를 사용하면 직접 설정하는 작업을 생략할 수 있다.
  constructor(public radius: number) {
    this.radius = radius;
  }

  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  // public과 달리 private과 함께 선언된 값은 클래스의 코드 밖에서 조회할 수 없다.
  constructor(private width: number, private height: number) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const shape: Shape[] = [new Circle(5), new Rectangle(10, 5)];

// 일반 객체를 interface로 타입 설정하기

interface Person {
  name: string;
  age?: number; // ?는 옵셔널 값이라는 의미.
}
interface Developer extends Person {
  skills: string[];
}

const person: Person = {
  name: "김사람",
  age: 20,
};

const expert: Developer = {
  name: "김개발",
  skills: ["javascript", "react"],
};
