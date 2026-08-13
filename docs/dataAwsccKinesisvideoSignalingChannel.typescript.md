# `dataAwsccKinesisvideoSignalingChannel` Submodule <a name="`dataAwsccKinesisvideoSignalingChannel` Submodule" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccKinesisvideoSignalingChannel <a name="DataAwsccKinesisvideoSignalingChannel" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/kinesisvideo_signaling_channel awscc_kinesisvideo_signaling_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.Initializer"></a>

```typescript
import { dataAwsccKinesisvideoSignalingChannel } from '@cdktn/provider-awscc'

new dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel(scope: Construct, id: string, config: DataAwsccKinesisvideoSignalingChannelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelConfig">DataAwsccKinesisvideoSignalingChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelConfig">DataAwsccKinesisvideoSignalingChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccKinesisvideoSignalingChannel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.isConstruct"></a>

```typescript
import { dataAwsccKinesisvideoSignalingChannel } from '@cdktn/provider-awscc'

dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.isTerraformElement"></a>

```typescript
import { dataAwsccKinesisvideoSignalingChannel } from '@cdktn/provider-awscc'

dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.isTerraformDataSource"></a>

```typescript
import { dataAwsccKinesisvideoSignalingChannel } from '@cdktn/provider-awscc'

dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.generateConfigForImport"></a>

```typescript
import { dataAwsccKinesisvideoSignalingChannel } from '@cdktn/provider-awscc'

dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccKinesisvideoSignalingChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccKinesisvideoSignalingChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccKinesisvideoSignalingChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/kinesisvideo_signaling_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccKinesisvideoSignalingChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.messageTtlSeconds">messageTtlSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsList">DataAwsccKinesisvideoSignalingChannelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `messageTtlSeconds`<sup>Required</sup> <a name="messageTtlSeconds" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.messageTtlSeconds"></a>

```typescript
public readonly messageTtlSeconds: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.tags"></a>

```typescript
public readonly tags: DataAwsccKinesisvideoSignalingChannelTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsList">DataAwsccKinesisvideoSignalingChannelTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccKinesisvideoSignalingChannelConfig <a name="DataAwsccKinesisvideoSignalingChannelConfig" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelConfig.Initializer"></a>

```typescript
import { dataAwsccKinesisvideoSignalingChannel } from '@cdktn/provider-awscc'

const dataAwsccKinesisvideoSignalingChannelConfig: dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/kinesisvideo_signaling_channel#id DataAwsccKinesisvideoSignalingChannel#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccKinesisvideoSignalingChannelTags <a name="DataAwsccKinesisvideoSignalingChannelTags" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTags.Initializer"></a>

```typescript
import { dataAwsccKinesisvideoSignalingChannel } from '@cdktn/provider-awscc'

const dataAwsccKinesisvideoSignalingChannelTags: dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccKinesisvideoSignalingChannelTagsList <a name="DataAwsccKinesisvideoSignalingChannelTagsList" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsList.Initializer"></a>

```typescript
import { dataAwsccKinesisvideoSignalingChannel } from '@cdktn/provider-awscc'

new dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsList.get"></a>

```typescript
public get(index: number): DataAwsccKinesisvideoSignalingChannelTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccKinesisvideoSignalingChannelTagsOutputReference <a name="DataAwsccKinesisvideoSignalingChannelTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccKinesisvideoSignalingChannel } from '@cdktn/provider-awscc'

new dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTags">DataAwsccKinesisvideoSignalingChannelTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKinesisvideoSignalingChannelTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisvideoSignalingChannel.DataAwsccKinesisvideoSignalingChannelTags">DataAwsccKinesisvideoSignalingChannelTags</a>

---



