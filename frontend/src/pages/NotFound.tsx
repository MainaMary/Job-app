import NotFoundImg from "../assets/notFound.svg";
import Error from "../components/Error";
const NotFound = () => {
  return (
    <Error
      img={NotFoundImg}
      title="Page not found.Please try again"
      label="Back home"
    />
  );
};

export default NotFound;
