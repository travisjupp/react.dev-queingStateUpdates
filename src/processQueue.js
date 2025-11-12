export function getFinalState(baseState, queue) {
  let finalState = baseState;

  // TODO: do something with the queue...
for (const [i, el] of queue.entries()) {
  if (typeof el === 'function') {
    console.group(queue.join(', ')); 
    console.log(`[${typeof el}] ${queue}
    current IDX: ${i} current val: ${queue[i]} state: ${finalState}
    adding 1`);
    finalState = el(finalState);
    console.log(`    finalState is now: ${finalState}`);
    console.groupEnd();
  } else {
    console.group(queue.join(', '));
    console.log(`[${typeof el}] ${queue}
    current IDX: ${i} current val: ${queue[i]} state: ${finalState}
    adding ${el}`);
    finalState = el;
    console.log(`    finalState is now: ${finalState}`);
    console.groupEnd();
  }
}
  
  return finalState;
}
