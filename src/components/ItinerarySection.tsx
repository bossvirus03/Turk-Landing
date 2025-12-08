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
    content: `<strong>Thăm quan, khám phá Thủ đô Ashgabat</strong>\n<strong>Thủ đô Ashgabat mang vẻ đẹp lộng lẫy, hiện đại nằm bên bờ sa mạc Karakum. Nơi đây có nhiều công trình kiến trúc độc đáo và đa dạng phản ánh sự kết hợp giữa các nền văn hóa Trung Đông, Nga và Âu-Mỹ.</strong>\n<strong>- Bảo tàng Quốc gia:</strong> Khai trương từ năm 1998 gồm 7 Gian trưng bày, Bảo tàng là nơi trưng bày tất cả những phát hiện khảo cổ niên đại lên tới 5000 năm trước Công Nguyên.\n<strong>- Đài tưởng niệm Magtymguly Pyragy:</strong> Bức tượng là tác phẩm của nhà điêu khắc bậc thầy Saragt Babayev – được đưa vào sách kỉ lục Guinness, được trao tặng nhiều giải thưởng danh giá.\n\n<strong>- Khách sạn Yyldyz:</strong> Khách sạn 5 sao với tầm nhìn bao quát toàn cảnh đẹp nhất của thành phố Ashgabat.\n<strong>- Cung điện hình cầu:</strong> Khu phức hợp có kiến trúc hiện đại, độc đáo tại Thủ đô Ashgabat.\n`,
    images: ["/images/day2/2.png", "/images/day2/3.jpg", "/images/day2/4.jpg"],
  },
  {
    day: "Ngày 3",
    title: "KHÁM PHÁ THỦ ĐÔ ASHGABAT",
    content: `<strong>Khám phá Thủ đô Ashgabat</strong>\n<strong>- Tượng đài Độc lập:</strong> Kiến trúc độc đáo, lấy cảm hứng từ chiếc lều truyền thống của người Turkmen và mũ đội đầu truyền thống của các cô gái Turkmen. Là một biểu tượng đáng tự hào của Lịch sử phong phú và tinh thần kiên định của Turkmenistan.\n<strong>- Tượng đài Trung lập:</strong> Xây dựng năm 1998, còn được gọi là Cổng vòm ba chân hay Chân máy ba chân. Vừa là tượng đài, vừa là một đài quan sát.\n<strong>- Nhà thờ Hồi giáo Urtugrul Gazi:</strong> Là một trong những nhà thờ Hồi giáo đẹp nhất của Turkmenistan với 4 ngọn tháp và 1 mái vòm trung tâm, có đồ trang trí nội thất xa hoa cùng với cửa sổ kính màu tuyệt đẹp.\n<strong>- Bảo tàng thảm Turkmen:</strong> Mở cửa năm 1994, nơi lưu giữ bộ sưu tập thảm dệt truyền thống Turkmen lớn nhất\n<strong>- Thăm quan Nhà thờ Hồi giáo Turkmenbashi Mosque:</strong> Nhà thờ Hồi giáo có mái vòm đơn lớn nhất thế giới. Nhà thờ có lối kiến trúc đặc biệt, tiêu biểu của Ashgabat, xây dựng bằng đá cẩm thạch trắng, mái dát vàng. Nơi đây có sức chứa hơn 20.000 người cùng cầu nguyện.\n<strong>- Ăn trưa, Ăn tối:</strong> Theo lịch trình`,
    images: ["/images/day3/5.jpg", "/images/day3/6.jpg", "/images/day3/7.jpg"],
  },
  {
    day: "Ngày 4",
    title: "THÀNH PHỐ GEOKDEPE",
    content: `<strong>- Di chuyển tới Khu đô thị cổ Nisa của đế chế Parthia. (19km):</strong> Không chỉ mang vẻ đẹp huyền bí, nơi đây còn chứa đựng những di tích văn hóa quý giá được UNESCO công nhận là Di sản thế giới năm 2007.\n
    <strong>- Thăm quan Trang trại ngựa Akhal Teke:</strong> Giống ngựa Akhal Teke được coi là giống ngựa quí giá nhất thế giới. Những người nổi tiếng như Alexander Đại đế, Thành Cát Tư Hãn và Darius I đều rất coi trọng những chú ngựa này. Bên cạnh việc ngắm nhìn cảnh quan tuyệt đẹp du khách còn có cơ hội trải nghiệm cưỡi ngựa, hay thực hiện những kỹ thuật chuyên nghiệp như đứng trên lưng ngựa đang phi nước đại – dành riêng cho du khách có kinh nghiệm với bộ môn này.\n
    <strong>- Ăn trưa tại Trại ngựa:</strong>\n
    <strong>- Thăm quan Pháo đài Gokdepe:</strong>\nPháo đài được quân đội Nga xây dựng trên bờ biển Caspi làm căn cứ để di chuyển tới Trung Á. Xây dựng vào năm 1869 và là pháo đài cuối cùng trên con đường đến Trung Á của Đế quốc Nga.\n
    <strong>-  Di chuyển tới Darvaza (300km):</strong>\nDu khách có cơ hội đi qua những vùng đất rộng lớn của Sa mạc Karakum – sa mạc cát trải dài 350.000 km2 từ biển Caspi tới chân đồi Pamir và từ Amu Darya tới dãy núi Kopet Dag. Hòa mình vào Sa mạc cát rộng lớn trong ánh hoàng hôn buông tỏa, đảm bảo du khách sẽ có những kỷ niệm, khoảnh khắc thật khó quên trong cuộc đời của mình.\n
    <strong>- Ăn tối</strong>\nTrải nghiệm một bữa tiệc Phương Đông thực sự với món Shashlik (BBQ) truyền thống của người Turkmenistan\n
    <strong>- Nghỉ đêm:</strong> Trải nghiệm Lều Yurt truyền thống trên Sa mạc\nLều Yurt truyền thống đã xuất hiện từ hàng nghìn năm và gắn liền với lối sống du mục trên các thảo nguyên và sa mạc rộng lớn. Lều được thiết kế hình tròn, bên trong làm bằng gỗ, lớp nỉ len phủ ngoài, dễ tháo lắp. Ngoài chức năng nơi ở, lều còn là không gian tổ chức nghi lễ, hội họp, biểu tượng của gắn kết gia đình.`,
    images: ["/images/day4/9.jpg", "/images/day4/8.png"],
  },
  {
    day: "Ngày 5",
    title: "THÀNH PHỐ MARY",
    content: `<strong>- Dã ngoại tại Hố Gas Darvaza:</strong>\nDu khách thức dậy sớm để tận hưởng không khí sáng sớm trên sa mạc, đón bình minh, thu vào tầm mắt sự tráng lệ của khoảnh khắc bắt đầu một ngày mới.\n
    <strong>- Darvaza một trong những kỳ quan thiên nhiên nổi tiếng nhất của Turkmenistan.</strong> \nMiệng hố gas Darvaza đã cháy liên tục trong nhiều thập kỉ. Hình ảnh ngọn lửa bùng cháy trong miệng hố cùng với những câu chuyện không xác thực về nguồn gốc đã khiến nó trở thành một nơi thu hút rất nhiều người ghé thăm\n
    <strong>Di chuyển tới Thành phố Mary</strong> - Thành phố Mary một Ốc đảo ở sa mạc Karakum, mang trên mình những nét duyên dáng, cổ kính đặc trưng của một thành phố Châu Âu.\n
    <strong>- Ăn trưa:</strong>\nDùng bữa trưa thịnh soạn theo phong cách Quốc gia.\n
    <strong>- Thưởng thức chương trình biểu diễn Quốc gia:</strong>\nDu khách có cơ hội chiêm ngưỡng các điệu múa truyền thống hấp dẫn của người Turkmen cùng với các loại nhạc cụ truyền thống.\n
    <strong>- Khám phá Thành phố Mary-Merv Cổ đại:</strong>\n<strong>Erk-kala</strong>: Pháo đài trung tâm của Merv Cổ đại: Từng là nơi ở của những người cai trị thành phố. Tại đây, tàn tích của các Cung điện, nhà thờ Hồi giáo, các tòa nhà khác đã được bảo tồn.\n<strong>Gyaur-kala</strong>: Công trình cổ đại kiến trúc hùng mạnh nhất với diện tích hơn 300 ha. Đây cũng là nơi lưu giữ những tàn tích của những ngôi nhà, phòng tắm, nhà Thờ Hồi giáo.\n<strong>Abdullah Khan-kala</strong>: Pháo đài phía Nam\n<strong>Sultan-kala</strong>: Pháo đài phía Bắc\n<strong>Abdullah Khan-tepe</strong>: Nơi thành cổ tọa lạc\n<strong>-  Ăn tối, nghỉ đêm.</strong>`,
    images: [
      "/images/day5/11.jpg",
      "/images/day5/12.1.jpg",
      "/images/day5/12.2.jpg",
      "/images/day5/12.3.jpg",
      "/images/day5/12.4.jpg",
    ],
  },
  {
    day: "Ngày 6",
    title: "THÀNH PHỐ MARY",
    content: `<strong>Tiếp tục khám phá thành phố Mary</strong>\n<strong>-Bảo tàng Lịch sử và Dân tộc học Quốc gia:</strong> Trưng bày nhiều hiện vật quý giá giới thiệu về lịch sử lâu đời và nền văn hóa đa dạng của Turkmenistan. Du khách có thể khám phá trang phục truyền thống, đồ gốm, đồ trang sức và các hiện vật khảo cổ từ thời cổ đại Merv.\n<strong>-Bảo tàng Lịch sử và văn hoá Mary:</strong> Đây là trung tâm lưu giữ và trưng bày di sản lịch sử của vùng Mary, từ thời cổ đại đến hiện đại. Bảo tàng nổi bật với các mô hình, tranh ảnh và bộ sưu tập hiện vật giúp người xem hiểu rõ đời sống văn hóa địa phương.\n<strong>-Nhà thờ Pokrovskaya:</strong> Nhà thờ Chính Thống giáo Nga cổ kính này là một trong những công trình tôn giáo hiếm hoi còn sót lại từ thời Đế quốc Nga ở Mary. Với mái vòm xanh lam và kiến trúc Byzantine, nơi đây mang đến không gian yên tĩnh và linh thiêng giữa lòng thành phố.\n<strong>-Thánh đường Hồi giáo Gurbanguly Hajji:</strong> một trong những thánh đường Hồi giáo lớn và đẹp nhất tại Mary, nổi bật với mái vòm trắng và các tháp minaret thanh thoát; mang tên vị lãnh tụ tinh thần Gurbanguly Hajji.\n<strong>-Chợ địa phương Zelyony:</strong> khu chợ sầm uất nhất thành phố, nơi lý tưởng để cảm nhận nhịp sống thường nhật và sự hiếu khách của người dân Turkmenistan.\n<strong>-Di chuyển về Thủ đô Ashgabat</strong> (350km) (3-4 giờ)`,
    images: [
      "/images/day6/13.jpeg",
      "/images/day6/14.jpeg",
      "/images/day6/15.jpeg",
    ],
  },
  {
    day: "Ngày 7",
    title: "THỦ ĐÔ ASHGABAT",
    content: `<strong>Buổi sáng: Khám phá Làng Nokhur</strong>\n<strong>- Làng Nokhur:</strong> Được ưu ái gọi là một trong những địa điểm lãng mạn nhất trên thế giới. Ngôi làng nổi tiếng là nơi sinh sống của nhóm người Turkmen mang bản sắc văn hóa riêng biệt, được cho là hậu duệ của các chiến binh Alexander Đại đế. Du khách sẽ được thăm quan ngôi làng, nghe những câu chuyện xưa về phong tục, văn hóa truyền thống.\n<strong>- Khu tâm linh – Nghĩa trang sừng dê:</strong> Một địa điểm văn hóa tâm linh vô cùng độc đáo, nổi bật với cách trang trí mộ bằng sừng dê núi – biểu tượng linh thiêng trong tín ngưỡng người dân tộc Nokhur.\n<strong>- Khám phá hang động Kyz Bibi:</strong> Nơi linh thiêng của làng Nokhur.\n<strong>- Ghé thăm Hồ nước ngầm Kowata</strong> (trên đường trở lại Ashgabat)\n
    <strong>- Ăn trưa & giao lưu văn hoá với người dân địa phương</strong>\n
    <strong>- Buổi chiều: Trải nghiệm các Khu Chợ nổi tiếng tại Thủ đô Ashgabat</strong>\n
    <strong>- Chợ Gulistan: </strong>Chợ có mái che lớn và lâu đời nhất Turkmenistan. Nằm ngay trung tâm thành phố, đây không chỉ là nơi mua sắm, còn là nơi phản ánh những nét độc đáo của văn hóa, truyền thống đất nước này. Vào Thế Kỉ XXI: Chợ Gulistan còn được gọi là “Thời đại Hoàng Kim” hoặc “Tolkuchka”.\n<strong>- Chợ Thế kỉ XXI: </strong> Hay còn được gọi là “Thời đại Hoàng Kim” hoặc “Tolkuchka”\n<strong>- Trung tâm mua sắm Berkarar:</strong> Trung tâm mua sắm đông đúc, hiện đại bậc nhất. Du khách thăm quan và tự do mua sắm.\n<strong>- Ăn tối:</strong> Tại nhà hàng địa phương.`,
    images: ["/images/day7/16.jpeg"],
  },
  {
    day: "Ngày 8",
    title: "TURKMENISTAN – VIETNAM",
    content: `<strong>Turkmenistan – Vietnam</strong>\n<strong>- Ăn sáng:</strong> Quý khách được chuẩn bị hộp ăn sáng.\n<strong>- Di chuyển tới Sân bay Ashgabat</strong> \n<strong>- Đáp chuyến bay về Việt Nam theo lịch trình.</strong>\n`,
    images: ["/images/day8/17.jpeg"],
  },
];

const ItinerarySection = () => {
  return (
    <section id="itinerary" className="section bg-amber-50">
      <div className="container mx-auto">
        <div className="text-center md:mb-16 mb-6 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lịch Trình <span className="gradient-text">Chi Tiết</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
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
                  <div className="bg-amber-600 text-white py-2 px-4 rounded-lg inline-block mb-2 font-semibold">
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
                      <strong>Cung điện hình cầu</strong>.{" "}
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
                      <strong>
                        Thủ đô Ashgabat - Khu định cư cổ Nisa – Thành phố
                        Geokdepe - Trại ngựa Akhal Teke{" "}
                      </strong>
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
                      <strong>Bảo tàng Lịch sử & Văn hóa Mary</strong>,{" "}
                      <strong>Nhà thờ Pokrovskaya</strong>,{" "}
                      <strong>Thánh đường Hồi giáo Gurbanguly Hajji</strong>,{" "}
                      <strong>Chợ địa phương Mary </strong>
                    </div>
                  )}
                  {item.day === "Ngày 7" && (
                    <div className="prose max-w-none mt-1">
                      <strong>Làng Nokhur</strong>,{" "}
                      <strong>Chợ Gulistan(Tolkuchka)</strong>,{" "}
                      <strong>Trung tâm mua sắm Berkarar</strong>
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
