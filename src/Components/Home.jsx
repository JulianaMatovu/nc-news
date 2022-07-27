import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <h1>NC News</h1>
      <div className="topicBoxes">
        <section id="cookingTopicBox">
          <strong>
            <Link to={`/articles/cooking`}>Cooking</Link>
          </strong>
        </section>

        <section id="footballTopicBox">
          <strong>
            <Link to={`/articles/football`}>Football</Link>
          </strong>
        </section>

        <section id="codingTopicBox">
          <strong>
            <Link to={`/articles/coding`}>Coding</Link>
          </strong>
        </section>
      </div>
    </>
  );
}
