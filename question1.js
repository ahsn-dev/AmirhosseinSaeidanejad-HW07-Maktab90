let salaries = { John: 100, Pete: 300, Mary: 250, Amir: 500, Hossein: 50 };
function topSalary(obj) {
  Object.entries(obj)
    .sort((b, a) => a[1] - b[1])
    .forEach(([key, value]) => {
      console.log(key);
    });
}
topSalary(salaries);
