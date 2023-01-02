import { useState } from "react"
import { WatchAdd } from "./components/WatchAdd/WatchAdd"
import { WatchWorld } from "./components/WatchWorld/WatchWorld"

export const Watches = () => {
  const [watches, setWatches] = useState([])

  const addWatch = (watch) => {
    const newWathes = [...watches, watch]
    setWatches(newWathes)
    console.log(newWathes)
  }

  const deleteWatch = (name) => {
    const newWathes = [...watches]
    newWathes.splice(newWathes.findIndex(w => w.name === name), 1)
    setWatches(newWathes)
  }

  return (
    <>
      <WatchAdd addWatch={addWatch} />
      <WatchWorld watches={watches} deleteWatch={deleteWatch} />
    </>
  )
}