import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin } from "lucide-react";
import React from "react";

const itineraryData = [
  {
    day: 1,
    title: "THỦ ĐÔ ASHGABAT",
    activities: [
      "Di chuyển Sài Gòn/Hà Nội – Ashgabat",
      "Nghỉ đêm trên máy bay",
    ],
  },
  {
    day: 2,
    title: "KHÁM PHÁ THỦ ĐÔ ASHGABAT",
    activities: [
      "Bảo tàng Quốc gia",
      "Đài tưởng niệm Magtymguly",
      "Khách sạn Yyldyz",
      "Cung điện cưới hình cầu",
    ],
  },
  {
    day: 3,
    title: "THỦ ĐÔ ASHGABAT",
    activities: [
      "Tượng đài Độc lập",
      "Tượng đài Trung lập",
      "Nhà thờ Hồi giáo Ertogrul Gazy",
      "Bảo tàng thảm Turkmen",
      "Nhà thờ Hồi giáo Turkmenbashi Mosque",
    ],
  },
  {
    day: 4,
    title: "THÀNH PHỐ GEOKDEPE",
    activities: [
      "Khu đô thị cổ Nisa",
      "Trang trại ngựa Akhal Eke",
      "Pháo đài Geokdepe",
      "Sa mạc Karakum",
      "Trải nghiệm lều Yurt truyền thống",
    ],
  },
  {
    day: 5,
    title: "THÀNH PHỐ MARY",
    activities: [
      "Cổng địa ngục - Hố gas Darvaza",
      "Chương trình biểu diễn Quốc gia",
      "Pháo đài trung tâm Erk-kala",
      "Công trình cổ đại Gyaur-kala",
      "Pháo đài phía Nam Khan-kala",
      "Pháo đài phía Bắc Sultan-kala",
      "Thành cổ Abdullah Khan-tepe",
    ],
  },
  {
    day: 6,
    title: "THÀNH PHỐ MARY",
    activities: [
      "Bảo tàng lịch sử & dân tộc học Mary",
      "Bảo tàng lịch sử & văn hoá Mary",
      "Nhà thờ Pokrovskaya",
      "Thánh đường Hồi giáo Gurbanguly Hajji",
      "Chợ địa phương Mary Zelyony",
    ],
  },
  {
    day: 7,
    title: "LÀNG NOKHUR, ASHGABAT",
    activities: [
      "Khu tâm linh Sừng dê",
      "Hang động Kyz Bibi",
      "Hồ nước ngầm Kowata",
      "Chợ Gulistan",
      "Chợ Thế kỉ XXI",
      "Trung tâm mua sắm Berkarar",
    ],
  },
  {
    day: 8,
    title: "DI CHUYỂN VỀ NƯỚC",
    activities: [
      "Di chuyển Ashgabat – Sài Gòn/Hà Nội",
      "Mua sắm tại Khu miễn thuế trong Sân bay",
    ],
  },
];

const ScheduleSummary = () => {
  return (
    <section
      id="itinerary"
      className="py-16 md:py-24 bg-tour-light bg-amber-600"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#fff]">
            Tóm tắt hành trình 8 ngày
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Cột 1: Ngày 1-6 */}
          <Accordion type="single" collapsible className="space-y-4">
            {itineraryData.slice(0, 4).map((day) => (
              <AccordionItem
                key={day.day}
                value={`day-${day.day}`}
                className="border-0"
              >
                <Card className="border-2 border-border hover:border-primary transition-colors shadow-soft">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-start gap-4 text-left">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-primary bg-[#d97706] flex items-center justify-center text-primary-foreground font-bold text-lg">
                        {day.day}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-[#d97706] mb-1">
                          Ngày {day.day}
                        </div>
                        <div className="text-lg font-semibold">{day.title}</div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <CardContent className="px-6 pb-6 pt-2">
                      <ul className="space-y-3">
                        {day.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">
                              {activity.split("\n").map((line, i) => (
                                <React.Fragment key={i}>
                                  {line}
                                  <br />
                                </React.Fragment>
                              ))}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Cột 2: Ngày 7-12 */}
          <Accordion type="single" collapsible className="space-y-4">
            {itineraryData.slice(4, 8).map((day) => (
              <AccordionItem
                key={day.day}
                value={`day-${day.day}`}
                className="border-0"
              >
                <Card className="border-2 border-border hover:border-primary transition-colors shadow-soft">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-start gap-4 text-left">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg bg-[#d97706]">
                        {day.day}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-muted-foreground mb-1">
                          Ngày {day.day}
                        </div>
                        <div className="text-lg font-semibold">{day.title}</div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <CardContent className="px-6 pb-6 pt-2">
                      <ul className="space-y-3">
                        {day.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSummary;
