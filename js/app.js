'use strict';

var branches = [];

var hours = [];

function fillHours() {
    for (var i = 6; i <= 12; i++) {
        if (i === 12) {
            hours.push(i + 'pm');
        }
        else {
            hours.push(i + 'am');
        }
    }
    for (var j = 1; j <= 7; j++) {
        hours.push(j + 'pm');
    }
}

fillHours();
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Branch(bName, minCust, maxCust, averageSale) {
    this.branchName = bName;
    this.minCustomers = minCust;
    this.maxCustomers = maxCust;
    this.avgSale = averageSale;
    this.randCustomers = [];
    this.totalCookies = 0;
    this.cookiesPerSale = [];
    branches.push(this);
}
Branch.prototype.fillRandCustomers = function () {
    for (var i = 0; i < 14; i++) {
        this.randCustomers.push(getRndInteger(23, 65));
    }
};
Branch.prototype.fillCookiesPerSale = function () {
    for (var i = 0; i < 14; i++) {
        var cookiePerHr = Math.floor(this.randCustomers[i] * this.avgSale);
        this.cookiesPerSale.push(cookiePerHr);
        this.totalCookies = this.totalCookies + cookiePerHr;
    }
};

var seattle = new Branch('Seattle', 23, 65, 6.3);
seattle.fillRandCustomers();
seattle.fillCookiesPerSale();

var tokyo = new Branch('Tokyo', 3, 24, 1.2);
tokyo.fillRandCustomers();
tokyo.fillCookiesPerSale();

var dubai = new Branch('Dubai', 11, 38, 3.7);
dubai.fillRandCustomers();
dubai.fillCookiesPerSale();

var paris = new Branch('Paris', 20, 38, 2.3);
paris.fillRandCustomers();
paris.fillCookiesPerSale();

var lima = new Branch('Lima', 2, 16, 4.6);
lima.fillRandCustomers();
lima.fillCookiesPerSale();


console.log(seattle);
console.log(dubai);
console.log(tokyo);
console.log(paris);
console.log(lima);
console.log(branches);



function buildTable(branchesArray) {
    var section1 = document.getElementById('tableSection');
    var table1 = document.createElement('table');
    section1.appendChild(table1);

    var thead1 = document.createElement('thead');
    var tr1 = document.createElement('tr');
    table1.appendChild(thead1);
    thead1.appendChild(tr1);


    var th1 = document.createElement('th');
    tr1.appendChild(th1);
    for (var i = 0; i < hours.length; i++) {
        var tableHeader = document.createElement('th');
        tableHeader.textContent = hours[i];
        tr1.appendChild(tableHeader);
    }
    var th2 = document.createElement('th');
    th2.textContent = 'Daily Location Total';
    tr1.appendChild(th2);

    var tbody1 = document.createElement('tbody');
    table1.appendChild(tbody1);

    for (i = 0; i < branchesArray.length; i++) {
        var tr2 = document.createElement('tr');
        var td1 = document.createElement('td');
        console.log(branchesArray[i].branchName);
        td1.textContent = branchesArray[i].branchName;
        tr2.appendChild(td1);
        for (var j = 0; j < branchesArray[i].cookiesPerSale.length; j++) {
      var td2 = document.createElement('td');
      td2.textContent = branchesArray[i].cookiesPerSale[j];
      tr2.appendChild(td2);
    }
    var td3 = document.createElement('td');
    td3.textContent = branchesArray[i].totalCookies;
    tr2.appendChild(td3);
    tbody1.appendChild(tr2);
  }

  var tr3 = document.createElement('tr');
  var tr3td1 = document.createElement('td');
  tr3td1.textContent = 'Total Cookies Per Hour';
  tr3.appendChild(tr3td1);

  var tfoot1 = document.createElement('tfoot');
  table1.appendChild(tfoot1);
  var dailyTotal = 0;
  for (i = 0; i < hours.length; i++) {
    var totalCookiesByHour = 0;
    for (j = 0; j < branchesArray.length; j++) {
      totalCookiesByHour = totalCookiesByHour + branchesArray[j].cookiesPerSale[i];
    }

    var tr3td2 = document.createElement('td');
    tr3td2.textContent = totalCookiesByHour;
    tr3.appendChild(tr3td2);
    dailyTotal = dailyTotal + totalCookiesByHour;
  }
  var tr3td3 = document.createElement('td');
  tr3td3.textContent = dailyTotal;
  tr3.appendChild(tr3td3);

  tfoot1.appendChild(tr3);
}

buildTable(branches);
