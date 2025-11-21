
import { Logo } from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Logo className="mb-4" />
            <p className="text-gray-400 mb-4 md:whitespace-nowrap whitespace-normal">
              Khám phá vẻ đẹp hoang sơ và nét văn hóa độc đáo của Mông Cổ cùng VIC TOUR.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com/profile.php?id=61574620767717"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-600 p-2 rounded-full hover:bg-amber-500 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>
          {/* <div>
            <h3 className="font-semibold text-lg mb-4">Liên hệ</h3>
            <p className="mb-2">
              Số nhà 29, ngõ 260/28 đường Cầu Giấy, Phường Quan Hoa, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam
            </p>
            <p className="mb-2">Phone: 0989.494.899</p>
            <p className="mb-2">Hotline: 0989.494.899</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Hình ảnh & Liên kết</h3>
            <p className="mb-2">
              <a href="https://drive.google.com/drive/u/2/folders/1MdTa3r9Ez8b7NlEBEubU5Cx8BFLa9-nc" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
                Hình ảnh các đoàn khách của VIC Tour
              </a>
            </p>
          </div> */}
        </div>
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} VIC TOUR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
