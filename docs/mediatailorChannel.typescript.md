# `mediatailorChannel` Submodule <a name="`mediatailorChannel` Submodule" id="@cdktn/provider-awscc.mediatailorChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediatailorChannel <a name="MediatailorChannel" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel awscc_mediatailor_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer"></a>

```typescript
import { mediatailorChannel } from '@cdktn/provider-awscc'

new mediatailorChannel.MediatailorChannel(scope: Construct, id: string, config: MediatailorChannelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig">MediatailorChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig">MediatailorChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putFillerSlate">putFillerSlate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putLogConfiguration">putLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putOutputs">putOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putTimeShiftConfiguration">putTimeShiftConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetAudiences">resetAudiences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetFillerSlate">resetFillerSlate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetLogConfiguration">resetLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetTier">resetTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetTimeShiftConfiguration">resetTimeShiftConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFillerSlate` <a name="putFillerSlate" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putFillerSlate"></a>

```typescript
public putFillerSlate(value: MediatailorChannelFillerSlate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putFillerSlate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate">MediatailorChannelFillerSlate</a>

---

##### `putLogConfiguration` <a name="putLogConfiguration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putLogConfiguration"></a>

```typescript
public putLogConfiguration(value: MediatailorChannelLogConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putLogConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration">MediatailorChannelLogConfiguration</a>

---

##### `putOutputs` <a name="putOutputs" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putOutputs"></a>

```typescript
public putOutputs(value: IResolvable | MediatailorChannelOutputs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putOutputs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs">MediatailorChannelOutputs</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putTags"></a>

```typescript
public putTags(value: IResolvable | MediatailorChannelTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags">MediatailorChannelTags</a>[]

---

##### `putTimeShiftConfiguration` <a name="putTimeShiftConfiguration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putTimeShiftConfiguration"></a>

```typescript
public putTimeShiftConfiguration(value: MediatailorChannelTimeShiftConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putTimeShiftConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration">MediatailorChannelTimeShiftConfiguration</a>

---

##### `resetAudiences` <a name="resetAudiences" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetAudiences"></a>

```typescript
public resetAudiences(): void
```

##### `resetFillerSlate` <a name="resetFillerSlate" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetFillerSlate"></a>

```typescript
public resetFillerSlate(): void
```

##### `resetLogConfiguration` <a name="resetLogConfiguration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetLogConfiguration"></a>

```typescript
public resetLogConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTier` <a name="resetTier" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetTier"></a>

```typescript
public resetTier(): void
```

##### `resetTimeShiftConfiguration` <a name="resetTimeShiftConfiguration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetTimeShiftConfiguration"></a>

```typescript
public resetTimeShiftConfiguration(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MediatailorChannel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.isConstruct"></a>

```typescript
import { mediatailorChannel } from '@cdktn/provider-awscc'

mediatailorChannel.MediatailorChannel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.isTerraformElement"></a>

```typescript
import { mediatailorChannel } from '@cdktn/provider-awscc'

mediatailorChannel.MediatailorChannel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.isTerraformResource"></a>

```typescript
import { mediatailorChannel } from '@cdktn/provider-awscc'

mediatailorChannel.MediatailorChannel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.generateConfigForImport"></a>

```typescript
import { mediatailorChannel } from '@cdktn/provider-awscc'

mediatailorChannel.MediatailorChannel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MediatailorChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MediatailorChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MediatailorChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MediatailorChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.fillerSlate">fillerSlate</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference">MediatailorChannelFillerSlateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference">MediatailorChannelLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.outputs">outputs</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList">MediatailorChannelOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList">MediatailorChannelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.timeShiftConfiguration">timeShiftConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference">MediatailorChannelTimeShiftConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.audiencesInput">audiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.channelNameInput">channelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.fillerSlateInput">fillerSlateInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate">MediatailorChannelFillerSlate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.logConfigurationInput">logConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration">MediatailorChannelLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.outputsInput">outputsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs">MediatailorChannelOutputs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.playbackModeInput">playbackModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags">MediatailorChannelTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tierInput">tierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.timeShiftConfigurationInput">timeShiftConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration">MediatailorChannelTimeShiftConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.audiences">audiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.channelName">channelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.playbackMode">playbackMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tier">tier</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `fillerSlate`<sup>Required</sup> <a name="fillerSlate" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.fillerSlate"></a>

```typescript
public readonly fillerSlate: MediatailorChannelFillerSlateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference">MediatailorChannelFillerSlateOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logConfiguration`<sup>Required</sup> <a name="logConfiguration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.logConfiguration"></a>

```typescript
public readonly logConfiguration: MediatailorChannelLogConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference">MediatailorChannelLogConfigurationOutputReference</a>

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.outputs"></a>

```typescript
public readonly outputs: MediatailorChannelOutputsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList">MediatailorChannelOutputsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tags"></a>

```typescript
public readonly tags: MediatailorChannelTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList">MediatailorChannelTagsList</a>

---

##### `timeShiftConfiguration`<sup>Required</sup> <a name="timeShiftConfiguration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.timeShiftConfiguration"></a>

```typescript
public readonly timeShiftConfiguration: MediatailorChannelTimeShiftConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference">MediatailorChannelTimeShiftConfigurationOutputReference</a>

---

##### `audiencesInput`<sup>Optional</sup> <a name="audiencesInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.audiencesInput"></a>

```typescript
public readonly audiencesInput: string[];
```

- *Type:* string[]

---

##### `channelNameInput`<sup>Optional</sup> <a name="channelNameInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.channelNameInput"></a>

```typescript
public readonly channelNameInput: string;
```

- *Type:* string

---

##### `fillerSlateInput`<sup>Optional</sup> <a name="fillerSlateInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.fillerSlateInput"></a>

```typescript
public readonly fillerSlateInput: IResolvable | MediatailorChannelFillerSlate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate">MediatailorChannelFillerSlate</a>

---

##### `logConfigurationInput`<sup>Optional</sup> <a name="logConfigurationInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.logConfigurationInput"></a>

```typescript
public readonly logConfigurationInput: IResolvable | MediatailorChannelLogConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration">MediatailorChannelLogConfiguration</a>

---

##### `outputsInput`<sup>Optional</sup> <a name="outputsInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.outputsInput"></a>

```typescript
public readonly outputsInput: IResolvable | MediatailorChannelOutputs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs">MediatailorChannelOutputs</a>[]

---

##### `playbackModeInput`<sup>Optional</sup> <a name="playbackModeInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.playbackModeInput"></a>

```typescript
public readonly playbackModeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | MediatailorChannelTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags">MediatailorChannelTags</a>[]

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tierInput"></a>

```typescript
public readonly tierInput: string;
```

- *Type:* string

---

##### `timeShiftConfigurationInput`<sup>Optional</sup> <a name="timeShiftConfigurationInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.timeShiftConfigurationInput"></a>

```typescript
public readonly timeShiftConfigurationInput: IResolvable | MediatailorChannelTimeShiftConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration">MediatailorChannelTimeShiftConfiguration</a>

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.audiences"></a>

```typescript
public readonly audiences: string[];
```

- *Type:* string[]

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

---

##### `playbackMode`<sup>Required</sup> <a name="playbackMode" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.playbackMode"></a>

```typescript
public readonly playbackMode: string;
```

- *Type:* string

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediatailorChannelConfig <a name="MediatailorChannelConfig" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.Initializer"></a>

```typescript
import { mediatailorChannel } from '@cdktn/provider-awscc'

const mediatailorChannelConfig: mediatailorChannel.MediatailorChannelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.channelName">channelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#channel_name MediatailorChannel#channel_name}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.outputs">outputs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs">MediatailorChannelOutputs</a>[]</code> | <p>The channel's output properties.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.playbackMode">playbackMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#playback_mode MediatailorChannel#playback_mode}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.audiences">audiences</a></code> | <code>string[]</code> | <p>The list of audiences defined in channel.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.fillerSlate">fillerSlate</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate">MediatailorChannelFillerSlate</a></code> | <p>Slate VOD source configuration.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration">MediatailorChannelLogConfiguration</a></code> | <p>The log configuration for the channel.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags">MediatailorChannelTags</a>[]</code> | The tags to assign to the channel. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.tier">tier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#tier MediatailorChannel#tier}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.timeShiftConfiguration">timeShiftConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration">MediatailorChannelTimeShiftConfiguration</a></code> | <p>The configuration for time-shifted viewing.</p>. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#channel_name MediatailorChannel#channel_name}.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.outputs"></a>

```typescript
public readonly outputs: IResolvable | MediatailorChannelOutputs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs">MediatailorChannelOutputs</a>[]

<p>The channel's output properties.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#outputs MediatailorChannel#outputs}

---

##### `playbackMode`<sup>Required</sup> <a name="playbackMode" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.playbackMode"></a>

```typescript
public readonly playbackMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#playback_mode MediatailorChannel#playback_mode}.

---

##### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.audiences"></a>

```typescript
public readonly audiences: string[];
```

- *Type:* string[]

<p>The list of audiences defined in channel.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#audiences MediatailorChannel#audiences}

---

##### `fillerSlate`<sup>Optional</sup> <a name="fillerSlate" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.fillerSlate"></a>

```typescript
public readonly fillerSlate: MediatailorChannelFillerSlate;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate">MediatailorChannelFillerSlate</a>

<p>Slate VOD source configuration.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#filler_slate MediatailorChannel#filler_slate}

---

##### `logConfiguration`<sup>Optional</sup> <a name="logConfiguration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.logConfiguration"></a>

```typescript
public readonly logConfiguration: MediatailorChannelLogConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration">MediatailorChannelLogConfiguration</a>

<p>The log configuration for the channel.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#log_configuration MediatailorChannel#log_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | MediatailorChannelTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags">MediatailorChannelTags</a>[]

The tags to assign to the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#tags MediatailorChannel#tags}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#tier MediatailorChannel#tier}.

---

##### `timeShiftConfiguration`<sup>Optional</sup> <a name="timeShiftConfiguration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.timeShiftConfiguration"></a>

```typescript
public readonly timeShiftConfiguration: MediatailorChannelTimeShiftConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration">MediatailorChannelTimeShiftConfiguration</a>

<p>The configuration for time-shifted viewing.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#time_shift_configuration MediatailorChannel#time_shift_configuration}

---

### MediatailorChannelFillerSlate <a name="MediatailorChannelFillerSlate" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate.Initializer"></a>

```typescript
import { mediatailorChannel } from '@cdktn/provider-awscc'

const mediatailorChannelFillerSlate: mediatailorChannel.MediatailorChannelFillerSlate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate.property.sourceLocationName">sourceLocationName</a></code> | <code>string</code> | <p>The name of the source location where the slate VOD source is stored.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate.property.vodSourceName">vodSourceName</a></code> | <code>string</code> | <p>The slate VOD source name. |

---

##### `sourceLocationName`<sup>Optional</sup> <a name="sourceLocationName" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate.property.sourceLocationName"></a>

```typescript
public readonly sourceLocationName: string;
```

- *Type:* string

<p>The name of the source location where the slate VOD source is stored.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#source_location_name MediatailorChannel#source_location_name}

---

##### `vodSourceName`<sup>Optional</sup> <a name="vodSourceName" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate.property.vodSourceName"></a>

```typescript
public readonly vodSourceName: string;
```

- *Type:* string

<p>The slate VOD source name.

The VOD source must already exist in a source location before it can be used for slate.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#vod_source_name MediatailorChannel#vod_source_name}

---

### MediatailorChannelLogConfiguration <a name="MediatailorChannelLogConfiguration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration.Initializer"></a>

```typescript
import { mediatailorChannel } from '@cdktn/provider-awscc'

const mediatailorChannelLogConfiguration: mediatailorChannel.MediatailorChannelLogConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration.property.logTypes">logTypes</a></code> | <code>string[]</code> | <p>The log types.</p>. |

---

##### `logTypes`<sup>Optional</sup> <a name="logTypes" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration.property.logTypes"></a>

```typescript
public readonly logTypes: string[];
```

- *Type:* string[]

<p>The log types.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#log_types MediatailorChannel#log_types}

---

### MediatailorChannelOutputs <a name="MediatailorChannelOutputs" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs.Initializer"></a>

```typescript
import { mediatailorChannel } from '@cdktn/provider-awscc'

const mediatailorChannelOutputs: mediatailorChannel.MediatailorChannelOutputs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs.property.manifestName">manifestName</a></code> | <code>string</code> | <p>The name of the manifest for the channel. The name appears in the <code>PlaybackUrl</code>.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs.property.sourceGroup">sourceGroup</a></code> | <code>string</code> | <p>A string used to match which <code>HttpPackageConfiguration</code> is used for each <code>VodSource</code>.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs.property.dashPlaylistSettings">dashPlaylistSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings">MediatailorChannelOutputsDashPlaylistSettings</a></code> | <p>Dash manifest configuration parameters.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs.property.hlsPlaylistSettings">hlsPlaylistSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings">MediatailorChannelOutputsHlsPlaylistSettings</a></code> | <p>HLS playlist configuration parameters.</p>. |

---

##### `manifestName`<sup>Required</sup> <a name="manifestName" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs.property.manifestName"></a>

```typescript
public readonly manifestName: string;
```

- *Type:* string

<p>The name of the manifest for the channel. The name appears in the <code>PlaybackUrl</code>.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#manifest_name MediatailorChannel#manifest_name}

---

##### `sourceGroup`<sup>Required</sup> <a name="sourceGroup" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs.property.sourceGroup"></a>

```typescript
public readonly sourceGroup: string;
```

- *Type:* string

<p>A string used to match which <code>HttpPackageConfiguration</code> is used for each <code>VodSource</code>.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#source_group MediatailorChannel#source_group}

---

##### `dashPlaylistSettings`<sup>Optional</sup> <a name="dashPlaylistSettings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs.property.dashPlaylistSettings"></a>

```typescript
public readonly dashPlaylistSettings: MediatailorChannelOutputsDashPlaylistSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings">MediatailorChannelOutputsDashPlaylistSettings</a>

<p>Dash manifest configuration parameters.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#dash_playlist_settings MediatailorChannel#dash_playlist_settings}

---

##### `hlsPlaylistSettings`<sup>Optional</sup> <a name="hlsPlaylistSettings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs.property.hlsPlaylistSettings"></a>

```typescript
public readonly hlsPlaylistSettings: MediatailorChannelOutputsHlsPlaylistSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings">MediatailorChannelOutputsHlsPlaylistSettings</a>

<p>HLS playlist configuration parameters.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#hls_playlist_settings MediatailorChannel#hls_playlist_settings}

---

### MediatailorChannelOutputsDashPlaylistSettings <a name="MediatailorChannelOutputsDashPlaylistSettings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings.Initializer"></a>

```typescript
import { mediatailorChannel } from '@cdktn/provider-awscc'

const mediatailorChannelOutputsDashPlaylistSettings: mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings.property.manifestWindowSeconds">manifestWindowSeconds</a></code> | <code>number</code> | <p>The total duration (in seconds) of each manifest. Minimum value: <code>30</code> seconds. Maximum value: <code>3600</code> seconds.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings.property.minBufferTimeSeconds">minBufferTimeSeconds</a></code> | <code>number</code> | <p>Minimum amount of content (measured in seconds) that a player must keep available in the buffer. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings.property.minUpdatePeriodSeconds">minUpdatePeriodSeconds</a></code> | <code>number</code> | <p>Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings.property.suggestedPresentationDelaySeconds">suggestedPresentationDelaySeconds</a></code> | <code>number</code> | <p>Amount of time (in seconds) that the player should be from the live point at the end of the manifest. |

---

##### `manifestWindowSeconds`<sup>Optional</sup> <a name="manifestWindowSeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings.property.manifestWindowSeconds"></a>

```typescript
public readonly manifestWindowSeconds: number;
```

- *Type:* number

<p>The total duration (in seconds) of each manifest. Minimum value: <code>30</code> seconds. Maximum value: <code>3600</code> seconds.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#manifest_window_seconds MediatailorChannel#manifest_window_seconds}

---

##### `minBufferTimeSeconds`<sup>Optional</sup> <a name="minBufferTimeSeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings.property.minBufferTimeSeconds"></a>

```typescript
public readonly minBufferTimeSeconds: number;
```

- *Type:* number

<p>Minimum amount of content (measured in seconds) that a player must keep available in the buffer.

Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#min_buffer_time_seconds MediatailorChannel#min_buffer_time_seconds}

---

##### `minUpdatePeriodSeconds`<sup>Optional</sup> <a name="minUpdatePeriodSeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings.property.minUpdatePeriodSeconds"></a>

```typescript
public readonly minUpdatePeriodSeconds: number;
```

- *Type:* number

<p>Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest.

Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#min_update_period_seconds MediatailorChannel#min_update_period_seconds}

---

##### `suggestedPresentationDelaySeconds`<sup>Optional</sup> <a name="suggestedPresentationDelaySeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings.property.suggestedPresentationDelaySeconds"></a>

```typescript
public readonly suggestedPresentationDelaySeconds: number;
```

- *Type:* number

<p>Amount of time (in seconds) that the player should be from the live point at the end of the manifest.

Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#suggested_presentation_delay_seconds MediatailorChannel#suggested_presentation_delay_seconds}

---

### MediatailorChannelOutputsHlsPlaylistSettings <a name="MediatailorChannelOutputsHlsPlaylistSettings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings.Initializer"></a>

```typescript
import { mediatailorChannel } from '@cdktn/provider-awscc'

const mediatailorChannelOutputsHlsPlaylistSettings: mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings.property.adMarkupType">adMarkupType</a></code> | <code>string[]</code> | <p>Determines the type of SCTE 35 tags to use in ad markup. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings.property.manifestWindowSeconds">manifestWindowSeconds</a></code> | <code>number</code> | <p>The total duration (in seconds) of each manifest. Minimum value: <code>30</code> seconds. Maximum value: <code>3600</code> seconds.</p>. |

---

##### `adMarkupType`<sup>Optional</sup> <a name="adMarkupType" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings.property.adMarkupType"></a>

```typescript
public readonly adMarkupType: string[];
```

- *Type:* string[]

<p>Determines the type of SCTE 35 tags to use in ad markup.

Specify <code>DATERANGE</code> to use <code>DATERANGE</code> tags (for live or VOD content). Specify <code>SCTE35_ENHANCED</code> to use <code>EXT-X-CUE-OUT</code> and <code>EXT-X-CUE-IN</code> tags (for VOD content only).</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#ad_markup_type MediatailorChannel#ad_markup_type}

---

##### `manifestWindowSeconds`<sup>Optional</sup> <a name="manifestWindowSeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings.property.manifestWindowSeconds"></a>

```typescript
public readonly manifestWindowSeconds: number;
```

- *Type:* number

<p>The total duration (in seconds) of each manifest. Minimum value: <code>30</code> seconds. Maximum value: <code>3600</code> seconds.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#manifest_window_seconds MediatailorChannel#manifest_window_seconds}

---

### MediatailorChannelTags <a name="MediatailorChannelTags" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags.Initializer"></a>

```typescript
import { mediatailorChannel } from '@cdktn/provider-awscc'

const mediatailorChannelTags: mediatailorChannel.MediatailorChannelTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#key MediatailorChannel#key}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#value MediatailorChannel#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#key MediatailorChannel#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#value MediatailorChannel#value}.

---

### MediatailorChannelTimeShiftConfiguration <a name="MediatailorChannelTimeShiftConfiguration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration.Initializer"></a>

```typescript
import { mediatailorChannel } from '@cdktn/provider-awscc'

const mediatailorChannelTimeShiftConfiguration: mediatailorChannel.MediatailorChannelTimeShiftConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration.property.maxTimeDelaySeconds">maxTimeDelaySeconds</a></code> | <code>number</code> | <p>The maximum time delay for time-shifted viewing. |

---

##### `maxTimeDelaySeconds`<sup>Optional</sup> <a name="maxTimeDelaySeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration.property.maxTimeDelaySeconds"></a>

```typescript
public readonly maxTimeDelaySeconds: number;
```

- *Type:* number

<p>The maximum time delay for time-shifted viewing.

The minimum allowed maximum time delay is 0 seconds, and the maximum allowed maximum time delay is 21600 seconds (6 hours).</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#max_time_delay_seconds MediatailorChannel#max_time_delay_seconds}

---

## Classes <a name="Classes" id="Classes"></a>

### MediatailorChannelFillerSlateOutputReference <a name="MediatailorChannelFillerSlateOutputReference" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.Initializer"></a>

```typescript
import { mediatailorChannel } from '@cdktn/provider-awscc'

new mediatailorChannel.MediatailorChannelFillerSlateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.resetSourceLocationName">resetSourceLocationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.resetVodSourceName">resetVodSourceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceLocationName` <a name="resetSourceLocationName" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.resetSourceLocationName"></a>

```typescript
public resetSourceLocationName(): void
```

##### `resetVodSourceName` <a name="resetVodSourceName" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.resetVodSourceName"></a>

```typescript
public resetVodSourceName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.sourceLocationNameInput">sourceLocationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.vodSourceNameInput">vodSourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.sourceLocationName">sourceLocationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.vodSourceName">vodSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate">MediatailorChannelFillerSlate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceLocationNameInput`<sup>Optional</sup> <a name="sourceLocationNameInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.sourceLocationNameInput"></a>

```typescript
public readonly sourceLocationNameInput: string;
```

- *Type:* string

---

##### `vodSourceNameInput`<sup>Optional</sup> <a name="vodSourceNameInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.vodSourceNameInput"></a>

```typescript
public readonly vodSourceNameInput: string;
```

- *Type:* string

---

##### `sourceLocationName`<sup>Required</sup> <a name="sourceLocationName" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.sourceLocationName"></a>

```typescript
public readonly sourceLocationName: string;
```

- *Type:* string

---

##### `vodSourceName`<sup>Required</sup> <a name="vodSourceName" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.vodSourceName"></a>

```typescript
public readonly vodSourceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediatailorChannelFillerSlate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate">MediatailorChannelFillerSlate</a>

---


### MediatailorChannelLogConfigurationOutputReference <a name="MediatailorChannelLogConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.Initializer"></a>

```typescript
import { mediatailorChannel } from '@cdktn/provider-awscc'

new mediatailorChannel.MediatailorChannelLogConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.resetLogTypes">resetLogTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogTypes` <a name="resetLogTypes" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.resetLogTypes"></a>

```typescript
public resetLogTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.logTypesInput">logTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.logTypes">logTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration">MediatailorChannelLogConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logTypesInput`<sup>Optional</sup> <a name="logTypesInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.logTypesInput"></a>

```typescript
public readonly logTypesInput: string[];
```

- *Type:* string[]

---

##### `logTypes`<sup>Required</sup> <a name="logTypes" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.logTypes"></a>

```typescript
public readonly logTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediatailorChannelLogConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration">MediatailorChannelLogConfiguration</a>

---


### MediatailorChannelOutputsDashPlaylistSettingsOutputReference <a name="MediatailorChannelOutputsDashPlaylistSettingsOutputReference" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.Initializer"></a>

```typescript
import { mediatailorChannel } from '@cdktn/provider-awscc'

new mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resetManifestWindowSeconds">resetManifestWindowSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resetMinBufferTimeSeconds">resetMinBufferTimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resetMinUpdatePeriodSeconds">resetMinUpdatePeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resetSuggestedPresentationDelaySeconds">resetSuggestedPresentationDelaySeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetManifestWindowSeconds` <a name="resetManifestWindowSeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resetManifestWindowSeconds"></a>

```typescript
public resetManifestWindowSeconds(): void
```

##### `resetMinBufferTimeSeconds` <a name="resetMinBufferTimeSeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resetMinBufferTimeSeconds"></a>

```typescript
public resetMinBufferTimeSeconds(): void
```

##### `resetMinUpdatePeriodSeconds` <a name="resetMinUpdatePeriodSeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resetMinUpdatePeriodSeconds"></a>

```typescript
public resetMinUpdatePeriodSeconds(): void
```

##### `resetSuggestedPresentationDelaySeconds` <a name="resetSuggestedPresentationDelaySeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resetSuggestedPresentationDelaySeconds"></a>

```typescript
public resetSuggestedPresentationDelaySeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.manifestWindowSecondsInput">manifestWindowSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.minBufferTimeSecondsInput">minBufferTimeSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.minUpdatePeriodSecondsInput">minUpdatePeriodSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.suggestedPresentationDelaySecondsInput">suggestedPresentationDelaySecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.manifestWindowSeconds">manifestWindowSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.minBufferTimeSeconds">minBufferTimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.minUpdatePeriodSeconds">minUpdatePeriodSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.suggestedPresentationDelaySeconds">suggestedPresentationDelaySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings">MediatailorChannelOutputsDashPlaylistSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `manifestWindowSecondsInput`<sup>Optional</sup> <a name="manifestWindowSecondsInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.manifestWindowSecondsInput"></a>

```typescript
public readonly manifestWindowSecondsInput: number;
```

- *Type:* number

---

##### `minBufferTimeSecondsInput`<sup>Optional</sup> <a name="minBufferTimeSecondsInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.minBufferTimeSecondsInput"></a>

```typescript
public readonly minBufferTimeSecondsInput: number;
```

- *Type:* number

---

##### `minUpdatePeriodSecondsInput`<sup>Optional</sup> <a name="minUpdatePeriodSecondsInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.minUpdatePeriodSecondsInput"></a>

```typescript
public readonly minUpdatePeriodSecondsInput: number;
```

- *Type:* number

---

##### `suggestedPresentationDelaySecondsInput`<sup>Optional</sup> <a name="suggestedPresentationDelaySecondsInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.suggestedPresentationDelaySecondsInput"></a>

```typescript
public readonly suggestedPresentationDelaySecondsInput: number;
```

- *Type:* number

---

##### `manifestWindowSeconds`<sup>Required</sup> <a name="manifestWindowSeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.manifestWindowSeconds"></a>

```typescript
public readonly manifestWindowSeconds: number;
```

- *Type:* number

---

##### `minBufferTimeSeconds`<sup>Required</sup> <a name="minBufferTimeSeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.minBufferTimeSeconds"></a>

```typescript
public readonly minBufferTimeSeconds: number;
```

- *Type:* number

---

##### `minUpdatePeriodSeconds`<sup>Required</sup> <a name="minUpdatePeriodSeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.minUpdatePeriodSeconds"></a>

```typescript
public readonly minUpdatePeriodSeconds: number;
```

- *Type:* number

---

##### `suggestedPresentationDelaySeconds`<sup>Required</sup> <a name="suggestedPresentationDelaySeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.suggestedPresentationDelaySeconds"></a>

```typescript
public readonly suggestedPresentationDelaySeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediatailorChannelOutputsDashPlaylistSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings">MediatailorChannelOutputsDashPlaylistSettings</a>

---


### MediatailorChannelOutputsHlsPlaylistSettingsOutputReference <a name="MediatailorChannelOutputsHlsPlaylistSettingsOutputReference" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.Initializer"></a>

```typescript
import { mediatailorChannel } from '@cdktn/provider-awscc'

new mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.resetAdMarkupType">resetAdMarkupType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.resetManifestWindowSeconds">resetManifestWindowSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdMarkupType` <a name="resetAdMarkupType" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.resetAdMarkupType"></a>

```typescript
public resetAdMarkupType(): void
```

##### `resetManifestWindowSeconds` <a name="resetManifestWindowSeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.resetManifestWindowSeconds"></a>

```typescript
public resetManifestWindowSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.adMarkupTypeInput">adMarkupTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.manifestWindowSecondsInput">manifestWindowSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.adMarkupType">adMarkupType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.manifestWindowSeconds">manifestWindowSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings">MediatailorChannelOutputsHlsPlaylistSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adMarkupTypeInput`<sup>Optional</sup> <a name="adMarkupTypeInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.adMarkupTypeInput"></a>

```typescript
public readonly adMarkupTypeInput: string[];
```

- *Type:* string[]

---

##### `manifestWindowSecondsInput`<sup>Optional</sup> <a name="manifestWindowSecondsInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.manifestWindowSecondsInput"></a>

```typescript
public readonly manifestWindowSecondsInput: number;
```

- *Type:* number

---

##### `adMarkupType`<sup>Required</sup> <a name="adMarkupType" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.adMarkupType"></a>

```typescript
public readonly adMarkupType: string[];
```

- *Type:* string[]

---

##### `manifestWindowSeconds`<sup>Required</sup> <a name="manifestWindowSeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.manifestWindowSeconds"></a>

```typescript
public readonly manifestWindowSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediatailorChannelOutputsHlsPlaylistSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings">MediatailorChannelOutputsHlsPlaylistSettings</a>

---


### MediatailorChannelOutputsList <a name="MediatailorChannelOutputsList" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.Initializer"></a>

```typescript
import { mediatailorChannel } from '@cdktn/provider-awscc'

new mediatailorChannel.MediatailorChannelOutputsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.get"></a>

```typescript
public get(index: number): MediatailorChannelOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs">MediatailorChannelOutputs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediatailorChannelOutputs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs">MediatailorChannelOutputs</a>[]

---


### MediatailorChannelOutputsOutputReference <a name="MediatailorChannelOutputsOutputReference" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.Initializer"></a>

```typescript
import { mediatailorChannel } from '@cdktn/provider-awscc'

new mediatailorChannel.MediatailorChannelOutputsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.putDashPlaylistSettings">putDashPlaylistSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.putHlsPlaylistSettings">putHlsPlaylistSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.resetDashPlaylistSettings">resetDashPlaylistSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.resetHlsPlaylistSettings">resetHlsPlaylistSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDashPlaylistSettings` <a name="putDashPlaylistSettings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.putDashPlaylistSettings"></a>

```typescript
public putDashPlaylistSettings(value: MediatailorChannelOutputsDashPlaylistSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.putDashPlaylistSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings">MediatailorChannelOutputsDashPlaylistSettings</a>

---

##### `putHlsPlaylistSettings` <a name="putHlsPlaylistSettings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.putHlsPlaylistSettings"></a>

```typescript
public putHlsPlaylistSettings(value: MediatailorChannelOutputsHlsPlaylistSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.putHlsPlaylistSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings">MediatailorChannelOutputsHlsPlaylistSettings</a>

---

##### `resetDashPlaylistSettings` <a name="resetDashPlaylistSettings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.resetDashPlaylistSettings"></a>

```typescript
public resetDashPlaylistSettings(): void
```

##### `resetHlsPlaylistSettings` <a name="resetHlsPlaylistSettings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.resetHlsPlaylistSettings"></a>

```typescript
public resetHlsPlaylistSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.dashPlaylistSettings">dashPlaylistSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference">MediatailorChannelOutputsDashPlaylistSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.hlsPlaylistSettings">hlsPlaylistSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference">MediatailorChannelOutputsHlsPlaylistSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.dashPlaylistSettingsInput">dashPlaylistSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings">MediatailorChannelOutputsDashPlaylistSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.hlsPlaylistSettingsInput">hlsPlaylistSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings">MediatailorChannelOutputsHlsPlaylistSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.manifestNameInput">manifestNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.sourceGroupInput">sourceGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.manifestName">manifestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.sourceGroup">sourceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs">MediatailorChannelOutputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dashPlaylistSettings`<sup>Required</sup> <a name="dashPlaylistSettings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.dashPlaylistSettings"></a>

```typescript
public readonly dashPlaylistSettings: MediatailorChannelOutputsDashPlaylistSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference">MediatailorChannelOutputsDashPlaylistSettingsOutputReference</a>

---

##### `hlsPlaylistSettings`<sup>Required</sup> <a name="hlsPlaylistSettings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.hlsPlaylistSettings"></a>

```typescript
public readonly hlsPlaylistSettings: MediatailorChannelOutputsHlsPlaylistSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference">MediatailorChannelOutputsHlsPlaylistSettingsOutputReference</a>

---

##### `dashPlaylistSettingsInput`<sup>Optional</sup> <a name="dashPlaylistSettingsInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.dashPlaylistSettingsInput"></a>

```typescript
public readonly dashPlaylistSettingsInput: IResolvable | MediatailorChannelOutputsDashPlaylistSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings">MediatailorChannelOutputsDashPlaylistSettings</a>

---

##### `hlsPlaylistSettingsInput`<sup>Optional</sup> <a name="hlsPlaylistSettingsInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.hlsPlaylistSettingsInput"></a>

```typescript
public readonly hlsPlaylistSettingsInput: IResolvable | MediatailorChannelOutputsHlsPlaylistSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings">MediatailorChannelOutputsHlsPlaylistSettings</a>

---

##### `manifestNameInput`<sup>Optional</sup> <a name="manifestNameInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.manifestNameInput"></a>

```typescript
public readonly manifestNameInput: string;
```

- *Type:* string

---

##### `sourceGroupInput`<sup>Optional</sup> <a name="sourceGroupInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.sourceGroupInput"></a>

```typescript
public readonly sourceGroupInput: string;
```

- *Type:* string

---

##### `manifestName`<sup>Required</sup> <a name="manifestName" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.manifestName"></a>

```typescript
public readonly manifestName: string;
```

- *Type:* string

---

##### `sourceGroup`<sup>Required</sup> <a name="sourceGroup" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.sourceGroup"></a>

```typescript
public readonly sourceGroup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediatailorChannelOutputs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs">MediatailorChannelOutputs</a>

---


### MediatailorChannelTagsList <a name="MediatailorChannelTagsList" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.Initializer"></a>

```typescript
import { mediatailorChannel } from '@cdktn/provider-awscc'

new mediatailorChannel.MediatailorChannelTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.get"></a>

```typescript
public get(index: number): MediatailorChannelTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags">MediatailorChannelTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediatailorChannelTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags">MediatailorChannelTags</a>[]

---


### MediatailorChannelTagsOutputReference <a name="MediatailorChannelTagsOutputReference" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.Initializer"></a>

```typescript
import { mediatailorChannel } from '@cdktn/provider-awscc'

new mediatailorChannel.MediatailorChannelTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags">MediatailorChannelTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediatailorChannelTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags">MediatailorChannelTags</a>

---


### MediatailorChannelTimeShiftConfigurationOutputReference <a name="MediatailorChannelTimeShiftConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.Initializer"></a>

```typescript
import { mediatailorChannel } from '@cdktn/provider-awscc'

new mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.resetMaxTimeDelaySeconds">resetMaxTimeDelaySeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxTimeDelaySeconds` <a name="resetMaxTimeDelaySeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.resetMaxTimeDelaySeconds"></a>

```typescript
public resetMaxTimeDelaySeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.maxTimeDelaySecondsInput">maxTimeDelaySecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.maxTimeDelaySeconds">maxTimeDelaySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration">MediatailorChannelTimeShiftConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxTimeDelaySecondsInput`<sup>Optional</sup> <a name="maxTimeDelaySecondsInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.maxTimeDelaySecondsInput"></a>

```typescript
public readonly maxTimeDelaySecondsInput: number;
```

- *Type:* number

---

##### `maxTimeDelaySeconds`<sup>Required</sup> <a name="maxTimeDelaySeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.maxTimeDelaySeconds"></a>

```typescript
public readonly maxTimeDelaySeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediatailorChannelTimeShiftConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration">MediatailorChannelTimeShiftConfiguration</a>

---



