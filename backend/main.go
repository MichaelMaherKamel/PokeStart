package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"strconv"

	"github.com/gorilla/mux"
)

// Pokemon represents a Pokemon entity
type Pokemon struct {
	ID     int    `json:"id"`
	Name   string `json:"name"`
	Type   string `json:"type"`
	Image  string `json:"image"`
	Height int    `json:"height"`
	Weight int    `json:"weight"`
}

// ErrorResponse represents an error response
type ErrorResponse struct {
	Status  int    `json:"status"`
	Message string `json:"message"`
}

// Environment-specific configuration
type Config struct {
	Environment string
	FrontendURL string
	Port        int
}

// Collection of Pokemon - approximately 50 Pokémon
var pokemons = []Pokemon{
	// Original Pokémon from your code
	{ID: 1, Name: "Bulbasaur", Type: "Grass/Poison", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png", Height: 7, Weight: 69},
	{ID: 4, Name: "Charmander", Type: "Fire", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png", Height: 6, Weight: 85},
	{ID: 7, Name: "Squirtle", Type: "Water", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png", Height: 5, Weight: 90},
	{ID: 25, Name: "Pikachu", Type: "Electric", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png", Height: 4, Weight: 60},
	{ID: 54, Name: "Psyduck", Type: "Water", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png", Height: 8, Weight: 196},

	// Additional Pokémon (to reach about 50 total)
	{ID: 2, Name: "Ivysaur", Type: "Grass/Poison", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png", Height: 10, Weight: 130},
	{ID: 3, Name: "Venusaur", Type: "Grass/Poison", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png", Height: 20, Weight: 1000},
	{ID: 5, Name: "Charmeleon", Type: "Fire", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png", Height: 11, Weight: 190},
	{ID: 6, Name: "Charizard", Type: "Fire/Flying", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png", Height: 17, Weight: 905},
	{ID: 8, Name: "Wartortle", Type: "Water", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png", Height: 10, Weight: 225},
	{ID: 9, Name: "Blastoise", Type: "Water", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png", Height: 16, Weight: 855},
	{ID: 10, Name: "Caterpie", Type: "Bug", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png", Height: 3, Weight: 29},
	{ID: 12, Name: "Butterfree", Type: "Bug/Flying", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png", Height: 11, Weight: 320},
	{ID: 16, Name: "Pidgey", Type: "Normal/Flying", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png", Height: 3, Weight: 18},
	{ID: 18, Name: "Pidgeot", Type: "Normal/Flying", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png", Height: 15, Weight: 395},
	{ID: 19, Name: "Rattata", Type: "Normal", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png", Height: 3, Weight: 35},
	{ID: 20, Name: "Raticate", Type: "Normal", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png", Height: 7, Weight: 185},
	{ID: 24, Name: "Arbok", Type: "Poison", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png", Height: 35, Weight: 650},
	{ID: 26, Name: "Raichu", Type: "Electric", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png", Height: 8, Weight: 300},
	{ID: 31, Name: "Nidoqueen", Type: "Poison/Ground", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png", Height: 13, Weight: 600},
	{ID: 34, Name: "Nidoking", Type: "Poison/Ground", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png", Height: 14, Weight: 620},
	{ID: 35, Name: "Clefairy", Type: "Fairy", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png", Height: 6, Weight: 75},
	{ID: 36, Name: "Clefable", Type: "Fairy", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png", Height: 13, Weight: 400},
	{ID: 37, Name: "Vulpix", Type: "Fire", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png", Height: 6, Weight: 99},
	{ID: 38, Name: "Ninetales", Type: "Fire", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png", Height: 11, Weight: 199},
	{ID: 39, Name: "Jigglypuff", Type: "Normal/Fairy", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png", Height: 5, Weight: 55},
	{ID: 40, Name: "Wigglytuff", Type: "Normal/Fairy", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png", Height: 10, Weight: 120},
	{ID: 50, Name: "Diglett", Type: "Ground", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png", Height: 2, Weight: 8},
	{ID: 51, Name: "Dugtrio", Type: "Ground", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/051.png", Height: 7, Weight: 333},
	{ID: 55, Name: "Golduck", Type: "Water", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/055.png", Height: 17, Weight: 766},
	{ID: 59, Name: "Arcanine", Type: "Fire", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png", Height: 19, Weight: 1550},
	{ID: 63, Name: "Abra", Type: "Psychic", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png", Height: 9, Weight: 195},
	{ID: 65, Name: "Alakazam", Type: "Psychic", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png", Height: 15, Weight: 480},
	{ID: 68, Name: "Machamp", Type: "Fighting", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png", Height: 16, Weight: 1300},
	{ID: 74, Name: "Geodude", Type: "Rock/Ground", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png", Height: 4, Weight: 200},
	{ID: 76, Name: "Golem", Type: "Rock/Ground", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png", Height: 14, Weight: 3000},
	{ID: 78, Name: "Rapidash", Type: "Fire", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/078.png", Height: 17, Weight: 950},
	{ID: 80, Name: "Slowbro", Type: "Water/Psychic", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/080.png", Height: 16, Weight: 785},
	{ID: 87, Name: "Dewgong", Type: "Water/Ice", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/087.png", Height: 17, Weight: 1200},
	{ID: 92, Name: "Gastly", Type: "Ghost/Poison", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/092.png", Height: 13, Weight: 1},
	{ID: 94, Name: "Gengar", Type: "Ghost/Poison", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png", Height: 15, Weight: 405},
	{ID: 95, Name: "Onix", Type: "Rock/Ground", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png", Height: 88, Weight: 2100},
	{ID: 112, Name: "Rhydon", Type: "Ground/Rock", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/112.png", Height: 19, Weight: 1200},
	{ID: 123, Name: "Scyther", Type: "Bug/Flying", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png", Height: 15, Weight: 560},
	{ID: 124, Name: "Jynx", Type: "Ice/Psychic", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/124.png", Height: 14, Weight: 406},
	{ID: 125, Name: "Electabuzz", Type: "Electric", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/125.png", Height: 11, Weight: 300},
	{ID: 126, Name: "Magmar", Type: "Fire", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png", Height: 13, Weight: 445},
	{ID: 129, Name: "Magikarp", Type: "Water", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png", Height: 9, Weight: 100},
	{ID: 130, Name: "Gyarados", Type: "Water/Flying", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png", Height: 65, Weight: 2350},
	{ID: 143, Name: "Snorlax", Type: "Normal", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png", Height: 21, Weight: 4600},
	{ID: 144, Name: "Articuno", Type: "Ice/Flying", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/144.png", Height: 17, Weight: 554},
	{ID: 145, Name: "Zapdos", Type: "Electric/Flying", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/145.png", Height: 16, Weight: 526},
	{ID: 146, Name: "Moltres", Type: "Fire/Flying", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/146.png", Height: 20, Weight: 600},
	{ID: 149, Name: "Dragonite", Type: "Dragon/Flying", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png", Height: 22, Weight: 2100},
	{ID: 150, Name: "Mewtwo", Type: "Psychic", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png", Height: 20, Weight: 1220},
	{ID: 151, Name: "Mew", Type: "Psychic", Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png", Height: 4, Weight: 40},
}

// Load configuration based on environment
func loadConfig() Config {
	// Check environment variable, default to development if not set
	env := os.Getenv("GO_ENV")
	if env == "" {
		env = "development"
	}

	config := Config{Environment: env}

	// Set configuration based on environment
	if env == "production" {
		config.FrontendURL = "https://pokestart.macrotech.dev" // FIXED: Updated with correct production frontend URL
		config.Port = 8080                                     // or get from env var: os.Getenv("PORT")
	} else {
		config.FrontendURL = "http://localhost:3000"
		config.Port = 8080
	}

	return config
}

// Enable CORS middleware
func corsMiddleware(frontendURL string) mux.MiddlewareFunc {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			// Set CORS headers
			w.Header().Set("Access-Control-Allow-Origin", frontendURL)
			w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
			w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

			// Handle preflight requests
			if r.Method == "OPTIONS" {
				w.WriteHeader(http.StatusOK)
				return
			}

			// Call the next handler
			next.ServeHTTP(w, r)
		})
	}
}

func main() {
	// Load configuration
	config := loadConfig()

	// Create a new router
	r := mux.NewRouter()

	// Apply CORS middleware to all routes
	r.Use(corsMiddleware(config.FrontendURL))

	// API routes
	r.HandleFunc("/", homeHandler(config)).Methods("GET", "OPTIONS")
	r.HandleFunc("/pokemon", getAllPokemonHandler).Methods("GET", "OPTIONS")
	r.HandleFunc("/pokemon/{id}", getPokemonByIDHandler).Methods("GET", "OPTIONS")

	// Set up server with environment-specific message
	envIcon := "🔥" // Dev mode icon
	if config.Environment == "production" {
		envIcon = "🚀" // Production mode icon
	}

	fmt.Printf("%s Pokemon API Server starting in %s mode on http://localhost:%d\n",
		envIcon, config.Environment, config.Port)
	fmt.Printf("✅ CORS enabled for frontend at %s\n", config.FrontendURL)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", config.Port), r))
}

// Simple home handler to provide basic API info
func homeHandler(config Config) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")

		apiInfo := map[string]interface{}{
			"name":        "Pokemon JSON API",
			"version":     "1.0",
			"environment": config.Environment,
			"endpoints": []map[string]string{
				{"path": "/pokemon", "method": "GET", "description": "Get all Pokemon"},
				{"path": "/pokemon/{id}", "method": "GET", "description": "Get Pokemon by ID"},
			},
		}

		json.NewEncoder(w).Encode(apiInfo)
	}
}

// Handler to get all pokemon in JSON format
func getAllPokemonHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(pokemons)
}

// Handler to get a pokemon by ID in JSON format
func getPokemonByIDHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	vars := mux.Vars(r)
	idStr := vars["id"]

	// Try to convert the ID to an integer
	id, err := strconv.Atoi(idStr)
	if err != nil {
		// Invalid ID format
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(ErrorResponse{
			Status:  http.StatusBadRequest,
			Message: "Invalid Pokemon ID format",
		})
		return
	}

	// Find the Pokemon with matching ID
	for _, pokemon := range pokemons {
		if pokemon.ID == id {
			json.NewEncoder(w).Encode(pokemon)
			return
		}
	}

	// Pokemon not found
	w.WriteHeader(http.StatusNotFound)
	json.NewEncoder(w).Encode(ErrorResponse{
		Status:  http.StatusNotFound,
		Message: fmt.Sprintf("Pokemon with ID %d not found", id),
	})
}
