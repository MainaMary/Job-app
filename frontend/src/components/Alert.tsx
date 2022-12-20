import { useAppContext } from "../context/appContext";

const Alert = () => {
  const { alertText, alertType } = useAppContext();
  return (
    <div
      className={`rounded py-2 px-3 text-center w-full ${
        alertType === "danger" ? " bg-rose-400 text-[red]" : "bg-green-400"
      }`}
    >
      {alertText}
    </div>
  );
};

export default Alert;
