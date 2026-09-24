/**
 * Challenge:
 * - Create a Contact component in another file
 * - Move one of the contact card articles below into that file
 * - import and render 4 instances of that contact card
 *     - Think ahead: what's the problem with doing it this way?
 */
import Contact from "./contact.jsx"
import cat from './images/mr-whiskerson.png'

function App() {
    return (
        <div className="contacts">
            
            <Contact name="Mr. Whiskerson"
                     phone="(212) 555-1234"
                     email="mr.whiskaz@catnap.meow"
                     img={cat}
                     />
           
            
        </div>
    )
}

export default App