export const HomePage = () => {
  return (
    <div>
      <h2>Zadání</h2>

      <p>
        Cílem je vytvořit jednoduchou SPA (single page app) v Reactu, která bude pracovat s users, posts a comments.
        Aplikace by měla přehledně a responsivně zobrazit detail uživatele, seznam všech článků a detail článku včetně
        jeho komentářů. Data jsou k dispozici na https://jsonplaceholder.typicode.com/, přesněji /users, /posts,
        /comments.
      </p>

      <ul>
        <li>Pouziti css-in-js knihovny - EmotionJS, styled-components, ...</li>
        <li>
          Očekává se využití Reactu, funkcionálních komponent a React Hooks (https://reactjs.org/docs/hooks-intro.html)
        </li>
        <li>Kód musí být psany v TypeScriptu</li>
        <li>Výsledek očekáváme ideálně na Githubu.</li>
      </ul>
    </div>
  );
};
