import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { buckets } from "./data/Data";

//routes
import Dashboard from "./routes/Dashboard";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard buckets={buckets} />
    },
  ])

  return (
    <div className="w-screen min-h-screen bg-background">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
