import React from 'react'

const AcademicData = ({ handleChangeStep }) => {
  return (
    <div className="p-6 rounded-lg shadow-lg bg-white lg:w-3/4 m-auto">
      <div className='mb-5'>
          <h3 className="text-3xl leading-6 font-bold text-gray-900 mb-4">
            Cuestionario
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            
          </p>
        </div>
      <form>
        <div className="form-group mb-6">
          <label for="genre" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400 text-bold">Q01. ¿Cuál es su género?</label>
          <select id="genre" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected value="N">Seleccione un género</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
            <option value="O">Otro</option>
            <option value="P">Prefiero no decirlo</option>
          </select>
        </div>
        <div className="form-group mb-6">
          <label for="birthdate" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400 text-bold">Q02. ¿Cuál es tu fecha de nacimiento?</label>
          <input type="date" className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-cyan-600 focus:outline-none" id="birthdate"/>
        </div>
        <div className="form-group mb-6">
          <label for="campus" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400 text-bold">Q03.a ¿Cuál es tu campus?</label>
          <select id="campus" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected value="N">Seleccione un campus</option>
            <option value="A">Asunción</option>
            <option value="AP">Alto Paraná</option>
            <option value="CA">Caaguazú</option>
            <option value="CO">Concepción</option>
            <option value="G">Guairá</option>
            <option value="I">Itapúa</option>
          </select>
        </div>
        <div className="form-group mb-6">
          <label for="career" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400 text-bold">Q03.b ¿Cuál es tu carrera?</label>
          <input type="email" className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="career"
            placeholder="Carrera"/>
        </div>
        <div className="form-group mb-6">
          <label for="degree" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400 text-bold">Q04 ¿Cuál es su programa de grado este año? (lo que te identifique mejor)</label>
          <select id="degree" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected value="N">Seleccione un programa</option>
            <option value="U1">Estudiante - 1° año</option>
            <option value="U2">Estudiante - 2° año</option>
            <option value="U3">Estudiante - 3° año</option>
            <option value="U4">Estudiante - 4° año</option>
            <option value="U5">Estudiante - 5° año</option>
            <option value="TS">Estudiante de PFC</option>
            <option value="MSC">MSc/MA</option>
            <option value="PHD">MPhil/MRes/PhD</option>

          </select>
        </div>
        <div className="form-group mb-6 gap-2">
          <label for="degree" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400 text-bold">Q06 ¿Cómo calificaría su nivel de conocimiento o competencia (el que sea mayor) en lo siguiente? 1=nada, 2=poco, 3=moderado, 4=bastante alto, 5=muy alto</label>
          <div class="items-center mb-4 grid grid-cols-7">    
            <label for="q06a" class="ml-2 text-lg font-bold text-gray-900 dark:text-gray-300 col-span-3">Q06.a - Lógica Matemática</label>
            <select id="q06a" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 col-span-3 sm:col-span-2">
              <option selected value="N">Seleccione una calificación</option>
              <option value="1">Nada</option>
              <option value="2">Poco</option>
              <option value="3">Moderado</option>
              <option value="4">Bastante</option>
              <option value="5">Muy Alto</option>
            </select>
            <div class="flex items-center justify-center ml-4 sm:col-span-2 col-span-1">
              <label for="default-toggle"  data-bs-toggle="tooltip" title="Seleccione si desea recibir solicitudes de tutoría en esta materia" class="block sm:inline-flex relative items-center cursor-pointer">
                <input type="checkbox" value="" id="default-toggle" class="sr-only peer"/>
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="sm:ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 truncate">Solicitudes</span>
              </label>
            </div>
          </div>
          <div class="items-center mb-4 grid grid-cols-4">    
            <label for="q06a" class="ml-2 text-lg font-bold text-gray-900 dark:text-gray-300 col-span-3">Q06.b - Lógica simbólica</label>
            <select id="q06a" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 col-span-1">
              <option selected value="N">Seleccione una calificación</option>
              <option value="1">Nada</option>
              <option value="2">Poco</option>
              <option value="3">Moderado</option>
              <option value="4">Bastante</option>
              <option value="5">Muy Alto</option>
            </select>
          </div>
          <div class="items-center mb-4 grid grid-cols-4">    
            <label for="q06a" class="ml-2 text-lg font-bold text-gray-900 dark:text-gray-300 col-span-3">Q06.c - Álgebra</label>
            <select id="q06a" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 col-span-1">
              <option selected value="N">Seleccione una calificación</option>
              <option value="1">Nada</option>
              <option value="2">Poco</option>
              <option value="3">Moderado</option>
              <option value="4">Bastante</option>
              <option value="5">Muy Alto</option>
            </select>
          </div>
          <div class="items-center mb-4 grid grid-cols-4">    
            <label for="q06a" class="ml-2 text-lg font-bold text-gray-900 dark:text-gray-300 col-span-3">Q06.d - Geometría</label>
            <select id="q06a" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 col-span-1">
              <option selected value="N">Seleccione una calificación</option>
              <option value="1">Nada</option>
              <option value="2">Poco</option>
              <option value="3">Moderado</option>
              <option value="4">Bastante</option>
              <option value="5">Muy Alto</option>
            </select>
          </div>
          <div class="items-center mb-4 grid grid-cols-4">    
            <label for="q06a" class="ml-2 text-lg font-bold text-gray-900 dark:text-gray-300 col-span-3">Q06.e - Probabilidad y estadística</label>
            <select id="q06a" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 col-span-1">
              <option selected value="N">Seleccione una calificación</option>
              <option value="1">Nada</option>
              <option value="2">Poco</option>
              <option value="3">Moderado</option>
              <option value="4">Bastante</option>
              <option value="5">Muy Alto</option>
            </select>
          </div>
          <div class="items-center mb-4 grid grid-cols-4">    
            <label for="q06a" class="ml-2 text-lg font-bold text-gray-900 dark:text-gray-300 col-span-3">Q06.f - Aritmética</label>
            <select id="q06a" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 col-span-1">
              <option selected value="N">Seleccione una calificación</option>
              <option value="1">Nada</option>
              <option value="2">Poco</option>
              <option value="3">Moderado</option>
              <option value="4">Bastante</option>
              <option value="5">Muy Alto</option>
            </select>
          </div>
          <div class="items-center mb-4 grid grid-cols-4">    
            <label for="q06a" class="ml-2 text-lg font-bold text-gray-900 dark:text-gray-300 col-span-3">Q06.g - Investigación de operaciones</label>
            <select id="q06a" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 col-span-1">
              <option selected value="N">Seleccione una calificación</option>
              <option value="1">Nada</option>
              <option value="2">Poco</option>
              <option value="3">Moderado</option>
              <option value="4">Bastante</option>
              <option value="5">Muy Alto</option>
            </select>
          </div>

        </div>
        <div className='flex justify-center gap-2'>
          <button className="
            w-full
            px-6
            py-2.5
            bg-cyan-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-cyan-700 hover:shadow-lg
            focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-cyan-800 active:shadow-lg
            transition
            duration-150
            ease-in-out" onClick={() => handleChangeStep(-1)}>Anterior</button>
          <button className="
            w-full
            px-6
            py-2.5
            bg-cyan-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-cyan-700 hover:shadow-lg
            focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-cyan-800 active:shadow-lg
            transition
            duration-150
            ease-in-out" onClick={() => handleChangeStep(1)}>Siguiente</button>
        </div>
       
      </form>
    </div>
  )
}

export default AcademicData