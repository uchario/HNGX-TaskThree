import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './routes/Root';
import Signin from './routes/Signin';
import Error from './routes/Error';

import { loader as moviesLoader } from './loaders/movie-loader';
import { loader as movieLoader } from './loaders/movie-detail-loader';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Signin/>,
        id: 'movies',
        loader: moviesLoader,
        errorElement: <Error/>
      },
      {
        path: 'gallery',
        element: <Root/>,
        id: 'movie-detail',
        loader: movieLoader
      }
    ]

  }
]);

function App() {

  return <RouterProvider router={router}/>;
}

export default App
