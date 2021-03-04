import { Counter } from 'src/components/Counter';
import { Hello } from '../components/Hello';

const Index: React.FC = () => {
  return (
    <>
      <Hello name={'banana'} />
      <Counter />
    </>
  );
};

export default Index;
