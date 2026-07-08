// Receives application-form submissions and writes them to Airtable.
//
// The browser POSTs { type: "creator" | "agency" | "careers", fields: {...} }.
// This function maps the friendly field names to the Airtable field IDs and
// writes the record using the AIRTABLE_TOKEN environment variable — so the
// Airtable key is never exposed in the website's public JavaScript.

const BASE_ID = process.env.AIRTABLE_BASE_ID || "appZ57oHkxygjxP2t";

// Per-form configuration: which Airtable table, and how each incoming field
// maps to an Airtable field ID (with optional numeric coercion).
const FORMS = {
  creator: {
    table: "Leads",
    map: {
      instagram: { id: "fldmxBmlwnpqa0T1p" },
      email: { id: "fldZfKiDechvnjYr5" },
      income: { id: "fldSMqTI72cUdH9cW", type: "float" },
      subs: { id: "fldWgEUeaiQAtj5ya", type: "float" },
      invitedBy: { id: "fldIXqHE4m8fEAdKW" },
      telegram: { id: "fldgXFUF8a0vkbEiu" },
    },
  },
  agency: {
    table: "Agency Applications",
    map: {
      agencyName: { id: "fld56r33Zsd7dMqEW" },
      applicantName: { id: "fldeUFlYghycDxzOL" },
      modelsCount: { id: "fldqokrD4sDD6QpuO", type: "int" },
      email: { id: "fldQPMHMk9HZQALeU" },
      telegram: { id: "fldvlSWSzVQolKuP8" },
      info: { id: "fldI5uz76Ev8AEdz5" },
    },
  },
  careers: {
    table: "Employee Applications",
    map: {
      name: { id: "fldDECN0yzCocoIY3" },
      email: { id: "fld0RfFwy74ECkG2M" },
      telegram: { id: "fldwi0ZAo7cHFWGl4" },
      role: { id: "fldmYkuxHVhr6f3c1" },
      compensation: { id: "fldyW4MO8pHNjXjSt", type: "float" },
      experience: { id: "fldC24H0k2VMElS2N" },
      qualities: { id: "fldzCkthbyrOvflCy" },
      plan: { id: "fldVNsoKyDGWJqJax" },
      basedIn: { id: "fldcRD4MnNIgWNZGU" },
    },
  },
};

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method not allowed" });
  }

  const token = process.env.AIRTABLE_TOKEN;
  if (!token) {
    return json(500, { error: "AIRTABLE_TOKEN is not configured." });
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { error: "Invalid JSON body" });
  }

  const config = FORMS[payload.type];
  if (!config) {
    return json(400, { error: "Unknown form type" });
  }

  const incoming = payload.fields || {};
  const fields = {};
  for (const [key, spec] of Object.entries(config.map)) {
    const raw = incoming[key];
    if (raw === undefined || raw === "") continue;
    if (spec.type === "float") fields[spec.id] = parseFloat(raw);
    else if (spec.type === "int") fields[spec.id] = parseInt(raw, 10);
    else fields[spec.id] = raw;
  }

  try {
    const res = await fetch(
      `https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(
        config.table
      )}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fields }),
      }
    );

    if (!res.ok) {
      const detail = await res.text();
      return json(502, { error: "Airtable request failed", detail });
    }

    return json(200, { ok: true });
  } catch (err) {
    return json(500, { error: "Unexpected error", detail: String(err) });
  }
};

function json(statusCode, body) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
}
