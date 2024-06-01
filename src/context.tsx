import {createContext, useContext, useState} from 'react'
const AppContext = createContext()
export const AppProvider = ({children}) => {
  const [sidebar,setSidebar] = useState(false)
  const [pageId,setPageId] = useState(null)
  const sidebarOpen = () => {
    setSidebar(true)
  }
  const sidebarClose = () => {
    setSidebar(false)
  }
  return (
    <AppContext.Provider value={{sidebar,sidebarOpen,sidebarClose,pageId,setPageId}}>
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => useContext(AppContext)