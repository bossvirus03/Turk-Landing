import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Tomtat from "./tomtat";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 md:pb-16 pb-1 bg-gradient-to-b from-white to-amber-50"
    >
      <div className="container mx-auto px-4 mt-[50px] md:mt-0">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0 opacity-0 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              <span className="gradient-text">Turkmenistan 2026</span>
            </h1>
            <p className="text-[16px] md:text-xl text-amber-700 font-bold mb-6">
              <i>Trên Con đường Tơ Lụa – Vén màn Huyền thoại Trung Á</i>
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-lg text-gray-700">
                    <span className="font-semibold">⏱️ Thời lượng:</span> 8 ngày
                    - 7 đêm
                  </p>
                  <p className="text-lg text-gray-700">
                    <span className="font-semibold">🚩 Khởi hành:</span> 29/4 -
                    5/7, 3/6 - 11/6, 10/6 - 18/6, 17/6 - 25/6, 26/8 - 3/9, 30/10
                    - 8/11, 14/11 - 22/11
                  </p>
                  <p className="text-lg text-gray-700">
                    <span className="font-semibold">🎁 Quà tặng:</span> 01 áo
                    mưa + 01 mũ lưỡi trai
                  </p>
                </div>
                <div>
                  <p className="text-lg text-gray-700">
                    <span className="font-semibold">🏨 Lưu trú:</span> Khách sạn
                    3*** - 4****
                  </p>
                </div>
              </div>
            </div>

            {/* <p className="text-lg text-amber-600 font-medium mb-6">
              Khởi hành: Liên tục khởi hành từ giờ tới cuối năm. Liên hệ để nhận thông tin mới nhất.
            </p>
             */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg"
                onClick={scrollToContact}
              >
                Đăng ký ngay
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 opacity-0 animate-fade-in-up animate-delay-200">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/hero/1.jpg"
                alt="Văn hóa Mông Cổ"
                className="rounded-lg shadow-xl w-full aspect-square object-cover"
              />
              <img
                src="/images/hero/2.jpg"
                alt="Lều du mục Mông Cổ"
                className="rounded-lg shadow-xl w-full aspect-square object-cover"
              />
              <img
                src="/images/hero/3.jpg"
                alt="Cưỡi ngựa ở Mông Cổ"
                className="rounded-lg shadow-xl w-full aspect-square object-cover"
              />
              <img
                src="/images/hero/4.jpg"
                alt="Ngựa Mông Cổ"
                className="rounded-lg shadow-xl w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 text-center bg-amber-600 text-white py-10 px-6 rounded-xl shadow-lg opacity-0 animate-fade-in-up animate-delay-300">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">GIÁ VÀ ƯU ĐÃI</h2>
          <p className="text-xl">
            Giá trọn gói:
            {/* <span className="line-through">89.000.000 VNĐ</span> -*/}
            <span className=""> 71.500.000 VNĐ</span>
          </p>
          <p className="text-2xl font-bold mt-4">
            Đăng ký trước 5 tháng: Ưu đãi 11.500.000 VNĐ, chỉ còn 59.500.000 VNĐ{" "}
          </p>
          <p className="text-2xl font-bold mt-4">
            Đăng ký trước 4 tháng: Ưu đãi 7.500.000 VNĐ, còn 63.500.000 VNĐ{" "}
          </p>
          <p className="text-2xl font-bold mt-4">
            Đăng ký trước 3 tháng: Ưu đãi 3.500.000 VNĐ, còn 67.500.000 VNĐ{" "}
          </p>
          <p className="text-2xl font-bold mt-4">
            Đăng ký sau 3 tháng: Không còn ưu đãi, giữ nguyên giá 71.500.000 VNĐ{" "}
          </p>
          <p className="text-2xl font-bold mt-4">
            Đăng ký trước 6 tháng hoặc Nhóm từ 5 người: Ưu đãi đặc biệt thêm
            1.500.000 VNĐ{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
