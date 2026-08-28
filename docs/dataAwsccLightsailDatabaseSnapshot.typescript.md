# `dataAwsccLightsailDatabaseSnapshot` Submodule <a name="`dataAwsccLightsailDatabaseSnapshot` Submodule" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLightsailDatabaseSnapshot <a name="DataAwsccLightsailDatabaseSnapshot" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/lightsail_database_snapshot awscc_lightsail_database_snapshot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.Initializer"></a>

```typescript
import { dataAwsccLightsailDatabaseSnapshot } from '@cdktn/provider-awscc'

new dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot(scope: Construct, id: string, config: DataAwsccLightsailDatabaseSnapshotConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig">DataAwsccLightsailDatabaseSnapshotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig">DataAwsccLightsailDatabaseSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLightsailDatabaseSnapshot resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.isConstruct"></a>

```typescript
import { dataAwsccLightsailDatabaseSnapshot } from '@cdktn/provider-awscc'

dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.isTerraformElement"></a>

```typescript
import { dataAwsccLightsailDatabaseSnapshot } from '@cdktn/provider-awscc'

dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.isTerraformDataSource"></a>

```typescript
import { dataAwsccLightsailDatabaseSnapshot } from '@cdktn/provider-awscc'

dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.generateConfigForImport"></a>

```typescript
import { dataAwsccLightsailDatabaseSnapshot } from '@cdktn/provider-awscc'

dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccLightsailDatabaseSnapshot resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccLightsailDatabaseSnapshot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccLightsailDatabaseSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/lightsail_database_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLightsailDatabaseSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.fromRelationalDatabaseArn">fromRelationalDatabaseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.fromRelationalDatabaseBlueprintId">fromRelationalDatabaseBlueprintId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.fromRelationalDatabaseBundleId">fromRelationalDatabaseBundleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.fromRelationalDatabaseName">fromRelationalDatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference">DataAwsccLightsailDatabaseSnapshotLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.relationalDatabaseName">relationalDatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.relationalDatabaseSnapshotName">relationalDatabaseSnapshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.sizeInGb">sizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.supportCode">supportCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList">DataAwsccLightsailDatabaseSnapshotTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `fromRelationalDatabaseArn`<sup>Required</sup> <a name="fromRelationalDatabaseArn" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.fromRelationalDatabaseArn"></a>

```typescript
public readonly fromRelationalDatabaseArn: string;
```

- *Type:* string

---

##### `fromRelationalDatabaseBlueprintId`<sup>Required</sup> <a name="fromRelationalDatabaseBlueprintId" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.fromRelationalDatabaseBlueprintId"></a>

```typescript
public readonly fromRelationalDatabaseBlueprintId: string;
```

- *Type:* string

---

##### `fromRelationalDatabaseBundleId`<sup>Required</sup> <a name="fromRelationalDatabaseBundleId" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.fromRelationalDatabaseBundleId"></a>

```typescript
public readonly fromRelationalDatabaseBundleId: string;
```

- *Type:* string

---

##### `fromRelationalDatabaseName`<sup>Required</sup> <a name="fromRelationalDatabaseName" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.fromRelationalDatabaseName"></a>

```typescript
public readonly fromRelationalDatabaseName: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.location"></a>

```typescript
public readonly location: DataAwsccLightsailDatabaseSnapshotLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference">DataAwsccLightsailDatabaseSnapshotLocationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `relationalDatabaseName`<sup>Required</sup> <a name="relationalDatabaseName" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.relationalDatabaseName"></a>

```typescript
public readonly relationalDatabaseName: string;
```

- *Type:* string

---

##### `relationalDatabaseSnapshotName`<sup>Required</sup> <a name="relationalDatabaseSnapshotName" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.relationalDatabaseSnapshotName"></a>

```typescript
public readonly relationalDatabaseSnapshotName: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `sizeInGb`<sup>Required</sup> <a name="sizeInGb" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.sizeInGb"></a>

```typescript
public readonly sizeInGb: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `supportCode`<sup>Required</sup> <a name="supportCode" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.supportCode"></a>

```typescript
public readonly supportCode: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.tags"></a>

```typescript
public readonly tags: DataAwsccLightsailDatabaseSnapshotTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList">DataAwsccLightsailDatabaseSnapshotTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLightsailDatabaseSnapshotConfig <a name="DataAwsccLightsailDatabaseSnapshotConfig" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig.Initializer"></a>

```typescript
import { dataAwsccLightsailDatabaseSnapshot } from '@cdktn/provider-awscc'

const dataAwsccLightsailDatabaseSnapshotConfig: dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/lightsail_database_snapshot#id DataAwsccLightsailDatabaseSnapshot#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLightsailDatabaseSnapshotLocation <a name="DataAwsccLightsailDatabaseSnapshotLocation" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocation.Initializer"></a>

```typescript
import { dataAwsccLightsailDatabaseSnapshot } from '@cdktn/provider-awscc'

const dataAwsccLightsailDatabaseSnapshotLocation: dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocation = { ... }
```


### DataAwsccLightsailDatabaseSnapshotTags <a name="DataAwsccLightsailDatabaseSnapshotTags" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTags.Initializer"></a>

```typescript
import { dataAwsccLightsailDatabaseSnapshot } from '@cdktn/provider-awscc'

const dataAwsccLightsailDatabaseSnapshotTags: dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLightsailDatabaseSnapshotLocationOutputReference <a name="DataAwsccLightsailDatabaseSnapshotLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.Initializer"></a>

```typescript
import { dataAwsccLightsailDatabaseSnapshot } from '@cdktn/provider-awscc'

new dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.property.regionName">regionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocation">DataAwsccLightsailDatabaseSnapshotLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.property.regionName"></a>

```typescript
public readonly regionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLightsailDatabaseSnapshotLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocation">DataAwsccLightsailDatabaseSnapshotLocation</a>

---


### DataAwsccLightsailDatabaseSnapshotTagsList <a name="DataAwsccLightsailDatabaseSnapshotTagsList" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.Initializer"></a>

```typescript
import { dataAwsccLightsailDatabaseSnapshot } from '@cdktn/provider-awscc'

new dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.get"></a>

```typescript
public get(index: number): DataAwsccLightsailDatabaseSnapshotTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccLightsailDatabaseSnapshotTagsOutputReference <a name="DataAwsccLightsailDatabaseSnapshotTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccLightsailDatabaseSnapshot } from '@cdktn/provider-awscc'

new dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTags">DataAwsccLightsailDatabaseSnapshotTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLightsailDatabaseSnapshotTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTags">DataAwsccLightsailDatabaseSnapshotTags</a>

---



