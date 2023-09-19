const styles = {
  body: {
    margin: "0 auto",
    color: "black",
    backgroundColor: "transparent",
  },
  calculator: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px",
    maxWidth: "350px",
    margin: "0 auto",
    padding: "30px",
    border: "30px solid #fa6bbd",
    borderRadius: "10px",
    backgroundColor: "#F2E7E6",
  },
  calculatorButton: { 
    fontSize: "24px",
    padding: "15px",
    backgroundColor: 'pink'
  },
  calculatorButtonActive: {
    backgroundColor: "pink",
  },
  output: {
    gridColumn: "span 4",
    textAlign: "right",
    padding: "10px",
    fontSize: "40px",
    color: "#E0678B"
  },

  specialButton:{
    backgroundColor:"#E0678B",
    color:"#F9EAE0",
    fontSize: "36px",
    textAlign : "center"
  }
};

export default styles;
