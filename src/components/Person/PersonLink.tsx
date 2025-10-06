import { Person } from '../../types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  people: Person[];
  name: string;
};

export const PersonLink: React.FC<Props> = ({ people, name }) => {
  const pickedPerson = people.find(p => p.name === name);

  if (!pickedPerson) {
    return <>{name}</>;
  }

  return (
    <Link
      to={`/people/${pickedPerson.slug}`}
      className={classNames({ 'has-text-danger': pickedPerson.sex === 'f' })}
    >
      {pickedPerson.name}
    </Link>
  );
};
