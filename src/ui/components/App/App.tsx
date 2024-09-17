import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from "../../routes/router";
import { ReactElement } from 'react';

export default function App(): ReactElement {
  return (
    <div className="page">
      <RouterProvider router={router}/>
    </div>
  );
}
