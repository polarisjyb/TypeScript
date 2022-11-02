"use strict";
/*
  unknown 타입은 단어의 뜻과 동일하게 '알 수 없다, 모른다' 라는 의미를 가진다.
  unknown 타입은 any 타입과 동일하게 모든 값을 허용하지만, 할당된 값이 어떤 타입인지 모르기 때문에
  함부로 프로퍼티(객체화) 하거나 연산을 할 수 없다.

  타입을 미리 알 수 없는 어떤 값이 있을 때 any 대신 unknown을 사용하자.
  any 처럼 unknown도 모든 값을 대표하지만, unknown의 타입을 검사해 정제(refine)하기 전까지는 타입스크립트가 unknown 타입의 값을
  사용할 수 없게 강제한다.
*/
/*
  1. 타입스크립트가 무언가의 타입을 unknown 이라고 추론하는 상황은 없다.
  unknown 타입을 사용하고자 한다면 개발자가 명시적으로 설정해야 한다.
  타입을 명시하지 않아 알 수 없는 상황이라면 프로그래머와 타입스크립트 모두 기본 타입인 any라고 가정한다.

  --> let a: unknown = 30

  2. unknown 타입이 아닌 값과 unknown 타입인 값을 비교할 수 있다.

  --> let b = a === 1234

  3. 하지만 unknown 값이 특정 타입이라고 가정하고 해당 타입에서 지원하는 동작을 수행할 수는 없다.

  --> let c = a + 10

  먼저 타입스크립트에게 해당 값이 특정 타입임을 증명해야 한다.

  --> if (typeof a === 'number') {
    let d = a + 10
  }
*/
let a = 30; // unknown
let b = a === 1234; // boolean
let c = a + 10; // 에러 ts2571: 객체의 타입이 'unknown' 임
if (typeof a === 'number') {
    let d = a + 10; // number
}
// 모든 타입을 허용한다.
// any 타입과는 다르게 프로퍼티 또는 연산을 하는 경우 컴파일러가 체크한다.
// 그러므로 문제 되는 코드를 미리 예방할 수 있다.