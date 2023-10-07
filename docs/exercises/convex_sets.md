---
layout: default
title: Convex sets
parent: Exercises
order: 1
---

# Convex sets
1. Show that the set is convex if and only if its intersection with any line is convex.
1. Show that the convex hull of the $$S$$ set is the intersection of all convex sets containing $$S$$.
1. Let $$x \in \mathbb{R}$$ is a random variable with a given probability distribution of $$\mathbb{P}(x = a_i) = p_i$$, where $$i = 1, \ldots, n$$, and $$a_1 < \ldots < a_n$$. It is said that the probability vector of outcomes of $$p \in \mathbb{R}^n$$ belongs to the probabilistic simplex, i.e. $$P = \{ p \mid \mathbf{1}^Tp = 1, p \succeq 0 \} = \{ p \mid p_1 + \ldots + p_n = 1, p_i \ge 0 \}$$. 
    Determine if the following sets of $$p$$ are convex:
	1. $$ \alpha < \mathbb{E} f(x) < \beta$$, where $$\mathbb{E}f(x)$$ stands for expected value of $$f(x): \mathbb{R} \rightarrow \mathbb{R} $$, i.e. $$ \mathbb{E}f(x) = \sum\limits_{i=1}^n p_i f(a_i) $$ 
	1. \$$ \mathbb{E}x^2 \le \alpha $$
	1. \$$ \mathbb{V}x \le \alpha $$
1. Prove that if the set is convex, its interior is also convex. Is the opposite true?
1. Prove that if the set is convex, its closure is also convex. Is the opposite true?
1. Prove that the set of square symmetric positive definite matrices is convex.
1. Show that the set of $$S$$ is convex if and only if
    
    $$
    \forall \lambda_1, \lambda_2 \geq 0, \quad (\lambda_1, \lambda_2) \neq (0, 0):  \lambda_1 S + \lambda_2 S = (\lambda_1 + \lambda_2)S
    $$

1. Calculate the Minkowski sum of the line segment and the square on the plane, the line segment and the triangle, the line segment and the circle, the line segment and the disk.
1. Find the minimum value of $$k$$, at which the set of $$\{x \in \mathbb{R}^2 \mid (x_1^2 + 1) x_2\le 2, x_2 \ge k\}$$ is convex.
1. Prove that the set of $$\{x \in \mathbb{R}^2 \mid e^{x_1}\le x_2\}$$ is convex.
1. Give an example of two closed convex sets, the sum of which is not closed
1. Find convex and conical hulls of the following sets: $$ \{x \in \mathbb{R}^2 \mid x_1^2 = x_2 \}$$, $$ \{x \in \mathbb{R}^2 \mid x_1^2 = x_2, x_1 \ge 0 \}$$, $$ \{x \in \mathbb{R}^2 \mid x_1 x_2 = 1 \} $$
1. Show that the set of directions of the strict local descending of the differentiable function in a point is a convex cone.
1. Prove that $$K$$:
    
    $$
    K = \{ x \in \mathbb{R}^3 \mid x_1^2 - 2x_1x_3 + x_2^2 \leq 0, x_3 \geq 0 \}
    $$

    is a convex cone.
1. Find the convex hulls of the following sets:
	1. \$$x^2 + y^2 \leq 1, xy = 0$$
	1. \$$x^2 + y^2 = 1, x - y = 0$$
	1. \$$x^2 + y^2 = 1, \|x\| \leq 1, \|y\|$$
	1. \$$y \leq e^x, y \geq \|x\|$$
1. For an arbitrary set of $$S$$, let's say $$\tilde{S}$$ consists of all segments of $$[a,b]$$ with the ends of $$a,b \in S$$. Is it true that $$\tilde{S} = \text{conv}(S)$$ ?
1. Is the given set a convex polyhedron (could be written in the form of $$Ax \preceq b, Cx = d$$):
	1. \$$S = \{ y_1a_1 + y_2a_2 \mid -1 \leq y_1, y_2 \leq 1 \}; a_1, a_2 \in \mathbb{R}^n$$
	1. \$$S = \{x \in \mathbb{R}^n \mid x \succeq 0, \mathbf{1}^\top x = 1, \sum\limits_{i=1}^n x_ia_i = b_1, \sum\limits_{i=1}^n x_ia_i^2 = b_2 \}; a_1, \ldots a_n, b_1, b_2 \in \mathbb{R}$$
	1. \$$S = \{x \in \mathbb{R}^n \mid x \succeq 0, x^\top y \leq 1, \|y\|_2 = 1 \}$$
	1. \$$S = \{x \in \mathbb{R}^n \mid x \succeq 0, x^\top y \leq 1, \sum\limits_{i=1}^n \|y_i\| = 1 \}$$
1. Let $$S \subseteq \mathbb{R}^n$$ is a set of solutions to the quadratic inequality: 
    
    $$
    S = \{x \in \mathbb{R}^n \mid x^\top A x + b^\top x + c \leq 0 \}; A \in \mathbb{S}^n, b \in \mathbb{R}^n, c \in \mathbb{R}
    $$

	1. Show that if $$A \succeq 0$$, $$S$$ is convex. Is the opposite true?
	1. Show that the intersection of $$S$$ with the hyperplane defined by the $$g^\top x + h = 0, g \neq 0$$ is convex if $$A + \lambda gg^\top \succeq 0$$ for some real $$\lambda \in \mathbb{R}$$. Is the opposite true?
1. Show that the hyperbolic set of $$ \{x \in \mathbb{R}^n_+ | \prod\limits_{i=1}^n x_i \geq 1 \} $$ is convex. 
Hint: For $$0 \leq \theta \leq 1$$ it is valid, that $$a^\theta b^{1 - \theta} \leq \theta a + (1-\theta)b$$ with non-negative $$a,b$$.
1. Which of the sets are convex:
	1. Stripe, $$ \{x \in \mathbb{R}^n \mid \alpha \leq a^\top x \leq \beta \}$$
	1. Rectangle, $$ \{x \in \mathbb{R}^n \mid \alpha_i \leq x_i \leq \beta_i, i = \overline{1,n} \}$$
	1. Kleen, $$ \{x \in \mathbb{R}^n \mid a_1^\top x \leq b_1, a_2^\top x \leq b_2 \}$$
	1. A set of points closer to a given point than a given set that does not contain a point, $$ \{x \in \mathbb{R}^n \mid \|x - x_0\|_2 \leq \|x-y\|_2, \forall y \in S \subseteq \mathbb{R}^n \}$$
	1. A set of points, which are closer to one set than another, $$ \{x \in \mathbb{R}^n \mid \mathbf{dist}(x,S) \leq \mathbf{dist}(x,T) , S,T \subseteq \mathbb{R}^n \}$$ 
	1. A set of points, $$ \{x \in \mathbb{R}^{n} \mid x + X \subseteq S\} $$, where $$ S \subseteq \mathbb{R}^{n} $$ is convex and $$ X \subseteq \mathbb{R}^{n} $$ is arbitrary.
	1. A set of points whose distance to a given point does not exceed a certain part of the distance to another given point is $$ \{x \in \mathbb{R}^n \mid \|x - a\|_2 \leq \theta\|xb\|_2, a,b \in \mathbb{R}^n, 0 \leq 1 \}$$
1. Find the conic hull of the set of rank $$k$$ matrix products $$\{XX^\top \mid X \in \mathbb{R}^{n \times k}, \mathbf{rank} X = k \}$$?
1. Let $$K \subseteq \mathbb{R}^n_+$$ is a cone. Prove that it is convex if and only if a set of $$ \{x \in K \mid \sum\limits_{i=1}^n x_i = 1 \}$$ is convex.
1. Let $$S$$ be such that $$\forall x,y \in S \to \frac{1}{2}(x+y) \in S$$. Is this set convex?
1. Find the conic hull of the following sets in $$\mathbb{R}^2$$:
	1. \$$y = x^2$$
	1. \$$y = x^2, x \geq 0$$
	1. \$$y = x^2 + x, x \geq 0$$
	1. \$$xy=1, x > 0$$
	1. \$$y = \sin x, 0 \leq x \leq \pi$$
	1. \$$y = e^x$$
1. Let $$S_1 = \{x^2 + y^2 \leq 1 \}$$ is a disk of $$\mathbb{R^3}$$ and $$S_2$$ is a segment of $$\left[(0,0,-1), (0,0,1)\right]$$. How their convex combination with $$\alpha, \beta$$ looks like.
1. Is the next set convex?

    $$ 
    \{a \in \mathbb{R}^k \mid p(0) = 1, \|p(t)\| \leq 1 \;\; \forall \alpha \leq t \leq \beta, \;\; p(t) = a_1 + a_2t + \ldots + a_kt^{k-1} \} 
    $$

1. Prove that in order for $$K \subseteq \mathbb{R}^n$$ to be a convex cone, it is enough that $$K$$ contains all possible non-negative combinations of its points.
1. Prove that in order for $$S \subseteq \mathbb{R}^n$$ to be an affine set it is necessary and sufficient that $$S$$ contains all possible affine combinations of its points.
1. Пусть $S_1, \ldots, S_k$ - произвольные непустые множества в $\mathbb{R}^n$. Докажите, что:
    * $ \mathbf{cone} \left( \bigcup\limits_{i=1}^k S_i\right) = \sum\limits_{i=1}^k \mathbf{cone} \left( S_i\right) $
    * $ \mathbf{conv} \left( \sum\limits_{i=1}^k S_i\right) = \sum\limits_{i=1}^k \mathbf{conv} \left( S_i\right) $
1. Prove, that the set $S \subseteq \mathbb{R}^n$ is convex if and only if $(\alpha + \beta)S = \alpha S + \beta S$ for all non-negative $\alpha$ and $\beta\quad (\alpha, \beta) \neq (0, 0)$
1. Let $$x \in \mathbb{R}$$ is a random variable with a given probability distribution of $$\mathbb{P}(x = a_i) = p_i$$, where $$i = 1, \ldots, n$$, and $$a_1 < \ldots < a_n$$. It is said that the probability vector of outcomes of $$p \in \mathbb{R}^n$$ belongs to the probabilistic simplex, i.e. $$P = \{ p \mid \mathbf{1}^Tp = 1, p \succeq 0 \} = \{ p \mid p_1 + \ldots + p_n = 1, p_i \ge 0 \}$$. 
    Determine if the following sets of $$p$$ are convex:
    
    1. \$$\mathbb{P}(x > \alpha) \le \beta$$
    1. \$$\mathbb{E} \vert x^{201}\vert \le \alpha \mathbb{E}\vert x \vert$$
    1. \$$\mathbb{E} \vert x^{2}\vert \ge \alpha $$
    1. \$$\mathbb{V}x \ge \alpha$$ 
1. Prove, that ball in $$\mathbb{R}^n$$ (i.e. the following set $$\{ \mathbf{x} \mid \| \mathbf{x} - \mathbf{x}_c \| \leq r \}$$) - is convex. 
1. Prove, that if $$S$$ is convex, then $$S+S = 2S$$. Give an counterexample in case, when $$S$$ - is not convex.
1. Which of the following operations does not preserve convexity if $X,Y \subseteq \mathbb{R}^n$ are convex sets?
    1. \$$X \cup Y$$
    1. \$$X \times Y = \left\{ (x,y) \; \mid \; x \in X, y \in Y \right\}$$
    1. \$$\alpha X + \beta Y = \{ \alpha x + \beta y \; \mid \; x \in X, \; y \in Y, \; \alpha,  \beta \in \mathbb{R} \}$$
    1. \$$\alpha X  = \{ \alpha x  \; \mid \; x \in X, \; \alpha  \in \mathbb{R_{-}} \}$$
    1. \$$X^{c} = \{x \in \mathbb{R}^n \; \mid \; x \notin X\}$$
1. Show, that $ \mathbf{conv}\\{xx^\top: x \in \mathbb{R}^n, \Vert x\Vert = 1\\} = \\{A \in \mathbb{S}^n_+: \text{tr}(A) = 1\\}$.


## Convex functions

1. Consider the function $f(x) = x^d$, where $x \in \mathbb{R}_{+}$. Fill the following table with ✅ or ❎. Explain your answers

	| $d$ | Convex | Concave | Strictly Convex | $\mu$-strongly convex |
	|:-:|:-:|:-:|:-:|:-:|
	| $-2, x \in \mathbb{R}_{++}$| | | | |
	| $-1, x \in \mathbb{R}_{++}$| | | | |
	| $0$| | | | |
	| $0.5$ | | | | |
	|$1$ | | | | |
	| $\in (1; 2)$ | | | | |
	| $2$| | | | |
	| $> 2$| | | |  

1. Prove that the entropy function, defined as

	$$
	f(x) = -\sum_{i=1}^n x_i \log(x_i),
	$$

	with $\text{dom}(f) = \\{x \in \R^n_{++} : \sum_{i=1}^n x_i = 1\\}$, is strictly concave.  

1. Show, that the function $f: \mathbb{R}^n_{++} \to \mathbb{R}$ is convex if $f(x) = - \prod\limits_{i=1}^n x_i^{\alpha_i}$ if $\mathbf{1}^T \alpha = 1, \alpha \succeq 0$.

1. Show that the maximum of a convex function $f$ over the polyhedron $P = \text{conv}\\{v_1, \ldots, v_k\\}$ is achieved at one of its vertices, i.e.,

	$$
	\sup_{x \in P} f(x) = \max_{i=1, \ldots, k} f(v_i).
	$$

	A stronger statement is: the maximum of a convex function over a closed bounded convex set is achieved at an extreme point, i.e., a point in the set that is not a convex combination of any other points in the set. (you do not have to prove it). *Hint:* Assume the statement is false, and use Jensen’s inequality.

1. Show, that the two definitions of $\mu$-strongly convex functions are equivalent:
	1. $f(x)$ is $\mu$-strongly convex $\iff$ for any $x_1, x_2 \in S$ and $0 \le \lambda \le 1$ for some $\mu > 0$:
		
		$$
		f(\lambda x_1 + (1 - \lambda)x_2) \le \lambda f(x_1) + (1 - \lambda)f(x_2) - \mu \lambda (1 - \lambda)\|x_1 - x_2\|^2
		$$

	1. $f(x)$ is $\mu$-strongly convex $\iff$ if there exists $\mu>0$ such that the function $f(x) - \dfrac{\mu}{2}\Vert x\Vert^2$ is convex.

## Conjugate sets
1. Let $\mathbb{A}_n$ be the set of all $n$ dimensional antisymmetric matrices (s.t. $X^T = - X$). Show that $\left( \mathbb{A}_n\right)^* = \mathbb{S}_n$. 
1. Find the sets $S^{\star}, S^{\star\star}, S^{\star\star\star}$, if 
    
    $$
    S = \{ x \in \mathbb{R}^2 \mid x_1 + x_2 \ge 0, \;\; -\dfrac12x_1 + x_2 \ge 0, \;\; 2x_1 + x_2 \ge -1 \;\; -2x_1 + x_2 \ge -3\}
    $$

1. Prove, that $B_p$ and $B_{p_\star}$ are inter-conjugate, i.e. $(B_p)^\star = B_{p_\star}, (B_{p_\star})^\star = B_p$, where $B_p$ is the unit ball (w.r.t. $p$ - norm) and $p, p_\star$ are conjugated, i.e. $p^{-1} + p^{-1}\_\star = 1$. You can assume, that $p_\star = \infty$ if $p = 1$ and vice versa.
