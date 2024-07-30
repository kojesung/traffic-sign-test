# useInput

useInput 훅은 인자로 (`initialValue`:초기값, `validator`:유효성 검사할 함수)를 받고 `initialValue`를 보여주고 새로운 입력 값들이`validator`함수를 거쳐 True일 경우에만 화면에 반영시켜줌

# useTab

useTab 훅은 인자로 (처음에 띄워줄 값의 인덱스, 전체 배열을 담고 있는 변수)를 받고 현재 현재 인덱스의 내용을 담아 `currentItem`변수에 전달해주고 인덱스를 바꿀 수 있는 함수를 `changeItem`에 그대로 전달해줌, onClick등의 상호작용 속성이나 기타 함수들을 통해 `changeItem`함수를 호출하며 원하는 인덱스의 내용을 띄워줄 수 있음
