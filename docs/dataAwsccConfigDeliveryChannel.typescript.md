# `dataAwsccConfigDeliveryChannel` Submodule <a name="`dataAwsccConfigDeliveryChannel` Submodule" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccConfigDeliveryChannel <a name="DataAwsccConfigDeliveryChannel" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/config_delivery_channel awscc_config_delivery_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.Initializer"></a>

```typescript
import { dataAwsccConfigDeliveryChannel } from '@cdktn/provider-awscc'

new dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel(scope: Construct, id: string, config: DataAwsccConfigDeliveryChannelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig">DataAwsccConfigDeliveryChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig">DataAwsccConfigDeliveryChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccConfigDeliveryChannel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.isConstruct"></a>

```typescript
import { dataAwsccConfigDeliveryChannel } from '@cdktn/provider-awscc'

dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.isTerraformElement"></a>

```typescript
import { dataAwsccConfigDeliveryChannel } from '@cdktn/provider-awscc'

dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.isTerraformDataSource"></a>

```typescript
import { dataAwsccConfigDeliveryChannel } from '@cdktn/provider-awscc'

dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.generateConfigForImport"></a>

```typescript
import { dataAwsccConfigDeliveryChannel } from '@cdktn/provider-awscc'

dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccConfigDeliveryChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccConfigDeliveryChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccConfigDeliveryChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/config_delivery_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccConfigDeliveryChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.configSnapshotDeliveryProperties">configSnapshotDeliveryProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference">DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.s3KmsKeyArn">s3KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `configSnapshotDeliveryProperties`<sup>Required</sup> <a name="configSnapshotDeliveryProperties" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.configSnapshotDeliveryProperties"></a>

```typescript
public readonly configSnapshotDeliveryProperties: DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference">DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

---

##### `s3KeyPrefix`<sup>Required</sup> <a name="s3KeyPrefix" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.s3KeyPrefix"></a>

```typescript
public readonly s3KeyPrefix: string;
```

- *Type:* string

---

##### `s3KmsKeyArn`<sup>Required</sup> <a name="s3KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.s3KmsKeyArn"></a>

```typescript
public readonly s3KmsKeyArn: string;
```

- *Type:* string

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccConfigDeliveryChannelConfig <a name="DataAwsccConfigDeliveryChannelConfig" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.Initializer"></a>

```typescript
import { dataAwsccConfigDeliveryChannel } from '@cdktn/provider-awscc'

const dataAwsccConfigDeliveryChannelConfig: dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/config_delivery_channel#id DataAwsccConfigDeliveryChannel#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryProperties <a name="DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryProperties" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryProperties.Initializer"></a>

```typescript
import { dataAwsccConfigDeliveryChannel } from '@cdktn/provider-awscc'

const dataAwsccConfigDeliveryChannelConfigSnapshotDeliveryProperties: dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryProperties = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference <a name="DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccConfigDeliveryChannel } from '@cdktn/provider-awscc'

new dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequency">deliveryFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryProperties">DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deliveryFrequency`<sup>Required</sup> <a name="deliveryFrequency" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequency"></a>

```typescript
public readonly deliveryFrequency: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryProperties">DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryProperties</a>

---



