import './styles.css';
import Counter from '../../components/Counter'

function Main() {
  return (
    <div className="container-main">
      <Counter title="Counter 1" />
      <Counter title="Counter 2"/>
    </div>
  );
}

export default Main;
