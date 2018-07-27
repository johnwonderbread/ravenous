const apiKey = '26cURpazsV9JJFADwW-q7-q8DKzqrHenfSWX73avSkscYWf3XakgFU2Z8xW4EzDQq5rmcsgcIMOqHBxX5kPoqwJ-mDT4GC6ZsxRxPUPZpM35jDaQReJCm0hEk3RaW3Yx'

class Yelp {
  static search(term, location, sortBy) {
      return fetch(
        (`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`),
        {
          headers: {
            Authorization: (`Bearer ${apiKey}`)
          }
        }
      ).then(response => {
        return response.json();
      }).then(jsonResponse => {
        if(jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => ({
              id: business.id,
              imageSrc:  business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories,
              rating: business.rating,
              reviewCount: business.review_count
            })
        )}
      });
  }
};

export default Yelp;
