"use client"

import React, { useState } from 'react'

export default function NonDivisibleSumCalculator() {

    const [number, setNumber] = useState('')
    const [divisor, setDivisor] = useState('')
    const [sum, setSum] = useState<number | null>(null)

    const calculateSum = (num: string, div: string) => {
        const n = parseInt(num, 10)
        const d = parseInt(div, 10)
        return (n + 1) * n / 2 - (Math.floor(n / d) + 1) * Math.floor(n / d) * d / 2;
    }

    const onClick = () => {
        setSum(calculateSum(number, divisor))
    }

    return (
        <div className="flex flex-col items-center justify-around p-5 m-5 shadow-lg rounded-lg">
            <p className="text-center mb-2">
                このツールでは、指定された数値までの整数のうち、<br/>
                特定の数値で割り切れないものの合計を計算します。
            </p>
            <p className="text-center mt-0">
                最大値と割り数を入力してください。
            </p>
            <input
                type="number"
                className="m-2 p-1"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="最大数を入力"
                min="1"
            />
            <input
                type="number"
                className="m-2 p-1"
                value={divisor}
                onChange={(e) => setDivisor(e.target.value)}
                placeholder="割り数を入力"
                min="1"
            />
            <button className="m-2 p-1 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={onClick}>計算する</button>
            {sum !== null && <p className="m-2">合計: {sum}</p>}
        </div>
    )
}