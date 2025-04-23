import { Button, Space, Typography } from 'antd'
import { useState } from 'react'

const { Title } = Typography

function App() {
  const [count, setCount] = useState(0)

  return (
    <Space direction="vertical" align="center" style={{ width: '100%', padding: '2rem' }}>
      <Title>Vite + React + Ant Design</Title>
      <Button type="primary" onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </Button>
    </Space>
  )
}

export default App 