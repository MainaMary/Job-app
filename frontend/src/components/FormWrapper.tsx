import Button from "./Button";

interface Props {
  children: JSX.Element;
}
const FormWrapper = ({ children }: Props) => {
  return (
    <div className=" block md:flex justify-center rounded shadow w-1/3 m-auto mt-20">
      {children}
    </div>
  );
};

export default FormWrapper;
