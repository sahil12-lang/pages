import Link from 'next/link'
import React, { PureComponent } from 'react'

export class Index extends PureComponent {
  render() {
    return (
      <div>
      <Link href={"./user"}>
        <h1>Nav to somewhere</h1>
        </Link>
      </div>
    )
  }
};

export default Index
