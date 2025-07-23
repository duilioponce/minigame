function play10()
{
    let a= parseInt(prompt("Ingresa un Número"));
    let b= Math.floor(Math.random()*10)+1;
    let c= document.getElementById("msg");

    if (a==b)
    {
        c.innerHTML= 
            "Yo elegí el número " + b + "<br>" +
            "Tú elegiste el número " + a + "<br>" +
            "¡Felicidades, adivinaste el número! 🥳";
        c.style.color= "green";
    }
    else
    {
        c.innerHTML= 
            "Yo elegí el número " + b + "<br>" +
            "Tú elegiste el número " + a + "<br>" +
            "Lo siento, has perdido 😓";
        c.style.color= "red";
    }
}

function play100()
{
    let a= parseInt(prompt("Ingresa un Número"));
    let b= Math.floor(Math.random()*100)+1;
    let c= document.getElementById("msg");

    if (a==b)
    {
        c.innerHTML= 
            "Yo elegí el número " + b + "<br>" +
            "Tú elegiste el número " + a + "<br>" +
            "¡Felicidades, adivinaste el número! 🥳";
        c.style.color= "green";
    }
    else
    {
        c.innerHTML= 
            "Yo elegí el número " + b + "<br>" +
            "Tú elegiste el número " + a + "<br>" +
            "Lo siento, has perdido 😓";
        c.style.color= "red";
    }
}

function play1000()
{
    let a= parseInt(prompt("Ingresa un Número"));
    let b= Math.floor(Math.random()*1000)+1;
    let c= document.getElementById("msg");

    if (a==b)
    {
        c.innerHTML= 
            "Yo elegí el número " + b + "<br>" +
            "Tú elegiste el número " + a + "<br>" +
            "¡Felicidades, adivinaste el número! 🥳";
        c.style.color= "green";
    }
    else
    {
        c.innerHTML= 
            "Yo elegí el número " + b + "<br>" +
            "Tú elegiste el número " + a + "<br>" +
            "Lo siento, has perdido 😓";
        c.style.color= "red";
    }
}