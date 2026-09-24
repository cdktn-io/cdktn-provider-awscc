# `dataAwsccDocdbelasticClusterSnapshot` Submodule <a name="`dataAwsccDocdbelasticClusterSnapshot` Submodule" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDocdbelasticClusterSnapshot <a name="DataAwsccDocdbelasticClusterSnapshot" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/docdbelastic_cluster_snapshot awscc_docdbelastic_cluster_snapshot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.Initializer"></a>

```typescript
import { dataAwsccDocdbelasticClusterSnapshot } from '@cdktn/provider-awscc'

new dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot(scope: Construct, id: string, config: DataAwsccDocdbelasticClusterSnapshotConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig">DataAwsccDocdbelasticClusterSnapshotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig">DataAwsccDocdbelasticClusterSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDocdbelasticClusterSnapshot resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.isConstruct"></a>

```typescript
import { dataAwsccDocdbelasticClusterSnapshot } from '@cdktn/provider-awscc'

dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.isTerraformElement"></a>

```typescript
import { dataAwsccDocdbelasticClusterSnapshot } from '@cdktn/provider-awscc'

dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.isTerraformDataSource"></a>

```typescript
import { dataAwsccDocdbelasticClusterSnapshot } from '@cdktn/provider-awscc'

dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.generateConfigForImport"></a>

```typescript
import { dataAwsccDocdbelasticClusterSnapshot } from '@cdktn/provider-awscc'

dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccDocdbelasticClusterSnapshot resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDocdbelasticClusterSnapshot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDocdbelasticClusterSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/docdbelastic_cluster_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDocdbelasticClusterSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.adminUserName">adminUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.clusterArn">clusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.clusterCreationTime">clusterCreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.snapshotArn">snapshotArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.snapshotCreationTime">snapshotCreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.snapshotName">snapshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.snapshotType">snapshotType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList">DataAwsccDocdbelasticClusterSnapshotTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `adminUserName`<sup>Required</sup> <a name="adminUserName" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.adminUserName"></a>

```typescript
public readonly adminUserName: string;
```

- *Type:* string

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

---

##### `clusterCreationTime`<sup>Required</sup> <a name="clusterCreationTime" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.clusterCreationTime"></a>

```typescript
public readonly clusterCreationTime: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `snapshotArn`<sup>Required</sup> <a name="snapshotArn" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.snapshotArn"></a>

```typescript
public readonly snapshotArn: string;
```

- *Type:* string

---

##### `snapshotCreationTime`<sup>Required</sup> <a name="snapshotCreationTime" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.snapshotCreationTime"></a>

```typescript
public readonly snapshotCreationTime: string;
```

- *Type:* string

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

---

##### `snapshotType`<sup>Required</sup> <a name="snapshotType" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.snapshotType"></a>

```typescript
public readonly snapshotType: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.tags"></a>

```typescript
public readonly tags: DataAwsccDocdbelasticClusterSnapshotTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList">DataAwsccDocdbelasticClusterSnapshotTagsList</a>

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDocdbelasticClusterSnapshotConfig <a name="DataAwsccDocdbelasticClusterSnapshotConfig" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.Initializer"></a>

```typescript
import { dataAwsccDocdbelasticClusterSnapshot } from '@cdktn/provider-awscc'

const dataAwsccDocdbelasticClusterSnapshotConfig: dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/docdbelastic_cluster_snapshot#id DataAwsccDocdbelasticClusterSnapshot#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDocdbelasticClusterSnapshotTags <a name="DataAwsccDocdbelasticClusterSnapshotTags" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTags.Initializer"></a>

```typescript
import { dataAwsccDocdbelasticClusterSnapshot } from '@cdktn/provider-awscc'

const dataAwsccDocdbelasticClusterSnapshotTags: dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDocdbelasticClusterSnapshotTagsList <a name="DataAwsccDocdbelasticClusterSnapshotTagsList" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.Initializer"></a>

```typescript
import { dataAwsccDocdbelasticClusterSnapshot } from '@cdktn/provider-awscc'

new dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.get"></a>

```typescript
public get(index: number): DataAwsccDocdbelasticClusterSnapshotTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDocdbelasticClusterSnapshotTagsOutputReference <a name="DataAwsccDocdbelasticClusterSnapshotTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDocdbelasticClusterSnapshot } from '@cdktn/provider-awscc'

new dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTags">DataAwsccDocdbelasticClusterSnapshotTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDocdbelasticClusterSnapshotTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTags">DataAwsccDocdbelasticClusterSnapshotTags</a>

---



