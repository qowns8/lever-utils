import { downloadFile } from './index'

export default (data: any, filename: string): void => {
  const url = window.URL.createObjectURL(new Blob([data]))
  downloadFile(url, filename)
}
