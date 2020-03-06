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
        return intPart + "-" + fracPart;
    }
}

class tester {
    run() {
        let formatter = new ThirtySecondsFormatter()

        // Do the testes, and report all the cases the formatter fails.
        let success = true
        if(formatter.convert(9.03125) !== "09-01") {
            failCases.push(9.03125)
            success = false
        }
        if (formatter.convert(1.0000) !== "01-00") {
            failCases.push(1.0000)
            success = false
        }
        if (formatter.convert(0.0000) !== "00-00") {
            failCases.push(0.0000)
            success = false
        }
        if (formatter.convert(1000.96875) !== "1000-31") {
            failCases.push(1000.96875)
            success = false
        }

        
        if (success) {
            log("The Thirty Seconds Formatter passes all the test cases!")
        }
        return null
    }
}