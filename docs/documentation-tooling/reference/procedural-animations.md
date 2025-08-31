---
title: Procedural Animations
---

<!-- import Node from '../../../../components/Node.astro'; 
import {Image} from 'astro:assets';
import simpleGraphImg from 'assets/opacitygraph.png';
import sophGraphImg from 'assets/bopGraph.png';
import resVideo from 'assets/opacity.webm';
import bopVideo from 'assets/bop.webm';-->

If you're here, it means you want to make some cool animations and that's nice. This is a guide on procedural animations and why they matter.


:::tip
We recommend checking out [basics of animations](https://pixieditor.net/docs/usage/animating/getting-started/) and [getting started with nodes](https://pixieditor.net/docs/usage/node-graph/getting-started-with-node-graph/) first, to make it easier to understand this guide. With that, it's time to dive in. 
:::

## Introduction to procedural animations

A Procedural Animation is an animation that's generated based on logic and input parameters. It's important to not confuse this with generative AI (such as ChatGPT), as those make use of prompts instead. 


## Some important animation nodes 

Here are some important animation nodes which make animating easier:


<!-- <br/> 

<a style={{textDecoration: "none"}} href="/docs/usage/node-graph/nodes/animation/time"><Node data={{
    name: 'Time',
  category: "Animation",
  icon: "icon-clock",
  isPair: false,
  hasPreview: false,
  inputs: null,
  outputs: [
        {
        name: "Active Frame",
        type: "Integer",
        description: 'The current active frame in the timeline.',
        isContextful: false,
        default: '0'
        },
   { 
    name: "Normalized Time",
    type: "Double",
    description: 'The normalized time value, ranging from 0.0 to 1.0, representing the current position in the timeline relative to the total duration.',
    isContextful: false,
    default: '0.0'}],
  description: 'Provides the current time in the animation timeline, including the active frame and normalized time.'
}}/></a>

<br/>

<a style={{textDecoration: "none"}} href="/docs/usage/node-graph/nodes/animation/easing"><Node data={{
  name: "Easing ",
  category: "Animation",
  icon: "icon-spline-chart",
  isPair: false,
  hasPreview: false,
  inputs: [
    {
      name: "Value",
      type: "Double",
      description: "The input value to be eased. This value should be between 0 and 1.",
      isContextful: true,
      default: "0.0"
    },
    {
      name: "Easing Type",
      type: "EasingType (Enum)",
      hideSocket: true,
      typeLink: "/docs/usage/node-graph/nodes/animation/easing#easing-types",
      description: "The type of easing function to apply to the input value. This determines how the value transitions over time.",
      isContextful: false,
      default: "Linear"
    }
  ],
  outputs: [
    {
      name: "Output",
      type: "Double",
      description: "The eased output value, which is the result of applying the selected easing function to the input value.",
      isContextful: true,
      default: "0.0"
    }
  ],
  description: "Applies an easing function to a value, transforming it based on the selected easing type. This is useful for creating smooth transitions in animations."
}}/></a>

<br/>
-->

- **Time node** - This is essential to get the active frame or normal time of the animation.
- **Easing** - Easing provides various built-in smoothing operations. Read more about [easing here](https://pixieditor.net/docs/usage/node-graph/nodes/animation/easing/).   

While these nodes are important, it's important to note that other nodes in the `Animation` category are also important. 

## Create a basic procedural animation

<!-- <Image src={simpleGraphImg} alt="Simple graph that connects Normalized Time of Time Node to Layer's Opacity input"/> 

Will produce 

<video src={resVideo} muted autoplay loop/>

<br/>

Neat, isn't it? 
-->



1. Time Node exposes the [Normalized Time](https://pixieditor.net/docs/usage/node-graph/nodes/animation/time/), which is a value between 0 and 1.  
Where 0 is start of the animation and 1 is the end of it. For a 2 second animation, the normalized time at 1 second is `0.5`.

// ![An opacity graph](/img/opacity-graph.png "An opacity graph")

2. To connect Normalized Time to the Image's Opacity, at the beginning of the animation, the image is transparent (`0` opacity) and fully opaque at the end (`1` opacity).



## A more complex procedural animation 

<!-- <Image src={sophGraphImg} alt="Simple graph that connects Normalized Time of Time Node to Layer's Opacity input"/> -->
// ![A complex procedural graph](/img/bopGraph.png "A complex procedural graph")



The core concepts in the preceding graph are:

1. Get the time of the animation: 0 - 1 range.

2. Create a smoothing effect --- elastic, in this example --- by plugging the time to Easing node. Read more about [easing here](https://pixieditor.net/docs/usage/node-graph/nodes/animation/easing/).

3. Create a "rotation + scale" effect by combining two nodes with **"Matrix Input"** and **"Matrix Output."**

    - Scale can be directly connected with easing, because it should go from invisible (0 scale) to full size (1 scale).

    - Rotation must be in 0 - 360 range to make image rotate in a full circle. This is done by multiplying eased time by 360.

4. Plug the source image to the Scale Node. In this case, the Scale Node not only scales but also rotates because we plugged in the result of rotation to it. 
You can combine multiple effects into one with yellow [Matrix](https://pixieditor.net/docs/usage/node-graph/property-sockets/) inputs.

The effect of the preceding steps is an enlarged smooth animation.

<!-- <video src={bopVideo} muted autoplay loop/> -->

The possibilities are truly endless. Take your time, play around with nodes and have fun. That's the best way to learn.