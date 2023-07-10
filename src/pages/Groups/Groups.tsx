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

const Groups = () => {
    const [active,setActive] = useState<string>("a")


    return (
        <section className="groups">
            <div className="container__main">
                <Tabs>
                    <Button padding={"20px"} background={"var(--orange-80, rgba(237, 73, 40, 0.80))"} color={"white"} className="groups__add">
                        <Plus/>
                        <span>
                            Добавить
                        </span>

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
                                        <Tr>
                                            <Td>Фронт</Td>
                                            <Td>Хамза</Td>
                                            <Td isNumeric>Nurs</Td>
                                            <Td isNumeric>7</Td>
                                            <Td isNumeric>18:00 - 20:00 (пн-ср-пт)</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Питон</Td>
                                            <Td>Султан</Td>
                                            <Td isNumeric>Aman</Td>
                                            <Td isNumeric>12</Td>
                                            <Td isNumeric>20:00 - 22:00 (пн-ср-пт)</Td>
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

export default Groups;