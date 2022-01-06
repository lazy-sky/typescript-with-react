// Generics

// 어떤 타입이 올 지 모르는 경우엔 any 타입을 사용할 수 있다.
// 하지만 이렇게 하면 타입 추론이 모두 깨진 거나 다름없다.
function mergeDirtyVersion(a: any, b: any): any {
  return {
    ...a,
    ...b,
  };
}

const merged = mergeDirtyVersion({ foo: 1 }, { bar: 1 });

// 이런 상황에 제네릭을 사용하면 된다.

// 꺽쇠 안에 타입의 이름을 넣어주면 제네릭에 해당하는 타입에는 뭐든지 들어올 수 있게 되는 한편,
// 사용할 때 타입이 깨지지 않게 된다.
// 아래와 같이 함수에 제네릭을 사용하게 되면 함수의 파라미터로 넣은 실제 값의 타입을 활용하게 된다.
function merge<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b,
  };
}

function wrap<T>(param: T) {
  return {
    param,
  };
}

const wrapped = wrap(10);
