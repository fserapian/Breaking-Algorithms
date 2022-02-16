/************************ INCORRECT PASSCODE ATTEMPTS ************************/
/*
    One very Important User (VIU) has a Very Confidential Document (VCD) stored
    on his Dropbox account. He doesn't let anyone see the VCD, especially his
    roommates who often have access to his devices.

    Opening the Dropbox mobile app on the VIU's tablet requires a four-digit passcode.
    To ensure the confidentiality of the stored information, the device is locked out
    of Dropbox after 10 consecutive failed passcode attempts.

    We need to implement a function that given an array of attempts made throughout
    the day and the correct passcode checks to see if the device should be locked,
    i.e. 10 or more consecutive failed passcode attempts were made.

    Example:
    For passcode = '1111' and
    attempts = ['1111', '4444', '9999', '3333', '8888', '2222',
                 '7777', '0000', '6666', '7285', '5555', '1111']

    incorrectPasscodeAttempts(passcode, attempts) = true

    The first attempt is correct, so the user must have successfully logged in.
    However, the next 10 consecutive attempts are incorrect, so the device should be
    locked. Thus, the output should be true.
*/

function incorrectPasscodeAttempts(passcode, attempts) {
    let failedAttempts = 0;

    for (let i = 0; i < attempts.length; i++) {

        if (attempts[i] === passcode) {
            failedAttempts = 0;
        }

        if (attempts[i] !== passcode) {
            failedAttempts++;
        }

        if (failedAttempts === 10) {
            return true;
        }
    }

    return false;
}

function incorrectPasscodeAttempts1(passcode, attempts) {
    let failedAttempts = 0;

    for (let attempt of attempts) {
        if (attempt === passcode) {
            failedAttempts = 0;
        } else {
            failedAttempts++;
        }

        if (failedAttempts === 10) {
            return true;
        }
    }

    return false;
}

function incorrectPasscodeAttempts2(passcode, attempts) {
    let failedAttemptsCount = 0;
    let isLocked = false;

    for (let i = 0; i < attempts.length; i++) {
       failedAttemptsCount = attempts[i] === passcode ? 0 : failedAttemptsCount + 1;

       if (failedAttemptsCount === 10) {
           isLocked = true;
       }
    }

    return isLocked;
}


const passcode1 = '1111';
const attempts1 = ['1111', '4444', '9999', '3333', '8888', '2222',
    '7777', '0000', '6666', '7285', '5555', '1111'];

const passcode2 = '2222';
const attempts2 = ['3333', '2222', '1111', '2222'];

console.log(incorrectPasscodeAttempts(passcode1, attempts1));
console.log(incorrectPasscodeAttempts(passcode2, attempts2));
console.log('---------------------------------------------');
console.log(incorrectPasscodeAttempts1(passcode1, attempts1));
console.log(incorrectPasscodeAttempts1(passcode2, attempts2));
console.log('---------------------------------------------');
console.log(incorrectPasscodeAttempts2(passcode1, attempts1));
console.log(incorrectPasscodeAttempts2(passcode2, attempts2));
