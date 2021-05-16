import { useSnapshot } from 'valtio'
import { state } from '../state/valtio'

export default function Home() {

  useSnapshot(state)

  return <>

    <div>
      <h1 suppressHydrationWarning>{state.count}</h1>
      <h1>{}</h1>
      <button onClick={() => state.count = state.count - 250}>Decrease</button>
      <form>
        <input
          value={state.text}
          readOnly
        />
      </form>
      <button onClick={() => state.text = state.text + 'yo'}>
        Add word</button>
        <button onClick={() => state.text = ''}>
        reset</button>
      Valtio state management
    </div>

  </>
}
