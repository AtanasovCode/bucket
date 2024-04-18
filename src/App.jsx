import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//routes
import Dashboard from "./routes/Dashboard";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />
    },
  ])

  return (
    <div className="w-screen min-h-screen bg-background">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
