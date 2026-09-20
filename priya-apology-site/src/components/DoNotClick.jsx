import { useState } from 'react'

export default function DoNotClick() {
  const [clicked, setClicked] = useState(false)

  return (
    <div className="mx-auto mt-4 max-w-xs text-center">
      {!clicked ? (
        <button
          onClick={() => setClicked(true)}
          className="rounded-full border-2 border-dashed border-rose/50 px-5 py-2 text-sm font-bold text-rose hover:bg-blush"
        >
          DO NOT CLICK
        </button>
      ) : (
        <p className="text-sm font-semibold text-plum">
          You literally clicked the button that said DO NOT CLICK. Classic Priya. 😂
        </p>
      )}
    </div>
  )
}
