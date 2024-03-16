import clsx from "clsx"

export default function Message({ message }) {
  const sender = localStorage.getItem("user_id") == message.user
  return (
    <div className='w-full'>
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
          <p className='flex justify-end'>
            <small className={clsx(sender ? "text-white" : "text-black")}>
              {message.timestamp}
            </small>
          </p>
        </div>
      </div>
    </div>
  )
}
