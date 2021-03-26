import Link from 'next/link';
import { getApple } from '../lib/api/getApple';

const SignIn: React.FC = () => {
  const handleHello = async () => {
    const res = await getApple();

    console.log(res);
  };

  return (
    <div>
      <button onClick={handleHello}>API</button>

      <Link href="/">もどる</Link>
    </div>
  );
};

export default SignIn;
