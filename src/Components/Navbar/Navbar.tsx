import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchUserWithAvatar } from "@redux/auth/authSlice";
import useSubscriptionCheck from "../../utils/useSubscriptionCheck";
import logo from "@assets/logo-01.svg";
import placeholderAvatar from "@assets/Avatar/Avatar.png";
import crown from "@assets/Icons/crown.svg";
import coins from "@assets/Icons/coin.svg";
import UpgradeIcon from "@assets/Icons/Upgrade";
import PlusIcon from "@assets/Icons/Plus";
import HomeIcon from "@assets/Icons/Home";
import PracticeIcon from "@assets/Icons/Book";
import AlphabetIcon from "@assets/Icons/Alphabet";
import AIChatIcon from "@assets/Icons/Robot";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const userId = user?.id;

  const hasActiveSub = useSubscriptionCheck(userId);

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserWithAvatar(userId));
    }
  }, [dispatch, userId]);

  const avatarSrc = user?.imagePath || placeholderAvatar;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/home">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <ul className="navbar-menu">
          <li className="s6">
            <Link to="/home" className="nav-link">
              <HomeIcon className="nav-icon" /> Trang chủ
            </Link>
          </li>
          <li className="s6">
            <Link to="/practice" className="nav-link">
              <PracticeIcon className="nav-icon" /> Luyện tập
            </Link>
          </li>
          <li className="s6">
            <Link to="/alphabet/hiragana" className="nav-link">
              <AlphabetIcon className="nav-icon" /> Bảng chữ cái
            </Link>
          </li>
          <li className="s6">
            <Link to="/aichat" className="nav-link">
              <AIChatIcon className="nav-icon" /> AI Chat
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        {!hasActiveSub && (
          <Link to="/upgrade" className="btn-red s7">
            <img src={crown} alt="crown" className="crown" />
            <p className="s7">Nâng cấp Pro</p>
          </Link>
        )}

        <button className="btn-yellow s7">
          <img src={coins} alt="coins" className="coins" />
          <p className="s7">250</p>
        </button>

        <div className="avatar-container" ref={dropdownRef}>
          <img
            src={avatarSrc}
            alt="avatar"
            className="avatar"
            onClick={() => setIsOpen(!isOpen)}
          />
          {isOpen && (
            <div className="dropdown-menu">
              <a href="#" className="menu-item b6">Tài khoản</a>
              <a href="#" className="menu-item b6">Lịch sử mua hàng</a>
              <a href="#" className="menu-item b6">Cài đặt</a>
              <a href="#" className="menu-item b6">Trợ giúp & Phản hồi</a>
              <Link to="/" className="menu-item logout b6">Đăng xuất</Link>
              <hr className="divider" />
              <div className="premium-section">
                <Link to="/upgrade" className="premium-link">
                  <div className="premium-content">
                    <p className="plus-text h6">
                      Trải nghiệm Kotob<span className="highlight">A.I</span>
                      <PlusIcon className="plus-icon" />
                    </p>
                    <UpgradeIcon className="premium-icon" />
                  </div>
                  <p className="sub-text b8">Mở khóa toàn bộ tính năng độc quyền!</p>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
