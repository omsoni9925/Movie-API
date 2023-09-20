package dev.om.movies;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document(collection = "movies")
@Data //takes care of getters and setters
@AllArgsConstructor //Takes care of constructor as argmnts
@NoArgsConstructor //Takes care of constructor no argmnts
public class Movie {

    //Simple Variable Define
    @Id
    private ObjectId id;
    private String imdbId;
    private String title;
    private String releaseDate;
    private String trailerLink;
    private String poster;

    //List Variables
    private List<String> genres;
    private List<String> backdrops;

    @DocumentReference
    private List<Review> reviewIds;

}
