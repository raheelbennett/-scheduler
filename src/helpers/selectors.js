export function getAppointmentsForDay(state, day) {

  const [stateOfDay] = state.days.filter((dayObj) => dayObj.name === day);
  
  const appointmentsArrayForDay = (stateOfDay ? stateOfDay.appointments.map( (appointment) => state.appointments[appointment] ) : []);
  console.log("mytest",appointmentsArrayForDay);

  return appointmentsArrayForDay;
}