const Nbar = (props) => {
  return (
    <div className="flex bg-neutral-400 rounded-lg p-8 w-[300px] h-[100px] m-auto justify-between">
      <div>
        <img src={props.img} alt="" className="h-[50px]" />
      </div>
      <div>
        <span className="">{props.subtitle}</span>
      </div>
    </div>
  );
};

export default Nbar;
