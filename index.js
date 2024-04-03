const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const data = require("./data.json");

app.use(express.json());
app.use(cors());


app.listen(3000, () => {
    console.log("The Project Running on 3000");
});

app.get('/', (req, res) => {
    const links = data.links;
    const nodes = data.nodes;

    // links ve nodes dizilerini birleştir
    const mergedList = links.concat(nodes);

    // Birleştirilmiş listeyi client'a gönder
    res.send(mergedList);
});

app.get('/links', (req, res) => {
    const links = data.links;
    res.send(links);
});

app.get('/nodes', (req, res) => {
    const nodes = data.nodes;
    res.send(nodes);
});

app.get('/nodes/types', (req, res) => {
    const types = data.nodes.types;
    res.send(types);
});

app.get('/nodes/types/head', (req, res) => {
    const head = data.nodes.types.head;
    res.send(head);
});

app.get('/nodes/types/company', (req, res) => {
    const company = data.nodes.types.company;
    res.send(company);
});

app.get('/nodes/types/department', (req, res) => {
    const departments = data.nodes.types.department;
    res.send(departments);
});

app.get('/nodes/types/employee', (req, res) => {
    const employee = data.nodes.types.employee;
    res.send(employee);
});

app.get('/nodes/types/employee/workers', (req, res) => {
    const workers = data.nodes.types.employee.workers;
    res.send(workers);
});
app.get('/nodes/types/employee/teamLeads', (req, res) => {
    const teamLeads = data.nodes.types.employee.teamLeads;
    res.send(teamLeads);
});

app.post('/nodes', (req, res) => {
    data.nodes.push(req.body);

    // Verileri data.json dosyasına yaz
    fs.writeFile('./data.json', JSON.stringify(data), (err) => {
        if (err) {
            console.error('Hata:', err);
            res.status(500).send('Veri dosyasına yazma hatası');
        } else {
            res.send("Success");
        }
    });
});

app.post('/links', (req, res) => {
    data.links.push(req.body);

    // Verileri data.json dosyasına yaz
    fs.writeFile('./data.json', JSON.stringify(data), (err) => {
        if (err) {
            console.error('Hata:', err);
            res.status(500).send('Veri dosyasına yazma hatası');
        } else {
            res.send("Success");
        }
    });
});


app.post('/nodes/types/company', (req, res) => {
    data.nodes.types.company.push(req.body);

    // Verileri data.json dosyasına yaz
    fs.writeFile('./data.json', JSON.stringify(data), (err) => {
        if (err) {
            console.error('Hata:', err);
            res.status(500).send('Veri dosyasına yazma hatası');
        } else {
            res.send("Success");
        }
    });
});


app.post('/nodes/types/department', (req, res) => {
    data.nodes.types.department.push(req.body);

    // Verileri data.json dosyasına yaz
    fs.writeFile('./data.json', JSON.stringify(data), (err) => {
        if (err) {
            console.error('Hata:', err);
            res.status(500).send('Veri dosyasına yazma hatası');
        } else {
            res.send("Success");
        }
    });
});

app.post('/nodes/types/employee', (req, res) => {
   
    data.nodes.types.employee.push(req.body);

    // Verileri data.json dosyasına yaz
    fs.writeFile('./data.json', JSON.stringify(data), (err) => {
        if (err) {
            console.error('Hata:', err);
            res.status(500).send('Veri dosyasına yazma hatası');
        } else {
            res.send("Success");
        }
    });
});
app.post('/nodes/types/employee/workers', (req, res) => {
   
    data.nodes.types.employee.workers.push(req.body);

    // Verileri data.json dosyasına yaz
    fs.writeFile('./data.json', JSON.stringify(data), (err) => {
        if (err) {
            console.error('Hata:', err);
            res.status(500).send('Veri dosyasına yazma hatası');
        } else {
            res.send("Success");
        }
    });
});

app.post('/nodes/types/employee/teamLeads', (req, res) => {
   
    data.nodes.types.employee.teamLeads.push(req.body);

    // Verileri data.json dosyasına yaz
    fs.writeFile('./data.json', JSON.stringify(data), (err) => {
        if (err) {
            console.error('Hata:', err);
            res.status(500).send('Veri dosyasına yazma hatası');
        } else {
            res.send("Success");
        }
    });
});

app.post('/links', (req, res) => {
    const { source, target } = req.body;
    data.links.push(req.body);

    // Verileri data.json dosyasına yaz
    fs.writeFile('./data.json', JSON.stringify(data), (err) => {
        if (err) {
            console.error('Hata:', err);
            res.status(500).send('Veri dosyasına yazma hatası');
        } else {
            res.send("Success");
        }
    });
});

