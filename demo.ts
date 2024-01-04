const db = await Deno.openKv()

// const result = await db.set(['counter'], 0)

// const { value } = await db.get<number>(['counter'])

// const newCounter = value == null ? 0 : value + 1

await db.set(['visits'], new Deno.KvU64(0n))

await db
  .atomic()
  .sum(['visits'], 1n)
  .commit()

const result = await db.get<Deno.KvU64>(['visits'])

console.log(result)
