import { Center } from "@mantine/core";
import { Component, PropsWithChildren, ReactNode } from "react";
import { Glitzt } from "./Glitzt";

interface State {
  error: Error;
}

export class ErrorBoundary extends Component<PropsWithChildren, State> {
  static getDerivedStateFromError(error: Error): State {
    return { error: error };
  }

  render(): ReactNode {
    if (this.state?.error) {
      return (
        <Center mx="auto">
          <Glitzt error={this.state.error} />
        </Center>
      );
    }

    return this.props.children;
  }
}
