# `mskChannel` Submodule <a name="`mskChannel` Submodule" id="@cdktn/provider-awscc.mskChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MskChannel <a name="MskChannel" id="@cdktn/provider-awscc.mskChannel.MskChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel awscc_msk_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannel.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

new mskChannel.MskChannel(scope: Construct, id: string, config: MskChannelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig">MskChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mskChannel.MskChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig">MskChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.putIcebergDestinationConfiguration">putIcebergDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.putLoggingInfo">putLoggingInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.putS3DestinationConfiguration">putS3DestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.putTopicConfigurationList">putTopicConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.resetClusterArn">resetClusterArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.resetEncryptionConfiguration">resetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.resetIcebergDestinationConfiguration">resetIcebergDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.resetLoggingInfo">resetLoggingInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.resetS3DestinationConfiguration">resetS3DestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskChannel.MskChannel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mskChannel.MskChannel.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mskChannel.MskChannel.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.mskChannel.MskChannel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mskChannel.MskChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskChannel.MskChannel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.mskChannel.MskChannel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mskChannel.MskChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.mskChannel.MskChannel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.mskChannel.MskChannel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.mskChannel.MskChannel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.mskChannel.MskChannel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.mskChannel.MskChannel.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mskChannel.MskChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.mskChannel.MskChannel.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.mskChannel.MskChannel.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mskChannel.MskChannel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mskChannel.MskChannel.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.mskChannel.MskChannel.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mskChannel.MskChannel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.mskChannel.MskChannel.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mskChannel.MskChannel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mskChannel.MskChannel.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.mskChannel.MskChannel.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mskChannel.MskChannel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktn/provider-awscc.mskChannel.MskChannel.putEncryptionConfiguration"></a>

```typescript
public putEncryptionConfiguration(value: MskChannelEncryptionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskChannel.MskChannel.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>

---

##### `putIcebergDestinationConfiguration` <a name="putIcebergDestinationConfiguration" id="@cdktn/provider-awscc.mskChannel.MskChannel.putIcebergDestinationConfiguration"></a>

```typescript
public putIcebergDestinationConfiguration(value: MskChannelIcebergDestinationConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskChannel.MskChannel.putIcebergDestinationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration">MskChannelIcebergDestinationConfiguration</a>

---

##### `putLoggingInfo` <a name="putLoggingInfo" id="@cdktn/provider-awscc.mskChannel.MskChannel.putLoggingInfo"></a>

```typescript
public putLoggingInfo(value: MskChannelLoggingInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskChannel.MskChannel.putLoggingInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>

---

##### `putS3DestinationConfiguration` <a name="putS3DestinationConfiguration" id="@cdktn/provider-awscc.mskChannel.MskChannel.putS3DestinationConfiguration"></a>

```typescript
public putS3DestinationConfiguration(value: MskChannelS3DestinationConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskChannel.MskChannel.putS3DestinationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration">MskChannelS3DestinationConfiguration</a>

---

##### `putTopicConfigurationList` <a name="putTopicConfigurationList" id="@cdktn/provider-awscc.mskChannel.MskChannel.putTopicConfigurationList"></a>

```typescript
public putTopicConfigurationList(value: IResolvable | MskChannelTopicConfigurationListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskChannel.MskChannel.putTopicConfigurationList.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct">MskChannelTopicConfigurationListStruct</a>[]

---

##### `resetClusterArn` <a name="resetClusterArn" id="@cdktn/provider-awscc.mskChannel.MskChannel.resetClusterArn"></a>

```typescript
public resetClusterArn(): void
```

##### `resetEncryptionConfiguration` <a name="resetEncryptionConfiguration" id="@cdktn/provider-awscc.mskChannel.MskChannel.resetEncryptionConfiguration"></a>

```typescript
public resetEncryptionConfiguration(): void
```

##### `resetIcebergDestinationConfiguration` <a name="resetIcebergDestinationConfiguration" id="@cdktn/provider-awscc.mskChannel.MskChannel.resetIcebergDestinationConfiguration"></a>

```typescript
public resetIcebergDestinationConfiguration(): void
```

##### `resetLoggingInfo` <a name="resetLoggingInfo" id="@cdktn/provider-awscc.mskChannel.MskChannel.resetLoggingInfo"></a>

```typescript
public resetLoggingInfo(): void
```

##### `resetS3DestinationConfiguration` <a name="resetS3DestinationConfiguration" id="@cdktn/provider-awscc.mskChannel.MskChannel.resetS3DestinationConfiguration"></a>

```typescript
public resetS3DestinationConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.mskChannel.MskChannel.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MskChannel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.mskChannel.MskChannel.isConstruct"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

mskChannel.MskChannel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mskChannel.MskChannel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.mskChannel.MskChannel.isTerraformElement"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

mskChannel.MskChannel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mskChannel.MskChannel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannel.isTerraformResource"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

mskChannel.MskChannel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mskChannel.MskChannel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.mskChannel.MskChannel.generateConfigForImport"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

mskChannel.MskChannel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MskChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mskChannel.MskChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mskChannel.MskChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MskChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mskChannel.MskChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MskChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mskChannel.MskChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MskChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.channelArn">channelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference">MskChannelEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.icebergDestinationConfiguration">icebergDestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference">MskChannelIcebergDestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.loggingInfo">loggingInfo</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference">MskChannelLoggingInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.s3DestinationConfiguration">s3DestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference">MskChannelS3DestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.stateInfo">stateInfo</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference">MskChannelStateInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.topicConfigurationList">topicConfigurationList</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList">MskChannelTopicConfigurationListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.channelNameInput">channelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.clusterArnInput">clusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.icebergDestinationConfigurationInput">icebergDestinationConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration">MskChannelIcebergDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.loggingInfoInput">loggingInfoInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.s3DestinationConfigurationInput">s3DestinationConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration">MskChannelS3DestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.topicConfigurationListInput">topicConfigurationListInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct">MskChannelTopicConfigurationListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.channelName">channelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.clusterArn">clusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `channelArn`<sup>Required</sup> <a name="channelArn" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.channelArn"></a>

```typescript
public readonly channelArn: string;
```

- *Type:* string

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: MskChannelEncryptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference">MskChannelEncryptionConfigurationOutputReference</a>

---

##### `icebergDestinationConfiguration`<sup>Required</sup> <a name="icebergDestinationConfiguration" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.icebergDestinationConfiguration"></a>

```typescript
public readonly icebergDestinationConfiguration: MskChannelIcebergDestinationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference">MskChannelIcebergDestinationConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loggingInfo`<sup>Required</sup> <a name="loggingInfo" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.loggingInfo"></a>

```typescript
public readonly loggingInfo: MskChannelLoggingInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference">MskChannelLoggingInfoOutputReference</a>

---

##### `s3DestinationConfiguration`<sup>Required</sup> <a name="s3DestinationConfiguration" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.s3DestinationConfiguration"></a>

```typescript
public readonly s3DestinationConfiguration: MskChannelS3DestinationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference">MskChannelS3DestinationConfigurationOutputReference</a>

---

##### `stateInfo`<sup>Required</sup> <a name="stateInfo" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.stateInfo"></a>

```typescript
public readonly stateInfo: MskChannelStateInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference">MskChannelStateInfoOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `topicConfigurationList`<sup>Required</sup> <a name="topicConfigurationList" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.topicConfigurationList"></a>

```typescript
public readonly topicConfigurationList: MskChannelTopicConfigurationListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList">MskChannelTopicConfigurationListStructList</a>

---

##### `channelNameInput`<sup>Optional</sup> <a name="channelNameInput" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.channelNameInput"></a>

```typescript
public readonly channelNameInput: string;
```

- *Type:* string

---

##### `clusterArnInput`<sup>Optional</sup> <a name="clusterArnInput" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.clusterArnInput"></a>

```typescript
public readonly clusterArnInput: string;
```

- *Type:* string

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.encryptionConfigurationInput"></a>

```typescript
public readonly encryptionConfigurationInput: IResolvable | MskChannelEncryptionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>

---

##### `icebergDestinationConfigurationInput`<sup>Optional</sup> <a name="icebergDestinationConfigurationInput" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.icebergDestinationConfigurationInput"></a>

```typescript
public readonly icebergDestinationConfigurationInput: IResolvable | MskChannelIcebergDestinationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration">MskChannelIcebergDestinationConfiguration</a>

---

##### `loggingInfoInput`<sup>Optional</sup> <a name="loggingInfoInput" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.loggingInfoInput"></a>

```typescript
public readonly loggingInfoInput: IResolvable | MskChannelLoggingInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>

---

##### `s3DestinationConfigurationInput`<sup>Optional</sup> <a name="s3DestinationConfigurationInput" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.s3DestinationConfigurationInput"></a>

```typescript
public readonly s3DestinationConfigurationInput: IResolvable | MskChannelS3DestinationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration">MskChannelS3DestinationConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `topicConfigurationListInput`<sup>Optional</sup> <a name="topicConfigurationListInput" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.topicConfigurationListInput"></a>

```typescript
public readonly topicConfigurationListInput: IResolvable | MskChannelTopicConfigurationListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct">MskChannelTopicConfigurationListStruct</a>[]

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mskChannel.MskChannel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MskChannelConfig <a name="MskChannelConfig" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

const mskChannelConfig: mskChannel.MskChannelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.channelName">channelName</a></code> | <code>string</code> | Name of the channel. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.topicConfigurationList">topicConfigurationList</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct">MskChannelTopicConfigurationListStruct</a>[]</code> | Topic configuration. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.clusterArn">clusterArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the cluster. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a></code> | Encryption configuration. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.icebergDestinationConfiguration">icebergDestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration">MskChannelIcebergDestinationConfiguration</a></code> | Iceberg destination configuration. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.loggingInfo">loggingInfo</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a></code> | Log configuration details for Channel. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.s3DestinationConfiguration">s3DestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration">MskChannelS3DestinationConfiguration</a></code> | S3 destination configuration. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Tags attached to the channel. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

Name of the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#channel_name MskChannel#channel_name}

---

##### `topicConfigurationList`<sup>Required</sup> <a name="topicConfigurationList" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.topicConfigurationList"></a>

```typescript
public readonly topicConfigurationList: IResolvable | MskChannelTopicConfigurationListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct">MskChannelTopicConfigurationListStruct</a>[]

Topic configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#topic_configuration_list MskChannel#topic_configuration_list}

---

##### `clusterArn`<sup>Optional</sup> <a name="clusterArn" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#cluster_arn MskChannel#cluster_arn}

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: MskChannelEncryptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>

Encryption configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#encryption_configuration MskChannel#encryption_configuration}

---

##### `icebergDestinationConfiguration`<sup>Optional</sup> <a name="icebergDestinationConfiguration" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.icebergDestinationConfiguration"></a>

```typescript
public readonly icebergDestinationConfiguration: MskChannelIcebergDestinationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration">MskChannelIcebergDestinationConfiguration</a>

Iceberg destination configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#iceberg_destination_configuration MskChannel#iceberg_destination_configuration}

---

##### `loggingInfo`<sup>Optional</sup> <a name="loggingInfo" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.loggingInfo"></a>

```typescript
public readonly loggingInfo: MskChannelLoggingInfo;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>

Log configuration details for Channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#logging_info MskChannel#logging_info}

---

##### `s3DestinationConfiguration`<sup>Optional</sup> <a name="s3DestinationConfiguration" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.s3DestinationConfiguration"></a>

```typescript
public readonly s3DestinationConfiguration: MskChannelS3DestinationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration">MskChannelS3DestinationConfiguration</a>

S3 destination configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#s3_destination_configuration MskChannel#s3_destination_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mskChannel.MskChannelConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Tags attached to the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#tags MskChannel#tags}

---

### MskChannelEncryptionConfiguration <a name="MskChannelEncryptionConfiguration" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfiguration.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

const mskChannelEncryptionConfiguration: mskChannel.MskChannelEncryptionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfiguration.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | The ARN of the KMS key for encryption. |

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfiguration.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

The ARN of the KMS key for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#kms_key_arn MskChannel#kms_key_arn}

---

### MskChannelIcebergDestinationConfiguration <a name="MskChannelIcebergDestinationConfiguration" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

const mskChannelIcebergDestinationConfiguration: mskChannel.MskChannelIcebergDestinationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.appendOnly">appendOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | Append only mode. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog">MskChannelIcebergDestinationConfigurationCatalog</a></code> | Catalog configuration of the destination. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.compressionType">compressionType</a></code> | <code>string</code> | Compression codec for Iceberg table data files. Defaults to ZSTD. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.dataFreshnessInSeconds">dataFreshnessInSeconds</a></code> | <code>number</code> | Data freshness in seconds. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.deadLetterQueueS3">deadLetterQueueS3</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3">MskChannelIcebergDestinationConfigurationDeadLetterQueueS3</a></code> | Dead letter queue S3 configuration of the destination. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.destinationTableList">destinationTableList</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListStruct</a>[]</code> | List of destination tables. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.schemaEvolution">schemaEvolution</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolution">MskChannelIcebergDestinationConfigurationSchemaEvolution</a></code> | Schema evolution configuration of the destination. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.serviceExecutionRoleArn">serviceExecutionRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of an IAM role used by MSK to access the table. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.tableCreation">tableCreation</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreation">MskChannelIcebergDestinationConfigurationTableCreation</a></code> | Table creation configuration of the destination. |

---

##### `appendOnly`<sup>Optional</sup> <a name="appendOnly" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.appendOnly"></a>

```typescript
public readonly appendOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Append only mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#append_only MskChannel#append_only}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.catalog"></a>

```typescript
public readonly catalog: MskChannelIcebergDestinationConfigurationCatalog;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog">MskChannelIcebergDestinationConfigurationCatalog</a>

Catalog configuration of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#catalog MskChannel#catalog}

---

##### `compressionType`<sup>Optional</sup> <a name="compressionType" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.compressionType"></a>

```typescript
public readonly compressionType: string;
```

- *Type:* string

Compression codec for Iceberg table data files. Defaults to ZSTD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#compression_type MskChannel#compression_type}

---

##### `dataFreshnessInSeconds`<sup>Optional</sup> <a name="dataFreshnessInSeconds" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.dataFreshnessInSeconds"></a>

```typescript
public readonly dataFreshnessInSeconds: number;
```

- *Type:* number

Data freshness in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#data_freshness_in_seconds MskChannel#data_freshness_in_seconds}

---

##### `deadLetterQueueS3`<sup>Optional</sup> <a name="deadLetterQueueS3" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.deadLetterQueueS3"></a>

```typescript
public readonly deadLetterQueueS3: MskChannelIcebergDestinationConfigurationDeadLetterQueueS3;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3">MskChannelIcebergDestinationConfigurationDeadLetterQueueS3</a>

Dead letter queue S3 configuration of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#dead_letter_queue_s3 MskChannel#dead_letter_queue_s3}

---

##### `destinationTableList`<sup>Optional</sup> <a name="destinationTableList" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.destinationTableList"></a>

```typescript
public readonly destinationTableList: IResolvable | MskChannelIcebergDestinationConfigurationDestinationTableListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListStruct</a>[]

List of destination tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#destination_table_list MskChannel#destination_table_list}

---

##### `schemaEvolution`<sup>Optional</sup> <a name="schemaEvolution" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.schemaEvolution"></a>

```typescript
public readonly schemaEvolution: MskChannelIcebergDestinationConfigurationSchemaEvolution;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolution">MskChannelIcebergDestinationConfigurationSchemaEvolution</a>

Schema evolution configuration of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#schema_evolution MskChannel#schema_evolution}

---

##### `serviceExecutionRoleArn`<sup>Optional</sup> <a name="serviceExecutionRoleArn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.serviceExecutionRoleArn"></a>

```typescript
public readonly serviceExecutionRoleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of an IAM role used by MSK to access the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#service_execution_role_arn MskChannel#service_execution_role_arn}

---

##### `tableCreation`<sup>Optional</sup> <a name="tableCreation" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration.property.tableCreation"></a>

```typescript
public readonly tableCreation: MskChannelIcebergDestinationConfigurationTableCreation;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreation">MskChannelIcebergDestinationConfigurationTableCreation</a>

Table creation configuration of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#table_creation MskChannel#table_creation}

---

### MskChannelIcebergDestinationConfigurationCatalog <a name="MskChannelIcebergDestinationConfigurationCatalog" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

const mskChannelIcebergDestinationConfigurationCatalog: mskChannel.MskChannelIcebergDestinationConfigurationCatalog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog.property.catalogArn">catalogArn</a></code> | <code>string</code> | The ARN of the catalog. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog.property.warehouseLocation">warehouseLocation</a></code> | <code>string</code> | The warehouse location. |

---

##### `catalogArn`<sup>Optional</sup> <a name="catalogArn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog.property.catalogArn"></a>

```typescript
public readonly catalogArn: string;
```

- *Type:* string

The ARN of the catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#catalog_arn MskChannel#catalog_arn}

---

##### `warehouseLocation`<sup>Optional</sup> <a name="warehouseLocation" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog.property.warehouseLocation"></a>

```typescript
public readonly warehouseLocation: string;
```

- *Type:* string

The warehouse location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#warehouse_location MskChannel#warehouse_location}

---

### MskChannelIcebergDestinationConfigurationDeadLetterQueueS3 <a name="MskChannelIcebergDestinationConfigurationDeadLetterQueueS3" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

const mskChannelIcebergDestinationConfigurationDeadLetterQueueS3: mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3.property.bucketArn">bucketArn</a></code> | <code>string</code> | The ARN of the S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3.property.errorOutputPrefix">errorOutputPrefix</a></code> | <code>string</code> | The error output prefix. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>string</code> | Optional 12-digit AWS account ID expected to own the dead-letter S3 bucket. |

---

##### `bucketArn`<sup>Optional</sup> <a name="bucketArn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

The ARN of the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}

---

##### `errorOutputPrefix`<sup>Optional</sup> <a name="errorOutputPrefix" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3.property.errorOutputPrefix"></a>

```typescript
public readonly errorOutputPrefix: string;
```

- *Type:* string

The error output prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#error_output_prefix MskChannel#error_output_prefix}

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="expectedBucketOwner" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3.property.expectedBucketOwner"></a>

```typescript
public readonly expectedBucketOwner: string;
```

- *Type:* string

Optional 12-digit AWS account ID expected to own the dead-letter S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}

---

### MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec <a name="MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

const mskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec: mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec.property.partitionStrategy">partitionStrategy</a></code> | <code>string</code> | Partition strategy for MSK channel. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec.property.sourceList">sourceList</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct</a>[]</code> | Source list. |

---

##### `partitionStrategy`<sup>Optional</sup> <a name="partitionStrategy" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec.property.partitionStrategy"></a>

```typescript
public readonly partitionStrategy: string;
```

- *Type:* string

Partition strategy for MSK channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#partition_strategy MskChannel#partition_strategy}

---

##### `sourceList`<sup>Optional</sup> <a name="sourceList" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec.property.sourceList"></a>

```typescript
public readonly sourceList: IResolvable | MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct</a>[]

Source list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#source_list MskChannel#source_list}

---

### MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct <a name="MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

const mskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct: mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct.property.sourceName">sourceName</a></code> | <code>string</code> | Source name. |

---

##### `sourceName`<sup>Optional</sup> <a name="sourceName" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct.property.sourceName"></a>

```typescript
public readonly sourceName: string;
```

- *Type:* string

Source name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#source_name MskChannel#source_name}

---

### MskChannelIcebergDestinationConfigurationDestinationTableListStruct <a name="MskChannelIcebergDestinationConfigurationDestinationTableListStruct" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

const mskChannelIcebergDestinationConfigurationDestinationTableListStruct: mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct.property.destinationDatabaseName">destinationDatabaseName</a></code> | <code>string</code> | The destination database name. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct.property.destinationTableName">destinationTableName</a></code> | <code>string</code> | The destination table name. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct.property.partitionSpec">partitionSpec</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec</a></code> | Partition specification. |

---

##### `destinationDatabaseName`<sup>Optional</sup> <a name="destinationDatabaseName" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct.property.destinationDatabaseName"></a>

```typescript
public readonly destinationDatabaseName: string;
```

- *Type:* string

The destination database name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#destination_database_name MskChannel#destination_database_name}

---

##### `destinationTableName`<sup>Optional</sup> <a name="destinationTableName" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct.property.destinationTableName"></a>

```typescript
public readonly destinationTableName: string;
```

- *Type:* string

The destination table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#destination_table_name MskChannel#destination_table_name}

---

##### `partitionSpec`<sup>Optional</sup> <a name="partitionSpec" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct.property.partitionSpec"></a>

```typescript
public readonly partitionSpec: MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec</a>

Partition specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#partition_spec MskChannel#partition_spec}

---

### MskChannelIcebergDestinationConfigurationSchemaEvolution <a name="MskChannelIcebergDestinationConfigurationSchemaEvolution" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolution.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

const mskChannelIcebergDestinationConfigurationSchemaEvolution: mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolution = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolution.property.enableSchemaEvolution">enableSchemaEvolution</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether schema evolution is enabled. |

---

##### `enableSchemaEvolution`<sup>Optional</sup> <a name="enableSchemaEvolution" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolution.property.enableSchemaEvolution"></a>

```typescript
public readonly enableSchemaEvolution: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether schema evolution is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#enable_schema_evolution MskChannel#enable_schema_evolution}

---

### MskChannelIcebergDestinationConfigurationTableCreation <a name="MskChannelIcebergDestinationConfigurationTableCreation" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreation.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

const mskChannelIcebergDestinationConfigurationTableCreation: mskChannel.MskChannelIcebergDestinationConfigurationTableCreation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreation.property.enableTableCreation">enableTableCreation</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether table creation is enabled. |

---

##### `enableTableCreation`<sup>Optional</sup> <a name="enableTableCreation" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreation.property.enableTableCreation"></a>

```typescript
public readonly enableTableCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether table creation is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#enable_table_creation MskChannel#enable_table_creation}

---

### MskChannelLoggingInfo <a name="MskChannelLoggingInfo" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

const mskChannelLoggingInfo: mskChannel.MskChannelLoggingInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a></code> | CloudWatch Logs log destination details. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo.property.firehose">firehose</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a></code> | Firehose log destination details. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a></code> | S3 log destination details. |

---

##### `cloudwatchLogs`<sup>Optional</sup> <a name="cloudwatchLogs" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo.property.cloudwatchLogs"></a>

```typescript
public readonly cloudwatchLogs: MskChannelLoggingInfoCloudwatchLogs;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a>

CloudWatch Logs log destination details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#cloudwatch_logs MskChannel#cloudwatch_logs}

---

##### `firehose`<sup>Optional</sup> <a name="firehose" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo.property.firehose"></a>

```typescript
public readonly firehose: MskChannelLoggingInfoFirehose;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a>

Firehose log destination details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#firehose MskChannel#firehose}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo.property.s3"></a>

```typescript
public readonly s3: MskChannelLoggingInfoS3;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a>

S3 log destination details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#s3 MskChannel#s3}

---

### MskChannelLoggingInfoCloudwatchLogs <a name="MskChannelLoggingInfoCloudwatchLogs" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

const mskChannelLoggingInfoCloudwatchLogs: mskChannel.MskChannelLoggingInfoCloudwatchLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether CloudWatch Logs logging is enabled. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs.property.logGroup">logGroup</a></code> | <code>string</code> | The CloudWatch log group for log delivery. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether CloudWatch Logs logging is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#enabled MskChannel#enabled}

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

The CloudWatch log group for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#log_group MskChannel#log_group}

---

### MskChannelLoggingInfoFirehose <a name="MskChannelLoggingInfoFirehose" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

const mskChannelLoggingInfoFirehose: mskChannel.MskChannelLoggingInfoFirehose = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose.property.deliveryStream">deliveryStream</a></code> | <code>string</code> | The Firehose delivery stream for log delivery. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether Firehose logging is enabled. |

---

##### `deliveryStream`<sup>Optional</sup> <a name="deliveryStream" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose.property.deliveryStream"></a>

```typescript
public readonly deliveryStream: string;
```

- *Type:* string

The Firehose delivery stream for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#delivery_stream MskChannel#delivery_stream}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether Firehose logging is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#enabled MskChannel#enabled}

---

### MskChannelLoggingInfoS3 <a name="MskChannelLoggingInfoS3" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

const mskChannelLoggingInfoS3: mskChannel.MskChannelLoggingInfoS3 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3.property.bucket">bucket</a></code> | <code>string</code> | The name of the S3 bucket for log delivery. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether S3 logging is enabled. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3.property.prefix">prefix</a></code> | <code>string</code> | The S3 prefix for log delivery. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The name of the S3 bucket for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#bucket MskChannel#bucket}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether S3 logging is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#enabled MskChannel#enabled}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

The S3 prefix for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#prefix MskChannel#prefix}

---

### MskChannelS3DestinationConfiguration <a name="MskChannelS3DestinationConfiguration" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

const mskChannelS3DestinationConfiguration: mskChannel.MskChannelS3DestinationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration.property.dataFreshnessInSeconds">dataFreshnessInSeconds</a></code> | <code>number</code> | Data freshness in seconds. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration.property.deadLetterQueueS3">deadLetterQueueS3</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3">MskChannelS3DestinationConfigurationDeadLetterQueueS3</a></code> | Dead letter queue S3 configuration of the destination. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration.property.serviceExecutionRoleArn">serviceExecutionRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of an IAM role used by MSK to access S3. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage">MskChannelS3DestinationConfigurationStorage</a></code> | S3 storage configuration. |

---

##### `dataFreshnessInSeconds`<sup>Optional</sup> <a name="dataFreshnessInSeconds" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration.property.dataFreshnessInSeconds"></a>

```typescript
public readonly dataFreshnessInSeconds: number;
```

- *Type:* number

Data freshness in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#data_freshness_in_seconds MskChannel#data_freshness_in_seconds}

---

##### `deadLetterQueueS3`<sup>Optional</sup> <a name="deadLetterQueueS3" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration.property.deadLetterQueueS3"></a>

```typescript
public readonly deadLetterQueueS3: MskChannelS3DestinationConfigurationDeadLetterQueueS3;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3">MskChannelS3DestinationConfigurationDeadLetterQueueS3</a>

Dead letter queue S3 configuration of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#dead_letter_queue_s3 MskChannel#dead_letter_queue_s3}

---

##### `serviceExecutionRoleArn`<sup>Optional</sup> <a name="serviceExecutionRoleArn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration.property.serviceExecutionRoleArn"></a>

```typescript
public readonly serviceExecutionRoleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of an IAM role used by MSK to access S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#service_execution_role_arn MskChannel#service_execution_role_arn}

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration.property.storage"></a>

```typescript
public readonly storage: MskChannelS3DestinationConfigurationStorage;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage">MskChannelS3DestinationConfigurationStorage</a>

S3 storage configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#storage MskChannel#storage}

---

### MskChannelS3DestinationConfigurationDeadLetterQueueS3 <a name="MskChannelS3DestinationConfigurationDeadLetterQueueS3" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

const mskChannelS3DestinationConfigurationDeadLetterQueueS3: mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3.property.bucketArn">bucketArn</a></code> | <code>string</code> | The ARN of the S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3.property.errorOutputPrefix">errorOutputPrefix</a></code> | <code>string</code> | The error output prefix. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>string</code> | Optional 12-digit AWS account ID expected to own the dead-letter S3 bucket. |

---

##### `bucketArn`<sup>Optional</sup> <a name="bucketArn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

The ARN of the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}

---

##### `errorOutputPrefix`<sup>Optional</sup> <a name="errorOutputPrefix" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3.property.errorOutputPrefix"></a>

```typescript
public readonly errorOutputPrefix: string;
```

- *Type:* string

The error output prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#error_output_prefix MskChannel#error_output_prefix}

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="expectedBucketOwner" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3.property.expectedBucketOwner"></a>

```typescript
public readonly expectedBucketOwner: string;
```

- *Type:* string

Optional 12-digit AWS account ID expected to own the dead-letter S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}

---

### MskChannelS3DestinationConfigurationStorage <a name="MskChannelS3DestinationConfigurationStorage" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

const mskChannelS3DestinationConfigurationStorage: mskChannel.MskChannelS3DestinationConfigurationStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.property.bucketArn">bucketArn</a></code> | <code>string</code> | ARN of the S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.property.compressionType">compressionType</a></code> | <code>string</code> | S3 compression type. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>string</code> | Optional 12-digit AWS account ID expected to own the S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.property.outputKeyTemplate">outputKeyTemplate</a></code> | <code>string</code> | Template for S3 key for output objects, used for partitioning. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.property.outputPrefix">outputPrefix</a></code> | <code>string</code> | Optional prefix for output objects. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.property.storageClass">storageClass</a></code> | <code>string</code> | S3 storage class. |

---

##### `bucketArn`<sup>Optional</sup> <a name="bucketArn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

ARN of the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}

---

##### `compressionType`<sup>Optional</sup> <a name="compressionType" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.property.compressionType"></a>

```typescript
public readonly compressionType: string;
```

- *Type:* string

S3 compression type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#compression_type MskChannel#compression_type}

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="expectedBucketOwner" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.property.expectedBucketOwner"></a>

```typescript
public readonly expectedBucketOwner: string;
```

- *Type:* string

Optional 12-digit AWS account ID expected to own the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}

---

##### `outputKeyTemplate`<sup>Optional</sup> <a name="outputKeyTemplate" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.property.outputKeyTemplate"></a>

```typescript
public readonly outputKeyTemplate: string;
```

- *Type:* string

Template for S3 key for output objects, used for partitioning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#output_key_template MskChannel#output_key_template}

---

##### `outputPrefix`<sup>Optional</sup> <a name="outputPrefix" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.property.outputPrefix"></a>

```typescript
public readonly outputPrefix: string;
```

- *Type:* string

Optional prefix for output objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#output_prefix MskChannel#output_prefix}

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

S3 storage class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#storage_class MskChannel#storage_class}

---

### MskChannelStateInfo <a name="MskChannelStateInfo" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfo.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

const mskChannelStateInfo: mskChannel.MskChannelStateInfo = { ... }
```


### MskChannelTopicConfigurationListRecordConverter <a name="MskChannelTopicConfigurationListRecordConverter" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverter.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

const mskChannelTopicConfigurationListRecordConverter: mskChannel.MskChannelTopicConfigurationListRecordConverter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverter.property.valueConverter">valueConverter</a></code> | <code>string</code> | Value converter for topic data. |

---

##### `valueConverter`<sup>Required</sup> <a name="valueConverter" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverter.property.valueConverter"></a>

```typescript
public readonly valueConverter: string;
```

- *Type:* string

Value converter for topic data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#value_converter MskChannel#value_converter}

---

### MskChannelTopicConfigurationListRecordSchema <a name="MskChannelTopicConfigurationListRecordSchema" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchema.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

const mskChannelTopicConfigurationListRecordSchema: mskChannel.MskChannelTopicConfigurationListRecordSchema = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchema.property.gsrArn">gsrArn</a></code> | <code>string</code> | ARN of Glue Schema Registry resource used for table schema. |

---

##### `gsrArn`<sup>Optional</sup> <a name="gsrArn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchema.property.gsrArn"></a>

```typescript
public readonly gsrArn: string;
```

- *Type:* string

ARN of Glue Schema Registry resource used for table schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#gsr_arn MskChannel#gsr_arn}

---

### MskChannelTopicConfigurationListStruct <a name="MskChannelTopicConfigurationListStruct" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

const mskChannelTopicConfigurationListStruct: mskChannel.MskChannelTopicConfigurationListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct.property.recordConverter">recordConverter</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverter">MskChannelTopicConfigurationListRecordConverter</a></code> | Record converter configuration for a topic. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct.property.topicArn">topicArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) that uniquely identifies the topic. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct.property.recordSchema">recordSchema</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchema">MskChannelTopicConfigurationListRecordSchema</a></code> | Record schema configuration for a topic. |

---

##### `recordConverter`<sup>Required</sup> <a name="recordConverter" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct.property.recordConverter"></a>

```typescript
public readonly recordConverter: MskChannelTopicConfigurationListRecordConverter;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverter">MskChannelTopicConfigurationListRecordConverter</a>

Record converter configuration for a topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#record_converter MskChannel#record_converter}

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) that uniquely identifies the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#topic_arn MskChannel#topic_arn}

---

##### `recordSchema`<sup>Optional</sup> <a name="recordSchema" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct.property.recordSchema"></a>

```typescript
public readonly recordSchema: MskChannelTopicConfigurationListRecordSchema;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchema">MskChannelTopicConfigurationListRecordSchema</a>

Record schema configuration for a topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_channel#record_schema MskChannel#record_schema}

---

## Classes <a name="Classes" id="Classes"></a>

### MskChannelEncryptionConfigurationOutputReference <a name="MskChannelEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

new mskChannel.MskChannelEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskChannelEncryptionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>

---


### MskChannelIcebergDestinationConfigurationCatalogOutputReference <a name="MskChannelIcebergDestinationConfigurationCatalogOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

new mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.resetCatalogArn">resetCatalogArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.resetWarehouseLocation">resetWarehouseLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogArn` <a name="resetCatalogArn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.resetCatalogArn"></a>

```typescript
public resetCatalogArn(): void
```

##### `resetWarehouseLocation` <a name="resetWarehouseLocation" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.resetWarehouseLocation"></a>

```typescript
public resetWarehouseLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.catalogArnInput">catalogArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.warehouseLocationInput">warehouseLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.catalogArn">catalogArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.warehouseLocation">warehouseLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog">MskChannelIcebergDestinationConfigurationCatalog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogArnInput`<sup>Optional</sup> <a name="catalogArnInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.catalogArnInput"></a>

```typescript
public readonly catalogArnInput: string;
```

- *Type:* string

---

##### `warehouseLocationInput`<sup>Optional</sup> <a name="warehouseLocationInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.warehouseLocationInput"></a>

```typescript
public readonly warehouseLocationInput: string;
```

- *Type:* string

---

##### `catalogArn`<sup>Required</sup> <a name="catalogArn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.catalogArn"></a>

```typescript
public readonly catalogArn: string;
```

- *Type:* string

---

##### `warehouseLocation`<sup>Required</sup> <a name="warehouseLocation" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.warehouseLocation"></a>

```typescript
public readonly warehouseLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskChannelIcebergDestinationConfigurationCatalog;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog">MskChannelIcebergDestinationConfigurationCatalog</a>

---


### MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference <a name="MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

new mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.resetBucketArn">resetBucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.resetErrorOutputPrefix">resetErrorOutputPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.resetExpectedBucketOwner">resetExpectedBucketOwner</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketArn` <a name="resetBucketArn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.resetBucketArn"></a>

```typescript
public resetBucketArn(): void
```

##### `resetErrorOutputPrefix` <a name="resetErrorOutputPrefix" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.resetErrorOutputPrefix"></a>

```typescript
public resetErrorOutputPrefix(): void
```

##### `resetExpectedBucketOwner` <a name="resetExpectedBucketOwner" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.resetExpectedBucketOwner"></a>

```typescript
public resetExpectedBucketOwner(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.bucketArnInput">bucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.errorOutputPrefixInput">errorOutputPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.expectedBucketOwnerInput">expectedBucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.bucketArn">bucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.errorOutputPrefix">errorOutputPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3">MskChannelIcebergDestinationConfigurationDeadLetterQueueS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketArnInput`<sup>Optional</sup> <a name="bucketArnInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.bucketArnInput"></a>

```typescript
public readonly bucketArnInput: string;
```

- *Type:* string

---

##### `errorOutputPrefixInput`<sup>Optional</sup> <a name="errorOutputPrefixInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.errorOutputPrefixInput"></a>

```typescript
public readonly errorOutputPrefixInput: string;
```

- *Type:* string

---

##### `expectedBucketOwnerInput`<sup>Optional</sup> <a name="expectedBucketOwnerInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.expectedBucketOwnerInput"></a>

```typescript
public readonly expectedBucketOwnerInput: string;
```

- *Type:* string

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

---

##### `errorOutputPrefix`<sup>Required</sup> <a name="errorOutputPrefix" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.errorOutputPrefix"></a>

```typescript
public readonly errorOutputPrefix: string;
```

- *Type:* string

---

##### `expectedBucketOwner`<sup>Required</sup> <a name="expectedBucketOwner" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.expectedBucketOwner"></a>

```typescript
public readonly expectedBucketOwner: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskChannelIcebergDestinationConfigurationDeadLetterQueueS3;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3">MskChannelIcebergDestinationConfigurationDeadLetterQueueS3</a>

---


### MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference <a name="MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

new mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.putSourceList">putSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.resetPartitionStrategy">resetPartitionStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.resetSourceList">resetSourceList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourceList` <a name="putSourceList" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.putSourceList"></a>

```typescript
public putSourceList(value: IResolvable | MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.putSourceList.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct</a>[]

---

##### `resetPartitionStrategy` <a name="resetPartitionStrategy" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.resetPartitionStrategy"></a>

```typescript
public resetPartitionStrategy(): void
```

##### `resetSourceList` <a name="resetSourceList" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.resetSourceList"></a>

```typescript
public resetSourceList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.sourceList">sourceList</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.partitionStrategyInput">partitionStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.sourceListInput">sourceListInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.partitionStrategy">partitionStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceList`<sup>Required</sup> <a name="sourceList" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.sourceList"></a>

```typescript
public readonly sourceList: MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList</a>

---

##### `partitionStrategyInput`<sup>Optional</sup> <a name="partitionStrategyInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.partitionStrategyInput"></a>

```typescript
public readonly partitionStrategyInput: string;
```

- *Type:* string

---

##### `sourceListInput`<sup>Optional</sup> <a name="sourceListInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.sourceListInput"></a>

```typescript
public readonly sourceListInput: IResolvable | MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct</a>[]

---

##### `partitionStrategy`<sup>Required</sup> <a name="partitionStrategy" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.partitionStrategy"></a>

```typescript
public readonly partitionStrategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec</a>

---


### MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList <a name="MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

new mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.get"></a>

```typescript
public get(index: number): MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct</a>[]

---


### MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference <a name="MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

new mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.resetSourceName">resetSourceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceName` <a name="resetSourceName" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.resetSourceName"></a>

```typescript
public resetSourceName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.property.sourceNameInput">sourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.property.sourceName">sourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceNameInput`<sup>Optional</sup> <a name="sourceNameInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.property.sourceNameInput"></a>

```typescript
public readonly sourceNameInput: string;
```

- *Type:* string

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.property.sourceName"></a>

```typescript
public readonly sourceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct</a>

---


### MskChannelIcebergDestinationConfigurationDestinationTableListStructList <a name="MskChannelIcebergDestinationConfigurationDestinationTableListStructList" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

new mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.get"></a>

```typescript
public get(index: number): MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskChannelIcebergDestinationConfigurationDestinationTableListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListStruct</a>[]

---


### MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference <a name="MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

new mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.putPartitionSpec">putPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.resetDestinationDatabaseName">resetDestinationDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.resetDestinationTableName">resetDestinationTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.resetPartitionSpec">resetPartitionSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPartitionSpec` <a name="putPartitionSpec" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.putPartitionSpec"></a>

```typescript
public putPartitionSpec(value: MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.putPartitionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec</a>

---

##### `resetDestinationDatabaseName` <a name="resetDestinationDatabaseName" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.resetDestinationDatabaseName"></a>

```typescript
public resetDestinationDatabaseName(): void
```

##### `resetDestinationTableName` <a name="resetDestinationTableName" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.resetDestinationTableName"></a>

```typescript
public resetDestinationTableName(): void
```

##### `resetPartitionSpec` <a name="resetPartitionSpec" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.resetPartitionSpec"></a>

```typescript
public resetPartitionSpec(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.partitionSpec">partitionSpec</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.destinationDatabaseNameInput">destinationDatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.destinationTableNameInput">destinationTableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.partitionSpecInput">partitionSpecInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.destinationDatabaseName">destinationDatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.destinationTableName">destinationTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `partitionSpec`<sup>Required</sup> <a name="partitionSpec" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.partitionSpec"></a>

```typescript
public readonly partitionSpec: MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference</a>

---

##### `destinationDatabaseNameInput`<sup>Optional</sup> <a name="destinationDatabaseNameInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.destinationDatabaseNameInput"></a>

```typescript
public readonly destinationDatabaseNameInput: string;
```

- *Type:* string

---

##### `destinationTableNameInput`<sup>Optional</sup> <a name="destinationTableNameInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.destinationTableNameInput"></a>

```typescript
public readonly destinationTableNameInput: string;
```

- *Type:* string

---

##### `partitionSpecInput`<sup>Optional</sup> <a name="partitionSpecInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.partitionSpecInput"></a>

```typescript
public readonly partitionSpecInput: IResolvable | MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec">MskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec</a>

---

##### `destinationDatabaseName`<sup>Required</sup> <a name="destinationDatabaseName" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.destinationDatabaseName"></a>

```typescript
public readonly destinationDatabaseName: string;
```

- *Type:* string

---

##### `destinationTableName`<sup>Required</sup> <a name="destinationTableName" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.destinationTableName"></a>

```typescript
public readonly destinationTableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskChannelIcebergDestinationConfigurationDestinationTableListStruct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListStruct</a>

---


### MskChannelIcebergDestinationConfigurationOutputReference <a name="MskChannelIcebergDestinationConfigurationOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

new mskChannel.MskChannelIcebergDestinationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putCatalog">putCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putDeadLetterQueueS3">putDeadLetterQueueS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putDestinationTableList">putDestinationTableList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putSchemaEvolution">putSchemaEvolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putTableCreation">putTableCreation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetAppendOnly">resetAppendOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetCompressionType">resetCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetDataFreshnessInSeconds">resetDataFreshnessInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetDeadLetterQueueS3">resetDeadLetterQueueS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetDestinationTableList">resetDestinationTableList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetSchemaEvolution">resetSchemaEvolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetServiceExecutionRoleArn">resetServiceExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetTableCreation">resetTableCreation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCatalog` <a name="putCatalog" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putCatalog"></a>

```typescript
public putCatalog(value: MskChannelIcebergDestinationConfigurationCatalog): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putCatalog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog">MskChannelIcebergDestinationConfigurationCatalog</a>

---

##### `putDeadLetterQueueS3` <a name="putDeadLetterQueueS3" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putDeadLetterQueueS3"></a>

```typescript
public putDeadLetterQueueS3(value: MskChannelIcebergDestinationConfigurationDeadLetterQueueS3): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putDeadLetterQueueS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3">MskChannelIcebergDestinationConfigurationDeadLetterQueueS3</a>

---

##### `putDestinationTableList` <a name="putDestinationTableList" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putDestinationTableList"></a>

```typescript
public putDestinationTableList(value: IResolvable | MskChannelIcebergDestinationConfigurationDestinationTableListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putDestinationTableList.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListStruct</a>[]

---

##### `putSchemaEvolution` <a name="putSchemaEvolution" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putSchemaEvolution"></a>

```typescript
public putSchemaEvolution(value: MskChannelIcebergDestinationConfigurationSchemaEvolution): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putSchemaEvolution.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolution">MskChannelIcebergDestinationConfigurationSchemaEvolution</a>

---

##### `putTableCreation` <a name="putTableCreation" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putTableCreation"></a>

```typescript
public putTableCreation(value: MskChannelIcebergDestinationConfigurationTableCreation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.putTableCreation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreation">MskChannelIcebergDestinationConfigurationTableCreation</a>

---

##### `resetAppendOnly` <a name="resetAppendOnly" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetAppendOnly"></a>

```typescript
public resetAppendOnly(): void
```

##### `resetCatalog` <a name="resetCatalog" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetCatalog"></a>

```typescript
public resetCatalog(): void
```

##### `resetCompressionType` <a name="resetCompressionType" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetCompressionType"></a>

```typescript
public resetCompressionType(): void
```

##### `resetDataFreshnessInSeconds` <a name="resetDataFreshnessInSeconds" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetDataFreshnessInSeconds"></a>

```typescript
public resetDataFreshnessInSeconds(): void
```

##### `resetDeadLetterQueueS3` <a name="resetDeadLetterQueueS3" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetDeadLetterQueueS3"></a>

```typescript
public resetDeadLetterQueueS3(): void
```

##### `resetDestinationTableList` <a name="resetDestinationTableList" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetDestinationTableList"></a>

```typescript
public resetDestinationTableList(): void
```

##### `resetSchemaEvolution` <a name="resetSchemaEvolution" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetSchemaEvolution"></a>

```typescript
public resetSchemaEvolution(): void
```

##### `resetServiceExecutionRoleArn` <a name="resetServiceExecutionRoleArn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetServiceExecutionRoleArn"></a>

```typescript
public resetServiceExecutionRoleArn(): void
```

##### `resetTableCreation` <a name="resetTableCreation" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.resetTableCreation"></a>

```typescript
public resetTableCreation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference">MskChannelIcebergDestinationConfigurationCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.deadLetterQueueS3">deadLetterQueueS3</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference">MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.destinationTableList">destinationTableList</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList">MskChannelIcebergDestinationConfigurationDestinationTableListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.schemaEvolution">schemaEvolution</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference">MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.tableCreation">tableCreation</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference">MskChannelIcebergDestinationConfigurationTableCreationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.appendOnlyInput">appendOnlyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.catalogInput">catalogInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog">MskChannelIcebergDestinationConfigurationCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.compressionTypeInput">compressionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.dataFreshnessInSecondsInput">dataFreshnessInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.deadLetterQueueS3Input">deadLetterQueueS3Input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3">MskChannelIcebergDestinationConfigurationDeadLetterQueueS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.destinationTableListInput">destinationTableListInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.schemaEvolutionInput">schemaEvolutionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolution">MskChannelIcebergDestinationConfigurationSchemaEvolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.serviceExecutionRoleArnInput">serviceExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.tableCreationInput">tableCreationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreation">MskChannelIcebergDestinationConfigurationTableCreation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.appendOnly">appendOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.compressionType">compressionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.dataFreshnessInSeconds">dataFreshnessInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.serviceExecutionRoleArn">serviceExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration">MskChannelIcebergDestinationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.catalog"></a>

```typescript
public readonly catalog: MskChannelIcebergDestinationConfigurationCatalogOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalogOutputReference">MskChannelIcebergDestinationConfigurationCatalogOutputReference</a>

---

##### `deadLetterQueueS3`<sup>Required</sup> <a name="deadLetterQueueS3" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.deadLetterQueueS3"></a>

```typescript
public readonly deadLetterQueueS3: MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference">MskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference</a>

---

##### `destinationTableList`<sup>Required</sup> <a name="destinationTableList" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.destinationTableList"></a>

```typescript
public readonly destinationTableList: MskChannelIcebergDestinationConfigurationDestinationTableListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStructList">MskChannelIcebergDestinationConfigurationDestinationTableListStructList</a>

---

##### `schemaEvolution`<sup>Required</sup> <a name="schemaEvolution" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.schemaEvolution"></a>

```typescript
public readonly schemaEvolution: MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference">MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference</a>

---

##### `tableCreation`<sup>Required</sup> <a name="tableCreation" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.tableCreation"></a>

```typescript
public readonly tableCreation: MskChannelIcebergDestinationConfigurationTableCreationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference">MskChannelIcebergDestinationConfigurationTableCreationOutputReference</a>

---

##### `appendOnlyInput`<sup>Optional</sup> <a name="appendOnlyInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.appendOnlyInput"></a>

```typescript
public readonly appendOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.catalogInput"></a>

```typescript
public readonly catalogInput: IResolvable | MskChannelIcebergDestinationConfigurationCatalog;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationCatalog">MskChannelIcebergDestinationConfigurationCatalog</a>

---

##### `compressionTypeInput`<sup>Optional</sup> <a name="compressionTypeInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.compressionTypeInput"></a>

```typescript
public readonly compressionTypeInput: string;
```

- *Type:* string

---

##### `dataFreshnessInSecondsInput`<sup>Optional</sup> <a name="dataFreshnessInSecondsInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.dataFreshnessInSecondsInput"></a>

```typescript
public readonly dataFreshnessInSecondsInput: number;
```

- *Type:* number

---

##### `deadLetterQueueS3Input`<sup>Optional</sup> <a name="deadLetterQueueS3Input" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.deadLetterQueueS3Input"></a>

```typescript
public readonly deadLetterQueueS3Input: IResolvable | MskChannelIcebergDestinationConfigurationDeadLetterQueueS3;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDeadLetterQueueS3">MskChannelIcebergDestinationConfigurationDeadLetterQueueS3</a>

---

##### `destinationTableListInput`<sup>Optional</sup> <a name="destinationTableListInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.destinationTableListInput"></a>

```typescript
public readonly destinationTableListInput: IResolvable | MskChannelIcebergDestinationConfigurationDestinationTableListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationDestinationTableListStruct">MskChannelIcebergDestinationConfigurationDestinationTableListStruct</a>[]

---

##### `schemaEvolutionInput`<sup>Optional</sup> <a name="schemaEvolutionInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.schemaEvolutionInput"></a>

```typescript
public readonly schemaEvolutionInput: IResolvable | MskChannelIcebergDestinationConfigurationSchemaEvolution;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolution">MskChannelIcebergDestinationConfigurationSchemaEvolution</a>

---

##### `serviceExecutionRoleArnInput`<sup>Optional</sup> <a name="serviceExecutionRoleArnInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.serviceExecutionRoleArnInput"></a>

```typescript
public readonly serviceExecutionRoleArnInput: string;
```

- *Type:* string

---

##### `tableCreationInput`<sup>Optional</sup> <a name="tableCreationInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.tableCreationInput"></a>

```typescript
public readonly tableCreationInput: IResolvable | MskChannelIcebergDestinationConfigurationTableCreation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreation">MskChannelIcebergDestinationConfigurationTableCreation</a>

---

##### `appendOnly`<sup>Required</sup> <a name="appendOnly" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.appendOnly"></a>

```typescript
public readonly appendOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `compressionType`<sup>Required</sup> <a name="compressionType" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.compressionType"></a>

```typescript
public readonly compressionType: string;
```

- *Type:* string

---

##### `dataFreshnessInSeconds`<sup>Required</sup> <a name="dataFreshnessInSeconds" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.dataFreshnessInSeconds"></a>

```typescript
public readonly dataFreshnessInSeconds: number;
```

- *Type:* number

---

##### `serviceExecutionRoleArn`<sup>Required</sup> <a name="serviceExecutionRoleArn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.serviceExecutionRoleArn"></a>

```typescript
public readonly serviceExecutionRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskChannelIcebergDestinationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfiguration">MskChannelIcebergDestinationConfiguration</a>

---


### MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference <a name="MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

new mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.resetEnableSchemaEvolution">resetEnableSchemaEvolution</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableSchemaEvolution` <a name="resetEnableSchemaEvolution" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.resetEnableSchemaEvolution"></a>

```typescript
public resetEnableSchemaEvolution(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.property.enableSchemaEvolutionInput">enableSchemaEvolutionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.property.enableSchemaEvolution">enableSchemaEvolution</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolution">MskChannelIcebergDestinationConfigurationSchemaEvolution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableSchemaEvolutionInput`<sup>Optional</sup> <a name="enableSchemaEvolutionInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.property.enableSchemaEvolutionInput"></a>

```typescript
public readonly enableSchemaEvolutionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableSchemaEvolution`<sup>Required</sup> <a name="enableSchemaEvolution" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.property.enableSchemaEvolution"></a>

```typescript
public readonly enableSchemaEvolution: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskChannelIcebergDestinationConfigurationSchemaEvolution;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationSchemaEvolution">MskChannelIcebergDestinationConfigurationSchemaEvolution</a>

---


### MskChannelIcebergDestinationConfigurationTableCreationOutputReference <a name="MskChannelIcebergDestinationConfigurationTableCreationOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

new mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.resetEnableTableCreation">resetEnableTableCreation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableTableCreation` <a name="resetEnableTableCreation" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.resetEnableTableCreation"></a>

```typescript
public resetEnableTableCreation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.property.enableTableCreationInput">enableTableCreationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.property.enableTableCreation">enableTableCreation</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreation">MskChannelIcebergDestinationConfigurationTableCreation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableTableCreationInput`<sup>Optional</sup> <a name="enableTableCreationInput" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.property.enableTableCreationInput"></a>

```typescript
public readonly enableTableCreationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableTableCreation`<sup>Required</sup> <a name="enableTableCreation" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.property.enableTableCreation"></a>

```typescript
public readonly enableTableCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskChannelIcebergDestinationConfigurationTableCreation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelIcebergDestinationConfigurationTableCreation">MskChannelIcebergDestinationConfigurationTableCreation</a>

---


### MskChannelLoggingInfoCloudwatchLogsOutputReference <a name="MskChannelLoggingInfoCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

new mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resetLogGroup">resetLogGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetLogGroup` <a name="resetLogGroup" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resetLogGroup"></a>

```typescript
public resetLogGroup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.logGroupInput">logGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.logGroup">logGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `logGroupInput`<sup>Optional</sup> <a name="logGroupInput" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.logGroupInput"></a>

```typescript
public readonly logGroupInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskChannelLoggingInfoCloudwatchLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a>

---


### MskChannelLoggingInfoFirehoseOutputReference <a name="MskChannelLoggingInfoFirehoseOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

new mskChannel.MskChannelLoggingInfoFirehoseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resetDeliveryStream">resetDeliveryStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeliveryStream` <a name="resetDeliveryStream" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resetDeliveryStream"></a>

```typescript
public resetDeliveryStream(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.deliveryStreamInput">deliveryStreamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.deliveryStream">deliveryStream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deliveryStreamInput`<sup>Optional</sup> <a name="deliveryStreamInput" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.deliveryStreamInput"></a>

```typescript
public readonly deliveryStreamInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deliveryStream`<sup>Required</sup> <a name="deliveryStream" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.deliveryStream"></a>

```typescript
public readonly deliveryStream: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskChannelLoggingInfoFirehose;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a>

---


### MskChannelLoggingInfoOutputReference <a name="MskChannelLoggingInfoOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

new mskChannel.MskChannelLoggingInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.putCloudwatchLogs">putCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.putFirehose">putFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.resetCloudwatchLogs">resetCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.resetFirehose">resetFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.resetS3">resetS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogs` <a name="putCloudwatchLogs" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.putCloudwatchLogs"></a>

```typescript
public putCloudwatchLogs(value: MskChannelLoggingInfoCloudwatchLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a>

---

##### `putFirehose` <a name="putFirehose" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.putFirehose"></a>

```typescript
public putFirehose(value: MskChannelLoggingInfoFirehose): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.putFirehose.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a>

---

##### `putS3` <a name="putS3" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.putS3"></a>

```typescript
public putS3(value: MskChannelLoggingInfoS3): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a>

---

##### `resetCloudwatchLogs` <a name="resetCloudwatchLogs" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.resetCloudwatchLogs"></a>

```typescript
public resetCloudwatchLogs(): void
```

##### `resetFirehose` <a name="resetFirehose" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.resetFirehose"></a>

```typescript
public resetFirehose(): void
```

##### `resetS3` <a name="resetS3" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.resetS3"></a>

```typescript
public resetS3(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference">MskChannelLoggingInfoCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.firehose">firehose</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference">MskChannelLoggingInfoFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference">MskChannelLoggingInfoS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.cloudwatchLogsInput">cloudwatchLogsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.firehoseInput">firehoseInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.s3Input">s3Input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogs`<sup>Required</sup> <a name="cloudwatchLogs" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.cloudwatchLogs"></a>

```typescript
public readonly cloudwatchLogs: MskChannelLoggingInfoCloudwatchLogsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference">MskChannelLoggingInfoCloudwatchLogsOutputReference</a>

---

##### `firehose`<sup>Required</sup> <a name="firehose" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.firehose"></a>

```typescript
public readonly firehose: MskChannelLoggingInfoFirehoseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehoseOutputReference">MskChannelLoggingInfoFirehoseOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.s3"></a>

```typescript
public readonly s3: MskChannelLoggingInfoS3OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference">MskChannelLoggingInfoS3OutputReference</a>

---

##### `cloudwatchLogsInput`<sup>Optional</sup> <a name="cloudwatchLogsInput" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.cloudwatchLogsInput"></a>

```typescript
public readonly cloudwatchLogsInput: IResolvable | MskChannelLoggingInfoCloudwatchLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a>

---

##### `firehoseInput`<sup>Optional</sup> <a name="firehoseInput" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.firehoseInput"></a>

```typescript
public readonly firehoseInput: IResolvable | MskChannelLoggingInfoFirehose;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.s3Input"></a>

```typescript
public readonly s3Input: IResolvable | MskChannelLoggingInfoS3;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskChannelLoggingInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>

---


### MskChannelLoggingInfoS3OutputReference <a name="MskChannelLoggingInfoS3OutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

new mskChannel.MskChannelLoggingInfoS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskChannelLoggingInfoS3;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a>

---


### MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference <a name="MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

new mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.resetBucketArn">resetBucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.resetErrorOutputPrefix">resetErrorOutputPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.resetExpectedBucketOwner">resetExpectedBucketOwner</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketArn` <a name="resetBucketArn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.resetBucketArn"></a>

```typescript
public resetBucketArn(): void
```

##### `resetErrorOutputPrefix` <a name="resetErrorOutputPrefix" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.resetErrorOutputPrefix"></a>

```typescript
public resetErrorOutputPrefix(): void
```

##### `resetExpectedBucketOwner` <a name="resetExpectedBucketOwner" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.resetExpectedBucketOwner"></a>

```typescript
public resetExpectedBucketOwner(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.bucketArnInput">bucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.errorOutputPrefixInput">errorOutputPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.expectedBucketOwnerInput">expectedBucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.bucketArn">bucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.errorOutputPrefix">errorOutputPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3">MskChannelS3DestinationConfigurationDeadLetterQueueS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketArnInput`<sup>Optional</sup> <a name="bucketArnInput" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.bucketArnInput"></a>

```typescript
public readonly bucketArnInput: string;
```

- *Type:* string

---

##### `errorOutputPrefixInput`<sup>Optional</sup> <a name="errorOutputPrefixInput" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.errorOutputPrefixInput"></a>

```typescript
public readonly errorOutputPrefixInput: string;
```

- *Type:* string

---

##### `expectedBucketOwnerInput`<sup>Optional</sup> <a name="expectedBucketOwnerInput" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.expectedBucketOwnerInput"></a>

```typescript
public readonly expectedBucketOwnerInput: string;
```

- *Type:* string

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

---

##### `errorOutputPrefix`<sup>Required</sup> <a name="errorOutputPrefix" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.errorOutputPrefix"></a>

```typescript
public readonly errorOutputPrefix: string;
```

- *Type:* string

---

##### `expectedBucketOwner`<sup>Required</sup> <a name="expectedBucketOwner" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.expectedBucketOwner"></a>

```typescript
public readonly expectedBucketOwner: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskChannelS3DestinationConfigurationDeadLetterQueueS3;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3">MskChannelS3DestinationConfigurationDeadLetterQueueS3</a>

---


### MskChannelS3DestinationConfigurationOutputReference <a name="MskChannelS3DestinationConfigurationOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

new mskChannel.MskChannelS3DestinationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.putDeadLetterQueueS3">putDeadLetterQueueS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.putStorage">putStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.resetDataFreshnessInSeconds">resetDataFreshnessInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.resetDeadLetterQueueS3">resetDeadLetterQueueS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.resetServiceExecutionRoleArn">resetServiceExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.resetStorage">resetStorage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeadLetterQueueS3` <a name="putDeadLetterQueueS3" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.putDeadLetterQueueS3"></a>

```typescript
public putDeadLetterQueueS3(value: MskChannelS3DestinationConfigurationDeadLetterQueueS3): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.putDeadLetterQueueS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3">MskChannelS3DestinationConfigurationDeadLetterQueueS3</a>

---

##### `putStorage` <a name="putStorage" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.putStorage"></a>

```typescript
public putStorage(value: MskChannelS3DestinationConfigurationStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage">MskChannelS3DestinationConfigurationStorage</a>

---

##### `resetDataFreshnessInSeconds` <a name="resetDataFreshnessInSeconds" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.resetDataFreshnessInSeconds"></a>

```typescript
public resetDataFreshnessInSeconds(): void
```

##### `resetDeadLetterQueueS3` <a name="resetDeadLetterQueueS3" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.resetDeadLetterQueueS3"></a>

```typescript
public resetDeadLetterQueueS3(): void
```

##### `resetServiceExecutionRoleArn` <a name="resetServiceExecutionRoleArn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.resetServiceExecutionRoleArn"></a>

```typescript
public resetServiceExecutionRoleArn(): void
```

##### `resetStorage` <a name="resetStorage" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.resetStorage"></a>

```typescript
public resetStorage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.deadLetterQueueS3">deadLetterQueueS3</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference">MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference">MskChannelS3DestinationConfigurationStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.dataFreshnessInSecondsInput">dataFreshnessInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.deadLetterQueueS3Input">deadLetterQueueS3Input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3">MskChannelS3DestinationConfigurationDeadLetterQueueS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.serviceExecutionRoleArnInput">serviceExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.storageInput">storageInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage">MskChannelS3DestinationConfigurationStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.dataFreshnessInSeconds">dataFreshnessInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.serviceExecutionRoleArn">serviceExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration">MskChannelS3DestinationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deadLetterQueueS3`<sup>Required</sup> <a name="deadLetterQueueS3" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.deadLetterQueueS3"></a>

```typescript
public readonly deadLetterQueueS3: MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference">MskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.storage"></a>

```typescript
public readonly storage: MskChannelS3DestinationConfigurationStorageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference">MskChannelS3DestinationConfigurationStorageOutputReference</a>

---

##### `dataFreshnessInSecondsInput`<sup>Optional</sup> <a name="dataFreshnessInSecondsInput" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.dataFreshnessInSecondsInput"></a>

```typescript
public readonly dataFreshnessInSecondsInput: number;
```

- *Type:* number

---

##### `deadLetterQueueS3Input`<sup>Optional</sup> <a name="deadLetterQueueS3Input" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.deadLetterQueueS3Input"></a>

```typescript
public readonly deadLetterQueueS3Input: IResolvable | MskChannelS3DestinationConfigurationDeadLetterQueueS3;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationDeadLetterQueueS3">MskChannelS3DestinationConfigurationDeadLetterQueueS3</a>

---

##### `serviceExecutionRoleArnInput`<sup>Optional</sup> <a name="serviceExecutionRoleArnInput" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.serviceExecutionRoleArnInput"></a>

```typescript
public readonly serviceExecutionRoleArnInput: string;
```

- *Type:* string

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.storageInput"></a>

```typescript
public readonly storageInput: IResolvable | MskChannelS3DestinationConfigurationStorage;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage">MskChannelS3DestinationConfigurationStorage</a>

---

##### `dataFreshnessInSeconds`<sup>Required</sup> <a name="dataFreshnessInSeconds" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.dataFreshnessInSeconds"></a>

```typescript
public readonly dataFreshnessInSeconds: number;
```

- *Type:* number

---

##### `serviceExecutionRoleArn`<sup>Required</sup> <a name="serviceExecutionRoleArn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.serviceExecutionRoleArn"></a>

```typescript
public readonly serviceExecutionRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskChannelS3DestinationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfiguration">MskChannelS3DestinationConfiguration</a>

---


### MskChannelS3DestinationConfigurationStorageOutputReference <a name="MskChannelS3DestinationConfigurationStorageOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

new mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resetBucketArn">resetBucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resetCompressionType">resetCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resetExpectedBucketOwner">resetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resetOutputKeyTemplate">resetOutputKeyTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resetOutputPrefix">resetOutputPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resetStorageClass">resetStorageClass</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketArn` <a name="resetBucketArn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resetBucketArn"></a>

```typescript
public resetBucketArn(): void
```

##### `resetCompressionType` <a name="resetCompressionType" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resetCompressionType"></a>

```typescript
public resetCompressionType(): void
```

##### `resetExpectedBucketOwner` <a name="resetExpectedBucketOwner" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resetExpectedBucketOwner"></a>

```typescript
public resetExpectedBucketOwner(): void
```

##### `resetOutputKeyTemplate` <a name="resetOutputKeyTemplate" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resetOutputKeyTemplate"></a>

```typescript
public resetOutputKeyTemplate(): void
```

##### `resetOutputPrefix` <a name="resetOutputPrefix" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resetOutputPrefix"></a>

```typescript
public resetOutputPrefix(): void
```

##### `resetStorageClass` <a name="resetStorageClass" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.resetStorageClass"></a>

```typescript
public resetStorageClass(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.bucketArnInput">bucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.compressionTypeInput">compressionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.expectedBucketOwnerInput">expectedBucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.outputKeyTemplateInput">outputKeyTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.outputPrefixInput">outputPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.storageClassInput">storageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.bucketArn">bucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.compressionType">compressionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.outputKeyTemplate">outputKeyTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.outputPrefix">outputPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage">MskChannelS3DestinationConfigurationStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketArnInput`<sup>Optional</sup> <a name="bucketArnInput" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.bucketArnInput"></a>

```typescript
public readonly bucketArnInput: string;
```

- *Type:* string

---

##### `compressionTypeInput`<sup>Optional</sup> <a name="compressionTypeInput" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.compressionTypeInput"></a>

```typescript
public readonly compressionTypeInput: string;
```

- *Type:* string

---

##### `expectedBucketOwnerInput`<sup>Optional</sup> <a name="expectedBucketOwnerInput" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.expectedBucketOwnerInput"></a>

```typescript
public readonly expectedBucketOwnerInput: string;
```

- *Type:* string

---

##### `outputKeyTemplateInput`<sup>Optional</sup> <a name="outputKeyTemplateInput" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.outputKeyTemplateInput"></a>

```typescript
public readonly outputKeyTemplateInput: string;
```

- *Type:* string

---

##### `outputPrefixInput`<sup>Optional</sup> <a name="outputPrefixInput" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.outputPrefixInput"></a>

```typescript
public readonly outputPrefixInput: string;
```

- *Type:* string

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.storageClassInput"></a>

```typescript
public readonly storageClassInput: string;
```

- *Type:* string

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

---

##### `compressionType`<sup>Required</sup> <a name="compressionType" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.compressionType"></a>

```typescript
public readonly compressionType: string;
```

- *Type:* string

---

##### `expectedBucketOwner`<sup>Required</sup> <a name="expectedBucketOwner" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.expectedBucketOwner"></a>

```typescript
public readonly expectedBucketOwner: string;
```

- *Type:* string

---

##### `outputKeyTemplate`<sup>Required</sup> <a name="outputKeyTemplate" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.outputKeyTemplate"></a>

```typescript
public readonly outputKeyTemplate: string;
```

- *Type:* string

---

##### `outputPrefix`<sup>Required</sup> <a name="outputPrefix" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.outputPrefix"></a>

```typescript
public readonly outputPrefix: string;
```

- *Type:* string

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskChannelS3DestinationConfigurationStorage;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelS3DestinationConfigurationStorage">MskChannelS3DestinationConfigurationStorage</a>

---


### MskChannelStateInfoOutputReference <a name="MskChannelStateInfoOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

new mskChannel.MskChannelStateInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfo">MskChannelStateInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelStateInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MskChannelStateInfo;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelStateInfo">MskChannelStateInfo</a>

---


### MskChannelTopicConfigurationListRecordConverterOutputReference <a name="MskChannelTopicConfigurationListRecordConverterOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

new mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.property.valueConverterInput">valueConverterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.property.valueConverter">valueConverter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverter">MskChannelTopicConfigurationListRecordConverter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueConverterInput`<sup>Optional</sup> <a name="valueConverterInput" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.property.valueConverterInput"></a>

```typescript
public readonly valueConverterInput: string;
```

- *Type:* string

---

##### `valueConverter`<sup>Required</sup> <a name="valueConverter" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.property.valueConverter"></a>

```typescript
public readonly valueConverter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskChannelTopicConfigurationListRecordConverter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverter">MskChannelTopicConfigurationListRecordConverter</a>

---


### MskChannelTopicConfigurationListRecordSchemaOutputReference <a name="MskChannelTopicConfigurationListRecordSchemaOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

new mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.resetGsrArn">resetGsrArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGsrArn` <a name="resetGsrArn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.resetGsrArn"></a>

```typescript
public resetGsrArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.property.gsrArnInput">gsrArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.property.gsrArn">gsrArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchema">MskChannelTopicConfigurationListRecordSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gsrArnInput`<sup>Optional</sup> <a name="gsrArnInput" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.property.gsrArnInput"></a>

```typescript
public readonly gsrArnInput: string;
```

- *Type:* string

---

##### `gsrArn`<sup>Required</sup> <a name="gsrArn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.property.gsrArn"></a>

```typescript
public readonly gsrArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskChannelTopicConfigurationListRecordSchema;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchema">MskChannelTopicConfigurationListRecordSchema</a>

---


### MskChannelTopicConfigurationListStructList <a name="MskChannelTopicConfigurationListStructList" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

new mskChannel.MskChannelTopicConfigurationListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.get"></a>

```typescript
public get(index: number): MskChannelTopicConfigurationListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct">MskChannelTopicConfigurationListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskChannelTopicConfigurationListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct">MskChannelTopicConfigurationListStruct</a>[]

---


### MskChannelTopicConfigurationListStructOutputReference <a name="MskChannelTopicConfigurationListStructOutputReference" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.Initializer"></a>

```typescript
import { mskChannel } from '@cdktn/provider-awscc'

new mskChannel.MskChannelTopicConfigurationListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.putRecordConverter">putRecordConverter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.putRecordSchema">putRecordSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.resetRecordSchema">resetRecordSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRecordConverter` <a name="putRecordConverter" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.putRecordConverter"></a>

```typescript
public putRecordConverter(value: MskChannelTopicConfigurationListRecordConverter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.putRecordConverter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverter">MskChannelTopicConfigurationListRecordConverter</a>

---

##### `putRecordSchema` <a name="putRecordSchema" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.putRecordSchema"></a>

```typescript
public putRecordSchema(value: MskChannelTopicConfigurationListRecordSchema): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.putRecordSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchema">MskChannelTopicConfigurationListRecordSchema</a>

---

##### `resetRecordSchema` <a name="resetRecordSchema" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.resetRecordSchema"></a>

```typescript
public resetRecordSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.recordConverter">recordConverter</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference">MskChannelTopicConfigurationListRecordConverterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.recordSchema">recordSchema</a></code> | <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference">MskChannelTopicConfigurationListRecordSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.recordConverterInput">recordConverterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverter">MskChannelTopicConfigurationListRecordConverter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.recordSchemaInput">recordSchemaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchema">MskChannelTopicConfigurationListRecordSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.topicArnInput">topicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.topicArn">topicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct">MskChannelTopicConfigurationListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `recordConverter`<sup>Required</sup> <a name="recordConverter" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.recordConverter"></a>

```typescript
public readonly recordConverter: MskChannelTopicConfigurationListRecordConverterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverterOutputReference">MskChannelTopicConfigurationListRecordConverterOutputReference</a>

---

##### `recordSchema`<sup>Required</sup> <a name="recordSchema" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.recordSchema"></a>

```typescript
public readonly recordSchema: MskChannelTopicConfigurationListRecordSchemaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchemaOutputReference">MskChannelTopicConfigurationListRecordSchemaOutputReference</a>

---

##### `recordConverterInput`<sup>Optional</sup> <a name="recordConverterInput" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.recordConverterInput"></a>

```typescript
public readonly recordConverterInput: IResolvable | MskChannelTopicConfigurationListRecordConverter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordConverter">MskChannelTopicConfigurationListRecordConverter</a>

---

##### `recordSchemaInput`<sup>Optional</sup> <a name="recordSchemaInput" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.recordSchemaInput"></a>

```typescript
public readonly recordSchemaInput: IResolvable | MskChannelTopicConfigurationListRecordSchema;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListRecordSchema">MskChannelTopicConfigurationListRecordSchema</a>

---

##### `topicArnInput`<sup>Optional</sup> <a name="topicArnInput" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.topicArnInput"></a>

```typescript
public readonly topicArnInput: string;
```

- *Type:* string

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskChannelTopicConfigurationListStruct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskChannel.MskChannelTopicConfigurationListStruct">MskChannelTopicConfigurationListStruct</a>

---



