# Qwen3 model card

## Model description
Qwen3, also known as Qwen3-2504, is the latest addition to the Qwen family of large language models developed by Alibaba Group. It is capable of natural language understanding, text generation, vision understanding, and much more. The model Support of 100+ languages and dialects and includes dense and Mixture of Experts (MoE) model types.

- **Developed by:** Qwen Team, Alibaba Group
- **Model type:** Transformer-based language model
- **License:** Apache 2.0
- **Release Date:** April 29, 2025

## Model variants
Qwen-3 has two different types of variants:  

- Architecture variants → Dense vs. Mixture-of-Experts (MoE).  
- Response style variants → Instruct vs. Thinking. 

### Model variants: dense and Mixture-of-Experts (MoE) models
Qwen-3 is available in both Dense and Mixture-of-Experts (MoE) architectures.

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
- Code generation and understanding
- Multilingual applications (supports 119 languages and dialects)
- Chatbots and conversational AI
- Content generation and summarization
- Question answering systems

### Out-of-scope use
- Any application that violates ethical AI principles
- Generating harmful, biased, or misleading content
- Applications that require human-level understanding or consciousness
- Critical decision-making without human oversight

## Training data

Qwen3 was trained on a diverse dataset including:
- Web pages and documents
- Books and academic papers
- Code repositories
- Multilingual content

**Training Data Size:** [Exact token count not specified in available documentation]

## Evaluation results

### Benchmarks
Qwen3 models achieve competitive results in various benchmarks, including:
- Code generation and understanding
- Mathematical reasoning
- General language understanding
- Multilingual capabilities

### Performance
- **Qwen3-235B-A22B** competes with other top-tier models like DeepSeek-R1, Grok-3, and Gemini-2.5-Pro
- **Qwen3-30B-A3B** outperforms QwQ-32B with 10x fewer activated parameters
- **Qwen3-4B** rivals the performance of Qwen2.5-72B-Instruct

## Technical specifications

### Model architecture
- **Architecture:** Transformer-based
- **Context Length:** [Insert context length]
- **Vocabulary Size:** [Insert vocabulary size]
- **Hybrid Thinking Modes:**
  - Thinking Mode: For complex problems requiring step-by-step reasoning
  - Non-Thinking Mode: For quick, direct responses

### Compute infrastructure
- **Hardware:** [Specify if known]
- **Training Time:** [Specify if known]
- **Training Infrastructure:** [Specify if known]

## Usage

### Installation
```python
# Using Transformers
from transformers import AutoModelForCausalLM, AutoTokenizer

model_name = "Qwen/Qwen3-7B"  # Example model name
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name)
```

### Example usage
```python
def generate_response(prompt, model, tokenizer, max_length=100):
    inputs = tokenizer(prompt, return_tensors="pt")
    outputs = model.generate(
        inputs.input_ids,
        max_length=max_length,
        num_return_sequences=1,
        temperature=0.7,
        do_sample=True
    )
    return tokenizer.decode(outputs[0], skip_special_tokens=True)

# Example prompt
prompt = "Explain the concept of quantum computing in simple terms."
response = generate_response(prompt, model, tokenizer)
print(response)
```

## Ethical considerations

### Limitations
- May generate incorrect or biased information
- Performance may vary across different languages and domains
- May not handle ambiguous queries well

### Recommendations
- Use with human oversight for critical applications
- Implement content filtering for production use
- Monitor for biased or harmful outputs
- Consider the environmental impact of running large models

## Citation

[To be added: Proper citation for Qwen3]

## How to Cite

```
[To be added: Citation format]
```

## Contact

For questions and feedback, please contact the Qwen team through the official channels.
