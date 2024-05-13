import { createBrowserRouter } from 'react-router-dom';
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import Queries from '../Pages/Queries/Queries';
import MyQueries from '../Pages/MyQueries/MyQueries';
import MyRecommendations from '../Pages/MyRecommendations/MyRecommendations';
import RecommendationsForME from '../Pages/RecommendationsForME/RecommendationsForME';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import PrivateRoute from './PrivateRoute';
import AddQueries from '../Pages/AddQueries/AddQueries';
import ViewDetails from '../Pages/ViewDetails/ViewDetails';
import Update from '../Pages/Update/Update';

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
        element: (
          <PrivateRoute>
            <MyQueries></MyQueries>
          </PrivateRoute>
        ),
      },
      {
        path: '/myrecommendations',
        element: (
          <PrivateRoute>
            <MyRecommendations></MyRecommendations>
          </PrivateRoute>
        ),
      },
      {
        path: '/recommendations',
        element: (
          <PrivateRoute>
            <RecommendationsForME></RecommendationsForME>
          </PrivateRoute>
        ),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/addqueries',
        element: (
          <PrivateRoute>
            <AddQueries></AddQueries>
          </PrivateRoute>
        ),
      },
      {
        path: '/myqueries/:id',
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
      },
      {
        path: '/update/:id',
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
