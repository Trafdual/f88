import React from "react";

const NewsNotification = () => {
  const newsList = [
    "🎁 ĐỔI AVATAR F8BET NGAY - NHẬN QUÀ LIỀN TAY: Thay đổi ảnh đại diện nhận lì xì đến từ F8BET, còn chần chờ gì nữa !!!",
    "🧧Siêu sự kiện 'ĐẠI TIỆC BÍ ẨN NGÀY 25' đã phát thưởng thành công vào 25/03/2025! Hàng loạt phần thưởng giá trị sẽ được trao đến những hội viên may mắn, hãy nhanh tay tham gia! 🎁✨",
    "📢 SERI KHUYẾN MÃI MỪNG ĐẠI LỄ",
  ];

  return (
    <div className="news-notification">
      <div className="ctnr">
        <div className="box-news-notification">
          <div className="notification-left">
            <img
              src="/4ecb031c46f459b9b3cde681a1008776.png"
              alt=""
            />

            <img
              className="icon-mobile-news-notification"
              src="/news_icon.1e72e0ca46719558.png"
              alt=""
            />
            <p>Tin tức mới nhất:</p>
          </div>

          <div className="marque-center-news">
            <marquee behavior="scroll" direction="left" scrollamount="5">
              <a
                onMouseOver={(e) => e.target.parentElement.stop()}
                onMouseOut={(e) => e.target.parentElement.start()}
              >
              🧧 3TWIN - Nhà cái uy tín số một thị trường Châu Á, Hỗ trợ đa dạng các cổng thanh toán: ATM, Banking, MOMO, USDT,... Khuyến mãi ngập tràn theo tháng, thỏa sức cá cược. CSKH hỗ trợ nhiệt tình 24h/7.🎁✨
                &nbsp; | &nbsp;
              </a>
            </marquee>
          </div>

          <div className="btn-view-all-notification">
            <button>tất cả</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsNotification;
