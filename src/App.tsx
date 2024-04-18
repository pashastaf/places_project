import { useDispatch, useSelector } from 'react-redux';
import './App.module.css'
import { AppDispatch, RootState } from './states/store';
import { changeTest } from './states/restPlace';

export default function App() {
  const testStore = useSelector((state: RootState) => state.test)
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      {testStore.test && testStore.test.map((el,index) => {
        return(
          <button onClick={() => dispatch(changeTest({index:index}))} key={index}>{el}</button>
        )
      })}
    </>
  )
}

