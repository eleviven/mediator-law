import React, { PureComponent } from "react";
import cn from "classnames";

export default class Card extends PureComponent {
  render() {
    const { children, className, ...props } = this.props;
    return (
      <div className={cn("card", className)} {...props}>
        {children}
      </div>
    );
  }
}
