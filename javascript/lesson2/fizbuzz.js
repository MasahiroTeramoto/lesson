function multipleHundredArray(num) {
    // multiple up to 100 and make an array
    const nums = [];
    let multipleNum = 0;

    for (i = 2; multipleNum < 100; i++) {
        if (multipleNum === 0) {
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
    const uniq = function(array) {
        return array.filter(function(elem, index, self) {
            return self.indexOf(elem) === index;
        });
    };

    const key = function(num1, num2) {
        return num1 - num2;
    };

    return uniq(nums1.concat(nums2)).sort(key);
}

function isNumber(val1, val2) {
    // check if the input values are integer
    const regex = new RegExp(/^[0-9]+$/);
    return regex.test(val1) && regex.test(val2);
}

function isInput(val1, val2) {
    // check if the input values are inputed
    if (val1 === '' || val2 === '') {
        return false;
    }
    return true;
}

function shouldCheckInputVal(fizNum, buzzNum) {
    // check if the input values are correct
    const elem = document.getElementById('output');
    const newDiv = document.createElement('div');
    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }

    if (!isInput(fizNum, buzzNum) || !isNumber(fizNum, buzzNum)) {
        newDiv.appendChild(document.createTextNode('整数値を入力してください'));
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

    const elem = document.getElementById('output');

    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }

    for (i = 0; i < fizbuzzArray.length; i++) {
        const newDiv = document.createElement('div');

        if (
            fizArray.includes(fizbuzzArray[i]) &&
            buzzArray.includes(fizbuzzArray[i])
        ) {
            newDiv.appendChild(
                document.createTextNode('FizzBuzz ' + fizbuzzArray[i])
            );
        } else {
            if (fizArray.includes(fizbuzzArray[i])) {
                newDiv.appendChild(document.createTextNode('Fiz ' + fizbuzzArray[i]));
            }
            if (buzzArray.includes(fizbuzzArray[i])) {
                newDiv.appendChild(document.createTextNode('Buzz ' + fizbuzzArray[i]));
            }
        }
        elem.appendChild(newDiv);
    }
}

function clickBtn() {
    const fizNum = document.getElementById('fiz-num').value;
    const buzzNum = document.getElementById('buzz-num').value;

    if (!shouldCheckInputVal(fizNum, buzzNum)) return;
    displayOutput(fizNum, buzzNum);
}