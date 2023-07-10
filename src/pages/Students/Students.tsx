import React, {MouseEventHandler, useState} from 'react';
import {ReactComponent as Plus} from "../../assets/vector/plus.svg";
import {ReactComponent as Filter} from "../../assets/vector/filter.svg";
import {
    TabList, TabPanel, TabPanels, Tabs,Tab,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Button,
    ButtonGroup,
    TableContainer,
} from '@chakra-ui/react'

const Students = () => {
    const [active,setActive] = useState<string>("a")


    return (
        <section className="groups">
            <div className="container__main">
                <Tabs>

                    <Button marginRight={'10px'} padding={"20px"} background={"var(--orange-80, rgba(237, 73, 40, 0.80))"} color={"white"} className="groups__add">
                        <Plus/>
                        <span>
                            Добавить
                        </span>
                    </Button>
                    <Button
                        size='md'
                        height='40px'
                        width='173px'
                        border='1px'
                        color='var(--orange-80, rgba(237, 73, 40, 0.80));'
                        colorScheme='RGBA(255, 255, 255, 0.92)'
                        borderColor='#ED4928CC'
                    >
                        <Filter/>
                        Фильтр
                    </Button>
                    <TabList>
                        <Tab onClick={() => setActive("a")} color={`${active === "a" ? "var(--orange-80, rgba(237, 73, 40, 0.80))" : ""}`}>Текущие</Tab>
                        <Tab onClick={() => setActive("b")} color={`${active === "b" ? "var(--orange-80, rgba(237, 73, 40, 0.80))" : ""}`}>Д/Р в этом месяце</Tab>
                        <Tab onClick={() => setActive("c")} color={`${active === "c" ? "var(--orange-80, rgba(237, 73, 40, 0.80))" : ""}`}>Архивные</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel padding={0} className={"groups__table"}>
                            <TableContainer>
                                <Table variant='simple' >
                                    <Thead>
                                        <Tr>
                                            <Th className={"simbl"}>НАЗВАНИЕ</Th>
                                            <Th>Д/Р</Th>
                                            <Th isNumeric>ГРУППА</Th>
                                            <Th isNumeric>СТАТУС ОПЛАТЫ</Th>
                                            <Th isNumeric>КОНТАКТЫ</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>Студент</Td>
                                            <Td>05.07.2001</Td>
                                            <Td isNumeric>Фронт</Td>
                                            <Td isNumeric>Оплачено</Td>
                                            <Td isNumeric>+996 700 010 234

                                            </Td>
                                            <span >
                                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <g clip-path="url(#clip0_275_5238)">
                                                    <path d="M12 0C8.81812 0 5.76375 1.26506 3.51562 3.51469C1.26518 5.76521 0.000623381 8.81734 0 12C0 15.1813 1.26562 18.2357 3.51562 20.4853C5.76375 22.7349 8.81812 24 12 24C15.1819 24 18.2362 22.7349 20.4844 20.4853C22.7344 18.2357 24 15.1813 24 12C24 8.81869 22.7344 5.76431 20.4844 3.51469C18.2362 1.26506 15.1819 0 12 0Z" fill="url(#paint0_linear_275_5238)"/>
                                                    <path d="M5.43184 11.8732C8.93059 10.3492 11.2631 9.34442 12.4293 8.85898C15.7631 7.47279 16.455 7.23204 16.9068 7.22389C17.0062 7.22229 17.2275 7.24686 17.3718 7.36357C17.4918 7.46201 17.5256 7.59514 17.5425 7.68861C17.5575 7.78198 17.5781 7.99479 17.5612 8.16092C17.3812 10.0584 16.5993 14.663 16.2018 16.7884C16.035 17.6876 15.7031 17.9891 15.3825 18.0185C14.685 18.0827 14.1562 17.558 13.4812 17.1157C12.4256 16.4233 11.8293 15.9924 10.8037 15.3169C9.61872 14.5361 10.3875 14.1069 11.0625 13.4057C11.2387 13.2221 14.31 10.4293 14.3681 10.176C14.3756 10.1443 14.3831 10.0262 14.3118 9.96392C14.2425 9.90148 14.1393 9.92286 14.0643 9.93973C13.9575 9.96373 12.2718 11.079 9.00184 13.2853C8.52372 13.6142 8.09059 13.7745 7.70059 13.766C7.27309 13.7569 6.44809 13.5238 5.83497 13.3247C5.08497 13.0804 4.48684 12.9512 4.53934 12.5362C4.56559 12.3202 4.86372 12.0992 5.43184 11.8732Z" fill="white"/>
                                                </g>
                                                <defs>
                                                    <linearGradient id="paint0_linear_275_5238" x1="1200" y1="0" x2="1200" y2="2400" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#2AABEE"/>
                                                        <stop offset="1" stop-color="#229ED9"/>
                                                    </linearGradient>
                                                    <clipPath id="clip0_275_5238">
                                                        <rect width="24" height="24" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            </span>

                                        </Tr>
                                        <Tr>
                                            <Td>Студент</Td>
                                            <Td>08.01.1998</Td>
                                            <Td isNumeric>Питон</Td>
                                            <Td isNumeric>Не оплачено</Td>
                                            <Td isNumeric>+996 700 010 234</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Студент</Td>
                                            <Td>08.01.1998</Td>
                                            <Td isNumeric>Питон</Td>
                                            <Td isNumeric>Оплачено</Td>
                                            <Td isNumeric>+996 700 010 234</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Segun Adebayo</Td>
                                            <Td>22.09.2002</Td>
                                            <Td isNumeric>Lazar Nikolov</Td>
                                            <Td isNumeric>Оплачено</Td>
                                            <Td isNumeric>+996 700 010 234</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Segun Adebayo</Td>
                                            <Td>22.09.2002</Td>
                                            <Td isNumeric>Lazar Nikolov</Td>
                                            <Td isNumeric>Не оплачено</Td>
                                            <Td isNumeric>+996 700 010 234</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Segun Adebayo</Td>
                                            <Td>28.03.1996</Td>
                                            <Td isNumeric>Lazar Nikolov</Td>
                                            <Td isNumeric>Не оплачено</Td>
                                            <Td isNumeric>+996 700 010 234</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Segun Adebayo</Td>
                                            <Td>03.03.2002</Td>
                                            <Td isNumeric>Lazar Nikolov</Td>
                                            <Td isNumeric>Оплачено</Td>
                                            <Td isNumeric>+996 700 010 234</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Segun Adebayo</Td>
                                            <Td>23.07.2002</Td>
                                            <Td isNumeric>Lazar Nikolov</Td>
                                            <Td isNumeric>Оплачено</Td>
                                            <Td isNumeric>+996 700 010 234</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Segun Adebayo</Td>
                                            <Td>23.07.2002</Td>
                                            <Td isNumeric>Lazar Nikolov</Td>
                                            <Td isNumeric>Оплачено</Td>
                                            <Td isNumeric>+996 700 010 234</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Segun Adebayo</Td>
                                            <Td>23.07.2002</Td>
                                            <Td isNumeric>Lazar Nikolov</Td>
                                            <Td isNumeric>Оплачено</Td>
                                            <Td isNumeric>+996 700 010 234</Td>
                                        </Tr>

                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </TabPanel>
                        <TabPanel padding={0} className={"groups__table"}>
                            <TableContainer>
                                <Table variant='simple' >
                                    <Thead>
                                        <Tr>
                                            <Th className={"simbl"}>НАЗВАНИЕ</Th>
                                            <Th>МЕНТОР</Th>
                                            <Th isNumeric>САППОРТ</Th>
                                            <Th isNumeric>КОЛ-ВО СТУДЕНТОВ</Th>
                                            <Th isNumeric>РАСПИСАНИЕ</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>Фронт</Td>
                                            <Td>Максат</Td>
                                            <Td isNumeric>Beknur</Td>
                                            <Td isNumeric>12</Td>
                                            <Td isNumeric>18:00 - 20:00 (пн-ср-пт)</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Kids группа</Td>
                                            <Td>Алибек</Td>
                                            <Td isNumeric>Akram</Td>
                                            <Td isNumeric>9</Td>
                                            <Td isNumeric>14:00 - 16:00 (вт-чт-сб)</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </TabPanel>
                    </TabPanels>
                </Tabs>

            </div>
        </section>
    );
};

export default Students;