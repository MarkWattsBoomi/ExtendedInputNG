function melissaauto(props) {
    const state = manywho.state.getComponent(props.id, props.flowKey);
    const model = manywho.model.getComponent(props.id, props.flowKey);

    const [isReady, setIsReady] = React.useState(false);
    const [value, setValue] = React.useState('');
    const [results, setResults] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');
    const [addressAttributes, setAddressAttributes] = React.useState({
        address2: '',
        locality: '',
        stateName: '',
        postcode: '',
        country: ''
    });

    React.useEffect(() => {
        const savedAddress = state.attributes ? state.attributes.RowLevelState : null;
        if (savedAddress) {
            setAddressAttributes(savedAddress);
            setValue(savedAddress.address || '');
        }
        setIsReady(true);
    }, [state, model]);

    const updateAddressAttributes = (newAttributes) => {
        setAddressAttributes(prevAttributes => {
            const updatedAttributes = { ...prevAttributes, ...newAttributes };

            manywho.state.setComponent(props.id, { attributes: { ...state.attributes, RowLevelState: updatedAttributes } }, props.flowKey, true);

            return updatedAttributes;
        });
    };

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setValue(inputValue);

        if (inputValue === '') {
            setResults([]);
            setErrorMessage('');
            return;
        }

        fetchAddressSuggestions(inputValue);
    };

    const fetchAddressSuggestions = (inputValue) => {
        if (isLoading) return;

        setIsLoading(true);
        setErrorMessage('');
//
        const script = document.createElement('script');
        const callbackName = `jsonp_callback_${Math.round(100000 * Math.random())}`;

        window[callbackName] = (data) => {
            setIsLoading(false);

            if (data.ResultCode === 'XS03') {
                setResults([]);
                setErrorMessage('Your address not found?');
            } else if (data.Results && data.Results.length > 0) {
                const fetchedResults = data.Results.map((item) => ({
                    label: `${item.Address.DeliveryAddress}, ${item.Address.Locality}, ${item.Address.AdministrativeArea}, ${item.Address.PostalCode}`,
                    value: item.Address.DeliveryAddress,
                    address: item.Address
                }));

                // Sort results numerically if both labels start with a number, otherwise sort alphabetically
                fetchedResults.sort((a, b) => {
                fetchedResults.sort((a, b) => a.label.localeCompare(b.label));
                    const numA = parseInt(a.label.match(/^\d+/), 10); // Extract number at the start of the label
                    const numB = parseInt(b.label.match(/^\d+/), 10);
                    if (!isNaN(numA) && !isNaN(numB)) {
                        return numA - numB; // Sort numerically if both have numbers
                    }
                    return a.label.localeCompare(b.label); // Fallback to alphabetical sort if no numbers
                });
                setResults(fetchedResults);
                setErrorMessage('');
            } else {
                setResults([]);
                setErrorMessage('Your address not found?');
            }

            delete window[callbackName];
        };

        const countryCode = 'GB';
        script.src = `https://expressentry.melissadata.net/jsonp/GlobalExpressFreeForm?callback=${callbackName}&format=jsonp&id=d09XO0Y48oHf9-VZWczJkM**&FF_NonProdStop=${inputValue}&maxrecords=100&Country=${countryCode}`;

        script.async = true;

        script.onload = () => {
            document.body.removeChild(script);
        };
        script.onerror = () => {
            console.error('Error fetching address data');
            setResults([]);
            setErrorMessage('Error fetching address data');
            setIsLoading(false);
            delete window[callbackName];
            document.body.removeChild(script);
        };

        document.body.appendChild(script);
    };
//
    const handlePlaceSelect = async (result) => {
        const address = result.address.DeliveryAddress;
        setResults([]);
        setValue(address);

        let addressLine1 = '';
        let addressLine2 = '';
        let addressLine3 = '';

        const addressParts = address.split(',').map(part => part.trim());

        const splitAddressPart = (part, maxLength) => {
            if (part.length <= maxLength) {
                return { firstPart: part, remainingPart: '' };
            }
            const splitIndex = part.lastIndexOf(' ', maxLength);
            if (splitIndex === -1) {
                return { firstPart: part, remainingPart: '' };
            }
            return {
                firstPart: part.substring(0, splitIndex),
                remainingPart: part.substring(splitIndex + 1),
            };
        };

        if (addressParts.length > 0) {
            let part = addressParts.shift();
            const splitResult = splitAddressPart(part, 35);
            addressLine1 = splitResult.firstPart;
            if (splitResult.remainingPart) {
                addressParts.unshift(splitResult.remainingPart);
            }
        }

        if (addressParts.length > 0) {
            let part = addressParts.shift();
            const splitResult = splitAddressPart(part, 35);
            addressLine2 = splitResult.firstPart;
            if (splitResult.remainingPart) {
                addressParts.unshift(splitResult.remainingPart);
            }
        }

        if (addressParts.length > 0) {
            let part = addressParts.join(', ');
            const splitResult = splitAddressPart(part, 35);
            addressLine3 = splitResult.firstPart;
        }

        const newAttributes = {
            address2: addressLine1.trim(),
            locality: result.address.Locality || '',
            stateName: result.address.AdministrativeArea || '',
            postcode: result.address.PostalCode || '',
            country: result.address.Country || ''
        };

        updateAddressAttributes(newAttributes);

        const Cityid = manywho.model.getComponentByName('City', props.flowKey).id;
        const State = manywho.model.getComponentByName('State', props.flowKey).id;
        const PostalCode = manywho.model.getComponentByName('PostalCode', props.flowKey).id;
        const addressid = manywho.model.getComponentByName('AddressLine1', props.flowKey).id;
        const address2id = manywho.model.getComponentByName('AddressLine2', props.flowKey).id;
        const address3id = manywho.model.getComponentByName('AddressLine3', props.flowKey).id;

        manywho.state.setComponent(Cityid, { contentValue: newAttributes.locality }, props.flowKey, true);
        manywho.state.setComponent(State, { contentValue: newAttributes.stateName }, props.flowKey, true);
        manywho.state.setComponent(PostalCode, { contentValue: newAttributes.postcode }, props.flowKey, true);
        manywho.state.setComponent(addressid, { contentValue: addressLine1 }, props.flowKey, true);
        manywho.state.setComponent(address2id, { contentValue: addressLine2 }, props.flowKey, true);
        manywho.state.setComponent(address3id, { contentValue: addressLine3 }, props.flowKey, true);

        await manywho.engine.sync(props.flowKey);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            if (results.length > 0) {
                handlePlaceSelect(results[0]);
            }
        }
    };

   return React.createElement(
    'div',
    null,
    isReady
        ? React.createElement(
            'form',
            { id: 'address-form', action: '', method: 'get', autoComplete: 'off', onSubmit: handleFormSubmit },
            React.createElement('span', { className: 'form-label' }, 'Address Search'),
            React.createElement('input', {
                id: 'ship-address',
                name: 'ship-address',
                type: 'text',
                value: value,
                onChange: handleInputChange,
                onKeyPress: handleKeyPress,
                required: true,
                autoComplete: 'off',
                disabled: model.isEditable === false,
                style: {
                    background: '#FFFFFF',
                    border: '1px solid #D0D5DD',
                    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                    borderRadius: '8px',
                    maxWidth: '100%',
                    display: 'inline-block',
                    outline: 'none',
                    padding: '1px', // Added padding for input
                }
            }),
            errorMessage && React.createElement('p', { className: 'error-message' }, errorMessage),
            // Address suggestion container
            React.createElement('div', {
                id: 'results-container',
                style: {
                    maxHeight: '120px',  // Reduce height so scroll is always visible
                    overflowY: results.length > 0 ? 'auto' : 'hidden', // Show scroll only when results exist
                    border: results.length > 0 ? '1px solid #D0D5DD' : 'none',  // Show border only when there are results
                    marginTop: '10px',  // Space between input and results
                    background: '#fff',
                    borderRadius: '8px',
                    position: 'relative', // Ensure the container is positioned correctly
                    zIndex: 1000, // Ensure it stays above other content
                }
            },
                results.length > 0 && results.map((result, index) =>
                    React.createElement('div', {
                        key: index,
                        onClick: () => handlePlaceSelect(result),
                        style: {
                            padding: '8px',
                            cursor: 'pointer',
                            borderBottom: '1px solid #D0D5DD', // Line between suggestions
                        }
                    },
                        result.label
                    )
                )
            )
        )
        : React.createElement('div', null, 'Loading...'),
    );
}

manywho.component.register('melissaauto', melissaauto);