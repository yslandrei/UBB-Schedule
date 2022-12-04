import Header from './components/Header'
import Courses from './components/Courses'
import Selectors from './components/Selectors'
import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [table, setTable] = useState({
    Ziua: [
      {
        ora: "Orele",
        frecventa: "Frecventa",
        sala: "Sala",
        formatie: "Formatia",
        tip: "Tipul",
        disciplina: "Disciplina",
        prof: "Cadrul didactic"
      }
    ],
    Luni: [
      {
        ora: "8-10",
        frecventa: "sapt. 1",
        sala: "A313",
        formatie: "211",
        tip: "Seminar",
        disciplina: "Arhitectura sistemelor de calcul",
        prof: "Lect. SOTROPA Diana"
      },
      {
        ora: "10-12",
        frecventa: " ",
        sala: "C510",
        formatie: "211/2",
        tip: "Laborator",
        disciplina: "Arhitectura sistemelor de calcul",
        prof: "Lect. VANCEA Alexandru"
      }
    ],
    Marti: [
      {
        ora: "10-12",
        frecventa: " ",
        sala: "A322",
        formatie: "211",
        tip: "Seminar",
        disciplina: "Algebra",
        prof: "Drd. Orzan Alexandru"
      },
      {
        ora: "12-14",
        frecventa: " ",
        sala: "2/I",
        formatie: "211",
        tip: "Seminar",
        disciplina: "Analiza matematica",
        prof: "Lect. BERINDE Stefan"
      },
      {
        ora: "14-16",
        frecventa: " ",
        sala: "MOS-S15",
        formatie: "211",
        tip: "Seminar",
        disciplina: "Logica computationala",
        prof: "Lect. POP Andreea"
      }
    ],
    Miercuri: [
      {
        ora: "8-10",
        frecventa: " ",
        sala: "6/II",
        formatie: "I1",
        tip: "Curs",
        disciplina: "Psihologie educationala (facultativ)",
        prof: "C.d.asociat PANA Anca"
      },
      {
        ora: "10-12",
        frecventa: " ",
        sala: "L336",
        formatie: "I1",
        tip: "Laborator",
        disciplina: "Programare in C",
        prof: "Asist. BOTA Florentin"
      },
      {
        ora: "13-14",
        frecventa: " ",
        sala: "C310",
        formatie: "I1",
        tip: "Curs",
        disciplina: "Programare in C",
        prof: "Asist. BOTA Florentin"
      },
      {
        ora: "16-18",
        frecventa: " ",
        sala: "L404",
        formatie: "211/2",
        tip: "Laborator",
        disciplina: "Fundamentele programarii",
        prof: "Lect. POP Andreea"
      },
      {
        ora: "18-20",
        frecventa: " ",
        sala: "A2",
        formatie: "I1",
        tip: "Curs",
        disciplina: "Arhitectura sistemelor de calcul",
        prof: "Lect. VANCEA Alexandru"
      }
    ],
    Joi: [
      {
        ora: "8-10",
        frecventa: " ",
        sala: "A2",
        formatie: "I1",
        tip: "Curs",
        disciplina: "Algebra",
        prof: "Conf. MODOI Gheorghe"
      },
      {
        ora: "10-12",
        frecventa: " ",
        sala: "A2",
        formatie: "I1",
        tip: "Curs",
        disciplina: "Logica computationala",
        prof: "Lect. POP Andreea"
      },
      {
        ora: "12-14",
        frecventa: " ",
        sala: "A2",
        formatie: "I1",
        tip: "Curs",
        disciplina: "Fundamentele programarii",
        prof: "Prof. CZIBULA Istvan"
      },
      {
        ora: "14-16",
        frecventa: " ",
        sala: "C335",
        formatie: "211",
        tip: "Seminar",
        disciplina: "Fundamentele programarii",
        prof: "Lect. MIRCEA Ioan Gabriel"
      },
      {
        ora: "18-20",
        frecventa: " ",
        sala: "L439",
        formatie: "211/1",
        tip: "Laborator",
        disciplina: "Arhitectura sistemelor de calcul",
        prof: "Lect. COROIU Adriana"
      }
    ],
    Vineri: [
      {
        ora: "12-14",
        frecventa: " ",
        sala: "A2",
        formatie: "I1",
        tip: "Curs",
        disciplina: "Comunicare si dezvoltare profesionala in informatica",
        prof: "Prof. MOTOGNA Simona"
      },
      {
        ora: "12-14",
        frecventa: " ",
        sala: "L001",
        formatie: "211/1",
        tip: "Laborator",
        disciplina: "Fundamentele programarii",
        prof: "Lect. POP Andreea"
      },
      {
        ora: "14-16",
        frecventa: " ",
        sala: "A2",
        formatie: "I1",
        tip: "Curs",
        disciplina: "Analiza matematica",
        prof: "Lect. BERINDE Stefan"
      },
      {
        ora: "16-18",
        frecventa: " ",
        sala: "2/I",
        formatie: "I1",
        tip: "Seminar",
        disciplina: "Psihologie educationala (facultativ)",
        prof: "C.d.asociat Secara Eugen"
      }
    ]
  });

  const onSubmit = ({selectedSpec, selectedYear, selectedGroup, selectedSemigroup}) => {
    console.log(selectedSpec, selectedYear, selectedGroup, selectedSemigroup)
    let selectedURL = `http://localhost:4000/api/${selectedSpec}/${selectedYear}/${selectedGroup}/${selectedSemigroup}`
    console.log(selectedURL)
    fetch(selectedURL)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setTable(data)})
  }

  return ( 
    <>
      <Header title="UBB Schedule"/>
      <Selectors onSubmit={onSubmit}/>
      <Courses days={table}/>
      <footer></footer>
    </>
  );
}

export default App;
