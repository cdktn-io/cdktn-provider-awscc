# `dataAwsccTimestreamInfluxDbBackup` Submodule <a name="`dataAwsccTimestreamInfluxDbBackup` Submodule" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccTimestreamInfluxDbBackup <a name="DataAwsccTimestreamInfluxDbBackup" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/timestream_influx_db_backup awscc_timestream_influx_db_backup}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.Initializer"></a>

```typescript
import { dataAwsccTimestreamInfluxDbBackup } from '@cdktn/provider-awscc'

new dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup(scope: Construct, id: string, config: DataAwsccTimestreamInfluxDbBackupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig">DataAwsccTimestreamInfluxDbBackupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig">DataAwsccTimestreamInfluxDbBackupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccTimestreamInfluxDbBackup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.isConstruct"></a>

```typescript
import { dataAwsccTimestreamInfluxDbBackup } from '@cdktn/provider-awscc'

dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.isTerraformElement"></a>

```typescript
import { dataAwsccTimestreamInfluxDbBackup } from '@cdktn/provider-awscc'

dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.isTerraformDataSource"></a>

```typescript
import { dataAwsccTimestreamInfluxDbBackup } from '@cdktn/provider-awscc'

dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.generateConfigForImport"></a>

```typescript
import { dataAwsccTimestreamInfluxDbBackup } from '@cdktn/provider-awscc'

dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccTimestreamInfluxDbBackup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccTimestreamInfluxDbBackup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccTimestreamInfluxDbBackup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/timestream_influx_db_backup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccTimestreamInfluxDbBackup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.allocatedStorage">allocatedStorage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.clusterConfiguration">clusterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference">DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.dbInstanceType">dbInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.dbParameterGroupId">dbParameterGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.dbResourceId">dbResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.dbStorageType">dbStorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.deploymentType">deploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.engineType">engineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.expiresAfter">expiresAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.failoverMode">failoverMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.influxAuthParametersSecretArn">influxAuthParametersSecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.influxDbBackupId">influxDbBackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.logDeliveryConfiguration">logDeliveryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference">DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.maintenanceSchedule">maintenanceSchedule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference">DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.networkType">networkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.publiclyAccessible">publiclyAccessible</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.retentionDays">retentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList">DataAwsccTimestreamInfluxDbBackupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.vpcSubnetIds">vpcSubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `allocatedStorage`<sup>Required</sup> <a name="allocatedStorage" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.allocatedStorage"></a>

```typescript
public readonly allocatedStorage: number;
```

- *Type:* number

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `clusterConfiguration`<sup>Required</sup> <a name="clusterConfiguration" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.clusterConfiguration"></a>

```typescript
public readonly clusterConfiguration: DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference">DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dbInstanceType`<sup>Required</sup> <a name="dbInstanceType" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.dbInstanceType"></a>

```typescript
public readonly dbInstanceType: string;
```

- *Type:* string

---

##### `dbParameterGroupId`<sup>Required</sup> <a name="dbParameterGroupId" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.dbParameterGroupId"></a>

```typescript
public readonly dbParameterGroupId: string;
```

- *Type:* string

---

##### `dbResourceId`<sup>Required</sup> <a name="dbResourceId" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.dbResourceId"></a>

```typescript
public readonly dbResourceId: string;
```

- *Type:* string

---

##### `dbStorageType`<sup>Required</sup> <a name="dbStorageType" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.dbStorageType"></a>

```typescript
public readonly dbStorageType: string;
```

- *Type:* string

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

---

##### `engineType`<sup>Required</sup> <a name="engineType" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.engineType"></a>

```typescript
public readonly engineType: string;
```

- *Type:* string

---

##### `expiresAfter`<sup>Required</sup> <a name="expiresAfter" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.expiresAfter"></a>

```typescript
public readonly expiresAfter: string;
```

- *Type:* string

---

##### `failoverMode`<sup>Required</sup> <a name="failoverMode" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.failoverMode"></a>

```typescript
public readonly failoverMode: string;
```

- *Type:* string

---

##### `influxAuthParametersSecretArn`<sup>Required</sup> <a name="influxAuthParametersSecretArn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.influxAuthParametersSecretArn"></a>

```typescript
public readonly influxAuthParametersSecretArn: string;
```

- *Type:* string

---

##### `influxDbBackupId`<sup>Required</sup> <a name="influxDbBackupId" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.influxDbBackupId"></a>

```typescript
public readonly influxDbBackupId: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `logDeliveryConfiguration`<sup>Required</sup> <a name="logDeliveryConfiguration" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.logDeliveryConfiguration"></a>

```typescript
public readonly logDeliveryConfiguration: DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference">DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference</a>

---

##### `maintenanceSchedule`<sup>Required</sup> <a name="maintenanceSchedule" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.maintenanceSchedule"></a>

```typescript
public readonly maintenanceSchedule: DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference">DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.tags"></a>

```typescript
public readonly tags: DataAwsccTimestreamInfluxDbBackupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList">DataAwsccTimestreamInfluxDbBackupTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `vpcSubnetIds`<sup>Required</sup> <a name="vpcSubnetIds" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.vpcSubnetIds"></a>

```typescript
public readonly vpcSubnetIds: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccTimestreamInfluxDbBackupClusterConfiguration <a name="DataAwsccTimestreamInfluxDbBackupClusterConfiguration" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfiguration.Initializer"></a>

```typescript
import { dataAwsccTimestreamInfluxDbBackup } from '@cdktn/provider-awscc'

const dataAwsccTimestreamInfluxDbBackupClusterConfiguration: dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfiguration = { ... }
```


### DataAwsccTimestreamInfluxDbBackupConfig <a name="DataAwsccTimestreamInfluxDbBackupConfig" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.Initializer"></a>

```typescript
import { dataAwsccTimestreamInfluxDbBackup } from '@cdktn/provider-awscc'

const dataAwsccTimestreamInfluxDbBackupConfig: dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/timestream_influx_db_backup#id DataAwsccTimestreamInfluxDbBackup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccTimestreamInfluxDbBackupLogDeliveryConfiguration <a name="DataAwsccTimestreamInfluxDbBackupLogDeliveryConfiguration" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfiguration.Initializer"></a>

```typescript
import { dataAwsccTimestreamInfluxDbBackup } from '@cdktn/provider-awscc'

const dataAwsccTimestreamInfluxDbBackupLogDeliveryConfiguration: dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfiguration = { ... }
```


### DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration <a name="DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration.Initializer"></a>

```typescript
import { dataAwsccTimestreamInfluxDbBackup } from '@cdktn/provider-awscc'

const dataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration: dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration = { ... }
```


### DataAwsccTimestreamInfluxDbBackupMaintenanceSchedule <a name="DataAwsccTimestreamInfluxDbBackupMaintenanceSchedule" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceSchedule.Initializer"></a>

```typescript
import { dataAwsccTimestreamInfluxDbBackup } from '@cdktn/provider-awscc'

const dataAwsccTimestreamInfluxDbBackupMaintenanceSchedule: dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceSchedule = { ... }
```


### DataAwsccTimestreamInfluxDbBackupTags <a name="DataAwsccTimestreamInfluxDbBackupTags" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTags.Initializer"></a>

```typescript
import { dataAwsccTimestreamInfluxDbBackup } from '@cdktn/provider-awscc'

const dataAwsccTimestreamInfluxDbBackupTags: dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference <a name="DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccTimestreamInfluxDbBackup } from '@cdktn/provider-awscc'

new dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.property.dedicatedCompactor">dedicatedCompactor</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.property.ingestQueryInstances">ingestQueryInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.property.queryOnlyInstances">queryOnlyInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfiguration">DataAwsccTimestreamInfluxDbBackupClusterConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dedicatedCompactor`<sup>Required</sup> <a name="dedicatedCompactor" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.property.dedicatedCompactor"></a>

```typescript
public readonly dedicatedCompactor: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `ingestQueryInstances`<sup>Required</sup> <a name="ingestQueryInstances" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.property.ingestQueryInstances"></a>

```typescript
public readonly ingestQueryInstances: number;
```

- *Type:* number

---

##### `queryOnlyInstances`<sup>Required</sup> <a name="queryOnlyInstances" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.property.queryOnlyInstances"></a>

```typescript
public readonly queryOnlyInstances: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccTimestreamInfluxDbBackupClusterConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfiguration">DataAwsccTimestreamInfluxDbBackupClusterConfiguration</a>

---


### DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference <a name="DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccTimestreamInfluxDbBackup } from '@cdktn/provider-awscc'

new dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.s3Configuration">s3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference">DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfiguration">DataAwsccTimestreamInfluxDbBackupLogDeliveryConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Configuration`<sup>Required</sup> <a name="s3Configuration" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.s3Configuration"></a>

```typescript
public readonly s3Configuration: DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference">DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccTimestreamInfluxDbBackupLogDeliveryConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfiguration">DataAwsccTimestreamInfluxDbBackupLogDeliveryConfiguration</a>

---


### DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference <a name="DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccTimestreamInfluxDbBackup } from '@cdktn/provider-awscc'

new dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration">DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration">DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration</a>

---


### DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference <a name="DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.Initializer"></a>

```typescript
import { dataAwsccTimestreamInfluxDbBackup } from '@cdktn/provider-awscc'

new dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceSchedule">DataAwsccTimestreamInfluxDbBackupMaintenanceSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccTimestreamInfluxDbBackupMaintenanceSchedule;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceSchedule">DataAwsccTimestreamInfluxDbBackupMaintenanceSchedule</a>

---


### DataAwsccTimestreamInfluxDbBackupTagsList <a name="DataAwsccTimestreamInfluxDbBackupTagsList" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.Initializer"></a>

```typescript
import { dataAwsccTimestreamInfluxDbBackup } from '@cdktn/provider-awscc'

new dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.get"></a>

```typescript
public get(index: number): DataAwsccTimestreamInfluxDbBackupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccTimestreamInfluxDbBackupTagsOutputReference <a name="DataAwsccTimestreamInfluxDbBackupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccTimestreamInfluxDbBackup } from '@cdktn/provider-awscc'

new dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTags">DataAwsccTimestreamInfluxDbBackupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccTimestreamInfluxDbBackupTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTags">DataAwsccTimestreamInfluxDbBackupTags</a>

---



