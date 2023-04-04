const scriptURL =
  "https://script.google.com/macros/s/AKfycbw8ffoD0ytFlv9Lp_4PDkQn2q2KftjzuHl1YJXMm4kxsnfYwhoI_Dmst-ECWFLvAB48ww/exec";
const form = document.forms["google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      $("#form_alerts").html(
        "<div class='alert alert-success'>✅Muvaffaqiyatli ro'yxatdan o'tdingiz! </div>"
      )
    )
    .catch((error) =>
      $("#form_alerts").html(
        "<div class='alert alert-danger'>Contact message not sent.</div>"
      )
    );
});
