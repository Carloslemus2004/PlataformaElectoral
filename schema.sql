CREATE TABLE Usuarios (
    id TEXT PRIMARY KEY,
    nombre TEXT,
    contrasena TEXT,
    rol TEXT
);

CREATE TABLE Candidatos (
    id TEXT PRIMARY KEY,
    nombre TEXT,
    partido TEXT
);

CREATE TABLE JRV (
    id TEXT PRIMARY KEY,
    centro TEXT,
    municipio TEXT,
    departamento TEXT
);

CREATE TABLE Actas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    jrv_id TEXT,
    candidato_id TEXT,
    votos INTEGER
);