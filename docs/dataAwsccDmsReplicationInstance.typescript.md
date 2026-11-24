# `dataAwsccDmsReplicationInstance` Submodule <a name="`dataAwsccDmsReplicationInstance` Submodule" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDmsReplicationInstance <a name="DataAwsccDmsReplicationInstance" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/dms_replication_instance awscc_dms_replication_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.Initializer"></a>

```typescript
import { dataAwsccDmsReplicationInstance } from '@cdktn/provider-awscc'

new dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance(scope: Construct, id: string, config: DataAwsccDmsReplicationInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceConfig">DataAwsccDmsReplicationInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceConfig">DataAwsccDmsReplicationInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDmsReplicationInstance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.isConstruct"></a>

```typescript
import { dataAwsccDmsReplicationInstance } from '@cdktn/provider-awscc'

dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.isTerraformElement"></a>

```typescript
import { dataAwsccDmsReplicationInstance } from '@cdktn/provider-awscc'

dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.isTerraformDataSource"></a>

```typescript
import { dataAwsccDmsReplicationInstance } from '@cdktn/provider-awscc'

dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.generateConfigForImport"></a>

```typescript
import { dataAwsccDmsReplicationInstance } from '@cdktn/provider-awscc'

dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccDmsReplicationInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDmsReplicationInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDmsReplicationInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/dms_replication_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDmsReplicationInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.allocatedStorage">allocatedStorage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.allowMajorVersionUpgrade">allowMajorVersionUpgrade</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.dnsNameServers">dnsNameServers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.multiAz">multiAz</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.networkType">networkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.publiclyAccessible">publiclyAccessible</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.replicationInstanceArn">replicationInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.replicationInstanceClass">replicationInstanceClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.replicationInstanceIdentifier">replicationInstanceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.replicationInstancePrivateIpAddresses">replicationInstancePrivateIpAddresses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.replicationInstancePublicIpAddresses">replicationInstancePublicIpAddresses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.replicationSubnetGroupIdentifier">replicationSubnetGroupIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.resourceIdentifier">resourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsList">DataAwsccDmsReplicationInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `allocatedStorage`<sup>Required</sup> <a name="allocatedStorage" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.allocatedStorage"></a>

```typescript
public readonly allocatedStorage: number;
```

- *Type:* number

---

##### `allowMajorVersionUpgrade`<sup>Required</sup> <a name="allowMajorVersionUpgrade" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.allowMajorVersionUpgrade"></a>

```typescript
public readonly allowMajorVersionUpgrade: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="autoMinorVersionUpgrade" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.autoMinorVersionUpgrade"></a>

```typescript
public readonly autoMinorVersionUpgrade: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `dnsNameServers`<sup>Required</sup> <a name="dnsNameServers" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.dnsNameServers"></a>

```typescript
public readonly dnsNameServers: string;
```

- *Type:* string

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `multiAz`<sup>Required</sup> <a name="multiAz" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.multiAz"></a>

```typescript
public readonly multiAz: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `replicationInstanceArn`<sup>Required</sup> <a name="replicationInstanceArn" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.replicationInstanceArn"></a>

```typescript
public readonly replicationInstanceArn: string;
```

- *Type:* string

---

##### `replicationInstanceClass`<sup>Required</sup> <a name="replicationInstanceClass" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.replicationInstanceClass"></a>

```typescript
public readonly replicationInstanceClass: string;
```

- *Type:* string

---

##### `replicationInstanceIdentifier`<sup>Required</sup> <a name="replicationInstanceIdentifier" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.replicationInstanceIdentifier"></a>

```typescript
public readonly replicationInstanceIdentifier: string;
```

- *Type:* string

---

##### `replicationInstancePrivateIpAddresses`<sup>Required</sup> <a name="replicationInstancePrivateIpAddresses" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.replicationInstancePrivateIpAddresses"></a>

```typescript
public readonly replicationInstancePrivateIpAddresses: string;
```

- *Type:* string

---

##### `replicationInstancePublicIpAddresses`<sup>Required</sup> <a name="replicationInstancePublicIpAddresses" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.replicationInstancePublicIpAddresses"></a>

```typescript
public readonly replicationInstancePublicIpAddresses: string;
```

- *Type:* string

---

##### `replicationSubnetGroupIdentifier`<sup>Required</sup> <a name="replicationSubnetGroupIdentifier" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.replicationSubnetGroupIdentifier"></a>

```typescript
public readonly replicationSubnetGroupIdentifier: string;
```

- *Type:* string

---

##### `resourceIdentifier`<sup>Required</sup> <a name="resourceIdentifier" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.resourceIdentifier"></a>

```typescript
public readonly resourceIdentifier: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.tags"></a>

```typescript
public readonly tags: DataAwsccDmsReplicationInstanceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsList">DataAwsccDmsReplicationInstanceTagsList</a>

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDmsReplicationInstanceConfig <a name="DataAwsccDmsReplicationInstanceConfig" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceConfig.Initializer"></a>

```typescript
import { dataAwsccDmsReplicationInstance } from '@cdktn/provider-awscc'

const dataAwsccDmsReplicationInstanceConfig: dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/dms_replication_instance#id DataAwsccDmsReplicationInstance#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDmsReplicationInstanceTags <a name="DataAwsccDmsReplicationInstanceTags" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTags.Initializer"></a>

```typescript
import { dataAwsccDmsReplicationInstance } from '@cdktn/provider-awscc'

const dataAwsccDmsReplicationInstanceTags: dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDmsReplicationInstanceTagsList <a name="DataAwsccDmsReplicationInstanceTagsList" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsList.Initializer"></a>

```typescript
import { dataAwsccDmsReplicationInstance } from '@cdktn/provider-awscc'

new dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsList.get"></a>

```typescript
public get(index: number): DataAwsccDmsReplicationInstanceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDmsReplicationInstanceTagsOutputReference <a name="DataAwsccDmsReplicationInstanceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDmsReplicationInstance } from '@cdktn/provider-awscc'

new dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTags">DataAwsccDmsReplicationInstanceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDmsReplicationInstanceTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationInstance.DataAwsccDmsReplicationInstanceTags">DataAwsccDmsReplicationInstanceTags</a>

---



