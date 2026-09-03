# `iotsitewiseAsset` Submodule <a name="`iotsitewiseAsset` Submodule" id="@cdktn/provider-awscc.iotsitewiseAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotsitewiseAsset <a name="IotsitewiseAsset" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset awscc_iotsitewise_asset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer"></a>

```typescript
import { iotsitewiseAsset } from '@cdktn/provider-awscc'

new iotsitewiseAsset.IotsitewiseAsset(scope: Construct, id: string, config: IotsitewiseAssetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig">IotsitewiseAssetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig">IotsitewiseAssetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.putAssetHierarchies">putAssetHierarchies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.putAssetProperties">putAssetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetAssetDescription">resetAssetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetAssetExternalId">resetAssetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetAssetHierarchies">resetAssetHierarchies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetAssetProperties">resetAssetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAssetHierarchies` <a name="putAssetHierarchies" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.putAssetHierarchies"></a>

```typescript
public putAssetHierarchies(value: IResolvable | IotsitewiseAssetAssetHierarchies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.putAssetHierarchies.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a>[]

---

##### `putAssetProperties` <a name="putAssetProperties" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.putAssetProperties"></a>

```typescript
public putAssetProperties(value: IResolvable | IotsitewiseAssetAssetProperties[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.putAssetProperties.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.putTags"></a>

```typescript
public putTags(value: IResolvable | IotsitewiseAssetTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a>[]

---

##### `resetAssetDescription` <a name="resetAssetDescription" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetAssetDescription"></a>

```typescript
public resetAssetDescription(): void
```

##### `resetAssetExternalId` <a name="resetAssetExternalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetAssetExternalId"></a>

```typescript
public resetAssetExternalId(): void
```

##### `resetAssetHierarchies` <a name="resetAssetHierarchies" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetAssetHierarchies"></a>

```typescript
public resetAssetHierarchies(): void
```

##### `resetAssetProperties` <a name="resetAssetProperties" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetAssetProperties"></a>

```typescript
public resetAssetProperties(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotsitewiseAsset resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.isConstruct"></a>

```typescript
import { iotsitewiseAsset } from '@cdktn/provider-awscc'

iotsitewiseAsset.IotsitewiseAsset.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.isTerraformElement"></a>

```typescript
import { iotsitewiseAsset } from '@cdktn/provider-awscc'

iotsitewiseAsset.IotsitewiseAsset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.isTerraformResource"></a>

```typescript
import { iotsitewiseAsset } from '@cdktn/provider-awscc'

iotsitewiseAsset.IotsitewiseAsset.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.generateConfigForImport"></a>

```typescript
import { iotsitewiseAsset } from '@cdktn/provider-awscc'

iotsitewiseAsset.IotsitewiseAsset.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotsitewiseAsset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotsitewiseAsset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotsitewiseAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotsitewiseAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetArn">assetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetHierarchies">assetHierarchies</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList">IotsitewiseAssetAssetHierarchiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetId">assetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetProperties">assetProperties</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList">IotsitewiseAssetAssetPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList">IotsitewiseAssetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetDescriptionInput">assetDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetExternalIdInput">assetExternalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetHierarchiesInput">assetHierarchiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetModelIdInput">assetModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetNameInput">assetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetPropertiesInput">assetPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetDescription">assetDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetExternalId">assetExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetModelId">assetModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetName">assetName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `assetArn`<sup>Required</sup> <a name="assetArn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetArn"></a>

```typescript
public readonly assetArn: string;
```

- *Type:* string

---

##### `assetHierarchies`<sup>Required</sup> <a name="assetHierarchies" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetHierarchies"></a>

```typescript
public readonly assetHierarchies: IotsitewiseAssetAssetHierarchiesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList">IotsitewiseAssetAssetHierarchiesList</a>

---

##### `assetId`<sup>Required</sup> <a name="assetId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetId"></a>

```typescript
public readonly assetId: string;
```

- *Type:* string

---

##### `assetProperties`<sup>Required</sup> <a name="assetProperties" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetProperties"></a>

```typescript
public readonly assetProperties: IotsitewiseAssetAssetPropertiesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList">IotsitewiseAssetAssetPropertiesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.tags"></a>

```typescript
public readonly tags: IotsitewiseAssetTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList">IotsitewiseAssetTagsList</a>

---

##### `assetDescriptionInput`<sup>Optional</sup> <a name="assetDescriptionInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetDescriptionInput"></a>

```typescript
public readonly assetDescriptionInput: string;
```

- *Type:* string

---

##### `assetExternalIdInput`<sup>Optional</sup> <a name="assetExternalIdInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetExternalIdInput"></a>

```typescript
public readonly assetExternalIdInput: string;
```

- *Type:* string

---

##### `assetHierarchiesInput`<sup>Optional</sup> <a name="assetHierarchiesInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetHierarchiesInput"></a>

```typescript
public readonly assetHierarchiesInput: IResolvable | IotsitewiseAssetAssetHierarchies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a>[]

---

##### `assetModelIdInput`<sup>Optional</sup> <a name="assetModelIdInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetModelIdInput"></a>

```typescript
public readonly assetModelIdInput: string;
```

- *Type:* string

---

##### `assetNameInput`<sup>Optional</sup> <a name="assetNameInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetNameInput"></a>

```typescript
public readonly assetNameInput: string;
```

- *Type:* string

---

##### `assetPropertiesInput`<sup>Optional</sup> <a name="assetPropertiesInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetPropertiesInput"></a>

```typescript
public readonly assetPropertiesInput: IResolvable | IotsitewiseAssetAssetProperties[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IotsitewiseAssetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a>[]

---

##### `assetDescription`<sup>Required</sup> <a name="assetDescription" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetDescription"></a>

```typescript
public readonly assetDescription: string;
```

- *Type:* string

---

##### `assetExternalId`<sup>Required</sup> <a name="assetExternalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetExternalId"></a>

```typescript
public readonly assetExternalId: string;
```

- *Type:* string

---

##### `assetModelId`<sup>Required</sup> <a name="assetModelId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetModelId"></a>

```typescript
public readonly assetModelId: string;
```

- *Type:* string

---

##### `assetName`<sup>Required</sup> <a name="assetName" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetName"></a>

```typescript
public readonly assetName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotsitewiseAssetAssetHierarchies <a name="IotsitewiseAssetAssetHierarchies" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies.Initializer"></a>

```typescript
import { iotsitewiseAsset } from '@cdktn/provider-awscc'

const iotsitewiseAssetAssetHierarchies: iotsitewiseAsset.IotsitewiseAssetAssetHierarchies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies.property.childAssetId">childAssetId</a></code> | <code>string</code> | The ID of the child asset to be associated. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies.property.externalId">externalId</a></code> | <code>string</code> | String-friendly customer provided external ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies.property.id">id</a></code> | <code>string</code> | Customer provided actual UUID for property. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies.property.logicalId">logicalId</a></code> | <code>string</code> | The LogicalID of a hierarchy in the parent asset's model. |

---

##### `childAssetId`<sup>Optional</sup> <a name="childAssetId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies.property.childAssetId"></a>

```typescript
public readonly childAssetId: string;
```

- *Type:* string

The ID of the child asset to be associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset#child_asset_id IotsitewiseAsset#child_asset_id}

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

String-friendly customer provided external ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset#external_id IotsitewiseAsset#external_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Customer provided actual UUID for property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset#id IotsitewiseAsset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logicalId`<sup>Optional</sup> <a name="logicalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies.property.logicalId"></a>

```typescript
public readonly logicalId: string;
```

- *Type:* string

The LogicalID of a hierarchy in the parent asset's model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset#logical_id IotsitewiseAsset#logical_id}

---

### IotsitewiseAssetAssetProperties <a name="IotsitewiseAssetAssetProperties" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.Initializer"></a>

```typescript
import { iotsitewiseAsset } from '@cdktn/provider-awscc'

const iotsitewiseAssetAssetProperties: iotsitewiseAsset.IotsitewiseAssetAssetProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.alias">alias</a></code> | <code>string</code> | The property alias that identifies the property. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.externalId">externalId</a></code> | <code>string</code> | String-friendly customer provided external ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.id">id</a></code> | <code>string</code> | Customer provided actual UUID for property. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.logicalId">logicalId</a></code> | <code>string</code> | Customer provided ID for property. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.notificationState">notificationState</a></code> | <code>string</code> | The MQTT notification state (ENABLED or DISABLED) for this asset property. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.unit">unit</a></code> | <code>string</code> | The unit of measure (such as Newtons or RPM) of the asset property. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

The property alias that identifies the property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset#alias IotsitewiseAsset#alias}

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

String-friendly customer provided external ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset#external_id IotsitewiseAsset#external_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Customer provided actual UUID for property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset#id IotsitewiseAsset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logicalId`<sup>Optional</sup> <a name="logicalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.logicalId"></a>

```typescript
public readonly logicalId: string;
```

- *Type:* string

Customer provided ID for property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset#logical_id IotsitewiseAsset#logical_id}

---

##### `notificationState`<sup>Optional</sup> <a name="notificationState" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.notificationState"></a>

```typescript
public readonly notificationState: string;
```

- *Type:* string

The MQTT notification state (ENABLED or DISABLED) for this asset property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset#notification_state IotsitewiseAsset#notification_state}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

The unit of measure (such as Newtons or RPM) of the asset property.

If you don't specify a value for this parameter, the service uses the value of the assetModelProperty in the asset model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset#unit IotsitewiseAsset#unit}

---

### IotsitewiseAssetConfig <a name="IotsitewiseAssetConfig" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.Initializer"></a>

```typescript
import { iotsitewiseAsset } from '@cdktn/provider-awscc'

const iotsitewiseAssetConfig: iotsitewiseAsset.IotsitewiseAssetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetModelId">assetModelId</a></code> | <code>string</code> | The ID of the asset model from which to create the asset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetName">assetName</a></code> | <code>string</code> | A unique, friendly name for the asset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetDescription">assetDescription</a></code> | <code>string</code> | A description for the asset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetExternalId">assetExternalId</a></code> | <code>string</code> | The External ID of the asset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetHierarchies">assetHierarchies</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset#asset_hierarchies IotsitewiseAsset#asset_hierarchies}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetProperties">assetProperties</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset#asset_properties IotsitewiseAsset#asset_properties}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a>[]</code> | A list of key-value pairs that contain metadata for the asset. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `assetModelId`<sup>Required</sup> <a name="assetModelId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetModelId"></a>

```typescript
public readonly assetModelId: string;
```

- *Type:* string

The ID of the asset model from which to create the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset#asset_model_id IotsitewiseAsset#asset_model_id}

---

##### `assetName`<sup>Required</sup> <a name="assetName" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetName"></a>

```typescript
public readonly assetName: string;
```

- *Type:* string

A unique, friendly name for the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset#asset_name IotsitewiseAsset#asset_name}

---

##### `assetDescription`<sup>Optional</sup> <a name="assetDescription" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetDescription"></a>

```typescript
public readonly assetDescription: string;
```

- *Type:* string

A description for the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset#asset_description IotsitewiseAsset#asset_description}

---

##### `assetExternalId`<sup>Optional</sup> <a name="assetExternalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetExternalId"></a>

```typescript
public readonly assetExternalId: string;
```

- *Type:* string

The External ID of the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset#asset_external_id IotsitewiseAsset#asset_external_id}

---

##### `assetHierarchies`<sup>Optional</sup> <a name="assetHierarchies" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetHierarchies"></a>

```typescript
public readonly assetHierarchies: IResolvable | IotsitewiseAssetAssetHierarchies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset#asset_hierarchies IotsitewiseAsset#asset_hierarchies}.

---

##### `assetProperties`<sup>Optional</sup> <a name="assetProperties" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetProperties"></a>

```typescript
public readonly assetProperties: IResolvable | IotsitewiseAssetAssetProperties[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset#asset_properties IotsitewiseAsset#asset_properties}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IotsitewiseAssetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a>[]

A list of key-value pairs that contain metadata for the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset#tags IotsitewiseAsset#tags}

---

### IotsitewiseAssetTags <a name="IotsitewiseAssetTags" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags.Initializer"></a>

```typescript
import { iotsitewiseAsset } from '@cdktn/provider-awscc'

const iotsitewiseAssetTags: iotsitewiseAsset.IotsitewiseAssetTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset#key IotsitewiseAsset#key}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset#value IotsitewiseAsset#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset#key IotsitewiseAsset#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset#value IotsitewiseAsset#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotsitewiseAssetAssetHierarchiesList <a name="IotsitewiseAssetAssetHierarchiesList" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.Initializer"></a>

```typescript
import { iotsitewiseAsset } from '@cdktn/provider-awscc'

new iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.get"></a>

```typescript
public get(index: number): IotsitewiseAssetAssetHierarchiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotsitewiseAssetAssetHierarchies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a>[]

---


### IotsitewiseAssetAssetHierarchiesOutputReference <a name="IotsitewiseAssetAssetHierarchiesOutputReference" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.Initializer"></a>

```typescript
import { iotsitewiseAsset } from '@cdktn/provider-awscc'

new iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resetChildAssetId">resetChildAssetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resetLogicalId">resetLogicalId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChildAssetId` <a name="resetChildAssetId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resetChildAssetId"></a>

```typescript
public resetChildAssetId(): void
```

##### `resetExternalId` <a name="resetExternalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resetExternalId"></a>

```typescript
public resetExternalId(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogicalId` <a name="resetLogicalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resetLogicalId"></a>

```typescript
public resetLogicalId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.childAssetIdInput">childAssetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.logicalIdInput">logicalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.childAssetId">childAssetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.logicalId">logicalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `childAssetIdInput`<sup>Optional</sup> <a name="childAssetIdInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.childAssetIdInput"></a>

```typescript
public readonly childAssetIdInput: string;
```

- *Type:* string

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logicalIdInput`<sup>Optional</sup> <a name="logicalIdInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.logicalIdInput"></a>

```typescript
public readonly logicalIdInput: string;
```

- *Type:* string

---

##### `childAssetId`<sup>Required</sup> <a name="childAssetId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.childAssetId"></a>

```typescript
public readonly childAssetId: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logicalId`<sup>Required</sup> <a name="logicalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.logicalId"></a>

```typescript
public readonly logicalId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotsitewiseAssetAssetHierarchies;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a>

---


### IotsitewiseAssetAssetPropertiesList <a name="IotsitewiseAssetAssetPropertiesList" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.Initializer"></a>

```typescript
import { iotsitewiseAsset } from '@cdktn/provider-awscc'

new iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.get"></a>

```typescript
public get(index: number): IotsitewiseAssetAssetPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotsitewiseAssetAssetProperties[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a>[]

---


### IotsitewiseAssetAssetPropertiesOutputReference <a name="IotsitewiseAssetAssetPropertiesOutputReference" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.Initializer"></a>

```typescript
import { iotsitewiseAsset } from '@cdktn/provider-awscc'

new iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetLogicalId">resetLogicalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetNotificationState">resetNotificationState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetExternalId` <a name="resetExternalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetExternalId"></a>

```typescript
public resetExternalId(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogicalId` <a name="resetLogicalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetLogicalId"></a>

```typescript
public resetLogicalId(): void
```

##### `resetNotificationState` <a name="resetNotificationState" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetNotificationState"></a>

```typescript
public resetNotificationState(): void
```

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetUnit"></a>

```typescript
public resetUnit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.logicalIdInput">logicalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.notificationStateInput">notificationStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.logicalId">logicalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.notificationState">notificationState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logicalIdInput`<sup>Optional</sup> <a name="logicalIdInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.logicalIdInput"></a>

```typescript
public readonly logicalIdInput: string;
```

- *Type:* string

---

##### `notificationStateInput`<sup>Optional</sup> <a name="notificationStateInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.notificationStateInput"></a>

```typescript
public readonly notificationStateInput: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logicalId`<sup>Required</sup> <a name="logicalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.logicalId"></a>

```typescript
public readonly logicalId: string;
```

- *Type:* string

---

##### `notificationState`<sup>Required</sup> <a name="notificationState" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.notificationState"></a>

```typescript
public readonly notificationState: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotsitewiseAssetAssetProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a>

---


### IotsitewiseAssetTagsList <a name="IotsitewiseAssetTagsList" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.Initializer"></a>

```typescript
import { iotsitewiseAsset } from '@cdktn/provider-awscc'

new iotsitewiseAsset.IotsitewiseAssetTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.get"></a>

```typescript
public get(index: number): IotsitewiseAssetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotsitewiseAssetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a>[]

---


### IotsitewiseAssetTagsOutputReference <a name="IotsitewiseAssetTagsOutputReference" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.Initializer"></a>

```typescript
import { iotsitewiseAsset } from '@cdktn/provider-awscc'

new iotsitewiseAsset.IotsitewiseAssetTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotsitewiseAssetTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a>

---



