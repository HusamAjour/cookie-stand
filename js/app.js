'use strict';

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Seattle
var Seattle = {
    branchName: 'Seattle',
    minCustomers: 23,
    maxCustomers: 65,
    avgSale: 6.3,
    hours: [],
    randCustomers: [],
    cookiesPerSale: [],
    totalCookies: 0,
    fillHours: function () {
        for (var i = 6; i <= 12; i++) {
            this.hours.push(i + ' am');
        }
        for (var j = 1; j <= 7; j++) {
            this.hours.push(j + ' pm');
        }
    },
    fillRandCustomers: function () {
        for (var i = 0; i < this.hours.length; i++) {
            this.randCustomers.push(getRndInteger(23, 65));
        }
    },
    fillCookiesPerSale: function () {
        this.fillRandCustomers();
        for (var i = 0; i < 14; i++) {
            var cookiePerHr = Math.floor(this.randCustomers[i] * this.avgSale);
            this.cookiesPerSale.push(cookiePerHr);
            this.totalCookies = this.totalCookies + cookiePerHr;
        }
    }
};

Seattle.fillHours();
Seattle.fillCookiesPerSale();


// Tokyo
var Tokyo = {
    branchName: 'Tokyo',
    minCustomers: 3,
    maxCustomers: 24,
    avgSale: 1.2,
    hours: [],
    randCustomers: [],
    cookiesPerSale: [],
    totalCookies: 0,
    fillHours: function () {
        for (var i = 6; i <= 12; i++) {
            this.hours.push(i + ' am');
        }
        for (var j = 1; j <= 7; j++) {
            this.hours.push(j + ' pm');
        }
    },
    fillRandCustomers: function () {
        for (var i = 0; i < this.hours.length; i++) {
            this.randCustomers.push(getRndInteger(23, 65));
        }
    },
    fillCookiesPerSale: function () {
        this.fillRandCustomers();
        for (var i = 0; i < 14; i++) {
            var cookiePerHr = Math.floor(this.randCustomers[i] * this.avgSale);
            this.cookiesPerSale.push(cookiePerHr);
            this.totalCookies = this.totalCookies + cookiePerHr;
        }
    }
};

Tokyo.fillHours();
Tokyo.fillCookiesPerSale();

// Dubai
var Dubai = {
    branchName: 'Dubai',
    minCustomers: 11,
    maxCustomers: 38,
    avgSale: 3.7,
    hours: [],
    randCustomers: [],
    cookiesPerSale: [],
    totalCookies: 0,
    fillHours: function () {
        for (var i = 6; i <= 12; i++) {
            this.hours.push(i + ' am');
        }
        for (var j = 1; j <= 7; j++) {
            this.hours.push(j + ' pm');
        }
    },
    fillRandCustomers: function () {
        for (var i = 0; i < this.hours.length; i++) {
            this.randCustomers.push(getRndInteger(23, 65));
        }
    },
    fillCookiesPerSale: function () {
        this.fillRandCustomers();
        for (var i = 0; i < 14; i++) {
            var cookiePerHr = Math.floor(this.randCustomers[i] * this.avgSale);
            this.cookiesPerSale.push(cookiePerHr);
            this.totalCookies = this.totalCookies + cookiePerHr;
        }
    }
};

Dubai.fillHours();
Dubai.fillCookiesPerSale();

// Paris
var Paris = {
    branchName: 'Paris',
    minCustomers: 20,
    maxCustomers: 38,
    avgSale: 2.3,
    hours: [],
    randCustomers: [],
    cookiesPerSale: [],
    totalCookies: 0,
    fillHours: function () {
        for (var i = 6; i <= 12; i++) {
            this.hours.push(i + ' am');
        }
        for (var j = 1; j <= 7; j++) {
            this.hours.push(j + ' pm');
        }
    },
    fillRandCustomers: function () {
        for (var i = 0; i < this.hours.length; i++) {
            this.randCustomers.push(getRndInteger(23, 65));
        }
    },
    fillCookiesPerSale: function () {
        this.fillRandCustomers();
        for (var i = 0; i < 14; i++) {
            var cookiePerHr = Math.floor(this.randCustomers[i] * this.avgSale);
            this.cookiesPerSale.push(cookiePerHr);
            this.totalCookies = this.totalCookies + cookiePerHr;
        }
    }
};

Paris.fillHours();
Paris.fillCookiesPerSale();

// Lima
var Lima = {
    branchName: 'Lima',
    minCustomers: 2,
    maxCustomers: 16,
    avgSale: 4.6,
    hours: [],
    randCustomers: [],
    cookiesPerSale: [],
    totalCookies: 0,
    fillHours: function () {
        for (var i = 6; i <= 12; i++) {
            this.hours.push(i + ' am');
        }
        for (var j = 1; j <= 7; j++) {
            this.hours.push(j + ' pm');
        }
    },
    fillRandCustomers: function () {
        for (var i = 0; i < this.hours.length; i++) {
            this.randCustomers.push(getRndInteger(23, 65));
        }
    },
    fillCookiesPerSale: function () {
        this.fillRandCustomers();
        for (var i = 0; i < 14; i++) {
            var cookiePerHr = Math.floor(this.randCustomers[i] * this.avgSale);
            this.cookiesPerSale.push(cookiePerHr);
            this.totalCookies = this.totalCookies + cookiePerHr;
        }
    }
};

Lima.fillHours();
Lima.fillCookiesPerSale();


// print out branches content

function printBranchData(obj) {
    var root = document.getElementById('body');
    var branchSection = document.createElement('section');
    var branchTitle = document.createElement('h2');
    var horulySaleList = document.createElement('ul');
    for (var i = 0; i < 14; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = obj.hours[i] + ': ' + obj.cookiesPerSale[i] + ' cookies';
        horulySaleList.appendChild(listItem);
    }
    var listItem2 = document.createElement('li');
    listItem2.textContent = 'Total = ' + obj.totalCookies;
    horulySaleList.appendChild(listItem2);
    branchTitle.textContent = obj.branchName;
    branchSection.appendChild(branchTitle);
    branchSection.appendChild(horulySaleList);
    root.appendChild(branchSection);
}

printBranchData(Seattle);
printBranchData(Tokyo);
printBranchData(Dubai);
printBranchData(Paris);
printBranchData(Lima);


