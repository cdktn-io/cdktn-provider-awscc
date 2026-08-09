# `dataAwsccCloudfrontConnectionFunction` Submodule <a name="`dataAwsccCloudfrontConnectionFunction` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudfrontConnectionFunction <a name="DataAwsccCloudfrontConnectionFunction" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudfront_connection_function awscc_cloudfront_connection_function}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.Initializer"></a>

```typescript
import { dataAwsccCloudfrontConnectionFunction } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction(scope: Construct, id: string, config: DataAwsccCloudfrontConnectionFunctionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConfig">DataAwsccCloudfrontConnectionFunctionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConfig">DataAwsccCloudfrontConnectionFunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudfrontConnectionFunction resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.isConstruct"></a>

```typescript
import { dataAwsccCloudfrontConnectionFunction } from '@cdktn/provider-awscc'

dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.isTerraformElement"></a>

```typescript
import { dataAwsccCloudfrontConnectionFunction } from '@cdktn/provider-awscc'

dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.isTerraformDataSource"></a>

```typescript
import { dataAwsccCloudfrontConnectionFunction } from '@cdktn/provider-awscc'

dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.generateConfigForImport"></a>

```typescript
import { dataAwsccCloudfrontConnectionFunction } from '@cdktn/provider-awscc'

dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccCloudfrontConnectionFunction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCloudfrontConnectionFunction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCloudfrontConnectionFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudfront_connection_function#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudfrontConnectionFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.autoPublish">autoPublish</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.connectionFunctionArn">connectionFunctionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.connectionFunctionCode">connectionFunctionCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.connectionFunctionConfig">connectionFunctionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference">DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.connectionFunctionId">connectionFunctionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.eTag">eTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.lastModifiedTime">lastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.stage">stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsList">DataAwsccCloudfrontConnectionFunctionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `autoPublish`<sup>Required</sup> <a name="autoPublish" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.autoPublish"></a>

```typescript
public readonly autoPublish: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `connectionFunctionArn`<sup>Required</sup> <a name="connectionFunctionArn" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.connectionFunctionArn"></a>

```typescript
public readonly connectionFunctionArn: string;
```

- *Type:* string

---

##### `connectionFunctionCode`<sup>Required</sup> <a name="connectionFunctionCode" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.connectionFunctionCode"></a>

```typescript
public readonly connectionFunctionCode: string;
```

- *Type:* string

---

##### `connectionFunctionConfig`<sup>Required</sup> <a name="connectionFunctionConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.connectionFunctionConfig"></a>

```typescript
public readonly connectionFunctionConfig: DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference">DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference</a>

---

##### `connectionFunctionId`<sup>Required</sup> <a name="connectionFunctionId" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.connectionFunctionId"></a>

```typescript
public readonly connectionFunctionId: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `eTag`<sup>Required</sup> <a name="eTag" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.eTag"></a>

```typescript
public readonly eTag: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.tags"></a>

```typescript
public readonly tags: DataAwsccCloudfrontConnectionFunctionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsList">DataAwsccCloudfrontConnectionFunctionTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunction.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudfrontConnectionFunctionConfig <a name="DataAwsccCloudfrontConnectionFunctionConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConfig.Initializer"></a>

```typescript
import { dataAwsccCloudfrontConnectionFunction } from '@cdktn/provider-awscc'

const dataAwsccCloudfrontConnectionFunctionConfig: dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudfront_connection_function#id DataAwsccCloudfrontConnectionFunction#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfig <a name="DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfig.Initializer"></a>

```typescript
import { dataAwsccCloudfrontConnectionFunction } from '@cdktn/provider-awscc'

const dataAwsccCloudfrontConnectionFunctionConnectionFunctionConfig: dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfig = { ... }
```


### DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations <a name="DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations.Initializer"></a>

```typescript
import { dataAwsccCloudfrontConnectionFunction } from '@cdktn/provider-awscc'

const dataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations: dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations = { ... }
```


### DataAwsccCloudfrontConnectionFunctionTags <a name="DataAwsccCloudfrontConnectionFunctionTags" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTags.Initializer"></a>

```typescript
import { dataAwsccCloudfrontConnectionFunction } from '@cdktn/provider-awscc'

const dataAwsccCloudfrontConnectionFunctionTags: dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList <a name="DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.Initializer"></a>

```typescript
import { dataAwsccCloudfrontConnectionFunction } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.get"></a>

```typescript
public get(index: number): DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference <a name="DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudfrontConnectionFunction } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.property.keyValueStoreArn">keyValueStoreArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations">DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyValueStoreArn`<sup>Required</sup> <a name="keyValueStoreArn" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.property.keyValueStoreArn"></a>

```typescript
public readonly keyValueStoreArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations">DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations</a>

---


### DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference <a name="DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudfrontConnectionFunction } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.keyValueStoreAssociations">keyValueStoreAssociations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList">DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.runtime">runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfig">DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `keyValueStoreAssociations`<sup>Required</sup> <a name="keyValueStoreAssociations" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.keyValueStoreAssociations"></a>

```typescript
public readonly keyValueStoreAssociations: DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList">DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList</a>

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfig">DataAwsccCloudfrontConnectionFunctionConnectionFunctionConfig</a>

---


### DataAwsccCloudfrontConnectionFunctionTagsList <a name="DataAwsccCloudfrontConnectionFunctionTagsList" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsList.Initializer"></a>

```typescript
import { dataAwsccCloudfrontConnectionFunction } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsList.get"></a>

```typescript
public get(index: number): DataAwsccCloudfrontConnectionFunctionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCloudfrontConnectionFunctionTagsOutputReference <a name="DataAwsccCloudfrontConnectionFunctionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudfrontConnectionFunction } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTags">DataAwsccCloudfrontConnectionFunctionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudfrontConnectionFunctionTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontConnectionFunction.DataAwsccCloudfrontConnectionFunctionTags">DataAwsccCloudfrontConnectionFunctionTags</a>

---



