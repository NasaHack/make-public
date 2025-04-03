import Proah from "proah";

export const proah = new Proah({
  baseURL: atob("aHR0cHM6Ly9wcnhpLnZlcmNlbC5hcHA="),
  methods: ["GET"],
  timeout: 1000 * 20,
});
