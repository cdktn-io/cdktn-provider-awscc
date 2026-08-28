# `guarddutyTrustedEntitySet` Submodule <a name="`guarddutyTrustedEntitySet` Submodule" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuarddutyTrustedEntitySet <a name="GuarddutyTrustedEntitySet" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set awscc_guardduty_trusted_entity_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.Initializer"></a>

```typescript
import { guarddutyTrustedEntitySet } from '@cdktn/provider-awscc'

new guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet(scope: Construct, id: string, config: GuarddutyTrustedEntitySetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig">GuarddutyTrustedEntitySetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig">GuarddutyTrustedEntitySetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.resetActivate">resetActivate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.resetDetectorId">resetDetectorId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.resetExpectedBucketOwner">resetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.putTags"></a>

```typescript
public putTags(value: IResolvable | GuarddutyTrustedEntitySetTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTags">GuarddutyTrustedEntitySetTags</a>[]

---

##### `resetActivate` <a name="resetActivate" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.resetActivate"></a>

```typescript
public resetActivate(): void
```

##### `resetDetectorId` <a name="resetDetectorId" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.resetDetectorId"></a>

```typescript
public resetDetectorId(): void
```

##### `resetExpectedBucketOwner` <a name="resetExpectedBucketOwner" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.resetExpectedBucketOwner"></a>

```typescript
public resetExpectedBucketOwner(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GuarddutyTrustedEntitySet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.isConstruct"></a>

```typescript
import { guarddutyTrustedEntitySet } from '@cdktn/provider-awscc'

guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.isTerraformElement"></a>

```typescript
import { guarddutyTrustedEntitySet } from '@cdktn/provider-awscc'

guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.isTerraformResource"></a>

```typescript
import { guarddutyTrustedEntitySet } from '@cdktn/provider-awscc'

guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.generateConfigForImport"></a>

```typescript
import { guarddutyTrustedEntitySet } from '@cdktn/provider-awscc'

guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GuarddutyTrustedEntitySet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GuarddutyTrustedEntitySet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GuarddutyTrustedEntitySet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GuarddutyTrustedEntitySet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.errorDetails">errorDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList">GuarddutyTrustedEntitySetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.trustedEntitySetId">trustedEntitySetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.activateInput">activateInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.detectorIdInput">detectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.expectedBucketOwnerInput">expectedBucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTags">GuarddutyTrustedEntitySetTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.activate">activate</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.detectorId">detectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `errorDetails`<sup>Required</sup> <a name="errorDetails" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.errorDetails"></a>

```typescript
public readonly errorDetails: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.tags"></a>

```typescript
public readonly tags: GuarddutyTrustedEntitySetTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList">GuarddutyTrustedEntitySetTagsList</a>

---

##### `trustedEntitySetId`<sup>Required</sup> <a name="trustedEntitySetId" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.trustedEntitySetId"></a>

```typescript
public readonly trustedEntitySetId: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `activateInput`<sup>Optional</sup> <a name="activateInput" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.activateInput"></a>

```typescript
public readonly activateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `detectorIdInput`<sup>Optional</sup> <a name="detectorIdInput" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.detectorIdInput"></a>

```typescript
public readonly detectorIdInput: string;
```

- *Type:* string

---

##### `expectedBucketOwnerInput`<sup>Optional</sup> <a name="expectedBucketOwnerInput" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.expectedBucketOwnerInput"></a>

```typescript
public readonly expectedBucketOwnerInput: string;
```

- *Type:* string

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | GuarddutyTrustedEntitySetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTags">GuarddutyTrustedEntitySetTags</a>[]

---

##### `activate`<sup>Required</sup> <a name="activate" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.activate"></a>

```typescript
public readonly activate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

---

##### `expectedBucketOwner`<sup>Required</sup> <a name="expectedBucketOwner" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.expectedBucketOwner"></a>

```typescript
public readonly expectedBucketOwner: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GuarddutyTrustedEntitySetConfig <a name="GuarddutyTrustedEntitySetConfig" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.Initializer"></a>

```typescript
import { guarddutyTrustedEntitySet } from '@cdktn/provider-awscc'

const guarddutyTrustedEntitySetConfig: guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.format">format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set#format GuarddutyTrustedEntitySet#format}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set#location GuarddutyTrustedEntitySet#location}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.activate">activate</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set#activate GuarddutyTrustedEntitySet#activate}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.detectorId">detectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set#detector_id GuarddutyTrustedEntitySet#detector_id}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set#expected_bucket_owner GuarddutyTrustedEntitySet#expected_bucket_owner}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set#name GuarddutyTrustedEntitySet#name}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTags">GuarddutyTrustedEntitySetTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set#tags GuarddutyTrustedEntitySet#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set#format GuarddutyTrustedEntitySet#format}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set#location GuarddutyTrustedEntitySet#location}.

---

##### `activate`<sup>Optional</sup> <a name="activate" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.activate"></a>

```typescript
public readonly activate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set#activate GuarddutyTrustedEntitySet#activate}.

---

##### `detectorId`<sup>Optional</sup> <a name="detectorId" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set#detector_id GuarddutyTrustedEntitySet#detector_id}.

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="expectedBucketOwner" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.expectedBucketOwner"></a>

```typescript
public readonly expectedBucketOwner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set#expected_bucket_owner GuarddutyTrustedEntitySet#expected_bucket_owner}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set#name GuarddutyTrustedEntitySet#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | GuarddutyTrustedEntitySetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTags">GuarddutyTrustedEntitySetTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set#tags GuarddutyTrustedEntitySet#tags}.

---

### GuarddutyTrustedEntitySetTags <a name="GuarddutyTrustedEntitySetTags" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTags.Initializer"></a>

```typescript
import { guarddutyTrustedEntitySet } from '@cdktn/provider-awscc'

const guarddutyTrustedEntitySetTags: guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set#key GuarddutyTrustedEntitySet#key}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set#value GuarddutyTrustedEntitySet#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set#key GuarddutyTrustedEntitySet#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set#value GuarddutyTrustedEntitySet#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### GuarddutyTrustedEntitySetTagsList <a name="GuarddutyTrustedEntitySetTagsList" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.Initializer"></a>

```typescript
import { guarddutyTrustedEntitySet } from '@cdktn/provider-awscc'

new guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.get"></a>

```typescript
public get(index: number): GuarddutyTrustedEntitySetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTags">GuarddutyTrustedEntitySetTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GuarddutyTrustedEntitySetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTags">GuarddutyTrustedEntitySetTags</a>[]

---


### GuarddutyTrustedEntitySetTagsOutputReference <a name="GuarddutyTrustedEntitySetTagsOutputReference" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.Initializer"></a>

```typescript
import { guarddutyTrustedEntitySet } from '@cdktn/provider-awscc'

new guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTags">GuarddutyTrustedEntitySetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GuarddutyTrustedEntitySetTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTags">GuarddutyTrustedEntitySetTags</a>

---



