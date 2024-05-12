import { createBrowserRouter } from 'react-router-dom';
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import Queries from '../Pages/Queries/Queries';
import MyQueries from '../Pages/MyQueries/MyQueries';
import MyRecommendations from '../Pages/MyRecommendations/MyRecommendations';
import RecommendationsForME from '../Pages/RecommendationsForME/RecommendationsForME';
import Login from '../Pages/Login/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/queries',
        element: <Queries></Queries>,
      },
      {
        path: '/myqueries',
        element: <MyQueries></MyQueries>,
      },
      {
        path: '/myrecommendations',
        element: <MyRecommendations></MyRecommendations>,
      },
      {
        path: '/recommendations',
        element: <RecommendationsForME></RecommendationsForME>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
