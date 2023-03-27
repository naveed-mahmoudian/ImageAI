import React, { useState, useEffect } from "react";
import { Loader, Card, FormField } from "../components";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          Community Showcase
        </h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w[500px]">
          Browse through a collection of other visually stunning images from the
          community. Built with OpenAI's DALL-E AI.
        </p>
      </div>

      <div className="mt-16">
        <FormField />
      </div>
    </section>
  );
};

export default Home;
