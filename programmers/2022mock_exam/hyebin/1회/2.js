function solution(want, number, discount) {

    let answer = 0;
    let wantObj = new Map();
    let saleObj = new Map();

      for (let i = 0; i < want.length; i++) {
        saleObj.set(want[i], 0)
        wantObj.set(want[i], number[i])
        }
        // console.log(wantObj, saleObj)

    let bucket = 0;
    for (let i = 0; i < 10; i++){
        if(wantObj.get(discount[i]) && wantObj.get(discount[i])> saleObj.get(discount[i])){
                bucket += 1
                saleObj.set( discount[i],  saleObj.get(discount[i])+1)
        }
    }

    if(bucket === 10) answer += 1

    for (let i = 10; i< discount.length; i++){
        if(wantObj.get(discount[i-10])){
            saleObj.set(discount[i-10], saleObj.get(discount[i-10])-1)

                bucket -= 1
                console.log(bucket)
                
            }
        

        if(wantObj.get(discount[i]) && wantObj.get(discount[i])> saleObj.get(discount[i])){
                bucket += 1
        }
                saleObj.set( discount[i],  saleObj.get(discount[i])+1)

        if(bucket === 10) answer+=1
    }
    console.log(saleObj)
    console.log(answer)

}