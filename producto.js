let A = [[2,0,1],[3,0,0],[5,1,1]];
let B = [[1,0,1], [1,2,1],[1,1,0]];

if(A.length === B[0].length){
    let C = new Array;
    
    for(i = 0; i < A.length; i++){
        C[i] = [];
        for(j = 0; j < B[0].length; j++){
            C[i][j] = 0;
            for(k = 0; k < B.length; k++){
                C[i][j] = C[i][j] + (A[i][k] * B[k][j]);    
            } 
        }    
    }   
    console.log(`Matriz producto.`);
    console.log(C); 
}else{
    let cols = A.length;
    let rows = B[0].length;
    console.log(`La matriz no se puede multiplicar, la cantidad de filas y las columnas de la matriz deben ser iguales.`);
    console.log(`La matriz A tiene ${cols} columnas y la matriz B ${rows} filas.`);
}
