import { useState } from "react";
import "./App.css";
import AllRoutes from "./AllRoutes";
import { Suspense } from "react";
import CustomSpinner from "./components/CustomSpinner";

function App() {
  return (
    <div className="px-8 md:px-16">
      <Suspense fallback={<CustomSpinner/>}>
      <AllRoutes />
      </Suspense>
     
    </div>
  );
}

export default App;
