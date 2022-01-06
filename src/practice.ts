// interface는 클래스 또는 객체를 위한 타입을 지정할 때 사용되는 문법이다.
// 클래스를 만들 때, 특정 조건을 준수해야 함을 명시하고 싶을 때 interface를 사용하여,
// 클래스가 가지고 있어야 할 요구사항을 설정한다.
// implements 키워드를 사용하여 해당 클래스가 특정 interface의요구사항을 구현한다는 것을 명시한다.

interface Shape {
  getArea(): number;
}

// implements 키워드를 사용하여 해당 클래스가 Shape interface 의 조건을 충족하겠다는 것을 명시.
class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const shape: Shape[] = [new Circle(5), new Rectangle(10, 5)];

console.log(shape);
