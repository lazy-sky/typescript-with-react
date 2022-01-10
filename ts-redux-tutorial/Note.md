## 리덕스 모듈 여러 파일로 분해하기

Ducks 패턴을 사용하여 리덕스에 관련된 코드를 기능별로 한 파일에 모두 모아 작성했다.
이는 액션이 적을 땐 편리하지만, 액션의 개수가 20개를 넘어간다면 파일의 코드 길이가 너무 길어져 유지보수가 어려워진다.
그렇다고 해서 Ducks 패턴을 포기하고, actions와 reducers 디렉토리를 분리하는 건 원치 않는다.
그렇게 구조를 짜면 파일끼리 너무 멀리 떨어지게 되기 때문이다.

e.g.,

- actions/
  - counter.ts
  - todos.ts
- components/
  - ...
- lib/
  - ...
- reducers/
  - counter.ts
  - todos.ts
- types/
  - counter.ts
  - todos.ts

이에 대한 대안은 파일을 여러 개로 분리하되 하나의 디렉토리에서 작성하는 것이다.

e.g.,

- modules/
  - todos/
    - actions.ts
    - index.ts
    - reducer.ts
    - types.td
  - counter.ts

이 구조는 모듈이 복잡해졌을 땐 디렉토리를 만들어 파일들을 분리하여 작성할 수도 있고,
액션이 비교적 적은 간단한 리덕스 모듈이라면 기존 방식대로 한 파일에 작성할 수 있게 한다.

### 실습

이 구조를 사용하여 todos 리덕스 모듈 리팩토링.

우선 modules 디렉토리에 todos 디렉토리를 만들고 기존 todos.ts를 index.ts로 바꿔줘야 한다.

VSC에선 이 작업을 매우 간단하게 할 수 있다. 이름 변경을 누르고 todos -> todos/index로 바꾸면 된다.
