# `chimeChannel` Submodule <a name="`chimeChannel` Submodule" id="@cdktn/provider-awscc.chimeChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeChannel <a name="ChimeChannel" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel awscc_chime_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer"></a>

```typescript
import { chimeChannel } from '@cdktn/provider-awscc'

new chimeChannel.ChimeChannel(scope: Construct, id: string, config: ChimeChannelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig">ChimeChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig">ChimeChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.putElasticChannelConfiguration">putElasticChannelConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.putExpirationSettings">putExpirationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetChannelId">resetChannelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetElasticChannelConfiguration">resetElasticChannelConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetExpirationSettings">resetExpirationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetMemberArns">resetMemberArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetModeratorArns">resetModeratorArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetPrivacy">resetPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putElasticChannelConfiguration` <a name="putElasticChannelConfiguration" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.putElasticChannelConfiguration"></a>

```typescript
public putElasticChannelConfiguration(value: ChimeChannelElasticChannelConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.putElasticChannelConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration">ChimeChannelElasticChannelConfiguration</a>

---

##### `putExpirationSettings` <a name="putExpirationSettings" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.putExpirationSettings"></a>

```typescript
public putExpirationSettings(value: ChimeChannelExpirationSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.putExpirationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings">ChimeChannelExpirationSettings</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.putTags"></a>

```typescript
public putTags(value: IResolvable | ChimeChannelTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a>[]

---

##### `resetChannelId` <a name="resetChannelId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetChannelId"></a>

```typescript
public resetChannelId(): void
```

##### `resetElasticChannelConfiguration` <a name="resetElasticChannelConfiguration" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetElasticChannelConfiguration"></a>

```typescript
public resetElasticChannelConfiguration(): void
```

##### `resetExpirationSettings` <a name="resetExpirationSettings" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetExpirationSettings"></a>

```typescript
public resetExpirationSettings(): void
```

##### `resetMemberArns` <a name="resetMemberArns" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetMemberArns"></a>

```typescript
public resetMemberArns(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetModeratorArns` <a name="resetModeratorArns" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetModeratorArns"></a>

```typescript
public resetModeratorArns(): void
```

##### `resetPrivacy` <a name="resetPrivacy" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetPrivacy"></a>

```typescript
public resetPrivacy(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ChimeChannel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.isConstruct"></a>

```typescript
import { chimeChannel } from '@cdktn/provider-awscc'

chimeChannel.ChimeChannel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.isTerraformElement"></a>

```typescript
import { chimeChannel } from '@cdktn/provider-awscc'

chimeChannel.ChimeChannel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.isTerraformResource"></a>

```typescript
import { chimeChannel } from '@cdktn/provider-awscc'

chimeChannel.ChimeChannel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.generateConfigForImport"></a>

```typescript
import { chimeChannel } from '@cdktn/provider-awscc'

chimeChannel.ChimeChannel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ChimeChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChimeChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChimeChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ChimeChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.channelFlowArn">channelFlowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.createdBy">createdBy</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference">ChimeChannelCreatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.createdTimestamp">createdTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.elasticChannelConfiguration">elasticChannelConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference">ChimeChannelElasticChannelConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.expirationSettings">expirationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference">ChimeChannelExpirationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.lastMessageTimestamp">lastMessageTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.lastUpdatedTimestamp">lastUpdatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList">ChimeChannelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.appInstanceArnInput">appInstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.channelIdInput">channelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.chimeBearerInput">chimeBearerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.elasticChannelConfigurationInput">elasticChannelConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration">ChimeChannelElasticChannelConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.expirationSettingsInput">expirationSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings">ChimeChannelExpirationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.memberArnsInput">memberArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.metadataInput">metadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.moderatorArnsInput">moderatorArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.privacyInput">privacyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.appInstanceArn">appInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.channelId">channelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.chimeBearer">chimeBearer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.memberArns">memberArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.moderatorArns">moderatorArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.privacy">privacy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `channelFlowArn`<sup>Required</sup> <a name="channelFlowArn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.channelFlowArn"></a>

```typescript
public readonly channelFlowArn: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.createdBy"></a>

```typescript
public readonly createdBy: ChimeChannelCreatedByOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference">ChimeChannelCreatedByOutputReference</a>

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.createdTimestamp"></a>

```typescript
public readonly createdTimestamp: string;
```

- *Type:* string

---

##### `elasticChannelConfiguration`<sup>Required</sup> <a name="elasticChannelConfiguration" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.elasticChannelConfiguration"></a>

```typescript
public readonly elasticChannelConfiguration: ChimeChannelElasticChannelConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference">ChimeChannelElasticChannelConfigurationOutputReference</a>

---

##### `expirationSettings`<sup>Required</sup> <a name="expirationSettings" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.expirationSettings"></a>

```typescript
public readonly expirationSettings: ChimeChannelExpirationSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference">ChimeChannelExpirationSettingsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastMessageTimestamp`<sup>Required</sup> <a name="lastMessageTimestamp" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.lastMessageTimestamp"></a>

```typescript
public readonly lastMessageTimestamp: string;
```

- *Type:* string

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="lastUpdatedTimestamp" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.lastUpdatedTimestamp"></a>

```typescript
public readonly lastUpdatedTimestamp: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.tags"></a>

```typescript
public readonly tags: ChimeChannelTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList">ChimeChannelTagsList</a>

---

##### `appInstanceArnInput`<sup>Optional</sup> <a name="appInstanceArnInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.appInstanceArnInput"></a>

```typescript
public readonly appInstanceArnInput: string;
```

- *Type:* string

---

##### `channelIdInput`<sup>Optional</sup> <a name="channelIdInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.channelIdInput"></a>

```typescript
public readonly channelIdInput: string;
```

- *Type:* string

---

##### `chimeBearerInput`<sup>Optional</sup> <a name="chimeBearerInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.chimeBearerInput"></a>

```typescript
public readonly chimeBearerInput: string;
```

- *Type:* string

---

##### `elasticChannelConfigurationInput`<sup>Optional</sup> <a name="elasticChannelConfigurationInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.elasticChannelConfigurationInput"></a>

```typescript
public readonly elasticChannelConfigurationInput: IResolvable | ChimeChannelElasticChannelConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration">ChimeChannelElasticChannelConfiguration</a>

---

##### `expirationSettingsInput`<sup>Optional</sup> <a name="expirationSettingsInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.expirationSettingsInput"></a>

```typescript
public readonly expirationSettingsInput: IResolvable | ChimeChannelExpirationSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings">ChimeChannelExpirationSettings</a>

---

##### `memberArnsInput`<sup>Optional</sup> <a name="memberArnsInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.memberArnsInput"></a>

```typescript
public readonly memberArnsInput: string[];
```

- *Type:* string[]

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.metadataInput"></a>

```typescript
public readonly metadataInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `moderatorArnsInput`<sup>Optional</sup> <a name="moderatorArnsInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.moderatorArnsInput"></a>

```typescript
public readonly moderatorArnsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `privacyInput`<sup>Optional</sup> <a name="privacyInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.privacyInput"></a>

```typescript
public readonly privacyInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ChimeChannelTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a>[]

---

##### `appInstanceArn`<sup>Required</sup> <a name="appInstanceArn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.appInstanceArn"></a>

```typescript
public readonly appInstanceArn: string;
```

- *Type:* string

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

---

##### `chimeBearer`<sup>Required</sup> <a name="chimeBearer" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.chimeBearer"></a>

```typescript
public readonly chimeBearer: string;
```

- *Type:* string

---

##### `memberArns`<sup>Required</sup> <a name="memberArns" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.memberArns"></a>

```typescript
public readonly memberArns: string[];
```

- *Type:* string[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `moderatorArns`<sup>Required</sup> <a name="moderatorArns" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.moderatorArns"></a>

```typescript
public readonly moderatorArns: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privacy`<sup>Required</sup> <a name="privacy" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.privacy"></a>

```typescript
public readonly privacy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeChannelConfig <a name="ChimeChannelConfig" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.Initializer"></a>

```typescript
import { chimeChannel } from '@cdktn/provider-awscc'

const chimeChannelConfig: chimeChannel.ChimeChannelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.appInstanceArn">appInstanceArn</a></code> | <code>string</code> | The ARN of the AppInstance that contains the channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.chimeBearer">chimeBearer</a></code> | <code>string</code> | The ARN of the AppInstanceUser or AppInstanceBot that performs every operation on this channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.name">name</a></code> | <code>string</code> | The name of the channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.channelId">channelId</a></code> | <code>string</code> | The ID of the channel. When omitted, the service generates a UUID. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.elasticChannelConfiguration">elasticChannelConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration">ChimeChannelElasticChannelConfiguration</a></code> | The attributes required to configure and create an elastic channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.expirationSettings">expirationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings">ChimeChannelExpirationSettings</a></code> | Settings that control the interval after which the channel is automatically deleted. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.memberArns">memberArns</a></code> | <code>string[]</code> | The ARNs of the AppInstanceUsers to add to the channel as members when it is created. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.metadata">metadata</a></code> | <code>string</code> | The metadata of the channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.mode">mode</a></code> | <code>string</code> | The channel mode. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.moderatorArns">moderatorArns</a></code> | <code>string[]</code> | The ARNs of the AppInstanceUsers to add to the channel as moderators when it is created. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.privacy">privacy</a></code> | <code>string</code> | The channel's privacy level. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a>[]</code> | The tags for the channel. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `appInstanceArn`<sup>Required</sup> <a name="appInstanceArn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.appInstanceArn"></a>

```typescript
public readonly appInstanceArn: string;
```

- *Type:* string

The ARN of the AppInstance that contains the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#app_instance_arn ChimeChannel#app_instance_arn}

---

##### `chimeBearer`<sup>Required</sup> <a name="chimeBearer" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.chimeBearer"></a>

```typescript
public readonly chimeBearer: string;
```

- *Type:* string

The ARN of the AppInstanceUser or AppInstanceBot that performs every operation on this channel.

Whichever of the two creates a channel automatically becomes one of its moderators, so the same ARN can subsequently read, update and delete the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#chime_bearer ChimeChannel#chime_bearer}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#name ChimeChannel#name}

---

##### `channelId`<sup>Optional</sup> <a name="channelId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

The ID of the channel. When omitted, the service generates a UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#channel_id ChimeChannel#channel_id}

---

##### `elasticChannelConfiguration`<sup>Optional</sup> <a name="elasticChannelConfiguration" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.elasticChannelConfiguration"></a>

```typescript
public readonly elasticChannelConfiguration: ChimeChannelElasticChannelConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration">ChimeChannelElasticChannelConfiguration</a>

The attributes required to configure and create an elastic channel.

An elastic channel must use RESTRICTED mode, cannot be created with MemberArns, and is available only in some regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#elastic_channel_configuration ChimeChannel#elastic_channel_configuration}

---

##### `expirationSettings`<sup>Optional</sup> <a name="expirationSettings" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.expirationSettings"></a>

```typescript
public readonly expirationSettings: ChimeChannelExpirationSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings">ChimeChannelExpirationSettings</a>

Settings that control the interval after which the channel is automatically deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#expiration_settings ChimeChannel#expiration_settings}

---

##### `memberArns`<sup>Optional</sup> <a name="memberArns" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.memberArns"></a>

```typescript
public readonly memberArns: string[];
```

- *Type:* string[]

The ARNs of the AppInstanceUsers to add to the channel as members when it is created.

Cannot be combined with ElasticChannelConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#member_arns ChimeChannel#member_arns}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

The metadata of the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#metadata ChimeChannel#metadata}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

The channel mode.

In an UNRESTRICTED channel, members can add themselves and other members; in a RESTRICTED channel, only administrators and moderators can add members. An elastic channel must be RESTRICTED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#mode ChimeChannel#mode}

---

##### `moderatorArns`<sup>Optional</sup> <a name="moderatorArns" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.moderatorArns"></a>

```typescript
public readonly moderatorArns: string[];
```

- *Type:* string[]

The ARNs of the AppInstanceUsers to add to the channel as moderators when it is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#moderator_arns ChimeChannel#moderator_arns}

---

##### `privacy`<sup>Optional</sup> <a name="privacy" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.privacy"></a>

```typescript
public readonly privacy: string;
```

- *Type:* string

The channel's privacy level.

A PUBLIC channel is discoverable by anyone in the AppInstance; a PRIVATE channel is not. Privacy cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#privacy ChimeChannel#privacy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ChimeChannelTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a>[]

The tags for the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#tags ChimeChannel#tags}

---

### ChimeChannelCreatedBy <a name="ChimeChannelCreatedBy" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedBy.Initializer"></a>

```typescript
import { chimeChannel } from '@cdktn/provider-awscc'

const chimeChannelCreatedBy: chimeChannel.ChimeChannelCreatedBy = { ... }
```


### ChimeChannelElasticChannelConfiguration <a name="ChimeChannelElasticChannelConfiguration" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration.Initializer"></a>

```typescript
import { chimeChannel } from '@cdktn/provider-awscc'

const chimeChannelElasticChannelConfiguration: chimeChannel.ChimeChannelElasticChannelConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration.property.maximumSubChannels">maximumSubChannels</a></code> | <code>number</code> | The maximum number of SubChannels allowed in the elastic channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration.property.minimumMembershipPercentage">minimumMembershipPercentage</a></code> | <code>number</code> | The minimum allowed percentage of TargetMembershipsPerSubChannel users, used to balance members across SubChannels. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration.property.targetMembershipsPerSubChannel">targetMembershipsPerSubChannel</a></code> | <code>number</code> | The maximum number of members allowed in a SubChannel. |

---

##### `maximumSubChannels`<sup>Optional</sup> <a name="maximumSubChannels" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration.property.maximumSubChannels"></a>

```typescript
public readonly maximumSubChannels: number;
```

- *Type:* number

The maximum number of SubChannels allowed in the elastic channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#maximum_sub_channels ChimeChannel#maximum_sub_channels}

---

##### `minimumMembershipPercentage`<sup>Optional</sup> <a name="minimumMembershipPercentage" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration.property.minimumMembershipPercentage"></a>

```typescript
public readonly minimumMembershipPercentage: number;
```

- *Type:* number

The minimum allowed percentage of TargetMembershipsPerSubChannel users, used to balance members across SubChannels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#minimum_membership_percentage ChimeChannel#minimum_membership_percentage}

---

##### `targetMembershipsPerSubChannel`<sup>Optional</sup> <a name="targetMembershipsPerSubChannel" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration.property.targetMembershipsPerSubChannel"></a>

```typescript
public readonly targetMembershipsPerSubChannel: number;
```

- *Type:* number

The maximum number of members allowed in a SubChannel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#target_memberships_per_sub_channel ChimeChannel#target_memberships_per_sub_channel}

---

### ChimeChannelExpirationSettings <a name="ChimeChannelExpirationSettings" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings.Initializer"></a>

```typescript
import { chimeChannel } from '@cdktn/provider-awscc'

const chimeChannelExpirationSettings: chimeChannel.ChimeChannelExpirationSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings.property.expirationCriterion">expirationCriterion</a></code> | <code>string</code> | The condition the expiration period is measured from. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings.property.expirationDays">expirationDays</a></code> | <code>number</code> | The period in days after which the system automatically deletes the channel. |

---

##### `expirationCriterion`<sup>Optional</sup> <a name="expirationCriterion" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings.property.expirationCriterion"></a>

```typescript
public readonly expirationCriterion: string;
```

- *Type:* string

The condition the expiration period is measured from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#expiration_criterion ChimeChannel#expiration_criterion}

---

##### `expirationDays`<sup>Optional</sup> <a name="expirationDays" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings.property.expirationDays"></a>

```typescript
public readonly expirationDays: number;
```

- *Type:* number

The period in days after which the system automatically deletes the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#expiration_days ChimeChannel#expiration_days}

---

### ChimeChannelTags <a name="ChimeChannelTags" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTags.Initializer"></a>

```typescript
import { chimeChannel } from '@cdktn/provider-awscc'

const chimeChannelTags: chimeChannel.ChimeChannelTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags.property.key">key</a></code> | <code>string</code> | The key in a tag. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags.property.value">value</a></code> | <code>string</code> | The value in a tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key in a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#key ChimeChannel#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value in a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#value ChimeChannel#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeChannelCreatedByOutputReference <a name="ChimeChannelCreatedByOutputReference" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.Initializer"></a>

```typescript
import { chimeChannel } from '@cdktn/provider-awscc'

new chimeChannel.ChimeChannelCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedBy">ChimeChannelCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ChimeChannelCreatedBy;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedBy">ChimeChannelCreatedBy</a>

---


### ChimeChannelElasticChannelConfigurationOutputReference <a name="ChimeChannelElasticChannelConfigurationOutputReference" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.Initializer"></a>

```typescript
import { chimeChannel } from '@cdktn/provider-awscc'

new chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resetMaximumSubChannels">resetMaximumSubChannels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resetMinimumMembershipPercentage">resetMinimumMembershipPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resetTargetMembershipsPerSubChannel">resetTargetMembershipsPerSubChannel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumSubChannels` <a name="resetMaximumSubChannels" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resetMaximumSubChannels"></a>

```typescript
public resetMaximumSubChannels(): void
```

##### `resetMinimumMembershipPercentage` <a name="resetMinimumMembershipPercentage" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resetMinimumMembershipPercentage"></a>

```typescript
public resetMinimumMembershipPercentage(): void
```

##### `resetTargetMembershipsPerSubChannel` <a name="resetTargetMembershipsPerSubChannel" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resetTargetMembershipsPerSubChannel"></a>

```typescript
public resetTargetMembershipsPerSubChannel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.maximumSubChannelsInput">maximumSubChannelsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.minimumMembershipPercentageInput">minimumMembershipPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.targetMembershipsPerSubChannelInput">targetMembershipsPerSubChannelInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.maximumSubChannels">maximumSubChannels</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.minimumMembershipPercentage">minimumMembershipPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.targetMembershipsPerSubChannel">targetMembershipsPerSubChannel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration">ChimeChannelElasticChannelConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumSubChannelsInput`<sup>Optional</sup> <a name="maximumSubChannelsInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.maximumSubChannelsInput"></a>

```typescript
public readonly maximumSubChannelsInput: number;
```

- *Type:* number

---

##### `minimumMembershipPercentageInput`<sup>Optional</sup> <a name="minimumMembershipPercentageInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.minimumMembershipPercentageInput"></a>

```typescript
public readonly minimumMembershipPercentageInput: number;
```

- *Type:* number

---

##### `targetMembershipsPerSubChannelInput`<sup>Optional</sup> <a name="targetMembershipsPerSubChannelInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.targetMembershipsPerSubChannelInput"></a>

```typescript
public readonly targetMembershipsPerSubChannelInput: number;
```

- *Type:* number

---

##### `maximumSubChannels`<sup>Required</sup> <a name="maximumSubChannels" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.maximumSubChannels"></a>

```typescript
public readonly maximumSubChannels: number;
```

- *Type:* number

---

##### `minimumMembershipPercentage`<sup>Required</sup> <a name="minimumMembershipPercentage" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.minimumMembershipPercentage"></a>

```typescript
public readonly minimumMembershipPercentage: number;
```

- *Type:* number

---

##### `targetMembershipsPerSubChannel`<sup>Required</sup> <a name="targetMembershipsPerSubChannel" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.targetMembershipsPerSubChannel"></a>

```typescript
public readonly targetMembershipsPerSubChannel: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeChannelElasticChannelConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration">ChimeChannelElasticChannelConfiguration</a>

---


### ChimeChannelExpirationSettingsOutputReference <a name="ChimeChannelExpirationSettingsOutputReference" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.Initializer"></a>

```typescript
import { chimeChannel } from '@cdktn/provider-awscc'

new chimeChannel.ChimeChannelExpirationSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.resetExpirationCriterion">resetExpirationCriterion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.resetExpirationDays">resetExpirationDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpirationCriterion` <a name="resetExpirationCriterion" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.resetExpirationCriterion"></a>

```typescript
public resetExpirationCriterion(): void
```

##### `resetExpirationDays` <a name="resetExpirationDays" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.resetExpirationDays"></a>

```typescript
public resetExpirationDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationCriterionInput">expirationCriterionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationDaysInput">expirationDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationCriterion">expirationCriterion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationDays">expirationDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings">ChimeChannelExpirationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expirationCriterionInput`<sup>Optional</sup> <a name="expirationCriterionInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationCriterionInput"></a>

```typescript
public readonly expirationCriterionInput: string;
```

- *Type:* string

---

##### `expirationDaysInput`<sup>Optional</sup> <a name="expirationDaysInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationDaysInput"></a>

```typescript
public readonly expirationDaysInput: number;
```

- *Type:* number

---

##### `expirationCriterion`<sup>Required</sup> <a name="expirationCriterion" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationCriterion"></a>

```typescript
public readonly expirationCriterion: string;
```

- *Type:* string

---

##### `expirationDays`<sup>Required</sup> <a name="expirationDays" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationDays"></a>

```typescript
public readonly expirationDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeChannelExpirationSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings">ChimeChannelExpirationSettings</a>

---


### ChimeChannelTagsList <a name="ChimeChannelTagsList" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.Initializer"></a>

```typescript
import { chimeChannel } from '@cdktn/provider-awscc'

new chimeChannel.ChimeChannelTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.get"></a>

```typescript
public get(index: number): ChimeChannelTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeChannelTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a>[]

---


### ChimeChannelTagsOutputReference <a name="ChimeChannelTagsOutputReference" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer"></a>

```typescript
import { chimeChannel } from '@cdktn/provider-awscc'

new chimeChannel.ChimeChannelTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeChannelTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a>

---



