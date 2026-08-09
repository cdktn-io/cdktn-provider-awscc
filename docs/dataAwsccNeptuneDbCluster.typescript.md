# `dataAwsccNeptuneDbCluster` Submodule <a name="`dataAwsccNeptuneDbCluster` Submodule" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNeptuneDbCluster <a name="DataAwsccNeptuneDbCluster" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/neptune_db_cluster awscc_neptune_db_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.Initializer"></a>

```typescript
import { dataAwsccNeptuneDbCluster } from '@cdktn/provider-awscc'

new dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster(scope: Construct, id: string, config: DataAwsccNeptuneDbClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig">DataAwsccNeptuneDbClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig">DataAwsccNeptuneDbClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccNeptuneDbCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.isConstruct"></a>

```typescript
import { dataAwsccNeptuneDbCluster } from '@cdktn/provider-awscc'

dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.isTerraformElement"></a>

```typescript
import { dataAwsccNeptuneDbCluster } from '@cdktn/provider-awscc'

dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.isTerraformDataSource"></a>

```typescript
import { dataAwsccNeptuneDbCluster } from '@cdktn/provider-awscc'

dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.generateConfigForImport"></a>

```typescript
import { dataAwsccNeptuneDbCluster } from '@cdktn/provider-awscc'

dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccNeptuneDbCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccNeptuneDbCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccNeptuneDbCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/neptune_db_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNeptuneDbCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.associatedRoles">associatedRoles</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList">DataAwsccNeptuneDbClusterAssociatedRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.backupRetentionPeriod">backupRetentionPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.clusterResourceId">clusterResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.copyTagsToSnapshot">copyTagsToSnapshot</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.dbClusterParameterGroupName">dbClusterParameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.dbInstanceParameterGroupName">dbInstanceParameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.dbPort">dbPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.dbSubnetGroupName">dbSubnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.deletionProtection">deletionProtection</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.enableCloudwatchLogsExports">enableCloudwatchLogsExports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.globalClusterIdentifier">globalClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.iamAuthEnabled">iamAuthEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.networkType">networkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.preferredBackupWindow">preferredBackupWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.readEndpoint">readEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.restoreToTime">restoreToTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.restoreType">restoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.serverlessScalingConfiguration">serverlessScalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference">DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.snapshotIdentifier">snapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.sourceDbClusterIdentifier">sourceDbClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.storageEncrypted">storageEncrypted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList">DataAwsccNeptuneDbClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.useLatestRestorableTime">useLatestRestorableTime</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `associatedRoles`<sup>Required</sup> <a name="associatedRoles" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.associatedRoles"></a>

```typescript
public readonly associatedRoles: DataAwsccNeptuneDbClusterAssociatedRolesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList">DataAwsccNeptuneDbClusterAssociatedRolesList</a>

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="backupRetentionPeriod" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.backupRetentionPeriod"></a>

```typescript
public readonly backupRetentionPeriod: number;
```

- *Type:* number

---

##### `clusterResourceId`<sup>Required</sup> <a name="clusterResourceId" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.clusterResourceId"></a>

```typescript
public readonly clusterResourceId: string;
```

- *Type:* string

---

##### `copyTagsToSnapshot`<sup>Required</sup> <a name="copyTagsToSnapshot" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.copyTagsToSnapshot"></a>

```typescript
public readonly copyTagsToSnapshot: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="dbClusterIdentifier" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.dbClusterIdentifier"></a>

```typescript
public readonly dbClusterIdentifier: string;
```

- *Type:* string

---

##### `dbClusterParameterGroupName`<sup>Required</sup> <a name="dbClusterParameterGroupName" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.dbClusterParameterGroupName"></a>

```typescript
public readonly dbClusterParameterGroupName: string;
```

- *Type:* string

---

##### `dbInstanceParameterGroupName`<sup>Required</sup> <a name="dbInstanceParameterGroupName" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.dbInstanceParameterGroupName"></a>

```typescript
public readonly dbInstanceParameterGroupName: string;
```

- *Type:* string

---

##### `dbPort`<sup>Required</sup> <a name="dbPort" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.dbPort"></a>

```typescript
public readonly dbPort: number;
```

- *Type:* number

---

##### `dbSubnetGroupName`<sup>Required</sup> <a name="dbSubnetGroupName" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.dbSubnetGroupName"></a>

```typescript
public readonly dbSubnetGroupName: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `enableCloudwatchLogsExports`<sup>Required</sup> <a name="enableCloudwatchLogsExports" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.enableCloudwatchLogsExports"></a>

```typescript
public readonly enableCloudwatchLogsExports: string[];
```

- *Type:* string[]

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `globalClusterIdentifier`<sup>Required</sup> <a name="globalClusterIdentifier" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.globalClusterIdentifier"></a>

```typescript
public readonly globalClusterIdentifier: string;
```

- *Type:* string

---

##### `iamAuthEnabled`<sup>Required</sup> <a name="iamAuthEnabled" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.iamAuthEnabled"></a>

```typescript
public readonly iamAuthEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="preferredBackupWindow" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.preferredBackupWindow"></a>

```typescript
public readonly preferredBackupWindow: string;
```

- *Type:* string

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

---

##### `readEndpoint`<sup>Required</sup> <a name="readEndpoint" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.readEndpoint"></a>

```typescript
public readonly readEndpoint: string;
```

- *Type:* string

---

##### `restoreToTime`<sup>Required</sup> <a name="restoreToTime" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.restoreToTime"></a>

```typescript
public readonly restoreToTime: string;
```

- *Type:* string

---

##### `restoreType`<sup>Required</sup> <a name="restoreType" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.restoreType"></a>

```typescript
public readonly restoreType: string;
```

- *Type:* string

---

##### `serverlessScalingConfiguration`<sup>Required</sup> <a name="serverlessScalingConfiguration" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.serverlessScalingConfiguration"></a>

```typescript
public readonly serverlessScalingConfiguration: DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference">DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference</a>

---

##### `snapshotIdentifier`<sup>Required</sup> <a name="snapshotIdentifier" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.snapshotIdentifier"></a>

```typescript
public readonly snapshotIdentifier: string;
```

- *Type:* string

---

##### `sourceDbClusterIdentifier`<sup>Required</sup> <a name="sourceDbClusterIdentifier" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.sourceDbClusterIdentifier"></a>

```typescript
public readonly sourceDbClusterIdentifier: string;
```

- *Type:* string

---

##### `storageEncrypted`<sup>Required</sup> <a name="storageEncrypted" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.storageEncrypted"></a>

```typescript
public readonly storageEncrypted: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.tags"></a>

```typescript
public readonly tags: DataAwsccNeptuneDbClusterTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList">DataAwsccNeptuneDbClusterTagsList</a>

---

##### `useLatestRestorableTime`<sup>Required</sup> <a name="useLatestRestorableTime" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.useLatestRestorableTime"></a>

```typescript
public readonly useLatestRestorableTime: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNeptuneDbClusterAssociatedRoles <a name="DataAwsccNeptuneDbClusterAssociatedRoles" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRoles.Initializer"></a>

```typescript
import { dataAwsccNeptuneDbCluster } from '@cdktn/provider-awscc'

const dataAwsccNeptuneDbClusterAssociatedRoles: dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRoles = { ... }
```


### DataAwsccNeptuneDbClusterConfig <a name="DataAwsccNeptuneDbClusterConfig" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig.Initializer"></a>

```typescript
import { dataAwsccNeptuneDbCluster } from '@cdktn/provider-awscc'

const dataAwsccNeptuneDbClusterConfig: dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/neptune_db_cluster#id DataAwsccNeptuneDbCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNeptuneDbClusterServerlessScalingConfiguration <a name="DataAwsccNeptuneDbClusterServerlessScalingConfiguration" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfiguration.Initializer"></a>

```typescript
import { dataAwsccNeptuneDbCluster } from '@cdktn/provider-awscc'

const dataAwsccNeptuneDbClusterServerlessScalingConfiguration: dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfiguration = { ... }
```


### DataAwsccNeptuneDbClusterTags <a name="DataAwsccNeptuneDbClusterTags" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTags.Initializer"></a>

```typescript
import { dataAwsccNeptuneDbCluster } from '@cdktn/provider-awscc'

const dataAwsccNeptuneDbClusterTags: dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNeptuneDbClusterAssociatedRolesList <a name="DataAwsccNeptuneDbClusterAssociatedRolesList" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.Initializer"></a>

```typescript
import { dataAwsccNeptuneDbCluster } from '@cdktn/provider-awscc'

new dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.get"></a>

```typescript
public get(index: number): DataAwsccNeptuneDbClusterAssociatedRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNeptuneDbClusterAssociatedRolesOutputReference <a name="DataAwsccNeptuneDbClusterAssociatedRolesOutputReference" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.Initializer"></a>

```typescript
import { dataAwsccNeptuneDbCluster } from '@cdktn/provider-awscc'

new dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.property.featureName">featureName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRoles">DataAwsccNeptuneDbClusterAssociatedRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `featureName`<sup>Required</sup> <a name="featureName" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.property.featureName"></a>

```typescript
public readonly featureName: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRolesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNeptuneDbClusterAssociatedRoles;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterAssociatedRoles">DataAwsccNeptuneDbClusterAssociatedRoles</a>

---


### DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference <a name="DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccNeptuneDbCluster } from '@cdktn/provider-awscc'

new dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.property.minCapacity">minCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfiguration">DataAwsccNeptuneDbClusterServerlessScalingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.property.minCapacity"></a>

```typescript
public readonly minCapacity: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNeptuneDbClusterServerlessScalingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterServerlessScalingConfiguration">DataAwsccNeptuneDbClusterServerlessScalingConfiguration</a>

---


### DataAwsccNeptuneDbClusterTagsList <a name="DataAwsccNeptuneDbClusterTagsList" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.Initializer"></a>

```typescript
import { dataAwsccNeptuneDbCluster } from '@cdktn/provider-awscc'

new dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.get"></a>

```typescript
public get(index: number): DataAwsccNeptuneDbClusterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNeptuneDbClusterTagsOutputReference <a name="DataAwsccNeptuneDbClusterTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNeptuneDbCluster } from '@cdktn/provider-awscc'

new dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTags">DataAwsccNeptuneDbClusterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNeptuneDbClusterTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbCluster.DataAwsccNeptuneDbClusterTags">DataAwsccNeptuneDbClusterTags</a>

---



