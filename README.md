# useInput

useInput 훅은 인자로 (`initialValue`:초기값, `validator`:유효성 검사할 함수)를 받고 `initialValue`를 보여주고 새로운 입력 값들이`validator`함수를 거쳐 True일 경우에만 화면에 반영시켜줌

# useTab

useTab 훅은 인자로 (처음에 띄워줄 값의 인덱스, 전체 배열을 담고 있는 변수)를 받고 현재 현재 인덱스의 내용을 담아 `currentItem`변수에 전달해주고 인덱스를 바꿀 수 있는 함수를 `changeItem`에 그대로 전달해줌, onClick등의 상호작용 속성이나 기타 함수들을 통해 `changeItem`함수를 호출하며 원하는 인덱스의 내용을 띄워줄 수 있음

# useTitle

useTitle 훅은 인자로 처음 마운트가 될 때 나타낼 탭의 제목을 받음,
setTimeout함수를 통해서 5초 뒤에 useTitle함수를 전달받은 titleUpdator함수를 호출하며 탭의 제목이 바뀌게 됨
복잡한 구현 방법이 있는 건 아니고 useEffect의 작동 방식을 이해하기 위해 만들어본 훅 정도임

# useClick

useClick 훅은 인자로 참조할 무언가를 클릭했을 때 작동시킬 함수를 받음,
함수 내부에서 `element`라는 무언가를 참조할 수 있는 새로운 변수를 만들고 해당 변수를 통해 참조를 함
마운트 되는 순간 `element.current`는 `null`에서 `True`가 되어 클릭을 감지할 수 있는 상태로 바뀜
본문에서 `const context = useClick(sayhello)`를 통해서 `context`가 참조할 수 있는 `element`를 얻게 됨
`element`를 받게 되는데 해당 `element`는 `useclick`함수를 통해서 무언가를 감지하고 함수를 호출하는 역할을 하게 되는 동작인 것

# useConfirm

useConfirm 훅은 인자로 경고창 메세지, 확인 및 취소했을 때의 호출할 함수를 받음

# usePrevent

usePrevent 호출하면 바로 함수 2개를 반환해줌. 첫번째 함수는 `addPrevent`함수로 웹 페이지에서 페이지를 닫을 때 어떤 함수를 작동시키게 하는 기능을 하고 두번째 함수는 `removePrevent`로 해당 함수가 동작하지 않도록 바꿔주는 기능을 함

# useBeforeLeave

마우스가 어떤 객체를 나가기 전에 작동시킬 함수를 지정하는 훅임.
onBefore상황에 작동시킬 함수와 지정할 객체를 전달시켜주는 divRef를 인자로 받고 divRef.current에 addEventlistener를 추가하여 객체에 상황별 작동시킬 함수를 지정해주었음.
