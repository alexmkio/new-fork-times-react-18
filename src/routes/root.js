import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <header>
        <h1>New Fork Times w/ Router v6</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
