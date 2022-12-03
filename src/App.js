import Header from './components/Header'
import Courses from './components/Courses'
import Selectors from './components/Selectors'
import {useState} from 'react'

function App() {
  const [monday, setMonday] = useState([
    {
      id: 0,
      text: 'Laborator: FP',
      start: '08:00',
      end: '10:00',
      room: 'L308',
      teacher: 'Stanean Tudor',
      onlyOnOddWeeks: false,
    },
    {
      id: 1,
      text: 'Seminar: ASC',
      start: '10:00',
      end: '12:00',
      room: 'A312',
      teacher: 'Sotropa Diana',
      onlyOnOddWeeks: true,
    },
    {
      id: 2,
      text: 'Seminar: Analiza',
      start: '14:00',
      end: '16:00',
      teacher: 'Berinde Stefan',
      onlyOnOddWeeks: false,
    }
  ])

  const [tuesday, setTuesday] = useState([
    {
      id: 0,
      text: 'Seminar: Logica',
      start: '12:00',
      end: '14:00',
      room: 'MOS-S15',
      teacher: 'Pop Andreea',
      onlyOnOddWeeks: false,
    },
  ])

  const [wednesday, setWednesday] = useState([
    {
      id: 0,
      text: 'Seminar: Algebra',
      start: '08:00',
      end: '10:00',
      room: 'A313',
      teacher: 'Aron M',
      onlyOnOddWeeks: false,
    },
    {
      id: 2,
      text: 'Curs: PC',
      start: '12:00',
      end: '14:00',
      room: 'C310',
      teacher: 'Bota Florentin',
      onlyOnOddWeeks: false,
    },
    {
      id: 3,
      text: 'Curs: ASC',
      start: '18:00',
      end: '20:00',
      room: 'A2',
      teacher: 'Vancea Alexandru',
      onlyOnOddWeeks: false,
    } 
  ])

  const [thursday, setThursday] = useState([
    {
      id: 0,
      text: 'Curs: Algebra',
      start: '08:00',
      end: '10:00',
      room: 'A2',
      teacher: 'Modoi Gheorghe',
      onlyOnOddWeeks: false,
    },
    {
      id: 1,
      text: 'Curs: Logica',
      start: '10:00',
      end: '12:00',
      room: 'A2',
      teacher: 'Pop Andreea',
      onlyOnOddWeeks: false,
    },
    {
      id: 2,
      text: 'Curs: FP',
      start: '12:00',
      end: '14:00',
      room: 'A2',
      teacher: 'Czibula Istvan',
      onlyOnOddWeeks: false,
    },
    {
      id: 3,
      text: 'Laborator: ASC',
      start: '16:00',
      end: '18:00',
      room: 'L307',
      teacher: 'Coroiu Adriana',
      onlyOnOddWeeks: false,
    }
  ])

  const [friday, setFriday] = useState([
    {
      id: 0,
      text: 'Seminar: FP',
      start: '10:00',
      end: '12:00',
      room: 'A303',
      teacher: "Gabi Mircea",
      onlyOnOddWeeks: false,
    },
    {
      id: 1,
      text: 'Curs: Analiza',
      start: '14:00',
      end: '16:00',
      room: 'A2',
      teacher: 'Berinde Stefan',
      onlyOnOddWeeks: false,
    } 
  ])

  return (
    <>
      <Header title="UBB Schedule"/>
      <Selectors/>
      <Courses days={[monday, tuesday, wednesday, thursday, friday]}/>
    </>
  );
}

export default App;
