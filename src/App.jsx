/**
 * Challenge:
 * - Create a Contact component in another file
 * - Move one of the contact card articles below into that file
 * - import and render 4 instances of that contact card
 *     - Think ahead: what's the problem with doing it this way?
 */
import Contact from "./contact.jsx"
import cat from './images/mr-whiskerson.png'
import Joke from './joke.jsx';
import Header from './header.jsx';
import Form from './Form.jsx'

function App() {
    return (
        <>
           <Header />
           <Form />
        </>
      

    )
}

export default App