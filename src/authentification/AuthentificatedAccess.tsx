import useAuthStore from '../appstate/authstate';
import { Redirect } from 'wouter';

interface IProps {
  children: JSX.Element[];
  to: string;
}

const AuthentificatedAccess = ({ children, to }: IProps) => {
  const auth = useAuthStore((store) => store.authenticated);
  const approute = location.pathname.split('/')[1] === to;
  if (!auth && approute) {
    return <Redirect to="/" />;
  } else {
    return <>{children}</>;
  }
};

export default AuthentificatedAccess;
