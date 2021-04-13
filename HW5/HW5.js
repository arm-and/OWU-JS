// Реалізовуємо свій компютерний магазин.
// ======================================================================================
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//     Оперативна память.
//     Потужність процесора. (цифра від 0 до 1000)
//     Назва.
//     В кожного компютера має бути метод включання.
// =======================================================================================

class MyComp {
    constructor(ram, power, model) {
        this.ram = ram;
        this.power = power;
        this.model = model;
    }

    turnOn() {
        if (this.power < 0 || this.power > 1000) {
            return console.error('Wrong parameters!');
        }
        console.log(`Welcome to ${this.model}`);

    }
}

let params = new MyComp(8, 1000, 'Asus');
params.turnOn()

// ==============================================================================================================
// Від базового компютрера треба реалізувати ноутбук.
// Він має нову властивість дюймаж монітора.
//
// У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
// ==============================================================================================================

class Laptop extends MyComp {
    constructor(ram, power, model, screen) {
        super(ram, power, model);
        this.screen = screen;
        this.battery = power / (screen * ram)
    }

    turnOn() {
        return super.turnOn();
    }

    showParams() {
        console.log(`
            Model: ${this.model}
            Ram: ${this.ram}Gb
            Processor: ${this.power}MHz
            Screen: ${this.screen} Inch
            Battery: ${parseInt(this.battery)}V*h`
        )
    }
}

let laptopParams = new Laptop(8, 5000, 'Dell', 16);
laptopParams.turnOn();
laptopParams.showParams();

// ==============================================================================================================
//     Від ноутбука потрібно зробити ультрабук.
//     Він має нову змінну ваги.
//     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4          години.
// ==============================================================================================================

class Ultrabook extends Laptop {
    constructor(ram, power, model, screen, weight, battery) {
        super(screen);
        this.weight = weight;
        this.model = model;
        this.battery = battery;
    }

    turnOn() {
        if (this.weight > 2 || this.battery < 4) {
            return console.error('Battery level is low.');
        }
        console.log(`Welcome to my ${this.model}`);
    }
}

let ultrabook = new Ultrabook(16, 6000, 'MacBook Pro', 16, 1.5, 45)
ultrabook.turnOn()

// ===================================================================================================
// Від базвого класу потрібно створити базовий ПК.
//     В нього має бути новий метод запуску ігор.
//     Кількість FPS визначається як потужність / опервтивку.
//     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
// ===================================================================================================

class PC extends MyComp {
    constructor(ram, power, model) {
        super(ram, power, model);
        this.fps = this.power / this.ram;
    }

    games() {
        (this.fps > 0) ? console.log(`You playing with ${this.fps} FSP`) : console.error('RAM ERROR')
    }
};

let gamePc = new PC(8, 1000, 'Home PC');
gamePc.games();

//===========================================================================================================
//Компютер можна апгрейдити.
// Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
// Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
// Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
//===========================================================================================================

class UpgradePC extends PC {
    constructor(ram, power, name) {
        super(ram, power, name);
        this.newpower = this.power + (this.power * 0.1);
        this.newram = this.ram * 2;
    }

    newPower() {
        if (this.power < this.newpower) {
            return console.log(`You changed power successfully`)
        }
        console.log(`Your power parameters ${this.power} too small...`)
    }

    newRam() {
        if (this.newram > this.ram) {
            return console.log(`You have new RAM ${this.newram}`);
        }
        console.log(`RAM is undefined`)
    }
}

let upgrade = new UpgradePC(8, 2000, 'My old PC');
upgrade.newPower();
upgrade.newRam();
// =========================================================================================================
// Від базового ПК необхідно зробити ігровий ПК.
//     Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
//     При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль) що на цьому відрі ігри не запускаються.
// ============================================================================================================

// class GamerPC extends PC {
//     constructor(ram, power, model) {
//         super(ram, power, model);
//         this.fps *= 2;
//         this.power = this.power - this.power * 0.01;
//     }
//
//     gameOn() {
//         if (this.power < 500 && this.ram < 8) {
//             return console.error('on this bucket games are not started');
//         }
//         console.log(`You playing with ${this.fps}FPS and nominal power ${this.power}`);
//     }
// }
//
// let gamerPC = new GamerPC(8,5000,'GameBoy');
// gamerPC.gameOn()
