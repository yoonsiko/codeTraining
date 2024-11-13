export default function Button({ children, ...props }) {
  return <button {...props} className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-md">
    {children}
  </button>
}