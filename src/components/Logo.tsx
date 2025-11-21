
export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <a href="/" className={`flex items-center ${className}`}>
      <img
        src="/images/Logo.png"
        alt="VIC TOUR Logo"
        className="h-14 w-14 mr-2"
      />
      <span className="font-bold text-2xl">
        VIC <span className="text-amber-500">TOUR</span>
      </span>
    </a>
  );
};
