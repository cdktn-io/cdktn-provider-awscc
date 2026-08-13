# `dataAwsccLightsailInstanceSnapshot` Submodule <a name="`dataAwsccLightsailInstanceSnapshot` Submodule" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLightsailInstanceSnapshot <a name="DataAwsccLightsailInstanceSnapshot" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/lightsail_instance_snapshot awscc_lightsail_instance_snapshot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.Initializer"></a>

```typescript
import { dataAwsccLightsailInstanceSnapshot } from '@cdktn/provider-awscc'

new dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot(scope: Construct, id: string, config: DataAwsccLightsailInstanceSnapshotConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotConfig">DataAwsccLightsailInstanceSnapshotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotConfig">DataAwsccLightsailInstanceSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLightsailInstanceSnapshot resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.isConstruct"></a>

```typescript
import { dataAwsccLightsailInstanceSnapshot } from '@cdktn/provider-awscc'

dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.isTerraformElement"></a>

```typescript
import { dataAwsccLightsailInstanceSnapshot } from '@cdktn/provider-awscc'

dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.isTerraformDataSource"></a>

```typescript
import { dataAwsccLightsailInstanceSnapshot } from '@cdktn/provider-awscc'

dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.generateConfigForImport"></a>

```typescript
import { dataAwsccLightsailInstanceSnapshot } from '@cdktn/provider-awscc'

dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccLightsailInstanceSnapshot resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccLightsailInstanceSnapshot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccLightsailInstanceSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/lightsail_instance_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLightsailInstanceSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.fromInstanceArn">fromInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.fromInstanceName">fromInstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.instanceName">instanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.instanceSnapshotName">instanceSnapshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.isFromAutoSnapshot">isFromAutoSnapshot</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference">DataAwsccLightsailInstanceSnapshotLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.sizeInGb">sizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.supportCode">supportCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsList">DataAwsccLightsailInstanceSnapshotTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `fromInstanceArn`<sup>Required</sup> <a name="fromInstanceArn" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.fromInstanceArn"></a>

```typescript
public readonly fromInstanceArn: string;
```

- *Type:* string

---

##### `fromInstanceName`<sup>Required</sup> <a name="fromInstanceName" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.fromInstanceName"></a>

```typescript
public readonly fromInstanceName: string;
```

- *Type:* string

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.instanceName"></a>

```typescript
public readonly instanceName: string;
```

- *Type:* string

---

##### `instanceSnapshotName`<sup>Required</sup> <a name="instanceSnapshotName" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.instanceSnapshotName"></a>

```typescript
public readonly instanceSnapshotName: string;
```

- *Type:* string

---

##### `isFromAutoSnapshot`<sup>Required</sup> <a name="isFromAutoSnapshot" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.isFromAutoSnapshot"></a>

```typescript
public readonly isFromAutoSnapshot: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.location"></a>

```typescript
public readonly location: DataAwsccLightsailInstanceSnapshotLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference">DataAwsccLightsailInstanceSnapshotLocationOutputReference</a>

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `sizeInGb`<sup>Required</sup> <a name="sizeInGb" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.sizeInGb"></a>

```typescript
public readonly sizeInGb: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `supportCode`<sup>Required</sup> <a name="supportCode" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.supportCode"></a>

```typescript
public readonly supportCode: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.tags"></a>

```typescript
public readonly tags: DataAwsccLightsailInstanceSnapshotTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsList">DataAwsccLightsailInstanceSnapshotTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshot.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLightsailInstanceSnapshotConfig <a name="DataAwsccLightsailInstanceSnapshotConfig" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotConfig.Initializer"></a>

```typescript
import { dataAwsccLightsailInstanceSnapshot } from '@cdktn/provider-awscc'

const dataAwsccLightsailInstanceSnapshotConfig: dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/lightsail_instance_snapshot#id DataAwsccLightsailInstanceSnapshot#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLightsailInstanceSnapshotLocation <a name="DataAwsccLightsailInstanceSnapshotLocation" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocation.Initializer"></a>

```typescript
import { dataAwsccLightsailInstanceSnapshot } from '@cdktn/provider-awscc'

const dataAwsccLightsailInstanceSnapshotLocation: dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocation = { ... }
```


### DataAwsccLightsailInstanceSnapshotTags <a name="DataAwsccLightsailInstanceSnapshotTags" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTags.Initializer"></a>

```typescript
import { dataAwsccLightsailInstanceSnapshot } from '@cdktn/provider-awscc'

const dataAwsccLightsailInstanceSnapshotTags: dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLightsailInstanceSnapshotLocationOutputReference <a name="DataAwsccLightsailInstanceSnapshotLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.Initializer"></a>

```typescript
import { dataAwsccLightsailInstanceSnapshot } from '@cdktn/provider-awscc'

new dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.property.regionName">regionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocation">DataAwsccLightsailInstanceSnapshotLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.property.regionName"></a>

```typescript
public readonly regionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLightsailInstanceSnapshotLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotLocation">DataAwsccLightsailInstanceSnapshotLocation</a>

---


### DataAwsccLightsailInstanceSnapshotTagsList <a name="DataAwsccLightsailInstanceSnapshotTagsList" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsList.Initializer"></a>

```typescript
import { dataAwsccLightsailInstanceSnapshot } from '@cdktn/provider-awscc'

new dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsList.get"></a>

```typescript
public get(index: number): DataAwsccLightsailInstanceSnapshotTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccLightsailInstanceSnapshotTagsOutputReference <a name="DataAwsccLightsailInstanceSnapshotTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccLightsailInstanceSnapshot } from '@cdktn/provider-awscc'

new dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTags">DataAwsccLightsailInstanceSnapshotTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLightsailInstanceSnapshotTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailInstanceSnapshot.DataAwsccLightsailInstanceSnapshotTags">DataAwsccLightsailInstanceSnapshotTags</a>

---



