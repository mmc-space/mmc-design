/**
 * @param { Promise } promise
 * @param { Object } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
export async function to<T, U = Error>(
  promise: Promise<T>,
  errorExt?: object,
): Promise<[U, undefined] | [null, T]> {
  try {
    return [null, await promise] as [null, T]
  }
  catch (err) {
    if (errorExt)
      return [Object.assign({}, err, errorExt), undefined] as [U, undefined]

    return [err, undefined] as [U, undefined]
  }
}

export async function wait(time: number) {
  return new Promise(resolve => setTimeout(resolve, time))
}
