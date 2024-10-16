/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from "@tanstack/react-router";

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as IndexImport } from "./routes/index";
import { Route as BooksIndexImport } from "./routes/books/index";

// Create Virtual Routes

const AboutIndexLazyImport = createFileRoute("/about/")();

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: "/",
  getParentRoute: () => rootRoute,
} as any);

const AboutIndexLazyRoute = AboutIndexLazyImport.update({
  path: "/about/",
  getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/about/index.lazy").then((d) => d.Route));

const BooksIndexRoute = BooksIndexImport.update({
  path: "/books/",
  getParentRoute: () => rootRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      id: "/";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    "/books/": {
      id: "/books/";
      path: "/books";
      fullPath: "/books";
      preLoaderRoute: typeof BooksIndexImport;
      parentRoute: typeof rootRoute;
    };
    "/about/": {
      id: "/about/";
      path: "/about";
      fullPath: "/about";
      preLoaderRoute: typeof AboutIndexLazyImport;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  "/": typeof IndexRoute;
  "/books": typeof BooksIndexRoute;
  "/about": typeof AboutIndexLazyRoute;
}

export interface FileRoutesByTo {
  "/": typeof IndexRoute;
  "/books": typeof BooksIndexRoute;
  "/about": typeof AboutIndexLazyRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  "/": typeof IndexRoute;
  "/books/": typeof BooksIndexRoute;
  "/about/": typeof AboutIndexLazyRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths: "/" | "/books" | "/about";
  fileRoutesByTo: FileRoutesByTo;
  to: "/" | "/books" | "/about";
  id: "__root__" | "/" | "/books/" | "/about/";
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute;
  BooksIndexRoute: typeof BooksIndexRoute;
  AboutIndexLazyRoute: typeof AboutIndexLazyRoute;
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  BooksIndexRoute: BooksIndexRoute,
  AboutIndexLazyRoute: AboutIndexLazyRoute,
};

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/books/",
        "/about/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/books/": {
      "filePath": "books/index.tsx"
    },
    "/about/": {
      "filePath": "about/index.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
