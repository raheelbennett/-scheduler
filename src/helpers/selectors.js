export function getAppointmentsForDay(state, day) {
  const [stateOfDay] = state.days.filter((dayObj) => dayObj.name === day);
  const appointmentsArrayForDay = (stateOfDay ? stateOfDay.appointments.map( (appointment) => state.appointments[appointment] ) : []);
  return appointmentsArrayForDay;
};


export function getInterview(state, interview) {
  if(!interview) {
    return null;
  }
  const interviewer = state.interviewers[interview.interviewer];
  return {...interview, interviewer};
};

export function getInterviewersForDay (state, day) {
  const [stateOfDay] = state.days.filter((dayObj) => dayObj.name === day);
  const interviewersArrayForDay = (
    stateOfDay ? stateOfDay.interviewers.map( (interviewer) => state.interviewers[interviewer] ) : []);
  return interviewersArrayForDay;
}