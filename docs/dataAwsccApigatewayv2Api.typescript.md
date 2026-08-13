# `dataAwsccApigatewayv2Api` Submodule <a name="`dataAwsccApigatewayv2Api` Submodule" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApigatewayv2Api <a name="DataAwsccApigatewayv2Api" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/apigatewayv2_api awscc_apigatewayv2_api}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.Initializer"></a>

```typescript
import { dataAwsccApigatewayv2Api } from '@cdktn/provider-awscc'

new dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api(scope: Construct, id: string, config: DataAwsccApigatewayv2ApiConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig">DataAwsccApigatewayv2ApiConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig">DataAwsccApigatewayv2ApiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccApigatewayv2Api resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.isConstruct"></a>

```typescript
import { dataAwsccApigatewayv2Api } from '@cdktn/provider-awscc'

dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.isTerraformElement"></a>

```typescript
import { dataAwsccApigatewayv2Api } from '@cdktn/provider-awscc'

dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.isTerraformDataSource"></a>

```typescript
import { dataAwsccApigatewayv2Api } from '@cdktn/provider-awscc'

dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.generateConfigForImport"></a>

```typescript
import { dataAwsccApigatewayv2Api } from '@cdktn/provider-awscc'

dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccApigatewayv2Api resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccApigatewayv2Api to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccApigatewayv2Api that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/apigatewayv2_api#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApigatewayv2Api to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.apiEndpoint">apiEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.apiId">apiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.apiKeySelectionExpression">apiKeySelectionExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.basePath">basePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.bodyS3Location">bodyS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference">DataAwsccApigatewayv2ApiBodyS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.corsConfiguration">corsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference">DataAwsccApigatewayv2ApiCorsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.credentialsArn">credentialsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.disableExecuteApiEndpoint">disableExecuteApiEndpoint</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.disableSchemaValidation">disableSchemaValidation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.failOnWarnings">failOnWarnings</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.protocolType">protocolType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.routeKey">routeKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.routeSelectionExpression">routeSelectionExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `apiEndpoint`<sup>Required</sup> <a name="apiEndpoint" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.apiEndpoint"></a>

```typescript
public readonly apiEndpoint: string;
```

- *Type:* string

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

---

##### `apiKeySelectionExpression`<sup>Required</sup> <a name="apiKeySelectionExpression" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.apiKeySelectionExpression"></a>

```typescript
public readonly apiKeySelectionExpression: string;
```

- *Type:* string

---

##### `basePath`<sup>Required</sup> <a name="basePath" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.basePath"></a>

```typescript
public readonly basePath: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `bodyS3Location`<sup>Required</sup> <a name="bodyS3Location" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.bodyS3Location"></a>

```typescript
public readonly bodyS3Location: DataAwsccApigatewayv2ApiBodyS3LocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference">DataAwsccApigatewayv2ApiBodyS3LocationOutputReference</a>

---

##### `corsConfiguration`<sup>Required</sup> <a name="corsConfiguration" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.corsConfiguration"></a>

```typescript
public readonly corsConfiguration: DataAwsccApigatewayv2ApiCorsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference">DataAwsccApigatewayv2ApiCorsConfigurationOutputReference</a>

---

##### `credentialsArn`<sup>Required</sup> <a name="credentialsArn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.credentialsArn"></a>

```typescript
public readonly credentialsArn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableExecuteApiEndpoint`<sup>Required</sup> <a name="disableExecuteApiEndpoint" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.disableExecuteApiEndpoint"></a>

```typescript
public readonly disableExecuteApiEndpoint: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `disableSchemaValidation`<sup>Required</sup> <a name="disableSchemaValidation" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.disableSchemaValidation"></a>

```typescript
public readonly disableSchemaValidation: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `failOnWarnings`<sup>Required</sup> <a name="failOnWarnings" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.failOnWarnings"></a>

```typescript
public readonly failOnWarnings: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protocolType`<sup>Required</sup> <a name="protocolType" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.protocolType"></a>

```typescript
public readonly protocolType: string;
```

- *Type:* string

---

##### `routeKey`<sup>Required</sup> <a name="routeKey" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.routeKey"></a>

```typescript
public readonly routeKey: string;
```

- *Type:* string

---

##### `routeSelectionExpression`<sup>Required</sup> <a name="routeSelectionExpression" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.routeSelectionExpression"></a>

```typescript
public readonly routeSelectionExpression: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2Api.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApigatewayv2ApiBodyS3Location <a name="DataAwsccApigatewayv2ApiBodyS3Location" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3Location.Initializer"></a>

```typescript
import { dataAwsccApigatewayv2Api } from '@cdktn/provider-awscc'

const dataAwsccApigatewayv2ApiBodyS3Location: dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3Location = { ... }
```


### DataAwsccApigatewayv2ApiConfig <a name="DataAwsccApigatewayv2ApiConfig" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig.Initializer"></a>

```typescript
import { dataAwsccApigatewayv2Api } from '@cdktn/provider-awscc'

const dataAwsccApigatewayv2ApiConfig: dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/apigatewayv2_api#id DataAwsccApigatewayv2Api#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApigatewayv2ApiCorsConfiguration <a name="DataAwsccApigatewayv2ApiCorsConfiguration" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfiguration.Initializer"></a>

```typescript
import { dataAwsccApigatewayv2Api } from '@cdktn/provider-awscc'

const dataAwsccApigatewayv2ApiCorsConfiguration: dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfiguration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApigatewayv2ApiBodyS3LocationOutputReference <a name="DataAwsccApigatewayv2ApiBodyS3LocationOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.Initializer"></a>

```typescript
import { dataAwsccApigatewayv2Api } from '@cdktn/provider-awscc'

new dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3Location">DataAwsccApigatewayv2ApiBodyS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3LocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApigatewayv2ApiBodyS3Location;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiBodyS3Location">DataAwsccApigatewayv2ApiBodyS3Location</a>

---


### DataAwsccApigatewayv2ApiCorsConfigurationOutputReference <a name="DataAwsccApigatewayv2ApiCorsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccApigatewayv2Api } from '@cdktn/provider-awscc'

new dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.property.allowCredentials">allowCredentials</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.property.allowHeaders">allowHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.property.allowMethods">allowMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.property.allowOrigins">allowOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.property.exposeHeaders">exposeHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.property.maxAge">maxAge</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfiguration">DataAwsccApigatewayv2ApiCorsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowCredentials`<sup>Required</sup> <a name="allowCredentials" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.property.allowCredentials"></a>

```typescript
public readonly allowCredentials: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `allowHeaders`<sup>Required</sup> <a name="allowHeaders" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.property.allowHeaders"></a>

```typescript
public readonly allowHeaders: string[];
```

- *Type:* string[]

---

##### `allowMethods`<sup>Required</sup> <a name="allowMethods" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.property.allowMethods"></a>

```typescript
public readonly allowMethods: string[];
```

- *Type:* string[]

---

##### `allowOrigins`<sup>Required</sup> <a name="allowOrigins" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.property.allowOrigins"></a>

```typescript
public readonly allowOrigins: string[];
```

- *Type:* string[]

---

##### `exposeHeaders`<sup>Required</sup> <a name="exposeHeaders" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.property.exposeHeaders"></a>

```typescript
public readonly exposeHeaders: string[];
```

- *Type:* string[]

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.property.maxAge"></a>

```typescript
public readonly maxAge: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApigatewayv2ApiCorsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Api.DataAwsccApigatewayv2ApiCorsConfiguration">DataAwsccApigatewayv2ApiCorsConfiguration</a>

---



