import { Link } from "react-router-dom";

const GamePartListCasinoGreat = () => {
  return (
    <div style={{padding:"5px"}}>
      <div className="game-part-list" >
        <div className="title-part-game d-flex js-between ai-center">
          <span>Trò Chơi Live Casino Hay Nhất</span>
          <Link to={"/casino"}>Xem tất cả</Link>
        </div>
        <div className="row">
          <div className="clm" style={{ "--w-lg": 4, "--w-md": 4, "--w-xs": 4 }}>
            <div className="item-game-part-games">
              <Link>
                <img src="/dg.png" alt="" />
                <span>DG Trực Tuyến</span>
              </Link>
            </div>
          </div>

          <div className="clm" style={{ "--w-lg": 4, "--w-md": 4, "--w-xs": 4 }}>
            <div className="item-game-part-games">
              <Link>
                <img src="/se.png" alt="" />
                <span>SE Trực Tuyến</span>
              </Link>
            </div>
          </div>

          <div className="clm" style={{ "--w-lg": 4, "--w-md": 4, "--w-xs": 4 }}>
            <div className="item-game-part-games">
              <Link>
                <img src="/1fd5c51c4e9947f88bd972fe17f4710f.png" alt="" />
                <span>WM Trực Tuyến</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="game-part-list">
        <div className="title-part-game d-flex js-between ai-center">
          <span>Trò Chơi Được Yêu Thích Nhất</span>
          <Link>Xem tất cả</Link>
        </div>
        <div className="row">
          <div className="clm" style={{ "--w-lg": 4, "--w-md": 4, "--w-xs": 4 }}>
            <div className="item-game-part-games">
              <Link>
                <img src="/gamefavorite/matchuoc.png" alt="" />
                <span>Đường mạt chược</span>
              </Link>
            </div>
          </div>

          <div className="clm" style={{ "--w-lg": 4, "--w-md": 4, "--w-xs": 4 }}>
            <div className="item-game-part-games">
              <Link>
                <img src="/gamefavorite/khobau.png" alt="" />
                <span>Kho báu Aztec</span>
              </Link>
            </div>
          </div>

          <div className="clm" style={{ "--w-lg": 4, "--w-md": 4, "--w-xs": 4 }}>
            <div className="item-game-part-games">
              <Link>
                <img src="/gamefavorite/ace.png" alt="" />
                <span>Siêu cấp ace</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePartListCasinoGreat;