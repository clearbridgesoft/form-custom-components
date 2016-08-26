# form-custom-components
* Form custom fields and widgets


** To start the project
```
git clone https://github.com/clearbridgesoft/form-custom-components.git
cd form-custom-components
npm install
```

** To run the webpack-dev-server
```
npm run start
```

** To build the npm package
```
npm run dist
npm pack
```

** To install the package
```
npm install -save https://github.com/clearbridgesoft/form-custom-components/releases/download/v0.0.0/form-custom-components-0.0.0.tgz
```

** Example
```
import Form from 'react-jsonschema-form';
import custom from 'form-custom-compoments';
...
return (<Form schema={{type:'string'}} uiSchema={{'ui:widget':'wysiwyg'}} widgets={custom.widgets} fields={custom.fields} />);
```

* Limitations
  - the dev-server app is incomplete
