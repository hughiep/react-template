import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/modules/common/componenets/ui/dialog";
import { Button } from "~/modules/common/componenets/ui/button";
import { useConnect } from "wagmi";
import { injected, walletConnect } from "wagmi/connectors";

export default function Wallet() {
  const { connect } = useConnect();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">Connect Wallet</Button>
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
                    connect({ connector: injected({ target: "metaMask" }) })
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
  );
}
