import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const navItems = [
    { name: "Trang chủ", id: "home" },
    { name: "Giới thiệu", id: "about" },
    { name: "Lịch trình", id: "itinerary" },
    { name: "Dịch vụ", id: "services" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContent = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Logo />

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <div
              key={item.name}
              onClick={() => scrollToContent(item.id)}
              className={`cursor-pointer font-medium transition-colors ${activeSection === item.id
                ? "text-amber-600"
                : isScrolled
                  ? "text-gray-800 hover:text-amber-600"
                  : "text-gray-800 hover:text-amber-600"
                }`}
            >
              {item.name}
            </div>
          ))}
          <Button
            className="bg-amber-600 hover:bg-amber-700"
            onClick={() => scrollToContent("contact")}
          >
            Đăng ký ngay
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col py-4">
            {navItems.map((item) => (
              <div
                key={item.name}
                className={`cursor-pointer px-6 py-3 font-medium ${activeSection === item.id
                  ? "text-amber-600"
                  : "text-gray-800 hover:bg-amber-50 hover:text-amber-600"
                  }`}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToContent(item.id);
                }}
              >
                {item.name}
              </div>
            ))}
            <div className="px-6 py-3">
              <Button
                className="w-full bg-amber-600 hover:bg-amber-700"
                onClick={() => scrollToContent("contact")}
              >
                Đăng ký ngay
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;