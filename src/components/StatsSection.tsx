
import { Book, Users, Award, Building } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-amber-600" />,
      value: "60,000+",
      label: "Sinh viên",
    },
    {
      icon: <Book className="h-8 w-8 text-amber-600" />,
      value: "100+",
      label: "Chương trình đào tạo",
    },
    {
      icon: <Building className="h-8 w-8 text-amber-600" />,
      value: "500+",
      label: "Doanh nghiệp đối tác",
    },
    {
      icon: <Award className="h-8 w-8 text-amber-600" />,
      value: "50",
      label: "Năm kinh nghiệm",
    },
  ];

  return (
    <section className="py-16 bg-amber-600 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-white/20">{stat.icon}</div>
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-lg text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
