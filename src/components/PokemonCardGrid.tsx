import React from "react";
import { pokemonTypeInterface, userPokemonsType } from "../utils/Types";
import { IoGitCompare } from "react-icons/io5";
import { FaPlus, FaTrash } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { addToCompare } from "../app/slices/PokemonSlice";
import { setToast } from "../app/slices/AppSlice";

function PokemonCardGrid({ pokemons }: { pokemons: userPokemonsType[] }) {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <div className="pokemon-card-grid-container">
      <div className="pokemon-card-grid">
        {pokemons &&
          pokemons.length > 0 &&
          pokemons?.map((data: userPokemonsType) => {
            return (
              <div className="pokemon-card" key={data.id}>
                <div className="pokemon-card-list">
                  {location.pathname.includes("/pokemon") ? (
                    <FaPlus className="plus" />
                  ) : location.pathname.includes("/search") ? (
                    <FaPlus className="plus" />
                  ) : (
                    <FaTrash className="trash" />
                  )}
                </div>
                <div className="pokemon-card-compare">
                  <IoGitCompare
                    onClick={() => {
                      dispatch(addToCompare(data));
                      dispatch(
                        setToast(
                          `${data.name} has been added to Compare Queue.`
                        )
                      );
                    }}
                  />
                </div>
                <h3 className="pokemon-card-title">{data.name}</h3>
                <img
                  src={data.image}
                  alt="pokemon"
                  className="pokemon-card-image"
                  loading="lazy"
                  onClick={() => navigate(`/pokemon/${data.id}`)}
                />
                <div className="pokemon-card-types">
                  {data.types.map(
                    (type: pokemonTypeInterface, index: number) => {
                      const keys = Object.keys(type);
                      return (
                        <div className="pokemon-card-types-type" key={index}>
                          <img
                            src={type[keys[0]].image}
                            alt="pokemon type"
                            className="pokemon-card-types-type-image"
                            loading="lazy"
                          />
                          <h6 className="pokemon-card-types-type-text">
                            {keys[0]}
                          </h6>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default PokemonCardGrid;
