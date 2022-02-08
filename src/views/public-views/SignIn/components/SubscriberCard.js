import "../css/SubscriberCard.css";
import { Avatar } from "primereact/avatar";

const SubscriberCard = (props) => {
  const data = props.data;
  return (
    <>
      {data.map((item, index) => {
        return (
          <div className="flex flex-column mr-4 justify-content-center p-3 align-items-center SubscriberCard" key={index}>
            <Avatar
              image={item.avatar}
              className="p-mr-2"
              size="xlarge"
              shape="circle"
            />
            <h3 className="mt-2">{item.name}</h3>
            <p>{item.days} days</p>
          </div>
        );
      })}
    </>
  );
};

export default SubscriberCard;
