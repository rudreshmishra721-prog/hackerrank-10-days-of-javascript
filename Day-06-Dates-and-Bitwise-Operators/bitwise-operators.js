function getMaxLessThanK(n , k){
    let maxBitwiseValue = 0; 
    for (let a = 1; a <= n; a++){
        for (let b = a + 1; b <= n ; b++){
            const currentBitwiseValue = a & b;
            if (currentBitwiseValue < k && currentBitwiseValue > maxBitwiseValue){
                maxBitwiseValue = currentBitwiseValue;
            }
            
        }
    }
    return  maxBitwiseValue;
}