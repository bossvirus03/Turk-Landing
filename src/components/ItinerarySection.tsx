import Slick from "./lib/Slick";

interface IData {
  day: string;
  title: string;
  content: string;
  images: string[];
}

const itineraryData: IData[] = [
  {
    day: "Ngày 1",
    title: "DI CHUYỂN VIỆT NAM – TURKMENISTAN",
    content: `<strong>- Bay Hà Nội/ Sài Gòn - Thủ đô Ashgabat:</strong> Bay thẳng 8 tiếng, Hành lý xách tay 7kg, ký gửi 20kg.\n
      <strong>- Ăn tối:</strong> Theo lịch trình.\n
      <strong>- Nghỉ đêm:</strong> Trên máy bay.`,
    images: [],
  },
  {
    day: "Ngày 2",
    title: "THAM QUAN THỦ ĐÔ ASHGABAT",
    content: `<strong>NGÀY 2: THAM QUAN THỦ ĐÔ ASHGABAT</strong>\n
      Bảo tàng Quốc gia, Đài tưởng niệm Magtymguly, Khách sạn Yyldyz, Cung điện hình cầu\n\n
      Thăm quan, khám phá Thủ đô Ashgabat\n\n
      - Bảo tàng Quốc gia: Khai trương từ năm 1998 gồm 7 Gian trưng bày, Bảo tàng là nơi trưng bày tất cả những phát hiện khảo cổ niên đại lên tới 5000 năm trước Công Nguyên.\n
      - Đài tưởng niệm Magtymguly Pyragy: Bức tượng là tác phẩm của nhà điêu khắc bậc thầy Saragt Babayev – được đưa vào sách kỉ lục Guinness, được trao tặng nhiều giải thưởng danh giá.\n\n
      - Khách sạn Yyldyz: Khách sạn 5 sao với tầm nhìn bao quát toàn cảnh đẹp nhất của thành phố Ashgabat.\n
      - Cung điện hình cầu: Khu phức hợp có kiến trúc hiện đại, độc đáo tại Thủ đô Ashgabat.\n\n
      - Phần ảnh bên dưới này, thay bằng những ảnh có số thứ tự từ 2 tới 4 trong file Ảnh LDP Turk.`,
    images: [
      "/images/day2/Ngày 2.1.jpg",
      "/images/day2/Ngày 2.2.webp",
      "/images/day2/Ngày 2.3.jpg",
    ],
  },
  {
    day: "Ngày 3",
    title: "KHÁM PHÁ THỦ ĐÔ ASHGABAT",
    content: `<strong>Khám phá Thủ đô Ashgabat</strong>\n
      <strong>- Tượng đài Độc lập:</strong> Kiến trúc lấy cảm hứng từ lều truyền thống và mũ đội đầu của phụ nữ Turkmen, biểu tượng cho lịch sử và tinh thần kiên định của đất nước.\n
      <strong>- Tượng đài Trung lập:</strong> Xây dựng năm 1998, còn được gọi là Cổng vòm ba chân, vừa là tượng đài vừa là đài quan sát.\n
      <strong>- Nhà thờ Hồi giáo Urtugrul Gazi:</strong> Một trong những nhà thờ Hồi giáo đẹp nhất Turkmenistan với 4 ngọn tháp và mái vòm trung tâm, nội thất trang trí xa hoa và kính màu bắt mắt.\n
      <strong>- Bảo tàng thảm Turkmen:</strong> Mở cửa năm 1994, nơi lưu giữ bộ sưu tập thảm dệt truyền thống lớn nhất của Turkmen.\n
      <strong>- Thăm quan Nhà thờ Hồi giáo Turkmenbashi Mosque:</strong> Tự hào có mái vòm đơn lớn nhất thế giới, xây dựng bằng đá cẩm thạch trắng, mái dát vàng, sức chứa hơn 20.000 người.\n
      <strong>- Ăn trưa, Ăn tối:</strong> Theo lịch trình.`,
    images: [
      "/images/day3/Ngày 3.1.jpg",
      "/images/day3/Ngày 3.2.png",
      "/images/day3/Ngày 3.3.jpg",
    ],
  },
  {
    day: "Ngày 4",
    title: "THÀNH PHỐ GEOKDEPE",
    content: `<strong>Thủ đô Ashgabat - Khu định cư cổ Nisa – Thành phố Geokdepe - Trại ngựa Akhal Teke</strong>\n
      <strong>08:30</strong> Di chuyển tới khu đô thị cổ Nisa của đế chế Parthia (19 km). Khu di tích được UNESCO công nhận là di sản thế giới, lưu giữ nhiều di tích văn hóa quý giá.\n
      <strong>10:00 - 11:00</strong> Thăm trang trại ngựa Akhal Teke: Tìm hiểu giống ngựa quý nhất thế giới, có cơ hội cưỡi ngựa và xem biểu diễn kỹ thuật.\n
      <strong>12:00</strong> Ăn trưa tại trại ngựa.\n
      <strong>14:00</strong> Thăm pháo đài Gokdepe: Pháo đài do quân đội Nga xây dựng năm 1869, có giá trị lịch sử lớn tại khu vực.\n
      <strong>16:00</strong> Di chuyển tới Darvaza (khoảng 300 km) xuyên sa mạc Karakum; thưởng ngoạn hoàng hôn trên sa mạc.\n
      <strong>18:30</strong> Ăn tối với món Shashlik (BBQ) truyền thống.\n
      <strong>Nghỉ đêm:</strong> Trải nghiệm Lều Yurt truyền thống trên sa mạc.`,
    images: [
      "/images/day4/Ngày 4.1.jpg",
      "/images/day4/Ngày 4.2.png",
      "/images/day4/Ngày 4.3.png",
    ],
  },
  {
    day: "Ngày 5",
    title: "THÀNH PHỐ MARY",
    content: `<strong>Cổng Địa ngục Darvaza, Mary - Merv cổ đại</strong>\n
      <strong>05:00 - 07:00</strong> Dã ngoại tại Hố Gas Darvaza để đón bình minh và chiêm ngưỡng miệng hố lửa kỳ bí.\n
      <strong>Di chuyển tới Thành phố Mary</strong> — một ốc đảo cổ kính ở sa mạc Karakum.\n
      <strong>14:00</strong> Ăn trưa theo phong cách địa phương.\n
      <strong>15:00</strong> Thưởng thức chương trình biểu diễn quốc gia với điệu múa và âm nhạc truyền thống Turkmen.\n
      <strong>15:30</strong> Khám phá thành phố Mary và khu di chỉ Merv cổ đại: Erk-kala, Gyaur-kala, Abdullah Khan-kala, Sultan-kala và các công trình còn sót lại.\n
      <strong>19:00</strong> Ăn tối và nghỉ đêm tại Mary.`,
    images: [
      "/images/day5/Ngày 5.1.jpg",
      "/images/day5/Ngày 5.2.png",
      "/images/day5/Ngày 5.3.jpg",
    ],
  },
  {
    day: "Ngày 6",
    title: "THÀNH PHỐ MARY - KHÁM PHÁ TIẾP",
    content: `<strong>Tiếp tục khám phá thành phố Mary</strong>\n
      <strong>- Bảo tàng Lịch sử và Dân tộc học Quốc gia:</strong> Trưng bày nhiều hiện vật quý giá giới thiệu lịch sử lâu đời và nền văn hóa đa dạng của Turkmenistan.\n
      <strong>- Bảo tàng lịch sử và văn hóa Mary:</strong> Trung tâm lưu giữ di sản vùng Mary với mô hình, tranh ảnh và hiện vật.\n
      <strong>- Nhà thờ Pokrovskaya:</strong> Nhà thờ Chính Thống giáo Nga cổ kính với kiến trúc Byzantine và mái vòm xanh lam.\n
      <strong>- Thánh đường Hồi giáo Gurbanguly Hajji:</strong> Một trong những thánh đường lớn và đẹp nhất tại Mary.\n
      <strong>- Chợ địa phương Zelyony:</strong> Khu chợ sầm uất để trải nghiệm đời sống địa phương.\n
      <strong>- Di chuyển về Thủ đô Ashgabat:</strong> Khoảng 350 km (3-4 giờ).`,
    images: [
      "/images/day6/Ngày 6.1.png",
      "/images/day6/Ngày 6.2.jpg",
      "/images/day6/Ngày 6.3.webp",
    ],
  },
  {
    day: "Ngày 7",
    title: "THỦ ĐÔ ASHGABAT",
    content: `<strong>Buổi sáng: Khám phá Làng Nokhur</strong>\n
      <strong>- Làng Nokhur:</strong> Được coi là một trong những địa điểm lãng mạn nhất, nơi lưu giữ bản sắc văn hóa riêng biệt của người Turkmen; thăm làng và nghe kể về phong tục truyền thống.\n
      <strong>- Khu tâm linh – Nghĩa trang sừng dê:</strong> Nơi trang trí mộ bằng sừng dê núi, vô cùng độc đáo và mang ý nghĩa tâm linh.\n
      <strong>- Hang động Kyz Bibi:</strong> Điểm linh thiêng của làng Nokhur.\n
      <strong>- Hồ nước ngầm Kowata:</strong> Ghé thăm trên đường trở về Ashgabat.\n
      <strong>Buổi chiều:</strong> Tham quan các khu chợ nổi tiếng: Chợ Gulistan, Chợ Thế Kỉ XXI (Tolkuchka), Trung tâm mua sắm Berkarar; mua sắm và giao lưu.\n
      <strong>- Ăn trưa & Ăn tối:</strong> Theo lịch trình.`,
    images: [
      "/images/day7/Ngày 7.1.jpg",
      "/images/day7/Ngày 7.2.jpg",
      "/images/day7/Ngày 7.3.png",
    ],
  },
  {
    day: "Ngày 8",
    title: "TURKMENISTAN – VIETNAM",
    content: `<strong>Turkmenistan – Vietnam</strong>\n
      <strong>- Ăn sáng:</strong> Quý khách được chuẩn bị hộp ăn sáng.\n
      <strong>- Di chuyển tới Sân bay Ashgabat</strong> và đáp chuyến bay về Việt Nam theo lịch trình.\n
      <strong>Chuyến đi kết thúc:</strong> Kết thúc hành trình 8 ngày 7 đêm, chia tay và hẹn gặp lại.`,
    images: [
      "/images/day8/Ngày 8.1 .jpg",
      "/images/day8/Ngày 8.2.jpg",
      "/images/day8/Ngày 8.3.jpg",
    ],
  },
];

const ItinerarySection = () => {
  return (
    <section id="itinerary" className="section bg-brand-50">
      <div className="container mx-auto">
        <div className="text-center md:mb-16 mb-6 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lịch Trình <span className="gradient-text">Chi Tiết</span>
          </h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Chuyến hành trình khám phá Turkmenistan trong 8 ngày 7 đêm, chìm đắm
            trong nền văn hóa Trung Á huyền bí và kỳ quan thiên nhiên sa mạc
            Karakum đầy mê hoặc.
          </p>
          <div className="w-full py-8 ">
            <img
              src="/images/map/image.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          {itineraryData.map((item, index) => (
            <div
              key={index}
              className={`opacity-0 animate-fade-in-up mb-10 pb-10 ${
                index < itineraryData.length - 1
                  ? "border-b border-gray-200"
                  : ""
              }`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="bg-brand-600 text-white py-2 px-4 rounded-lg inline-block mb-2 font-semibold">
                    {item.day}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  {/* Subtitle cho các ngày đặc biệt */}
                  {item.day === "Ngày 2" && (
                    <div className="prose max-w-none mt-1">
                      <strong>Bảo tàng Quốc gia</strong>,{" "}
                      <strong>Đài tưởng niệm Magtymguly</strong>,{" "}
                      <strong>Khách sạn Yyldyz</strong>,{" "}
                      <strong>Cung điện hình cầu</strong>,{" "}
                    </div>
                  )}
                  {item.day === "Ngày 3" && (
                    <div className="prose max-w-none mt-1">
                      <strong>Tượng đài Độc lập</strong>,{" "}
                      <strong>Tượng đài Trung lập</strong>,{" "}
                      <strong>Nhà thờ Urtugrul Gazi</strong>,{" "}
                      <strong>Bảo tàng thảm Turkmen</strong>
                    </div>
                  )}
                  {item.day === "Ngày 4" && (
                    <div className="prose max-w-none mt-1">
                      <strong>Khu di tích cổ Nisa</strong>,{" "}
                      <strong>Trại ngựa Akhal Teke</strong>,{" "}
                      <strong>Pháo đài Gokdepe</strong>
                    </div>
                  )}
                  {item.day === "Ngày 5" && (
                    <div className="prose max-w-none mt-1">
                      <strong>Hố Gas Darvaza</strong>,{" "}
                      <strong>Thành phố Mary</strong>,{" "}
                      <strong>Khu di chỉ Merv cổ đại</strong>
                    </div>
                  )}
                  {item.day === "Ngày 6" && (
                    <div className="prose max-w-none mt-1">
                      <strong>Bảo tàng Lịch sử & Dân tộc học</strong>,{" "}
                      <strong>Nhà thờ Pokrovskaya</strong>,{" "}
                      <strong>Thánh đường Gurbanguly Hajji</strong>
                    </div>
                  )}
                  {item.day === "Ngày 7" && (
                    <div className="prose max-w-none mt-1">
                      <strong>Làng Nokhur</strong>,{" "}
                      <strong>Chợ Gulistan / Tolkuchka</strong>
                    </div>
                  )}
                  {item.day === "Ngày 8" && (
                    <div className="prose max-w-none mt-1">
                      <strong>Chuẩn bị rời Turkmenistan</strong>,{" "}
                      <strong>Di chuyển tới sân bay Ashgabat</strong>
                    </div>
                  )}
                  {item.day === "Ngày 9" && (
                    <div className="prose max-w-none mt-1">
                      <strong>Ngắm Tuần Lộc trong rừng Taiga</strong>,{" "}
                      <strong>Trải nghiệm Chợ quê Du mục</strong>
                    </div>
                  )}
                  {item.day === "Ngày 11" && (
                    <div className="prose max-w-none mt-1">
                      <strong>Bảo tàng Thành Cát Tư Hãn</strong>,{" "}
                      <strong>
                        Tượng Thành Cát Tư Hãn cưỡi ngựa lớn nhất thế giới
                      </strong>
                      , <strong>Khu Quà lưu niệm truyền thống Du mục</strong>,{" "}
                      <strong>Thưởng thức Hí kịch Mông Cổ “Tumen Ekh”</strong>
                    </div>
                  )}
                </div>
                <div className="md:w-3/4">
                  {item.content.split("\n").map((text, i) => (
                    <div
                      className="prose max-w-none"
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ))}

                  {item.images.length > 1 && (
                    <div className="d-flex justify-center items-center mt-4">
                      <Slick {...item} />
                    </div>
                  )}

                  {item.images.length === 1 && (
                    <div className="mt-4">
                      <img
                        src={item.images[0]}
                        alt={`Hình ảnh ${item.day}`}
                        className="rounded-lg shadow-md w-full h-auto object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItinerarySection;
