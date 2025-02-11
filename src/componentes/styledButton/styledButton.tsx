import {styled} from "@mui/material"
import {ReactNode} from "react"

interface StyledButtonProps {
    children: ReactNode
    onclick: () => void

}

const StyledButton: React.FC<StyledButtonProps> = ({children,onclick}) => {

    const StyledButton = styled("button")(({theme}) => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "8px 20px",
        width: "100%",
        color: theme.palette.primary.contrastText,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "6px",
        fontSize: "1.15rem",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
        }
    
      }));

    return (
        <> 
            <StyledButton onClick={onclick}>
                {children}
            </StyledButton>

        </>
  )
}

export default StyledButton