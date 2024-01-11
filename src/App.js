import Todo from'../src/Todo/Todo'
import CovidApp from '../src/Covid/Covid'
import MovieApp from './MovieApp/MovieApp';
import Emoji from './EmojiApp/Emoji'
function App() {
  return (
    <div className="App">
      <h1 > good morning </h1>
      <center>
      <Todo/>
      <CovidApp/>
      <MovieApp/>
      <Emoji/>
      </center>
    </div>
  );
}

export default App;
