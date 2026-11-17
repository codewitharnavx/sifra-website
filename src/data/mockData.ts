export interface ApiExample {
  title: string;
  description: string;
  endpoint: string;
  method: string;
  body: Record<string, any>;
  curl: string;
  python: string;
  javascript: string;
  sampleResponse: Record<string, any>;
}

export const API_EXAMPLES: Record<string, ApiExample> = {
  search: {
    title: "Unified Search API",
    description: "Query live web metasearch (SearXNG) and local SQLite BM25 knowledge index simultaneously.",
    endpoint: "http://localhost:5000/api/search",
    method: "POST",
    body: {
      query: "React 19 Server Actions & state mutations",
      mode: "both",
      limit: 5,
    },
    curl: `curl -X POST http://localhost:5000/api/search \\
  -H "Content-Type: application/json" \\
  -d '{"query": "React 19 Server Actions", "mode": "both", "limit": 5}'`,
    python: `import requests

response = requests.post(
    "http://localhost:5000/api/search",
    json={"query": "React 19 Server Actions", "mode": "both", "limit": 5}
)
data = response.json()
print(f"Retrieved {data['total']} sources in {data['timing']['searchMs']}ms")
for item in data["results"]:
    print(f"- [{item['domain']}] {item['title']}: {item['url']}")`,
    javascript: `const res = await fetch("http://localhost:5000/api/search", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query: "React 19 Server Actions", mode: "both", limit: 5 })
});
const data = await res.json();
console.log(data.results);`,
    sampleResponse: {
      success: true,
      query: "React 19 Server Actions",
      mode: "both",
      total: 3,
      timing: { searchMs: 148 },
      results: [
        {
          id: 1,
          title: "Server Actions Reference — React 19",
          url: "https://react.dev/reference/rsc/server-actions",
          domain: "react.dev",
          snippet: "Server Actions allow Client Components to invoke async functions executed on the server, eliminating the need to write manual boilerplate API routes.",
          source: "web",
          score: 0.95
        },
        {
          id: 2,
          title: "Form Handling with useActionState & Server Actions",
          url: "https://react.dev/reference/react/useActionState",
          domain: "react.dev",
          snippet: "useActionState is a Hook that allows you to update state based on the result of a form action, managing pending states and optimistic updates.",
          source: "web",
          score: 0.91
        },
        {
          id: 3,
          title: "Internal Notes: Migrating Client Handlers to RSC Actions",
          url: "local://library/react-19-migration-notes.md",
          domain: "localhost:library",
          snippet: "Audit form submissions across the dashboard to replace useEffect mutations with direct Server Action invocations.",
          source: "local",
          score: 0.88
        }
      ]
    }
  },
  research: {
    title: "Deep Research API",
    description: "Multi-passage extraction (up to 8 candidate sources) with verified bracketed inline citations.",
    endpoint: "http://localhost:5000/api/research",
    method: "POST",
    body: {
      query: "Explain zero-knowledge rollups architecture and fraud proofs",
      deepResearch: true,
      maxSources: 8,
    },
    curl: `curl -X POST http://localhost:5000/api/research \\
  -H "Content-Type: application/json" \\
  -d '{"query": "ZK rollups architecture", "deepResearch": true}'`,
    python: `import requests

res = requests.post(
    "http://localhost:5000/api/research",
    json={"query": "ZK rollups architecture", "deepResearch": True}
)
synthesis = res.json()
print("Answer with Citations:\\n", synthesis["answer"])`,
    javascript: `const res = await fetch("http://localhost:5000/api/research", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query: "ZK rollups architecture", deepResearch: true })
});
const { answer, sources } = await res.json();
console.log(answer);`,
    sampleResponse: {
      success: true,
      query: "ZK rollups architecture",
      deepResearch: true,
      sourcesEvaluated: 8,
      sourcesCited: 4,
      timing: { searchMs: 285, inferenceMs: 1420 },
      answer: "Zero-Knowledge (ZK) rollups bundle hundreds of off-chain transactions into a single cryptographic cryptographic proof (validity proof) posted to Layer 1 [1]. Unlike Optimistic rollups which require a 7-day dispute window for fraud proofs [2], ZK rollups execute state transitions immediately upon proof verification [3]. State compression is achieved via SNARKs or STARKs verifying computational integrity directly [4].",
      citations: [
        { index: 1, title: "Zero-Knowledge Rollups Documentation", domain: "ethereum.org", url: "https://ethereum.org/en/developers/docs/scaling/zk-rollups/" },
        { index: 2, title: "Optimistic vs ZK Rollup Dispute Windows", domain: "vitalik.eth.limo", url: "https://vitalik.eth.limo/general/2021/01/05/rollup.html" },
        { index: 3, title: "Validity Proof Execution Model", domain: "matter-labs.io", url: "https://docs.zksync.io/build/developer-reference/rollups" },
        { index: 4, title: "STARKs vs SNARKs Comparative Analysis", domain: "starkware.co", url: "https://starkware.co/stark-math/" }
      ]
    }
  },
  hardware: {
    title: "Hardware Intelligence API",
    description: "Detects GPU VRAM and host RAM to automatically determine optimal model parameters and offload tiers.",
    endpoint: "http://localhost:5000/api/hardware",
    method: "GET",
    body: {},
    curl: `curl -X GET http://localhost:5000/api/hardware`,
    python: `import requests
hardware = requests.get("http://localhost:5000/api/hardware").json()
print(f"Detected: {hardware['gpu']['model']} ({hardware['gpu']['vramGb']} GB VRAM)")
print("Optimal Tiers:", hardware['recommendations']['optimal'])`,
    javascript: `const res = await fetch("http://localhost:5000/api/hardware");
const { gpu, recommendations } = await res.json();
console.log(gpu.model, recommendations.optimal);`,
    sampleResponse: {
      success: true,
      gpu: {
        vendor: "NVIDIA",
        model: "NVIDIA GeForce RTX 4070 Ti",
        vramGb: 12.0,
        driverVersion: "560.81"
      },
      system: {
        totalRamGb: 32.0,
        freeRamGb: 21.4,
        cpuCores: 16
      },
      recommendations: {
        optimal: [
          { name: "qwen2.5:7b", sizeGb: 4.7, reason: "100% VRAM residency; ~85 tokens/sec" },
          { name: "llama3.2:3b", sizeGb: 2.0, reason: "Ultra-low latency; fits with 10 GB headroom" },
          { name: "mistral:7b-instruct", sizeGb: 4.1, reason: "Fits entirely on GPU without RAM swapping" }
        ],
        compatible: [
          { name: "qwen2.5:14b", sizeGb: 9.0, reason: "Fits in VRAM with reduced KV cache" },
          { name: "deepseek-r1:14b", sizeGb: 9.2, reason: "Fits with ~2.5 GB buffer for SearXNG + OS" }
        ],
        resourceIntensive: [
          { name: "llama3.3:70b", sizeGb: 42.0, reason: "Exceeds VRAM; requires aggressive CPU offloading" }
        ]
      }
    }
  }
};
