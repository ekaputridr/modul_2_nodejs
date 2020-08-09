const express = require('express');
const bodyPasrser = require('body-parser');
const app = express();
const port = 8080;

app.use(bodyPasrser.urlencoded({ extended: false }));

app.get('/siswa/:nama', function(req, res){
    var namaSiswa = req.params.nama;
    res.end('Menampilkan nama siswa: ' + namaSiswa);
});

app.post('/siswa', function(req, res){
    var namaSiswa = req.body.nama;
    var alamat = req.body.alamat;
    var kelas = req.body.kelas;
    res.end('Menampilkan nama siswa, a/n: ' + namaSiswa + ', yang beralamat di kota ' + alamat + ', di kelas: ' + kelas);
});

app.delete('/siswa/:id', function(req, res){
    var id = req.params.id;
    var namaSiswa = req.body.nama;
    res.end('ID ' + id + ' telah dihapus, atas nama ' + namaSiswa);
});

app.put('/siswa/:id', function(req, res){
    var id = req.params.id;
    var namaSiswa = req.body.nama;
    var alamat = req.body.alamat;
    var kelas = req.body.kelas;
    res.end('Siswa dengan ID ' + id + ', telah terupdate.');
});

app.listen(port, function(){
    console.log('terkoneksi huahahah');
});
