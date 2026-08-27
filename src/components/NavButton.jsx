export default function NavButton({ label, active, onClick, side = "left" }) {
  return (
    <button
      onClick={onClick}
      className={`w-full px-3 py-2.5 text-sm transition-all duration-150 cursor-pointer relative ${
        side === "right" ? "text-right" : "text-left"
      } ${
        active
          ? `text-[#1a5c3a] font-semibold bg-[#1a5c3a]/5 ${
              side === "left"
                ? "border-l-[3px] border-[#1a5c3a]"
                : "border-r-[3px] border-[#1a5c3a]"
            }`
          : "text-gray-400 font-normal hover:text-gray-600 hover:bg-gray-50 border-l-[3px] border-transparent"
      }`}
    >
      {label}
    </button>
  );
}
