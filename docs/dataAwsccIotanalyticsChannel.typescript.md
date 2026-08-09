# `dataAwsccIotanalyticsChannel` Submodule <a name="`dataAwsccIotanalyticsChannel` Submodule" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotanalyticsChannel <a name="DataAwsccIotanalyticsChannel" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/iotanalytics_channel awscc_iotanalytics_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsChannel } from '@cdktn/provider-awscc'

new dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel(scope: Construct, id: string, config: DataAwsccIotanalyticsChannelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelConfig">DataAwsccIotanalyticsChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelConfig">DataAwsccIotanalyticsChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotanalyticsChannel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.isConstruct"></a>

```typescript
import { dataAwsccIotanalyticsChannel } from '@cdktn/provider-awscc'

dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.isTerraformElement"></a>

```typescript
import { dataAwsccIotanalyticsChannel } from '@cdktn/provider-awscc'

dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.isTerraformDataSource"></a>

```typescript
import { dataAwsccIotanalyticsChannel } from '@cdktn/provider-awscc'

dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.generateConfigForImport"></a>

```typescript
import { dataAwsccIotanalyticsChannel } from '@cdktn/provider-awscc'

dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccIotanalyticsChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccIotanalyticsChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccIotanalyticsChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/iotanalytics_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotanalyticsChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.channelId">channelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.channelName">channelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.channelStorage">channelStorage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference">DataAwsccIotanalyticsChannelChannelStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.retentionPeriod">retentionPeriod</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference">DataAwsccIotanalyticsChannelRetentionPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsList">DataAwsccIotanalyticsChannelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

---

##### `channelStorage`<sup>Required</sup> <a name="channelStorage" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.channelStorage"></a>

```typescript
public readonly channelStorage: DataAwsccIotanalyticsChannelChannelStorageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference">DataAwsccIotanalyticsChannelChannelStorageOutputReference</a>

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.retentionPeriod"></a>

```typescript
public readonly retentionPeriod: DataAwsccIotanalyticsChannelRetentionPeriodOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference">DataAwsccIotanalyticsChannelRetentionPeriodOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.tags"></a>

```typescript
public readonly tags: DataAwsccIotanalyticsChannelTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsList">DataAwsccIotanalyticsChannelTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotanalyticsChannelChannelStorage <a name="DataAwsccIotanalyticsChannelChannelStorage" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorage.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsChannel } from '@cdktn/provider-awscc'

const dataAwsccIotanalyticsChannelChannelStorage: dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorage = { ... }
```


### DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3 <a name="DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsChannel } from '@cdktn/provider-awscc'

const dataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3: dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3 = { ... }
```


### DataAwsccIotanalyticsChannelConfig <a name="DataAwsccIotanalyticsChannelConfig" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelConfig.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsChannel } from '@cdktn/provider-awscc'

const dataAwsccIotanalyticsChannelConfig: dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/iotanalytics_channel#id DataAwsccIotanalyticsChannel#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotanalyticsChannelRetentionPeriod <a name="DataAwsccIotanalyticsChannelRetentionPeriod" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriod.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsChannel } from '@cdktn/provider-awscc'

const dataAwsccIotanalyticsChannelRetentionPeriod: dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriod = { ... }
```


### DataAwsccIotanalyticsChannelTags <a name="DataAwsccIotanalyticsChannelTags" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTags.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsChannel } from '@cdktn/provider-awscc'

const dataAwsccIotanalyticsChannelTags: dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference <a name="DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsChannel } from '@cdktn/provider-awscc'

new dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.keyPrefix">keyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3">DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `keyPrefix`<sup>Required</sup> <a name="keyPrefix" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.keyPrefix"></a>

```typescript
public readonly keyPrefix: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3">DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3</a>

---


### DataAwsccIotanalyticsChannelChannelStorageOutputReference <a name="DataAwsccIotanalyticsChannelChannelStorageOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsChannel } from '@cdktn/provider-awscc'

new dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.property.customerManagedS3">customerManagedS3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference">DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.property.serviceManagedS3">serviceManagedS3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorage">DataAwsccIotanalyticsChannelChannelStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerManagedS3`<sup>Required</sup> <a name="customerManagedS3" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.property.customerManagedS3"></a>

```typescript
public readonly customerManagedS3: DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference">DataAwsccIotanalyticsChannelChannelStorageCustomerManagedS3OutputReference</a>

---

##### `serviceManagedS3`<sup>Required</sup> <a name="serviceManagedS3" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.property.serviceManagedS3"></a>

```typescript
public readonly serviceManagedS3: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotanalyticsChannelChannelStorage;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelChannelStorage">DataAwsccIotanalyticsChannelChannelStorage</a>

---


### DataAwsccIotanalyticsChannelRetentionPeriodOutputReference <a name="DataAwsccIotanalyticsChannelRetentionPeriodOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsChannel } from '@cdktn/provider-awscc'

new dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.property.numberOfDays">numberOfDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.property.unlimited">unlimited</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriod">DataAwsccIotanalyticsChannelRetentionPeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `numberOfDays`<sup>Required</sup> <a name="numberOfDays" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.property.numberOfDays"></a>

```typescript
public readonly numberOfDays: number;
```

- *Type:* number

---

##### `unlimited`<sup>Required</sup> <a name="unlimited" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.property.unlimited"></a>

```typescript
public readonly unlimited: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotanalyticsChannelRetentionPeriod;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelRetentionPeriod">DataAwsccIotanalyticsChannelRetentionPeriod</a>

---


### DataAwsccIotanalyticsChannelTagsList <a name="DataAwsccIotanalyticsChannelTagsList" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsList.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsChannel } from '@cdktn/provider-awscc'

new dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsList.get"></a>

```typescript
public get(index: number): DataAwsccIotanalyticsChannelTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotanalyticsChannelTagsOutputReference <a name="DataAwsccIotanalyticsChannelTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsChannel } from '@cdktn/provider-awscc'

new dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTags">DataAwsccIotanalyticsChannelTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotanalyticsChannelTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsChannel.DataAwsccIotanalyticsChannelTags">DataAwsccIotanalyticsChannelTags</a>

---



