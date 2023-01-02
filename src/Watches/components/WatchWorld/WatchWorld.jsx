import { useEffect, useState } from "react"
import { Watch } from "./components/Watch/Watch"

export const WatchWorld = ({ watches, deleteWatch }) => {


  return (
    <div style={{ display: 'flex', columnGap: '15px', rowGap: '15px', flexWrap: 'wrap', margin: '20px 0' }}>
      {watches.map((watch, index) => <Watch watch={watch} deleteWatch={deleteWatch} key={index} />)}
    </div>
  )
}