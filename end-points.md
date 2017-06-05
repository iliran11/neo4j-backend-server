# /get-stocks-list
   - get list of all stocks names.
   - Method: `GET`
   - Return: `["Google","BMW"]`

# /update-create-stock
 - update or create instanceStock with a quantity
 - Method: `POST`
 - Post Body: 
 ```json
 {
"user": "Liran",
"stock":"BMW",
"quantity": "55"
}
 ```
- return: `update completed` / `creation completed`

# /portfolio
- get portfolio of a user
- Method: `POST`
- Post Body:
```json
{
	"user":"Liran"
}
```
- Return Value:
```json
[
  {
    "name": "BMW",
    "quantity": 66
  },
  {
    "name": "Google",
    "quantity": 10
  },
  {
    "name": "Google",
    "quantity": 10
  }
]
```
# /change-turn
- change the turn of the game.
- Post Body:
```json
{
    "user":"liran",
    "turn":"3"
}
```
- Return Value: `Turn Has Changed`