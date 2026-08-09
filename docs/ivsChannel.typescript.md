# `ivsChannel` Submodule <a name="`ivsChannel` Submodule" id="@cdktn/provider-awscc.ivsChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IvsChannel <a name="IvsChannel" id="@cdktn/provider-awscc.ivsChannel.IvsChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_channel awscc_ivs_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer"></a>

```typescript
import { ivsChannel } from '@cdktn/provider-awscc'

new ivsChannel.IvsChannel(scope: Construct, id: string, config?: IvsChannelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig">IvsChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig">IvsChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.putMultitrackInputConfiguration">putMultitrackInputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetAuthorized">resetAuthorized</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetContainerFormat">resetContainerFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetInsecureIngest">resetInsecureIngest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetLatencyMode">resetLatencyMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetMultitrackInputConfiguration">resetMultitrackInputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetPreset">resetPreset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetRecordingConfigurationArn">resetRecordingConfigurationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMultitrackInputConfiguration` <a name="putMultitrackInputConfiguration" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.putMultitrackInputConfiguration"></a>

```typescript
public putMultitrackInputConfiguration(value: IvsChannelMultitrackInputConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.putMultitrackInputConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration">IvsChannelMultitrackInputConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.putTags"></a>

```typescript
public putTags(value: IResolvable | IvsChannelTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a>[]

---

##### `resetAuthorized` <a name="resetAuthorized" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetAuthorized"></a>

```typescript
public resetAuthorized(): void
```

##### `resetContainerFormat` <a name="resetContainerFormat" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetContainerFormat"></a>

```typescript
public resetContainerFormat(): void
```

##### `resetInsecureIngest` <a name="resetInsecureIngest" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetInsecureIngest"></a>

```typescript
public resetInsecureIngest(): void
```

##### `resetLatencyMode` <a name="resetLatencyMode" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetLatencyMode"></a>

```typescript
public resetLatencyMode(): void
```

##### `resetMultitrackInputConfiguration` <a name="resetMultitrackInputConfiguration" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetMultitrackInputConfiguration"></a>

```typescript
public resetMultitrackInputConfiguration(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPreset` <a name="resetPreset" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetPreset"></a>

```typescript
public resetPreset(): void
```

##### `resetRecordingConfigurationArn` <a name="resetRecordingConfigurationArn" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetRecordingConfigurationArn"></a>

```typescript
public resetRecordingConfigurationArn(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IvsChannel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.isConstruct"></a>

```typescript
import { ivsChannel } from '@cdktn/provider-awscc'

ivsChannel.IvsChannel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.isTerraformElement"></a>

```typescript
import { ivsChannel } from '@cdktn/provider-awscc'

ivsChannel.IvsChannel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.isTerraformResource"></a>

```typescript
import { ivsChannel } from '@cdktn/provider-awscc'

ivsChannel.IvsChannel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.generateConfigForImport"></a>

```typescript
import { ivsChannel } from '@cdktn/provider-awscc'

ivsChannel.IvsChannel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IvsChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IvsChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IvsChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IvsChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.ingestEndpoint">ingestEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.multitrackInputConfiguration">multitrackInputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference">IvsChannelMultitrackInputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.playbackUrl">playbackUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList">IvsChannelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.authorizedInput">authorizedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.containerFormatInput">containerFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.insecureIngestInput">insecureIngestInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.latencyModeInput">latencyModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.multitrackInputConfigurationInput">multitrackInputConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration">IvsChannelMultitrackInputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.presetInput">presetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.recordingConfigurationArnInput">recordingConfigurationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.authorized">authorized</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.containerFormat">containerFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.insecureIngest">insecureIngest</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.latencyMode">latencyMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.preset">preset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.recordingConfigurationArn">recordingConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ingestEndpoint`<sup>Required</sup> <a name="ingestEndpoint" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.ingestEndpoint"></a>

```typescript
public readonly ingestEndpoint: string;
```

- *Type:* string

---

##### `multitrackInputConfiguration`<sup>Required</sup> <a name="multitrackInputConfiguration" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.multitrackInputConfiguration"></a>

```typescript
public readonly multitrackInputConfiguration: IvsChannelMultitrackInputConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference">IvsChannelMultitrackInputConfigurationOutputReference</a>

---

##### `playbackUrl`<sup>Required</sup> <a name="playbackUrl" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.playbackUrl"></a>

```typescript
public readonly playbackUrl: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.tags"></a>

```typescript
public readonly tags: IvsChannelTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList">IvsChannelTagsList</a>

---

##### `authorizedInput`<sup>Optional</sup> <a name="authorizedInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.authorizedInput"></a>

```typescript
public readonly authorizedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `containerFormatInput`<sup>Optional</sup> <a name="containerFormatInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.containerFormatInput"></a>

```typescript
public readonly containerFormatInput: string;
```

- *Type:* string

---

##### `insecureIngestInput`<sup>Optional</sup> <a name="insecureIngestInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.insecureIngestInput"></a>

```typescript
public readonly insecureIngestInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `latencyModeInput`<sup>Optional</sup> <a name="latencyModeInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.latencyModeInput"></a>

```typescript
public readonly latencyModeInput: string;
```

- *Type:* string

---

##### `multitrackInputConfigurationInput`<sup>Optional</sup> <a name="multitrackInputConfigurationInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.multitrackInputConfigurationInput"></a>

```typescript
public readonly multitrackInputConfigurationInput: IResolvable | IvsChannelMultitrackInputConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration">IvsChannelMultitrackInputConfiguration</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `presetInput`<sup>Optional</sup> <a name="presetInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.presetInput"></a>

```typescript
public readonly presetInput: string;
```

- *Type:* string

---

##### `recordingConfigurationArnInput`<sup>Optional</sup> <a name="recordingConfigurationArnInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.recordingConfigurationArnInput"></a>

```typescript
public readonly recordingConfigurationArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IvsChannelTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `authorized`<sup>Required</sup> <a name="authorized" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.authorized"></a>

```typescript
public readonly authorized: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `containerFormat`<sup>Required</sup> <a name="containerFormat" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.containerFormat"></a>

```typescript
public readonly containerFormat: string;
```

- *Type:* string

---

##### `insecureIngest`<sup>Required</sup> <a name="insecureIngest" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.insecureIngest"></a>

```typescript
public readonly insecureIngest: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `latencyMode`<sup>Required</sup> <a name="latencyMode" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.latencyMode"></a>

```typescript
public readonly latencyMode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `preset`<sup>Required</sup> <a name="preset" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.preset"></a>

```typescript
public readonly preset: string;
```

- *Type:* string

---

##### `recordingConfigurationArn`<sup>Required</sup> <a name="recordingConfigurationArn" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.recordingConfigurationArn"></a>

```typescript
public readonly recordingConfigurationArn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IvsChannelConfig <a name="IvsChannelConfig" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.Initializer"></a>

```typescript
import { ivsChannel } from '@cdktn/provider-awscc'

const ivsChannelConfig: ivsChannel.IvsChannelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.authorized">authorized</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the channel is authorized. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.containerFormat">containerFormat</a></code> | <code>string</code> | Indicates which content-packaging format is used (MPEG-TS or fMP4). |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.insecureIngest">insecureIngest</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the channel allows insecure ingest. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.latencyMode">latencyMode</a></code> | <code>string</code> | Channel latency mode. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.multitrackInputConfiguration">multitrackInputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration">IvsChannelMultitrackInputConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_channel#multitrack_input_configuration IvsChannel#multitrack_input_configuration}. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.name">name</a></code> | <code>string</code> | Channel. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.preset">preset</a></code> | <code>string</code> | Optional transcode preset for the channel. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.recordingConfigurationArn">recordingConfigurationArn</a></code> | <code>string</code> | Recording Configuration ARN. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a>[]</code> | A list of key-value pairs that contain metadata for the asset model. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.type">type</a></code> | <code>string</code> | Channel type, which determines the allowable resolution and bitrate. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authorized`<sup>Optional</sup> <a name="authorized" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.authorized"></a>

```typescript
public readonly authorized: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the channel is authorized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_channel#authorized IvsChannel#authorized}

---

##### `containerFormat`<sup>Optional</sup> <a name="containerFormat" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.containerFormat"></a>

```typescript
public readonly containerFormat: string;
```

- *Type:* string

Indicates which content-packaging format is used (MPEG-TS or fMP4).

If multitrackInputConfiguration is specified and enabled is true, then containerFormat is required and must be set to FRAGMENTED_MP4. Otherwise, containerFormat may be set to TS or FRAGMENTED_MP4. Default: TS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_channel#container_format IvsChannel#container_format}

---

##### `insecureIngest`<sup>Optional</sup> <a name="insecureIngest" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.insecureIngest"></a>

```typescript
public readonly insecureIngest: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the channel allows insecure ingest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_channel#insecure_ingest IvsChannel#insecure_ingest}

---

##### `latencyMode`<sup>Optional</sup> <a name="latencyMode" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.latencyMode"></a>

```typescript
public readonly latencyMode: string;
```

- *Type:* string

Channel latency mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_channel#latency_mode IvsChannel#latency_mode}

---

##### `multitrackInputConfiguration`<sup>Optional</sup> <a name="multitrackInputConfiguration" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.multitrackInputConfiguration"></a>

```typescript
public readonly multitrackInputConfiguration: IvsChannelMultitrackInputConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration">IvsChannelMultitrackInputConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_channel#multitrack_input_configuration IvsChannel#multitrack_input_configuration}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_channel#name IvsChannel#name}

---

##### `preset`<sup>Optional</sup> <a name="preset" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.preset"></a>

```typescript
public readonly preset: string;
```

- *Type:* string

Optional transcode preset for the channel.

This is selectable only for ADVANCED_HD and ADVANCED_SD channel types. For those channel types, the default preset is HIGHER_BANDWIDTH_DELIVERY. For other channel types (BASIC and STANDARD), preset is the empty string ("").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_channel#preset IvsChannel#preset}

---

##### `recordingConfigurationArn`<sup>Optional</sup> <a name="recordingConfigurationArn" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.recordingConfigurationArn"></a>

```typescript
public readonly recordingConfigurationArn: string;
```

- *Type:* string

Recording Configuration ARN.

A value other than an empty string indicates that recording is enabled. Default: "" (recording is disabled).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_channel#recording_configuration_arn IvsChannel#recording_configuration_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IvsChannelTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a>[]

A list of key-value pairs that contain metadata for the asset model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_channel#tags IvsChannel#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Channel type, which determines the allowable resolution and bitrate.

If you exceed the allowable resolution or bitrate, the stream probably will disconnect immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_channel#type IvsChannel#type}

---

### IvsChannelMultitrackInputConfiguration <a name="IvsChannelMultitrackInputConfiguration" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration.Initializer"></a>

```typescript
import { ivsChannel } from '@cdktn/provider-awscc'

const ivsChannelMultitrackInputConfiguration: ivsChannel.IvsChannelMultitrackInputConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether multitrack input is enabled. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration.property.maximumResolution">maximumResolution</a></code> | <code>string</code> | Maximum resolution for multitrack input. Required if enabled is true. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration.property.policy">policy</a></code> | <code>string</code> | Indicates whether multitrack input is allowed or required. Required if enabled is true. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether multitrack input is enabled.

Can be set to true only if channel type is STANDARD. Setting enabled to true with any other channel type will cause an exception. If true, then policy, maximumResolution, and containerFormat are required, and containerFormat must be set to FRAGMENTED_MP4. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_channel#enabled IvsChannel#enabled}

---

##### `maximumResolution`<sup>Optional</sup> <a name="maximumResolution" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration.property.maximumResolution"></a>

```typescript
public readonly maximumResolution: string;
```

- *Type:* string

Maximum resolution for multitrack input. Required if enabled is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_channel#maximum_resolution IvsChannel#maximum_resolution}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

Indicates whether multitrack input is allowed or required. Required if enabled is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_channel#policy IvsChannel#policy}

---

### IvsChannelTags <a name="IvsChannelTags" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTags.Initializer"></a>

```typescript
import { ivsChannel } from '@cdktn/provider-awscc'

const ivsChannelTags: ivsChannel.IvsChannelTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_channel#key IvsChannel#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_channel#value IvsChannel#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IvsChannelMultitrackInputConfigurationOutputReference <a name="IvsChannelMultitrackInputConfigurationOutputReference" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.Initializer"></a>

```typescript
import { ivsChannel } from '@cdktn/provider-awscc'

new ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.resetMaximumResolution">resetMaximumResolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.resetPolicy">resetPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetMaximumResolution` <a name="resetMaximumResolution" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.resetMaximumResolution"></a>

```typescript
public resetMaximumResolution(): void
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.resetPolicy"></a>

```typescript
public resetPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.maximumResolutionInput">maximumResolutionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.maximumResolution">maximumResolution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration">IvsChannelMultitrackInputConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maximumResolutionInput`<sup>Optional</sup> <a name="maximumResolutionInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.maximumResolutionInput"></a>

```typescript
public readonly maximumResolutionInput: string;
```

- *Type:* string

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maximumResolution`<sup>Required</sup> <a name="maximumResolution" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.maximumResolution"></a>

```typescript
public readonly maximumResolution: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IvsChannelMultitrackInputConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration">IvsChannelMultitrackInputConfiguration</a>

---


### IvsChannelTagsList <a name="IvsChannelTagsList" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.Initializer"></a>

```typescript
import { ivsChannel } from '@cdktn/provider-awscc'

new ivsChannel.IvsChannelTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.get"></a>

```typescript
public get(index: number): IvsChannelTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IvsChannelTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a>[]

---


### IvsChannelTagsOutputReference <a name="IvsChannelTagsOutputReference" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.Initializer"></a>

```typescript
import { ivsChannel } from '@cdktn/provider-awscc'

new ivsChannel.IvsChannelTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IvsChannelTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a>

---



