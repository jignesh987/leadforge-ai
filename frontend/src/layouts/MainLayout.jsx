import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function MainLayout({ children }) {

  return (

    <div className="flex">

      <Sidebar />

      <div className="flex-1">

        <Header />

        {children}

      </div>

    </div>

  );

}