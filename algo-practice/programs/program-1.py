# Program 1 (Algorithms - Python)

def fibonacci(limit: int):
    result = [0, 1]
    while len(result) < limit:
        result.append(result[-1] + result[-2])
    return result[:limit]


if __name__ == '__main__':
    print('first 10 numbers:', fibonacci(10))
