import { Outlet } from "react-router-dom";
import Header from "./Header";

const WebLayout : React.FC = () => {
  return(
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default WebLayout