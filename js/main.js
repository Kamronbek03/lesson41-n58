// Uyga vazifa ////////////////////
// For ///////////
// N1 //
// let a = +prompt("a=");
// let b = +prompt("b=");
// let c = 0;
// for (a; a <= b; a++) {
//   c = c + 1;
//   console.log(a);
// }
// console.log(">>>" + c + " ta son bor ekan.");

// N2 //
// let a = +prompt("a=");
// let b = +prompt("b=");
// let c = 0;
// for (b--; b > a; b--) {
//   c = c + 1;
//   console.log(b);
// }
// console.log(">>>" + c + " ta son bor ekan.");

// N3 //
// let a = +prompt("1 kg konfetning narxini kiriting!");
// let b;
// let i = 1;
// for (i; i <= 10; i++) {
//   b = a * i;
//   console.log(i + " kg konfet " + b + " so'm turadi.");
// }

// N4 //
// let a = +prompt("1 kg konfetning narxini kiriting!");
// let b;
// let i = 1.2;
// for (i; i <= 2; i += 0.2) {
//   b = a * i;
//   console.log(i + " kg konfet " + b + " so'm turadi.");
// }

// N5 //
// let a = +prompt("a="); //>>> a va b ni o'zlari kirmaydi.
// let b = +prompt("b=");
// let c = 0;
// for (a++; a < b; a++) {
//   c = c + a;
// }
// console.log(c);

// let a = +prompt("a="); //>>> a va b ni o'zlari ham kiradi.
// let b = +prompt("b=");
// let c = 0;
// for (a; a <= b; a++) {
//   c = c + a;
// }
// console.log(c);

// N6 //
// let a = +prompt("a="); //>>> a va b ni o'zlari kirmaydi.
// let b = +prompt("b=");
// let c = 1;
// for (a++; a < b; a++) {
//   c = c * a;
// }
// console.log(c);

// let a = +prompt("a="); //>>> a va b ni o'zlari ham kiradi.
// let b = +prompt("b=");
// let c = 1;
// for (a; a <= b; a++) {
//   c = c * a;
// }
// console.log(c);

// N7 //
// let a = +prompt("a="); //>>> a va b ni o'zlari kirmaydi.
// let b = +prompt("b=");
// let c = 0;
// for (a++; a < b; a++) {
//   c = c + a**2;
// }
// console.log(c);

// let a = +prompt("a="); //>>> a va b ni o'zlari ham kiradi.
// let b = +prompt("b=");
// let c = 0;
// for (a; a <= b; a++) {
//   c = c + a**2;
// }
// console.log(c);

// N8 //
// let n = +prompt("n=");
// let i = 1;
// let c = 0;
// for (i; i <= n; i++) {
//   c = c + 1/i;
// }
// console.log(c);

// N9 //
// let n = +prompt("n=");
// let i = 1.1;
// let S = 1;
// for (i; i <= n; i += 0.1) {
//   S = S * i;
// }
// console.log(S);

// N10 //
// let n = +prompt("n=");
// let i = 1;
// let c = 0;
// for (i; i < 2 * n; i += 2) {
//   c = c + i;
//   console.log(c);
// }
// console.log("n^2=" + c);

// N11 //
// let n = +prompt("n=");
// let a = +prompt("a=");
// let s = 1;
// let i = 1;
// for (i; i <= a; i++) {
//   s = s * n;
// }
// console.log(n + "^" + a + "=" + s);

// N12 //
// let n = +prompt("n=");
// let a = +prompt("a=");
// let s = 1;
// let i = 1;
// for (i; i <= n; i++) {
//   s = s * a;
//   console.log(a + "^" + i + "=" + s);
// }

// N13 //
// let n = +prompt("n=");
// let a = +prompt("a=");
// let s = 1;
// let i = 1;
// for (i; i <= n; i++) {
//   s = s + a ** i;
// }
// console.log(s);

// N14 //
// let n = +prompt("n=");
// let s = 0;
// let b = 1;
// let i = 1;
// for (i; i <= n; i++) {
//   b = b * i;
//   s = s + b;
// }
// console.log(s);

// N15 //
// let N = +prompt("N=");
// let K = +prompt("K=");
// let s = 0;
// let i = 1;
// for (i; i <= N; i++) {
//   s = s + i ** K;
// }
// console.log(s);

// N16 //
// let N = +prompt("N=");
// let s = 0;
// let i = 1;
// for (i; i <= N; i++) {
//   s = s + i ** i;
// }
// console.log(s);

// While ///////

// N1 //
// let A = +prompt("A=");
// let B = +prompt("B=");
// while (A <= B) {
//   B = B - A;
// }
// console.log(B);

// N2 //
// let A = +prompt("A=");
// let B = +prompt("B=");
// let c = 0;
// while (A <= B) {
//   B = B - A;
//   c += 1;
// }
// console.log(c);

// N3 //
// let n = +prompt("n=");
// let a = 3;
// while (a < n) {
//   a *= 3;
// }
// if (n - a == 0) {
//   console.log(n + " 3 ning darajasi!");
// } else {
//   console.log(n + " 3 ning darajasi emas!");
// }

// N4 //
// let n = +prompt("n=");
// let m = +prompt("m=");
// let a = 0;
// while (m <= n) {
//   n -= m;
//   a += 1;
// }
// console.log("To'liqsiz bo'linma=" + a + " va qoldiq=" + n);

// N5 //
// let n = +prompt("n=");
// let a = 1;
// let s = 0;
// while (a <= n) {
//   s *= 10;
//   s = s + (n % 10);
//   n = (n - (n % 10)) / 10;
// }
// console.log(s);
