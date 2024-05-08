import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen mt-2 w-11/12">
      <div className="mx-auto w-1/2">
      <h1 className="text-4xl">Oppps !!! </h1>
        <Link
          className="text-black bg-green-400 btn text-center"
          to={"/"}
        >
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
