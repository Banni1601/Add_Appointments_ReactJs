import "./Appointments.css";

const Appointments = (props) => {
  const { data, likeAppointment } = props;
  const { user_id, title, date, isLiked } = data;
  const isLikedTheAppointment = isLiked ? "styleee" : "";
  const likeTheAppointment = () => {
    likeAppointment(user_id);
  };

  return (
    <div className="f-con">
      <div>
        <button onClick={likeTheAppointment}>Like</button>
      </div>
      <div>
        <p className={`${isLikedTheAppointment}`}>{title}</p>
        <p>{date}</p>
        <p>{user_id}</p>
      </div>
    </div>
  );
};

export default Appointments;
