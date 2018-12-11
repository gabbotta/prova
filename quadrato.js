class quadrato{
    static q(x){
    if ((typeof x) === "string"){
        return Math.pow(x.length,2)
    }
    else {
        return -1
    }
}
}
module.exports = quadrato;