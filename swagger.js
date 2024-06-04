{
    "swagger": "2.0",
    "info": {
        "description": "API pour obtenir des blagues Carambar",
        "version": "1.0.0",
        "title": "API Blagues Carambar"
    },
    "host": "localhost:3000",
    "basePath": "/api",
    "tags": [
        {
            "name": "jokes",
            "description": "Gestion des blagues"
        }
    ],
    "paths": {
        "/jokes/random": {
            "get": {
                "tags": ["jokes"],
                "summary": "Obtenir une blague aléatoire",
                "description": "",
                "operationId": "getRandomJoke",
                "produces": ["application/json"],
                "responses": {
                    "200": {
                        "description": "Blague aléatoire",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "joke": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
