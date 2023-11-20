const params = {
    amount: 50,
    size: {
      min: 1,
      max: 5,
      giant: 9
    },
    duration: {
      min: 5,
      max: 25,
    }
  }

  const randomBetween = (a, b) => {
    return (a + (Math.random() * (b - a)));
  }
  
  for (let i = 0; i < params.amount; i++) {
    let star = document.createElement('div');

    let anim = randomBetween(params.duration.min, params.duration.max) + "s";
    star.style.animationDuration = anim;

    let size = Math.round(Math.random() * 10) === 0 ? params.size.giant : randomBetween(params.size.min, params.size.max);
    let shadow = "0 0 " + size + "px " + size / 2 + "px #ffffff";
    star.style.boxShadow = shadow;

    let w_h = size + "px";
    star.style.width = w_h;
    star.style.height = w_h;

    let l = randomBetween(0, 100) + "%";
    let t = randomBetween(0, 100) + "%";
    star.style.left = l
    star.style.top = t;

    document.getElementById('root').append(star);
  }