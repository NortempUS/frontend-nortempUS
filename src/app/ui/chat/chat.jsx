import Message from "./message";
import InputChat from "@/app/ui/chat/inputchat";
export default function Chat() {
  return (
    <div className="relative bg-white h-screen rounded-md w-full">
      <div className="sticky bg-white top-[11rem] md:top-28 left-0 rounded-md">
        <div className="flex items-center justify-start gap-3">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
            alt="image"
            className="rounded-full h-[100px] w-[100px] object-cover p-5"
          />
          <h1 className="text-xl">José Antonio</h1>
        </div>
        <InputChat />
        <hr className="mx-4"></hr>
      </div>
      <div>
        <Message sender={false} />
        <Message sender={true} />
        <Message sender={false} />
        <Message sender={true} />
        <Message sender={false} />
      </div>
    </div>
  );
}
