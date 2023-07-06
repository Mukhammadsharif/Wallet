export const breadcrumb = (
  message: string,
  metadata?: { [key: string]: any },
  _type: 'log' | 'navigation' = 'log'
) => {
  if (__DEV__)
    return console.log('BREADCRUMB: ', message, metadata ? metadata : '')
  //Bugsnag.leaveBreadcrumb(message, metadata, type)
}
