import React from 'react';
import {Link} from "react-router-dom";
import {ReactComponent as BarChart} from "../../assets/vector/bar-chart.svg";
import {ReactComponent as Schedule} from "../../assets/vector/schedule.svg";
import {ReactComponent as Groups} from "../../assets/vector/groups.svg";
import {ReactComponent as Students} from "../../assets/vector/students.svg";
import {ReactComponent as Leads} from "../../assets/vector/Leads.svg";
import {ReactComponent as Stuff} from "../../assets/vector/Stuff.svg";
import {ReactComponent as Payment} from "../../assets/vector/Payment.svg";
import {ReactComponent as Event} from "../../assets/vector/Event.svg";

const Sidebar = () => {
    return (
        <aside className="aside" >
            <div className="aside__logo">
                <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3 18C3 17.1716 3.67157 16.5 4.5 16.5H31.5C32.3284 16.5 33 17.1716 33 18C33 18.8284 32.3284 19.5 31.5 19.5H4.5C3.67157 19.5 3 18.8284 3 18Z" fill="#222222"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M3 9C3 8.17157 3.67157 7.5 4.5 7.5H31.5C32.3284 7.5 33 8.17157 33 9C33 9.82843 32.3284 10.5 31.5 10.5H4.5C3.67157 10.5 3 9.82843 3 9Z" fill="#222222"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M3 27C3 26.1716 3.67157 25.5 4.5 25.5H31.5C32.3284 25.5 33 26.1716 33 27C33 27.8284 32.3284 28.5 31.5 28.5H4.5C3.67157 28.5 3 27.8284 3 27Z" fill="#222222"/>
                </svg>
                <Link to={"/"}>
                    <svg width="75" height="72" viewBox="0 0 85 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="52.2994" cy="29.7741" rx="30.0122" ry="29.7741" fill="#ED4928" fillOpacity="0.8"/>
                        <ellipse cx="33.0122" cy="29.7741" rx="30.0122" ry="29.7741" fill="#222222" fillOpacity="0.8"/>
                        <rect x="22.4678" y="13.521" width="8.00326" height="31.759" fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M34.9766 13.521V20.2393H44.4919V45.28H52.4724V20.2393H61.9876V13.521H34.9766Z" fill="white"/>
                        <path d="M13.524 66.88V78H11.7V66.88H13.524ZM23.1028 66.88V68.368H20.1428V78H18.3188V68.368H15.3428V66.88H23.1028ZM35.8743 71.44V72.976H29.2983V71.44H35.8743ZM48.3979 78L45.8379 73.552H44.4459V78H42.6219V66.88H46.4619C47.3152 66.88 48.0352 67.0293 48.6219 67.328C49.2192 67.6267 49.6619 68.0267 49.9499 68.528C50.2485 69.0293 50.3979 69.5893 50.3979 70.208C50.3979 70.9333 50.1845 71.5947 49.7579 72.192C49.3419 72.7787 48.6965 73.1787 47.8219 73.392L50.5739 78H48.3979ZM44.4459 72.096H46.4619C47.1445 72.096 47.6565 71.9253 47.9979 71.584C48.3499 71.2427 48.5259 70.784 48.5259 70.208C48.5259 69.632 48.3552 69.184 48.0139 68.864C47.6725 68.5333 47.1552 68.368 46.4619 68.368H44.4459V72.096ZM54.5393 66.88V73.968C54.5393 74.8107 54.7579 75.4453 55.1953 75.872C55.6433 76.2987 56.2619 76.512 57.0513 76.512C57.8513 76.512 58.4699 76.2987 58.9073 75.872C59.3553 75.4453 59.5793 74.8107 59.5793 73.968V66.88H61.4033V73.936C61.4033 74.8427 61.2059 75.6107 60.8113 76.24C60.4166 76.8693 59.8886 77.3387 59.2273 77.648C58.5659 77.9573 57.8353 78.112 57.0353 78.112C56.2353 78.112 55.5046 77.9573 54.8433 77.648C54.1926 77.3387 53.6753 76.8693 53.2913 76.24C52.9073 75.6107 52.7153 74.8427 52.7153 73.936V66.88H54.5393ZM72.9141 78H71.0901L65.6021 69.696V78H63.7781V66.864H65.6021L71.0901 75.152V66.864H72.9141V78Z" fill="#222222"/>
                    </svg>
                </Link>
            </div>
            <ul className="aside__menu">
                <Link to={"/"}>
                    <li className="aside__menu-link">
                      <BarChart/>
                        <span>
                           Аналитика
                        </span>


                    </li>
                </Link>
                <Link to={"/"}>
                    <li className="aside__menu-link">
                        <Schedule/>
                        <span>
                           Расписание
                        </span>


                    </li>
                </Link>
                <Link to={"/"}>
                    <li className="aside__menu-link">
                        <Groups/>
                        <span>
                           Группы
                        </span>


                    </li>
                </Link>
                <Link to={"/"}>
                    <li className="aside__menu-link">
                        <Students/>
                        <span>
                           Студенты
                        </span>


                    </li>
                </Link>
                <Link to={"/"}>
                    <li className="aside__menu-link">
                        <Leads/>
                        <span>
                           Лиды
                        </span>


                    </li>
                </Link>
                <Link to={"/"}>
                    <li className="aside__menu-link">
                        <Stuff/>
                        <span>
                           Сотрудники
                        </span>


                    </li>
                </Link>
                <Link to={"/"}>
                    <li className="aside__menu-link">
                        <Payment/>
                        <span>
                           Оплата
                        </span>


                    </li>
                </Link>
                <Link to={"/"}>
                    <li className="aside__menu-link">
                        <Event/>
                        <span>
                           Мероприятия
                        </span>


                    </li>
                </Link>
            </ul>
        </aside>
    );
};

export default Sidebar;