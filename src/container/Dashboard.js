// components
import { useSelector } from "react-redux";
import Cart from "../components/organism/Cart";
import Tools from "../components/organism/Tools";

function App() {
  const { userInfo } = useSelector((state) => state.user);
  console.log(userInfo);
  return (
    <main className="h-screen pt-[100px] bg-lightGrey">
      <Tools email={userInfo.email} />
      <Cart />
    </main>
  );
}

export default App;
