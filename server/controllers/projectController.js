const Project = require('../models/Project')
const { validationResult } = require('express-validator')

exports.createProject = async (req, res) => {
  // Revisar errores
  const errors = validationResult(req);
  if(!errors.isEmpty){
    return res.status(400).json({ errors: errors.array() })
  }

  
  try{
    // Crear un proyecto
    const project = new Project(req.body);
    
    // Guardar al usuario creador
    project.createdBy = req.user.id;

    // Guardamos proyecto
    project.save();
    res.json(project);

  }catch (error){
    console.log(error);
    req.status(500).send('Error');
  }
}

// Obtiene todos los proyectos del usuario actual
exports.getProjects = async (req, res) => {
  try{
    const projects = await Project.find({ createdBy: req.user.id });
    res.json({ projects });
  }catch (error){
    console.log(error)
    res.status(500).send('Error')
  }
}

// Actualiza proyectos
exports.updateProject = async (req, res) => {
  // Revisar errores
  const errors = validationResult(req);
  if(!errors.isEmpty){
    return res.status(400).json({ errors: errors.array() })
  }

  const { name } = req.body;
  const newProject = {}

  if(name){
    newProject.name = name;
  }

  try{
    // Revisar el ID
    let project = await Project.findById(req.params.id);
    // Revisar si el pryecto existe o no
    if(!project){
      return res.status(404).json({ msg: 'proyecto no encontrado' })
    }
    // Verificar el creador del proyecto
    if(project.createdBy.toString() !== req.user.id){
      return res.status(401).json({ msg: 'no autorizado' });
      
    }

    // Actualizar
    project = await Project.findOneAndUpdate({_id: req.params.id}, {$set: newProject} , {new:true})
    res.json(project);

  }catch (error){
    console.log(error);
    res.status(500).send('Error en el servidor');
  }

}


// Elimina pryecto por id

exports.deleteProject = async (req, res) => {
  try{
    // Revisar el ID
    let project = await Project.findById(req.params.id);
    // Revisar si el pryecto existe o no
    if(!project){
      return res.status(404).json({ msg: 'proyecto no encontrado' })
    }
    // Verificar el creador del proyecto
    if(project.createdBy.toString() !== req.user.id){
      return res.status(401).json({ msg: 'no autorizado' });
      
    }

    // Eliminar el proyecto
    await Project.findOneAndRemove({_id: req.params.id })
    res.json({ msg: 'Proyecto eliminado'})

  } catch (error){
    console.log(error);
    res.status(500).send('error en el servidor')
  }
}