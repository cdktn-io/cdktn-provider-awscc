# `outpostsOutpost` Submodule <a name="`outpostsOutpost` Submodule" id="@cdktn/provider-awscc.outpostsOutpost"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OutpostsOutpost <a name="OutpostsOutpost" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/outposts_outpost awscc_outposts_outpost}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.Initializer"></a>

```typescript
import { outpostsOutpost } from '@cdktn/provider-awscc'

new outpostsOutpost.OutpostsOutpost(scope: Construct, id: string, config: OutpostsOutpostConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostConfig">OutpostsOutpostConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostConfig">OutpostsOutpostConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.resetAvailabilityZoneId">resetAvailabilityZoneId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.resetSupportedHardwareType">resetSupportedHardwareType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.putTags"></a>

```typescript
public putTags(value: IResolvable | OutpostsOutpostTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTags">OutpostsOutpostTags</a>[]

---

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetAvailabilityZoneId` <a name="resetAvailabilityZoneId" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.resetAvailabilityZoneId"></a>

```typescript
public resetAvailabilityZoneId(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetSupportedHardwareType` <a name="resetSupportedHardwareType" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.resetSupportedHardwareType"></a>

```typescript
public resetSupportedHardwareType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OutpostsOutpost resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.isConstruct"></a>

```typescript
import { outpostsOutpost } from '@cdktn/provider-awscc'

outpostsOutpost.OutpostsOutpost.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.isTerraformElement"></a>

```typescript
import { outpostsOutpost } from '@cdktn/provider-awscc'

outpostsOutpost.OutpostsOutpost.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.isTerraformResource"></a>

```typescript
import { outpostsOutpost } from '@cdktn/provider-awscc'

outpostsOutpost.OutpostsOutpost.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.generateConfigForImport"></a>

```typescript
import { outpostsOutpost } from '@cdktn/provider-awscc'

outpostsOutpost.OutpostsOutpost.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a OutpostsOutpost resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OutpostsOutpost to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OutpostsOutpost that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/outposts_outpost#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OutpostsOutpost to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.lifeCycleStatus">lifeCycleStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.outpostArn">outpostArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.outpostId">outpostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.siteArn">siteArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsList">OutpostsOutpostTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.availabilityZoneIdInput">availabilityZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.siteIdInput">siteIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.supportedHardwareTypeInput">supportedHardwareTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTags">OutpostsOutpostTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.availabilityZoneId">availabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.siteId">siteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.supportedHardwareType">supportedHardwareType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifeCycleStatus`<sup>Required</sup> <a name="lifeCycleStatus" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.lifeCycleStatus"></a>

```typescript
public readonly lifeCycleStatus: string;
```

- *Type:* string

---

##### `outpostArn`<sup>Required</sup> <a name="outpostArn" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.outpostArn"></a>

```typescript
public readonly outpostArn: string;
```

- *Type:* string

---

##### `outpostId`<sup>Required</sup> <a name="outpostId" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.outpostId"></a>

```typescript
public readonly outpostId: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `siteArn`<sup>Required</sup> <a name="siteArn" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.siteArn"></a>

```typescript
public readonly siteArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.tags"></a>

```typescript
public readonly tags: OutpostsOutpostTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsList">OutpostsOutpostTagsList</a>

---

##### `availabilityZoneIdInput`<sup>Optional</sup> <a name="availabilityZoneIdInput" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.availabilityZoneIdInput"></a>

```typescript
public readonly availabilityZoneIdInput: string;
```

- *Type:* string

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `siteIdInput`<sup>Optional</sup> <a name="siteIdInput" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.siteIdInput"></a>

```typescript
public readonly siteIdInput: string;
```

- *Type:* string

---

##### `supportedHardwareTypeInput`<sup>Optional</sup> <a name="supportedHardwareTypeInput" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.supportedHardwareTypeInput"></a>

```typescript
public readonly supportedHardwareTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | OutpostsOutpostTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTags">OutpostsOutpostTags</a>[]

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.availabilityZoneId"></a>

```typescript
public readonly availabilityZoneId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.siteId"></a>

```typescript
public readonly siteId: string;
```

- *Type:* string

---

##### `supportedHardwareType`<sup>Required</sup> <a name="supportedHardwareType" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.supportedHardwareType"></a>

```typescript
public readonly supportedHardwareType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpost.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OutpostsOutpostConfig <a name="OutpostsOutpostConfig" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostConfig.Initializer"></a>

```typescript
import { outpostsOutpost } from '@cdktn/provider-awscc'

const outpostsOutpostConfig: outpostsOutpost.OutpostsOutpostConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/outposts_outpost#name OutpostsOutpost#name}. |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostConfig.property.siteId">siteId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/outposts_outpost#site_id OutpostsOutpost#site_id}. |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostConfig.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/outposts_outpost#availability_zone OutpostsOutpost#availability_zone}. |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostConfig.property.availabilityZoneId">availabilityZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/outposts_outpost#availability_zone_id OutpostsOutpost#availability_zone_id}. |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/outposts_outpost#description OutpostsOutpost#description}. |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostConfig.property.supportedHardwareType">supportedHardwareType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/outposts_outpost#supported_hardware_type OutpostsOutpost#supported_hardware_type}. |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTags">OutpostsOutpostTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/outposts_outpost#tags OutpostsOutpost#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/outposts_outpost#name OutpostsOutpost#name}.

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostConfig.property.siteId"></a>

```typescript
public readonly siteId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/outposts_outpost#site_id OutpostsOutpost#site_id}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostConfig.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/outposts_outpost#availability_zone OutpostsOutpost#availability_zone}.

---

##### `availabilityZoneId`<sup>Optional</sup> <a name="availabilityZoneId" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostConfig.property.availabilityZoneId"></a>

```typescript
public readonly availabilityZoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/outposts_outpost#availability_zone_id OutpostsOutpost#availability_zone_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/outposts_outpost#description OutpostsOutpost#description}.

---

##### `supportedHardwareType`<sup>Optional</sup> <a name="supportedHardwareType" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostConfig.property.supportedHardwareType"></a>

```typescript
public readonly supportedHardwareType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/outposts_outpost#supported_hardware_type OutpostsOutpost#supported_hardware_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | OutpostsOutpostTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTags">OutpostsOutpostTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/outposts_outpost#tags OutpostsOutpost#tags}.

---

### OutpostsOutpostTags <a name="OutpostsOutpostTags" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTags.Initializer"></a>

```typescript
import { outpostsOutpost } from '@cdktn/provider-awscc'

const outpostsOutpostTags: outpostsOutpost.OutpostsOutpostTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/outposts_outpost#key OutpostsOutpost#key}. |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/outposts_outpost#value OutpostsOutpost#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/outposts_outpost#key OutpostsOutpost#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/outposts_outpost#value OutpostsOutpost#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### OutpostsOutpostTagsList <a name="OutpostsOutpostTagsList" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsList.Initializer"></a>

```typescript
import { outpostsOutpost } from '@cdktn/provider-awscc'

new outpostsOutpost.OutpostsOutpostTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsList.get"></a>

```typescript
public get(index: number): OutpostsOutpostTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTags">OutpostsOutpostTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OutpostsOutpostTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTags">OutpostsOutpostTags</a>[]

---


### OutpostsOutpostTagsOutputReference <a name="OutpostsOutpostTagsOutputReference" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.Initializer"></a>

```typescript
import { outpostsOutpost } from '@cdktn/provider-awscc'

new outpostsOutpost.OutpostsOutpostTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTags">OutpostsOutpostTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OutpostsOutpostTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.outpostsOutpost.OutpostsOutpostTags">OutpostsOutpostTags</a>

---



