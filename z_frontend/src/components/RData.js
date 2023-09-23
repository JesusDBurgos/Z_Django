import { DataUser } from './DataUser';

export default function RData() {
  const listUsers = DataUser.map(Duser =>
    <li key={Duser.id}>
      <p>
        <b>{Duser.Emotion}</b>
          Tiene una edad de:          {' ' + Duser.Age + ' '}
          Un genero de:               {' ' + Duser.Gender + ' '}
          Participo en el app el día: {' ' + Duser.DateCreated + ' '}
      </p>
    </li>
  );
  return <ul>{listUsers}</ul>;
}