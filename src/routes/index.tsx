import { createFileRoute } from "@tanstack/react-router";
import { Button, Theme } from "frosted-ui";
export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <Theme>
      <Button size="3" variant="solid">
        Click Me!
      </Button>
    </Theme>
  );
}
