# Program 1 (Python)
# Simple function example

def factorial(n: int) -> int:
    if n < 0:
        raise ValueError('n must be >= 0')
    if n in (0, 1):
        return 1
    return n * factorial(n - 1)


if __name__ == '__main__':
    print('factorial(5) =', factorial(5))
