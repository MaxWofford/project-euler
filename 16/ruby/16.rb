input = 2
answer = 0

999.times do
  input = input * 2
end

input = input.to_s

input.length.times do |x|
  answer += input[x].to_i
end

puts answer
