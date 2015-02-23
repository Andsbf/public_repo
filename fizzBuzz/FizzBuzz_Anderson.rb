##############################
#	  .						 #
#	>/_\    Light House 	 #
#	 |/|  Pre-Course work    #
#	 | |	Fizz Buzz 		 #
#	 |/|					 #
# 			Anderson		 #
##############################

def FizzBuzz
	
1.upto(100) {|i| 
	puts "Fizz" if i%3 == 0 && i%5 != 0
	puts "Buzz" if i%3 != 0 && i%5 == 0
	puts "FizzBuzz" if i%3 == 0 && i%5 == 0
	puts i if i%3 != 0 && i%5 != 0
}	

end
 
FizzBuzz()

