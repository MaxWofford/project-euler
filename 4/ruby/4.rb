def check_palindrome(n)
  n = n.to_s
  n.length.times do |x|
    unless n[x] == n[-x-1]
      return false
    end
  end
  true
end

def get_palindromes_between(search_range)
  for x in search_range do
    for y in search_range do
      if check_palindrome(x*y)
        result = [(result or x*y), x*y].max
      end
    end
  end
  result
end

puts get_palindromes_between 100...999
