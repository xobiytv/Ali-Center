const scriptURL =
  "https://script.google.com/macros/s/AKfycbxOxzU0bhT53rrPGQPvPYzWvj4r-5bPyM0CXAu3HqMZD1bBya7JECv-KvJ5NL7uydJW3g/exec";
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
