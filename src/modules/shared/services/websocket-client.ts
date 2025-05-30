/* eslint-disable @typescript-eslint/no-explicit-any */
import io, { type Socket } from 'socket.io-client'

import { getAccessToken } from '../../auth/helpers/storage'

export class Wss {
  private static instance: Wss
  private events: Record<string, (...args: any[]) => void> = {}
  private socket: Socket

  private constructor() {
    this.socket = io('', {
      auth: {
        token: getAccessToken(),
      },
      autoConnect: false,
      transports: ['websocket'],
    })
  }

  public static getInstance(): Wss {
    Wss.instance ||= new Wss()

    return Wss.instance
  }

  public connect(): void {
    this.socket.connect()

    this.on('connect', () => {
      console.info('🚀 Ws connected')
    })

    this.on('disconnect', () => {
      console.info('🚀 Ws disconnected')
    })

    this.on('error', (error: Error) => {
      console.error('🚀 Ws error', error)
    })
  }

  public disconnect(): void {
    if (this.socket) {
      this.socket.disconnect()
    }
  }

  public emit(event: string, ...args: unknown[]): void {
    this.socket.emit(event, ...args)
  }

  public off(
    event: string,
    callback: (...args: any[]) => void,
    opts: { id?: string } = {},
  ) {
    if (opts.id && this.events[opts.id]) {
      this.socket.off(event, this.events[opts.id])
      delete this.events[opts.id]
    }

    if (!opts.id) this.socket.off(event, callback)
  }

  public on(
    event: string,
    callback: (...args: any[]) => void,
    opts: { id?: string } = {},
  ) {
    if (opts.id && !this.events[opts.id]) {
      this.events[opts.id] = callback
      this.socket.on(event, callback)
    }

    if (!opts.id) {
      this.socket.on(event, callback)
    }
  }

  public reconnect(): void {
    if (this.socket) {
      this.socket.disconnect()
    }
    this.connect()
  }
}
