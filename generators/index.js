module.exports = (plop) => {
  // component
  const stylesPath = (entity) => `../src/${entity}s/{{ name }}/styles.module.scss`;
  const mocksPath = (entity) => `../src/${entity}s/{{ name }}/{{ name }}.mock.tsx`;
  const testPath = (entity) => `../src/${entity}s/{{ name }}/{{ name }}.test.tsx`;
  const componentPath = (entity) => `../src/${entity}s/{{ name }}/{{ name }}.tsx`;
  const storiesPath = (entity) => `../src/${entity}s/{{ name }}/{{ name }}.stories.tsx`;
  const indexPath = (entity) => `../src/${entity}s/{{ name }}/index.tsx`;

  plop.setGenerator('component', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: stylesPath('component'),
        templateFile: 'templates/components/styles.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: storiesPath('component'),
        templateFile: 'templates/components/stories.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: componentPath('component'),
        templateFile: 'templates/components/component.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: indexPath('component'),
        templateFile: 'templates/components/index.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: testPath('component'),
        templateFile: 'templates/components/test.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: mocksPath('component'),
        templateFile: 'templates/components/mock.hbs',
        abortOnFail: true,
      },
    ],
  });

  // reducer
  const reducerPath = (reducerName) => `../src/store/${reducerName}/reducer.ts`;
  const selectorPath = (reducerName) => `../src/store/${reducerName}/selectors.ts`;
  const actionsPath = (reducerName) => `../src/store/${reducerName}/actions.ts`;
  const actionTypesPath = (reducerName) => `../src/store/${reducerName}/actionTypes.ts`;
  const sagaPath = (reducerName) => `../src/store/${reducerName}/sagas/exampleSaga.ts`;
  const sagasIndexPath = (reducerName) => `../src/store/${reducerName}/sagas/index.ts`;
  const reducerTypePath = (reducerName) => `../src/types/store/${reducerName}.ts`;
  const storeTypesPath = '../src/types/store/index.ts';


  plop.setGenerator('reducer', {
    prompts: [
      {
        type: 'input',
        name: 'reducerName',
        message: 'Reducer name please',
      },
    ],
		actions: function(data) {
			let actions = [];

			actions.push({
				type: 'add',
				path: reducerPath(data.reducerName),
				templateFile: 'templates/reducer/reducer.hbs',
        abortOnFail: true,
			});

      actions.push({
				type: 'add',
				path: reducerTypePath(data.reducerName),
				templateFile: 'templates/reducer/reducerType.hbs',
        abortOnFail: true,
			});

      actions.push({
				type: 'add',
				path: selectorPath(data.reducerName),
				templateFile: 'templates/reducer/selectors.hbs',
        abortOnFail: true,
			});

      actions.push({
				type: 'add',
				path: actionsPath(data.reducerName),
				templateFile: 'templates/reducer/actions.hbs',
        abortOnFail: true,
			});

      actions.push({
				type: 'add',
				path: actionTypesPath(data.reducerName),
				templateFile: 'templates/reducer/actionTypes.hbs',
        abortOnFail: true,
			});    
       
      actions.push({
				type: 'add',
				path: sagaPath(data.reducerName),
				templateFile: 'templates/reducer/saga.hbs',
        abortOnFail: true,
			});     
      
      actions.push({
				type: 'add',
				path: sagasIndexPath(data.reducerName),
				templateFile: 'templates/reducer/sagasIndex.hbs',
        abortOnFail: true,
			});
      
      actions.push({
        type: 'append',
        path: storeTypesPath,
        pattern: `/* PLOP_INJECT_IMPORT_STATE */`,
        template: `import { {{ properCase reducerName }}State } from './{{ camelCase reducerName }}';`,
      });

      actions.push({
        type: 'append',
        path: storeTypesPath,
        pattern: `/* PLOP_INJECT_IMPORT_TYPES */`,
        template: `export * from './{{ camelCase reducerName }}';`,
      });

      actions.push({
        type: 'append',
        path: storeTypesPath,
        pattern: `/* PLOP_INJECT_MODIFY_STATE */`,
        template: `  {{ camelCase reducerName }}: {{ properCase reducerName }}State;`,
      });

			return actions;
		}
  });
};
