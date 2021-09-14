import React, { useState } from 'react'
import styles from './Expenses.module.scss'
import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';

import personOne from '../../assets/png/person1.png'
import personTwo from '../../assets/png/person2.png'
import personThree from '../../assets/png/person3.png'
import addIcon from '../../assets/png/addIcon.png'
import optionIcon from '../../assets/png/menuIcon.png'
import cartIcon from '../../assets/svg/cartIcon.svg'

const Expenses = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const onMouseOver = (data, index) => setActiveIndex(index);

  return (
    <main className={styles.expenses}>
      <div className={styles.expensesCard}>
        <section className={styles.expensesOverview}>
          <header className={styles.expensesHeader}>
            <h2 className={styles.expensesTitle}>
              Expenses
            </h2>

            <div className={styles.expensesActions}>
              <div className={styles.expensesImages}>
                <img className={styles.personOne} src={personOne} alt="person-1" />
                <img className={styles.personTwo} src={personTwo} alt="person-2" />
                <img className={styles.personThree} src={personThree} alt="person-3" />
              </div>
              <button>
                <img className={styles.addIcon} src={addIcon} alt="add" />
              </button>
            </div>
          </header>

          <p className={styles.dateRange}>
            01 - 25 March, 2020
          </p>

          <ResponsiveContainer width="100%" minHeight="9vh">
            <BarChart width={150} height={40} data={data}>
              <Bar
                dataKey="uv"
                fill="rgba(21, 122, 255, .2)"
                onMouseOver={onMouseOver}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={index}
                    cursor="pointer"
                    fill={index === activeIndex ? "rgb(21, 122, 255)" : "rgba(21, 122, 255, .2)"}
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

          <ul>
            <li className={styles.expenseItem}>
              <div className={styles.expenseItemLeft}>
                <div className={styles.expenseItemDiv}>
                  <img src={cartIcon} alt="cart" />
                </div>
                <div className={styles.expenseItemDetails}>
                  <p className={styles.expenseItemTitle}>Grocery</p>
                  <p className={styles.expenseItemTime}>
                    5:12 pm + Helanja di pasar
                  </p>
                </div>
              </div>
              <p className={styles.expenseItemPrice}>-326.000</p>
            </li>
          </ul>

        </section>
      </div>
    </main>
  )
}

export default Expenses
