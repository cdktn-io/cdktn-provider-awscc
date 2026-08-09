# `dataAwsccDevopsguruNotificationChannel` Submodule <a name="`dataAwsccDevopsguruNotificationChannel` Submodule" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDevopsguruNotificationChannel <a name="DataAwsccDevopsguruNotificationChannel" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/devopsguru_notification_channel awscc_devopsguru_notification_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.Initializer"></a>

```typescript
import { dataAwsccDevopsguruNotificationChannel } from '@cdktn/provider-awscc'

new dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel(scope: Construct, id: string, config: DataAwsccDevopsguruNotificationChannelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig">DataAwsccDevopsguruNotificationChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig">DataAwsccDevopsguruNotificationChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDevopsguruNotificationChannel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.isConstruct"></a>

```typescript
import { dataAwsccDevopsguruNotificationChannel } from '@cdktn/provider-awscc'

dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.isTerraformElement"></a>

```typescript
import { dataAwsccDevopsguruNotificationChannel } from '@cdktn/provider-awscc'

dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.isTerraformDataSource"></a>

```typescript
import { dataAwsccDevopsguruNotificationChannel } from '@cdktn/provider-awscc'

dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.generateConfigForImport"></a>

```typescript
import { dataAwsccDevopsguruNotificationChannel } from '@cdktn/provider-awscc'

dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccDevopsguruNotificationChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDevopsguruNotificationChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDevopsguruNotificationChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/devopsguru_notification_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDevopsguruNotificationChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference">DataAwsccDevopsguruNotificationChannelConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.notificationChannelId">notificationChannelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.config"></a>

```typescript
public readonly config: DataAwsccDevopsguruNotificationChannelConfigAOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference">DataAwsccDevopsguruNotificationChannelConfigAOutputReference</a>

---

##### `notificationChannelId`<sup>Required</sup> <a name="notificationChannelId" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.notificationChannelId"></a>

```typescript
public readonly notificationChannelId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDevopsguruNotificationChannelConfig <a name="DataAwsccDevopsguruNotificationChannelConfig" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig.Initializer"></a>

```typescript
import { dataAwsccDevopsguruNotificationChannel } from '@cdktn/provider-awscc'

const dataAwsccDevopsguruNotificationChannelConfig: dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/devopsguru_notification_channel#id DataAwsccDevopsguruNotificationChannel#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDevopsguruNotificationChannelConfigA <a name="DataAwsccDevopsguruNotificationChannelConfigA" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigA.Initializer"></a>

```typescript
import { dataAwsccDevopsguruNotificationChannel } from '@cdktn/provider-awscc'

const dataAwsccDevopsguruNotificationChannelConfigA: dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigA = { ... }
```


### DataAwsccDevopsguruNotificationChannelConfigFilters <a name="DataAwsccDevopsguruNotificationChannelConfigFilters" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFilters.Initializer"></a>

```typescript
import { dataAwsccDevopsguruNotificationChannel } from '@cdktn/provider-awscc'

const dataAwsccDevopsguruNotificationChannelConfigFilters: dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFilters = { ... }
```


### DataAwsccDevopsguruNotificationChannelConfigSns <a name="DataAwsccDevopsguruNotificationChannelConfigSns" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSns.Initializer"></a>

```typescript
import { dataAwsccDevopsguruNotificationChannel } from '@cdktn/provider-awscc'

const dataAwsccDevopsguruNotificationChannelConfigSns: dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSns = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDevopsguruNotificationChannelConfigAOutputReference <a name="DataAwsccDevopsguruNotificationChannelConfigAOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.Initializer"></a>

```typescript
import { dataAwsccDevopsguruNotificationChannel } from '@cdktn/provider-awscc'

new dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference">DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.property.sns">sns</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference">DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigA">DataAwsccDevopsguruNotificationChannelConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.property.filters"></a>

```typescript
public readonly filters: DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference">DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference</a>

---

##### `sns`<sup>Required</sup> <a name="sns" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.property.sns"></a>

```typescript
public readonly sns: DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference">DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDevopsguruNotificationChannelConfigA;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigA">DataAwsccDevopsguruNotificationChannelConfigA</a>

---


### DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference <a name="DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.Initializer"></a>

```typescript
import { dataAwsccDevopsguruNotificationChannel } from '@cdktn/provider-awscc'

new dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.property.messageTypes">messageTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.property.severities">severities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFilters">DataAwsccDevopsguruNotificationChannelConfigFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `messageTypes`<sup>Required</sup> <a name="messageTypes" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.property.messageTypes"></a>

```typescript
public readonly messageTypes: string[];
```

- *Type:* string[]

---

##### `severities`<sup>Required</sup> <a name="severities" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.property.severities"></a>

```typescript
public readonly severities: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDevopsguruNotificationChannelConfigFilters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFilters">DataAwsccDevopsguruNotificationChannelConfigFilters</a>

---


### DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference <a name="DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDevopsguruNotificationChannel } from '@cdktn/provider-awscc'

new dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.property.topicArn">topicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSns">DataAwsccDevopsguruNotificationChannelConfigSns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDevopsguruNotificationChannelConfigSns;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSns">DataAwsccDevopsguruNotificationChannelConfigSns</a>

---



