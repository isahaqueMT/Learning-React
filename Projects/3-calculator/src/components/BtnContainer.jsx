import style from "./BtnContainer.module.css";

const BtnContainer = () => {
  const btnName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={style.btnContainer}>
      {btnName.map((btnName) => (
        <button key={btnName} className={style.btnNumber}>{btnName}</button>
      ))}
    </div>
  );
};

export default BtnContainer;
