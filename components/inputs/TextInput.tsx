import { FC, InputHTMLAttributes } from "react";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  stuff?: string;
}
const TextInput: FC<InputProps> = ({ placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="flex-1 px-2 py-2 dark:bg-neutral-800 text-sm shadow border dark:border-neutral-700 dark:focus:border-green-500 focus:border-green-500 rounded outline-none focus:ring ring-green-500/50 ring-offset-1 ring-offset-neutral-900"
    />
  );
};
export default TextInput;
