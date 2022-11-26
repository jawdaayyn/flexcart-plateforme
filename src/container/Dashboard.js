// components
import Cart from "../components/organism/Cart";
import Tools from "../components/organism/Tools";
import Navbar from "../components/shared/Navbar";

function App() {
  const { userInfo } = useSelector((state) => state.user);
  return (
    <main className="h-screen pt-[50px] bg-darkBlue text-black">
      <Navbar />
      <Tools email={userInfo.email}/>
      <Cart />
    </main>
  );
}

export default App;
