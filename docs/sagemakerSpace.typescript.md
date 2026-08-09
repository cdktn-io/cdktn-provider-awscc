# `sagemakerSpace` Submodule <a name="`sagemakerSpace` Submodule" id="@cdktn/provider-awscc.sagemakerSpace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerSpace <a name="SagemakerSpace" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space awscc_sagemaker_space}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

new sagemakerSpace.SagemakerSpace(scope: Construct, id: string, config: SagemakerSpaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig">SagemakerSpaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig">SagemakerSpaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.putOwnershipSettings">putOwnershipSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.putSpaceSettings">putSpaceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.putSpaceSharingSettings">putSpaceSharingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.resetOwnershipSettings">resetOwnershipSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.resetSpaceDisplayName">resetSpaceDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.resetSpaceSettings">resetSpaceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.resetSpaceSharingSettings">resetSpaceSharingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOwnershipSettings` <a name="putOwnershipSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.putOwnershipSettings"></a>

```typescript
public putOwnershipSettings(value: SagemakerSpaceOwnershipSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.putOwnershipSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettings">SagemakerSpaceOwnershipSettings</a>

---

##### `putSpaceSettings` <a name="putSpaceSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.putSpaceSettings"></a>

```typescript
public putSpaceSettings(value: SagemakerSpaceSpaceSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.putSpaceSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings">SagemakerSpaceSpaceSettings</a>

---

##### `putSpaceSharingSettings` <a name="putSpaceSharingSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.putSpaceSharingSettings"></a>

```typescript
public putSpaceSharingSettings(value: SagemakerSpaceSpaceSharingSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.putSpaceSharingSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettings">SagemakerSpaceSpaceSharingSettings</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.putTags"></a>

```typescript
public putTags(value: IResolvable | SagemakerSpaceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTags">SagemakerSpaceTags</a>[]

---

##### `resetOwnershipSettings` <a name="resetOwnershipSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.resetOwnershipSettings"></a>

```typescript
public resetOwnershipSettings(): void
```

##### `resetSpaceDisplayName` <a name="resetSpaceDisplayName" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.resetSpaceDisplayName"></a>

```typescript
public resetSpaceDisplayName(): void
```

##### `resetSpaceSettings` <a name="resetSpaceSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.resetSpaceSettings"></a>

```typescript
public resetSpaceSettings(): void
```

##### `resetSpaceSharingSettings` <a name="resetSpaceSharingSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.resetSpaceSharingSettings"></a>

```typescript
public resetSpaceSharingSettings(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerSpace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.isConstruct"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

sagemakerSpace.SagemakerSpace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.isTerraformElement"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

sagemakerSpace.SagemakerSpace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.isTerraformResource"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

sagemakerSpace.SagemakerSpace.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.generateConfigForImport"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

sagemakerSpace.SagemakerSpace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SagemakerSpace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerSpace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerSpace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerSpace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.ownershipSettings">ownershipSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference">SagemakerSpaceOwnershipSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.spaceArn">spaceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.spaceSettings">spaceSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference">SagemakerSpaceSpaceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.spaceSharingSettings">spaceSharingSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference">SagemakerSpaceSpaceSharingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList">SagemakerSpaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.domainIdInput">domainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.ownershipSettingsInput">ownershipSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettings">SagemakerSpaceOwnershipSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.spaceDisplayNameInput">spaceDisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.spaceNameInput">spaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.spaceSettingsInput">spaceSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings">SagemakerSpaceSpaceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.spaceSharingSettingsInput">spaceSharingSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettings">SagemakerSpaceSpaceSharingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTags">SagemakerSpaceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.spaceDisplayName">spaceDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.spaceName">spaceName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ownershipSettings`<sup>Required</sup> <a name="ownershipSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.ownershipSettings"></a>

```typescript
public readonly ownershipSettings: SagemakerSpaceOwnershipSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference">SagemakerSpaceOwnershipSettingsOutputReference</a>

---

##### `spaceArn`<sup>Required</sup> <a name="spaceArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.spaceArn"></a>

```typescript
public readonly spaceArn: string;
```

- *Type:* string

---

##### `spaceSettings`<sup>Required</sup> <a name="spaceSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.spaceSettings"></a>

```typescript
public readonly spaceSettings: SagemakerSpaceSpaceSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference">SagemakerSpaceSpaceSettingsOutputReference</a>

---

##### `spaceSharingSettings`<sup>Required</sup> <a name="spaceSharingSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.spaceSharingSettings"></a>

```typescript
public readonly spaceSharingSettings: SagemakerSpaceSpaceSharingSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference">SagemakerSpaceSpaceSharingSettingsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.tags"></a>

```typescript
public readonly tags: SagemakerSpaceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList">SagemakerSpaceTagsList</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.domainIdInput"></a>

```typescript
public readonly domainIdInput: string;
```

- *Type:* string

---

##### `ownershipSettingsInput`<sup>Optional</sup> <a name="ownershipSettingsInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.ownershipSettingsInput"></a>

```typescript
public readonly ownershipSettingsInput: IResolvable | SagemakerSpaceOwnershipSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettings">SagemakerSpaceOwnershipSettings</a>

---

##### `spaceDisplayNameInput`<sup>Optional</sup> <a name="spaceDisplayNameInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.spaceDisplayNameInput"></a>

```typescript
public readonly spaceDisplayNameInput: string;
```

- *Type:* string

---

##### `spaceNameInput`<sup>Optional</sup> <a name="spaceNameInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.spaceNameInput"></a>

```typescript
public readonly spaceNameInput: string;
```

- *Type:* string

---

##### `spaceSettingsInput`<sup>Optional</sup> <a name="spaceSettingsInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.spaceSettingsInput"></a>

```typescript
public readonly spaceSettingsInput: IResolvable | SagemakerSpaceSpaceSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings">SagemakerSpaceSpaceSettings</a>

---

##### `spaceSharingSettingsInput`<sup>Optional</sup> <a name="spaceSharingSettingsInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.spaceSharingSettingsInput"></a>

```typescript
public readonly spaceSharingSettingsInput: IResolvable | SagemakerSpaceSpaceSharingSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettings">SagemakerSpaceSpaceSharingSettings</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SagemakerSpaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTags">SagemakerSpaceTags</a>[]

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `spaceDisplayName`<sup>Required</sup> <a name="spaceDisplayName" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.spaceDisplayName"></a>

```typescript
public readonly spaceDisplayName: string;
```

- *Type:* string

---

##### `spaceName`<sup>Required</sup> <a name="spaceName" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.spaceName"></a>

```typescript
public readonly spaceName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerSpaceConfig <a name="SagemakerSpaceConfig" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

const sagemakerSpaceConfig: sagemakerSpace.SagemakerSpaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.domainId">domainId</a></code> | <code>string</code> | The ID of the associated Domain. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.spaceName">spaceName</a></code> | <code>string</code> | A name for the Space. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.ownershipSettings">ownershipSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettings">SagemakerSpaceOwnershipSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#ownership_settings SagemakerSpace#ownership_settings}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.spaceDisplayName">spaceDisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#space_display_name SagemakerSpace#space_display_name}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.spaceSettings">spaceSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings">SagemakerSpaceSpaceSettings</a></code> | A collection of settings. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.spaceSharingSettings">spaceSharingSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettings">SagemakerSpaceSpaceSharingSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#space_sharing_settings SagemakerSpace#space_sharing_settings}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTags">SagemakerSpaceTags</a>[]</code> | A list of tags to apply to the space. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The ID of the associated Domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#domain_id SagemakerSpace#domain_id}

---

##### `spaceName`<sup>Required</sup> <a name="spaceName" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.spaceName"></a>

```typescript
public readonly spaceName: string;
```

- *Type:* string

A name for the Space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#space_name SagemakerSpace#space_name}

---

##### `ownershipSettings`<sup>Optional</sup> <a name="ownershipSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.ownershipSettings"></a>

```typescript
public readonly ownershipSettings: SagemakerSpaceOwnershipSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettings">SagemakerSpaceOwnershipSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#ownership_settings SagemakerSpace#ownership_settings}.

---

##### `spaceDisplayName`<sup>Optional</sup> <a name="spaceDisplayName" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.spaceDisplayName"></a>

```typescript
public readonly spaceDisplayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#space_display_name SagemakerSpace#space_display_name}.

---

##### `spaceSettings`<sup>Optional</sup> <a name="spaceSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.spaceSettings"></a>

```typescript
public readonly spaceSettings: SagemakerSpaceSpaceSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings">SagemakerSpaceSpaceSettings</a>

A collection of settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#space_settings SagemakerSpace#space_settings}

---

##### `spaceSharingSettings`<sup>Optional</sup> <a name="spaceSharingSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.spaceSharingSettings"></a>

```typescript
public readonly spaceSharingSettings: SagemakerSpaceSpaceSharingSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettings">SagemakerSpaceSpaceSharingSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#space_sharing_settings SagemakerSpace#space_sharing_settings}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SagemakerSpaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTags">SagemakerSpaceTags</a>[]

A list of tags to apply to the space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#tags SagemakerSpace#tags}

---

### SagemakerSpaceOwnershipSettings <a name="SagemakerSpaceOwnershipSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettings.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

const sagemakerSpaceOwnershipSettings: sagemakerSpace.SagemakerSpaceOwnershipSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettings.property.ownerUserProfileName">ownerUserProfileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#owner_user_profile_name SagemakerSpace#owner_user_profile_name}. |

---

##### `ownerUserProfileName`<sup>Optional</sup> <a name="ownerUserProfileName" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettings.property.ownerUserProfileName"></a>

```typescript
public readonly ownerUserProfileName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#owner_user_profile_name SagemakerSpace#owner_user_profile_name}.

---

### SagemakerSpaceSpaceSettings <a name="SagemakerSpaceSpaceSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

const sagemakerSpaceSpaceSettings: sagemakerSpace.SagemakerSpaceSpaceSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings.property.appType">appType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#app_type SagemakerSpace#app_type}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings.property.codeEditorAppSettings">codeEditorAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettings</a></code> | The CodeEditor app settings. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings.property.customFileSystems">customFileSystems</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystems">SagemakerSpaceSpaceSettingsCustomFileSystems</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#custom_file_systems SagemakerSpace#custom_file_systems}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings.property.jupyterLabAppSettings">jupyterLabAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettings</a></code> | The JupyterLab app settings. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings.property.jupyterServerAppSettings">jupyterServerAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings">SagemakerSpaceSpaceSettingsJupyterServerAppSettings</a></code> | The Jupyter server's app settings. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings.property.kernelGatewayAppSettings">kernelGatewayAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings">SagemakerSpaceSpaceSettingsKernelGatewayAppSettings</a></code> | The kernel gateway app settings. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings.property.remoteAccess">remoteAccess</a></code> | <code>string</code> | This is a flag used to indicate if remote access is enabled. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings.property.spaceManagedResources">spaceManagedResources</a></code> | <code>string</code> | This is a flag used to indicate if space managed resources needs to be created. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings.property.spaceStorageSettings">spaceStorageSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettings</a></code> | Default storage settings for a space. |

---

##### `appType`<sup>Optional</sup> <a name="appType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings.property.appType"></a>

```typescript
public readonly appType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#app_type SagemakerSpace#app_type}.

---

##### `codeEditorAppSettings`<sup>Optional</sup> <a name="codeEditorAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings.property.codeEditorAppSettings"></a>

```typescript
public readonly codeEditorAppSettings: SagemakerSpaceSpaceSettingsCodeEditorAppSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettings</a>

The CodeEditor app settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#code_editor_app_settings SagemakerSpace#code_editor_app_settings}

---

##### `customFileSystems`<sup>Optional</sup> <a name="customFileSystems" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings.property.customFileSystems"></a>

```typescript
public readonly customFileSystems: IResolvable | SagemakerSpaceSpaceSettingsCustomFileSystems[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystems">SagemakerSpaceSpaceSettingsCustomFileSystems</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#custom_file_systems SagemakerSpace#custom_file_systems}.

---

##### `jupyterLabAppSettings`<sup>Optional</sup> <a name="jupyterLabAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings.property.jupyterLabAppSettings"></a>

```typescript
public readonly jupyterLabAppSettings: SagemakerSpaceSpaceSettingsJupyterLabAppSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettings</a>

The JupyterLab app settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#jupyter_lab_app_settings SagemakerSpace#jupyter_lab_app_settings}

---

##### `jupyterServerAppSettings`<sup>Optional</sup> <a name="jupyterServerAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings.property.jupyterServerAppSettings"></a>

```typescript
public readonly jupyterServerAppSettings: SagemakerSpaceSpaceSettingsJupyterServerAppSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings">SagemakerSpaceSpaceSettingsJupyterServerAppSettings</a>

The Jupyter server's app settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#jupyter_server_app_settings SagemakerSpace#jupyter_server_app_settings}

---

##### `kernelGatewayAppSettings`<sup>Optional</sup> <a name="kernelGatewayAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings.property.kernelGatewayAppSettings"></a>

```typescript
public readonly kernelGatewayAppSettings: SagemakerSpaceSpaceSettingsKernelGatewayAppSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings">SagemakerSpaceSpaceSettingsKernelGatewayAppSettings</a>

The kernel gateway app settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#kernel_gateway_app_settings SagemakerSpace#kernel_gateway_app_settings}

---

##### `remoteAccess`<sup>Optional</sup> <a name="remoteAccess" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings.property.remoteAccess"></a>

```typescript
public readonly remoteAccess: string;
```

- *Type:* string

This is a flag used to indicate if remote access is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#remote_access SagemakerSpace#remote_access}

---

##### `spaceManagedResources`<sup>Optional</sup> <a name="spaceManagedResources" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings.property.spaceManagedResources"></a>

```typescript
public readonly spaceManagedResources: string;
```

- *Type:* string

This is a flag used to indicate if space managed resources needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#space_managed_resources SagemakerSpace#space_managed_resources}

---

##### `spaceStorageSettings`<sup>Optional</sup> <a name="spaceStorageSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings.property.spaceStorageSettings"></a>

```typescript
public readonly spaceStorageSettings: SagemakerSpaceSpaceSettingsSpaceStorageSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettings</a>

Default storage settings for a space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#space_storage_settings SagemakerSpace#space_storage_settings}

---

### SagemakerSpaceSpaceSettingsCodeEditorAppSettings <a name="SagemakerSpaceSpaceSettingsCodeEditorAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

const sagemakerSpaceSpaceSettingsCodeEditorAppSettings: sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings.property.appLifecycleManagement">appLifecycleManagement</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#app_lifecycle_management SagemakerSpace#app_lifecycle_management}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#default_resource_spec SagemakerSpace#default_resource_spec}. |

---

##### `appLifecycleManagement`<sup>Optional</sup> <a name="appLifecycleManagement" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings.property.appLifecycleManagement"></a>

```typescript
public readonly appLifecycleManagement: SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#app_lifecycle_management SagemakerSpace#app_lifecycle_management}.

---

##### `defaultResourceSpec`<sup>Optional</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings.property.defaultResourceSpec"></a>

```typescript
public readonly defaultResourceSpec: SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#default_resource_spec SagemakerSpace#default_resource_spec}.

---

### SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement <a name="SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

const sagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement: sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement.property.idleSettings">idleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#idle_settings SagemakerSpace#idle_settings}. |

---

##### `idleSettings`<sup>Optional</sup> <a name="idleSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement.property.idleSettings"></a>

```typescript
public readonly idleSettings: SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#idle_settings SagemakerSpace#idle_settings}.

---

### SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings <a name="SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

const sagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings: sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.property.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>number</code> | The space idle timeout value set in minutes. |

---

##### `idleTimeoutInMinutes`<sup>Optional</sup> <a name="idleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.property.idleTimeoutInMinutes"></a>

```typescript
public readonly idleTimeoutInMinutes: number;
```

- *Type:* number

The space idle timeout value set in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#idle_timeout_in_minutes SagemakerSpace#idle_timeout_in_minutes}

---

### SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec <a name="SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

const sagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec: sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.property.instanceType">instanceType</a></code> | <code>string</code> | The instance type that the image version runs on. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>string</code> | The ARN of the SageMaker image that the image version belongs to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>string</code> | The ARN of the image version created on the instance. |

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

The instance type that the image version runs on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#instance_type SagemakerSpace#instance_type}

---

##### `lifecycleConfigArn`<sup>Optional</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```typescript
public readonly lifecycleConfigArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#lifecycle_config_arn SagemakerSpace#lifecycle_config_arn}

---

##### `sageMakerImageArn`<sup>Optional</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.property.sageMakerImageArn"></a>

```typescript
public readonly sageMakerImageArn: string;
```

- *Type:* string

The ARN of the SageMaker image that the image version belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#sage_maker_image_arn SagemakerSpace#sage_maker_image_arn}

---

##### `sageMakerImageVersionArn`<sup>Optional</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn"></a>

```typescript
public readonly sageMakerImageVersionArn: string;
```

- *Type:* string

The ARN of the image version created on the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#sage_maker_image_version_arn SagemakerSpace#sage_maker_image_version_arn}

---

### SagemakerSpaceSpaceSettingsCustomFileSystems <a name="SagemakerSpaceSpaceSettingsCustomFileSystems" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystems"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystems.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

const sagemakerSpaceSpaceSettingsCustomFileSystems: sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystems = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystems.property.efsFileSystem">efsFileSystem</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#efs_file_system SagemakerSpace#efs_file_system}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystems.property.fsxLustreFileSystem">fsxLustreFileSystem</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#fsx_lustre_file_system SagemakerSpace#fsx_lustre_file_system}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystems.property.s3FileSystem">s3FileSystem</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#s3_file_system SagemakerSpace#s3_file_system}. |

---

##### `efsFileSystem`<sup>Optional</sup> <a name="efsFileSystem" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystems.property.efsFileSystem"></a>

```typescript
public readonly efsFileSystem: SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#efs_file_system SagemakerSpace#efs_file_system}.

---

##### `fsxLustreFileSystem`<sup>Optional</sup> <a name="fsxLustreFileSystem" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystems.property.fsxLustreFileSystem"></a>

```typescript
public readonly fsxLustreFileSystem: SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#fsx_lustre_file_system SagemakerSpace#fsx_lustre_file_system}.

---

##### `s3FileSystem`<sup>Optional</sup> <a name="s3FileSystem" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystems.property.s3FileSystem"></a>

```typescript
public readonly s3FileSystem: SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#s3_file_system SagemakerSpace#s3_file_system}.

---

### SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem <a name="SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

const sagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem: sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#file_system_id SagemakerSpace#file_system_id}. |

---

##### `fileSystemId`<sup>Optional</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#file_system_id SagemakerSpace#file_system_id}.

---

### SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem <a name="SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

const sagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem: sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#file_system_id SagemakerSpace#file_system_id}. |

---

##### `fileSystemId`<sup>Optional</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#file_system_id SagemakerSpace#file_system_id}.

---

### SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem <a name="SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

const sagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem: sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem.property.s3Uri">s3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#s3_uri SagemakerSpace#s3_uri}. |

---

##### `s3Uri`<sup>Optional</sup> <a name="s3Uri" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#s3_uri SagemakerSpace#s3_uri}.

---

### SagemakerSpaceSpaceSettingsJupyterLabAppSettings <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

const sagemakerSpaceSpaceSettingsJupyterLabAppSettings: sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings.property.appLifecycleManagement">appLifecycleManagement</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#app_lifecycle_management SagemakerSpace#app_lifecycle_management}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings.property.codeRepositories">codeRepositories</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories</a>[]</code> | A list of CodeRepositories available for use with JupyterLab apps. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#default_resource_spec SagemakerSpace#default_resource_spec}. |

---

##### `appLifecycleManagement`<sup>Optional</sup> <a name="appLifecycleManagement" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings.property.appLifecycleManagement"></a>

```typescript
public readonly appLifecycleManagement: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#app_lifecycle_management SagemakerSpace#app_lifecycle_management}.

---

##### `codeRepositories`<sup>Optional</sup> <a name="codeRepositories" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings.property.codeRepositories"></a>

```typescript
public readonly codeRepositories: IResolvable | SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories</a>[]

A list of CodeRepositories available for use with JupyterLab apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#code_repositories SagemakerSpace#code_repositories}

---

##### `defaultResourceSpec`<sup>Optional</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings.property.defaultResourceSpec"></a>

```typescript
public readonly defaultResourceSpec: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#default_resource_spec SagemakerSpace#default_resource_spec}.

---

### SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

const sagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement: sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement.property.idleSettings">idleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#idle_settings SagemakerSpace#idle_settings}. |

---

##### `idleSettings`<sup>Optional</sup> <a name="idleSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement.property.idleSettings"></a>

```typescript
public readonly idleSettings: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#idle_settings SagemakerSpace#idle_settings}.

---

### SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

const sagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings: sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.property.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>number</code> | The space idle timeout value set in minutes. |

---

##### `idleTimeoutInMinutes`<sup>Optional</sup> <a name="idleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.property.idleTimeoutInMinutes"></a>

```typescript
public readonly idleTimeoutInMinutes: number;
```

- *Type:* number

The space idle timeout value set in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#idle_timeout_in_minutes SagemakerSpace#idle_timeout_in_minutes}

---

### SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

const sagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories: sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories.property.repositoryUrl">repositoryUrl</a></code> | <code>string</code> | A CodeRepository (valid URL) to be used within Jupyter's Git extension. |

---

##### `repositoryUrl`<sup>Optional</sup> <a name="repositoryUrl" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- *Type:* string

A CodeRepository (valid URL) to be used within Jupyter's Git extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#repository_url SagemakerSpace#repository_url}

---

### SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

const sagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec: sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.property.instanceType">instanceType</a></code> | <code>string</code> | The instance type that the image version runs on. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>string</code> | The ARN of the SageMaker image that the image version belongs to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>string</code> | The ARN of the image version created on the instance. |

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

The instance type that the image version runs on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#instance_type SagemakerSpace#instance_type}

---

##### `lifecycleConfigArn`<sup>Optional</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```typescript
public readonly lifecycleConfigArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#lifecycle_config_arn SagemakerSpace#lifecycle_config_arn}

---

##### `sageMakerImageArn`<sup>Optional</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.property.sageMakerImageArn"></a>

```typescript
public readonly sageMakerImageArn: string;
```

- *Type:* string

The ARN of the SageMaker image that the image version belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#sage_maker_image_arn SagemakerSpace#sage_maker_image_arn}

---

##### `sageMakerImageVersionArn`<sup>Optional</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn"></a>

```typescript
public readonly sageMakerImageVersionArn: string;
```

- *Type:* string

The ARN of the image version created on the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#sage_maker_image_version_arn SagemakerSpace#sage_maker_image_version_arn}

---

### SagemakerSpaceSpaceSettingsJupyterServerAppSettings <a name="SagemakerSpaceSpaceSettingsJupyterServerAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

const sagemakerSpaceSpaceSettingsJupyterServerAppSettings: sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#default_resource_spec SagemakerSpace#default_resource_spec}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings.property.lifecycleConfigArns">lifecycleConfigArns</a></code> | <code>string[]</code> | A list of LifecycleConfigArns available for use with JupyterServer apps. |

---

##### `defaultResourceSpec`<sup>Optional</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings.property.defaultResourceSpec"></a>

```typescript
public readonly defaultResourceSpec: SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#default_resource_spec SagemakerSpace#default_resource_spec}.

---

##### `lifecycleConfigArns`<sup>Optional</sup> <a name="lifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings.property.lifecycleConfigArns"></a>

```typescript
public readonly lifecycleConfigArns: string[];
```

- *Type:* string[]

A list of LifecycleConfigArns available for use with JupyterServer apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#lifecycle_config_arns SagemakerSpace#lifecycle_config_arns}

---

### SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec <a name="SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

const sagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec: sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.instanceType">instanceType</a></code> | <code>string</code> | The instance type that the image version runs on. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>string</code> | The ARN of the SageMaker image that the image version belongs to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>string</code> | The ARN of the image version created on the instance. |

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

The instance type that the image version runs on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#instance_type SagemakerSpace#instance_type}

---

##### `lifecycleConfigArn`<sup>Optional</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```typescript
public readonly lifecycleConfigArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#lifecycle_config_arn SagemakerSpace#lifecycle_config_arn}

---

##### `sageMakerImageArn`<sup>Optional</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sageMakerImageArn"></a>

```typescript
public readonly sageMakerImageArn: string;
```

- *Type:* string

The ARN of the SageMaker image that the image version belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#sage_maker_image_arn SagemakerSpace#sage_maker_image_arn}

---

##### `sageMakerImageVersionArn`<sup>Optional</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn"></a>

```typescript
public readonly sageMakerImageVersionArn: string;
```

- *Type:* string

The ARN of the image version created on the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#sage_maker_image_version_arn SagemakerSpace#sage_maker_image_version_arn}

---

### SagemakerSpaceSpaceSettingsKernelGatewayAppSettings <a name="SagemakerSpaceSpaceSettingsKernelGatewayAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

const sagemakerSpaceSpaceSettingsKernelGatewayAppSettings: sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings.property.customImages">customImages</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages</a>[]</code> | A list of custom SageMaker images that are configured to run as a KernelGateway app. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the KernelGateway app. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings.property.lifecycleConfigArns">lifecycleConfigArns</a></code> | <code>string[]</code> | A list of LifecycleConfigArns available for use with KernelGateway apps. |

---

##### `customImages`<sup>Optional</sup> <a name="customImages" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings.property.customImages"></a>

```typescript
public readonly customImages: IResolvable | SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages</a>[]

A list of custom SageMaker images that are configured to run as a KernelGateway app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#custom_images SagemakerSpace#custom_images}

---

##### `defaultResourceSpec`<sup>Optional</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings.property.defaultResourceSpec"></a>

```typescript
public readonly defaultResourceSpec: SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the KernelGateway app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#default_resource_spec SagemakerSpace#default_resource_spec}

---

##### `lifecycleConfigArns`<sup>Optional</sup> <a name="lifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings.property.lifecycleConfigArns"></a>

```typescript
public readonly lifecycleConfigArns: string[];
```

- *Type:* string[]

A list of LifecycleConfigArns available for use with KernelGateway apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#lifecycle_config_arns SagemakerSpace#lifecycle_config_arns}

---

### SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages <a name="SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

const sagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages: sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages.property.appImageConfigName">appImageConfigName</a></code> | <code>string</code> | The Name of the AppImageConfig. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages.property.imageName">imageName</a></code> | <code>string</code> | The name of the CustomImage. Must be unique to your account. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages.property.imageVersionNumber">imageVersionNumber</a></code> | <code>number</code> | The version number of the CustomImage. |

---

##### `appImageConfigName`<sup>Optional</sup> <a name="appImageConfigName" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages.property.appImageConfigName"></a>

```typescript
public readonly appImageConfigName: string;
```

- *Type:* string

The Name of the AppImageConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#app_image_config_name SagemakerSpace#app_image_config_name}

---

##### `imageName`<sup>Optional</sup> <a name="imageName" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

The name of the CustomImage. Must be unique to your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#image_name SagemakerSpace#image_name}

---

##### `imageVersionNumber`<sup>Optional</sup> <a name="imageVersionNumber" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages.property.imageVersionNumber"></a>

```typescript
public readonly imageVersionNumber: number;
```

- *Type:* number

The version number of the CustomImage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#image_version_number SagemakerSpace#image_version_number}

---

### SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec <a name="SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

const sagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec: sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.instanceType">instanceType</a></code> | <code>string</code> | The instance type that the image version runs on. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>string</code> | The ARN of the SageMaker image that the image version belongs to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>string</code> | The ARN of the image version created on the instance. |

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

The instance type that the image version runs on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#instance_type SagemakerSpace#instance_type}

---

##### `lifecycleConfigArn`<sup>Optional</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```typescript
public readonly lifecycleConfigArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#lifecycle_config_arn SagemakerSpace#lifecycle_config_arn}

---

##### `sageMakerImageArn`<sup>Optional</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sageMakerImageArn"></a>

```typescript
public readonly sageMakerImageArn: string;
```

- *Type:* string

The ARN of the SageMaker image that the image version belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#sage_maker_image_arn SagemakerSpace#sage_maker_image_arn}

---

##### `sageMakerImageVersionArn`<sup>Optional</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn"></a>

```typescript
public readonly sageMakerImageVersionArn: string;
```

- *Type:* string

The ARN of the image version created on the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#sage_maker_image_version_arn SagemakerSpace#sage_maker_image_version_arn}

---

### SagemakerSpaceSpaceSettingsSpaceStorageSettings <a name="SagemakerSpaceSpaceSettingsSpaceStorageSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

const sagemakerSpaceSpaceSettingsSpaceStorageSettings: sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings.property.ebsStorageSettings">ebsStorageSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings</a></code> | Properties related to the space's Amazon Elastic Block Store volume. |

---

##### `ebsStorageSettings`<sup>Optional</sup> <a name="ebsStorageSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings.property.ebsStorageSettings"></a>

```typescript
public readonly ebsStorageSettings: SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings</a>

Properties related to the space's Amazon Elastic Block Store volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#ebs_storage_settings SagemakerSpace#ebs_storage_settings}

---

### SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings <a name="SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

const sagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings: sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings.property.ebsVolumeSizeInGb">ebsVolumeSizeInGb</a></code> | <code>number</code> | Size of the Amazon EBS volume in Gb. |

---

##### `ebsVolumeSizeInGb`<sup>Optional</sup> <a name="ebsVolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings.property.ebsVolumeSizeInGb"></a>

```typescript
public readonly ebsVolumeSizeInGb: number;
```

- *Type:* number

Size of the Amazon EBS volume in Gb.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#ebs_volume_size_in_gb SagemakerSpace#ebs_volume_size_in_gb}

---

### SagemakerSpaceSpaceSharingSettings <a name="SagemakerSpaceSpaceSharingSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettings.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

const sagemakerSpaceSpaceSharingSettings: sagemakerSpace.SagemakerSpaceSpaceSharingSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettings.property.sharingType">sharingType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#sharing_type SagemakerSpace#sharing_type}. |

---

##### `sharingType`<sup>Optional</sup> <a name="sharingType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettings.property.sharingType"></a>

```typescript
public readonly sharingType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#sharing_type SagemakerSpace#sharing_type}.

---

### SagemakerSpaceTags <a name="SagemakerSpaceTags" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTags.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

const sagemakerSpaceTags: sagemakerSpace.SagemakerSpaceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#key SagemakerSpace#key}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#value SagemakerSpace#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#key SagemakerSpace#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_space#value SagemakerSpace#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerSpaceOwnershipSettingsOutputReference <a name="SagemakerSpaceOwnershipSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

new sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.resetOwnerUserProfileName">resetOwnerUserProfileName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOwnerUserProfileName` <a name="resetOwnerUserProfileName" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.resetOwnerUserProfileName"></a>

```typescript
public resetOwnerUserProfileName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.ownerUserProfileNameInput">ownerUserProfileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.ownerUserProfileName">ownerUserProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettings">SagemakerSpaceOwnershipSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ownerUserProfileNameInput`<sup>Optional</sup> <a name="ownerUserProfileNameInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.ownerUserProfileNameInput"></a>

```typescript
public readonly ownerUserProfileNameInput: string;
```

- *Type:* string

---

##### `ownerUserProfileName`<sup>Required</sup> <a name="ownerUserProfileName" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.ownerUserProfileName"></a>

```typescript
public readonly ownerUserProfileName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerSpaceOwnershipSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceOwnershipSettings">SagemakerSpaceOwnershipSettings</a>

---


### SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference <a name="SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

new sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetIdleTimeoutInMinutes">resetIdleTimeoutInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdleTimeoutInMinutes` <a name="resetIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetIdleTimeoutInMinutes"></a>

```typescript
public resetIdleTimeoutInMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutesInput">idleTimeoutInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idleTimeoutInMinutesInput`<sup>Optional</sup> <a name="idleTimeoutInMinutesInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutesInput"></a>

```typescript
public readonly idleTimeoutInMinutesInput: number;
```

- *Type:* number

---

##### `idleTimeoutInMinutes`<sup>Required</sup> <a name="idleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutes"></a>

```typescript
public readonly idleTimeoutInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a>

---


### SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference <a name="SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

new sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.putIdleSettings">putIdleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.resetIdleSettings">resetIdleSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIdleSettings` <a name="putIdleSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.putIdleSettings"></a>

```typescript
public putIdleSettings(value: SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.putIdleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a>

---

##### `resetIdleSettings` <a name="resetIdleSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.resetIdleSettings"></a>

```typescript
public resetIdleSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.idleSettings">idleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.idleSettingsInput">idleSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idleSettings`<sup>Required</sup> <a name="idleSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.idleSettings"></a>

```typescript
public readonly idleSettings: SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference</a>

---

##### `idleSettingsInput`<sup>Optional</sup> <a name="idleSettingsInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.idleSettingsInput"></a>

```typescript
public readonly idleSettingsInput: IResolvable | SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement</a>

---


### SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

new sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">resetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn">resetSageMakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn">resetSageMakerImageVersionArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```typescript
public resetInstanceType(): void
```

##### `resetLifecycleConfigArn` <a name="resetLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```typescript
public resetLifecycleConfigArn(): void
```

##### `resetSageMakerImageArn` <a name="resetSageMakerImageArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn"></a>

```typescript
public resetSageMakerImageArn(): void
```

##### `resetSageMakerImageVersionArn` <a name="resetSageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn"></a>

```typescript
public resetSageMakerImageVersionArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">lifecycleConfigArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput">sageMakerImageArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput">sageMakerImageVersionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `lifecycleConfigArnInput`<sup>Optional</sup> <a name="lifecycleConfigArnInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```typescript
public readonly lifecycleConfigArnInput: string;
```

- *Type:* string

---

##### `sageMakerImageArnInput`<sup>Optional</sup> <a name="sageMakerImageArnInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput"></a>

```typescript
public readonly sageMakerImageArnInput: string;
```

- *Type:* string

---

##### `sageMakerImageVersionArnInput`<sup>Optional</sup> <a name="sageMakerImageVersionArnInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput"></a>

```typescript
public readonly sageMakerImageVersionArnInput: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `lifecycleConfigArn`<sup>Required</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```typescript
public readonly lifecycleConfigArn: string;
```

- *Type:* string

---

##### `sageMakerImageArn`<sup>Required</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn"></a>

```typescript
public readonly sageMakerImageArn: string;
```

- *Type:* string

---

##### `sageMakerImageVersionArn`<sup>Required</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn"></a>

```typescript
public readonly sageMakerImageVersionArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec</a>

---


### SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference <a name="SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

new sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.putAppLifecycleManagement">putAppLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.putDefaultResourceSpec">putDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.resetAppLifecycleManagement">resetAppLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.resetDefaultResourceSpec">resetDefaultResourceSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAppLifecycleManagement` <a name="putAppLifecycleManagement" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.putAppLifecycleManagement"></a>

```typescript
public putAppLifecycleManagement(value: SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.putAppLifecycleManagement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement</a>

---

##### `putDefaultResourceSpec` <a name="putDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.putDefaultResourceSpec"></a>

```typescript
public putDefaultResourceSpec(value: SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.putDefaultResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec</a>

---

##### `resetAppLifecycleManagement` <a name="resetAppLifecycleManagement" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.resetAppLifecycleManagement"></a>

```typescript
public resetAppLifecycleManagement(): void
```

##### `resetDefaultResourceSpec` <a name="resetDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```typescript
public resetDefaultResourceSpec(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.appLifecycleManagement">appLifecycleManagement</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.appLifecycleManagementInput">appLifecycleManagementInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.defaultResourceSpecInput">defaultResourceSpecInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appLifecycleManagement`<sup>Required</sup> <a name="appLifecycleManagement" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.appLifecycleManagement"></a>

```typescript
public readonly appLifecycleManagement: SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference</a>

---

##### `defaultResourceSpec`<sup>Required</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.defaultResourceSpec"></a>

```typescript
public readonly defaultResourceSpec: SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `appLifecycleManagementInput`<sup>Optional</sup> <a name="appLifecycleManagementInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.appLifecycleManagementInput"></a>

```typescript
public readonly appLifecycleManagementInput: IResolvable | SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement</a>

---

##### `defaultResourceSpecInput`<sup>Optional</sup> <a name="defaultResourceSpecInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```typescript
public readonly defaultResourceSpecInput: IResolvable | SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerSpaceSpaceSettingsCodeEditorAppSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettings</a>

---


### SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference <a name="SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

new sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.resetFileSystemId">resetFileSystemId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileSystemId` <a name="resetFileSystemId" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.resetFileSystemId"></a>

```typescript
public resetFileSystemId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.property.fileSystemIdInput">fileSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileSystemIdInput`<sup>Optional</sup> <a name="fileSystemIdInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.property.fileSystemIdInput"></a>

```typescript
public readonly fileSystemIdInput: string;
```

- *Type:* string

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem</a>

---


### SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference <a name="SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

new sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.resetFileSystemId">resetFileSystemId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileSystemId` <a name="resetFileSystemId" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.resetFileSystemId"></a>

```typescript
public resetFileSystemId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.property.fileSystemIdInput">fileSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileSystemIdInput`<sup>Optional</sup> <a name="fileSystemIdInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.property.fileSystemIdInput"></a>

```typescript
public readonly fileSystemIdInput: string;
```

- *Type:* string

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem</a>

---


### SagemakerSpaceSpaceSettingsCustomFileSystemsList <a name="SagemakerSpaceSpaceSettingsCustomFileSystemsList" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

new sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.get"></a>

```typescript
public get(index: number): SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystems">SagemakerSpaceSpaceSettingsCustomFileSystems</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerSpaceSpaceSettingsCustomFileSystems[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystems">SagemakerSpaceSpaceSettingsCustomFileSystems</a>[]

---


### SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference <a name="SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

new sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.putEfsFileSystem">putEfsFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.putFsxLustreFileSystem">putFsxLustreFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.putS3FileSystem">putS3FileSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.resetEfsFileSystem">resetEfsFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.resetFsxLustreFileSystem">resetFsxLustreFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.resetS3FileSystem">resetS3FileSystem</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEfsFileSystem` <a name="putEfsFileSystem" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.putEfsFileSystem"></a>

```typescript
public putEfsFileSystem(value: SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.putEfsFileSystem.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem</a>

---

##### `putFsxLustreFileSystem` <a name="putFsxLustreFileSystem" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.putFsxLustreFileSystem"></a>

```typescript
public putFsxLustreFileSystem(value: SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.putFsxLustreFileSystem.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem</a>

---

##### `putS3FileSystem` <a name="putS3FileSystem" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.putS3FileSystem"></a>

```typescript
public putS3FileSystem(value: SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.putS3FileSystem.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem</a>

---

##### `resetEfsFileSystem` <a name="resetEfsFileSystem" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.resetEfsFileSystem"></a>

```typescript
public resetEfsFileSystem(): void
```

##### `resetFsxLustreFileSystem` <a name="resetFsxLustreFileSystem" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.resetFsxLustreFileSystem"></a>

```typescript
public resetFsxLustreFileSystem(): void
```

##### `resetS3FileSystem` <a name="resetS3FileSystem" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.resetS3FileSystem"></a>

```typescript
public resetS3FileSystem(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.efsFileSystem">efsFileSystem</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference">SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.fsxLustreFileSystem">fsxLustreFileSystem</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference">SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.s3FileSystem">s3FileSystem</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference">SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.efsFileSystemInput">efsFileSystemInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.fsxLustreFileSystemInput">fsxLustreFileSystemInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.s3FileSystemInput">s3FileSystemInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystems">SagemakerSpaceSpaceSettingsCustomFileSystems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `efsFileSystem`<sup>Required</sup> <a name="efsFileSystem" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.efsFileSystem"></a>

```typescript
public readonly efsFileSystem: SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference">SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystemOutputReference</a>

---

##### `fsxLustreFileSystem`<sup>Required</sup> <a name="fsxLustreFileSystem" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.fsxLustreFileSystem"></a>

```typescript
public readonly fsxLustreFileSystem: SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference">SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystemOutputReference</a>

---

##### `s3FileSystem`<sup>Required</sup> <a name="s3FileSystem" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.s3FileSystem"></a>

```typescript
public readonly s3FileSystem: SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference">SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference</a>

---

##### `efsFileSystemInput`<sup>Optional</sup> <a name="efsFileSystemInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.efsFileSystemInput"></a>

```typescript
public readonly efsFileSystemInput: IResolvable | SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsEfsFileSystem</a>

---

##### `fsxLustreFileSystemInput`<sup>Optional</sup> <a name="fsxLustreFileSystemInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.fsxLustreFileSystemInput"></a>

```typescript
public readonly fsxLustreFileSystemInput: IResolvable | SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsFsxLustreFileSystem</a>

---

##### `s3FileSystemInput`<sup>Optional</sup> <a name="s3FileSystemInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.s3FileSystemInput"></a>

```typescript
public readonly s3FileSystemInput: IResolvable | SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerSpaceSpaceSettingsCustomFileSystems;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystems">SagemakerSpaceSpaceSettingsCustomFileSystems</a>

---


### SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference <a name="SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

new sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.resetS3Uri">resetS3Uri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3Uri` <a name="resetS3Uri" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.resetS3Uri"></a>

```typescript
public resetS3Uri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.property.s3UriInput">s3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3UriInput`<sup>Optional</sup> <a name="s3UriInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.property.s3UriInput"></a>

```typescript
public readonly s3UriInput: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystemOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemsS3FileSystem</a>

---


### SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

new sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetIdleTimeoutInMinutes">resetIdleTimeoutInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdleTimeoutInMinutes` <a name="resetIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetIdleTimeoutInMinutes"></a>

```typescript
public resetIdleTimeoutInMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutesInput">idleTimeoutInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idleTimeoutInMinutesInput`<sup>Optional</sup> <a name="idleTimeoutInMinutesInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutesInput"></a>

```typescript
public readonly idleTimeoutInMinutesInput: number;
```

- *Type:* number

---

##### `idleTimeoutInMinutes`<sup>Required</sup> <a name="idleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutes"></a>

```typescript
public readonly idleTimeoutInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a>

---


### SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

new sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.putIdleSettings">putIdleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.resetIdleSettings">resetIdleSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIdleSettings` <a name="putIdleSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.putIdleSettings"></a>

```typescript
public putIdleSettings(value: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.putIdleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a>

---

##### `resetIdleSettings` <a name="resetIdleSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.resetIdleSettings"></a>

```typescript
public resetIdleSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.idleSettings">idleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.idleSettingsInput">idleSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idleSettings`<sup>Required</sup> <a name="idleSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.idleSettings"></a>

```typescript
public readonly idleSettings: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference</a>

---

##### `idleSettingsInput`<sup>Optional</sup> <a name="idleSettingsInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.idleSettingsInput"></a>

```typescript
public readonly idleSettingsInput: IResolvable | SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement</a>

---


### SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

new sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.get"></a>

```typescript
public get(index: number): SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories</a>[]

---


### SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

new sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.resetRepositoryUrl">resetRepositoryUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRepositoryUrl` <a name="resetRepositoryUrl" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.resetRepositoryUrl"></a>

```typescript
public resetRepositoryUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.repositoryUrlInput">repositoryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.repositoryUrl">repositoryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `repositoryUrlInput`<sup>Optional</sup> <a name="repositoryUrlInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.repositoryUrlInput"></a>

```typescript
public readonly repositoryUrlInput: string;
```

- *Type:* string

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories</a>

---


### SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

new sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">resetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn">resetSageMakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn">resetSageMakerImageVersionArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```typescript
public resetInstanceType(): void
```

##### `resetLifecycleConfigArn` <a name="resetLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```typescript
public resetLifecycleConfigArn(): void
```

##### `resetSageMakerImageArn` <a name="resetSageMakerImageArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn"></a>

```typescript
public resetSageMakerImageArn(): void
```

##### `resetSageMakerImageVersionArn` <a name="resetSageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn"></a>

```typescript
public resetSageMakerImageVersionArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">lifecycleConfigArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput">sageMakerImageArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput">sageMakerImageVersionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `lifecycleConfigArnInput`<sup>Optional</sup> <a name="lifecycleConfigArnInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```typescript
public readonly lifecycleConfigArnInput: string;
```

- *Type:* string

---

##### `sageMakerImageArnInput`<sup>Optional</sup> <a name="sageMakerImageArnInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput"></a>

```typescript
public readonly sageMakerImageArnInput: string;
```

- *Type:* string

---

##### `sageMakerImageVersionArnInput`<sup>Optional</sup> <a name="sageMakerImageVersionArnInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput"></a>

```typescript
public readonly sageMakerImageVersionArnInput: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `lifecycleConfigArn`<sup>Required</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```typescript
public readonly lifecycleConfigArn: string;
```

- *Type:* string

---

##### `sageMakerImageArn`<sup>Required</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn"></a>

```typescript
public readonly sageMakerImageArn: string;
```

- *Type:* string

---

##### `sageMakerImageVersionArn`<sup>Required</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn"></a>

```typescript
public readonly sageMakerImageVersionArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec</a>

---


### SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

new sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.putAppLifecycleManagement">putAppLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.putCodeRepositories">putCodeRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.putDefaultResourceSpec">putDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.resetAppLifecycleManagement">resetAppLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.resetCodeRepositories">resetCodeRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.resetDefaultResourceSpec">resetDefaultResourceSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAppLifecycleManagement` <a name="putAppLifecycleManagement" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.putAppLifecycleManagement"></a>

```typescript
public putAppLifecycleManagement(value: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.putAppLifecycleManagement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement</a>

---

##### `putCodeRepositories` <a name="putCodeRepositories" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.putCodeRepositories"></a>

```typescript
public putCodeRepositories(value: IResolvable | SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.putCodeRepositories.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories</a>[]

---

##### `putDefaultResourceSpec` <a name="putDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.putDefaultResourceSpec"></a>

```typescript
public putDefaultResourceSpec(value: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.putDefaultResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec</a>

---

##### `resetAppLifecycleManagement` <a name="resetAppLifecycleManagement" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.resetAppLifecycleManagement"></a>

```typescript
public resetAppLifecycleManagement(): void
```

##### `resetCodeRepositories` <a name="resetCodeRepositories" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.resetCodeRepositories"></a>

```typescript
public resetCodeRepositories(): void
```

##### `resetDefaultResourceSpec` <a name="resetDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```typescript
public resetDefaultResourceSpec(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.appLifecycleManagement">appLifecycleManagement</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.codeRepositories">codeRepositories</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.appLifecycleManagementInput">appLifecycleManagementInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.codeRepositoriesInput">codeRepositoriesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.defaultResourceSpecInput">defaultResourceSpecInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appLifecycleManagement`<sup>Required</sup> <a name="appLifecycleManagement" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.appLifecycleManagement"></a>

```typescript
public readonly appLifecycleManagement: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference</a>

---

##### `codeRepositories`<sup>Required</sup> <a name="codeRepositories" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.codeRepositories"></a>

```typescript
public readonly codeRepositories: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoriesList</a>

---

##### `defaultResourceSpec`<sup>Required</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.defaultResourceSpec"></a>

```typescript
public readonly defaultResourceSpec: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `appLifecycleManagementInput`<sup>Optional</sup> <a name="appLifecycleManagementInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.appLifecycleManagementInput"></a>

```typescript
public readonly appLifecycleManagementInput: IResolvable | SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement</a>

---

##### `codeRepositoriesInput`<sup>Optional</sup> <a name="codeRepositoriesInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.codeRepositoriesInput"></a>

```typescript
public readonly codeRepositoriesInput: IResolvable | SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositories</a>[]

---

##### `defaultResourceSpecInput`<sup>Optional</sup> <a name="defaultResourceSpecInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```typescript
public readonly defaultResourceSpecInput: IResolvable | SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerSpaceSpaceSettingsJupyterLabAppSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettings</a>

---


### SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

new sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">resetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn">resetSageMakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn">resetSageMakerImageVersionArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```typescript
public resetInstanceType(): void
```

##### `resetLifecycleConfigArn` <a name="resetLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```typescript
public resetLifecycleConfigArn(): void
```

##### `resetSageMakerImageArn` <a name="resetSageMakerImageArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn"></a>

```typescript
public resetSageMakerImageArn(): void
```

##### `resetSageMakerImageVersionArn` <a name="resetSageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn"></a>

```typescript
public resetSageMakerImageVersionArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">lifecycleConfigArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput">sageMakerImageArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput">sageMakerImageVersionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `lifecycleConfigArnInput`<sup>Optional</sup> <a name="lifecycleConfigArnInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```typescript
public readonly lifecycleConfigArnInput: string;
```

- *Type:* string

---

##### `sageMakerImageArnInput`<sup>Optional</sup> <a name="sageMakerImageArnInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput"></a>

```typescript
public readonly sageMakerImageArnInput: string;
```

- *Type:* string

---

##### `sageMakerImageVersionArnInput`<sup>Optional</sup> <a name="sageMakerImageVersionArnInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput"></a>

```typescript
public readonly sageMakerImageVersionArnInput: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `lifecycleConfigArn`<sup>Required</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```typescript
public readonly lifecycleConfigArn: string;
```

- *Type:* string

---

##### `sageMakerImageArn`<sup>Required</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn"></a>

```typescript
public readonly sageMakerImageArn: string;
```

- *Type:* string

---

##### `sageMakerImageVersionArn`<sup>Required</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn"></a>

```typescript
public readonly sageMakerImageVersionArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

---


### SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference <a name="SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

new sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec">putDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.resetDefaultResourceSpec">resetDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.resetLifecycleConfigArns">resetLifecycleConfigArns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDefaultResourceSpec` <a name="putDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec"></a>

```typescript
public putDefaultResourceSpec(value: SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

---

##### `resetDefaultResourceSpec` <a name="resetDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```typescript
public resetDefaultResourceSpec(): void
```

##### `resetLifecycleConfigArns` <a name="resetLifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.resetLifecycleConfigArns"></a>

```typescript
public resetLifecycleConfigArns(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpecInput">defaultResourceSpecInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArnsInput">lifecycleConfigArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArns">lifecycleConfigArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings">SagemakerSpaceSpaceSettingsJupyterServerAppSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultResourceSpec`<sup>Required</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpec"></a>

```typescript
public readonly defaultResourceSpec: SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `defaultResourceSpecInput`<sup>Optional</sup> <a name="defaultResourceSpecInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```typescript
public readonly defaultResourceSpecInput: IResolvable | SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

---

##### `lifecycleConfigArnsInput`<sup>Optional</sup> <a name="lifecycleConfigArnsInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArnsInput"></a>

```typescript
public readonly lifecycleConfigArnsInput: string[];
```

- *Type:* string[]

---

##### `lifecycleConfigArns`<sup>Required</sup> <a name="lifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```typescript
public readonly lifecycleConfigArns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerSpaceSpaceSettingsJupyterServerAppSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings">SagemakerSpaceSpaceSettingsJupyterServerAppSettings</a>

---


### SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList <a name="SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

new sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.get"></a>

```typescript
public get(index: number): SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages</a>[]

---


### SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference <a name="SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

new sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resetAppImageConfigName">resetAppImageConfigName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resetImageName">resetImageName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resetImageVersionNumber">resetImageVersionNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppImageConfigName` <a name="resetAppImageConfigName" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resetAppImageConfigName"></a>

```typescript
public resetAppImageConfigName(): void
```

##### `resetImageName` <a name="resetImageName" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resetImageName"></a>

```typescript
public resetImageName(): void
```

##### `resetImageVersionNumber` <a name="resetImageVersionNumber" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resetImageVersionNumber"></a>

```typescript
public resetImageVersionNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.appImageConfigNameInput">appImageConfigNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageNameInput">imageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageVersionNumberInput">imageVersionNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.appImageConfigName">appImageConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageName">imageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageVersionNumber">imageVersionNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appImageConfigNameInput`<sup>Optional</sup> <a name="appImageConfigNameInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.appImageConfigNameInput"></a>

```typescript
public readonly appImageConfigNameInput: string;
```

- *Type:* string

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageNameInput"></a>

```typescript
public readonly imageNameInput: string;
```

- *Type:* string

---

##### `imageVersionNumberInput`<sup>Optional</sup> <a name="imageVersionNumberInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageVersionNumberInput"></a>

```typescript
public readonly imageVersionNumberInput: number;
```

- *Type:* number

---

##### `appImageConfigName`<sup>Required</sup> <a name="appImageConfigName" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.appImageConfigName"></a>

```typescript
public readonly appImageConfigName: string;
```

- *Type:* string

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

---

##### `imageVersionNumber`<sup>Required</sup> <a name="imageVersionNumber" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageVersionNumber"></a>

```typescript
public readonly imageVersionNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages</a>

---


### SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

new sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">resetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn">resetSageMakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn">resetSageMakerImageVersionArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```typescript
public resetInstanceType(): void
```

##### `resetLifecycleConfigArn` <a name="resetLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```typescript
public resetLifecycleConfigArn(): void
```

##### `resetSageMakerImageArn` <a name="resetSageMakerImageArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn"></a>

```typescript
public resetSageMakerImageArn(): void
```

##### `resetSageMakerImageVersionArn` <a name="resetSageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn"></a>

```typescript
public resetSageMakerImageVersionArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">lifecycleConfigArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput">sageMakerImageArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput">sageMakerImageVersionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `lifecycleConfigArnInput`<sup>Optional</sup> <a name="lifecycleConfigArnInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```typescript
public readonly lifecycleConfigArnInput: string;
```

- *Type:* string

---

##### `sageMakerImageArnInput`<sup>Optional</sup> <a name="sageMakerImageArnInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput"></a>

```typescript
public readonly sageMakerImageArnInput: string;
```

- *Type:* string

---

##### `sageMakerImageVersionArnInput`<sup>Optional</sup> <a name="sageMakerImageVersionArnInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput"></a>

```typescript
public readonly sageMakerImageVersionArnInput: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `lifecycleConfigArn`<sup>Required</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```typescript
public readonly lifecycleConfigArn: string;
```

- *Type:* string

---

##### `sageMakerImageArn`<sup>Required</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn"></a>

```typescript
public readonly sageMakerImageArn: string;
```

- *Type:* string

---

##### `sageMakerImageVersionArn`<sup>Required</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn"></a>

```typescript
public readonly sageMakerImageVersionArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

---


### SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference <a name="SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

new sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.putCustomImages">putCustomImages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec">putDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.resetCustomImages">resetCustomImages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.resetDefaultResourceSpec">resetDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.resetLifecycleConfigArns">resetLifecycleConfigArns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomImages` <a name="putCustomImages" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.putCustomImages"></a>

```typescript
public putCustomImages(value: IResolvable | SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.putCustomImages.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages</a>[]

---

##### `putDefaultResourceSpec` <a name="putDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec"></a>

```typescript
public putDefaultResourceSpec(value: SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

---

##### `resetCustomImages` <a name="resetCustomImages" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.resetCustomImages"></a>

```typescript
public resetCustomImages(): void
```

##### `resetDefaultResourceSpec` <a name="resetDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```typescript
public resetDefaultResourceSpec(): void
```

##### `resetLifecycleConfigArns` <a name="resetLifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.resetLifecycleConfigArns"></a>

```typescript
public resetLifecycleConfigArns(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.customImages">customImages</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.customImagesInput">customImagesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpecInput">defaultResourceSpecInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArnsInput">lifecycleConfigArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArns">lifecycleConfigArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings">SagemakerSpaceSpaceSettingsKernelGatewayAppSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customImages`<sup>Required</sup> <a name="customImages" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.customImages"></a>

```typescript
public readonly customImages: SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImagesList</a>

---

##### `defaultResourceSpec`<sup>Required</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpec"></a>

```typescript
public readonly defaultResourceSpec: SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `customImagesInput`<sup>Optional</sup> <a name="customImagesInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.customImagesInput"></a>

```typescript
public readonly customImagesInput: IResolvable | SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImages</a>[]

---

##### `defaultResourceSpecInput`<sup>Optional</sup> <a name="defaultResourceSpecInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```typescript
public readonly defaultResourceSpecInput: IResolvable | SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

---

##### `lifecycleConfigArnsInput`<sup>Optional</sup> <a name="lifecycleConfigArnsInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArnsInput"></a>

```typescript
public readonly lifecycleConfigArnsInput: string[];
```

- *Type:* string[]

---

##### `lifecycleConfigArns`<sup>Required</sup> <a name="lifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```typescript
public readonly lifecycleConfigArns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerSpaceSpaceSettingsKernelGatewayAppSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings">SagemakerSpaceSpaceSettingsKernelGatewayAppSettings</a>

---


### SagemakerSpaceSpaceSettingsOutputReference <a name="SagemakerSpaceSpaceSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

new sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putCodeEditorAppSettings">putCodeEditorAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putCustomFileSystems">putCustomFileSystems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putJupyterLabAppSettings">putJupyterLabAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putJupyterServerAppSettings">putJupyterServerAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putKernelGatewayAppSettings">putKernelGatewayAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putSpaceStorageSettings">putSpaceStorageSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetAppType">resetAppType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetCodeEditorAppSettings">resetCodeEditorAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetCustomFileSystems">resetCustomFileSystems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetJupyterLabAppSettings">resetJupyterLabAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetJupyterServerAppSettings">resetJupyterServerAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetKernelGatewayAppSettings">resetKernelGatewayAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetRemoteAccess">resetRemoteAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetSpaceManagedResources">resetSpaceManagedResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetSpaceStorageSettings">resetSpaceStorageSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodeEditorAppSettings` <a name="putCodeEditorAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putCodeEditorAppSettings"></a>

```typescript
public putCodeEditorAppSettings(value: SagemakerSpaceSpaceSettingsCodeEditorAppSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putCodeEditorAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettings</a>

---

##### `putCustomFileSystems` <a name="putCustomFileSystems" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putCustomFileSystems"></a>

```typescript
public putCustomFileSystems(value: IResolvable | SagemakerSpaceSpaceSettingsCustomFileSystems[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putCustomFileSystems.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystems">SagemakerSpaceSpaceSettingsCustomFileSystems</a>[]

---

##### `putJupyterLabAppSettings` <a name="putJupyterLabAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putJupyterLabAppSettings"></a>

```typescript
public putJupyterLabAppSettings(value: SagemakerSpaceSpaceSettingsJupyterLabAppSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putJupyterLabAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettings</a>

---

##### `putJupyterServerAppSettings` <a name="putJupyterServerAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putJupyterServerAppSettings"></a>

```typescript
public putJupyterServerAppSettings(value: SagemakerSpaceSpaceSettingsJupyterServerAppSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putJupyterServerAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings">SagemakerSpaceSpaceSettingsJupyterServerAppSettings</a>

---

##### `putKernelGatewayAppSettings` <a name="putKernelGatewayAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putKernelGatewayAppSettings"></a>

```typescript
public putKernelGatewayAppSettings(value: SagemakerSpaceSpaceSettingsKernelGatewayAppSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putKernelGatewayAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings">SagemakerSpaceSpaceSettingsKernelGatewayAppSettings</a>

---

##### `putSpaceStorageSettings` <a name="putSpaceStorageSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putSpaceStorageSettings"></a>

```typescript
public putSpaceStorageSettings(value: SagemakerSpaceSpaceSettingsSpaceStorageSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putSpaceStorageSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettings</a>

---

##### `resetAppType` <a name="resetAppType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetAppType"></a>

```typescript
public resetAppType(): void
```

##### `resetCodeEditorAppSettings` <a name="resetCodeEditorAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetCodeEditorAppSettings"></a>

```typescript
public resetCodeEditorAppSettings(): void
```

##### `resetCustomFileSystems` <a name="resetCustomFileSystems" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetCustomFileSystems"></a>

```typescript
public resetCustomFileSystems(): void
```

##### `resetJupyterLabAppSettings` <a name="resetJupyterLabAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetJupyterLabAppSettings"></a>

```typescript
public resetJupyterLabAppSettings(): void
```

##### `resetJupyterServerAppSettings` <a name="resetJupyterServerAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetJupyterServerAppSettings"></a>

```typescript
public resetJupyterServerAppSettings(): void
```

##### `resetKernelGatewayAppSettings` <a name="resetKernelGatewayAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetKernelGatewayAppSettings"></a>

```typescript
public resetKernelGatewayAppSettings(): void
```

##### `resetRemoteAccess` <a name="resetRemoteAccess" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetRemoteAccess"></a>

```typescript
public resetRemoteAccess(): void
```

##### `resetSpaceManagedResources` <a name="resetSpaceManagedResources" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetSpaceManagedResources"></a>

```typescript
public resetSpaceManagedResources(): void
```

##### `resetSpaceStorageSettings` <a name="resetSpaceStorageSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetSpaceStorageSettings"></a>

```typescript
public resetSpaceStorageSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.codeEditorAppSettings">codeEditorAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.customFileSystems">customFileSystems</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList">SagemakerSpaceSpaceSettingsCustomFileSystemsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.jupyterLabAppSettings">jupyterLabAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.jupyterServerAppSettings">jupyterServerAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.kernelGatewayAppSettings">kernelGatewayAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.spaceStorageSettings">spaceStorageSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference">SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.appTypeInput">appTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.codeEditorAppSettingsInput">codeEditorAppSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.customFileSystemsInput">customFileSystemsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystems">SagemakerSpaceSpaceSettingsCustomFileSystems</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.jupyterLabAppSettingsInput">jupyterLabAppSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.jupyterServerAppSettingsInput">jupyterServerAppSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings">SagemakerSpaceSpaceSettingsJupyterServerAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.kernelGatewayAppSettingsInput">kernelGatewayAppSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings">SagemakerSpaceSpaceSettingsKernelGatewayAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.remoteAccessInput">remoteAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.spaceManagedResourcesInput">spaceManagedResourcesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.spaceStorageSettingsInput">spaceStorageSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.appType">appType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.remoteAccess">remoteAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.spaceManagedResources">spaceManagedResources</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings">SagemakerSpaceSpaceSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codeEditorAppSettings`<sup>Required</sup> <a name="codeEditorAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.codeEditorAppSettings"></a>

```typescript
public readonly codeEditorAppSettings: SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference</a>

---

##### `customFileSystems`<sup>Required</sup> <a name="customFileSystems" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.customFileSystems"></a>

```typescript
public readonly customFileSystems: SagemakerSpaceSpaceSettingsCustomFileSystemsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemsList">SagemakerSpaceSpaceSettingsCustomFileSystemsList</a>

---

##### `jupyterLabAppSettings`<sup>Required</sup> <a name="jupyterLabAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.jupyterLabAppSettings"></a>

```typescript
public readonly jupyterLabAppSettings: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference</a>

---

##### `jupyterServerAppSettings`<sup>Required</sup> <a name="jupyterServerAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.jupyterServerAppSettings"></a>

```typescript
public readonly jupyterServerAppSettings: SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference</a>

---

##### `kernelGatewayAppSettings`<sup>Required</sup> <a name="kernelGatewayAppSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.kernelGatewayAppSettings"></a>

```typescript
public readonly kernelGatewayAppSettings: SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference</a>

---

##### `spaceStorageSettings`<sup>Required</sup> <a name="spaceStorageSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.spaceStorageSettings"></a>

```typescript
public readonly spaceStorageSettings: SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference">SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference</a>

---

##### `appTypeInput`<sup>Optional</sup> <a name="appTypeInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.appTypeInput"></a>

```typescript
public readonly appTypeInput: string;
```

- *Type:* string

---

##### `codeEditorAppSettingsInput`<sup>Optional</sup> <a name="codeEditorAppSettingsInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.codeEditorAppSettingsInput"></a>

```typescript
public readonly codeEditorAppSettingsInput: IResolvable | SagemakerSpaceSpaceSettingsCodeEditorAppSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettings</a>

---

##### `customFileSystemsInput`<sup>Optional</sup> <a name="customFileSystemsInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.customFileSystemsInput"></a>

```typescript
public readonly customFileSystemsInput: IResolvable | SagemakerSpaceSpaceSettingsCustomFileSystems[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystems">SagemakerSpaceSpaceSettingsCustomFileSystems</a>[]

---

##### `jupyterLabAppSettingsInput`<sup>Optional</sup> <a name="jupyterLabAppSettingsInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.jupyterLabAppSettingsInput"></a>

```typescript
public readonly jupyterLabAppSettingsInput: IResolvable | SagemakerSpaceSpaceSettingsJupyterLabAppSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettings</a>

---

##### `jupyterServerAppSettingsInput`<sup>Optional</sup> <a name="jupyterServerAppSettingsInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.jupyterServerAppSettingsInput"></a>

```typescript
public readonly jupyterServerAppSettingsInput: IResolvable | SagemakerSpaceSpaceSettingsJupyterServerAppSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings">SagemakerSpaceSpaceSettingsJupyterServerAppSettings</a>

---

##### `kernelGatewayAppSettingsInput`<sup>Optional</sup> <a name="kernelGatewayAppSettingsInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.kernelGatewayAppSettingsInput"></a>

```typescript
public readonly kernelGatewayAppSettingsInput: IResolvable | SagemakerSpaceSpaceSettingsKernelGatewayAppSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings">SagemakerSpaceSpaceSettingsKernelGatewayAppSettings</a>

---

##### `remoteAccessInput`<sup>Optional</sup> <a name="remoteAccessInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.remoteAccessInput"></a>

```typescript
public readonly remoteAccessInput: string;
```

- *Type:* string

---

##### `spaceManagedResourcesInput`<sup>Optional</sup> <a name="spaceManagedResourcesInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.spaceManagedResourcesInput"></a>

```typescript
public readonly spaceManagedResourcesInput: string;
```

- *Type:* string

---

##### `spaceStorageSettingsInput`<sup>Optional</sup> <a name="spaceStorageSettingsInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.spaceStorageSettingsInput"></a>

```typescript
public readonly spaceStorageSettingsInput: IResolvable | SagemakerSpaceSpaceSettingsSpaceStorageSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettings</a>

---

##### `appType`<sup>Required</sup> <a name="appType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.appType"></a>

```typescript
public readonly appType: string;
```

- *Type:* string

---

##### `remoteAccess`<sup>Required</sup> <a name="remoteAccess" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.remoteAccess"></a>

```typescript
public readonly remoteAccess: string;
```

- *Type:* string

---

##### `spaceManagedResources`<sup>Required</sup> <a name="spaceManagedResources" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.spaceManagedResources"></a>

```typescript
public readonly spaceManagedResources: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerSpaceSpaceSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettings">SagemakerSpaceSpaceSettings</a>

---


### SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference <a name="SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

new sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.resetEbsVolumeSizeInGb">resetEbsVolumeSizeInGb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEbsVolumeSizeInGb` <a name="resetEbsVolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.resetEbsVolumeSizeInGb"></a>

```typescript
public resetEbsVolumeSizeInGb(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.ebsVolumeSizeInGbInput">ebsVolumeSizeInGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.ebsVolumeSizeInGb">ebsVolumeSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ebsVolumeSizeInGbInput`<sup>Optional</sup> <a name="ebsVolumeSizeInGbInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.ebsVolumeSizeInGbInput"></a>

```typescript
public readonly ebsVolumeSizeInGbInput: number;
```

- *Type:* number

---

##### `ebsVolumeSizeInGb`<sup>Required</sup> <a name="ebsVolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.ebsVolumeSizeInGb"></a>

```typescript
public readonly ebsVolumeSizeInGb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings</a>

---


### SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference <a name="SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

new sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.putEbsStorageSettings">putEbsStorageSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.resetEbsStorageSettings">resetEbsStorageSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEbsStorageSettings` <a name="putEbsStorageSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.putEbsStorageSettings"></a>

```typescript
public putEbsStorageSettings(value: SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.putEbsStorageSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings</a>

---

##### `resetEbsStorageSettings` <a name="resetEbsStorageSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.resetEbsStorageSettings"></a>

```typescript
public resetEbsStorageSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.ebsStorageSettings">ebsStorageSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference">SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.ebsStorageSettingsInput">ebsStorageSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ebsStorageSettings`<sup>Required</sup> <a name="ebsStorageSettings" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.ebsStorageSettings"></a>

```typescript
public readonly ebsStorageSettings: SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference">SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference</a>

---

##### `ebsStorageSettingsInput`<sup>Optional</sup> <a name="ebsStorageSettingsInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.ebsStorageSettingsInput"></a>

```typescript
public readonly ebsStorageSettingsInput: IResolvable | SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerSpaceSpaceSettingsSpaceStorageSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettings</a>

---


### SagemakerSpaceSpaceSharingSettingsOutputReference <a name="SagemakerSpaceSpaceSharingSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

new sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.resetSharingType">resetSharingType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSharingType` <a name="resetSharingType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.resetSharingType"></a>

```typescript
public resetSharingType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.sharingTypeInput">sharingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.sharingType">sharingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettings">SagemakerSpaceSpaceSharingSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sharingTypeInput`<sup>Optional</sup> <a name="sharingTypeInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.sharingTypeInput"></a>

```typescript
public readonly sharingTypeInput: string;
```

- *Type:* string

---

##### `sharingType`<sup>Required</sup> <a name="sharingType" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.sharingType"></a>

```typescript
public readonly sharingType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerSpaceSpaceSharingSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceSpaceSharingSettings">SagemakerSpaceSpaceSharingSettings</a>

---


### SagemakerSpaceTagsList <a name="SagemakerSpaceTagsList" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

new sagemakerSpace.SagemakerSpaceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.get"></a>

```typescript
public get(index: number): SagemakerSpaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTags">SagemakerSpaceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerSpaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTags">SagemakerSpaceTags</a>[]

---


### SagemakerSpaceTagsOutputReference <a name="SagemakerSpaceTagsOutputReference" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.Initializer"></a>

```typescript
import { sagemakerSpace } from '@cdktn/provider-awscc'

new sagemakerSpace.SagemakerSpaceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTags">SagemakerSpaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerSpaceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerSpace.SagemakerSpaceTags">SagemakerSpaceTags</a>

---



