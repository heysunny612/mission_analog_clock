const setTimeEvent = (elements) => {
  const [$hour, $minutes, $seconds] = elements;

  //실제 시간 및 1초당 움직이는 각도구하기
  setInterval(() => {
    const date = new Date();
    const hour = date.getHours() % 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    $seconds.style.setProperty('--deg', seconds * 6);
    $minutes.style.setProperty('--deg', minutes * 6 + seconds * 0.1);
    $hour.style.setProperty('--deg', hour * 30 + minutes * 0.5);
  }, 1000);
};

// 동적으로 DOM 생성
const displayTimeDOM = ($container) => {
  const $hour = document.createElement('div');
  $hour.className = 'hand hour';
  const $minute = document.createElement('div');
  $minute.className = 'hand minute';
  const $second = document.createElement('div');
  $second.className = 'hand second';

  for (let i = 1; i <= 12; i++) {
    const $time = document.createElement('div');
    $time.className = `time time${i}`;

    $time.innerText = i;
    $container.appendChild($time);
  }
  return [$hour, $minute, $second];
};

const AnalogClock = ($container) => {
  const elements = displayTimeDOM($container);
  $container.append(...elements);
  setTimeEvent(elements);
};

export default AnalogClock;
