const Task = require('../models/Task');
const Project = require('../models/Project');
const { validationResult } = require('express-validator')

// Crea una nueva tarea
exports.createTask = async (req, res) => {
  // Revisar errores
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() })
  }

  try{
  // Extraer proyecto y comporbar si existe
  const { project } = req.body
  
  const proyectFind = await Project.findById(project);
    if(!proyectFind){
      return res.status(404).json({msg: 'Proyecto no encontrado'})
    }

    // Revisar si el proyecto actual pertenece al usuario autenticado
    if(proyectFind.createdBy.toString() !== req.user.id){
      return res.status(401).json({ msg: 'no autorizado' }); 
    }

    // Creamos la tarea
    const task = new Task(req.body);
    await task.save();
    res.json({ task });
  } catch(error){
    console.log(error);
    res.status(500).send('Error')
  }

}


// Obtener tareas por proyecto
exports.getTasks = async (req, res) => {
  try{
    // Extraer proyecto y comporbar si existe
    // Se usa query porque recibe el proyecto como params en axios
    const { project } = req.query
    
    const proyectFind = await Project.findById(project);
    if(!proyectFind){
      return res.status(404).json({msg: 'Proyecto no encontrado'})
    }

    // Revisar si el proyecto actual pertenece al usuario autenticado
    if(proyectFind.createdBy.toString() !== req.user.id){
      return res.status(401).json({ msg: 'no autorizado' }); 
    }

    // Obtener las tareas por proyectos
    const tasks = await Task.find({ project }).sort({ createdBy: -1 });
    res.json({ tasks });
  }catch(error){
    console.log(error);
    res.status(500).send('Hubo un error')
  }
}

// Actualizar una tarea

exports.updateTask = async (req, res) => {
  try{
    // Extraer proyecto y comporbar si existe
    const { project, name, status } = req.body
    // Revisar si la tarea existe o no
    let task = await Task.findById(req.params.id);

    if(!task){
      return res.status(404).json({msg: 'No existe esa tarea'});
    }


    // Extraer proyecto
    const proyectFind = await Project.findById(project);

    // Revisar si el proyecto actual pertenece al usuario autenticado
    if(proyectFind.createdBy.toString() !== req.user.id){
      return res.status(401).json({ msg: 'no autorizado' }); 
    }




    // Crear objeto con la nueva información
    const newTask = {};
    newTask.name = name;
    newTask.status = status;



    //Guardar tarea
    task = await Task.findOneAndUpdate({_id: req.params.id}, newTask, { new: true, });
    res.json({task});

  } catch (error){
    console.log(error);
    res.status(500).send('error')
  }
}

// Eliminar tarea

exports.deleteTask = async (req, res) => {
  try{
    // Extraer proyecto y comporbar si existe
    const { project } = req.query
    // Revisar si la tarea existe o no
    let task = await Task.findById(req.params.id);

    if(!task){
      return res.status(404).json({msg: 'No existe esa tarea'});
    }


    // Extraer proyecto
    const proyectFind = await Project.findById(project);

    // Revisar si el proyecto actual pertenece al usuario autenticado
    if(proyectFind.createdBy.toString() !== req.user.id){
      return res.status(401).json({ msg: 'no autorizado' }); 
    }

    // ELiminar

    await Task.findOneAndRemove({_id: req.params.id});
    res.json({msg: 'tarea eliminada'});

  } catch (error){
    console.log(error);
    res.status(500).send('error')
  }
}