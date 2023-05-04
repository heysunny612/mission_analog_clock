# [제로베이스 자바스크립트 미션과제] 2. 아날로그 시계  

![23](https://user-images.githubusercontent.com/127499117/236145653-29e8e12e-d38e-43da-8719-291557e6d17a.gif)



> 아날로그 시계 구현을 통해, new Date() 생성자 함수를 통해 date를 가져오고 date의 메서드를 사용하여, 현재시간,분,초의 값을 가져오는 방법을 배웠다. 또한, 이번 프로젝트에서는 append와 appendChild의 차이점도 알게되었다. setInterval도 다뤄보았다. 1초에 움직여야하는 분침, 시침을 구하는데...조금 어려웠다^^;  

<br/>
<br/>

## 새로 배운 것들

 <br/>

```js
const date = new Date();
const hour = date.getHours() % 12;
const minutes = date.getMinutes();
const seconds = date.getSeconds();

$container.appendChild($time);
$container.append(...elements);

```

## 1.new Date()
- Date 객체의 시간(0~23)을 나타내는 정수를 반환한다. new Date('2020/07/24/12:00').getHours(); //-> 12

 <br/>
 
 ## 2.getHours()
 - Date 객체의 분(0~59)을 나타내는 정수를 반환한다. new Date('2020/07/24/12:30').getMinutes(); //-> 30

 <br/>
 
 ## 3.getSeconds()
- Date 객체의 초(0~59)를 나타내는 정수를 반환한다. new Date('2020/07/24/12:30:10').getMinutes(); //-> 10
<br/>

 ## 4.append vs appendChild
- append 메서드를 활용하면 노드 객체(Node object)나 DOMstring(text)를 사용할 수 있습니다. 또한 한번에 여러 개의 자식 요소를 설정할 수 있다. 
- appendChild 메서드는 append 메서드와는 다르게 오직 Node 객체만 받을 수 있다. 게다가 append는 여러 개의 노드와 문자를 추가할 수 있는 반면에 appendChild 메서드는 한번에 오직 하나의 노드만 추가한다 . 인수로 전달받은 노드를 자신을 호출한 노드의 마지막 자식 노드로 DOM에 추가한다. 
<br/>

 ## 5.스프레드 문법 (spread syntax)
- ES6에서 도입된 스프레드 문법은 하나로 뭉쳐 있는 여러 값들의 집합을 펼쳐서 (전개하여, 분산하여,spread) 개별적은 값들의 목록으로 만든다. 스프레드 문법을 사용할 수있는 대상은 Array,String,Map,Set,DOM컬렉션 (코드에서 사용), arguments와 같이 for..of문으로 순회할 수 있는 이터러블에 한정된다.  
