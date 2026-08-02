export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <p>&copy; {year} Areeba Fatima All Rights Reserved </p>
    </footer>
  )
}
