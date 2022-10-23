import { FC, InputHTMLAttributes } from "react";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  stuff?: string;
}
const TextInput: FC<InputProps> = ({ placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="flex-1 rounded border px-2 py-2 text-sm shadow outline-none ring-green-500/50 ring-offset-1 ring-offset-neutral-900 focus:border-green-500 focus:ring dark:border-neutral-700 dark:bg-neutral-800 dark:focus:border-green-500"
    />
  );
};
export default TextInput;
