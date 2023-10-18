import { useSelector } from 'react-redux';
import { selectValue, selectStep } from '../../store/counter/counter.selectors';
import { counterActions } from '../../store/counter/counter.actions';
import { useAction } from '../../store/hooks';
import { Button, Input, Text } from '../../components/Counter';

const CounterContainer = () => {
  const plusCounter = useAction(counterActions.plusCounter);
  const minusCounter = useAction(counterActions.minusCounter);
  const resetCounter = useAction(counterActions.resetCounter);
  const setStep = useAction(counterActions.setStep);

  const plusCounterAsync = useAction(counterActions.plusCounterAsync.request);
  const minusCounterAsync = useAction(counterActions.minusCounterAsync.request);
  const fetchCounterValue = useAction(counterActions.fetchCounterValue.request);

  const value = useSelector(selectValue);
  const step = useSelector(selectStep);

  const handleClickMinusAsync = () => {
    minusCounterAsync();
  };

  const handleClickMinus = () => {
    minusCounter();
  };

  const handleClickReset = () => {
    resetCounter();
  };

  const handleClickPlus = () => {
    plusCounter();
  };

  const handleClickPlusAsync = () => {
    plusCounterAsync();
  };

  const handleChangeStep = (value: string) => {
    const numberedValue = Number(value);

    if (isNaN(numberedValue)) {
      setStep(1);
    } else {
      setStep(numberedValue);
    }
  };

  const handleClickResetByRandomValue = () => {
    fetchCounterValue();
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
