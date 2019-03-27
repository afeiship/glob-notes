#!/usr/bin/env ruby

# https://ruby-doc.org/core-2.2.0/Dir.html#method-c-glob
files = Dir['{**,.*,**/.*/*}'].reject do |item|
  item == '.' || item== '..'
end

puts files.length
