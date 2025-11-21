
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    role: "Sinh viên Công nghệ thông tin",
    image: "/placeholder.svg",
    content:
      "Tôi đã chọn IUH vì chất lượng đào tạo và môi trường học tập năng động. Sau khi tốt nghiệp, tôi đã nhận được nhiều cơ hội việc làm từ các công ty công nghệ hàng đầu.",
  },
  {
    id: 2,
    name: "Trần Thị B",
    role: "Cựu sinh viên ngành QTKD",
    image: "/placeholder.svg",
    content:
      "Khóa học tại IUH đã trang bị cho tôi những kiến thức và kỹ năng cần thiết để phát triển sự nghiệp. Các giảng viên rất nhiệt tình và luôn sẵn sàng hỗ trợ sinh viên.",
  },
  {
    id: 3,
    name: "Lê Văn C",
    role: "Alumni khoa Điện tử",
    image: "/placeholder.svg",
    content:
      "IUH không chỉ cung cấp kiến thức chuyên môn mà còn giúp sinh viên phát triển kỹ năng mềm và tư duy sáng tạo. Đây là môi trường lý tưởng để phát triển bản thân.",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center md:mb-16 mb-6 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sinh viên nói gì về{" "}
            <span className="gradient-text">chúng tôi</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Hãy lắng nghe những chia sẻ từ sinh viên và cựu sinh viên về trải
            nghiệm học tập tại Trường Đại học Công nghiệp TP.HCM.
          </p>
        </div>

        <div className="max-w-4xl mx-auto opacity-0 animate-fade-in-up animate-delay-200">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            <div className="absolute -top-6 left-8 text-amber-500">
              <Quote size={48} />
            </div>
            <div className="mt-4">
              <p className="text-gray-700 text-lg md:text-xl italic mb-8">
                "{testimonials[currentIndex].content}"
              </p>
              <div className="flex items-center">
                <Avatar className="h-14 w-14 border-2 border-amber-200">
                  <AvatarImage
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                  />
                  <AvatarFallback>
                    {testimonials[currentIndex].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <h4 className="font-bold text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-amber-50 hover:text-amber-600"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                className={`w-3 h-3 p-0 rounded-full ${
                  currentIndex === index ? "bg-amber-600" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-amber-50 hover:text-amber-600"
              onClick={handleNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
