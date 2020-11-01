function countingApplesAndOranges(s, t, a, b, apples, oranges){
    const appleDistance = [s-a, t-a];
    const orangeDistance = [s-b, t-b];
    const applesInTheHouse = apples.filter(item => appleDistance[0] <= item && item <= appleDistance[1] );
    const orangesInTheHouse = oranges.filter(item => orangeDistance[0] <= item && item <= orangeDistance[1]);
    console.log(applesInTheHouse.length);
    console.log(orangesInTheHouse.length);
}

