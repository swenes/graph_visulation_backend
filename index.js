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

// it's working
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

// it's working
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


// it's working
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

// it's working
app.put('/teamLead/:id', (req, res) => {
    const { id } = req.params;
    const updatedTeamLead = req.body;

    const teamLeadIndex = data.nodes.types.employee.teamLeads.findIndex(teamLead => teamLead.id === id);
    if (teamLeadIndex !== -1) {
        // Ekip liderini güncelle
        data.nodes.types.employee.teamLeads[teamLeadIndex] = { ...data.nodes.types.employee.teamLeads[teamLeadIndex], ...updatedTeamLead};

        // Verileri dosyaya yaz
        fs.writeFileSync('./data.json', JSON.stringify(data));

        res.send('Ekip lideri bilgileri güncellendi!');
    } else {
        res.status(404).send('Ekip lideri bulunamadı!');
    }
});

// it's working
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

//it's working.
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

// it's working.
app.delete('/company/:id', (req, res) => {
    const { id } = req.params;

    // İlgili şirketi bul ve sil
    const updatedCompanies = data.nodes.types.company.filter(company => company.id !== id);

    // Şirketin bağlantılarını bul ve sil
    const updatedLinks = data.links.filter(link => link.target !== id && link.source !== id);

    // Eski veri setini güncelle
    data.nodes.types.company = updatedCompanies;
    data.links = updatedLinks;

    // Verileri dosyaya yaz
    fs.writeFileSync('./data.json', JSON.stringify(data));

    res.send('Şirket ve ilişkili bağlantılar başarıyla silindi!');
});


// it's working.
app.delete('/department/:id', (req, res) => {
    const { id } = req.params;

    // Departmanı bul ve sil
    const updatedDepartments = data.nodes.types.department.filter(department => department.id !== id);
    const updatedLinks = data.links.filter(link => link.target !== id && link.source !== id);
    // Eski veri setini güncelle
    data.nodes.types.department = updatedDepartments;
    data.links = updatedLinks;

    // Verileri dosyaya yaz
    fs.writeFileSync('./data.json', JSON.stringify(data));

    res.send('Departman başarıyla silindi!');
});



//it's working.
app.delete('/teamLead/:id', (req, res) => {
    const { id } = req.params;

    // Takım liderini bul
    const deletedTeamLead = data.nodes.types.employee.teamLeads.find(teamLead => teamLead.id === id);

    if (!deletedTeamLead) {
        res.status(404).send('Takım lideri bulunamadı!');
        return;
    }

    const parentDepartmentName = deletedTeamLead.parentDepartment;
    const parentDepartmentID = data.nodes.types.department.find(department => department.name === parentDepartmentName)?.id;

    // Takım liderine bağlı tüm çalışanları bul ve parentLeadlarını'larını güncelle
    data.nodes.types.employee.workers.forEach(worker => {
        if (worker.parentLead === deletedTeamLead.name) {
            // Çalışanın parentLeadini sildim.
            worker.parentLead = "--";


            // Bağlantıyı güncelle: Çalışanın bağlantısını yeni departman ID'si yap
            const workerLinkId1 = data.links.find(link => link.source === id && link.target === worker.id);
            const workerLinkId2 = data.links.find(link =>  link.target === id && link.source === worker.id);
            if (workerLinkId1) {
                workerLinkId1.source = parentDepartmentID;
            }
            if (workerLinkId2) {
                workerLinkId2.target = parentDepartmentID;
            }

            const teamLeadAndDepartmentRelation = data.links.find(link => link.source === id && link.target === parentDepartmentID);
            if (teamLeadAndDepartmentRelation) {
                data.links = data.links.filter(link => link !== teamLeadAndDepartmentRelation);

            }

        }
    });

    // İlgili linkleri güncelle
    const updatedLinks = data.links.filter(link => link.source !== id);

    // Eski veri setini güncelle: Takım lideri ve bağlantılarını kaldır
    data.nodes.types.employee.teamLeads = data.nodes.types.employee.teamLeads.filter(teamLead => teamLead.id !== id);
    data.links = updatedLinks;

    // Verileri dosyaya yaz
    fs.writeFileSync('./data.json', JSON.stringify(data));

    res.send('Takım lideri, ilişkili bağlantılar ve departman bağlantısı başarıyla silindi!');
});



//it's working.
app.delete('/workers/:id', (req, res) => {
    const { id } = req.params;

    // Çalışanı bul ve sil
    const updatedWorkers = data.nodes.types.employee.workers.filter(worker => worker.id !== id);

    // İlgili çalışana ait linkleri bul ve sil
    const updatedLinks = data.links.filter(link => link.source !== id && link.target !== id);

    // Eski veri setini güncelle
    data.nodes.types.employee.workers = updatedWorkers;
    data.links = updatedLinks;

    // Verileri dosyaya yaz
    fs.writeFileSync('./data.json', JSON.stringify(data));

    res.send('Çalışan ve ilişkili bağlantılar başarıyla silindi!');
});
