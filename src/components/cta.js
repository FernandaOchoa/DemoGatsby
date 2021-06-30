import React from "react"

import Button from "../components/button"
import SectionHeader from "./section-header"

const CallToAction = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Mantente actualizado"
      description="Recibe noticias de nuestros próximos programas y eventos."
    />
    <Button>Suscribirme</Button>
  </div>
)

export default CallToAction
