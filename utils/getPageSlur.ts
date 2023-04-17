const getPageSlur = (pageRoute: string | undefined) => {
  switch (true) {
    case !pageRoute:
      return ""
    case pageRoute?.startsWith("/"):
      return pageRoute
    default:
      return `/${pageRoute}`
  }
}

export default getPageSlur
