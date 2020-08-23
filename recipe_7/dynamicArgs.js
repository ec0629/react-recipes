const listItemsOption1 = list.map((item, i) => {
  return <List key={item.id} handleClick={() => this.handleClick(i)} />
});

const listItemsOption2 = list.map((item, i) => {
  return <List key={item.id} handleClick={this.handleClick.bind(this, i)} />
  // https://reactjs.org/docs/handling-events.html
  // according to the above documentation the two options are equivalent, but also notes
  /* 
   * "However, if this callback is passed as a prop to lower components, those components 
   * might do an extra re-rendering. We generally recommend binding in the constructor or 
   * using the class fields syntax, to avoid this sort of performance problem.
   */
});
