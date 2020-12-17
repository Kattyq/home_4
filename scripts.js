// Первое задание +
let q = [1, 2, 3, 4, 5];
for (let w = 0; w < q.length; w++) {
    alert(q[w])
}

// Второе задание +
let w = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
result_w = w.filter(item => item < -3 && item > -10);
alert (result_w);

// Третье задание +
let e = [],
    result = 0;
for (let i = 23; i <=57; i++)  {
    e.push(i);
    result +=i;
}
    console.log(e);
    console.log(result);

let y = []; 
    r = 23;
    t = 0;
while (r <= 57) {
    y.push(r++);
}
    console.log(y);
   
// Четвёртое задание +
let u = ['10', '20', '30', '50', '235', '3000'];
    // o = u.filter(function)
for (i = 0; i < u.length; i++) {
    if (u[i][0] == '1' || u[i][0] == '2' || u[i][0] == '5') {
        console.log(u[i]);
    }
}

// Пятое задание +
let p = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

for (let i = 0; i < p.length; i++) {
    if (i == 5 || i == 6) {
        document.write('<b>' + p[i] + '<b>' + '</br>');
    }
    else {
        document.write(p[i] + '</br>');
    }
}

// Шестое задание +
let a = ['first' + 'second' + 'third'];
    a.push('four');
let lastItem = a[a.length - 1];
console.log(lastItem);

// Седьмое задание +
let s = [],
    d;
while (true) {
    d = prompt('Введите числовое значение', 0);
    if (d == "" || d == null || isNaN(d)) break;
    s.push(d);
}
alert(s);

s.sort(function(a, b) {return a - b;});   // arr.sort( (a, b) => a - b ); тоже самое
alert(s);

// Восьмое задание + два метода работают по одному, поэтому второй закомментирован и чтобы работал нужно закоменнтировать первый
let f = [12, false, 'текст', 4, 2, -5, 0],
    j = f.length-1;
alert(f);

while (true) {
    alert (f[j]);
    j--;
  }

// let rev = f.reverse(); // это второй вариант, чтобы работал нужно закомментировать первый
// alert(rev) // это второй вариант, чтобы работал нужно закомментировать первый

// Девятое задание +
let k = [5, 9, 21, , , 9, 78, , , , 6];
alert(k.length);
alert(k.filter(x => x !=null).length);
alert((k.length) - (k.filter(x => x !=null).length));

// Десятое задание + но не понимаю откуда взялось sum и item если мы их не воодили и какие они значения берут-то
let x = [48, 9, 0, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 13, 2],
    c = [1, 8, 0, 13, 76, 8, 7, 0, 22, 0, 2, 3, 2],
    zero = 0;
if (x.indexOf(zero) !=-1) {
    let item1 = x.indexOf(0) + 1;
    let item2 = x.lastIndexOf(0);
    console.log(x.slice(item1, item2));
    let sumArr = x.slice(item1, item2).reduce(function(sum, item) {
        return sum + item;
    });
    console.log(sumArr);
} else {
    console.log(zero);
}



// function between00(numarray) {
//             let result = 0, start = false, sum = 0;
//             for (let i = 0; i < numarray.length; i++)
//             {
//                 let n = numarray[i];
//                 if (n == 0 && !start) { start = true; continue; }
//                 if (n == 0) result = sum;
//                 else if (start) sum += n;
//             }
//             return alert (result);
//         }
// (between00(c));


// function myFunction (x) {
//     let first = x.indexOf(0)+1,
//         last = x.lastIndexOf(0);
//     return x.splice(first, last-first).reduce((a, b)=>a+b, 0);
//   }
//   myFunction ();
//   console.log(first);
