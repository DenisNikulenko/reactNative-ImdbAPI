import React, {useState} from 'react';
import {ScrollView, View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {IMAGE_URL} from "../utilities/apiUrl";


export const Details = ({movieDetails}) => {
	const [isReady, setIsReady] = useState(movieDetails ? true : false);

	let content
	if(isReady) {
		const {
			backdrop_path,
			belongs_to_collection,
			budget,
			genres,
			id,
			original_language,
			original_title,
			overview,
			popularity,
			poster_path,
			production_companies,
			production_countries,
			release_date,
			revenue,
			runtime,
			spoken_languages,
			status,
			tagline,
			title,
			video,
			vote_average,
			vote_count
		} = movieDetails
		console.log(genres)
		// const genre = genres.map((item => {console.log(item)}))
	
		return content =  (
			<ScrollView style={styles.container}>
				<View>
					<Text>Бюджет: {}$</Text>
					<Image
						style={styles.movieImage} 
					 	source={{
							uri: `${IMAGE_URL}/${poster_path}`
						}} />
				</View>
			</ScrollView>
		)
	} else {
		return content = (
			<View><Text>loading...</Text></View>
		)
	}
};

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 15,
		marginVertical: 15
	},
	movieImage: {
		alignItems: "center",
		justifyContent: "center",
		width: Dimensions.get("screen").width - 20, 
		height: 600,  
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20    
	}
});