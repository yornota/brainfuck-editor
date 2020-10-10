function brainfuck(src, input) {
    let instrs = src.split('');
    let log = '';
    let output = '';

    let inputs = input != null ? input.split('') : [];
    let inputsIndex = 0;

    let data = [0, null];
    let ptr = 0;

    let bracketIds = [];
    let skipCounter = 0;

    let i = 0;
    while (i < instrs.length) {
        switch (instrs[i]) {
            case ">":
                log += ">";
                ptr++;

                if (data[ptr] == null) {
                    data[ptr] = 0;
                    data.push(null);
                }
                break;
            
            case "<":
                log += "<";
                ptr--;
                break;
            
            case "+":
                log += "+";
                data[ptr] = (++data[ptr]) % 256;
                break;
            
            case "-":
                log += "-";
                data[ptr] = (data[ptr] + 255) % 256;
                break;
            
            case ".":
                log += ".";
                if (ptr >= 0) {
                    output += String.fromCharCode(data[ptr]);
                }
                break;
            
            case ",":
                log += ",";
                if (ptr >= 0) {
                    if (inputsIndex < inputs.length) {
                        data[ptr] = inputs[inputsIndex].charCodeAt(0) % 256;
                    } else {
                        data[ptr] = 0;
                    }
                }
                inputsIndex++;
                break;
            
            case "[":
                log += "[";
                if (data[ptr] != 0) {
                    bracketIds.push(i);

                } else {
                    skipCounter++;
                }
                break;
            
            case "]":
                log += "]";
                if (data[ptr] != 0) {
                    i = bracketIds.pop() - 1;

                } else {
                    if (skipCounter == 0){
                        bracketIds.pop();

                    } else {
                        skipCounter--;
                    }
                }
                break;
        }

        i++;
    }

    data.pop();
    return { output, log, data };
}

// Hello World!
//console.log(brainfuck("++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++."));
