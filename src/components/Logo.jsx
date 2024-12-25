const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <svg
        className="h-8 w-8 text-indigo-600"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 13.5L7 9.5L11 13.5L17 7.5L21 11.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 7.5H21V11.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-bold text-xl text-gray-900">TradePro</span>
    </div>
  );
};

export default Logo;
