import Header from "./components/Header";
import Postfeed from "./components/PostFeed";
import UserHasLoggedInFeed from "./components/UserHasLoggedInFeed";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-row flex-1">
        <Postfeed />
        <UserHasLoggedInFeed />
      </main>
    </>
  );
}

export default App;
