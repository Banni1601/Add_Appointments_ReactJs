import "./styles.css";
import { v4 as uuidv4 } from "uuid";
import { Component } from "react";
import Appointments from "./components/Appointments/Appointments.jsx";

class App extends Component {
  state = { text: "", date: "", list: [], isStarted: false };

  newAppointment = (event) => {
    event.preventDefault();
    const { text, date, list } = this.state;
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    if (text.length > 0 && date.length > 0) {
      const dateee = new Date(date).getDate();
      const month = new Date(date).getMonth();
      const year = new Date(date).getFullYear();
      const DATE = `${dateee} ${months[month]} ${year}`;
      const newItem = {
        user_id: uuidv4(),
        title: text,
        date: DATE,
        isLiked: false,
      };
      this.setState((prevState) => ({
        list: [...prevState.list, newItem],
        text: "",
        date: "",
      }));
    }
  };

  textInput = (event) => {
    const { text } = this.state;
    this.setState({ text: event.target.value });
  };

  dateInput = (event) => {
    const { date } = this.state;
    this.setState({ date: event.target.value });
  };

  likeAppointment = (user_id) => {
    const { list } = this.state;
    this.setState((prevState) => ({
      list: prevState.list.map((i) => {
        if (i.user_id === user_id) {
          return { ...i, isLiked: !i.isLiked };
        }
        return i;
      }),
    }));
  };

  modifyTheAppointments = () => {
    const { isStarted } = this.state;
    this.setState({ isStarted: !isStarted });
  };

  modifyTheAppointmentss = () => {
    const { list, isStarted } = this.state;
    if (isStarted) {
      return list.filter((i) => i.isLiked === true);
    }
    return list;
  };

  render() {
    const { text, date, list, isStarted } = this.state;
    const MainList = this.modifyTheAppointmentss();
    //console.log(isStarted);
    return (
      <div className="App">
        <form action="" onSubmit={this.newAppointment}>
          <input type="text" value={text} onChange={this.textInput} />
          <input type="date" value={date} onChange={this.dateInput} />
          <button type="submit">Add Appoinment</button>
        </form>
        <button type="button" onClick={this.modifyTheAppointments}>
          started
        </button>
        <div>
          {MainList.map((i) => (
            <Appointments
              data={i}
              key={i.user_id}
              likeAppointment={this.likeAppointment}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
