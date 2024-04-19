import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { buckets } from "./data/Data";

//routes
import Dashboard from "./routes/Dashboard";
import Add from "./routes/Add"; //add a new bucket
import Bucket from "./routes/Bucket";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard buckets={buckets} />
    },
    {
      path: "/add-new-bucket",
      element: <Add buckets={buckets} />
    },
    {
      path: "/bucket/:bucket-name",
      element: <Bucket />
    },
  ])

  return (
    <div className="w-screen min-h-screen bg-background">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
