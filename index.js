import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Lab 7 Project</h1>
      <p>
        Welcome! Go to the <Link href="/part-b">Part B</Link> page to see the WeatherAPI widget.
      </p>
    </div>
  );
};

export default Home;
