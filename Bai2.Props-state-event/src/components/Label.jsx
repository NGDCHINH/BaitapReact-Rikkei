const Label = (props) => {
  return (
    <div className="flex bg-amber-400 justify-between w-[300px] m-auto rounded-2xl p-2 items-center">
      <div>
        <div>{props.title}</div>
        <div>
          <span>{props.price}</span>
          <span>{props.count}</span>
        </div>
      </div>
      <div>
        <div>
          <img src={props.linkImg} alt="" className="imgIcon" />
        </div>
      </div>
    </div>
  );
};

export default Label;
