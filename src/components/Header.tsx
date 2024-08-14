import LoginButton from "./LoginButton";

export default function Header() {
  return (
    <header className="flex justify-center bg-slate-500">
      <div className="flex flex-1" id="empty-div"></div>
      <h1 className="text-3xl text-white p-6">Social media app</h1>
      <LoginButton />
    </header>
  );
}
