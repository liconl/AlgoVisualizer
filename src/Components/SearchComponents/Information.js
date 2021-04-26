import React, { useState } from "react";
import "./Information.css";

function Information({ props }) {
  return (
    <div className="information">
      <div className="bfs">
        <strong>Dijkstra's Shortest Path Algorithm</strong> guarantees the
        shortest path from a start node (called source node) to a goal node. The
        algorithm keeps track of the currently known shortest distance from each
        node to the source node and it updates these values if it finds a
        shorter path. Once the algorithm has found the shortest path between the
        source node and another node, that node is marked as "visited" and added
        to the path. The process continues until all the nodes in the graph have
        been added to the path.
      </div>
      <div>
        <strong>A*</strong> is a graph traversal and informed searching
        algorithm that uses Heuristics to guarantees the shortest path from a
        start node to a goal node in a (un)weighted graph. A* maintains a tree
        of paths from the start node, and the shortest path is determined by the
        path that minimizes the f(n) = g(n) + h(n) where n is the next node,
        g(n) is the cost of the path from the start node to n, and h(n) is a
        heuristic function that estimates the cost of the path.
      </div>

      <div className="dfs">
        <strong>Depth-First Search</strong> is an algorithm for traversing or
        searching tree or graph data structures. The algorithm starts at the
        root node and explores as far as possible along each branch before
        backtracking. A DFS can be initialized with a stack were the starting
        node and its adjacent nodes are pushed into the stack. The purpose of
        The stack is to keep track of the visited nodes. If the next node does
        not have any adjacent nodes, then that node is popped from the stack. If
        the node's adjacent nodes are visited then it is also popped from the
        stack. This process is repeated until the stack is empty.
      </div>
      <div>
        <strong>Breadth-First Search</strong> is an algorithm for traversing or
        searching tree or graph data structures. It starts at the tree root and
        explores all of the neighbor nodes at the present depth prior to moving
        on to the nodes at the next depth level. Compared to Depth-First Search,
        where it explores the node branch as far as possible before being forced
        to backtrack and expand other nodes. BFS is generally implemented with a
        queue to keep track of visited nodes.
      </div>
      <div className="ending">
        <strong>Greedy Best-First Search</strong> is similar to A* however, it's
        referred as "greedy" because it does not use <i>past knowledge</i> in
        its evaluation. Usually, visits fewer nodes than BFS and Dijkstra and it
        does not guarantee a shortest path. It is also vulnerable to local
        maxima traps.
      </div>
    </div>
  );
}

export default Information;
