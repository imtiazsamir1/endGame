import React from "react";

const Home = () => {
  return (
    <div>
      <div
        class="hero min-h-screen"
        // style="background-image: url(https://placeimg.com/1000/800/arch);"
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">End Game</h1>
            <p class="mb-5">
              This is end game projects.It's create task and complete task.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
