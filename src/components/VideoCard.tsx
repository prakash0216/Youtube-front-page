export function VideoCard(props: any) {
  return (
    <div className="p-3 cursor-pointer">
      <img className="rounded-xl" src={props.thumbnail}></img>
      <div className="grid grid-cols-12 pt-2 ">
        <div className="col-span-1">
          <img
            className="rounded-full w-20 h-20"
            src={props.profileimage}
          ></img>
        </div>
        <div className="col-span-11 pl-5">
          {props.title}
          <div className="text-gray-400 text-base">{props.author}</div>
          <div className="text-gray-400 text-base">
            {props.views} | {props.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
}
