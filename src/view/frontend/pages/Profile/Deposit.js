import React, { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Select, Input } from "antd";
const Deposit = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [selected, setSelected] = useState({
    label: "Vui lòng chọn ngân hàng",
    img: "/nganhang.png", // Icon mặc định (có thể đổi)
  });
  const handleChange = (event) => {
    const selectedBank = options.find(
      (opt) => opt.value === event.target.value
    );
    setSelected(selectedBank);
  };
  const options = [
    {
      value: "apple",
      label: "MBS",
      img: "/ic_bank_BIDV.png",
    },
    {
      value: "banana",
      label: "BIDV",
      img: "/ic_bank_BIDV.png",
    },
    {
      value: "orange",
      label: "TECH",
      img: "/ic_bank_BIDV.png",
    },
  ];

  return (
    <div className="member-depoin">
      <div className="box-tab-depoin">
        <h4>Phương thức nạp:</h4>
        <div className="tab-buttons">
          <label className={activeTab === "1" ? " active" : "deposit"}>
            <input
              type="radio"
              name="tab"
              value="1"
              checked={activeTab === "1"}
              onChange={() => setActiveTab("1")}
            />
            <label for="">VND</label>
          </label>
          <label className="deposit">
            <input
              type="radio"
              name="tab"
              value="2"
              checked={activeTab === "2"}
              onChange={() => setActiveTab("2")}
            />
            <label for="">USDT</label>
          </label>
        </div>
      </div>
      <div className="tab-content">
        {activeTab === "1" && (
          <div className="list-group-depoin">
            <div className="box-right-depoins">
              <div class="divsodudepoin">
                <h4>Số dư ước tính</h4>
                <div class="sodutongdepoin">
                  <div class="phuongthuc_sodudepoin">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 19.4323C16.1048 19.4323 19.4323 16.1048 19.4323 12C19.4323 7.89525 16.1048 4.56769 12 4.56769C7.89525 4.56769 4.56769 7.89525 4.56769 12C4.56769 16.1048 7.89525 19.4323 12 19.4323ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9904 17.5189 17.5189 21.9904 12 22ZM12 3.31004C7.17655 3.31004 3.26638 7.22022 3.26638 12.0437C3.26638 16.8671 7.17655 20.7773 12 20.7773C16.8234 20.7773 20.7336 16.8671 20.7336 12.0437C20.7336 9.72736 19.8135 7.50593 18.1756 5.86806C16.5377 4.23019 14.3163 3.31004 12 3.31004Z"
                        fill="#BE1515"
                      ></path>
                      <path
                        d="M14.2379 7.72931H15V8.55961H14.2379V14.8541H12.9715V14.0463C12.4908 14.6858 11.8107 15 10.9196 15C10.1106 15 9.43049 14.7195 8.85595 14.1473C8.28141 13.575 8 12.8682 8 12.0491C8 11.2188 8.28141 10.5231 8.85595 9.95091C9.43049 9.37868 10.1106 9.09818 10.9196 9.09818C11.8107 9.09818 12.4908 9.41234 12.9715 10.0407V8.55961H11.072V7.72931H12.9715V7H14.2379V7.72931ZM9.79397 13.3394C10.1457 13.676 10.5913 13.8443 11.1189 13.8443C11.6466 13.8443 12.0921 13.676 12.4439 13.3394C12.7956 12.9916 12.9715 12.5652 12.9715 12.0491C12.9715 11.533 12.7956 11.1066 12.4439 10.77C12.0921 10.4222 11.6466 10.2539 11.1189 10.2539C10.5913 10.2539 10.1457 10.4222 9.79397 10.77C9.44221 11.1066 9.26633 11.533 9.26633 12.0491C9.26633 12.5652 9.44221 12.9916 9.79397 13.3394Z"
                        fill="white"
                      ></path>
                    </svg>
                    <span>VNĐ</span>
                  </div>
                  <span>0.00 USDT ~ 0</span>
                </div>
              </div>

              <div class="divchonmangluoi_depoin">
                <h4>Nạp tiền bằng</h4>
                <div class="divinputmangluoi_depoin">
                  <input type="radio" checked="x" />
                  <img src="/nganhang.png" alt="" width="24" height="24" />
                  <span>Ngân hàng</span>
                </div>
              </div>

              <form action="">
                <div className="custom-select">
                  <Tippy content="Chọn một ngân hàng">
                    <button className="select-button">
                      <img
                        src={selected.img}
                        alt={selected.label}
                        className="select-img"
                      />
                      {selected.label}
                    </button>
                  </Tippy>

                  <div className="dropdown">
                    {options.map((opt) => (
                      <div
                        key={opt.value}
                        className="dropdown-item"
                        onClick={() => setSelected(opt)}
                      >
                        <img
                          src={opt.img}
                          alt={opt.label}
                          className="option-img"
                        />
                        {opt.label}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="divchonnganhang_poind">
                  <label for="">Số tiền nạp vào</label>
                  <div className="divinputnhapsotien_poind">
                    <input
                      type="number"
                      placeholder="Nhập số tiền"
                      
                    />
                    <span>VNĐ</span>
                  </div>
                  <div className="chonganhangfooter_poind">
                    <span>1USDT = 25,700 VNĐ</span>
                    <span>~ 0USDT</span>
                  </div>
                </div>

                <div className="divtien">
                  <div className="divtien_item">100k</div>
                  <div className="divtien_item">500k</div>
                  <div className="divtien_item">1,000k</div>
                  <div className="divtien_item">5,000k</div>
                  <div className="divtien_item">10,000k</div>
                </div>
                <button class="btnruttien_depoin" type="submit">
                  Lấy thông tin thanh toán
                </button>
              </form>
            </div>
          </div>
        )}
        {activeTab === "2" && (
          <div>
            <div className="naptien_body_poind">
              <div className="qr_naptien_poind">
                <svg
                  height="128"
                  width="128"
                  viewBox="0 0 29 29"
                  role="img"
                  className="custom-icon-svg_poind deposit-qr-bsc_poind"
                >
                  <path
                    fill="#FFFFFF"
                    d="M0,0 h29v29H0z"
                    shape-rendering="crispEdges"
                  ></path>
                  <path
                    fill="#000000"
                    d="M0 0h7v1H0zM9 0h3v1H9zM16 0h1v1H16zM19 0h1v1H19zM22,0 h7v1H22zM0 1h1v1H0zM6 1h1v1H6zM10 1h1v1H10zM12 1h6v1H12zM20 1h1v1H20zM22 1h1v1H22zM28,1 h1v1H28zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM8 2h1v1H8zM11 2h2v1H11zM15 2h2v1H15zM20 2h1v1H20zM22 2h1v1H22zM24 2h3v1H24zM28,2 h1v1H28zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h1v1H8zM11 3h7v1H11zM22 3h1v1H22zM24 3h3v1H24zM28,3 h1v1H28zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h1v1H8zM10 4h1v1H10zM18 4h3v1H18zM22 4h1v1H22zM24 4h3v1H24zM28,4 h1v1H28zM0 5h1v1H0zM6 5h1v1H6zM8 5h6v1H8zM15 5h2v1H15zM20 5h1v1H20zM22 5h1v1H22zM28,5 h1v1H28zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22,6 h7v1H22zM8 7h2v1H8zM11 7h1v1H11zM20 7h1v1H20zM0 8h1v1H0zM2 8h5v1H2zM11 8h1v1H11zM13 8h1v1H13zM15 8h1v1H15zM17 8h1v1H17zM20 8h1v1H20zM22 8h5v1H22zM2 9h1v1H2zM5 9h1v1H5zM9 9h1v1H9zM11 9h4v1H11zM16 9h1v1H16zM18 9h2v1H18zM22 9h1v1H22zM24 9h2v1H24zM27,9 h2v1H27zM6 10h3v1H6zM12 10h1v1H12zM15 10h2v1H15zM20 10h1v1H20zM25 10h1v1H25zM0 11h2v1H0zM3 11h3v1H3zM11 11h2v1H11zM14 11h1v1H14zM21 11h1v1H21zM24 11h1v1H24zM27 11h1v1H27zM2 12h6v1H2zM9 12h1v1H9zM12 12h4v1H12zM17 12h2v1H17zM20 12h1v1H20zM23 12h1v1H23zM25 12h2v1H25zM0 13h5v1H0zM7 13h2v1H7zM10 13h3v1H10zM16 13h1v1H16zM19 13h1v1H19zM21 13h2v1H21zM24 13h1v1H24zM26,13 h3v1H26zM1 14h3v1H1zM6 14h1v1H6zM8 14h2v1H8zM11 14h1v1H11zM13 14h1v1H13zM15 14h3v1H15zM20 14h1v1H20zM25 14h1v1H25zM1 15h1v1H1zM3 15h1v1H3zM10 15h1v1H10zM18 15h1v1H18zM20 15h3v1H20zM24 15h2v1H24zM27 15h1v1H27zM0 16h4v1H0zM6 16h2v1H6zM9 16h1v1H9zM12 16h2v1H12zM15 16h1v1H15zM17 16h1v1H17zM20 16h2v1H20zM23 16h1v1H23zM26,16 h3v1H26zM0 17h1v1H0zM3 17h1v1H3zM8 17h2v1H8zM14 17h1v1H14zM16 17h1v1H16zM18 17h2v1H18zM22 17h1v1H22zM24 17h2v1H24zM28,17 h1v1H28zM0 18h1v1H0zM3 18h1v1H3zM5 18h3v1H5zM9 18h3v1H9zM13 18h4v1H13zM20 18h1v1H20zM25 18h1v1H25zM0 19h1v1H0zM2 19h1v1H2zM5 19h1v1H5zM7 19h1v1H7zM10 19h3v1H10zM15 19h2v1H15zM18 19h1v1H18zM20 19h1v1H20zM23 19h3v1H23zM27 19h1v1H27zM0 20h1v1H0zM4 20h3v1H4zM8 20h1v1H8zM11 20h1v1H11zM13 20h1v1H13zM15 20h1v1H15zM17 20h2v1H17zM20 20h5v1H20zM26 20h2v1H26zM8 21h1v1H8zM12 21h1v1H12zM14 21h1v1H14zM16 21h1v1H16zM20 21h1v1H20zM24 21h2v1H24zM28,21 h1v1H28zM0 22h7v1H0zM9 22h2v1H9zM14 22h2v1H14zM17 22h1v1H17zM19 22h2v1H19zM22 22h1v1H22zM24 22h1v1H24zM26 22h2v1H26zM0 23h1v1H0zM6 23h1v1H6zM8 23h2v1H8zM12 23h1v1H12zM14 23h1v1H14zM19 23h2v1H19zM24 23h1v1H24zM27,23 h2v1H27zM0 24h1v1H0zM2 24h3v1H2zM6 24h1v1H6zM8 24h2v1H8zM15 24h4v1H15zM20,24 h9v1H20zM0 25h1v1H0zM2 25h3v1H2zM6 25h1v1H6zM8 25h1v1H8zM12 25h1v1H12zM21 25h1v1H21zM23 25h1v1H23zM27,25 h2v1H27zM0 26h1v1H0zM2 26h3v1H2zM6 26h1v1H6zM8 26h1v1H8zM12 26h2v1H12zM15 26h1v1H15zM18 26h1v1H18zM20 26h1v1H20zM22 26h1v1H22zM24 26h2v1H24zM27 26h1v1H27zM0 27h1v1H0zM6 27h1v1H6zM9 27h1v1H9zM15 27h1v1H15zM18 27h4v1H18zM23 27h3v1H23zM27 27h1v1H27zM0 28h7v1H0zM8 28h1v1H8zM12 28h1v1H12zM15 28h4v1H15zM21 28h2v1H21zM24 28h1v1H24zM26 28h1v1H26z"
                    shape-rendering="crispEdges"
                  ></path>
                </svg>
              </div>
              <div class="diachivi">
                <span>Địa chỉ ví USDT-BEP20:</span>
                <div class="divlinklienketvi">
                  <span>0xde9ef1a6224f528e515e7ee6d7002eccc5fb9b65</span>
                  <div>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6ZM6.9998 11V13H12.9998V11H6.9998ZM6.9998 15V17H12.9998V15H6.9998Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Deposit;
