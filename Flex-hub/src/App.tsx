import Navbar from "@/components/navbar";
import { useState } from "react";
import { SelectedPage } from "@/shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  return (
    <div className='app bg-gray-50'>
      <Navbar
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      />
    </div>
  )
}

export default App
