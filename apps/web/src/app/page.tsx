"use client";

import React, { useCallback } from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Panel,
  addEdge,
  BackgroundVariant,
} from "@xyflow/react";

import CustomNode from "../components/CustomNode";
import ButtonEdge from "../components/ButtonEdge";

import "@xyflow/react/dist/style.css";
import { initEdges, initNodes } from "../utils/temp";

const edgeTypes = {
  button: ButtonEdge,
};
const nodeTypes = {
  custom: CustomNode,
};

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        // edgeTypes={edgeTypes}
        fitView
        colorMode="system"
        className=""
        // attributionPosition="top-right"
      >
        <Panel position="top-left">top-left</Panel>
        <Controls />
        <MiniMap nodeStrokeWidth={3} zoomable pannable />
        <Background gap={12} size={1} variant={BackgroundVariant.Dots} />
      </ReactFlow>
    </div>
  );
}
