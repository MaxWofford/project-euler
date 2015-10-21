# The prime factors of 13195 are 5, 7, 13 and 29.

# What is the largest prime factor of the number 600851475143 ?

def is_prime?(num)
  (2..Math.sqrt(num)).each do |i|
    if num % i == 0
      return false
    end
  end
  true
end

def biggest_prime_factor(num)
  prime = 0
  (2..Math.sqrt(num)).each do |i|
    next unless num % i == 0
    if is_prime?(i)
      prime = i
    end
  end
  prime
end

answer = biggest_prime_factor(600851475143)
puts answer
