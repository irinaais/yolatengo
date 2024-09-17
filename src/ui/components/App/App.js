import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from "../../routes/router";

export default function App() {
  return (
    <div className="page">
      <RouterProvider router={router}/>
    </div>
  );
}
