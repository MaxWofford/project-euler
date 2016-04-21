def fibonacci_sequence(a=1, b=0, index=1)
  sum = a + b
  if sum.to_s.length == 1000
    return index
  end
  fibonacci_sequence(b, a+b, index+1)
end

puts fibonacci_sequence
