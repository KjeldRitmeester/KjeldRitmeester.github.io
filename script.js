tekst = localStorage.getItem(("tekst"))
console.log(tekst)
if (tekst == "1")
{
    localStorage.setItem("tekst","2")
    document.getElementById("welkom").innerText = ("Hoi, welkom!")
}
else if (tekst =="2")
{
    localStorage.setItem("tekst","3")
    document.getElementById("welkom").innerText = ("Welkom op mijn website!")
}
else if (tekst =="3")
{
    localStorage.setItem("tekst","1")
    document.getElementById("welkom").innerText = ("Hallo en welkom!")
}
else
{
    localStorage.setItem("tekst","1")
}
function klik()
{
    alert("Matthijs heeft hiermee geholpen. Zijn site: matthijsveldkamp.github.io :)")
};
