import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  phone: string;
  email: string;
}

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.name) {
      toast({
        title: "Vui lòng nhập họ tên",
        variant: "destructive",
      });
      return;
    }

    if (!formData.phone) {
      toast({
        title: "Vui lòng nhập số điện thoại",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      emailjs
        .send(
          "service_gp4ggio",
          "template_rodjt14",
          {
            from_name: "severemail2k4@gmail.com",
            to_email: "infor.victour@gmail.com",
            // message: 'Nội dung email',
            reply_to: "infor.victour@gmail.com",
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
          },
          "kpGq_VC79Ms12BK53"
        )
        .then(
          (result) => {
            toast({
              title: "Đăng ký thành công!",
              description: "Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ.",
            });
            setIsSubmitting(false);

            setFormData({
              name: "",
              phone: "",
              email: "",
            });
          },
          (error) => {
            console.error("Error sending email:", error);
            toast({
              title: "Đã xảy ra lỗi khi gửi thông tin",
              description:
                "Vui lòng thử lại sau hoặc liên hệ trực tiếp qua hotline.",
              variant: "destructive",
            });
            setIsSubmitting(true);
          }
        );
    } catch (error) {
      console.error("Error sending email:", error);
      setIsSubmitting(true);
    }
  };

  return (
    <section id="contact" className="section bg-amber-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="opacity-0 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Đăng Ký Ngay</span>
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Vui lòng điền thông tin, chúng tôi sẽ liên lạc với bạn trong vòng
              24 giờ!
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Họ và tên <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nhập họ và tên"
                  className="w-full border-gray-300 focus:border-amber-500 focus:ring focus:ring-amber-200"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Số điện thoại <span className="text-red-500">*</span>
                </label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Nhập số điện thoại"
                  className="w-full border-gray-300 focus:border-amber-500 focus:ring focus:ring-amber-200"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Nhập địa chỉ email (không bắt buộc)"
                  className="w-full border-gray-300 focus:border-amber-500 focus:ring focus:ring-amber-200"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-6 text-lg"
              >
                {isSubmitting ? "Đang xử lý..." : "Đăng ký ngay"}
                {!isSubmitting && <Send className="ml-2" />}
              </Button>
            </form>
          </div>

          <div className="opacity-0 animate-fade-in-up animate-delay-200">
            <div className="bg-white rounded-xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Về chúng tôi</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-xl mb-2">
                    CÔNG TY TNHH TRẠI HÈ QUỐC TẾ VÀ TOUR TRẢI NGHIỆM VIC VIỆT
                    NAM
                  </h4>

                  <div className="flex items-start space-x-3 mt-4">
                    <MapPin className="h-5 w-5 text-amber-600 mt-1" />
                    <p className="text-gray-700">
                      số nhà 29, ngõ 260/28 đường Cầu Giấy, Phường Cầu Giấy,
                      thành phố Hà nội, Việt Nam
                    </p>
                  </div>

                  <div className="flex items-center space-x-3 mt-3">
                    <Phone className="h-5 w-5 text-amber-600" />
                    <p className="text-gray-700">Điện thoại: 0989.494.899</p>
                  </div>

                  <div className="flex items-center space-x-3 mt-3">
                    <Mail className="h-5 w-5 text-amber-600" />
                    <p className="text-gray-700">
                      Email: infor.victour@gmail.com
                    </p>
                  </div>

                  {/* <p className="text-gray-700 mt-3">
                    <a href="https://www.facebook.com/VICCAMPTOUR" target="_blank" rel="noreferrer" className="text-amber-600 hover:underline">
                      Fanpage: facebook.com/VICCAMPTOUR
                    </a>
                  </p> */}

                  <p className="text-gray-700 mt-2">
                    <a
                      href="https://www.facebook.com/profile.php?id=61574620767717"
                      target="_blank"
                      rel="noreferrer"
                      className="text-amber-600 hover:underline"
                    >
                      Facebook: VIC TOUR: Khám phá miền đất lạ
                    </a>
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-bold mb-2">
                    GIẤY PHÉP KINH DOANH DỊCH VỤ LỮ HÀNH QUỐC TẾ
                  </h4>
                  <p className="text-gray-700">
                    Số GP/No.: 01-1347/2019 /TCDL-GP
                  </p>
                  <p className="text-gray-700">Cấp ngày: 28/5/2019</p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-bold mb-2">Các chương trình khác</h4>
                  <p className="text-gray-700 mb-2">
                    <a
                      href="https://www.mongco-victour.com/"
                      className="text-amber-600 hover:underline"
                    >
                      Chương trình Tour Mông Cổ 2026
                    </a>
                  </p>
                  <p className="text-gray-700 mb-2">
                    <a
                      href="https://vicvietnam.net.vn"
                      className="text-amber-600 hover:underline"
                    >
                      Chương trình Trại hè quốc tế VIC Camp
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
