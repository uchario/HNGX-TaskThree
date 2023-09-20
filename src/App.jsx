import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './routes/Root';
import Signin from './routes/Signin';
import Error from './routes/Error';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Signin/>,
        errorElement: <Error/>
      },
      {
        path: 'gallery',
        element: <Root/>,
      }
    ]

  }
]);

function App() {

  return <RouterProvider router={router}/>;
}

export default App
