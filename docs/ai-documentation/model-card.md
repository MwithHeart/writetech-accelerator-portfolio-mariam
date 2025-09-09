---
title: Qwen3 model card
---

# Qwen3 model card

## Model description
Qwen3, also known as Qwen3-2504, is the latest addition to the Qwen family of large language models developed by Alibaba Group. It is capable of natural language understanding, text generation, vision understanding, and much more. The model Support of 100+ languages and dialects and includes dense and Mixture of Experts (MoE) model types.

- **Developed by:** Qwen Team, Alibaba Group
- **Model type:** Transformer-based language model
- **License:** Apache 2.0
- **Release Date:** April 29, 2025

## Model variants
Qwen3 has two different types of variants:  

- Architecture variants → Dense vs. Mixture-of-Experts (MoE).  
- Problem solving variants → Instruct vs. Thinking. 

### Model variants: dense and Mixture-of-Experts (MoE) models
Qwen3 is available in both Dense and Mixture-of-Experts (MoE) architectures.

#### Dense models
- Qwen3-32B 32 billion parameters)
- Qwen3-14B (14 billion parameters)
- Qwen3-8B (8 billion parameters)
- Qwen3-4B (4 billion parameters)
- Qwen3-1.7B (1.7 billion parameters)
- Qwen3-0.6B (600 million parameters)

#### Mixture-of-Experts (MoE) models
- **Qwen3-235B-A22B:** 235B total parameters, 22B activated. This means the model has 235 billion total parameters, but only about 22 billion are active when processing any given input
- **Qwen3-30B-A3B:** 30B total parameters, 3B activated. This has 30 billion total parameters, but only about 3 billion are active when processing any given input


### Model variants: Qwen3-Instruct-2507 and Qwen3-Thinking-2507
- **Qwen3-Instruct-2507:** Demonstrates significant improvements in instruction following, logical reasoning, text comprehension, mathematics, science, coding, and tool usage. Produces more helpful and contextually aligned responses for subjective and open-ended tasks.
- **Qwen3-Thinking-2507:** Demonstrates improved performance on reasoning-intensive tasks such as logical reasoning, mathematics, science, coding, and academic benchmarks.


## Intended Use

### Primary use cases
- Natural language understanding and generation
- Vision understanding
- Multilingual applications: Supports 119 languages and dialects
- Chatbots and conversational AI
- Content generation and summarization
- Question answering systems
- Coding capabilities

### Out-of-scope use
- Any application that violates ethical AI principles
- Generating harmful, biased, or misleading content
- Applications that require human-level understanding or consciousness
- Critical decision-making without human oversight

## Training data

Diverse dataset are used to train Qwen3 including:
- Web pages and documents
- Books and academic papers
- Code repositories
- Multilingual content

**Training Data Size:** Qwen3 was pretrained with approximately 36 trillion tokens

### Training pipeline
1. long chain-of-thought (CoT) cold start
1. Reasoning-based reinforcement learning (RL)
1. Thinking mode fusion
1. General RL

## Evaluation results

### Benchmarks
Qwen3 models achieve competitive results in various benchmarks, including:
- Code generation and understanding
- Mathematical reasoning
- General language understanding
- Multilingual capabilities

### Performance
- **Qwen3-235B-A22B:** Competes with other top-tier models like DeepSeek-R1, o3-mini, Grok-3, and Gemini-2.5-Pro
- **Qwen3-30B-A3B:** Outperforms QwQ-32B with 10x fewer activated parameters
- **Qwen3-4B:** Rivals the performance of Qwen2.5-72B-Instruct


## Technical specifications

### Model architecture
- **Architecture:** Transformer-based
- **Context Length:** 
  - Smaller models (0.6B, 1.7B, 4B): 32K tokens
  - Larger dense models (8B, 14B, 32B): 128K tokens
  - MoE models (30B-A3B and 235B-A22B): Up to 128K

- **Vocabulary Size:** Not publicly disclosed at this time.

- **Hybrid Thinking Modes:**
  - Thinking Mode: For complex problems requiring step-by-step reasoning
  - Non-Thinking Mode: For quick, general-purpose responses


### Compute infrastructure
**Training Infrastructure**
- **Hardware:** *Not publicly disclosed*
- **Training Time:** *Not provided*

**Inference Infrastructure**
- Dense Model Inference

  - **0.6B–4B:** Runnable on consumer GPUs (e.g., RTX 3090/4090), especially with quantization (e.g., FP4 → INT8) 
  - **8B–14B–32B:** Requires professional GPUs (e.g., H100)  

- MoE Model Inference

  - **Qwen3-30B-A3B:** Requires at least one H100 GPU for active subset (~3B).

  - **Qwen3-235B-A22B:** Requires multi-GPU systems (e.g., 4 x H100) 


## Usage

### Install with Hugging Face transformers
- **Requirement:** Python 3.10+ and PyTorch 2.6+.  

- To install, run the command:

    ```pip install transformers>=4.51.0```



### Example usage (Qwen3-8B)

```python
from transformers import AutoModelForCausalLM, AutoTokenizer

model_name = "Qwen/Qwen3-8B"

tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(
    model_name,
    torch_dtype="auto",
    device_map="auto"
)

# Example prompt
prompt = "Explain what a large language model is."
messages = [{"role": "user", "content": prompt}]

text = tokenizer.apply_chat_template(
    messages,
    tokenize=False,
    add_generation_prompt=True,
    enable_thinking=True  # Generates a `<think>...</think>` block followed by answer
)

input_tensors = tokenizer([text], return_tensors="pt").to(model.device)

outputs = model.generate(**input_tensors, max_new_tokens=256)
print(tokenizer.decode(outputs[0], skip_special_tokens=True))
```

### Switch thinking modes
- **Thinking mode (default):** The model engages its thinking mode by either of these methods:
  - Set ```enable_thinking=True``` 
  - Leave the default value in ```tokenizer.apply_chat_template```

- **Non-Thinking Mode:** Disables reasoning blocks for faster responses.
  - Set ```enable_thinking=False```



## Ethical considerations

### Limitations
- May produce incorrect or biased information
- Performance may vary across languages and domains
- May not handle ambiguous queries well

### Recommendations
- Use with human oversight for critical tasks
- Implement content filtering for production use
- Monitor for biased or harmful outputs
- Consider the environmental costs of running large models

## Citation



## How to Cite

Cite through the Qwen3 Technical Report published on arXiv:
  ```
  @misc{yang2025qwen3,  
  title={Qwen3: Next-Generation  Open-Weight Multilingual and Reasoning Large Language Models},  
  author={Yang, An and ... Zheng, Chujie},
  year={2025},  
  note={arXiv preprint arXiv:2505.09388},
  url={https://arxiv.org/abs/2505.09388}
  }

  ```

:::Note  
An official citation format is not available in the project documentation; this is based on the arXiv technical report.  
:::


## Contact

For questions and feedback, contact the Qwen team through the official channels: GitHub repository, discussion forums, or model release pages.
