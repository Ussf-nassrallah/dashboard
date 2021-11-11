import React, { useState } from "react";
import styles from "./Expenses.module.scss";
import data from "../../data";
import { BarChart, Bar, ResponsiveContainer, Cell } from "recharts";

// images
import personOne from "../../assets/png/person1.png";
import personTwo from "../../assets/png/person2.png";
import personThree from "../../assets/png/person3.png";
import boxes from "../../assets/png/boxes.png";
import plant from "../../assets/png/plant.png";

import addIcon from "../../assets/png/addIcon.png";
import optionIcon from "../../assets/png/menuIcon.png";
import cartIcon from "../../assets/svg/cartIcon.svg";
import transportIcon from "../../assets/svg/transportIcon.svg";
import houseIcon from "../../assets/svg/houseIcon.svg";

export default function Expenses() {
    const [activeIndex, setActiveIndex] = useState(0);
    const onMouseOver = (data, index) => setActiveIndex(index);

    const todayExpenses = [
        {
            id: 1,
            expense: "Grocery",
            time: "5:12 pm",
            location: "Belanja di pascar",
            price: 326.8,
            icon: cartIcon,
            iconBackgroundColor: "#32a7e2",
        },
        {
            id: 2,
            expense: "Transportation",
            time: "5:12 pm",
            location: "Naik bus umum",
            price: 15.0,
            icon: transportIcon,
            iconBackgroundColor: "#B548C6",
        },
        {
            id: 3,
            expense: "Housing",
            time: "5:12 pm",
            location: "Bayar Listrik",
            price: 185.75,
            icon: houseIcon,
            iconBackgroundColor: "#FF8700",
        },
    ];

    const previousExpenses = [
        {
            id: 1,
            expense: "Food and Drink",
            time: "5:12 pm",
            location: "Makan Steak",
            price: 156.0,
            icon: cartIcon,
            iconBackgroundColor: "#DC3434",
        },
        {
            id: 2,
            expense: "Entertainment",
            time: "5:12 pm",
            location: "Nonton Bioskop",
            price: 35.2,
            icon: transportIcon,
            iconBackgroundColor: "#4BA83D",
        },
    ];

    const spendCategories = [
        {
            id: 1,
            category: "Food and Drinks",
            price: 872.4,
        },
        {
            id: 2,
            category: "Shopping",
            price: 1378.2,
        },
        {
            id: 3,
            category: "Housing",
            price: 928.5,
        },
        {
            id: 4,
            category: "Transportation",
            price: 420.7,
        },
        {
            id: 5,
            category: "Vehicle",
            price: 520,
        },
    ];

    return (
        <main className={styles.expenses}>
            <div className={styles.expensesCard}>
                <section className={styles.expensesOverview}>
                    <header className={styles.expensesHeader}>
                        <h2 className={styles.expensesTitle}>Expenses</h2>

                        <div className={styles.expensesActions}>
                            <div className={styles.expensesImages}>
                                <img
                                    className={styles.personOne}
                                    src={personOne}
                                    alt="person-1"
                                />
                                <img
                                    className={styles.personTwo}
                                    src={personTwo}
                                    alt="person-2"
                                />
                                <img
                                    className={styles.personThree}
                                    src={personThree}
                                    alt="person-3"
                                />
                            </div>
                            <button>
                                <img
                                    className={styles.addIcon}
                                    src={addIcon}
                                    alt="add"
                                />
                            </button>
                        </div>
                    </header>

                    <p className={styles.dateRange}>01 - 25 March, 2020</p>

                    <ResponsiveContainer width="100%" height="20%">
                        <BarChart data={data}>
                            <Bar
                                dataKey="uv"
                                fill="rgba(21, 122, 255, .2)"
                                onMouseOver={onMouseOver}
                            >
                                {data.map((entry, index) => (
                                    <Cell
                                        key={index}
                                        cursor="pointer"
                                        fill={
                                            index === activeIndex
                                                ? "rgb(21, 122, 255)"
                                                : "rgba(21, 122, 255, .2)"
                                        }
                                    />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>

                    <header className={styles.expensesOverviewHeader}>
                        <h4 className={styles.expensesOverviewTitle}>Today</h4>
                        <button>
                            <img src={optionIcon} alt="options" />
                        </button>
                    </header>

                    <ul className="expenses">
                        {todayExpenses.map((expense, index) => (
                            <li key={index} className={styles.expenseItem}>
                                <div className={styles.expenseItemLeft}>
                                    <div
                                        style={{
                                            backgroundColor: `${expense.iconBackgroundColor}`,
                                        }}
                                        className={styles.expenseItemDiv}
                                    >
                                        <img src={expense.icon} alt="cart" />
                                    </div>
                                    <div className={styles.expenseItemDetails}>
                                        <p className={styles.expenseItemTitle}>
                                            {expense.expense}
                                        </p>
                                        <p className={styles.expenseItemTime}>
                                            {expense.time} + {expense.location}
                                        </p>
                                    </div>
                                </div>
                                <p className={styles.expenseItemPrice}>
                                    -{expense.price.toFixed(2)}
                                </p>
                            </li>
                        ))}
                    </ul>

                    <header className={styles.expensesOverviewHeader}>
                        <h4 className={styles.expensesOverviewTitle}>
                            Monday, 23 March 2020
                        </h4>
                        <button>
                            <img src={optionIcon} alt="options" />
                        </button>
                    </header>

                    <ul className="expenses">
                        {previousExpenses.map((expense, index) => (
                            <li key={index} className={styles.expenseItem}>
                                <div className={styles.expenseItemLeft}>
                                    <div
                                        style={{
                                            backgroundColor: `${expense.iconBackgroundColor}`,
                                        }}
                                        className={styles.expenseItemDiv}
                                    >
                                        <img src={expense.icon} alt="cart" />
                                    </div>
                                    <div className={styles.expenseItemDetails}>
                                        <p className={styles.expenseItemTitle}>
                                            {expense.expense}
                                        </p>
                                        <p className={styles.expenseItemTime}>
                                            {expense.time} + {expense.location}
                                        </p>
                                    </div>
                                </div>
                                <p className={styles.expenseItemPrice}>
                                    -{expense.price.toFixed(2)}
                                </p>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className={styles.moneyOverview}>
                    <p className={styles.moneyOverviewTitle}>
                        where'd your money go ?
                    </p>

                    <ul className={styles.spendCategories}>
                        {spendCategories.map((category, index) => (
                            <li key={index}>
                                <div className={styles.spendCategory}>
                                    <p className={styles.spendCategoryName}>
                                        {category.category}
                                    </p>
                                    <p className={styles.spendCategoryPrice}>
                                        {category.price.toFixed(2)}
                                    </p>
                                </div>
                                <div className={styles.spendCategoryBar}>
                                    <div
                                        style={{
                                            width: `${
                                                (category.price /
                                                    spendCategories.reduce(
                                                        (acc, current) =>
                                                            acc + current.price,
                                                        0
                                                    )) *
                                                100
                                            }%`,
                                        }}
                                        className={styles.spendCategoryBarColor}
                                    ></div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.saveMoneyDiv}>
                        <img className={styles.boxes} src={boxes} alt="boxes" />
                        <img className={styles.plant} src={plant} alt="plant" />
                        <p className={styles.saveMoneyTitle}>Save More Money</p>
                        <p className={styles.saveMoneySubtitle}>
                            Do not save what is left after spending, but spend
                            what is left after saving.
                        </p>
                        <button className={styles.saveMoneyCta}>
                            VIEW TIPS
                        </button>
                    </div>
                </section>
            </div>
        </main>
    );
}
