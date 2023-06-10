import React, { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import SEO from "../components/SEO"
import SearchBar from "../components/SearchBar"
import useDebounce from "../hooks/useDebounce"
import { search, unique } from "../lib/search"
import styles from "./index.module.css"
import youTube from "../components/youtube.png"



interface Translation {
  lang: string
  url: string
}

const TRANSLATIONS: Translation[] = [
  {
    lang: "Persian",
    url: "https://dpanosian.com/fa/solidity-by-example",
  },
]

interface Route {
  path: string
  title: string
}

const SOL_ROUTES: Route[] = [
  {
    path: "hello-world",
    title: "Merhaba Dünya",
  },
  {
    path: "first-app",
    title: "Örnek Uygulama",
  },
  {
    path: "primitives",
    title: "Veri Türleri",
  },
  {
    path: "variables",
    title: "Değişkenler",
  },
  {
    path: "constants",
    title: "Sabitler",
  },
  {
    path: "immutable",
    title: "Değişmezler",
  },
  {
    path: "state-variables",
    title: "Durum Değişkenini Okuma ve Yazma",
  },
  {
    path: "ether-units",
    title: "Ether ve Wei",
  },
  {
    path: "gas",
    title: "Gas ve Gas Ücreti",
  },
  // Flow control
  {
    path: "if-else",
    title: "Koşul İfadeleri - If / Else",
  },
  {
    path: "loop",
    title: "For ve While Döngüleri",
  },
  // collection data types
  {
    path: "mapping",
    title: "Mapping İşlemi",
  },
  {
    path: "array",
    title: "Array",
  },
  // custom data types
  {
    path: "enum",
    title: "Enum",
  },
  {
    path: "structs",
    title: "Structs",
  },
  {
    path: "data-locations",
    title: "Data Locations - Storage, Memory and Calldata",
  },
  // function
  {
    path: "function",
    title: "Function",
  },
  {
    path: "view-and-pure-functions",
    title: "View and Pure Functions",
  },
  {
    path: "error",
    title: "Error",
  },
  {
    path: "function-modifier",
    title: "Function Modifier",
  },
  {
    path: "events",
    title: "Events",
  },
  // inheritance
  {
    path: "constructor",
    title: "Constructor",
  },
  {
    path: "inheritance",
    title: "Inheritance",
  },
  {
    path: "shadowing-inherited-state-variables",
    title: "Shadowing Inherited State Variables",
  },
  {
    path: "super",
    title: "Calling Parent Contracts",
  },
  {
    path: "visibility",
    title: "Visibility",
  },
  {
    path: "interface",
    title: "Interface",
  },
  // send / receive ether
  {
    path: "payable",
    title: "Payable",
  },
  {
    path: "sending-ether",
    title: "Sending Ether - Transfer, Send, and Call",
  },
  {
    path: "fallback",
    title: "Fallback",
  },
  // contract interaction
  {
    path: "call",
    title: "Call",
  },
  {
    path: "delegatecall",
    title: "Delegatecall",
  },
  {
    path: "function-selector",
    title: "Function Selector",
  },

  {
    path: "calling-contract",
    title: "Calling Other Contract",
  },
  {
    path: "new-contract",
    title: "Creating Contracts from a Contract",
  },
  // misc
  {
    path: "try-catch",
    title: "Try / Catch",
  },
  {
    path: "import",
    title: "Import",
  },
  {
    path: "library",
    title: "Library",
  },
  {
    path: "abi-encode",
    title: "ABI Encode",
  },
  {
    path: "abi-decode",
    title: "ABI Decode",
  },
  // crypto
  {
    path: "hashing",
    title: "Hashing with Keccak256",
  },
  {
    path: "signature",
    title: "Verifying Signature",
  },
  {
    path: "gas-golf",
    title: "Gas Optimizations",
  },
  {
    path: "bitwise",
    title: "Bitwise Operators",
  },
  {
    path: "unchecked-math",
    title: "Unchecked Math",
  },
]



export const ROUTES_BY_CATEGORY = [
  {
    title: "",
    routes: SOL_ROUTES.map((route) => ({
      ...route,
      path: `/${route.path}`,
    })),
  },
]

const ROUTES = ROUTES_BY_CATEGORY.map(({ routes }) => routes).flat()
const ROUTE_INDEX_BY_PATH = ROUTES.reduce((map, route: Route, i) => {
  // @ts-ignore
  map[route.path] = i
  return map
}, {})

export function getPrevNextPaths(path: string): {
  prev: Route | null
  next: Route | null
} {
  // @ts-ignore
  const index = ROUTE_INDEX_BY_PATH[path]
  if (index >= 0) {
    const prev = ROUTES[index - 1] || null
    const next = ROUTES[index + 1] || null
    return { prev, next }
  }
  return {
    prev: null,
    next: null,
  }
}

export default function HomePage() {
  const [query, setQuery] = useState("")
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchResults, setSearchResults] = useState<{ [key: string]: boolean } | null>(
    null
  )

  useEffect(() => {
    const q = searchParams.get("q")
    if (q != null && q.length > 0) {
      setQuery(q)
      _search(q, false)
    }
  }, [])

  function _search(query: string, save: boolean) {
    const q = query.trim()

    if (q.length == 0) {
      setSearchResults(null)
      if (save) {
        setSearchParams({ q: "" })
      }
      return
    }

    const words = unique(q.split(" "))
    const pages: { [key: string]: boolean } = {}

    for (const word of words) {
      const res = search(word)
      for (const page of res) {
        pages[page] = true
      }
    }

    setSearchResults(pages)
    if (save) {
      setSearchParams({ q })
    }
  }

  const _searchWithDelay = useDebounce((query: string) => _search(query, true), 500, [])

  function onChangeSearchQuery(query: string) {
    setQuery(query)
    _searchWithDelay(query)
  }

  function renderLinks() {
    if (searchResults) {
      if (Object.keys(searchResults).length == 0) {
        return <div>No results</div>
      }

      return (
        <ul className={styles.list}>
          {ROUTES.filter(({ path }) => searchResults[path]).map(({ path, title }) => (
            <li className={styles.listItem} key={path}>
              <a href={path}>{title}</a>
            </li>
          ))}
        </ul>
      )
    }

    return (
      <>
        {ROUTES_BY_CATEGORY.map(({ routes, title }, i) => (
          <div key={i}>
            {title && <h3 className={styles.category}>{title}</h3>}

            <ul className={styles.list}>
              {routes.map(({ path, title }) => (
                <li className={styles.listItem} key={path}>
                  <a href={path}>{title}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className={styles.category}>Translations</h3>
          {TRANSLATIONS.map(({ lang, url }) => (
            <li className={styles.listItem} key={url}>
              <a href={url} target="__blank">
                {lang}
              </a>
            </li>
          ))}
        </div>
      </>
    )
  }

  return (
    <div className={styles.component}>
      <SEO
        title="Solidity Rehberi | 0.8.17"
        description="Learn smart contract programming using Solidity"
      />
      <h1 className={styles.header}>
        <a href="/">Solidity Rehberi</a>
      </h1>
      <div className={styles.subHeader}>v 0.8.17</div>
      <div className={styles.main}>
        <p>
        Basit örneklerle <a href="https://solidity.readthedocs.io">Solidity</a>'ye giriş.
        </p>

        <div className={styles.youTube}>
          <img src={youTube} alt="logo" className={styles.youTubeLogo} />
          <a
            href="https://www.youtube.com/channel/UCJWh7F3AFyQ_x01VKzr9eyA"
            target="__blank"
          >
            Most code are explained here
          </a>
        </div>



        <div className={styles.search}>
          <SearchBar value={query} onChange={onChangeSearchQuery} />
        </div>

        {renderLinks()}
      </div>
    </div>
  )
}
