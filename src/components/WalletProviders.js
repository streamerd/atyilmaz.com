import { useConnect } from 'wagmi'

export const WalletProviders = () => {
  const [{ data, error }, connect] = useConnect()

  return (
    <div>
      {data.connectors.map((x) => (
        <button disabled={!x.ready} key={x.id} onClick={() => connect(x)}>
          {x.name}
          {!x.ready && ' (unsupported)'}
        </button>
      ))}

      {error && <div>{error?.message ?? 'Failed to connect'}</div>}
    </div>
  )
}