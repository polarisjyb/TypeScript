/*
  interface 문법은 타입스크립트, 즉 '개발'을 위해서만 존재하는 문법으로
  아래의 실존하는 객체 pokemon과 다르다.
  interface 방식으로 선언된 PokemonInformation 은 '다른 곳'에서도 쓰일 수 있기 때문에
  따로 선언하는 방식으로 구조가 만들어져 있다.
  객체를 한 번만 쓰는 경우보다 '인스턴스'로 수백수천개를 쓰는 상황이 훨씬 더 많기 때문에
  인터페이스 작성법은 if문 타입제어를 확기적으로 줄여낼 수 있다.
  생성자 함수와 매우 궁합이 좋다.
*/

interface PokemonInformation {
  id : number;
  name : string;
  type : string;
}

const pokemon : PokemonInformation = {
  id : 1,
  name : '피카츄',
  type : '전기',
}

interface DigimonInformation {
  id : string;
  name : string;
  type : unknown;
}

const digimon : DigimonInformation = {
  id : 'one',
  name : '아구몬',
  type : '공룡'
}