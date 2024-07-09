import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, Link, Navigate, Outlet, RouterProvider } from 'react-router-dom';
import Exercise1Container from './exercise1/Exercise1Container';
import Exercise2Container from './exercise2/Exercise2Container';
import Exercise3Container from './exercise3/Exercise3Container';

const router = createBrowserRouter([
  {
      path:'/',
      element: (<>
      <ul className='App-header'>
          <li><Link to={'exercise1'}>Exercise 1</Link> </li>
          <li><Link to={'exercise2'}>Exercise 2</Link> </li>
          <li><Link to={'exercise3'}>Exercise 3</Link> </li>
        </ul>
        <div><Outlet /></div>
        </>
      ),
      children: [
          /* existing routes */
          {
              path: 'exercise1',
              element: (<Exercise1Container/>),
            },
            {
              path: 'exercise2',
              element: (<Exercise2Container />),
            },
            {
                path:'exercise3',
                element: (<Exercise3Container/>),
            },
                  ]
  },
  {
      path:'*',
      element: (<Navigate to={'/'}/>),
  },
  ]);
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
