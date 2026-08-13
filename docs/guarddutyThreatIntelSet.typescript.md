# `guarddutyThreatIntelSet` Submodule <a name="`guarddutyThreatIntelSet` Submodule" id="@cdktn/provider-awscc.guarddutyThreatIntelSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuarddutyThreatIntelSet <a name="GuarddutyThreatIntelSet" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_threat_intel_set awscc_guardduty_threat_intel_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.Initializer"></a>

```typescript
import { guarddutyThreatIntelSet } from '@cdktn/provider-awscc'

new guarddutyThreatIntelSet.GuarddutyThreatIntelSet(scope: Construct, id: string, config: GuarddutyThreatIntelSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetConfig">GuarddutyThreatIntelSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetConfig">GuarddutyThreatIntelSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.resetActivate">resetActivate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.resetDetectorId">resetDetectorId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.resetExpectedBucketOwner">resetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.putTags"></a>

```typescript
public putTags(value: IResolvable | GuarddutyThreatIntelSetTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTags">GuarddutyThreatIntelSetTags</a>[]

---

##### `resetActivate` <a name="resetActivate" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.resetActivate"></a>

```typescript
public resetActivate(): void
```

##### `resetDetectorId` <a name="resetDetectorId" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.resetDetectorId"></a>

```typescript
public resetDetectorId(): void
```

##### `resetExpectedBucketOwner` <a name="resetExpectedBucketOwner" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.resetExpectedBucketOwner"></a>

```typescript
public resetExpectedBucketOwner(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GuarddutyThreatIntelSet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.isConstruct"></a>

```typescript
import { guarddutyThreatIntelSet } from '@cdktn/provider-awscc'

guarddutyThreatIntelSet.GuarddutyThreatIntelSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.isTerraformElement"></a>

```typescript
import { guarddutyThreatIntelSet } from '@cdktn/provider-awscc'

guarddutyThreatIntelSet.GuarddutyThreatIntelSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.isTerraformResource"></a>

```typescript
import { guarddutyThreatIntelSet } from '@cdktn/provider-awscc'

guarddutyThreatIntelSet.GuarddutyThreatIntelSet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.generateConfigForImport"></a>

```typescript
import { guarddutyThreatIntelSet } from '@cdktn/provider-awscc'

guarddutyThreatIntelSet.GuarddutyThreatIntelSet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GuarddutyThreatIntelSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GuarddutyThreatIntelSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GuarddutyThreatIntelSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_threat_intel_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GuarddutyThreatIntelSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsList">GuarddutyThreatIntelSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.threatIntelSetId">threatIntelSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.activateInput">activateInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.detectorIdInput">detectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.expectedBucketOwnerInput">expectedBucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTags">GuarddutyThreatIntelSetTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.activate">activate</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.detectorId">detectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.tags"></a>

```typescript
public readonly tags: GuarddutyThreatIntelSetTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsList">GuarddutyThreatIntelSetTagsList</a>

---

##### `threatIntelSetId`<sup>Required</sup> <a name="threatIntelSetId" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.threatIntelSetId"></a>

```typescript
public readonly threatIntelSetId: string;
```

- *Type:* string

---

##### `activateInput`<sup>Optional</sup> <a name="activateInput" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.activateInput"></a>

```typescript
public readonly activateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `detectorIdInput`<sup>Optional</sup> <a name="detectorIdInput" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.detectorIdInput"></a>

```typescript
public readonly detectorIdInput: string;
```

- *Type:* string

---

##### `expectedBucketOwnerInput`<sup>Optional</sup> <a name="expectedBucketOwnerInput" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.expectedBucketOwnerInput"></a>

```typescript
public readonly expectedBucketOwnerInput: string;
```

- *Type:* string

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | GuarddutyThreatIntelSetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTags">GuarddutyThreatIntelSetTags</a>[]

---

##### `activate`<sup>Required</sup> <a name="activate" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.activate"></a>

```typescript
public readonly activate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

---

##### `expectedBucketOwner`<sup>Required</sup> <a name="expectedBucketOwner" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.expectedBucketOwner"></a>

```typescript
public readonly expectedBucketOwner: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GuarddutyThreatIntelSetConfig <a name="GuarddutyThreatIntelSetConfig" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetConfig.Initializer"></a>

```typescript
import { guarddutyThreatIntelSet } from '@cdktn/provider-awscc'

const guarddutyThreatIntelSetConfig: guarddutyThreatIntelSet.GuarddutyThreatIntelSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetConfig.property.format">format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_threat_intel_set#format GuarddutyThreatIntelSet#format}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_threat_intel_set#location GuarddutyThreatIntelSet#location}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetConfig.property.activate">activate</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_threat_intel_set#activate GuarddutyThreatIntelSet#activate}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetConfig.property.detectorId">detectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_threat_intel_set#detector_id GuarddutyThreatIntelSet#detector_id}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetConfig.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_threat_intel_set#expected_bucket_owner GuarddutyThreatIntelSet#expected_bucket_owner}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_threat_intel_set#name GuarddutyThreatIntelSet#name}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTags">GuarddutyThreatIntelSetTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_threat_intel_set#tags GuarddutyThreatIntelSet#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetConfig.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_threat_intel_set#format GuarddutyThreatIntelSet#format}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_threat_intel_set#location GuarddutyThreatIntelSet#location}.

---

##### `activate`<sup>Optional</sup> <a name="activate" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetConfig.property.activate"></a>

```typescript
public readonly activate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_threat_intel_set#activate GuarddutyThreatIntelSet#activate}.

---

##### `detectorId`<sup>Optional</sup> <a name="detectorId" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetConfig.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_threat_intel_set#detector_id GuarddutyThreatIntelSet#detector_id}.

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="expectedBucketOwner" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetConfig.property.expectedBucketOwner"></a>

```typescript
public readonly expectedBucketOwner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_threat_intel_set#expected_bucket_owner GuarddutyThreatIntelSet#expected_bucket_owner}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_threat_intel_set#name GuarddutyThreatIntelSet#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | GuarddutyThreatIntelSetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTags">GuarddutyThreatIntelSetTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_threat_intel_set#tags GuarddutyThreatIntelSet#tags}.

---

### GuarddutyThreatIntelSetTags <a name="GuarddutyThreatIntelSetTags" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTags.Initializer"></a>

```typescript
import { guarddutyThreatIntelSet } from '@cdktn/provider-awscc'

const guarddutyThreatIntelSetTags: guarddutyThreatIntelSet.GuarddutyThreatIntelSetTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_threat_intel_set#key GuarddutyThreatIntelSet#key}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_threat_intel_set#value GuarddutyThreatIntelSet#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_threat_intel_set#key GuarddutyThreatIntelSet#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_threat_intel_set#value GuarddutyThreatIntelSet#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### GuarddutyThreatIntelSetTagsList <a name="GuarddutyThreatIntelSetTagsList" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsList.Initializer"></a>

```typescript
import { guarddutyThreatIntelSet } from '@cdktn/provider-awscc'

new guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsList.get"></a>

```typescript
public get(index: number): GuarddutyThreatIntelSetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTags">GuarddutyThreatIntelSetTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GuarddutyThreatIntelSetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTags">GuarddutyThreatIntelSetTags</a>[]

---


### GuarddutyThreatIntelSetTagsOutputReference <a name="GuarddutyThreatIntelSetTagsOutputReference" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.Initializer"></a>

```typescript
import { guarddutyThreatIntelSet } from '@cdktn/provider-awscc'

new guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTags">GuarddutyThreatIntelSetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GuarddutyThreatIntelSetTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.guarddutyThreatIntelSet.GuarddutyThreatIntelSetTags">GuarddutyThreatIntelSetTags</a>

---



