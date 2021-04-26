import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "90%",
    marginTop: 20,
    paddingBottom: 20,
    marginLeft: 10,
    textAlign: "left",
    outline: "red 2px soild",
  },
}));

function Information() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <p>
        <strong>Bubble Sort </strong>
        is the simpliest sorting alogrithm that swaps two adjecent elements if
        they are in the wrong order. Since number of swaps is equal to the
        number of passes, the algorithm is considered inefficient.
      </p>
      <p>
        <strong>Insertion Sort </strong>
        is an algorithm that inserts elements into a sorted array. Usually, the
        array is split into a virtual sorted section where the elements are
        picked and inserted correctly in the virtual part until all the elements
        have been sorted. Advantages to Insertion Sort is that it is very easly
        to implement, but the major disadvantage is being inefficient in large
        lists.
      </p>
      <p>
        <strong>Selection Sort </strong>
        is an algorithm that creates a two subarrays: one that will eventually
        consist of the sorted arrary and the other that contains the current
        state of the unsorted array. In each iteration, unsorted array will have
        the lowest value element inserted in the subarray, until all elements
        are in the subarray. Inseration Sort and Selection Dort are very similar
        since they have an inner loop and out looper, however, in Selection Sort
        the inner loop is over the unsorted elements while Insertion Sort has
        the inner loop ober the sorted elements. Generally, Insertion Sort is
        more efficenet than Selection Sort.
      </p>
      <p>
        <strong>QuickSort Sort </strong>
        is a divide and conquer recursive algorithm that picks an element as
        pivot and partitions the given array around the picked pivot(first
        element, median, etc). The pivot point and partition are implemented in
        many ways, sometimes at the leftmost, rightmost, or the center. Once the
        first pivot element is sorted, each partion is assigned a pivot and the
        partion is partion once again. This process is repeated until every
        element is sorted. The application has a Left and Right version where
        the first pivot point is on the left and right, respectively.
      </p>

      <p>
        <strong>Merge Sort </strong>
        is divide and conquer recursive algorithm that divides the input array
        into n sublists, until each sublist contains only one element. The lists
        are then sorted into temperory arrays, and then continuously merged
        until the entire array is merged.
      </p>
    </div>
  );
}

export default Information;
