
interface AppProps {
  components: React.FC<ChildrenProps>[];
  children: React.ReactNode
}

interface ChildrenProps {
  children: React.ReactNode
}

export type { AppProps, ChildrenProps }