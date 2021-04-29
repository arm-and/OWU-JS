// Треба реалізувати свій розпорядок дня.
// Колбеками, промісами та асинк авейт.
// Мінімум 8 подій.


// Call back hell

// function isMorning(time, cb) {
//     console.log('Morning is coming');
//
//     setTimeout(() => {
//         console.log('STEP-1');
//         if (!time) {
//             cb('Still sleeping');
//             return;
//         }
//         cb(null, 'Woke up');
//
//     }, 3000)
// }
//
// function isBathroom(watter, cb) {
//     setTimeout(() => {
//         console.log('STEP-2');
//         if (!watter) {
//             cb('Cold watter');
//             return;
//         }
//         cb(null, "Hot watter.I'm brushing teeth");
//
//     }, 3000);
// }
//
// function isBreakfast(hungry, cb) {
//     setTimeout(() => {
//         console.log('STEP-3');
//         if (!hungry) {
//             cb("I'm not hungry");
//             return;
//         }
//         cb(null, "I had a  breakfast");
//
//     }, 3000);
// }
//
// function isSocialMedia(time, cb) {
//     setTimeout(() => {
//         console.log('STEP-4');
//         if (!time) {
//             cb("I don't have a free time");
//             return;
//         }
//         cb(null, 'News feed scrolling down');
//
//     }, 2000);
// }
//
// function isProgramming(time, cb) {
//     setTimeout(() => {
//         console.log('STEP-5')
//         if (time > 9.30) {
//             cb('Steel scrolling down instagram', null);
//             return;
//         }
//         cb(null, 'Learning JavaScript');
//     }, 3000);
//
// }
//
//
// function isDinner(time, cb) {
//     setTimeout(() => {
//         console.log('STEP-6');
//         if (time === 13.30) {
//             cb("It's not time yet!", null);
//             return;
//         }
//         cb(null, "It's dinner time!");
//     }, 3000);
// }
//
// function isRelax(relax, cb) {
//     setTimeout(() => {
//         console.log('STEP-7');
//         if (!relax) {
//             cb('Steel learning js');
//             return;
//         }
//         cb(null, "I'm going for a walk");
//
//     }, 3000);
// }
//
// function isEvening(back, cb) {
//     setTimeout(() => {
//         console.log('STEP-8');
//         if (!back) {
//             cb('Steel drinking beer');
//             return;
//         }
//         cb(null, "I'm coming back home");
//
//     }, 3000);
// }
//
// isMorning(true, (err, success) => {
//     if (err) {
//         console.log(`The alarm did not ring ${err}`);
//         return;
//     }
//     console.log(`SUPER! ${success}`);
//
//     isBathroom(true, (err, success) => {
//         if (err) {
//             console.log(`WTF? ${err}`);
//             return;
//         }
//         console.log(`SUPER! ${success}`);
//
//         isBreakfast(true, (err, success) => {
//             if (err) {
//                 console.log(`Only coffee. ${err}`);
//                 return;
//             }
//             console.log(`SUPER! ${success}`);
//
//             isSocialMedia(true, (err, success) => {
//                 if (err) {
//                     console.log(err);
//                     return;
//                 }
//                 console.log(success);
//
//                 isProgramming(8.50, (err, success) => {
//                     if (err) {
//                         console.log(`Forgot about time ${err}`);
//                         return;
//                     }
//                     console.log(success);
//
//                     isDinner(13.00, (err, success) => {
//                         if (err) {
//                             console.log(err);
//                             return;
//                         }
//                         console.log(`SUPER!${success}`);
//
//                         isRelax(true, (err, success) => {
//                             if (err) {
//                                 console.log(err);
//                                 return;
//                             }
//                             console.log(`I have a progress in js.So,${success}`);
//
//                             isEvening(true, (err, success) => {
//                                 if (err) {
//                                     console.log(err);
//                                     return;
//                                 }
//                                 console.log(`I'm wanna sleep.So,${success}`);
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })

//============================promise===================

function isMorning(time) {
    return new Promise((resolve, reject) => {
        console.log('STEP-0');
        console.log('Morning is coming');

        setTimeout(() => {
            console.log('STEP-1');
            if (!time) {
                reject('Still sleeping');
            }
            resolve('Woke up');

        }, 3000)
    })
}

function isBathroom(watter) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('STEP-2');
            if (!watter) {
                reject('Cold watter');
            }
            resolve("Hot watter.I'm brushing teeth");

        }, 3000);
    })
}

function isBreakfast(hungry) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('STEP-3');
            if (!hungry) {
                reject("I'm not hungry");
            }
            resolve("I had a  breakfast");

        }, 3000);
    })
}

function isSocialMedia(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('STEP-4');
            if (!time) {
                reject("I don't have a free time");
            }
            resolve('News feed scrolling down');

        }, 2000);
    })
}

function isProgramming(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('STEP-5')
            if (time > 9.30) {
                reject('Steel scrolling down instagram');
            }
            resolve('Learning JavaScript');
        }, 3000);

    })
}


function isDinner(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('STEP-6');
            if (time === 13.30) {
                reject("It's not time yet!");
            }
            resolve("It's dinner time!");
        }, 3000);
    })
}

function isRelax(relax) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('STEP-7');
            if (!relax) {
                reject('Steel learning js');
            }
            resolve("I'm going for a walk");

        }, 3000);
    })
}

function isEvening(back) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('STEP-8');
            if (!back) {
                reject('Steel drinking beer');
            }
            resolve("I'm coming back home");

        }, 3000);
    })
}

isMorning(true)
    .then((value) => {
        console.log(value);
        return isBathroom(true)
    })
    .then((value) => {
        console.log(value);
        return isBreakfast(true)
    })
    .then((value) => {
        console.log(value);

        return isSocialMedia(true)
    })
    .then((value) => {
        console.log(value);

        return isProgramming(9.00);
    })
    .then((value) => {
        console.log(value);

        return isDinner(13.00);
    })
    .then((value) => {
        console.log(value);

        return isRelax(true);
    })
    .then((value) => {
        console.log(value);

        return isEvening(true);
    })
    .then((value) => {
        console.log(value);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log('Zzzzzzz...');
    })

//===============================================================================================================
//
// async await

// function isMorning(time) {
//     return new Promise((resolve, reject) => {
//         console.log('STEP-0');
//         console.log('Morning is coming');
//
//         setTimeout(() => {
//             console.log('STEP-1');
//             if (!time) {
//                 reject('Still sleeping');
//             }
//             resolve('Woke up');
//
//         }, 3000)
//     })
// }
//
// function isBathroom(watter) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('STEP-2');
//             if (!watter) {
//                 reject('Cold watter');
//             }
//             resolve("Hot watter.I'm brushing teeth");
//
//         }, 3000);
//     })
// }
//
// function isBreakfast(hungry) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('STEP-3');
//             if (!hungry) {
//                 reject("I'm not hungry");
//             }
//             resolve("I had a  breakfast");
//
//         }, 3000);
//     })
// }
//
// function isSocialMedia(time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('STEP-4');
//             if (!time) {
//                 reject("I don't have a free time");
//             }
//             resolve('News feed scrolling down');
//
//         }, 2000);
//     })
// }
//
// function isProgramming(time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('STEP-5')
//             if (time > 9.30) {
//                 reject('Steel scrolling down instagram');
//             }
//             resolve('Learning JavaScript');
//         }, 3000);
//
//     })
// }
//
//
// function isDinner(time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('STEP-6');
//             if (time === 13.30) {
//                 reject("It's not time yet!");
//             }
//             resolve("It's dinner time!");
//         }, 3000);
//     })
// }
//
// function isRelax(relax) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('STEP-7');
//             if (!relax) {
//                 reject('Steel learning js');
//             }
//             resolve("I'm going for a walk");
//
//         }, 3000);
//     })
// }
//
// function isEvening(back) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('STEP-8');
//             if (!back) {
//                 reject('Steel drinking beer');
//             }
//             resolve("I'm coming back home");
//
//         }, 3000);
//     })
// }
//
// async function myMorning(){
//     try {
//         const morning = await isMorning(true);
//         console.log(morning);
//         const bathroom = await isBathroom(true);
//         console.log(bathroom);
//         const breakfast = await isBreakfast(true);
//         console.log(breakfast);
//         const socialMedia = await isSocialMedia(true);
//         console.log(socialMedia);
//         const programming = await isProgramming(8.50);
//         console.log(programming);
//         const dinner = await isDinner(13.00);
//         console.log(dinner);
//         const relax = await isRelax(true);
//         console.log(relax);
//         const evening = await isEvening(true);
//         console.log(evening);
//     } catch (err){
//         console.log(err);
//     }
// };
// myMorning();
