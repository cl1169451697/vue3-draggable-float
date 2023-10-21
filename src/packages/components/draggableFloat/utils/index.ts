export function getPadding(val:string){
    let paddingList:any[] = val.split(',');
    paddingList = paddingList.map(Number)
    const result:any[] = new Array(4)
    if(!val) return  result.fill(0)
    switch (paddingList.length) {
        case 1:
            result.fill(paddingList[0])
            break;
        case  2:
            result[0] = paddingList[0]
            result[1] = paddingList[1]
            result[2] = paddingList[0]
            result[3] = paddingList[1]
            break;
        case  3:
            result[0] = paddingList[0]
            result[1] = paddingList[1]
            result[2] = paddingList[1]
            result[3] = paddingList[2]
            break;
        case 4:
            result[0] = paddingList[0]
            result[1] = paddingList[1]
            result[2] = paddingList[2]
            result[3] = paddingList[3]
            break
    }
    return result;
}