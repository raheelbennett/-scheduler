import { useState, useEffect } from "react";
import { getAppointmentsForDay } from "helpers/selectors";
import axios from "axios";
export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  const updateSpots = (appointments) => {
    const appointmentsForDay = getAppointmentsForDay({ ...state, appointments }, state.day);
    const nullAppts = appointmentsForDay.filter((appointment) => !appointment.interview);
    const spots = nullAppts.length;
    let dayIndex;
    state.days.forEach((day, index) => day.name === state.day && (dayIndex = index));
    const newDay = { ...state.days[dayIndex], spots };
    const newDays = [...state.days];
    newDays[dayIndex] = newDay;
    setState((prev) => ({ ...prev, days: newDays, appointments }));
  };

  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios.put(`/api/appointments/${id}`, { interview }).then((response) => {
      /*instead of passing the appointment in setState here we can pass the appointments to the updateSpots functoin which not only uses it as updated data to canculate spots we can also pass it in setState at the same time */
      updateSpots(appointments);
    });
  };

  const cancelInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios.delete(`api/appointments/${id}`).then((response) => {
      /*instead of passing the appointment in setState here we can pass the appointments to the updateSpots functoin which not only uses it as updated data to canculate spots we can also pass it in setState at the same time */
      updateSpots(appointments);
    });
  };

  const setDay = (day) => setState((prev) => ({ ...prev, day }));

  return { state, setDay, bookInterview, cancelInterview };
}
