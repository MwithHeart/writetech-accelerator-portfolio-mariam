---
title: Create a Node Graph
description: Learn how to create your first Node Graph in PixiEditor.

---

<!-- import { List } from 'starlight-videos/components' 
import { Aside } from '@astrojs/starlight/components';
import { Steps } from '@astrojs/starlight/components';
import { Image } from 'astro:assets';
import ctxMenuImage from './assets/ctx-menu.png';
import { Quiz, QuizOption } from 'starlight-videos/components'
-->
# How to create a node graph
Welcome to Nodes. It's nice that you have decided to learn about Node Graphs in PixiEditor. Node is a fascinating and powerful system in animating. 

:::caution

Node Graph is a feature only present in PixiEditor 2.0 and later versions.

:::

## Creating your first node graph

We recommend you read the [Getting Started with Nodes](https://pixieditor.net/docs/usage/node-graph/getting-started-with-node-graph/) guide first, if you haven't done so. There, you will learn the basics of nodes and how they work.

Here's how to create your first Node Graph:



1. Go to `File -> New` to create a new document in PixiEditor.
2. Click the **Graph View** icon in the top center of the window to open the Node Graph. Or go to `View -> Open Tab -> Graph View`.
3. You will see a Node Graph with a single layer connected to the Output Node. This is the starting point of the Node Graph.

## How to add nodes

Now that the first Node Graph is ready, it's time to add some nodes to it.



1. Tab spacebar or right click on the empty area. This opens a context menu with a list of available nodes. 
2. Type the name of the node you want to add in the search bar.

// ![The menu showing the node names](/img/ctx-menu.png "The ctx menu showing names of the nodes") 


### How to add a shadow filter node
This aspect contains how to add a **Shadow Filter** node. You can find the shadow filter icon in the **Filters** category.

1. Click on **Shadow Filter** node to add it to the Node Graph.

2. Click on the red-ish circle <span style={{color: "#cc5c5c"}}>⬤</span>, next to the "Filter" label, on the right side of the **Shadow Filter** node.

3. Drag the circle to the "Filter" socket with the same color in the **Base Layer** node (on the **left** side of the node). 

4. With base Layer selected in the Layers panel, go back to your document and try drawing something. You should see a shadow effect applied to your drawing.



## Types of nodes

In version 2.0.0.97, there are several types of nodes available:

- **Color** - This includes nodes that allow you to manipulate colors in various ways. For example, nodes that separate colors into RGB, HSV, and HSL, 
- **Image** - It's a big category with various nodes, such as Create Image, Mask, Noise, and more, which allow you to work with images.
- **Structure** - "Structure" in PixiEditor refers to the elements in a layer tree. This includes Image Layers, Vector Layers and Folders.
- **Numbers** - Various numerical related nodes, most notably the Math node, which allows you to perform mathematical operations on numbers.
- **Effects** - Standalone effects such as Raster Outline or Custom Shader.
- **Workspace** - Nodes that allow for workspace customization; multiple outputs and export zones.
- **Shape** - Nodes that allow you to create and manipulate shapes
- **Matrix** - This includes matrix-related nodes. For example Transform, which allows you to manipulate the position, rotation, and scale of nodes.
- **Filters** - Nodes that contain various filters - for example, Blur, Shadow, and Color Correction.
- **Animation** - Nodes that allow you to create procedural animations.
- **Misc** - Miscellaneous nodes that don't fit into any other category, such as Document Info.

### Sockets

You may have noticed that the nodes have different colored circles and diamonds on their sides. These are called **sockets**. They're used to connect nodes together and transfer data between them.
To learn more about sockets, check out the [Sockets](https://pixieditor.net/docs/usage/node-graph/property-sockets/) guide.