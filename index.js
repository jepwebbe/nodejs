// import http from 'http';
import express from 'express';

/* http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('Yes No Hello World!');
    response.end();
}).listen(4000) */
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send("Velkommen på forsiden")
});
  app.get("/api", (req, res) => {
    res.json({ message: "Hello from Express!" });
  });
app.get("/skills", (req, res) => {
    res.send("Hvad kan vi? Se her!")
});
app.get("/products", (req, res) => {
    res.send("Dette er vores produkter")
});
app.get("/find", (req, res) => {
    res.send("Hvor er vi? Her!")
});
app.get("/contact", (req, res) => {
    res.send("Kontakt os her!")
});
app.get("/about", (req, res) => {
    res.send("Hvem er vi? Læs med!");
});
// Til at løse forespørgsler på sider, der ikke findes, ville jeg enten bruge stjerneregel:
app.get("/*", (req, res) => {
    res.send("Forkert! ಠ__ಠ ");
});
// Eller forslaget fra .md-filen, der nok egentlig ser mere legit ud
/* app.use((req, res, next) => {
    res.status(404).send("Page not found <br /> ¯\_(ツ)_/¯")
}); */
app.listen(PORT, () => {
    console.log(`Express server listening on ${PORT}`);
})