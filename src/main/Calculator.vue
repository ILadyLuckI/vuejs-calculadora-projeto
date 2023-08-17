<template>
    <div class="calculator">
        <Display :value="displayValue" />
        <Button label="LIMPAR" triple @onClick="clearMemory" />
        <Button label="x²" operation @onClick="calculateExponentSquared"/>                
        <Button label="%" operation @onClick="calculatePercentage"/>        
        <Button label="√" operation @onClick="calculateSquareRoot"/>        
        <Button label="/" operation @onClick="setOperation"/>      
        <Button label="7" @onClick="addDigit"/>
        <Button label="8" @onClick="addDigit"/>
        <Button label="9" @onClick="addDigit"/>
        <Button label="*" operation @onClick="setOperation"/>
        <Button label="4" @onClick="addDigit"/>
        <Button label="5" @onClick="addDigit"/>
        <Button label="6" @onClick="addDigit"/>
        <Button label="-" operation @onClick="setOperation"/>
        <Button label="1" @onClick="addDigit"/>
        <Button label="2" @onClick="addDigit"/>
        <Button label="3" @onClick="addDigit"/>
        <Button label="+" operation  @onClick="setOperation"/>
        <Button label="0" double @onClick="addDigit"/>
        <Button label="." @onClick="addDigit"/>
        <Button label="=" operation  @onClick="setOperation"/>        
    </div>
</template>

<script>
import Display from "../components/Display.vue"
import Button from "../components/Button.vue"

export default {
    data: function() {
        return {
            displayValue: "0",
            clearDisplay: false,
            operation: null,
            values: [0, 0],
            current: 0            
        }
    },
    components: { Button, Display },
    methods: {
        clearMemory() {
            Object.assign(this.$data, this.$options.data())
        },
        setOperation(operation) {
            if(this.current === 0) {
                this.operation = operation
                this.current = 1
                this.clearDisplay = true
            } else {
                const equals = operation === "="
                const currentOperation = this.operation

                try {
                    this.values[0] = eval(
                        `${this.values[0]} ${currentOperation} ${this.values[1]}`
                    )
                } catch (e) {
                    this.$emit('onError', e)
                }

                this.values[1] = 0

                this.displayValue = this.values[0]
                this.operation = equals ? null : operation
                this.current = equals ? 0 : 1
                this.clearDisplay = !equals
            }
        },
        addDigit(n) {
            if(n === "." && this.displayValue.includes(".")) {
                return
            }

            const clearDisplay = this.displayValue === "0"
                || this.clearDisplay
                const currentValue = clearDisplay ? "" : this.displayValue
                const displayValue = currentValue + n

                this.displayValue = displayValue
                this.clearDisplay = false

            if(n !== ".") {
                const i = this.current
                const newValue = parseFloat(displayValue)
                this.values[i] = newValue
            }
        },
        calculatePercentage() {
            this.displayValue = `${parseFloat(this.displayValue) / 100 }`
        },
        calculateSquareRoot() {
            const result = Math.sqrt(parseFloat(this.displayValue));
            this.displayValue = result.toString();        
        },
        calculateExponentSquared() {
            const result = parseFloat(this.displayValue) ** 2;
            this.displayValue = result.toString();
        }
    }
}
</script>

<style>
.calculator {
    height: 340px;
    width: 250px;
    border-radius: 5px;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 50px;
}
</style>