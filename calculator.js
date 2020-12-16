const inputElement=document.querySelector(".input");
const outputOperationElement=document.querySelector(".operation .value");
const outputResultElement=document.querySelector(".result .value");
const OPERATORS=["+","-","*","/"];
const POWER="POWER(";
const FACTORIAL="FACTORIAL";
let data={
    operation:[],
    formula:[]
}

let calculatorButtons = [
    {
        name : "rad",
        symbol : "Rad",
        formula : false,
        type : "key"
    },
    {
        name : "deg",
        symbol : "Deg",
        formula : false,
        type : "key"
    },
    {
        name : "square-root",
        symbol : "√",
        formula : "Math.sqrt",
        type : "math_function"
    },
    {
        name : "square",
        symbol : "x²",
        formula : POWER,
        type : "math_function"
    },
    {
        name : "open-parenthesis",
        symbol : "(",
        formula : "(",
        type : "number"
    },
    {
        name : "close-parenthesis",
        symbol : ")",
        formula : ")",
        type : "number"
    },
    {
        name : "clear",
        symbol : "C",
        formula : false,
        type : "key"
    },
    {
        name : "delete",
        symbol : "⌫",
        formula : false,
        type : "key"
    },
    {
        name : "pi",
        symbol : "π",
        formula : "Math.PI",
        type : "number"
    },
    {
        name : "cos",
        symbol : "cos",
        formula : "trigo(Math.cos,",
        type : "trigo_function"
    },{
        name : "sin",
        symbol : "sin",
        formula : "trigo(Math.sin,",
        type : "trigo_function"
    },{
        name : "tan",
        symbol : "tan",
        formula : "trigo(Math.tan,",
        type : "trigo_function"
    },{
        name : "7",
        symbol : 7,
        formula : 7,
        type : "number"
    },{
        name : "8",
        symbol : 8,
        formula : 8,
        type : "number"
    },{
        name : "9",
        symbol : 9,
        formula : 9,
        type : "number"
    },
    {
        name : "division",
        symbol : "÷",
        formula : "/",
        type : "operator"
    },
    {
        name : "e",
        symbol : "e",
        formula : "Math.E",
        type : "number"
    },
    {
        name : "acos",
        symbol : "acos",
        formula : "invTrigo(Math.acos,",
        type : "trigo_function"
    },{
        name : "asin",
        symbol : "asin",
        formula : "invTrigo(Math.asin,",
        type : "trigo_function"
    },{
        name : "atan",
        symbol : "atan",
        formula : "invTrigo(Math.atan,",
        type : "trigo_function"
    },
    {
        name : "4",
        symbol : 4,
        formula : 4,
        type : "number"
    },{
        name : "5",
        symbol : 5,
        formula : 5,
        type : "number"
    },{
        name : "6",
        symbol : 6,
        formula : 6,
        type : "number"
    },{
        name : "multiplication",
        symbol : "×",
        formula : "*",
        type : "operator"
    },{
        name : "factorial",
        symbol : "×!",
        formula : FACTORIAL,
        type : "math_function"
    },{
        name : "exp",
        symbol : "exp",
        formula : "Math.exp",
        type : "math_function"
    },{
        name : "ln",
        symbol : "ln",
        formula : "Math.log",
        type : "math_function"
    },{
        name : "log",
        symbol : "log",
        formula : "Math.log10",
        type : "math_function"
    },{
        name : "1",
        symbol : 1,
        formula : 1,
        type : "number"
    },{
        name : "2",
        symbol : 2,
        formula : 2,
        type : "number"
    },{
        name : "3",
        symbol : 3,
        formula : 3,
        type : "number"
    },{
        name : "subtraction",
        symbol : "–",
        formula : "-",
        type : "operator"
    },{
        name : "power",
        symbol : "x<span>y</span>",
        formula : POWER,
        type : "math_function"
    },{
        name : "ANS",
        symbol : "ANS",
        formula : "ans",
        type : "number"
    },{
        name : "percent",
        symbol : "%",
        formula : "%",
        type : "number"
    },{
        name : "comma",
        symbol : ".",
        formula : ".",
        type : "number"
    },{
        name : "0",
        symbol : 0,
        formula : 0,
        type : "number"
    },{
        name : "calculate",
        symbol : "=",
        formula : "=",
        type : "calculate"
    },{
        name : "addition",
        symbol : "+",
        formula : "+",
        type : "operator"
    }
];
function createCalculatorButtons(){
const btnsPerRow=8;
let addedBtns=0

calculatorButtons.forEach((button)=>{
    if(addedBtns%btnsPerRow==0){
        inputElement.innerHTML+=`<div class="row"></div>`;
    }
    const row=document.querySelector(".row:last-child");
    row.innerHTML+=`<button class="colour" id="${button.name}">${button.symbol}</button>`;
    addedBtns++;
})
}
createCalculatorButtons();
inputElement.addEventListener("click",(event)=>{
    const targetBtn=event.target;
    calculatorButtons.forEach((button)=>{
        if(button.name==targetBtn.id) calculator(button);
    })
})

let RADIAN=true;
const radBtn=document.getElementById("rad")
const degBtn=document.getElementById("deg")
radBtn.classList.toggle("active-angle")

function angleToggler(){
    radBtn.classList.toggle("active-angle")
    degBtn.classList.toggle("active-angle")
}

function calculator(button){
    if(button.type=="operator"){
        data.operation.push(button.symbol)
        data.formula.push(button.formula)
    }else if(button.type=="number"){
        data.operation.push(button.symbol)
        data.formula.push(button.formula)
    }else if(button.type=="trigo_function"){
        data.operation.push(button.symbol+"(");
        data.formula.push(button.formula);
    }else if(button.type=="math_function"){
        let symbol,formula;
        if(button.name=="factorial"){
             symbol="!";
             formula=button.formula;
             data.operation.push(symbol);
             data.formula.push(formula);
        }else if(button.name=="power"){
             symbol="^(";
             formula=button.formula;
             data.operation.push(symbol);
             data.formula.push(formula);
        }else if(button.name=="square"){
             symbol="^(";
             formula=button.formula;
             data.operation.push(symbol);
             data.formula.push(formula);
             data.operation.push("2)");
             data.formula.push("2)");
        }
        else{
                symbol=button.symbol+"(";
                formula=button.formula+"(";
                data.operation.push(symbol);
                data.formula.push(formula);
        }
    }else if(button.type=="key"){
        if(button.name=="clear"){
            data.operation=[];
            data.formula=[];
            updateOutputResult(0);
        }else if(button.name=="delete"){
            data.operation.pop();
            data.formula.pop();
        }else if(button.name=="rad"){
            RADIAN=true;
            angleToggler();
        }else if(button.name=="deg"){
            RADIAN=false;
            angleToggler();
        }
        
    }else if(button.type=="calculate"){
        formula_str=data.formula.join('');
        let powerSearchResult=search(data.formula,POWER);
        let factorialSearchResult=search(data.formula,FACTORIAL);
        const BASES=powerBaseGetter(data.formula,powerSearchResult);
        BASES.forEach(base=>{
            let toReplace=base+POWER;
            let replacement="Math.pow("+base+",";
            formula_str=formula_str.replace(toReplace,replacement);
        })
        const NUMBERS=factorialNumberGetter(data.formula,factorialSearchResult);
        NUMBERS.forEach(factorial=>{
            formula_str=formula_str.replace(factorial.toReplace,factorial.replacement);
        })

        let result;
        try{
            result=eval(formula_str);
        }
        catch(error){
            if(error){
                result="Syntax Error";
                updateOutputResult(result);
                return;
            }
        }
        ans=result;
        data.operation=[result];
        data.formula=[result];
        updateOutputResult(result);
        return;
    }
    updateOutputOperation(data.operation.join(''));
}
function factorialNumberGetter(formula,factorialSearchResult){
let numbers=[];
let factorialSequence=0;
factorialSearchResult.forEach(factorialIndex=>{
    let number=[];
    let nextIndex=factorialIndex+1;
    let nextInput=formula[nextIndex];
    if(nextInput==FACTORIAL){
        factorialSequence+=1;
        return;
    }
    let first_factorialIndex=factorialIndex-factorialSequence;
    let previousIndex=first_factorialIndex-1;
    let parenthesesCount=0
    while(previousIndex>=0){
        if(formula[previousIndex]=="(") parenthesesCount--;
        if(formula[previousIndex]==")") parenthesesCount++;
        let is_operator=false;
        OPERATORS.forEach(OPERATOR=>{
            if(formula[previousIndex]==OPERATOR) is_operator=true;
        })
        if(is_operator && parenthesesCount==0) break;
        number.unshift(formula[previousIndex]);
        previousIndex--;
    }
    let number_str=number.join('');
    const factorial="factorial(";
    const closeParenthesis=")";
    let times=factorialSequence+1;
    let toReplace=number_str+FACTORIAL.repeat(times);
    let replacement=factorial.repeat(times)+number_str+closeParenthesis.repeat(times);
    numbers.push({
        toReplace:toReplace,
        replacement:replacement
    })
    factorialSequence=0;
})
return numbers;
}
function powerBaseGetter(formula,powerSearchResult){
let powers_bases=[];
powerSearchResult.forEach(power_index=>{
    let base=[];
    let parenthesesCount=0;
    let previousIndex=power_index-1;
    while(previousIndex>=0){
        if(formula[previousIndex]=="(") parenthesesCount--;
        if(formula[previousIndex]==")") parenthesesCount++;
        let is_operator=false;
        OPERATORS.forEach(OPERATOR=>{
            if(formula[previousIndex]==OPERATOR) is_operator=true;
        })
        let is_power=formula[previousIndex]==POWER;
        if((is_operator && parenthesesCount==0)||is_power) break;
        base.unshift(formula[previousIndex]);
        previousIndex--;
    }
    powers_bases.push(base.join(''));

})
return powers_bases;
}
function search(array,keyword){
    let search_result=[];
    array.forEach((element,index)=>{
        if(element==keyword) search_result.push(index);
    })
    return search_result;
}

function updateOutputOperation(operation){
    outputOperationElement.innerHTML=operation;
}
function updateOutputResult(result){
    let s=String(result)
    let position=s.indexOf('.')
    if(s.length-position-1>4){
        result=result.toFixed(4)
    }
    if(result==0)
        result=0
    outputResultElement.innerHTML=result
}
function factorial(number){
    if(number%1!=0){
        return gamma(number+1);
    }
    if(number===0||number===1){
        return 1;
    }
    let result=1;
    for(let i=1;i<=number;i++){
        result=result*i;
        if(result===Infinity)
            return Infinity;
    }
    return result;
}

function gamma(n) {  
     
    var g = 7, 
        p = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
    if(n < 0.5) {
      return Math.PI / Math.sin(n * Math.PI) / gamma(1 - n);
    }
    else {
      n--;
      var x = p[0];
      for(var i = 1; i < g + 2; i++) {
        x += p[i] / (n + i);
      }
      var t = n + g + 0.5;
      return Math.sqrt(2 * Math.PI) * Math.pow(t, (n + 0.5)) * Math.exp(-t) * x;
    }
}

function trigo(callback,angle){
    if(!RADIAN){
        angle=angle*Math.PI/180;
    }
    return callback(angle);
}
function invTrigo(callback,value){
    let angle=callback(value);
    if(!RADIAN){
        angle=angle*180/Math.PI;
    }
    return angle;
}