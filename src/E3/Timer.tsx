import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";
import { FC, useEffect } from "react";

class Timer{

  constructor() {
    makeAutoObservable(this)
  }

  secondsPassed = 0

  increase(){
    this.secondsPassed++;
  }
  reset(){
    this.secondsPassed = 0;
  }
}

const myTimer = new Timer();

type PropsTyep  = {timer: Timer}
const TimerView = observer((props: PropsTyep)=>{
  const {timer} =props

  return <button onClick={()=>timer.reset()}>{timer.secondsPassed} 重置</button>
})

export const Demo: FC = () => {
  useEffect(() => {
    const id = setInterval(()=>{
      myTimer.increase()
    },1000)
    // 组件销毁
    return ()=>{
      clearInterval(id)
    }
  }, []);
  return <div>
    <TimerView timer={myTimer} />
  </div>
}


