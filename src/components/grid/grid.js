import React, { PureComponent } from "react";
import cn from "classnames";

export default class Grid extends PureComponent {
  static Container;

  render() {
    const { gap, className, children, ...props } = this.props;
    return (
      <div className={cn("grid", className)} {...props}>
        {children}
      </div>
    );
  }
}
