"use client"

import { BookOpen, Download, Share, Bookmark, ZoomIn, ZoomOut } from "lucide-react"

export function DocumentViewer() {
  return (
    <div className="h-full flex flex-col bg-card grainy">
      {/* Document Header */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-border">
        <div className="flex items-center gap-3">
          <BookOpen className="h-4 w-4 text-muted-foreground" />
          <h1 className="text-sm font-medium text-grain">Neural Networks.pdf</h1>
        </div>
        <div className="flex items-center gap-1">
          <button className="p-2 rounded-xl hover:bg-accent/50 transition-colors">
            <ZoomOut className="h-4 w-4 text-muted-foreground" />
          </button>
          <span className="text-xs text-muted-foreground px-2">100%</span>
          <button className="p-2 rounded-xl hover:bg-accent/50 transition-colors">
            <ZoomIn className="h-4 w-4 text-muted-foreground" />
          </button>
          <div className="w-px h-4 bg-border mx-2" />
          <button className="p-2 rounded-xl hover:bg-accent/50 transition-colors">
            <Bookmark className="h-4 w-4 text-muted-foreground" />
          </button>
          <button className="p-2 rounded-xl hover:bg-accent/50 transition-colors">
            <Share className="h-4 w-4 text-muted-foreground" />
          </button>
          <button className="p-2 rounded-xl hover:bg-accent/50 transition-colors">
            <Download className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Document Content */}
      <div className="flex-1 overflow-y-auto p-8">
        <article className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-semibold mb-6 text-grain text-balance">
            Introduction to Neural Networks
          </h1>
          
          <p className="text-muted-foreground text-sm mb-8 text-grain">
            Published: March 15, 2024 · Research Paper · Machine Learning
          </p>

          <section className="space-y-6 text-foreground leading-relaxed">
            <h2 className="text-xl font-medium mt-8 mb-4 text-grain">Abstract</h2>
            <p className="text-grain">
              Neural networks are a class of machine learning algorithms inspired by the biological 
              neural networks that constitute animal brains. These systems learn to perform tasks 
              by considering examples, generally without being programmed with task-specific rules.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4 text-grain">1. Introduction</h2>
            <p className="text-grain">
              The field of artificial neural networks has experienced remarkable growth over the 
              past decade. Deep learning, a subset of machine learning methods based on artificial 
              neural networks with representation learning, has produced state-of-the-art results 
              in various domains including computer vision, natural language processing, and 
              speech recognition.
            </p>
            <p className="text-grain">
              A neural network is composed of layers of interconnected nodes or neurons. Each 
              connection can transmit a signal from one neuron to another. The receiving neuron 
              processes the signal and then signals downstream neurons connected to it.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4 text-grain">2. Architecture</h2>
            <p className="text-grain">
              The most basic neural network architecture consists of three types of layers: an 
              input layer, one or more hidden layers, and an output layer. The input layer 
              receives the initial data for the network to process. Hidden layers perform 
              intermediate computations before transferring data to the next layer. The output 
              layer produces the final result of the network&apos;s computation.
            </p>

            <div className="bg-muted/50 rounded-2xl p-6 my-8 border border-border">
              <p className="text-sm text-muted-foreground italic text-grain">
                &quot;The development of neural networks represents one of the most significant 
                advances in artificial intelligence, enabling machines to learn patterns and 
                make decisions in ways that were previously impossible.&quot;
              </p>
              <p className="text-sm text-muted-foreground mt-2 text-grain">— Dr. Sarah Chen, MIT</p>
            </div>

            <h2 className="text-xl font-medium mt-8 mb-4 text-grain">3. Training Process</h2>
            <p className="text-grain">
              Training a neural network involves adjusting the weights and biases of connections 
              between neurons to minimize the difference between the network&apos;s predictions and 
              the actual target values. This process, known as backpropagation, calculates the 
              gradient of the loss function with respect to each weight by the chain rule.
            </p>
          </section>
        </article>
      </div>
    </div>
  )
}
