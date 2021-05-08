import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import crypto from 'crypto-js';
import Search from './Search';
import CharacterCard from './CharacterCard';
import ComicBook from './ComicBook';
import CreatorCard from './CreatorCard';
import Series from './Series';
import Events from './Events';
import Movies from './Movies';
import TVShows from './TVShows';
import Button from 'react-bootstrap/Button';
import RadioButtons from './RadioButtons';
import Login from './Login';
import SignUp from './SignUp';
import AutoCompletedSearchMovies from './AutoCompletedSearchMovies';
import AutoCompletedSearchShows from './AutoCompletedSearchShows';

const MARVEL_API_URL = 'https://gateway.marvel.com/v1/public';
const MCU_API_URL = 'https://mcuapi.herokuapp.com/api/v1'
const PUBLIC_KEY = '68ea63bfe3f79542f66d1423e0ebde35';
const PRIVATE_KEY = 'c779d45d411b6e1ef604cd38035a3909e8d85550';
const TS = Date.now();
const HASH = crypto.MD5(TS + PRIVATE_KEY + PUBLIC_KEY).toString();

function App() {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [renderResult, setRenderResult] = useState(false);
  const [signIn, setSignIn] = useState(true);
  const [signUp, setSignUp] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [accountCreated, setAccountCreate] = useState(false);

  const [results, setResults] = useState([]);
  const [resultType, setResultType] = useState("");

  const change = (resultType) => {
    setResultType(resultType);
  }

  const search = searchValue => {
    setLoading(true);
    setError(null);

    if (resultType === 'characters') {
      console.log(`You're searching for ${resultType}`);
      fetch(`${MARVEL_API_URL}/characters?nameStartsWith=${searchValue}&ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`)
        .then(res => res.json())
        .then(result => {
          setResults(result.data.results)
          setRenderResult(true);
          setLoading(false);
        })
        .catch(error => {
          setError(error);
        });
    }

    if (resultType === 'comics') {
      console.log(`You're searching for ${resultType}`);
      fetch(`${MARVEL_API_URL}/comics?titleStartsWith=${searchValue}&ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`)
        .then(res => res.json())
        .then(result => {
          setResults(result.data.results);
          setRenderResult(true);
          setLoading(false);
        })
        .catch(error => {
          setError(error);
        });
    }
    if (resultType === 'creators') {
      console.log(`You're searching for ${resultType}`);
      fetch(`${MARVEL_API_URL}/creators?nameStartsWith=${searchValue}&ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`)
        .then(res => res.json())
        .then(result => {
          setResults(result.data.results);
          setRenderResult(true);
          setLoading(false);
        })
        .catch(error => {
          setError(error);
        });
    }
    if (resultType === 'series') {
      console.log(`You're searching for ${resultType}`);
      fetch(`${MARVEL_API_URL}/series?titleStartsWith=${searchValue}&ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`)
        .then(res => res.json())
        .then(result => {
          setResults(result.data.results);
          setRenderResult(true);
          setLoading(false);
        })
        .catch(error => {
          setError(error);
        });
    }
    if (resultType === 'events') {
      console.log(`You're searching for ${resultType}`);
      fetch(`${MARVEL_API_URL}/events?nameStartsWith=${searchValue}&ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`)
        .then(res => res.json())
        .then(result => {
          setResults(result.data.results);
          setRenderResult(true);
          setLoading(false);
        })
        .catch(error => {
          setError(error);
        });
    }
    if (resultType === 'movies') {
      console.log(`You're searching for ${resultType}`);
      fetch(`${MCU_API_URL}/movies?filter=title%3D${searchValue}`)
        .then(res => res.json())
        .then(result => {
          setResults(result.data);
          setRenderResult(true);
          setLoading(false);
          console.log(result.data);
        })
        .catch(error => {
          setError(error);
        });
    }
    if (resultType === 'tvshows') {
      console.log(`You're searching for ${resultType}`);
      fetch(`${MCU_API_URL}/tvshows?filter=title%3D${searchValue}`)
        .then(res => res.json())
        .then(result => {
          setResults(result.data);
          setRenderResult(true);
          setLoading(false);
          console.log(result.data);
        })
        .catch(error => {
          setError(error);
        });
    }
  }

  const returnToSearch = () => {
    setRenderResult(false);
    setResults([]);
    setResultType("");
  }

  const createAccount = () => {
    setSignIn(false);
    setSignUp(true);
  }

  const returnToLogin = () => {
    setSignUp(false);
    setSignIn(true);
    if (accountCreated) setAccountCreate(false);
  }

  const statusFunction = successStatus => {
    if (signIn) setLoggedIn(successStatus);
    if (signUp) setAccountCreate(successStatus);
  }

  const signOut = () => {
    setLoggedIn(false);
    setSignIn(true);
  }

  if (loggedIn) {
    if (!renderResult) {
      if (!(
        resultType === 'movies' ||
        resultType === 'tvshows'
      )) {
        return (
          <div className="App-container">
            <div className="signout-button-container">
              <Button variant='primary' onClick={signOut}>Sign Out</Button>
            </div>
            <div className="search-box-container">
              <Search search={search} />
            </div>
            <div className="radio-buttons-container">
              <RadioButtons change={change} />
            </div>

          </div>

        );
      } else if (resultType === 'movies') {
        return (
          <div className="App-container">
            <div className="signout-button-container">
              <Button variant='primary' onClick={signOut}>Sign Out</Button>
            </div>
            <div className="search-box-container">
              <AutoCompletedSearchMovies search={search} />
            </div>
            <div className="radio-buttons-container">
              <RadioButtons change={change} />
            </div>
          </div>

        );
      } else {
        return (
          <div className="App-container">
            <div className="signout-button-container">
              <Button variant='primary' onClick={signOut}>Sign Out</Button>
            </div>
            <div className="search-box-container">
              <AutoCompletedSearchShows search={search} />
            </div>
            <div className="radio-buttons-container">
              <RadioButtons change={change} />
            </div>
          </div>

        );
      }
    } else {
      if (resultType === 'characters') {
        return (
          <div className={'result-container'}>
              {results.map(item =>
                <CharacterCard key={item.id} image={`${item.thumbnail.path}/standard_fantastic.${item.thumbnail.extension}`} name={item.name} description={item.description} />)}
            <div className="return-button-container">
              <Button vairant='primary' onClick={returnToSearch}>Return to search</Button>
            </div>
          </div>

        );
      }
      if (resultType === 'comics') {
        return (
          <div className={'result-container'}>
            {results.map(item =>
              <ComicBook key={item.id}
                image={`${item.thumbnail.path}/standard_fantastic.${item.thumbnail.extension}`}
                title={item.title}
                description={item.description}
                pages={item.pageCount}
                isbn={item.isbn}
                digital={(item.digitalId === 0) ? 'N' : 'Y'} />)}
            <div className="return-button-container">
              <Button vairant='primary' onClick={returnToSearch}>Return to search</Button>
            </div>
          </div>
        );
      }
      if (resultType === 'creators') {
        return (
          <div className={'result-container'}>
            {results.map(item =>
              <CreatorCard key={item.id}
                image={`${item.thumbnail.path}/standard_fantastic.${item.thumbnail.extension}`}
                name={item.fullName}
              />)}
            <div className="return-button-container">
              <Button vairant='primary' onClick={returnToSearch}>Return to search</Button>
            </div>
          </div>
        )
      }
      if (resultType === 'series') {
        return (
          <div className={'result-container'}>
            {results.map(item =>
              <Series key={item.id}
                image={`${item.thumbnail.path}/standard_fantastic.${item.thumbnail.extension}`}
                title={item.title}
                description={item.description}
                startYear={item.startYear}
                endYear={item.endYear}
              />)}
            <div className="return-button-container">
              <Button vairant='primary' onClick={returnToSearch}>Return to search</Button>
            </div>
          </div>
        )
      }
      if (resultType === 'events') {
        return (
          <div className={'result-container'}>
            {results.map(item =>
              <Events key={item.id}
                image={`${item.thumbnail.path}/standard_fantastic.${item.thumbnail.extension}`}
                title={item.title}
                description={item.description}
              />)}
            <div className="return-button-container">
              <Button vairant='primary' onClick={returnToSearch}>Return to search</Button>
            </div>
          </div>
        )
      }
      if (resultType === 'movies') {
        return (
          <div className={'result-container'}>
            {results.map(item =>
              <Movies key={item.id}
                image={item.cover_url}
                title={item.title}
                overview={item.overview}
                phase={item.phase}
                saga={item.saga ? item.saga : 'N/A'}
                release={item.release_date}
                duration={item.duration ? item.duration : 'TBD'}
              />)}
            <div className="return-button-container">
              <Button vairant='primary' onClick={returnToSearch}>Return to search</Button>
            </div>
          </div>
        );
      }
      if (resultType === 'tvshows') {
        return (
          <div className={'result-container'}>
            {results.map(item =>
              <TVShows key={item.id}
                image={item.cover_url}
                title={item.title}
                overview={item.overview}
                phase={item.phase}
                saga={item.saga ? item.saga : 'N/A'}
                release={item.release_date}
                lastAired={item.last_aired_date ? item.last_aired_date : 'Not yet released'}
                seasons={item.number_seasons}
                episodes={item.number_episodes}
              />)}
            <div className="return-button-container">
              <Button vairant='primary' onClick={returnToSearch}>Return to search</Button>
            </div>
          </div>
        );
      }
    }
  } else {
    if (signIn) {
      return (
        <div className="LoginPage">
          <Login status={statusFunction} />
          <Button block size="lg" type="submit" onClick={createAccount}>Create an Account</Button>
        </div>
      );
    }
    if (signUp) {
      if (!accountCreated) {
        return (
          <div className="SignUpPage">
            <SignUp status={statusFunction} />
            <Button block size="lg" type="submit" onClick={returnToLogin}>Return to Login</Button>
          </div>
        );
      } else {
        return (
          <div className="AccountCreatedPage">Your account was successfully created! Return to login page to sign in.
            <Button block size="lg" type="submit" onClick={returnToLogin}>Return to Login</Button>
          </div>
        )
      }

    }
  }
}

export default App;
