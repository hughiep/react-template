import { useConnect } from 'wagmi'
import { injected, walletConnect } from 'wagmi/connectors'
import { Link } from 'react-router'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/components/ui/dialog'
import { Button } from '@/shared/components/ui/button'

export default function ConnectWalletPage() {
  const { connect } = useConnect()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <Button variant="ghost">Connect Wallet</Button>
          <Link to="/login">Login</Link>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Select Wallet</DialogTitle>
          <DialogDescription asChild>
            <ul>
              <li>
                <Button
                  variant="ghost"
                  onClick={() =>
                    connect({ connector: injected({ target: 'metaMask' }) })
                  }
                >
                  MetaMask
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  onClick={() =>
                    connect({
                      connector: walletConnect({
                        projectId: import.meta.env.VITE_APP_WC_PROJECT_ID,
                        showQrModal: true,
                      }),
                    })
                  }
                >
                  Wallet Connect
                </Button>
              </li>
            </ul>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
