# `dataAwsccConnectInstanceStorageConfig` Submodule <a name="`dataAwsccConnectInstanceStorageConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccConnectInstanceStorageConfig <a name="DataAwsccConnectInstanceStorageConfig" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/connect_instance_storage_config awscc_connect_instance_storage_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.Initializer"></a>

```typescript
import { dataAwsccConnectInstanceStorageConfig } from '@cdktn/provider-awscc'

new dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig(scope: Construct, id: string, config: DataAwsccConnectInstanceStorageConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig">DataAwsccConnectInstanceStorageConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig">DataAwsccConnectInstanceStorageConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccConnectInstanceStorageConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.isConstruct"></a>

```typescript
import { dataAwsccConnectInstanceStorageConfig } from '@cdktn/provider-awscc'

dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.isTerraformElement"></a>

```typescript
import { dataAwsccConnectInstanceStorageConfig } from '@cdktn/provider-awscc'

dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.isTerraformDataSource"></a>

```typescript
import { dataAwsccConnectInstanceStorageConfig } from '@cdktn/provider-awscc'

dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.generateConfigForImport"></a>

```typescript
import { dataAwsccConnectInstanceStorageConfig } from '@cdktn/provider-awscc'

dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccConnectInstanceStorageConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccConnectInstanceStorageConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccConnectInstanceStorageConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/connect_instance_storage_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccConnectInstanceStorageConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.associationId">associationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.kinesisFirehoseConfig">kinesisFirehoseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference">DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.kinesisStreamConfig">kinesisStreamConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference">DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.kinesisVideoStreamConfig">kinesisVideoStreamConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference">DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.s3Config">s3Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference">DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.storageType">storageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.associationId"></a>

```typescript
public readonly associationId: string;
```

- *Type:* string

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `kinesisFirehoseConfig`<sup>Required</sup> <a name="kinesisFirehoseConfig" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.kinesisFirehoseConfig"></a>

```typescript
public readonly kinesisFirehoseConfig: DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference">DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference</a>

---

##### `kinesisStreamConfig`<sup>Required</sup> <a name="kinesisStreamConfig" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.kinesisStreamConfig"></a>

```typescript
public readonly kinesisStreamConfig: DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference">DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference</a>

---

##### `kinesisVideoStreamConfig`<sup>Required</sup> <a name="kinesisVideoStreamConfig" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.kinesisVideoStreamConfig"></a>

```typescript
public readonly kinesisVideoStreamConfig: DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference">DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference</a>

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `s3Config`<sup>Required</sup> <a name="s3Config" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.s3Config"></a>

```typescript
public readonly s3Config: DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference">DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference</a>

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccConnectInstanceStorageConfigConfig <a name="DataAwsccConnectInstanceStorageConfigConfig" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.Initializer"></a>

```typescript
import { dataAwsccConnectInstanceStorageConfig } from '@cdktn/provider-awscc'

const dataAwsccConnectInstanceStorageConfigConfig: dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/connect_instance_storage_config#id DataAwsccConnectInstanceStorageConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfig <a name="DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfig" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfig.Initializer"></a>

```typescript
import { dataAwsccConnectInstanceStorageConfig } from '@cdktn/provider-awscc'

const dataAwsccConnectInstanceStorageConfigKinesisFirehoseConfig: dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfig = { ... }
```


### DataAwsccConnectInstanceStorageConfigKinesisStreamConfig <a name="DataAwsccConnectInstanceStorageConfigKinesisStreamConfig" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfig.Initializer"></a>

```typescript
import { dataAwsccConnectInstanceStorageConfig } from '@cdktn/provider-awscc'

const dataAwsccConnectInstanceStorageConfigKinesisStreamConfig: dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfig = { ... }
```


### DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfig <a name="DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfig" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfig.Initializer"></a>

```typescript
import { dataAwsccConnectInstanceStorageConfig } from '@cdktn/provider-awscc'

const dataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfig: dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfig = { ... }
```


### DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig <a name="DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig.Initializer"></a>

```typescript
import { dataAwsccConnectInstanceStorageConfig } from '@cdktn/provider-awscc'

const dataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig: dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig = { ... }
```


### DataAwsccConnectInstanceStorageConfigS3Config <a name="DataAwsccConnectInstanceStorageConfigS3Config" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3Config.Initializer"></a>

```typescript
import { dataAwsccConnectInstanceStorageConfig } from '@cdktn/provider-awscc'

const dataAwsccConnectInstanceStorageConfigS3Config: dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3Config = { ... }
```


### DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfig <a name="DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfig" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfig.Initializer"></a>

```typescript
import { dataAwsccConnectInstanceStorageConfig } from '@cdktn/provider-awscc'

const dataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfig: dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference <a name="DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectInstanceStorageConfig } from '@cdktn/provider-awscc'

new dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.firehoseArn">firehoseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfig">DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `firehoseArn`<sup>Required</sup> <a name="firehoseArn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.firehoseArn"></a>

```typescript
public readonly firehoseArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfig">DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfig</a>

---


### DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference <a name="DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectInstanceStorageConfig } from '@cdktn/provider-awscc'

new dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.streamArn">streamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfig">DataAwsccConnectInstanceStorageConfigKinesisStreamConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.streamArn"></a>

```typescript
public readonly streamArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectInstanceStorageConfigKinesisStreamConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfig">DataAwsccConnectInstanceStorageConfigKinesisStreamConfig</a>

---


### DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference <a name="DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectInstanceStorageConfig } from '@cdktn/provider-awscc'

new dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.encryptionType">encryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig">DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig">DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig</a>

---


### DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference <a name="DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectInstanceStorageConfig } from '@cdktn/provider-awscc'

new dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference">DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.retentionPeriodHours">retentionPeriodHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfig">DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference">DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference</a>

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `retentionPeriodHours`<sup>Required</sup> <a name="retentionPeriodHours" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.retentionPeriodHours"></a>

```typescript
public readonly retentionPeriodHours: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfig">DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfig</a>

---


### DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference <a name="DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectInstanceStorageConfig } from '@cdktn/provider-awscc'

new dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.encryptionType">encryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfig">DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfig">DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfig</a>

---


### DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference <a name="DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectInstanceStorageConfig } from '@cdktn/provider-awscc'

new dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketPrefix">bucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference">DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3Config">DataAwsccConnectInstanceStorageConfigS3Config</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `bucketPrefix`<sup>Required</sup> <a name="bucketPrefix" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketPrefix"></a>

```typescript
public readonly bucketPrefix: string;
```

- *Type:* string

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference">DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectInstanceStorageConfigS3Config;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3Config">DataAwsccConnectInstanceStorageConfigS3Config</a>

---



