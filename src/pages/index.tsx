import Link from 'next/link';
import { SearchArea } from 'src/components/organisms';
import { LoadingModal } from '../components/utils';

const Home: React.FC = () => {
  return (
    <>
      <LoadingModal label={'読み込み中'} />
      <SearchArea />
      <Link href={'/search-result'}>検索</Link>
    </>
  );
};

export default Home;
