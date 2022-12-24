import JobImg from "../assets/joboffers.svg";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className=" block md:flex  justify-between min-h-[calc(100% - 80px)] items-center mt-24">
      <div className="w-full md:w-1/2">
        <h1>
          Job <span className="text-primary-color">Tracking</span> App
        </h1>
        <div className=" w-full md:w-[70%] py-8">
          <p className="mb-8 text-lg">
            Find your next job on
            <span className="text-primary-color">JobBag.</span> Explore all the
            current vaccancies from all top employers.
            <br />
            Seize the opportnuity to launch your career and gain experience.
          </p>

          <Button name={<Link to="/login">Log in</Link>} className="w-1/2" />
        </div>
      </div>
      <div className=" hidden md:block w-1/2 h-[300px]">
        <img src={JobImg} alt="job offers" className="w-full " />
      </div>
    </div>
  );
};

export default HomePage;
