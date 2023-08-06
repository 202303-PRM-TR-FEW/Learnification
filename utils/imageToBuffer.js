const convertImageToBuffer = async (image) => {
    const stream = image.stream()
    const chunks = []
    for await (const chunk of stream) {
        chunks.push(chunk)
    }
    const buffer = Buffer.from(chunks.reduce((prev, curr) => [...prev, ...curr]))
    return buffer
}

export default convertImageToBuffer;