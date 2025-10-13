---
title: Getting started
description: Learn the basics of animation in PixiEditor and explore two main approaches to animating your projects
---


# Getting started with animations
Welcome to PixiEditor. This guide introduces key animation concepts and walks you through the two main ways you can animate your projects:   
- Frame-by-Frame
- Procedural animation.

---

## Understanding the timeline

The timeline is the most important component of animation in PixiEditor. It controls every aspect of your animation flow, including frames, layers, and playback speed.

You can open the timeline in either of these ways:
- Click the **Timeline** icon on the toolbar at the top of the screen.  
    ![The timeline icon](./img/timeline-icon.png "The timeline icon")
- Go to **View**, choose **Open Tab** and then choose **Timeline**.

### Timeline interface overview
The following image shows the interface of the timeline.

![The timeline interface](./img/annotated-timeline.png "The timeline interface")

The timeline contains several components:

1. **Frames per second (FPS)**  
    Controls how fast your animation plays. Higher values produce smoother result but require more frames.
    - 60 FPS- Smooth animation (common in games)  
    - 24 FPS - Industry standard for films 

2. **Settings**  
    Opens a menu with timeline related-settings.

3. **Action buttons**  
    - **Plus icon** - Adds an empty cel to the selected layer
    - **Duplicate icon**- Duplicates the current cel
    - **Onion icon** - Toggles onion skinning on/off
    - **Trash icon** - Deletes selected cels

4. **Layers panel**  
    From left to right:
    - **Eye icon** - Show/hide the layer
    - **Image thumbnail** - Displays the layer's base image
    - **Layer name** - Name of the layer (e.g., *Slime*)  
    - **Collapse button** - Minimize the layer to save space

5. **Playback controls**  
    -  ⏮ **Step start**- - Jump to the beginning of the cel  
    - ◀ **Step Back** - Move back one frame  
    - ▶ **Play** - Play the animation  
    - ▶ **Step Forward** - Move forward one frame  
    - ⏭ **Step End** - Jump to the end of the cel  
    - **00:00.08 / 00:01.75** - Current time and total time in `mm:ss.ff` format. `mm` for minutes, `ss` for seconds, `ff` for hundredths of a second  

6. **Frame bar**   
    This is the top slider that lets you:
   - Drag to change the active frame  
   - Zoom in/out by scrolling over it
   - View frame numbers and ticks

7. **Cel row**  
    Displays all cels in a layer. Each cel shows a thumbnail preview and duration.  
   - Drag the edges to change the cel’s length  
   - Drag the cel itself to move it along the timeline  

---

## Animating projects
PixiEditor supports two main animation methods:

### 1. Frame-by-frame animation

The traditional method of animation. You draw each frame manually to create smooth transitions.

> To learn more, check [Frame-by-Frame Animations](https://pixieditor.net/docs/usage/animating/frame-by-frame/). 



### 2. Procedural animations
This method uses operations and parameters to create movement without manually drawing frames. 
Think of it as giving a set of instructions. 
For example: *Move to the right by 10 pixels over 1 second.*  
With this method, you can animate almost any property within the Node graph.  

> To learn more, check: 
> - [Procedural Animation](https://pixieditor.net/docs/usage/animating/procedural/).  
> - [Node Graph](https://pixieditor.net/docs/usage/node-graph/getting-started-with-node-graph)


:::tip  
You can combine both methods for more dynamic results. For example, use frame-by-frame for character movement and procedural animation for background effects.   
:::