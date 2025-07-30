function sides(literals, ...expressions) {
    const [a , p] = expressions;

    const s1 = ( p + Math.sqrt((p * p) - (16 * a)))/4;
    const s2 = ( p - Math.sqrt((p * p) - (16 * a)))/4;
   return [s1,s2].sort((a , b) => a - b);
} 