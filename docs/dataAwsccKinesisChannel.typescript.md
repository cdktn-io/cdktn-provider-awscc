# `dataAwsccKinesisChannel` Submodule <a name="`dataAwsccKinesisChannel` Submodule" id="@cdktn/provider-awscc.dataAwsccKinesisChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccKinesisChannel <a name="DataAwsccKinesisChannel" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/kinesis_channel awscc_kinesis_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.Initializer"></a>

```typescript
import { dataAwsccKinesisChannel } from '@cdktn/provider-awscc'

new dataAwsccKinesisChannel.DataAwsccKinesisChannel(scope: Construct, id: string, config: DataAwsccKinesisChannelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig">DataAwsccKinesisChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig">DataAwsccKinesisChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccKinesisChannel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.isConstruct"></a>

```typescript
import { dataAwsccKinesisChannel } from '@cdktn/provider-awscc'

dataAwsccKinesisChannel.DataAwsccKinesisChannel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.isTerraformElement"></a>

```typescript
import { dataAwsccKinesisChannel } from '@cdktn/provider-awscc'

dataAwsccKinesisChannel.DataAwsccKinesisChannel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.isTerraformDataSource"></a>

```typescript
import { dataAwsccKinesisChannel } from '@cdktn/provider-awscc'

dataAwsccKinesisChannel.DataAwsccKinesisChannel.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.generateConfigForImport"></a>

```typescript
import { dataAwsccKinesisChannel } from '@cdktn/provider-awscc'

dataAwsccKinesisChannel.DataAwsccKinesisChannel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccKinesisChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccKinesisChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccKinesisChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/kinesis_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccKinesisChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.channelArn">channelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.channelCreationTimestamp">channelCreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.channelId">channelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.channelName">channelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.channelStatus">channelStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference">DataAwsccKinesisChannelEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference">DataAwsccKinesisChannelLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.s3DestinationConfiguration">s3DestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference">DataAwsccKinesisChannelS3DestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.s3TablesDestinationConfiguration">s3TablesDestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference">DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.serviceExecutionRoleArn">serviceExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.streamConfigurationList">streamConfigurationList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList">DataAwsccKinesisChannelStreamConfigurationListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList">DataAwsccKinesisChannelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `channelArn`<sup>Required</sup> <a name="channelArn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.channelArn"></a>

```typescript
public readonly channelArn: string;
```

- *Type:* string

---

##### `channelCreationTimestamp`<sup>Required</sup> <a name="channelCreationTimestamp" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.channelCreationTimestamp"></a>

```typescript
public readonly channelCreationTimestamp: string;
```

- *Type:* string

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

---

##### `channelStatus`<sup>Required</sup> <a name="channelStatus" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.channelStatus"></a>

```typescript
public readonly channelStatus: string;
```

- *Type:* string

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: DataAwsccKinesisChannelEncryptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference">DataAwsccKinesisChannelEncryptionConfigurationOutputReference</a>

---

##### `loggingConfiguration`<sup>Required</sup> <a name="loggingConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.loggingConfiguration"></a>

```typescript
public readonly loggingConfiguration: DataAwsccKinesisChannelLoggingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference">DataAwsccKinesisChannelLoggingConfigurationOutputReference</a>

---

##### `s3DestinationConfiguration`<sup>Required</sup> <a name="s3DestinationConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.s3DestinationConfiguration"></a>

```typescript
public readonly s3DestinationConfiguration: DataAwsccKinesisChannelS3DestinationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference">DataAwsccKinesisChannelS3DestinationConfigurationOutputReference</a>

---

##### `s3TablesDestinationConfiguration`<sup>Required</sup> <a name="s3TablesDestinationConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.s3TablesDestinationConfiguration"></a>

```typescript
public readonly s3TablesDestinationConfiguration: DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference">DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference</a>

---

##### `serviceExecutionRoleArn`<sup>Required</sup> <a name="serviceExecutionRoleArn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.serviceExecutionRoleArn"></a>

```typescript
public readonly serviceExecutionRoleArn: string;
```

- *Type:* string

---

##### `streamConfigurationList`<sup>Required</sup> <a name="streamConfigurationList" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.streamConfigurationList"></a>

```typescript
public readonly streamConfigurationList: DataAwsccKinesisChannelStreamConfigurationListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList">DataAwsccKinesisChannelStreamConfigurationListStructList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.tags"></a>

```typescript
public readonly tags: DataAwsccKinesisChannelTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList">DataAwsccKinesisChannelTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccKinesisChannelConfig <a name="DataAwsccKinesisChannelConfig" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig.Initializer"></a>

```typescript
import { dataAwsccKinesisChannel } from '@cdktn/provider-awscc'

const dataAwsccKinesisChannelConfig: dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/kinesis_channel#id DataAwsccKinesisChannel#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccKinesisChannelEncryptionConfiguration <a name="DataAwsccKinesisChannelEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfiguration.Initializer"></a>

```typescript
import { dataAwsccKinesisChannel } from '@cdktn/provider-awscc'

const dataAwsccKinesisChannelEncryptionConfiguration: dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfiguration = { ... }
```


### DataAwsccKinesisChannelLoggingConfiguration <a name="DataAwsccKinesisChannelLoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfiguration.Initializer"></a>

```typescript
import { dataAwsccKinesisChannel } from '@cdktn/provider-awscc'

const dataAwsccKinesisChannelLoggingConfiguration: dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfiguration = { ... }
```


### DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogs <a name="DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogs" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogs.Initializer"></a>

```typescript
import { dataAwsccKinesisChannel } from '@cdktn/provider-awscc'

const dataAwsccKinesisChannelLoggingConfigurationCloudwatchLogs: dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogs = { ... }
```


### DataAwsccKinesisChannelS3DestinationConfiguration <a name="DataAwsccKinesisChannelS3DestinationConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfiguration.Initializer"></a>

```typescript
import { dataAwsccKinesisChannel } from '@cdktn/provider-awscc'

const dataAwsccKinesisChannelS3DestinationConfiguration: dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfiguration = { ... }
```


### DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration <a name="DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration.Initializer"></a>

```typescript
import { dataAwsccKinesisChannel } from '@cdktn/provider-awscc'

const dataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration: dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration = { ... }
```


### DataAwsccKinesisChannelS3DestinationConfigurationStorageConfiguration <a name="DataAwsccKinesisChannelS3DestinationConfigurationStorageConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfiguration.Initializer"></a>

```typescript
import { dataAwsccKinesisChannel } from '@cdktn/provider-awscc'

const dataAwsccKinesisChannelS3DestinationConfigurationStorageConfiguration: dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfiguration = { ... }
```


### DataAwsccKinesisChannelS3TablesDestinationConfiguration <a name="DataAwsccKinesisChannelS3TablesDestinationConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfiguration.Initializer"></a>

```typescript
import { dataAwsccKinesisChannel } from '@cdktn/provider-awscc'

const dataAwsccKinesisChannelS3TablesDestinationConfiguration: dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfiguration = { ... }
```


### DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration <a name="DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration.Initializer"></a>

```typescript
import { dataAwsccKinesisChannel } from '@cdktn/provider-awscc'

const dataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration: dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration = { ... }
```


### DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec <a name="DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec.Initializer"></a>

```typescript
import { dataAwsccKinesisChannel } from '@cdktn/provider-awscc'

const dataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec: dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec = { ... }
```


### DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields <a name="DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields.Initializer"></a>

```typescript
import { dataAwsccKinesisChannel } from '@cdktn/provider-awscc'

const dataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields: dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields = { ... }
```


### DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct <a name="DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct.Initializer"></a>

```typescript
import { dataAwsccKinesisChannel } from '@cdktn/provider-awscc'

const dataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct: dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct = { ... }
```


### DataAwsccKinesisChannelStreamConfigurationListRecordConfiguration <a name="DataAwsccKinesisChannelStreamConfigurationListRecordConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfiguration.Initializer"></a>

```typescript
import { dataAwsccKinesisChannel } from '@cdktn/provider-awscc'

const dataAwsccKinesisChannelStreamConfigurationListRecordConfiguration: dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfiguration = { ... }
```


### DataAwsccKinesisChannelStreamConfigurationListStruct <a name="DataAwsccKinesisChannelStreamConfigurationListStruct" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStruct.Initializer"></a>

```typescript
import { dataAwsccKinesisChannel } from '@cdktn/provider-awscc'

const dataAwsccKinesisChannelStreamConfigurationListStruct: dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStruct = { ... }
```


### DataAwsccKinesisChannelTags <a name="DataAwsccKinesisChannelTags" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTags.Initializer"></a>

```typescript
import { dataAwsccKinesisChannel } from '@cdktn/provider-awscc'

const dataAwsccKinesisChannelTags: dataAwsccKinesisChannel.DataAwsccKinesisChannelTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccKinesisChannelEncryptionConfigurationOutputReference <a name="DataAwsccKinesisChannelEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccKinesisChannel } from '@cdktn/provider-awscc'

new dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.property.encryptionType">encryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfiguration">DataAwsccKinesisChannelEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKinesisChannelEncryptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfiguration">DataAwsccKinesisChannelEncryptionConfiguration</a>

---


### DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference <a name="DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.Initializer"></a>

```typescript
import { dataAwsccKinesisChannel } from '@cdktn/provider-awscc'

new dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.logGroupName">logGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.logStreamName">logStreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogs">DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

---

##### `logStreamName`<sup>Required</sup> <a name="logStreamName" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.logStreamName"></a>

```typescript
public readonly logStreamName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogs">DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogs</a>

---


### DataAwsccKinesisChannelLoggingConfigurationOutputReference <a name="DataAwsccKinesisChannelLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccKinesisChannel } from '@cdktn/provider-awscc'

new dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference">DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfiguration">DataAwsccKinesisChannelLoggingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogs`<sup>Required</sup> <a name="cloudwatchLogs" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.property.cloudwatchLogs"></a>

```typescript
public readonly cloudwatchLogs: DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference">DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKinesisChannelLoggingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfiguration">DataAwsccKinesisChannelLoggingConfiguration</a>

---


### DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference <a name="DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccKinesisChannel } from '@cdktn/provider-awscc'

new dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.bucketArn">bucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.errorOutputPrefix">errorOutputPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration">DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

---

##### `errorOutputPrefix`<sup>Required</sup> <a name="errorOutputPrefix" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.errorOutputPrefix"></a>

```typescript
public readonly errorOutputPrefix: string;
```

- *Type:* string

---

##### `expectedBucketOwner`<sup>Required</sup> <a name="expectedBucketOwner" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.expectedBucketOwner"></a>

```typescript
public readonly expectedBucketOwner: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration">DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration</a>

---


### DataAwsccKinesisChannelS3DestinationConfigurationOutputReference <a name="DataAwsccKinesisChannelS3DestinationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccKinesisChannel } from '@cdktn/provider-awscc'

new dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.property.dataFreshnessInSeconds">dataFreshnessInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.property.deadLetterQueueS3Configuration">deadLetterQueueS3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference">DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.property.storageConfiguration">storageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference">DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfiguration">DataAwsccKinesisChannelS3DestinationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataFreshnessInSeconds`<sup>Required</sup> <a name="dataFreshnessInSeconds" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.property.dataFreshnessInSeconds"></a>

```typescript
public readonly dataFreshnessInSeconds: number;
```

- *Type:* number

---

##### `deadLetterQueueS3Configuration`<sup>Required</sup> <a name="deadLetterQueueS3Configuration" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.property.deadLetterQueueS3Configuration"></a>

```typescript
public readonly deadLetterQueueS3Configuration: DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference">DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference</a>

---

##### `storageConfiguration`<sup>Required</sup> <a name="storageConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.property.storageConfiguration"></a>

```typescript
public readonly storageConfiguration: DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference">DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKinesisChannelS3DestinationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfiguration">DataAwsccKinesisChannelS3DestinationConfiguration</a>

---


### DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference <a name="DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccKinesisChannel } from '@cdktn/provider-awscc'

new dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.bucketArn">bucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.compressionType">compressionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.outputKeyTemplate">outputKeyTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfiguration">DataAwsccKinesisChannelS3DestinationConfigurationStorageConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

---

##### `compressionType`<sup>Required</sup> <a name="compressionType" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.compressionType"></a>

```typescript
public readonly compressionType: string;
```

- *Type:* string

---

##### `expectedBucketOwner`<sup>Required</sup> <a name="expectedBucketOwner" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.expectedBucketOwner"></a>

```typescript
public readonly expectedBucketOwner: string;
```

- *Type:* string

---

##### `outputKeyTemplate`<sup>Required</sup> <a name="outputKeyTemplate" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.outputKeyTemplate"></a>

```typescript
public readonly outputKeyTemplate: string;
```

- *Type:* string

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKinesisChannelS3DestinationConfigurationStorageConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfiguration">DataAwsccKinesisChannelS3DestinationConfigurationStorageConfiguration</a>

---


### DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference <a name="DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccKinesisChannel } from '@cdktn/provider-awscc'

new dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.bucketArn">bucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.errorOutputPrefix">errorOutputPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration">DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

---

##### `errorOutputPrefix`<sup>Required</sup> <a name="errorOutputPrefix" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.errorOutputPrefix"></a>

```typescript
public readonly errorOutputPrefix: string;
```

- *Type:* string

---

##### `expectedBucketOwner`<sup>Required</sup> <a name="expectedBucketOwner" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.expectedBucketOwner"></a>

```typescript
public readonly expectedBucketOwner: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration">DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration</a>

---


### DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference <a name="DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccKinesisChannel } from '@cdktn/provider-awscc'

new dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.property.dataFreshnessInSeconds">dataFreshnessInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.property.deadLetterQueueS3Configuration">deadLetterQueueS3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference">DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.property.s3TablesConfigurationList">s3TablesConfigurationList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList">DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfiguration">DataAwsccKinesisChannelS3TablesDestinationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataFreshnessInSeconds`<sup>Required</sup> <a name="dataFreshnessInSeconds" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.property.dataFreshnessInSeconds"></a>

```typescript
public readonly dataFreshnessInSeconds: number;
```

- *Type:* number

---

##### `deadLetterQueueS3Configuration`<sup>Required</sup> <a name="deadLetterQueueS3Configuration" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.property.deadLetterQueueS3Configuration"></a>

```typescript
public readonly deadLetterQueueS3Configuration: DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference">DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference</a>

---

##### `s3TablesConfigurationList`<sup>Required</sup> <a name="s3TablesConfigurationList" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.property.s3TablesConfigurationList"></a>

```typescript
public readonly s3TablesConfigurationList: DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList">DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKinesisChannelS3TablesDestinationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfiguration">DataAwsccKinesisChannelS3TablesDestinationConfiguration</a>

---


### DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference <a name="DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.Initializer"></a>

```typescript
import { dataAwsccKinesisChannel } from '@cdktn/provider-awscc'

new dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.partitionFields">partitionFields</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList">DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec">DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `partitionFields`<sup>Required</sup> <a name="partitionFields" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.partitionFields"></a>

```typescript
public readonly partitionFields: DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList">DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec">DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec</a>

---


### DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList <a name="DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.Initializer"></a>

```typescript
import { dataAwsccKinesisChannel } from '@cdktn/provider-awscc'

new dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.get"></a>

```typescript
public get(index: number): DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference <a name="DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer"></a>

```typescript
import { dataAwsccKinesisChannel } from '@cdktn/provider-awscc'

new dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.sourceName">sourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.transform">transform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields">DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.sourceName"></a>

```typescript
public readonly sourceName: string;
```

- *Type:* string

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.transform"></a>

```typescript
public readonly transform: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields">DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields</a>

---


### DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList <a name="DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.Initializer"></a>

```typescript
import { dataAwsccKinesisChannel } from '@cdktn/provider-awscc'

new dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.get"></a>

```typescript
public get(index: number): DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference <a name="DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer"></a>

```typescript
import { dataAwsccKinesisChannel } from '@cdktn/provider-awscc'

new dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.compressionType">compressionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.partitionSpec">partitionSpec</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference">DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.tableBucketArn">tableBucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct">DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compressionType`<sup>Required</sup> <a name="compressionType" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.compressionType"></a>

```typescript
public readonly compressionType: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `partitionSpec`<sup>Required</sup> <a name="partitionSpec" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.partitionSpec"></a>

```typescript
public readonly partitionSpec: DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference">DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference</a>

---

##### `tableBucketArn`<sup>Required</sup> <a name="tableBucketArn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.tableBucketArn"></a>

```typescript
public readonly tableBucketArn: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct">DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct</a>

---


### DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference <a name="DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccKinesisChannel } from '@cdktn/provider-awscc'

new dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.gsrSchemaArn">gsrSchemaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.recordFormatType">recordFormatType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfiguration">DataAwsccKinesisChannelStreamConfigurationListRecordConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gsrSchemaArn`<sup>Required</sup> <a name="gsrSchemaArn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.gsrSchemaArn"></a>

```typescript
public readonly gsrSchemaArn: string;
```

- *Type:* string

---

##### `recordFormatType`<sup>Required</sup> <a name="recordFormatType" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.recordFormatType"></a>

```typescript
public readonly recordFormatType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKinesisChannelStreamConfigurationListRecordConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfiguration">DataAwsccKinesisChannelStreamConfigurationListRecordConfiguration</a>

---


### DataAwsccKinesisChannelStreamConfigurationListStructList <a name="DataAwsccKinesisChannelStreamConfigurationListStructList" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.Initializer"></a>

```typescript
import { dataAwsccKinesisChannel } from '@cdktn/provider-awscc'

new dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.get"></a>

```typescript
public get(index: number): DataAwsccKinesisChannelStreamConfigurationListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccKinesisChannelStreamConfigurationListStructOutputReference <a name="DataAwsccKinesisChannelStreamConfigurationListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.Initializer"></a>

```typescript
import { dataAwsccKinesisChannel } from '@cdktn/provider-awscc'

new dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.property.recordConfiguration">recordConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference">DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.property.streamArn">streamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStruct">DataAwsccKinesisChannelStreamConfigurationListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `recordConfiguration`<sup>Required</sup> <a name="recordConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.property.recordConfiguration"></a>

```typescript
public readonly recordConfiguration: DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference">DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference</a>

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.property.streamArn"></a>

```typescript
public readonly streamArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKinesisChannelStreamConfigurationListStruct;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStruct">DataAwsccKinesisChannelStreamConfigurationListStruct</a>

---


### DataAwsccKinesisChannelTagsList <a name="DataAwsccKinesisChannelTagsList" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.Initializer"></a>

```typescript
import { dataAwsccKinesisChannel } from '@cdktn/provider-awscc'

new dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.get"></a>

```typescript
public get(index: number): DataAwsccKinesisChannelTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccKinesisChannelTagsOutputReference <a name="DataAwsccKinesisChannelTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccKinesisChannel } from '@cdktn/provider-awscc'

new dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTags">DataAwsccKinesisChannelTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKinesisChannelTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTags">DataAwsccKinesisChannelTags</a>

---



