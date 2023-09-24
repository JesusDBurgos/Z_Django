//import { DataUser } from './components/DataUser';
import DataUser from './DataUser';

export default function RData() {
  const listUsers = DataUser.map(Duser =>
    <li key={Duser.id}>
      <p>
          El usuario tiene una emoción de <b>{Duser.Emotion}</b>
          , tiene una edad de {' ' + Duser.Age + ' '} años, 
          un genero {' ' + Duser.Gender + ' '} (F:Femenino/M:Masculino) y
          participo en el app el día: {' ' + Duser.DateCreated + ' '}
      </p>
    </li>
  );
  return <ul>{listUsers}</ul>;
}