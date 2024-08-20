import { formatSecond } from "./format";

describe("функция форматирвония времени", () => {

    it("Проверка правильности форматирования числа в строку", ()=> {
        const result = formatSecond(6)
        expect(result).toBe("00:06")
    })

    it("Проверка правильности форматирования числа в строку", ()=> {
        const result = formatSecond(0)
        expect(result).toBe("00:00")
    })
})