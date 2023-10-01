import { useSelector } from 'react-redux';
import { selectValue, selectStep } from '../../store/counter/counter.selectors';
import { plusCounter, minusCounter, resetCounter, setStep, plusCounterAsync, minusCounterAsync, fetchCounterValue } from '../../store/counter/counter.actions';
import store from '../../store';
import { Button, Input, Text } from '../../components/Counter';

const CounterContainer = () => {
  const value = useSelector(selectValue);
  const step = useSelector(selectStep);

  const handleClickMinusAsync = () => {
    store.dispatch(minusCounterAsync()); // store.dispatch <- 이 부분 깔끔하게 분리할 방법 추천 부탁드립니다!
  };

  const handleClickMinus = () => {
    store.dispatch(minusCounter());
  };

  const handleClickReset = () => {
    store.dispatch(resetCounter());
  };

  const handleClickPlus = () => {
    store.dispatch(plusCounter());
  };

  const handleClickPlusAsync = () => {
    store.dispatch(plusCounterAsync());
  };

  const handleChangeStep = (value: string) => {
    const numberedValue = Number(value);

    if (isNaN(numberedValue)) {
      store.dispatch(setStep(1));
    } else {
      store.dispatch(setStep(numberedValue));
    }
  };

  const handleClickResetByRandomValue = () => {
    store.dispatch(fetchCounterValue());
  };

  return (
    <div>
      <div>
        <Text text={value.toString()} />
      </div>
      <p />
      <div>
        <Button text="- async" onClick={handleClickMinusAsync} />&nbsp;
        <Button text="-" onClick={handleClickMinus} />&nbsp;
        <Button text="c" onClick={handleClickReset} />&nbsp;
        <Button text="+" onClick={handleClickPlus} />&nbsp;
        <Button text="+ async" onClick={handleClickPlusAsync} />
      </div>
      <div>
        <Input value={step.toString()} onChange={handleChangeStep} />
      </div>
      <p />
      <div>
      <Button text="reset by random value" onClick={handleClickResetByRandomValue} />
      </div>
    </div>
  );
};

export default CounterContainer;
