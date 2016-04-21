def factorial(num)
  product = 1
  for i in 1..num.to_i
    product *= i
  end
  product
end

def is_digit_factorial(num)
  sum = 0
  num.to_s.each_char do |i|
    sum += factorial i
  end
  num == sum
end

puts is_digit_factorial 145
