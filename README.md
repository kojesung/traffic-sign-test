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

usePrevent 훅은 호출하면 바로 함수 2개를 반환해줌. 첫번째 함수는 `addPrevent`함수로 웹 페이지에서 페이지를 닫을 때 어떤 함수를 작동시키게 하는 기능을 하고 두번째 함수는 `removePrevent`로 해당 함수가 동작하지 않도록 바꿔주는 기능을 함

# useBeforeLeave

마우스가 어떤 객체를 나가기 전에 작동시킬 함수를 지정하는 훅임.
onBefore상황에 작동시킬 함수와 지정할 객체를 전달시켜주는 divRef를 인자로 받고 divRef.current에 addEventlistener를 추가하여 객체에 상황별 작동시킬 함수를 지정해주었음.

# useFadeIn

useFadeIn 훅은 ref와 style을 반환하기 때문에 값을 각각 다루는 것이 아니라면 `{...ref}`를 통해서 사용할 수 있음.
useRef객체를 통해서 opacity값을 조정하는 과정을 거치며 조금씩 선명하게 보이도록 함
해당 훅의 인자로는 몇 초 뒤에 값을 보이게 할지, 앞의 작업을 몇 초 뒤에 실시할지를 정할 수 있음.
이 작업을 sytle 요소의 transition과 opacity를 통해 구현하였음.

# useNetwork

useNetwork 훅은 True/False로 반환해주는 `navigator.online`을 통해 온/오프라인 상태를 감지하고 상태가 변할 때 호출할 함수를 인자로 받음.

# useScroll

useScroll 훅은 useEffect훅을 통해서 window인스턴스로 scroll의 변화를 감지하고 변화가 생길 때 값을 받아내어 useState 훅을 통해 값을 초기화해주는 기능을 함. 이를 통해서 스크롤의 y 좌표에 대한 동적인 화면을 제공할 수 있음.

# useFullScreen

useFullScreen 훅은 useRef로 참조할 객체, fullScreen으로 만둘어주는 함수, 다시 원래 크리고 돌려주는 함수 3가지를 반환해줌. 원하는 객체에 ref를 설정해주고 뒤에 두 함수를 호출시키면 객체의 크기를 조절시켜줌.
브라우저마자 fullScreen()함수의 이름이 달라서 각각 설정해줘야함

# useNotification

useNotification 훅은 인자로 title과 option을 받고 함수 내부에서 window안에 Notification 속성이 있는지 검증을 함 속성이 있다면
알람 확인 절차를 거치고 알람이 허용되어있다면 `new Notification(title, option)`을 통해서 알람을 띄워주는 fireNotif함수를 반환해줌

# useAxios

useAxios 훅은 인자로 접근할 URL을 보내면 useAxios 내부에서 defaultAxios가 접근한 후 loading 상태, error나 data의 반환값을 useState를 통해 변경해준 뒤 반환해주는 훅이다. 내부에서 refetch라는 함수를 만들었는데 이 함수 내부의 trigger라는 상태는 `Date.now`의 값을 갖고 있어서 refetch가 호출되면 trigger의 상태 값이 바뀌게 되는데 useAxios 내부의 url에 접근하는 로직이 trigger상태에 의존하고 있기 때문에 refetch를 호출하면 useAxios가 다시 호출되는 원리를 가지고 있음.
