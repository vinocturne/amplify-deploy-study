"use client";

import "./../app/app.css";
import "@aws-amplify/ui-react/styles.css";

export default function App() {

  return (
    <main>
      <h1>My todos</h1>
      <button onClick={() => console.log('++')}>+ new</button>
      <ul>
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/">
          Review next steps of this tutorial.
        </a>
      </div>
    </main>
  );
}
