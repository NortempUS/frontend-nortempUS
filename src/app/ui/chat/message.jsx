import clsx from "clsx";

export default function Message({ sender }) {
  return (
    <div className="w-full">
      <div className={clsx("flex", sender ? "justify-end" : "justify-start")}>
        <div
          className={clsx(
            "w-5/12 m-2 my-3 h-20 p-3 rounded-md",
            sender ? "bg-blue-500" : "bg-gray-200"
          )}
        >
          <p className={clsx(sender ? "text-white" : "text-black")}>
            Hola, ¿cómo estás?
          </p>
        </div>
      </div>
    </div>
  );
}
