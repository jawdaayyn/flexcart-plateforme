// components
import Cart from "../components/organism/Cart";
import Tools from "../components/organism/Tools";
import Navbar from "../components/shared/Navbar";

function App() {
  return (
    <main className="h-screen pt-[50px] bg-darkBlue text-black">
      <Navbar />
      <Tools />
      <Cart />
    </main>
  );
}

export default App;
