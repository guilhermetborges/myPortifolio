import {styled} from "@mui/material"
import {ReactNode} from "react"

interface StyledButtonProps {
    children: ReactNode

}

const StyledButton: React.FC<StyledButtonProps> = ({children}) => {

    const StyledButton = styled("button")(({theme}) => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "5px",
        padding: "8px 20px",
        width: "100%",
        color: theme.palette.primary.contrastText,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        fontSize: "1.15rem",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
        }
    
      }));

    return (
        <> 
            <StyledButton>
                {children}
            </StyledButton>

        </>
  )
}

export default StyledButton