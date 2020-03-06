log = console.log
class ThirtySecondsFormatter {
    convert(quote) {
        let intPart = Math.floor(quote)
        let fracPart = (quote - intPart) * 32
        if (intPart < 10) {
            intPart = "0" + intPart
        }
        if (fracPart < 10) {
            fracPart = "0" + fracPart
        }
        return intPart + "-" + fracPart
    }
}

class tester {
    run() {
        let formatter = new ThirtySecondsFormatter()

        // Do the testes, and report all the cases the formatter fails.
        if(formatter.convert(9.03125) !== "09-01") {
            log("9.03125 doesn't work")
        }
        if (formatter.convert(1.0000) !== "01-00") {
            log("1.0000 doesn't work")
        }
        if (formatter.convert(0.0000) !== "00-00") {
            log("0.0000 doesn't work")
        }
        if (formatter.convert(1000.96875) !== "1000-31") {
            log("1000.96875 doesn't work")
        }
        if (formatter.convert(101.28125) !== "101-09") {
            log("101.28125 doesn't work")
        }
    }
}