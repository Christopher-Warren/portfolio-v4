import { FC, InputHTMLAttributes } from "react";
interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  multiline?: boolean;
}
const TextInput: FC<InputProps> = ({
  placeholder,
  disabled,
  className,
  value,
  onChange,
  multiline,
}) => {
  if (multiline) {
    return (
      <textarea
        className="mt-5 rounded border px-2 py-2 shadow outline-none ring-green-500/50 ring-offset-1 ring-offset-neutral-900 focus:border-green-500 focus:ring dark:border-neutral-700 dark:bg-neutral-800 dark:focus:border-green-500 "
        onChange={onChange}
        placeholder="Content"
        rows={8}
        value={value}
      />
    );
  }

  return (
    <input
      type="text"
      disabled={disabled}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      className={`flex-1 rounded border px-2 py-2 shadow outline-none ring-green-500/50 ring-offset-1 ring-offset-neutral-900 focus:border-green-500 focus:ring dark:border-neutral-700 dark:bg-neutral-800 dark:focus:border-green-500 ${
        className && className
      }`}
    />
  );
};
export default TextInput;
