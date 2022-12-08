//Change these values to add/reduce number of stars. animMax and nimMin are the range for the random anim duration, this sets the speed.
//Don't add too much stars, each one creates two divs and may cause huge framedrops.
const starCount = 90;
const animMax = 20;
const animMin = 5;

const bodyz = document.querySelector("body");

function starfield(){
  const starfield = document.createElement("div");
  starfield.id = "starfield";



  for(let i = 0; i < starCount; i++){
    const angle = document.createElement("div");
    angle.classList.add("star-angle");
    angle.style.rotate = `${i*(360/starCount)}deg`;

    const star = document.createElement("div");
    const rand = Math.random() * (animMax - animMin ) + animMin;
    star.classList.add("star");
    star.style.animationDuration = `${rand}s`;

    angle.appendChild(star);
    starfield.appendChild(angle);
  }

  return starfield;
}


bodyz.appendChild(starfield());
