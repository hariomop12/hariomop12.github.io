export const COUNTER = {
  workspace: "hariom-ops-team-5019",
  name: "first-counter-5019",
  key: "",
};

export async function counterGet(path = "") {
  const headers = {};
  if (COUNTER.key) headers.Authorization = `Bearer ${COUNTER.key}`;
  const res = await fetch(
    `https://api.counterapi.dev/v2/${COUNTER.workspace}/${COUNTER.name}${path}`,
    { headers }
  );
  if (!res.ok) throw new Error("counter request failed");
  return res.json();
}
