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




//       *************    GET FUNCTIONS    *************

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








//       *************    POST FUNCTIONS    *************


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









//       *************    PUT FUNCTIONS    *************

app.put('/head/:id', (req, res) => {
    const { id } = req.params;
    const updatedHead = req.body;

    const headIndex = data.nodes.types.head.findIndex(head => head.id === id);
    console.log(headIndex)
    if (headIndex !== -1) {
        // Başkanı güncelle
        data.nodes.types.head[headIndex] = { ...data.nodes.types.head[headIndex], ...updatedHead };

        // Verileri dosyaya yaz
        fs.writeFileSync('./data.json', JSON.stringify(data));

        res.send('Başkan bilgileri güncellendi!');
    } else {
        res.status(404).send('Başkan bulunamadı!');
    }
});

app.put('/company/:id', (req, res) => {
    const { id } = req.params;
    const updatedCompany = req.body;

    const companyIndex = data.nodes.types.company.findIndex(company => company.id === id);
    if (companyIndex !== -1) {
        // Şirketi güncelle
        data.nodes.types.company[companyIndex] = { ...data.nodes.types.company[companyIndex], ...updatedCompany };

        // Verileri dosyaya yaz
        fs.writeFileSync('./data.json', JSON.stringify(data));

        res.send('Şirket bilgileri güncellendi!');
    } else {
        res.status(404).send('Şirket bulunamadı!');
    }
});


app.put('/department/:id', (req, res) => {
    const { id } = req.params;
    const updatedDepartment = req.body;

    const departmentIndex = data.nodes.types.department.findIndex(department => department.id === id);
    if (departmentIndex !== -1) {
        // Departmanı güncelle
        data.nodes.types.department[departmentIndex] = { ...data.nodes.types.department[departmentIndex], ...updatedDepartment };

        // Verileri dosyaya yaz
        fs.writeFileSync('./data.json', JSON.stringify(data));

        res.send('Departman bilgileri güncellendi!');
    } else {
        res.status(404).send('Departman bulunamadı!');
    }
});


app.put('/teamLead/:id', (req, res) => {
    const { id } = req.params;
    const updatedTeamLead = req.body;

    const teamLeadIndex = data.nodes.types.employee.teamLeads.findIndex(teamLead => teamLead.id === id);
    if (teamLeadIndex !== -1) {
        // Ekip liderini güncelle
        data.nodes.types.employee.teamLeads[teamLeadIndex] = { ...data.nodes.types.employee.teamLeads[teamLeadIndex], ...updatedTeamLead };

        // Verileri dosyaya yaz
        fs.writeFileSync('./data.json', JSON.stringify(data));

        res.send('Ekip lideri bilgileri güncellendi!');
    } else {
        res.status(404).send('Ekip lideri bulunamadı!');
    }
});


app.put('/worker/:id', (req, res) => {
    const { id } = req.params;
    const updatedWorker = req.body;

    const workerIndex = data.nodes.types.employee.workers.findIndex(worker => worker.id === id);
    if (workerIndex !== -1) {
        // Çalışanı güncelle
        data.nodes.types.employee.workers[workerIndex] = { ...data.nodes.types.employee.workers[workerIndex], ...updatedWorker };

        // Verileri dosyaya yaz
        fs.writeFileSync('./data.json', JSON.stringify(data));

        res.send('Çalışan bilgileri güncellendi!');
    } else {
        res.status(404).send('Çalışan bulunamadı!');
    }
});






//       *************    DELETE FUNCTIONS    *************

app.delete('/head/:id', (req, res) => {
    const { id } = req.params;

    // Sadece başkan düğümünü filtrele ve koru
    const updatedHeads = data.nodes.types.head.filter(head => head.id === id);

    // Yeni veri setini oluştur
    const newData = {
        nodes: {
            types: {
                head: updatedHeads,
                company: [],
                department: [],
                employee: {
                    workers: [],
                    teamLeads: []
                }
            }
        },
        links: []
    };

    // Yeni veri setini JSON dosyasına yaz
    fs.writeFileSync('./data.json', JSON.stringify(newData));

    res.send('Başkan düğümü korundu, diğer veriler silindi!');
});


app.delete('/company/:id', (req, res) => {
    const { id } = req.params;

    // İlgili şirketi bul ve sil
    const updatedCompanies = data.nodes.types.company.filter(company => company.id !== id);

    // Şirketin bağlantılarını bul ve sil
    const updatedLinks = data.links.filter(link => link.target !== id);

    // Eski veri setini güncelle
    data.nodes.types.company = updatedCompanies;
    data.links = updatedLinks;

    // Verileri dosyaya yaz
    fs.writeFileSync('./data.json', JSON.stringify(data));

    res.send('Şirket ve ilişkili bağlantılar başarıyla silindi!');
});

app.delete('/department/:id', (req, res) => {
    const { id } = req.params;

    // Departmanı bul ve sil
    const updatedDepartments = data.nodes.types.department.filter(department => department.id !== id);

    // Eski veri setini güncelle
    data.nodes.types.department = updatedDepartments;

    // Verileri dosyaya yaz
    fs.writeFileSync('./data.json', JSON.stringify(data));

    res.send('Departman başarıyla silindi!');
});

app.delete('/teamLeads/:id', (req, res) => {
    const { id } = req.params;

    // Ekip liderini bul ve sil
    const updatedTeamLeads = data.nodes.types.employee.teamLeads.filter(teamLead => teamLead.id !== id);

    // Eski veri setini güncelle
    data.nodes.types.employee.teamLeads = updatedTeamLeads;

    // Verileri dosyaya yaz
    fs.writeFileSync('./data.json', JSON.stringify(data));

    res.send('Ekip lideri başarıyla silindi!');
});

//sorunsuz
app.delete('/workers/:id', (req, res) => {
    const { id } = req.params;

    // Çalışanı bul ve sil
    const updatedWorkers = data.nodes.types.employee.workers.filter(worker => worker.id !== id);

    // İlgili çalışana ait linkleri bul ve sil
    const updatedLinks = data.links.filter(link => link.source !== id);

    // Eski veri setini güncelle
    data.nodes.types.employee.workers = updatedWorkers;
    data.links = updatedLinks;

    // Verileri dosyaya yaz
    fs.writeFileSync('./data.json', JSON.stringify(data));

    res.send('Çalışan ve ilişkili bağlantılar başarıyla silindi!');
});
