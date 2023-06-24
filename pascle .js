var generate = function(numRows) {
    if(numRows < 1)
    return[];

    if(numRows ===1)
    return[[1]];
    for(let i=1;i<numRows;i++){
        let preRow =triangle[i-1]
        const curRows=[]
        curRows.push(1)
        

    for(let j=1;j<preRow.length;j++){
        curRows[j] = preRow[j]+preRow[j-1];
    }
    curRows.push(1)
    triangle.push(curRows)
    }
    return triangle
};
console.log(triangle)