import React from 'react';

function App() {
  let r='React'
  let rn='React Native'
  const el=(
    <div>
      Create Web & Mobile Apps<br/>
      whit <span dangerouslySetInnerHTML={{_html: r}}/> & {rn}
    </div>
  )
  return el
}

export default App;
