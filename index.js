const triangleBase = 48;

const container = document.querySelector(".triangle");

const instantiateGrid = () => {
  container.innerHTML = '';
  const width = document.body.clientWidth;
  const heigth = document.body.clientHeight * 0.4;

  let columns = Math.ceil(width / (triangleBase * 2)) + 1;
  let rows = Math.ceil(heigth / triangleBase * 1.733);
  container.style.setProperty('--columns', columns);

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < columns; x++) {
      createTriangleSet(x + y * columns, x, y);
    }
  }
}

const createTriangleSet = (index, column, row) => {
  let el = document.createElement("div");
  el.classList.add("triangle-set");
	if (row % 2 == 0) el.classList.add("triangle-set--offset");
  
  container.appendChild(el);
}

document.querySelector(".intro").onresize = () => {
  instantiateGrid();
}

instantiateGrid();
const glow = document.body.querySelector(".glow")

document.querySelector(".intro").addEventListener('mousemove', (event) => {
	glow.style.top = event.pageY + "px";
	glow.style.left = event.pageX + "px";
});

const togglebutton = document.getElementsByClassName("toggle-button")[0]
const navbar = document.getElementsByClassName("navbar")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]

togglebutton.addEventListener('click', () => {
  navbarLinks.classList.toggle("active");
})