export interface UploadProps {
  isDragging: boolean
}

export type RejectedReason = 'file-size' | 'invalid-mime-type'

export interface RejectedFile {
  reason: RejectedReason
  file: File
}

export interface FilesResult {
  accepted: File[]
  rejected: RejectedFile[]
}
