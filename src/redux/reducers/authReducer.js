import { createSlice } from "@reduxjs/toolkit";

// las funciones reductoras son funciones puras que siempre reciven dos parametros 'state' and 'action'

const initialState = {
  user: null, // aqui es donde almacenamos el usuario loggeado
  loading: false, // esto es opcional si quieren colocar gifs de loading en la app
  usuarios: [], // array que vamos a utilizar globalmente para almacenar el CRUD, todo lo del form
  filteredUsers: [] // Este es el array que vamos a utilizar globalmente para almacenar el CRUD todo lo del form
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // modificador de estado para usuario logueado, cuando esta logueado es un 'objeto' y cuando no es 'null'
    setUser: (state, action) => {
      state.user = action.payload;
    },
    // modificador de estado del login
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    // modificador de estado de los usuarios
    setUsers: { // para almacenar el array inicial que viene de firestore
      reducer: (state, action) => {
        state.usuarios = action.payload
      }
    },
    // otro modificador de estado para usuarios, para actualizar la info
    updateU: { // este modificador de usuaios busca un usuario dentro del array y lo modifica
      reducer: (state, action) => {
        return{
          ...state,
          usuarios: state.usuarios.map((user)=>user.id === action.payload.id ? {
              ...action.payload
          }: user) //modificador de estado
        }
      }
    },
    // modificador de estado que agrega un nuevo usuario del 'form' al array de 'usuarios'
    addUser: {
      reducer: (state, action) => {
        return {
          ...state,
          usuarios: [...state.usuarios, action.payload]
        }
      }
    },
    // modificador de estado que elimina un objeto del array de 'usuarios' a traves del index del objeto para utilizar el 'slice'
    deleteUser: {
      reducer: (state, action) => { // 'action.payload' recibe el 'id' del objeto que quiero eliminar
        const index = state.usuarios.findIndex(item => item.id === action.payload)
            return {
              ...state,
              usuarios: [...state.usuarios.slice(0, index)]

        }
      }
    }

  }
});

// esta linea es para exportar todos los modificadores de estado para que puedan ser utilizados por los actions
export const { setUser, setLoading, setUsers, updateU, deleteUser, addUser } = authSlice.actions;

export default authSlice.reducer;