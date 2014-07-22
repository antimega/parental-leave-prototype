class EmployeeController < ApplicationController
	def index
		@title = 'Parental pay and leave calculator'
		@has_breadcrumbs = true
		@has_related_links = true
	end

	def circumstances
		@title = 'Parental pay and leave calculator'
			@has_breadcrumbs = true
			@has_related_links = false
	end

	def duedate
		@title = 'Parental pay and leave calculator'
			@has_breadcrumbs = true
			@has_related_links = false
	end

	def employment
		@title = 'Parental pay and leave calculator'
			@has_breadcrumbs = true
			@has_related_links = false
	end

	def leavedates
		@title = 'Parental pay and leave calculator'
			@has_breadcrumbs = true
			@has_related_links = false
	end

	def mothersemployment
		@title = 'Parental pay and leave calculator'
			@has_breadcrumbs = true
			@has_related_links = false
	end

	def partnersemployment
		@title = 'Parental pay and leave calculator'
			@has_breadcrumbs = true
			@has_related_links = false
	end

	def outcome
		@title = 'Parental pay and leave calculator'
		@has_breadcrumbs = true
		@has_related_links = true
	end

	@title = 'Parental pay and leave calculator'
	@has_breadcrumbs = true
	@has_related_links = false



end
