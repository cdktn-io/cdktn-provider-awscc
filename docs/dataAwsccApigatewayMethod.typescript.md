# `dataAwsccApigatewayMethod` Submodule <a name="`dataAwsccApigatewayMethod` Submodule" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApigatewayMethod <a name="DataAwsccApigatewayMethod" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/apigateway_method awscc_apigateway_method}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.Initializer"></a>

```typescript
import { dataAwsccApigatewayMethod } from '@cdktn/provider-awscc'

new dataAwsccApigatewayMethod.DataAwsccApigatewayMethod(scope: Construct, id: string, config: DataAwsccApigatewayMethodConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig">DataAwsccApigatewayMethodConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig">DataAwsccApigatewayMethodConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccApigatewayMethod resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.isConstruct"></a>

```typescript
import { dataAwsccApigatewayMethod } from '@cdktn/provider-awscc'

dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.isTerraformElement"></a>

```typescript
import { dataAwsccApigatewayMethod } from '@cdktn/provider-awscc'

dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.isTerraformDataSource"></a>

```typescript
import { dataAwsccApigatewayMethod } from '@cdktn/provider-awscc'

dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.generateConfigForImport"></a>

```typescript
import { dataAwsccApigatewayMethod } from '@cdktn/provider-awscc'

dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccApigatewayMethod resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccApigatewayMethod to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccApigatewayMethod that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/apigateway_method#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApigatewayMethod to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.apiKeyRequired">apiKeyRequired</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.authorizationScopes">authorizationScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.authorizationType">authorizationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.authorizerId">authorizerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.httpMethod">httpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.integration">integration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference">DataAwsccApigatewayMethodIntegrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.methodResponses">methodResponses</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList">DataAwsccApigatewayMethodMethodResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.operationName">operationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.requestModels">requestModels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.requestParameters">requestParameters</a></code> | <code>cdktn.BooleanMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.requestValidatorId">requestValidatorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.restApiId">restApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `apiKeyRequired`<sup>Required</sup> <a name="apiKeyRequired" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.apiKeyRequired"></a>

```typescript
public readonly apiKeyRequired: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `authorizationScopes`<sup>Required</sup> <a name="authorizationScopes" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.authorizationScopes"></a>

```typescript
public readonly authorizationScopes: string[];
```

- *Type:* string[]

---

##### `authorizationType`<sup>Required</sup> <a name="authorizationType" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.authorizationType"></a>

```typescript
public readonly authorizationType: string;
```

- *Type:* string

---

##### `authorizerId`<sup>Required</sup> <a name="authorizerId" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.authorizerId"></a>

```typescript
public readonly authorizerId: string;
```

- *Type:* string

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.integration"></a>

```typescript
public readonly integration: DataAwsccApigatewayMethodIntegrationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference">DataAwsccApigatewayMethodIntegrationOutputReference</a>

---

##### `methodResponses`<sup>Required</sup> <a name="methodResponses" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.methodResponses"></a>

```typescript
public readonly methodResponses: DataAwsccApigatewayMethodMethodResponsesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList">DataAwsccApigatewayMethodMethodResponsesList</a>

---

##### `operationName`<sup>Required</sup> <a name="operationName" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.operationName"></a>

```typescript
public readonly operationName: string;
```

- *Type:* string

---

##### `requestModels`<sup>Required</sup> <a name="requestModels" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.requestModels"></a>

```typescript
public readonly requestModels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `requestParameters`<sup>Required</sup> <a name="requestParameters" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.requestParameters"></a>

```typescript
public readonly requestParameters: BooleanMap;
```

- *Type:* cdktn.BooleanMap

---

##### `requestValidatorId`<sup>Required</sup> <a name="requestValidatorId" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.requestValidatorId"></a>

```typescript
public readonly requestValidatorId: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApigatewayMethodConfig <a name="DataAwsccApigatewayMethodConfig" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig.Initializer"></a>

```typescript
import { dataAwsccApigatewayMethod } from '@cdktn/provider-awscc'

const dataAwsccApigatewayMethodConfig: dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/apigateway_method#id DataAwsccApigatewayMethod#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApigatewayMethodIntegration <a name="DataAwsccApigatewayMethodIntegration" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegration.Initializer"></a>

```typescript
import { dataAwsccApigatewayMethod } from '@cdktn/provider-awscc'

const dataAwsccApigatewayMethodIntegration: dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegration = { ... }
```


### DataAwsccApigatewayMethodIntegrationIntegrationResponses <a name="DataAwsccApigatewayMethodIntegrationIntegrationResponses" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponses.Initializer"></a>

```typescript
import { dataAwsccApigatewayMethod } from '@cdktn/provider-awscc'

const dataAwsccApigatewayMethodIntegrationIntegrationResponses: dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponses = { ... }
```


### DataAwsccApigatewayMethodMethodResponses <a name="DataAwsccApigatewayMethodMethodResponses" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponses.Initializer"></a>

```typescript
import { dataAwsccApigatewayMethod } from '@cdktn/provider-awscc'

const dataAwsccApigatewayMethodMethodResponses: dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponses = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApigatewayMethodIntegrationIntegrationResponsesList <a name="DataAwsccApigatewayMethodIntegrationIntegrationResponsesList" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.Initializer"></a>

```typescript
import { dataAwsccApigatewayMethod } from '@cdktn/provider-awscc'

new dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.get"></a>

```typescript
public get(index: number): DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference <a name="DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer"></a>

```typescript
import { dataAwsccApigatewayMethod } from '@cdktn/provider-awscc'

new dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.contentHandling">contentHandling</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseParameters">responseParameters</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseTemplates">responseTemplates</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.selectionPattern">selectionPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.statusCode">statusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponses">DataAwsccApigatewayMethodIntegrationIntegrationResponses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentHandling`<sup>Required</sup> <a name="contentHandling" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.contentHandling"></a>

```typescript
public readonly contentHandling: string;
```

- *Type:* string

---

##### `responseParameters`<sup>Required</sup> <a name="responseParameters" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseParameters"></a>

```typescript
public readonly responseParameters: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `responseTemplates`<sup>Required</sup> <a name="responseTemplates" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseTemplates"></a>

```typescript
public readonly responseTemplates: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `selectionPattern`<sup>Required</sup> <a name="selectionPattern" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.selectionPattern"></a>

```typescript
public readonly selectionPattern: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApigatewayMethodIntegrationIntegrationResponses;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponses">DataAwsccApigatewayMethodIntegrationIntegrationResponses</a>

---


### DataAwsccApigatewayMethodIntegrationOutputReference <a name="DataAwsccApigatewayMethodIntegrationOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.Initializer"></a>

```typescript
import { dataAwsccApigatewayMethod } from '@cdktn/provider-awscc'

new dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.cacheKeyParameters">cacheKeyParameters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.cacheNamespace">cacheNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.connectionType">connectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.contentHandling">contentHandling</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.credentials">credentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.integrationHttpMethod">integrationHttpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.integrationResponses">integrationResponses</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList">DataAwsccApigatewayMethodIntegrationIntegrationResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.integrationTarget">integrationTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.passthroughBehavior">passthroughBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.requestParameters">requestParameters</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.requestTemplates">requestTemplates</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.responseTransferMode">responseTransferMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.timeoutInMillis">timeoutInMillis</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegration">DataAwsccApigatewayMethodIntegration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cacheKeyParameters`<sup>Required</sup> <a name="cacheKeyParameters" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.cacheKeyParameters"></a>

```typescript
public readonly cacheKeyParameters: string[];
```

- *Type:* string[]

---

##### `cacheNamespace`<sup>Required</sup> <a name="cacheNamespace" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.cacheNamespace"></a>

```typescript
public readonly cacheNamespace: string;
```

- *Type:* string

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

---

##### `contentHandling`<sup>Required</sup> <a name="contentHandling" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.contentHandling"></a>

```typescript
public readonly contentHandling: string;
```

- *Type:* string

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.credentials"></a>

```typescript
public readonly credentials: string;
```

- *Type:* string

---

##### `integrationHttpMethod`<sup>Required</sup> <a name="integrationHttpMethod" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.integrationHttpMethod"></a>

```typescript
public readonly integrationHttpMethod: string;
```

- *Type:* string

---

##### `integrationResponses`<sup>Required</sup> <a name="integrationResponses" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.integrationResponses"></a>

```typescript
public readonly integrationResponses: DataAwsccApigatewayMethodIntegrationIntegrationResponsesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList">DataAwsccApigatewayMethodIntegrationIntegrationResponsesList</a>

---

##### `integrationTarget`<sup>Required</sup> <a name="integrationTarget" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.integrationTarget"></a>

```typescript
public readonly integrationTarget: string;
```

- *Type:* string

---

##### `passthroughBehavior`<sup>Required</sup> <a name="passthroughBehavior" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.passthroughBehavior"></a>

```typescript
public readonly passthroughBehavior: string;
```

- *Type:* string

---

##### `requestParameters`<sup>Required</sup> <a name="requestParameters" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.requestParameters"></a>

```typescript
public readonly requestParameters: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `requestTemplates`<sup>Required</sup> <a name="requestTemplates" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.requestTemplates"></a>

```typescript
public readonly requestTemplates: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `responseTransferMode`<sup>Required</sup> <a name="responseTransferMode" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.responseTransferMode"></a>

```typescript
public readonly responseTransferMode: string;
```

- *Type:* string

---

##### `timeoutInMillis`<sup>Required</sup> <a name="timeoutInMillis" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.timeoutInMillis"></a>

```typescript
public readonly timeoutInMillis: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApigatewayMethodIntegration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegration">DataAwsccApigatewayMethodIntegration</a>

---


### DataAwsccApigatewayMethodMethodResponsesList <a name="DataAwsccApigatewayMethodMethodResponsesList" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.Initializer"></a>

```typescript
import { dataAwsccApigatewayMethod } from '@cdktn/provider-awscc'

new dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.get"></a>

```typescript
public get(index: number): DataAwsccApigatewayMethodMethodResponsesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccApigatewayMethodMethodResponsesOutputReference <a name="DataAwsccApigatewayMethodMethodResponsesOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.Initializer"></a>

```typescript
import { dataAwsccApigatewayMethod } from '@cdktn/provider-awscc'

new dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.property.responseModels">responseModels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.property.responseParameters">responseParameters</a></code> | <code>cdktn.BooleanMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.property.statusCode">statusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponses">DataAwsccApigatewayMethodMethodResponses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `responseModels`<sup>Required</sup> <a name="responseModels" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.property.responseModels"></a>

```typescript
public readonly responseModels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `responseParameters`<sup>Required</sup> <a name="responseParameters" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.property.responseParameters"></a>

```typescript
public readonly responseParameters: BooleanMap;
```

- *Type:* cdktn.BooleanMap

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApigatewayMethodMethodResponses;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponses">DataAwsccApigatewayMethodMethodResponses</a>

---



