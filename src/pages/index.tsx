import Link from 'next/link';
import { SearchArea } from 'src/components/organisms';

const Home: React.FC = () => {
  return (
    <>
      <SearchArea />
      <Link href={'/search-result'}>検索</Link>
    </>
  );
};

export default Home;
