# `dataAwsccIotsitewiseDataset` Submodule <a name="`dataAwsccIotsitewiseDataset` Submodule" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotsitewiseDataset <a name="DataAwsccIotsitewiseDataset" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iotsitewise_dataset awscc_iotsitewise_dataset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseDataset } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset(scope: Construct, id: string, config: DataAwsccIotsitewiseDatasetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetConfig">DataAwsccIotsitewiseDatasetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetConfig">DataAwsccIotsitewiseDatasetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotsitewiseDataset resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.isConstruct"></a>

```typescript
import { dataAwsccIotsitewiseDataset } from '@cdktn/provider-awscc'

dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.isTerraformElement"></a>

```typescript
import { dataAwsccIotsitewiseDataset } from '@cdktn/provider-awscc'

dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.isTerraformDataSource"></a>

```typescript
import { dataAwsccIotsitewiseDataset } from '@cdktn/provider-awscc'

dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.generateConfigForImport"></a>

```typescript
import { dataAwsccIotsitewiseDataset } from '@cdktn/provider-awscc'

dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccIotsitewiseDataset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccIotsitewiseDataset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccIotsitewiseDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iotsitewise_dataset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotsitewiseDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.datasetArn">datasetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.datasetDescription">datasetDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.datasetName">datasetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.datasetSource">datasetSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference">DataAwsccIotsitewiseDatasetDatasetSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsList">DataAwsccIotsitewiseDatasetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `datasetArn`<sup>Required</sup> <a name="datasetArn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.datasetArn"></a>

```typescript
public readonly datasetArn: string;
```

- *Type:* string

---

##### `datasetDescription`<sup>Required</sup> <a name="datasetDescription" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.datasetDescription"></a>

```typescript
public readonly datasetDescription: string;
```

- *Type:* string

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

##### `datasetName`<sup>Required</sup> <a name="datasetName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.datasetName"></a>

```typescript
public readonly datasetName: string;
```

- *Type:* string

---

##### `datasetSource`<sup>Required</sup> <a name="datasetSource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.datasetSource"></a>

```typescript
public readonly datasetSource: DataAwsccIotsitewiseDatasetDatasetSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference">DataAwsccIotsitewiseDatasetDatasetSourceOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.tags"></a>

```typescript
public readonly tags: DataAwsccIotsitewiseDatasetTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsList">DataAwsccIotsitewiseDatasetTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDataset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotsitewiseDatasetConfig <a name="DataAwsccIotsitewiseDatasetConfig" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetConfig.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseDataset } from '@cdktn/provider-awscc'

const dataAwsccIotsitewiseDatasetConfig: dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iotsitewise_dataset#id DataAwsccIotsitewiseDataset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotsitewiseDatasetDatasetSource <a name="DataAwsccIotsitewiseDatasetDatasetSource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSource.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseDataset } from '@cdktn/provider-awscc'

const dataAwsccIotsitewiseDatasetDatasetSource: dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSource = { ... }
```


### DataAwsccIotsitewiseDatasetDatasetSourceSourceDetail <a name="DataAwsccIotsitewiseDatasetDatasetSourceSourceDetail" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetail.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseDataset } from '@cdktn/provider-awscc'

const dataAwsccIotsitewiseDatasetDatasetSourceSourceDetail: dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetail = { ... }
```


### DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendra <a name="DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendra" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendra"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendra.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseDataset } from '@cdktn/provider-awscc'

const dataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendra: dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendra = { ... }
```


### DataAwsccIotsitewiseDatasetTags <a name="DataAwsccIotsitewiseDatasetTags" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTags.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseDataset } from '@cdktn/provider-awscc'

const dataAwsccIotsitewiseDatasetTags: dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotsitewiseDatasetDatasetSourceOutputReference <a name="DataAwsccIotsitewiseDatasetDatasetSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseDataset } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.property.sourceDetail">sourceDetail</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference">DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.property.sourceFormat">sourceFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSource">DataAwsccIotsitewiseDatasetDatasetSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceDetail`<sup>Required</sup> <a name="sourceDetail" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.property.sourceDetail"></a>

```typescript
public readonly sourceDetail: DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference">DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference</a>

---

##### `sourceFormat`<sup>Required</sup> <a name="sourceFormat" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.property.sourceFormat"></a>

```typescript
public readonly sourceFormat: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotsitewiseDatasetDatasetSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSource">DataAwsccIotsitewiseDatasetDatasetSource</a>

---


### DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference <a name="DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseDataset } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.knowledgeBaseArn">knowledgeBaseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendra">DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendra</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `knowledgeBaseArn`<sup>Required</sup> <a name="knowledgeBaseArn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.knowledgeBaseArn"></a>

```typescript
public readonly knowledgeBaseArn: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendra;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendra">DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendra</a>

---


### DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference <a name="DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseDataset } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.property.kendra">kendra</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference">DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetail">DataAwsccIotsitewiseDatasetDatasetSourceSourceDetail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kendra`<sup>Required</sup> <a name="kendra" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.property.kendra"></a>

```typescript
public readonly kendra: DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference">DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotsitewiseDatasetDatasetSourceSourceDetail;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetDatasetSourceSourceDetail">DataAwsccIotsitewiseDatasetDatasetSourceSourceDetail</a>

---


### DataAwsccIotsitewiseDatasetTagsList <a name="DataAwsccIotsitewiseDatasetTagsList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsList.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseDataset } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsList.get"></a>

```typescript
public get(index: number): DataAwsccIotsitewiseDatasetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotsitewiseDatasetTagsOutputReference <a name="DataAwsccIotsitewiseDatasetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotsitewiseDataset } from '@cdktn/provider-awscc'

new dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTags">DataAwsccIotsitewiseDatasetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotsitewiseDatasetTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseDataset.DataAwsccIotsitewiseDatasetTags">DataAwsccIotsitewiseDatasetTags</a>

---



