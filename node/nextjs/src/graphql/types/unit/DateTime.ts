import { scalarType } from "nexus"

export const DateTime = scalarType({
  name: "DateTime",
  asNexusMethod: "dateTime",
  description: "DateTime scalar type.",
})
