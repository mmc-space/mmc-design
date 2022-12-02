import OSS from 'ali-oss'

export class ALI_OSS {
  private client: OSS

  constructor(options: OSS.Options) {
    this.client = new OSS(options)
  }

  public async uploadFile(name: string, file: Buffer): Promise<OSS.PutObjectResult> {
    return await this.client.put(name, file)
  }

  public async deleteFile(name: string): Promise<OSS.NormalSuccessResponse> {
    return await this.client.delete(name)
  }

  public async getFile(name: string): Promise<OSS.GetObjectResult> {
    return await this.client.get(name)
  }
}
