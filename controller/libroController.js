const {Libro} = require('../models');

const addLibro = async (req, res) => {
    try {
        const {titulo, autor, precio, stock } = req.body;
        const descuento= 0.2*precio;
        if(stock>5){
            precioTotal = precio - descuento;
        }else{
            precioTotal = precio;
        }
        const libro = await Libro.create({titulo, autor, precio, stock, precioTotal});
        return res.status(200).json(libro);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

const getLibros = async (req, res) => {
    try {
        const libros = await Libro.findAll();
        return res.status(200).json(libros);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

const updateLibro = async (req, res) => {
    try {
        const {id} = req.params;
        const {titulo, autor, precio, stock, activo} = req.body;
        let precioTotal=0;
        const libro = await Libro.findByPk(id);
        if(!libro) {
            return res.status(404).json({message: "Libro no encontrado"});
        }
        const descuento = 0.2*precio;
        if(stock>5){
            precioTotal=precio - descuento ;
        }else{
            precioTotal=precio;
        }
        libro.precioTotal=precioTotal;

        if(titulo) libro.titulo = titulo;
        if(autor) libro.autor = autor;
        if(precio) libro.precio = precio;
        if(stock) libro.stock = stock;
        if(activo) libro.activo = activo;
        
        await libro.save();
        return res.status(200).json({message: "Libro actualizado", libro});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

const changeStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { estado } = req.body;

        if (!["Activo", "Inactivo"].includes(estado)) {
            return res.status(400).json({ error: "Estado inválido. Use 'Activo' o 'Inactivo'." });
        }

        const libro = await Libro.findByPk(id);
        if (!libro) {
            return res.status(404).json({ error: "Libro no encontrado" });
        }

        libro.estado = estado;
        await libro.save();

        res.json({ message: `Estado actualizado a ${estado}`, libro });
    } catch (error) {
        console.error("Error al cambiar estado:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

module.exports = {addLibro, getLibros, updateLibro, changeStatus};
