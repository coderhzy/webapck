const h1 = document.createElement('h1');
h1.textContent = 'About';
document.body.appendChild(h1);

export default function about(){
    console.log('about function exec');
}