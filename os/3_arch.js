// Node.js program to demonstrate the
// os.arch() method

// Allocating os module
const os = require('os');

// Printing os.arch()
console.log(os.arch());
// Printing os.arch() description
// of the architecture
switch (os.arch()) {
    case 'x32':
        console.log("32-bit extended system");
        break;

    case 'x64':
        console.log("64-bit extended system");
        break;

    case 'arm':
        console.log("32-bit  Advanced RISC Machine");
        break;

    case 'arm64':
        console.log("64-bit  Advanced RISC Machine");
        break;

    case 's390':
        console.log("31-bit The IBM System/390, the"
            + " third generation of the System/360"
            + " instruction set architecture");
        break;

    case 's390x':
        console.log("64-bit The IBM System/390, the"
            + " third generation of the System/360"
            + " instruction set architecture");
        break;

    case 'mipsel':
        console.log("64-bit Microprocessor without"
            + " Interlocked Pipelined Stages");
        break;

    case 'mips':
        console.log("32-bit Microprocessor without"
            + " Interlocked Pipelined Stages");
        break;

    case 'ia32':
        console.log("32-bit Intel Architecture");
        break;

    case 'ppc':
        console.log("PowerPC Architecture.");
        break;

    case 'ppc64':
        console.log("64-bit PowerPC Architecture.");
        break;

    default:
        console.log(" unknown processor");
}