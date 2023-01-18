let mgb = ["buse", "halilcan", "gorkem", "gulten", "damla", "nesrin","kamuran", "oguz","ali", "burak", "izel", "buse", "halilcan", "gulten", "damla", "nesrin", "ali", "hasan", "burak", "izel", "damla", "oguz","burak", "damla", "ali", "burak"];
function removeDuplicates(mgb){
    return mgb.filter((item,index) => mgb.indexOf(item) === index);
}

console.log(removeDuplicates(mgb));
