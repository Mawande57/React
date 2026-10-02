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
import './index.css'
import { useState } from "react";


export default function App() {
  /**
     * Challenge: Convert the code below to use an array
     * held in state instead of a local variable. Initialize 
     * the state array as an empty array
     * 
     * Don't worry about fixing `addFavoriteThing` quite yet.
     */
  const [myFavoriteThings, setMyFavouriteThings] = useState([]);
  const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
  "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
  const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)
  
  function addFavoriteThing() {
    setMyFavouriteThings(prevFavThings => [...prevFavThings , allFavoriteThings[prevFavThings.length]]);
  }
  
  return (
    <>
      <Header />
      <Form />
    </>
      
  )
}

/*   <main>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">
        {thingsElements}
      </section>
    </main>
*/