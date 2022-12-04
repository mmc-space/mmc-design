export type LogLevel = 'log' | 'error' | 'warn' | 'debug' | 'verbose'

export interface LoggerService {
  log(message: any, ...optionalParams: any[]): any

  error(message: any, ...optionalParams: any[]): any

  warn(message: any, ...optionalParams: any[]): any

  debug?(message: any, ...optionalParams: any[]): any

  verbose?(message: any, ...optionalParams: any[]): any
}

export class Logger implements LoggerService {
  log(message: any, ...optionalParams: any[]) {
    console.log(`[${this.getTimestamp()}]`, message, ...optionalParams)
  }

  error(message: any, ...optionalParams: any[]) {
    console.error(`[${this.getTimestamp()}]`, message, ...optionalParams)
  }

  warn(message: any, ...optionalParams: any[]) {
    console.warn(`[${this.getTimestamp()}]`, message, ...optionalParams)
  }

  public getTimestamp() {
    const localeStringOptions: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      day: '2-digit',
      month: '2-digit',
    }
    return new Date(Date.now()).toLocaleString(undefined, localeStringOptions)
  }
}

export const logger = new Logger()
