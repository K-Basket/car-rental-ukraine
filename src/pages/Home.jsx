import { Btn } from 'components/Btn';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        height: '70vh',
      }}
    >
      <h1>Home page</h1>
      <Btn
        onClick={() => {
          navigate('/catalog');
        }}
      >
        Go to Catalog
      </Btn>
    </div>
  );
};

export default Home;
