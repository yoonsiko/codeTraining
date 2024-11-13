import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
            <h2>Time to get YEET!</h2>
            <ul>
                {CORE_CONCEPTS.map((item) => (
                    <CoreConcept key={item.title} {...item} />))}
            </ul>
        </section>
    );
}


// Alternative way for conditional rendering content
/* {!selectedTopic ? <p>Please select a topic</p> : null}
          {selectedTopic ? <div id="tab-content">
            <h3> {EXAMPLES[selectedTopic].title} </h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div> : null} */


// Instead of {tabContent} in line 56
/* { !selectedTopic && <p>Please select a topic</p> }
{
  selectedTopic && (
    <div id="tab-content">
      <h3> {EXAMPLES[selectedTopic].title} </h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
          {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>)
} */

// map or manually generate
/* { CORE_CONCEPTS.map((item) => <CoreConcept {...item} />) }
    <CoreConcept
      title={CORE_CONCEPTS[0].title}
      description={CORE_CONCEPTS[0].description}
      image={CORE_CONCEPTS[0].image} />
    <CoreConcept {...CORE_CONCEPTS[1]} />
    <CoreConcept {...CORE_CONCEPTS[2]} />
    <CoreConcept {...CORE_CONCEPTS[3]} />
  </ul > */