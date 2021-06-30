import React from "react"

import feature from "../images/feature.png"
import SectionHeader from "./section-header"
import { COLORS } from "../styles/constants"

const Content = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Del 2 de julio al 30 de julio."
      description="Exclusivo para México."
    />
    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
      <div>
        <h3>Beneficios</h3>
        <p style={{ color: COLORS.gray }}>
          <li>Certificación Internacional AZ 900</li>
          <li>Acceso a un agente de talento por Experis de ManpowerGroup</li>
          <li>100USD Crédito en Azure</li>
          <li>GitHub Student Developer Pack</li>
        </p>
      </div>
      <div>
        <img src={feature} alt="a blank card floating over colorful graphics" />
      </div>
    </content>
  </div>
)

export default Content
