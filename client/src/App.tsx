import Header from "./components/Header";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <div>
      <div className="bg-black text-white text-center py-2 text-[16px] underline"><a href="/#">FREE SHIPPING for orders over $300. Order today</a></div>
      <div className="sticky top-0 bg-white">
        <Header />
      </div>
      <HomePage />
    </div>
  );
}

export default App;
