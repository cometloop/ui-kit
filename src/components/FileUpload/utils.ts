export interface FilesResult {
  accepted: File[]
  rejected: File[]
}

export const getFilesResult = (files: FileList, regex: RegExp): FilesResult => {
  const result: FilesResult = {
    accepted: [],
    rejected: []
  }

  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    if (regex.test(file.type)) {
      result.accepted.push(file)
    } else {
      result.rejected.push(file)
    }
  }
  return result
}
