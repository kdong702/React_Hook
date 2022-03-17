import React, { useState , useEffect ,useContext,useCallback,useMemo} from 'react';
import './App.css';
// import ContextSample from './ContextSample';
// import Counter from './Counter2';
//  import Info from './Info2';
 import Average from './Average';


 const getAverage = numbers => {
  console.log('평균값 계산중..');
  if (numbers.length === 0) {
    console.log("numbers" + numbers);
    return 0;
  }
  const sum = numbers.reduce((a, b) => a + b);
  console.log("numbers2의 값 " + numbers);
  return sum / numbers.length;
};


function App() {


  const [list, setList] = useState([]);
  const [number, setNumber] = useState(0);

  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링 될 때만 함수 생성
  const onInsert = useCallback(
    e => {
      console.log("onInsert 작동?");
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("10");
      console.log("1111");
    },
    [number]
  ); // number 혹은 list 가 바뀌었을 때만 함수 생성

  const avg = useMemo(() => getAverage(list),[number]);
  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균 값:</b> {avg}
      </div>
    </div>
  );
}




export default App;
