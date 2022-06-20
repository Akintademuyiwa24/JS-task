const name = 'Akintade Olumuyiwa';
const height = '170.18cm';
const country = 'Nigeria';

let html;
html = `
   <h3> Name: ${name}</h3>
   <h3> Height: ${height}
   <h3> Country: ${country}
`
document.body.innerHTML = html;