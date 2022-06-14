const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = 31;

sum = batteryBatches.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
}, 0)

