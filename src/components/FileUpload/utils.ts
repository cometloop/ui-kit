import { FilesResult } from '@lib/components/FileUpload/interfaces'

export const getFilesResult = (
  files: FileList,
  regex: RegExp,
  maxFileSizeMegabytes?: number
): FilesResult => {
  const result: FilesResult = {
    accepted: [],
    rejected: []
  }

  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    if (!isValidMimeType(file.type, regex)) {
      result.rejected.push({
        reason: 'invalid-mime-type',
        file
      })
      continue
    }
    if (!fileSizeValid(file.size, maxFileSizeMegabytes)) {
      result.rejected.push({
        reason: 'file-size',
        file
      })
      continue
    }
    result.accepted.push(file)
  }
  return result
}

const isValidMimeType = (mimeType: string, expression: RegExp): boolean => {
  return expression.test(mimeType)
}

const fileSizeValid = (
  size: number,
  maxFileSizeMegabytes?: number
): boolean => {
  if (maxFileSizeMegabytes === undefined) return true
  return size <= maxFileSizeMegabytes * 1048576
}
