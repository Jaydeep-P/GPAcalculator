export default function Footer({ troll }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1.5rem",
        outline: "1px #dadce0 solid",
        color: "#777",
        fontSize: "0.9rem",
        backgroundColor: "white",
      }}
    >
      <div>
        {troll ? "You have been trolled by " : "Made by "}
        <a href="https://www.linkedin.com/in/hrushi59/" target={"_blank"}>
          Hrushikesh
        </a>{" "}
        and{" "}
        <a
          href="https://www.linkedin.com/in/jaydeep-patel-32b0b0208/"
          target={"_blank"}
        >
          Jaydeep
        </a>
      </div>
    </div>
  );
}
