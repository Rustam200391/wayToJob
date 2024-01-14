const xRay = 0;

let destination = prompt("Введите название места назначения");
let wayToDestination = prompt(
  "Введите расстояние в км до " + " " + `${destination}`
);
let duration = prompt(
  "Введите количество часов за которое вам нужно преодолеть" +
    " " +
    `${wayToDestination}` +
    " км ",
  "что бы прибыть в" + `${destination}`
);

let speedToDriveRounded = wayToDestination / duration;
let speedToDrive = Math.round(speedToDriveRounded);
// округляем
alert(
  "До" +
    " " +
    `${destination}` +
    " " +
    "вы будете ехать со скоростью" +
    " " +
    `${speedToDrive}` +
    " " +
    "км/ч"
);
