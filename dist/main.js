(() => {
  "use strict";
  document
    .querySelector("#searchBtn")
    .addEventListener("click", async function () {
      const e = document.querySelector("#container"),
        t = document.querySelector("#searchLoc").value;
      if ("" === t.trim()) return void alert("Enter a search term");
      const n = new Request(
          `https://api.weatherapi.com/v1/current.json?key=95ab83f590514564a1572344230308&q=${t}`,
        ),
        c = await fetch(n, { mode: "cors" }),
        o = await c.json();
      console.log(o),
        (function (e) {
          const t = document.querySelector("#city"),
            n = document.createElement("p"),
            c = document.createElement("p");
          (n.textContent = `${e.location.name}, ${e.location.country}`),
            (c.textContent = e.current.last_updated),
            t.appendChild(n),
            t.appendChild(c);
        })(o),
        (function (e) {
          const t = document.querySelector("#condition"),
            n = document.createElement("div");
          n.classList.add("feelsLike");
          const c = document.createElement("img"),
            o = document.createElement("p");
          o.classList.add("temp");
          const r = document.createElement("p");
          r.classList.add("conditionNow");
          const a = document.createElement("p");
          (c.src = e.current.condition.icon),
            (o.textContent = `${e.current.temp_c}°C`),
            (r.textContent = e.current.condition.text),
            (a.textContent = `Feels like: ${e.current.feelslike_c}°C`),
            n.appendChild(r),
            n.appendChild(a),
            t.appendChild(c),
            t.appendChild(o),
            t.appendChild(n);
        })(o),
        (function (e) {
          const t = document.querySelector("#forecast"),
            n = document.createElement("p");
          n.classList.add("elements");
          const c = document.createElement("p");
          c.classList.add("elements");
          const o = document.createElement("p");
          o.classList.add("elements");
          const r = document.createElement("p");
          r.classList.add("elements"),
            (n.textContent = `Wind: ${e.current.wind_kph} km/h`),
            (c.textContent = `Humidity: ${e.current.humidity}%`),
            (o.textContent = `Visibility: ${e.current.vis_km} km`),
            (r.textContent = `Pressure: ${e.current.pressure_mb} mb`),
            t.appendChild(n),
            t.appendChild(c),
            t.appendChild(o),
            t.appendChild(r);
        })(o);
      const r = `https://api.giphy.com/v1/gifs/random?api_key=hW0ipU5eE3wLaTa7C9u8vSLcbiEJLAIN&tag=${o.current.condition.text}`,
        a = await fetch(r, { mode: "cors" }),
        i = await a.json();
      console.log(i);
      const d = i.data.images.original.url;
      return (
        (e.style.background = `\n        url(${d}) center / cover no-repeat, \n        rgba(255, 255, 255, 0.5)\n      `),
        o
      );
    });
})();
