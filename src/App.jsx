import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { buckets } from "./data/Data";

//routes
import Dashboard from "./routes/Dashboard";
import Add from "./routes/Add"; //add a new bucket
import Bucket from "./routes/Bucket";
import AddPayment from "./components/AddPayment";

const App = () => {

  const [selectedBucket, setSelectedBucket] = useState({});

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard buckets={buckets} setSelectedBucket={setSelectedBucket} />
    },
    {
      path: "/add-new-bucket",
      element: <Add buckets={buckets} />
    },
    {
      path: "/buckets/:bucket-name",
      element: <Bucket buckets={buckets} selectedBucket={selectedBucket} />,
      children: [

      ]
    },
    {
      path: "/buckets/:bucket-name/new-payment",
      element: <AddPayment buckets={buckets} selectedBucket={selectedBucket} />
    },
  ])

  return (
    <div className="w-screen min-h-screen bg-background">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
