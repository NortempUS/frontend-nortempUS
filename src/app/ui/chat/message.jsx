import clsx from "clsx";

export default function Message({ message }) {
  const sender = message.user === 1;
  const date = new Date(message.timestamp);
  const formattedDate = `${date.getFullYear()}-${String(
    date.getMonth() + 1
  ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")} ${String(
    date.getHours()
  ).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;

  return (
    <div className="w-full">
      <div className={clsx("flex", sender ? "justify-end" : "justify-start")}>
        <div
          className={clsx(
            "flex flex-col justify-between w-5/12 m-2 my-3 h-20 p-3 rounded-md",
            sender ? "bg-blue-500" : "bg-gray-200"
          )}
        >
          <p className={clsx(sender ? "text-white" : "text-black")}>
            {message.message}
          </p>
          <p className="flex justify-end">
            <small className={clsx(sender ? "text-white" : "text-black")}>
              {formattedDate}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}
