# `dataAwsccIotsitewiseAssetModel` Submodule <a name="`dataAwsccIotsitewiseAssetModel` Submodule" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotsitewiseAssetModel <a name="DataAwsccIotsitewiseAssetModel" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iotsitewise_asset_model awscc_iotsitewise_asset_model}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel(scope: Construct, id: string, config: DataAwsccIotsitewiseAssetModelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig">DataAwsccIotsitewiseAssetModelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig">DataAwsccIotsitewiseAssetModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotsitewiseAssetModel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.isConstruct"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.isTerraformElement"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.isTerraformDataSource"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.generateConfigForImport"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccIotsitewiseAssetModel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccIotsitewiseAssetModel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccIotsitewiseAssetModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iotsitewise_asset_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotsitewiseAssetModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.assetModelArn">assetModelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.assetModelCompositeModels">assetModelCompositeModels</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.assetModelDescription">assetModelDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.assetModelExternalId">assetModelExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.assetModelHierarchies">assetModelHierarchies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList">DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.assetModelId">assetModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.assetModelName">assetModelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.assetModelProperties">assetModelProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList">DataAwsccIotsitewiseAssetModelAssetModelPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.assetModelType">assetModelType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.enforcedAssetModelInterfaceRelationships">enforcedAssetModelInterfaceRelationships</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList">DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList">DataAwsccIotsitewiseAssetModelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `assetModelArn`<sup>Required</sup> <a name="assetModelArn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.assetModelArn"></a>

```typescript
public readonly assetModelArn: string;
```

- *Type:* string

---

##### `assetModelCompositeModels`<sup>Required</sup> <a name="assetModelCompositeModels" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.assetModelCompositeModels"></a>

```typescript
public readonly assetModelCompositeModels: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList</a>

---

##### `assetModelDescription`<sup>Required</sup> <a name="assetModelDescription" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.assetModelDescription"></a>

```typescript
public readonly assetModelDescription: string;
```

- *Type:* string

---

##### `assetModelExternalId`<sup>Required</sup> <a name="assetModelExternalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.assetModelExternalId"></a>

```typescript
public readonly assetModelExternalId: string;
```

- *Type:* string

---

##### `assetModelHierarchies`<sup>Required</sup> <a name="assetModelHierarchies" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.assetModelHierarchies"></a>

```typescript
public readonly assetModelHierarchies: DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList">DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList</a>

---

##### `assetModelId`<sup>Required</sup> <a name="assetModelId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.assetModelId"></a>

```typescript
public readonly assetModelId: string;
```

- *Type:* string

---

##### `assetModelName`<sup>Required</sup> <a name="assetModelName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.assetModelName"></a>

```typescript
public readonly assetModelName: string;
```

- *Type:* string

---

##### `assetModelProperties`<sup>Required</sup> <a name="assetModelProperties" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.assetModelProperties"></a>

```typescript
public readonly assetModelProperties: DataAwsccIotsitewiseAssetModelAssetModelPropertiesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList">DataAwsccIotsitewiseAssetModelAssetModelPropertiesList</a>

---

##### `assetModelType`<sup>Required</sup> <a name="assetModelType" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.assetModelType"></a>

```typescript
public readonly assetModelType: string;
```

- *Type:* string

---

##### `enforcedAssetModelInterfaceRelationships`<sup>Required</sup> <a name="enforcedAssetModelInterfaceRelationships" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.enforcedAssetModelInterfaceRelationships"></a>

```typescript
public readonly enforcedAssetModelInterfaceRelationships: DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList">DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.tags"></a>

```typescript
public readonly tags: DataAwsccIotsitewiseAssetModelTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList">DataAwsccIotsitewiseAssetModelTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotsitewiseAssetModelAssetModelCompositeModels <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModels" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModels.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

const dataAwsccIotsitewiseAssetModelAssetModelCompositeModels: dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModels = { ... }
```


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

const dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties: dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties = { ... }
```


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

const dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType: dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType = { ... }
```


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

const dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute: dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute = { ... }
```


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

const dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric: dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric = { ... }
```


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

const dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables: dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables = { ... }
```


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

const dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue: dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue = { ... }
```


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

const dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath: dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath = { ... }
```


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

const dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow: dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow = { ... }
```


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

const dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling: dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling = { ... }
```


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

const dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform: dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform = { ... }
```


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

const dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables: dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables = { ... }
```


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

const dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue: dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue = { ... }
```


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

const dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath: dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath = { ... }
```


### DataAwsccIotsitewiseAssetModelAssetModelHierarchies <a name="DataAwsccIotsitewiseAssetModelAssetModelHierarchies" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchies.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

const dataAwsccIotsitewiseAssetModelAssetModelHierarchies: dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchies = { ... }
```


### DataAwsccIotsitewiseAssetModelAssetModelProperties <a name="DataAwsccIotsitewiseAssetModelAssetModelProperties" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelProperties.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

const dataAwsccIotsitewiseAssetModelAssetModelProperties: dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelProperties = { ... }
```


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesType <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesType" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesType.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

const dataAwsccIotsitewiseAssetModelAssetModelPropertiesType: dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesType = { ... }
```


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttribute <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttribute.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

const dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttribute: dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttribute = { ... }
```


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetric <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetric" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetric"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetric.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

const dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetric: dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetric = { ... }
```


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

const dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables: dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables = { ... }
```


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

const dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue: dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue = { ... }
```


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

const dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath: dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath = { ... }
```


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

const dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow: dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow = { ... }
```


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

const dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling: dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling = { ... }
```


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransform <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransform" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransform"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransform.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

const dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransform: dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransform = { ... }
```


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

const dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables: dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables = { ... }
```


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

const dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue: dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue = { ... }
```


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

const dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath: dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath = { ... }
```


### DataAwsccIotsitewiseAssetModelConfig <a name="DataAwsccIotsitewiseAssetModelConfig" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

const dataAwsccIotsitewiseAssetModelConfig: dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iotsitewise_asset_model#id DataAwsccIotsitewiseAssetModel#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships <a name="DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

const dataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships: dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships = { ... }
```


### DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings <a name="DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

const dataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings: dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings = { ... }
```


### DataAwsccIotsitewiseAssetModelTags <a name="DataAwsccIotsitewiseAssetModelTags" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTags.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

const dataAwsccIotsitewiseAssetModelTags: dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.get"></a>

```typescript
public get(index: number): DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.dataTypeSpec">dataTypeSpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.logicalId">logicalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.type">type</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `dataTypeSpec`<sup>Required</sup> <a name="dataTypeSpec" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.dataTypeSpec"></a>

```typescript
public readonly dataTypeSpec: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logicalId`<sup>Required</sup> <a name="logicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.logicalId"></a>

```typescript
public readonly logicalId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.type"></a>

```typescript
public readonly type: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference</a>

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.property.defaultValue">defaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.variables">variables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.window">window</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.variables"></a>

```typescript
public readonly variables: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList</a>

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.window"></a>

```typescript
public readonly window: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.get"></a>

```typescript
public get(index: number): DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.property.value"></a>

```typescript
public readonly value: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyExternalId">hierarchyExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyId">hierarchyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyLogicalId">hierarchyLogicalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyExternalId">propertyExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyId">propertyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyLogicalId">propertyLogicalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyPath">propertyPath</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hierarchyExternalId`<sup>Required</sup> <a name="hierarchyExternalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyExternalId"></a>

```typescript
public readonly hierarchyExternalId: string;
```

- *Type:* string

---

##### `hierarchyId`<sup>Required</sup> <a name="hierarchyId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyId"></a>

```typescript
public readonly hierarchyId: string;
```

- *Type:* string

---

##### `hierarchyLogicalId`<sup>Required</sup> <a name="hierarchyLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyLogicalId"></a>

```typescript
public readonly hierarchyLogicalId: string;
```

- *Type:* string

---

##### `propertyExternalId`<sup>Required</sup> <a name="propertyExternalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyExternalId"></a>

```typescript
public readonly propertyExternalId: string;
```

- *Type:* string

---

##### `propertyId`<sup>Required</sup> <a name="propertyId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyId"></a>

```typescript
public readonly propertyId: string;
```

- *Type:* string

---

##### `propertyLogicalId`<sup>Required</sup> <a name="propertyLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyLogicalId"></a>

```typescript
public readonly propertyLogicalId: string;
```

- *Type:* string

---

##### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyPath"></a>

```typescript
public readonly propertyPath: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.get"></a>

```typescript
public get(index: number): DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.property.tumbling">tumbling</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tumbling`<sup>Required</sup> <a name="tumbling" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.property.tumbling"></a>

```typescript
public readonly tumbling: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.property.interval">interval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.property.offset">offset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.property.offset"></a>

```typescript
public readonly offset: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.attribute">attribute</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.metric">metric</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.transform">transform</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.typeName">typeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.attribute"></a>

```typescript
public readonly attribute: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference</a>

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.metric"></a>

```typescript
public readonly metric: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference</a>

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.transform"></a>

```typescript
public readonly transform: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference</a>

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.property.variables">variables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.property.variables"></a>

```typescript
public readonly variables: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.get"></a>

```typescript
public get(index: number): DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.property.value"></a>

```typescript
public readonly value: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyExternalId">hierarchyExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyId">hierarchyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyLogicalId">hierarchyLogicalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyExternalId">propertyExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyId">propertyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyLogicalId">propertyLogicalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyPath">propertyPath</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hierarchyExternalId`<sup>Required</sup> <a name="hierarchyExternalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyExternalId"></a>

```typescript
public readonly hierarchyExternalId: string;
```

- *Type:* string

---

##### `hierarchyId`<sup>Required</sup> <a name="hierarchyId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyId"></a>

```typescript
public readonly hierarchyId: string;
```

- *Type:* string

---

##### `hierarchyLogicalId`<sup>Required</sup> <a name="hierarchyLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyLogicalId"></a>

```typescript
public readonly hierarchyLogicalId: string;
```

- *Type:* string

---

##### `propertyExternalId`<sup>Required</sup> <a name="propertyExternalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyExternalId"></a>

```typescript
public readonly propertyExternalId: string;
```

- *Type:* string

---

##### `propertyId`<sup>Required</sup> <a name="propertyId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyId"></a>

```typescript
public readonly propertyId: string;
```

- *Type:* string

---

##### `propertyLogicalId`<sup>Required</sup> <a name="propertyLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyLogicalId"></a>

```typescript
public readonly propertyLogicalId: string;
```

- *Type:* string

---

##### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyPath"></a>

```typescript
public readonly propertyPath: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.get"></a>

```typescript
public get(index: number): DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.get"></a>

```typescript
public get(index: number): DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.composedAssetModelId">composedAssetModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.compositeModelProperties">compositeModelProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.parentAssetModelCompositeModelExternalId">parentAssetModelCompositeModelExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.path">path</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModels">DataAwsccIotsitewiseAssetModelAssetModelCompositeModels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `composedAssetModelId`<sup>Required</sup> <a name="composedAssetModelId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.composedAssetModelId"></a>

```typescript
public readonly composedAssetModelId: string;
```

- *Type:* string

---

##### `compositeModelProperties`<sup>Required</sup> <a name="compositeModelProperties" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.compositeModelProperties"></a>

```typescript
public readonly compositeModelProperties: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentAssetModelCompositeModelExternalId`<sup>Required</sup> <a name="parentAssetModelCompositeModelExternalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.parentAssetModelCompositeModelExternalId"></a>

```typescript
public readonly parentAssetModelCompositeModelExternalId: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.path"></a>

```typescript
public readonly path: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotsitewiseAssetModelAssetModelCompositeModels;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModels">DataAwsccIotsitewiseAssetModelAssetModelCompositeModels</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList <a name="DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.get"></a>

```typescript
public get(index: number): DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.childAssetModelId">childAssetModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.logicalId">logicalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchies">DataAwsccIotsitewiseAssetModelAssetModelHierarchies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `childAssetModelId`<sup>Required</sup> <a name="childAssetModelId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.childAssetModelId"></a>

```typescript
public readonly childAssetModelId: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logicalId`<sup>Required</sup> <a name="logicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.logicalId"></a>

```typescript
public readonly logicalId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotsitewiseAssetModelAssetModelHierarchies;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchies">DataAwsccIotsitewiseAssetModelAssetModelHierarchies</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesList <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.get"></a>

```typescript
public get(index: number): DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.dataTypeSpec">dataTypeSpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.logicalId">logicalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.type">type</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelProperties">DataAwsccIotsitewiseAssetModelAssetModelProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `dataTypeSpec`<sup>Required</sup> <a name="dataTypeSpec" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.dataTypeSpec"></a>

```typescript
public readonly dataTypeSpec: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logicalId`<sup>Required</sup> <a name="logicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.logicalId"></a>

```typescript
public readonly logicalId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.type"></a>

```typescript
public readonly type: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference</a>

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotsitewiseAssetModelAssetModelProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelProperties">DataAwsccIotsitewiseAssetModelAssetModelProperties</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.property.defaultValue">defaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttribute">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttribute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttribute;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttribute">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttribute</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.variables">variables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.window">window</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetric">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.variables"></a>

```typescript
public readonly variables: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList</a>

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.window"></a>

```typescript
public readonly window: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetric;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetric">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetric</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.get"></a>

```typescript
public get(index: number): DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.property.value"></a>

```typescript
public readonly value: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyExternalId">hierarchyExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyId">hierarchyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyLogicalId">hierarchyLogicalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyExternalId">propertyExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyId">propertyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyLogicalId">propertyLogicalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyPath">propertyPath</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hierarchyExternalId`<sup>Required</sup> <a name="hierarchyExternalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyExternalId"></a>

```typescript
public readonly hierarchyExternalId: string;
```

- *Type:* string

---

##### `hierarchyId`<sup>Required</sup> <a name="hierarchyId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyId"></a>

```typescript
public readonly hierarchyId: string;
```

- *Type:* string

---

##### `hierarchyLogicalId`<sup>Required</sup> <a name="hierarchyLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyLogicalId"></a>

```typescript
public readonly hierarchyLogicalId: string;
```

- *Type:* string

---

##### `propertyExternalId`<sup>Required</sup> <a name="propertyExternalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyExternalId"></a>

```typescript
public readonly propertyExternalId: string;
```

- *Type:* string

---

##### `propertyId`<sup>Required</sup> <a name="propertyId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyId"></a>

```typescript
public readonly propertyId: string;
```

- *Type:* string

---

##### `propertyLogicalId`<sup>Required</sup> <a name="propertyLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyLogicalId"></a>

```typescript
public readonly propertyLogicalId: string;
```

- *Type:* string

---

##### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyPath"></a>

```typescript
public readonly propertyPath: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.get"></a>

```typescript
public get(index: number): DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.property.tumbling">tumbling</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tumbling`<sup>Required</sup> <a name="tumbling" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.property.tumbling"></a>

```typescript
public readonly tumbling: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.property.interval">interval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.property.offset">offset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.property.offset"></a>

```typescript
public readonly offset: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.attribute">attribute</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.metric">metric</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.transform">transform</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.typeName">typeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesType">DataAwsccIotsitewiseAssetModelAssetModelPropertiesType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.attribute"></a>

```typescript
public readonly attribute: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference</a>

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.metric"></a>

```typescript
public readonly metric: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference</a>

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.transform"></a>

```typescript
public readonly transform: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference</a>

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotsitewiseAssetModelAssetModelPropertiesType;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesType">DataAwsccIotsitewiseAssetModelAssetModelPropertiesType</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.property.variables">variables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransform">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransform</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.property.variables"></a>

```typescript
public readonly variables: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransform;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransform">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransform</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.get"></a>

```typescript
public get(index: number): DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.property.value"></a>

```typescript
public readonly value: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyExternalId">hierarchyExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyId">hierarchyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyLogicalId">hierarchyLogicalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyExternalId">propertyExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyId">propertyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyLogicalId">propertyLogicalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyPath">propertyPath</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hierarchyExternalId`<sup>Required</sup> <a name="hierarchyExternalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyExternalId"></a>

```typescript
public readonly hierarchyExternalId: string;
```

- *Type:* string

---

##### `hierarchyId`<sup>Required</sup> <a name="hierarchyId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyId"></a>

```typescript
public readonly hierarchyId: string;
```

- *Type:* string

---

##### `hierarchyLogicalId`<sup>Required</sup> <a name="hierarchyLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyLogicalId"></a>

```typescript
public readonly hierarchyLogicalId: string;
```

- *Type:* string

---

##### `propertyExternalId`<sup>Required</sup> <a name="propertyExternalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyExternalId"></a>

```typescript
public readonly propertyExternalId: string;
```

- *Type:* string

---

##### `propertyId`<sup>Required</sup> <a name="propertyId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyId"></a>

```typescript
public readonly propertyId: string;
```

- *Type:* string

---

##### `propertyLogicalId`<sup>Required</sup> <a name="propertyLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyLogicalId"></a>

```typescript
public readonly propertyLogicalId: string;
```

- *Type:* string

---

##### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyPath"></a>

```typescript
public readonly propertyPath: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.get"></a>

```typescript
public get(index: number): DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath</a>

---


### DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList <a name="DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.get"></a>

```typescript
public get(index: number): DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference <a name="DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.property.interfaceAssetModelId">interfaceAssetModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.property.propertyMappings">propertyMappings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList">DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships">DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `interfaceAssetModelId`<sup>Required</sup> <a name="interfaceAssetModelId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.property.interfaceAssetModelId"></a>

```typescript
public readonly interfaceAssetModelId: string;
```

- *Type:* string

---

##### `propertyMappings`<sup>Required</sup> <a name="propertyMappings" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.property.propertyMappings"></a>

```typescript
public readonly propertyMappings: DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList">DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships">DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships</a>

---


### DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList <a name="DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.get"></a>

```typescript
public get(index: number): DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference <a name="DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.assetModelPropertyExternalId">assetModelPropertyExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.assetModelPropertyLogicalId">assetModelPropertyLogicalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.interfaceAssetModelPropertyExternalId">interfaceAssetModelPropertyExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings">DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assetModelPropertyExternalId`<sup>Required</sup> <a name="assetModelPropertyExternalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.assetModelPropertyExternalId"></a>

```typescript
public readonly assetModelPropertyExternalId: string;
```

- *Type:* string

---

##### `assetModelPropertyLogicalId`<sup>Required</sup> <a name="assetModelPropertyLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.assetModelPropertyLogicalId"></a>

```typescript
public readonly assetModelPropertyLogicalId: string;
```

- *Type:* string

---

##### `interfaceAssetModelPropertyExternalId`<sup>Required</sup> <a name="interfaceAssetModelPropertyExternalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.interfaceAssetModelPropertyExternalId"></a>

```typescript
public readonly interfaceAssetModelPropertyExternalId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings">DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings</a>

---


### DataAwsccIotsitewiseAssetModelTagsList <a name="DataAwsccIotsitewiseAssetModelTagsList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.get"></a>

```typescript
public get(index: number): DataAwsccIotsitewiseAssetModelTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotsitewiseAssetModelTagsOutputReference <a name="DataAwsccIotsitewiseAssetModelTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseAssetModel } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTags">DataAwsccIotsitewiseAssetModelTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotsitewiseAssetModelTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTags">DataAwsccIotsitewiseAssetModelTags</a>

---



