import React, {MouseEventHandler, useState} from 'react';
import {ReactComponent as Plus} from "../../assets/vector/plus.svg";

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
import {ReactComponent as Filter} from "../../assets/vector/filter.svg";

const Staff = () => {
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
                        <Tab onClick={() => setActive("b")} color={`${active === "b" ? "var(--orange-80, rgba(237, 73, 40, 0.80))" : ""}`}>Архивные</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel padding={0} className={"groups__table"}>
                            <TableContainer>
                                <Table variant='simple' >
                                    <Thead>
                                        <Tr>
                                            <Th className={"simbl"}>НАЗВАНИЕ</Th>
                                            <Th>Д/Р</Th>
                                            <Th isNumeric>ДОЛЖНОСТЬ</Th>
                                            <Th isNumeric> КОНТАКТЫ</Th>

                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>

                                            <Td>Студент</Td>
                                            <Td>05.07.2001</Td>
                                            <Td isNumeric>Администратор</Td>
                                            <Td isNumeric>+996 700 010 234</Td>

                                        </Tr>
                                        <Tr>
                                            <Td>Студент</Td>
                                            <Td>05.07.2001</Td>
                                            <Td isNumeric>Ментор фронт</Td>
                                            <Td isNumeric>+996 700 010 234</Td>

                                        </Tr>
                                        <Tr>
                                            <Td>Студент</Td>
                                            <Td>05.07.2001</Td>
                                            <Td isNumeric>Питон</Td>
                                            <Td isNumeric>+996 700 010 234</Td>

                                        </Tr>
                                        <Tr>
                                            <Td>Студент</Td>
                                            <Td>05.07.2001</Td>
                                            <Td isNumeric>Lazar Nikolov</Td>
                                            <Td isNumeric>+996 700 010 234</Td>

                                        </Tr>
                                        <Tr>
                                            <Td>Студент</Td>
                                            <Td>05.07.2001</Td>
                                            <Td isNumeric>Администратор</Td>
                                            <Td isNumeric>+996 700 010 234</Td>

                                        </Tr>
                                        <Tr>
                                            <Td>Студент</Td>
                                            <Td>05.07.2001</Td>
                                            <Td isNumeric>Администратор</Td>
                                            <Td isNumeric>+996 700 010 234</Td>

                                        </Tr>
                                        <Tr>
                                            <Td>Студент</Td>
                                            <Td>05.07.2001</Td>
                                            <Td isNumeric>Администратор</Td>
                                            <Td isNumeric>+996 700 010 234</Td>

                                        </Tr>
                                        <Tr>
                                            <Td>Студент</Td>
                                            <Td>05.07.2001</Td>
                                            <Td isNumeric>Администратор</Td>
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

export default Staff;