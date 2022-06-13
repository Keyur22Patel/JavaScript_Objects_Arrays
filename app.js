

// Exercise 1 Section
const numbers = [2, 22, 12, 17, 18, 39, 129];
function arraySum(arr){
    let sum = 0;
    arr.forEach((number) => {
        sum += number;
    });
    return sum;

}
console.log(arraySum(numbers));


// Exercise 2 Section
let favBook = {}
favBook.title = " Rad seas under rad skies";
favBook.author = " scott";
favBook.pageCount = "700"
favBook.readCount = "1"
console.log(favBook);

favBook.info = function () {
    return `${this.title} by ${this.scott} is ${this.pageCount} pages has read ${this.readCount} time.`;

}
favBook.info = info;
console.log(favBook.info());
// Exercise 3 Section
let sentence = "The quick brown fox jumps over the lazy dog";
    let array = sentence.split(" "); 

    console.log(array);
{
       for (let i = 0; i < sentence.length; i++) {
            console.log(sentence.charAt(i));
          }
          {
          let letters = array[1].split("");{
          letters.reverse();
          let reverseWord =letters.join("");
          
           result.push(reverseWord);}
          
          }
          return result.join(" ");
        }
console.log(reverseWord(sentence)); 
// Exercise 4 Section
let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";


function csvConverter(data){
    let headersStr = data.slice(0, data.indexOf("\n"));
    let headers = headersStr.split(",");
    let values = data.slice(data.indexOf("\n") + 1).split("\n");
    const output = valuesList.map((row) => {
        let values = row .slice(",");
        let obj = {}
        values.forEach((col, idx) => {
            if (idx < headers.length){
                obj[headers[idx]] = col;
            }else{
                obj[`misc${idx}`] = col;

            }
            });
            return obj;
        });
        return output;
    }
   

console.log(csvConverter(csvData));