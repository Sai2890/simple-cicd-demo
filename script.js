// Random background color change on refresh
const colors = ["#FFDDC1", "#C1FFD7", "#C1E1FF", "#FFD1C1", "#E1C1FF", "#FFF6C1"];
document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
