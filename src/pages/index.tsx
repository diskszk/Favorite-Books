import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <>
      <Link href={'/search-result'}>検索</Link>
    </>
  );
};

export default Home;
