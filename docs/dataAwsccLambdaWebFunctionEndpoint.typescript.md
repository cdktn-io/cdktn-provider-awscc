# `dataAwsccLambdaWebFunctionEndpoint` Submodule <a name="`dataAwsccLambdaWebFunctionEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLambdaWebFunctionEndpoint <a name="DataAwsccLambdaWebFunctionEndpoint" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/lambda_web_function_endpoint awscc_lambda_web_function_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.Initializer"></a>

```typescript
import { dataAwsccLambdaWebFunctionEndpoint } from '@cdktn/provider-awscc'

new dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint(scope: Construct, id: string, config: DataAwsccLambdaWebFunctionEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig">DataAwsccLambdaWebFunctionEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig">DataAwsccLambdaWebFunctionEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLambdaWebFunctionEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.isConstruct"></a>

```typescript
import { dataAwsccLambdaWebFunctionEndpoint } from '@cdktn/provider-awscc'

dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.isTerraformElement"></a>

```typescript
import { dataAwsccLambdaWebFunctionEndpoint } from '@cdktn/provider-awscc'

dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.isTerraformDataSource"></a>

```typescript
import { dataAwsccLambdaWebFunctionEndpoint } from '@cdktn/provider-awscc'

dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.generateConfigForImport"></a>

```typescript
import { dataAwsccLambdaWebFunctionEndpoint } from '@cdktn/provider-awscc'

dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccLambdaWebFunctionEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccLambdaWebFunctionEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccLambdaWebFunctionEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/lambda_web_function_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLambdaWebFunctionEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.endpointArn">endpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.endpointName">endpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.endpointType">endpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.functionArn">functionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.regionalEndpoints">regionalEndpoints</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap">DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.revisionWeights">revisionWeights</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList">DataAwsccLambdaWebFunctionEndpointRevisionWeightsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.scalingConfig">scalingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference">DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.stateReason">stateReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.throttleConfig">throttleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference">DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.updateStatus">updateStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.updateStatusReason">updateStatusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `endpointArn`<sup>Required</sup> <a name="endpointArn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.endpointArn"></a>

```typescript
public readonly endpointArn: string;
```

- *Type:* string

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `regionalEndpoints`<sup>Required</sup> <a name="regionalEndpoints" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.regionalEndpoints"></a>

```typescript
public readonly regionalEndpoints: DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap">DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap</a>

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `revisionWeights`<sup>Required</sup> <a name="revisionWeights" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.revisionWeights"></a>

```typescript
public readonly revisionWeights: DataAwsccLambdaWebFunctionEndpointRevisionWeightsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList">DataAwsccLambdaWebFunctionEndpointRevisionWeightsList</a>

---

##### `scalingConfig`<sup>Required</sup> <a name="scalingConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.scalingConfig"></a>

```typescript
public readonly scalingConfig: DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference">DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateReason`<sup>Required</sup> <a name="stateReason" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.stateReason"></a>

```typescript
public readonly stateReason: string;
```

- *Type:* string

---

##### `throttleConfig`<sup>Required</sup> <a name="throttleConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.throttleConfig"></a>

```typescript
public readonly throttleConfig: DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference">DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `updateStatus`<sup>Required</sup> <a name="updateStatus" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.updateStatus"></a>

```typescript
public readonly updateStatus: string;
```

- *Type:* string

---

##### `updateStatusReason`<sup>Required</sup> <a name="updateStatusReason" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.updateStatusReason"></a>

```typescript
public readonly updateStatusReason: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLambdaWebFunctionEndpointConfig <a name="DataAwsccLambdaWebFunctionEndpointConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaWebFunctionEndpoint } from '@cdktn/provider-awscc'

const dataAwsccLambdaWebFunctionEndpointConfig: dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/lambda_web_function_endpoint#id DataAwsccLambdaWebFunctionEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLambdaWebFunctionEndpointRegionalEndpoints <a name="DataAwsccLambdaWebFunctionEndpointRegionalEndpoints" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpoints.Initializer"></a>

```typescript
import { dataAwsccLambdaWebFunctionEndpoint } from '@cdktn/provider-awscc'

const dataAwsccLambdaWebFunctionEndpointRegionalEndpoints: dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpoints = { ... }
```


### DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeights <a name="DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeights" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeights.Initializer"></a>

```typescript
import { dataAwsccLambdaWebFunctionEndpoint } from '@cdktn/provider-awscc'

const dataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeights: dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeights = { ... }
```


### DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfig <a name="DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaWebFunctionEndpoint } from '@cdktn/provider-awscc'

const dataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfig: dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfig = { ... }
```


### DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfig <a name="DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaWebFunctionEndpoint } from '@cdktn/provider-awscc'

const dataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfig: dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfig = { ... }
```


### DataAwsccLambdaWebFunctionEndpointRevisionWeights <a name="DataAwsccLambdaWebFunctionEndpointRevisionWeights" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeights.Initializer"></a>

```typescript
import { dataAwsccLambdaWebFunctionEndpoint } from '@cdktn/provider-awscc'

const dataAwsccLambdaWebFunctionEndpointRevisionWeights: dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeights = { ... }
```


### DataAwsccLambdaWebFunctionEndpointScalingConfig <a name="DataAwsccLambdaWebFunctionEndpointScalingConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaWebFunctionEndpoint } from '@cdktn/provider-awscc'

const dataAwsccLambdaWebFunctionEndpointScalingConfig: dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfig = { ... }
```


### DataAwsccLambdaWebFunctionEndpointThrottleConfig <a name="DataAwsccLambdaWebFunctionEndpointThrottleConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaWebFunctionEndpoint } from '@cdktn/provider-awscc'

const dataAwsccLambdaWebFunctionEndpointThrottleConfig: dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap <a name="DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.Initializer"></a>

```typescript
import { dataAwsccLambdaWebFunctionEndpoint } from '@cdktn/provider-awscc'

new dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.get"></a>

```typescript
public get(key: string): DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference <a name="DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaWebFunctionEndpoint } from '@cdktn/provider-awscc'

new dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.revisionWeights">revisionWeights</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList">DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.scalingConfig">scalingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference">DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.stateReason">stateReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.throttleConfig">throttleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference">DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.updateStatus">updateStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.updateStatusReason">updateStatusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpoints">DataAwsccLambdaWebFunctionEndpointRegionalEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `revisionWeights`<sup>Required</sup> <a name="revisionWeights" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.revisionWeights"></a>

```typescript
public readonly revisionWeights: DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList">DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList</a>

---

##### `scalingConfig`<sup>Required</sup> <a name="scalingConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.scalingConfig"></a>

```typescript
public readonly scalingConfig: DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference">DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateReason`<sup>Required</sup> <a name="stateReason" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.stateReason"></a>

```typescript
public readonly stateReason: string;
```

- *Type:* string

---

##### `throttleConfig`<sup>Required</sup> <a name="throttleConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.throttleConfig"></a>

```typescript
public readonly throttleConfig: DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference">DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference</a>

---

##### `updateStatus`<sup>Required</sup> <a name="updateStatus" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.updateStatus"></a>

```typescript
public readonly updateStatus: string;
```

- *Type:* string

---

##### `updateStatusReason`<sup>Required</sup> <a name="updateStatusReason" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.updateStatusReason"></a>

```typescript
public readonly updateStatusReason: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaWebFunctionEndpointRegionalEndpoints;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpoints">DataAwsccLambdaWebFunctionEndpointRegionalEndpoints</a>

---


### DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList <a name="DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.Initializer"></a>

```typescript
import { dataAwsccLambdaWebFunctionEndpoint } from '@cdktn/provider-awscc'

new dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.get"></a>

```typescript
public get(index: number): DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference <a name="DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaWebFunctionEndpoint } from '@cdktn/provider-awscc'

new dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.revisionId">revisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeights">DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeights</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `revisionId`<sup>Required</sup> <a name="revisionId" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.revisionId"></a>

```typescript
public readonly revisionId: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeights;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeights">DataAwsccLambdaWebFunctionEndpointRegionalEndpointsRevisionWeights</a>

---


### DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference <a name="DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaWebFunctionEndpoint } from '@cdktn/provider-awscc'

new dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.maxEnvironments">maxEnvironments</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfig">DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxEnvironments`<sup>Required</sup> <a name="maxEnvironments" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.maxEnvironments"></a>

```typescript
public readonly maxEnvironments: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfig">DataAwsccLambdaWebFunctionEndpointRegionalEndpointsScalingConfig</a>

---


### DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference <a name="DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaWebFunctionEndpoint } from '@cdktn/provider-awscc'

new dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.rateLimit">rateLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfig">DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.rateLimit"></a>

```typescript
public readonly rateLimit: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfig">DataAwsccLambdaWebFunctionEndpointRegionalEndpointsThrottleConfig</a>

---


### DataAwsccLambdaWebFunctionEndpointRevisionWeightsList <a name="DataAwsccLambdaWebFunctionEndpointRevisionWeightsList" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.Initializer"></a>

```typescript
import { dataAwsccLambdaWebFunctionEndpoint } from '@cdktn/provider-awscc'

new dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.get"></a>

```typescript
public get(index: number): DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference <a name="DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaWebFunctionEndpoint } from '@cdktn/provider-awscc'

new dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.property.revisionId">revisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeights">DataAwsccLambdaWebFunctionEndpointRevisionWeights</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `revisionId`<sup>Required</sup> <a name="revisionId" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.property.revisionId"></a>

```typescript
public readonly revisionId: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeightsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaWebFunctionEndpointRevisionWeights;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointRevisionWeights">DataAwsccLambdaWebFunctionEndpointRevisionWeights</a>

---


### DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference <a name="DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaWebFunctionEndpoint } from '@cdktn/provider-awscc'

new dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.property.maxEnvironments">maxEnvironments</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfig">DataAwsccLambdaWebFunctionEndpointScalingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxEnvironments`<sup>Required</sup> <a name="maxEnvironments" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.property.maxEnvironments"></a>

```typescript
public readonly maxEnvironments: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaWebFunctionEndpointScalingConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointScalingConfig">DataAwsccLambdaWebFunctionEndpointScalingConfig</a>

---


### DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference <a name="DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaWebFunctionEndpoint } from '@cdktn/provider-awscc'

new dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.property.rateLimit">rateLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfig">DataAwsccLambdaWebFunctionEndpointThrottleConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.property.rateLimit"></a>

```typescript
public readonly rateLimit: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaWebFunctionEndpointThrottleConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionEndpoint.DataAwsccLambdaWebFunctionEndpointThrottleConfig">DataAwsccLambdaWebFunctionEndpointThrottleConfig</a>

---



