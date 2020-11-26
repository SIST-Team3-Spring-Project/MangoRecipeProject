import React from 'react'

function Header() {
    return (
        <div>
            <header className="header">
                <div className="header__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="header__top__inner">
                                    <div className="header__top__left">
                                        <ul>
                                            <li><a href="#">Sign in</a> <span className="arrow_carrot-down"></span></li>
                                            <li><a href="#">Log in</a> <span className="arrow_carrot-down"></span></li>
                                        </ul>
                                    </div>
                                    <div className="header__logo">
                                        <a href="../main/main.do"><img src="../img/mrlogo.png" alt="" style={{ width: '30%' }} /></a>
                                    </div>
                                    <div className="header__top__right">
                                        <div className="header__top__right__links">
                                            <a href="#" className="search-switch"><img src="../img/icon/search.png" alt="" /></a>
                                            <a href="#"><img src="../img/icon/heart.png" alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="canvas__open"><i className="fa fa-bars"></i></div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="header__menu mobile-menu">
                                <ul>
                                    <li><a href="../main/main.do">MY냉장고</a></li>
                                    <li><a href="../recipe/list.do">레시피</a></li>
                                    <li><a href="#">맛집</a></li>
                                    <li><a href="#">추천</a></li>
                                    <li><a href="#">커뮤니티</a>
                                        <ul className="dropdown">
                                            <li><a href="#">Shop Details</a></li>
                                            <li><a href="#">Shoping Cart</a></li>
                                            <li><a href="#">Check Out</a></li>
                                            <li><a href="#">Wisslist</a></li>
                                            <li><a href="#">Class</a></li>
                                            <li><a href="#">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="../fight/list.do">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header