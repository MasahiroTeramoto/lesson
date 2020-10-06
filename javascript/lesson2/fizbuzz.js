function multipleHundredArray(num) {
    // multiple up to 100 and make an array
    const nums = [];
    let multipleNum = 0;

    for (i = 2; multipleNum < 100; i++) {
        if (multipleNum == 0) {
            nums.push(num);
        } else {
            nums.push(multipleNum);
        }
        multipleNum = num * i;
    }
    return nums;
}

function adjustArray(nums1, nums2) {
    // omit duplication and sort in ascending order
    let uniq = function(array) {
        return array.filter(function(elem, index, self) {
            return self.indexOf(elem) === index;
        });
    };

    let key = function(num1, num2) {
        return num1 - num2;
    };

    let concatNums = uniq(nums1.concat(nums2));
    return concatNums.sort(key);
}

function isNumber(val1, val2) {
    // check if the input values are integer
    var regex = new RegExp(/^[0-9]+$/);
    isNum1 = regex.test(val1);
    isNum2 = regex.test(val2);
    return isNum1 && isNum2;
}

function isInput(val1, val2) {
    // check if the input values are inputed
    if (val1 == "" || val2 == "") {
        return false;
    }
    return true;
}

function checkNumRange(num1, num2) {
    // check if input values within the range (1 ~ 99)
    if (0 < num1 && num1 < 99 && 0 < num2 && num2 < 99) {
        console.log(parseInt(num1));
        console.log(parseInt(num2));
        return true;
    }
    console.log(parseInt(num1));
    console.log(parseInt(num2));
    return false;
}

function checkInputVal(fizNum, buzzNum) {
    // check if the input values are correct
    var elem = document.getElementById("output");
    var newDiv = document.createElement("div");
    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }

    if (!isInput(fizNum, buzzNum) || !isNumber(fizNum, buzzNum)) {
        newDiv.appendChild(document.createTextNode("整数値を入力してください"));
    } else if (!checkNumRange(parseInt(fizNum), parseInt(buzzNum))) {
        newDiv.appendChild(
            document.createTextNode("入力された値が1~99の範囲内ではありません。")
        );
    } else {
        return true;
    }

    elem.appendChild(newDiv);
    return false;
}

function displayOutput(fizNum, buzzNum) {
    // display output

    const fizArray = multipleHundredArray(parseInt(fizNum));
    const buzzArray = multipleHundredArray(parseInt(buzzNum));
    const fizbuzzArray = adjustArray(fizArray, buzzArray);

    var elem = document.getElementById("output");

    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }

    for (i = 0; i < fizbuzzArray.length; i++) {
        var newDiv = document.createElement("div");

        if (
            fizArray.includes(fizbuzzArray[i]) &&
            buzzArray.includes(fizbuzzArray[i])
        ) {
            newDiv.appendChild(
                document.createTextNode("FizzBuzz " + fizbuzzArray[i])
            );
        } else {
            if (fizArray.includes(fizbuzzArray[i])) {
                newDiv.appendChild(document.createTextNode("Fiz " + fizbuzzArray[i]));
            }
            if (buzzArray.includes(fizbuzzArray[i])) {
                newDiv.appendChild(document.createTextNode("Buzz " + fizbuzzArray[i]));
            }
        }
        elem.appendChild(newDiv);
    }
}

function clickBtn() {
    const fizNum = document.getElementById("fiz-num").value;
    const buzzNum = document.getElementById("buzz-num").value;

    if (!checkInputVal(fizNum, buzzNum)) return;
    displayOutput(fizNum, buzzNum);
}