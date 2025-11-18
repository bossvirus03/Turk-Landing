import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-14 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Turkmenistan</span> - Điểm Đến Huyền
            Thoại
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 opacity-0 animate-fade-in-up animate-delay-200">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/about/5.jpg"
                alt="Thảo nguyên Mông Cổ"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
              <img
                src="/images/about/6.jpg"
                alt="Sa mạc Gobi"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
              <img
                src="/images/about/7.jpg"
                alt="Tu viện Mông Cổ"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
              <img
                src="/images/about/8.jpg"
                alt="Hồ thiêng Khusvgul"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
            </div>
          </div>

          <div className="lg:w-1/2 opacity-0 animate-fade-in-up animate-delay-300">
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Turkmenistan cuốn hút du khách bởi vẻ đẹp huyền bí của những sa
              mạc mênh mông, những ốc đảo xanh tươi giữa vùng cát cháy và dấu ấn
              rực rỡ của nền văn minh cổ đại trên Con đường Tơ lụa; nổi bật với
              thủ đô Ashgabat trắng ngà độc đáo, miệng núi lửa Darvaza rực sáng
              giữa đêm sa mạc và tàn tích cổ Merv – kho báu lịch sử của Trung Á
            </p>

            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Trải nghiệm lang thang giữa những đụn cát vàng bất tận, chiêm
              ngưỡng ánh lửa vĩnh cửu của “Cánh cổng Địa ngục”, thưởng thức văn
              hóa du mục truyền thống và gặp gỡ người dân địa phương hiếu khách
              – hành trình khám phá Turkmenistan sẽ để lại trong bạn những ấn
              tượng sâu sắc về một vùng đất bí ẩn, hoang sơ nhưng tràn đầy sức
              sống.
            </p>
            {/* <a
              href="#itinerary"
              className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700"
            >
              Xem lịch trình chi tiết
              <ArrowRight className="ml-2 h-5 w-5" />
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
