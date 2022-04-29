module.exports = class NumberRead {

    static #angka = ["SATU ", "DUA ", "TIGA ", "EMPAT ", "LIMA ", "ENAM ", "TUJUH ", "DELAPAN ", "SEMBILAN "];
    static #angka2 = ["", "RIBU ", "JUTA ", "MILIAR ", "TRILIUN "];

    constructor() {
    }

    static #convert(number) {
        let result = "";
        let d1 = parseInt(number / 100);
        let d2 = parseInt(number % 100 / 10);
        let d3 = parseInt(number % 100 % 10);

        if (d1 != 0) {
            if (d1 == 1) {
                result = "SERATUS ";
            } else {
                result = this.#angka[d1 - 1] + "RATUS ";
            }
        }
        if (d2 != 0) {
            if (d2 == 1 && d3 == 0) {
                result += "SEPULUH ";
            } else if (d2 == 1) {
                if (d3 == 1) {
                    result += "SEBELAS ";
                } else {
                    result += this.#angka[d3 - 1] + "BELAS ";
                }
            } else {
                result += this.#angka[d2 - 1] + "PULUH ";
            }
        }
        if (d3 != 0 && d2 != 1) {
            result += this.#angka[d3 - 1];
        }
        return result;
    }

    static speak(number) {
        let result = "";
        let temp = "";
        let count = 0;
        let count2 = 0;
        let cNumber = (number + "").split("");
        for (let i = cNumber.length - 1; i >= 0; i--) {
            temp = cNumber[i] + temp;
            count++;
            if (count == 3 || i == 0) {
                result = this.#convert(parseInt(temp)) + this.#angka2[count2] + result;
                count2++;
                count = 0;
                temp = "";
            }
        }
        return result;
    }
  }