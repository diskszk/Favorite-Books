import Link from 'next/link';
import { SearchArea } from 'src/components/organisms';
import { LoadingModal, ErrorMessageModal } from '../components/utils';

const Home: React.FC = () => {
  return (
    <>
      {/* <LoadingModal label={'Loading...'} /> */}
      {/* <ErrorMessageModal errorMessage={'エラーが発生しました。\nエラーが発生しました。'} /> */}
      <SearchArea />
      <Link href={'/search-result'}>検索</Link>
    </>
  );
};

export default Home;
