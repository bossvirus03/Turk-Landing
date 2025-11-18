import { useState, useEffect } from "react";

const CountdownSection = () => {
  const [countdown, setCountdown] = useState({
    days: 2,
    hours: 10,
    minutes: 17,
    seconds: 4,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;

          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;

            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;

              if (days > 0) {
                days -= 1;
              } else {
                // Reset countdown when it reaches 0
                return { days: 2, hours: 10, minutes: 17, seconds: 4 };
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="countdown"
      className="py-20 bg-gradient-to-r from-amber-600 to-amber-800 text-white"
    >
      <div className="container mx-auto">
        <div className="text-center mb-4 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            TẬN HƯỞNG HÀNH TRÌNH MANG DẤU ẤN RIÊNG BẠN
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Nhanh tay đăng ký đặt tour sớm để hưởng mức giá ưu đãi
          </p>
        </div>

        <div className="mt-8 mb-4 text-center">
          <h3
            className="text-2xl md:text-3xl font-bold mt-4"
            style={{ fontSize: 40 }}
          >
            <span className="line-through">72.000.000đ</span> - 60.000.000đ
          </h3>
        </div>

        {/* <div className="mt-8 max-w-4xl mx-auto opacity-0 animate-fade-in-up animate-delay-200">
          <div className="grid grid-cols-4 gap-4">
            {[
              { value: countdown.days, label: "Ngày" },
              { value: countdown.hours, label: "Giờ" },
              { value: countdown.minutes, label: "Phút" },
              { value: countdown.seconds, label: "Giây" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white text-amber-800 rounded-xl p-4 text-center shadow-lg animate-countdown"
              >
                <div className="text-4xl md:text-6xl font-bold">
                  {item.value.toString().padStart(2, "0")}
                </div>
                <div className="text-sm md:text-base font-medium mt-2">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <p className="text-white/80 text-lg text-center font-bold mt-4">Thời gian khuyến mãi còn</p>
        </div> */}
      </div>
    </section>
  );
};

export default CountdownSection;
