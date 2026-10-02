import './index.css'
import ReactMarkdown from 'react-markdown'

export function Recipe({ recipe }) {
    return (
        <section>
            <h2>Chef Claude Recommends:</h2>
            <article className="suggested-recipe-container" aria-live="polite">
                <ReactMarkdown>{recipe}</ReactMarkdown>
            </article>
        </section>
    )
}