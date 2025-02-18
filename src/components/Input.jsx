import { forwardRef } from "react";

const Input = forwardRef(({ label, textarea = false, ...props }, ref) => {
  const valid =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-300 text-stone-600 focus:outline-none focus:border-stone-400";
  const invalid =
    "w-full p-1 border-b-2 rounded-sm border-red-200 bg-red-200 text-stone-600 focus:outline-none focus:border-red-400";

  return (
    <>
      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">
          {label}
        </label>
        {textarea ? (
          <textarea ref={ref} className={valid} {...props} />
        ) : (
          <input ref={ref} className={valid} {...props} />
        )}
      </p>
    </>
  );
});

export default Input;
