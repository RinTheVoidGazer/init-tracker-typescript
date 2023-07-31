// A div that controls it's content's positioning.
type ParentBoxProps = {
  children: React.ReactNode
  flexDirection?: "row" | "column"
  gap?: string
  padding?: string | undefined
  justifyContent?: string | undefined
  alignItems?: string | undefined
  testId: string
}

const ParentBox = (props: ParentBoxProps) => {
  const {
    flexDirection = "row",
    gap = "5px",
    padding = undefined,
    justifyContent = undefined,
    alignItems = undefined,
  } = props

  return (
    <div
      data-testid={props.testId}
      style={{
        display: "flex",
        flexDirection: flexDirection,
        gap: gap,
        padding: padding,
        justifyContent: justifyContent,
        alignItems: alignItems,
      }}
    >
      {props.children}
    </div>
  )
}

export default ParentBox
