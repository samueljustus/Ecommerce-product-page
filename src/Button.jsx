function Button({ text }) {
  return (
    <button className="flex px-5 py-2 bg-[color:hsl(26,100%,55%)] w-full justify-center items-center gap-3 text-[color:hsl(223,64%,98%)] rounded-lg hover:opacity-70">
      {text}
    </button>
  );
}

export default Button;
