import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { v4 as uuidv4 } from 'uuid';

//routes
import Dashboard from "./routes/Dashboard";
import Add from "./routes/Add"; //add a new bucket
import Bucket from "./routes/Bucket";
import AddPayment from "./components/AddPayment";

const App = () => {

  const [buckets, setBuckets] = useState([]);

  useEffect(() => {
    const prevBuckets = buckets;

    if (prevBuckets.length && prevBuckets !== JSON.parse(localStorage.getItem("buckets"))) {
      localStorage.setItem("buckets", JSON.stringify(buckets));
      console.log("Saved buckets");
    } else {
      console.log("Skipping bucket update");
    }

  }, [buckets])

  useEffect(() => {
    let parsedBuckets = JSON.parse(localStorage.getItem("buckets"));
    parsedBuckets ? setBuckets(parsedBuckets) : setBuckets([]);
  }, [])

  const addBucket = (name, goal) => {
    // Check if both name and goal are provided and not empty
    if (name && goal) {
      const newBucket = {
        id: uuidv4(),
        name: name,
        goal: goal,
        saved: 0, // You can set this to any default value
        payments: {} // Empty payments object initially
      };

      setBuckets([...buckets, newBucket]);
    } else {
      console.error("Name and goal must be provided.");
    }
  };

  const handleAddPayment = (dd, mm, yy, paymentAmount) => {
    if (dd && mm && yy && paymentAmount) {
      let date = `${dd}/${mm}/${yy}`;

      let paymentDetails = {
        date: date,
        amount: paymentAmount,
        id: uuidv4(),
      };

      // Access the current buckets state
      const updatedBuckets = [...buckets];

      updatedBuckets.forEach((bucket) => {
        if (bucket.id === localStorage.getItem("id")) {
          // Check if bucket.payments exists and is an array
          if (!Array.isArray(bucket.payments)) {
            // If it's not an array, initialize it as an empty array
            bucket.payments = [];
          }
          bucket.payments.push(paymentDetails);
          bucket.saved = (parseFloat(bucket.saved) + parseFloat(paymentAmount)).toFixed(2);
        }
      });

      // Update the state with the modified buckets array
      setBuckets(updatedBuckets);
    }
  };



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard buckets={buckets} />
    },
    {
      path: "/add-new-bucket",
      element: <Add buckets={buckets} addBucket={addBucket} />
    },
    {
      path: "/buckets/:bucket-name",
      element: <Bucket buckets={buckets} />,
      children: [

      ]
    },
    {
      path: "/buckets/:bucket-name/new-payment",
      element: <AddPayment buckets={buckets} handleAddPayment={handleAddPayment} />
    },
  ])

  return (
    <div className="w-screen min-h-screen bg-background">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
