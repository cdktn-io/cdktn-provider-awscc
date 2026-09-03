# `imagebuilderLifecyclePolicy` Submodule <a name="`imagebuilderLifecyclePolicy` Submodule" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderLifecyclePolicy <a name="ImagebuilderLifecyclePolicy" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/imagebuilder_lifecycle_policy awscc_imagebuilder_lifecycle_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktn/provider-awscc'

new imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy(scope: Construct, id: string, config: ImagebuilderLifecyclePolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig">ImagebuilderLifecyclePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig">ImagebuilderLifecyclePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putPolicyDetails">putPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putResourceSelection">putResourceSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPolicyDetails` <a name="putPolicyDetails" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putPolicyDetails"></a>

```typescript
public putPolicyDetails(value: IResolvable | ImagebuilderLifecyclePolicyPolicyDetails[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putPolicyDetails.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a>[]

---

##### `putResourceSelection` <a name="putResourceSelection" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putResourceSelection"></a>

```typescript
public putResourceSelection(value: ImagebuilderLifecyclePolicyResourceSelection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putResourceSelection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ImagebuilderLifecyclePolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isConstruct"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktn/provider-awscc'

imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformElement"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktn/provider-awscc'

imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformResource"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktn/provider-awscc'

imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktn/provider-awscc'

imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ImagebuilderLifecyclePolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ImagebuilderLifecyclePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ImagebuilderLifecyclePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/imagebuilder_lifecycle_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ImagebuilderLifecyclePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.policyDetails">policyDetails</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList">ImagebuilderLifecyclePolicyPolicyDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceSelection">resourceSelection</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference">ImagebuilderLifecyclePolicyResourceSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.executionRoleInput">executionRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.policyDetailsInput">policyDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceSelectionInput">resourceSelectionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.executionRole">executionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `policyDetails`<sup>Required</sup> <a name="policyDetails" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.policyDetails"></a>

```typescript
public readonly policyDetails: ImagebuilderLifecyclePolicyPolicyDetailsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList">ImagebuilderLifecyclePolicyPolicyDetailsList</a>

---

##### `resourceSelection`<sup>Required</sup> <a name="resourceSelection" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceSelection"></a>

```typescript
public readonly resourceSelection: ImagebuilderLifecyclePolicyResourceSelectionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference">ImagebuilderLifecyclePolicyResourceSelectionOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `executionRoleInput`<sup>Optional</sup> <a name="executionRoleInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.executionRoleInput"></a>

```typescript
public readonly executionRoleInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyDetailsInput`<sup>Optional</sup> <a name="policyDetailsInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.policyDetailsInput"></a>

```typescript
public readonly policyDetailsInput: IResolvable | ImagebuilderLifecyclePolicyPolicyDetails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a>[]

---

##### `resourceSelectionInput`<sup>Optional</sup> <a name="resourceSelectionInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceSelectionInput"></a>

```typescript
public readonly resourceSelectionInput: IResolvable | ImagebuilderLifecyclePolicyResourceSelection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a>

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderLifecyclePolicyConfig <a name="ImagebuilderLifecyclePolicyConfig" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktn/provider-awscc'

const imagebuilderLifecyclePolicyConfig: imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.executionRole">executionRole</a></code> | <code>string</code> | The execution role of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.name">name</a></code> | <code>string</code> | The name of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.policyDetails">policyDetails</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a>[]</code> | The policy details of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.resourceSelection">resourceSelection</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a></code> | The resource selection of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.resourceType">resourceType</a></code> | <code>string</code> | The resource type of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.description">description</a></code> | <code>string</code> | The description of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.status">status</a></code> | <code>string</code> | The status of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | The tags associated with the lifecycle policy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

The execution role of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/imagebuilder_lifecycle_policy#execution_role ImagebuilderLifecyclePolicy#execution_role}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/imagebuilder_lifecycle_policy#name ImagebuilderLifecyclePolicy#name}

---

##### `policyDetails`<sup>Required</sup> <a name="policyDetails" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.policyDetails"></a>

```typescript
public readonly policyDetails: IResolvable | ImagebuilderLifecyclePolicyPolicyDetails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a>[]

The policy details of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/imagebuilder_lifecycle_policy#policy_details ImagebuilderLifecyclePolicy#policy_details}

---

##### `resourceSelection`<sup>Required</sup> <a name="resourceSelection" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.resourceSelection"></a>

```typescript
public readonly resourceSelection: ImagebuilderLifecyclePolicyResourceSelection;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a>

The resource selection of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/imagebuilder_lifecycle_policy#resource_selection ImagebuilderLifecyclePolicy#resource_selection}

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

The resource type of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/imagebuilder_lifecycle_policy#resource_type ImagebuilderLifecyclePolicy#resource_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/imagebuilder_lifecycle_policy#description ImagebuilderLifecyclePolicy#description}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The status of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/imagebuilder_lifecycle_policy#status ImagebuilderLifecyclePolicy#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The tags associated with the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/imagebuilder_lifecycle_policy#tags ImagebuilderLifecyclePolicy#tags}

---

### ImagebuilderLifecyclePolicyPolicyDetails <a name="ImagebuilderLifecyclePolicyPolicyDetails" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktn/provider-awscc'

const imagebuilderLifecyclePolicyPolicyDetails: imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails.property.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction">ImagebuilderLifecyclePolicyPolicyDetailsAction</a></code> | The action of the policy detail. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter">ImagebuilderLifecyclePolicyPolicyDetailsFilter</a></code> | The filters to apply of the policy detail. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails.property.exclusionRules">exclusionRules</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules</a></code> | The exclusion rules to apply of the policy detail. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails.property.action"></a>

```typescript
public readonly action: ImagebuilderLifecyclePolicyPolicyDetailsAction;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction">ImagebuilderLifecyclePolicyPolicyDetailsAction</a>

The action of the policy detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/imagebuilder_lifecycle_policy#action ImagebuilderLifecyclePolicy#action}

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails.property.filter"></a>

```typescript
public readonly filter: ImagebuilderLifecyclePolicyPolicyDetailsFilter;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter">ImagebuilderLifecyclePolicyPolicyDetailsFilter</a>

The filters to apply of the policy detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/imagebuilder_lifecycle_policy#filter ImagebuilderLifecyclePolicy#filter}

---

##### `exclusionRules`<sup>Optional</sup> <a name="exclusionRules" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails.property.exclusionRules"></a>

```typescript
public readonly exclusionRules: ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules</a>

The exclusion rules to apply of the policy detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/imagebuilder_lifecycle_policy#exclusion_rules ImagebuilderLifecyclePolicy#exclusion_rules}

---

### ImagebuilderLifecyclePolicyPolicyDetailsAction <a name="ImagebuilderLifecyclePolicyPolicyDetailsAction" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktn/provider-awscc'

const imagebuilderLifecyclePolicyPolicyDetailsAction: imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction.property.type">type</a></code> | <code>string</code> | The action type of the policy detail. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction.property.includeResources">includeResources</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources</a></code> | The included resources of the policy detail. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The action type of the policy detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/imagebuilder_lifecycle_policy#type ImagebuilderLifecyclePolicy#type}

---

##### `includeResources`<sup>Optional</sup> <a name="includeResources" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction.property.includeResources"></a>

```typescript
public readonly includeResources: ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources</a>

The included resources of the policy detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/imagebuilder_lifecycle_policy#include_resources ImagebuilderLifecyclePolicy#include_resources}

---

### ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources <a name="ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktn/provider-awscc'

const imagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources: imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources.property.amis">amis</a></code> | <code>boolean \| cdktn.IResolvable</code> | Use to configure lifecycle actions on AMIs. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources.property.containers">containers</a></code> | <code>boolean \| cdktn.IResolvable</code> | Use to configure lifecycle actions on containers. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources.property.snapshots">snapshots</a></code> | <code>boolean \| cdktn.IResolvable</code> | Use to configure lifecycle actions on snapshots. |

---

##### `amis`<sup>Optional</sup> <a name="amis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources.property.amis"></a>

```typescript
public readonly amis: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Use to configure lifecycle actions on AMIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/imagebuilder_lifecycle_policy#amis ImagebuilderLifecyclePolicy#amis}

---

##### `containers`<sup>Optional</sup> <a name="containers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources.property.containers"></a>

```typescript
public readonly containers: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Use to configure lifecycle actions on containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/imagebuilder_lifecycle_policy#containers ImagebuilderLifecyclePolicy#containers}

---

##### `snapshots`<sup>Optional</sup> <a name="snapshots" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources.property.snapshots"></a>

```typescript
public readonly snapshots: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Use to configure lifecycle actions on snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/imagebuilder_lifecycle_policy#snapshots ImagebuilderLifecyclePolicy#snapshots}

---

### ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules <a name="ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktn/provider-awscc'

const imagebuilderLifecyclePolicyPolicyDetailsExclusionRules: imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules.property.amis">amis</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis</a></code> | The AMI exclusion rules for the policy detail. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules.property.tagMap">tagMap</a></code> | <code>{[ key: string ]: string}</code> | The Image Builder tags to filter on. |

---

##### `amis`<sup>Optional</sup> <a name="amis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules.property.amis"></a>

```typescript
public readonly amis: ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis</a>

The AMI exclusion rules for the policy detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/imagebuilder_lifecycle_policy#amis ImagebuilderLifecyclePolicy#amis}

---

##### `tagMap`<sup>Optional</sup> <a name="tagMap" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules.property.tagMap"></a>

```typescript
public readonly tagMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The Image Builder tags to filter on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}

---

### ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis <a name="ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktn/provider-awscc'

const imagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis: imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.isPublic">isPublic</a></code> | <code>boolean \| cdktn.IResolvable</code> | Use to apply lifecycle policy actions on whether the AMI is public. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.lastLaunched">lastLaunched</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched</a></code> | Use to apply lifecycle policy actions on AMIs launched before a certain time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.regions">regions</a></code> | <code>string[]</code> | Use to apply lifecycle policy actions on AMIs distributed to a set of regions. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.sharedAccounts">sharedAccounts</a></code> | <code>string[]</code> | Use to apply lifecycle policy actions on AMIs shared with a set of regions. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.tagMap">tagMap</a></code> | <code>{[ key: string ]: string}</code> | The AMIs to select by tag. |

---

##### `isPublic`<sup>Optional</sup> <a name="isPublic" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.isPublic"></a>

```typescript
public readonly isPublic: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Use to apply lifecycle policy actions on whether the AMI is public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/imagebuilder_lifecycle_policy#is_public ImagebuilderLifecyclePolicy#is_public}

---

##### `lastLaunched`<sup>Optional</sup> <a name="lastLaunched" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.lastLaunched"></a>

```typescript
public readonly lastLaunched: ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched</a>

Use to apply lifecycle policy actions on AMIs launched before a certain time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/imagebuilder_lifecycle_policy#last_launched ImagebuilderLifecyclePolicy#last_launched}

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

Use to apply lifecycle policy actions on AMIs distributed to a set of regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/imagebuilder_lifecycle_policy#regions ImagebuilderLifecyclePolicy#regions}

---

##### `sharedAccounts`<sup>Optional</sup> <a name="sharedAccounts" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.sharedAccounts"></a>

```typescript
public readonly sharedAccounts: string[];
```

- *Type:* string[]

Use to apply lifecycle policy actions on AMIs shared with a set of regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/imagebuilder_lifecycle_policy#shared_accounts ImagebuilderLifecyclePolicy#shared_accounts}

---

##### `tagMap`<sup>Optional</sup> <a name="tagMap" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.tagMap"></a>

```typescript
public readonly tagMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The AMIs to select by tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}

---

### ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched <a name="ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktn/provider-awscc'

const imagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched: imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched.property.unit">unit</a></code> | <code>string</code> | The value's time unit. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched.property.value">value</a></code> | <code>number</code> | The last launched value. |

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

The value's time unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/imagebuilder_lifecycle_policy#unit ImagebuilderLifecyclePolicy#unit}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

The last launched value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/imagebuilder_lifecycle_policy#value ImagebuilderLifecyclePolicy#value}

---

### ImagebuilderLifecyclePolicyPolicyDetailsFilter <a name="ImagebuilderLifecyclePolicyPolicyDetailsFilter" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktn/provider-awscc'

const imagebuilderLifecyclePolicyPolicyDetailsFilter: imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.type">type</a></code> | <code>string</code> | The filter type. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.value">value</a></code> | <code>number</code> | The filter value. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.retainAtLeast">retainAtLeast</a></code> | <code>number</code> | The minimum number of Image Builder resources to retain. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.unit">unit</a></code> | <code>string</code> | The value's time unit. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The filter type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/imagebuilder_lifecycle_policy#type ImagebuilderLifecyclePolicy#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

The filter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/imagebuilder_lifecycle_policy#value ImagebuilderLifecyclePolicy#value}

---

##### `retainAtLeast`<sup>Optional</sup> <a name="retainAtLeast" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.retainAtLeast"></a>

```typescript
public readonly retainAtLeast: number;
```

- *Type:* number

The minimum number of Image Builder resources to retain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/imagebuilder_lifecycle_policy#retain_at_least ImagebuilderLifecyclePolicy#retain_at_least}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

The value's time unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/imagebuilder_lifecycle_policy#unit ImagebuilderLifecyclePolicy#unit}

---

### ImagebuilderLifecyclePolicyResourceSelection <a name="ImagebuilderLifecyclePolicyResourceSelection" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktn/provider-awscc'

const imagebuilderLifecyclePolicyResourceSelection: imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection.property.recipes">recipes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes">ImagebuilderLifecyclePolicyResourceSelectionRecipes</a>[]</code> | The recipes to select. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection.property.tagMap">tagMap</a></code> | <code>{[ key: string ]: string}</code> | The Image Builder resources to select by tag. |

---

##### `recipes`<sup>Optional</sup> <a name="recipes" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection.property.recipes"></a>

```typescript
public readonly recipes: IResolvable | ImagebuilderLifecyclePolicyResourceSelectionRecipes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes">ImagebuilderLifecyclePolicyResourceSelectionRecipes</a>[]

The recipes to select.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/imagebuilder_lifecycle_policy#recipes ImagebuilderLifecyclePolicy#recipes}

---

##### `tagMap`<sup>Optional</sup> <a name="tagMap" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection.property.tagMap"></a>

```typescript
public readonly tagMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The Image Builder resources to select by tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}

---

### ImagebuilderLifecyclePolicyResourceSelectionRecipes <a name="ImagebuilderLifecyclePolicyResourceSelectionRecipes" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktn/provider-awscc'

const imagebuilderLifecyclePolicyResourceSelectionRecipes: imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes.property.name">name</a></code> | <code>string</code> | The recipe name. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes.property.semanticVersion">semanticVersion</a></code> | <code>string</code> | The recipe version. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The recipe name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/imagebuilder_lifecycle_policy#name ImagebuilderLifecyclePolicy#name}

---

##### `semanticVersion`<sup>Optional</sup> <a name="semanticVersion" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes.property.semanticVersion"></a>

```typescript
public readonly semanticVersion: string;
```

- *Type:* string

The recipe version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/imagebuilder_lifecycle_policy#semantic_version ImagebuilderLifecyclePolicy#semantic_version}

---

## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktn/provider-awscc'

new imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resetAmis">resetAmis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resetContainers">resetContainers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resetSnapshots">resetSnapshots</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAmis` <a name="resetAmis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resetAmis"></a>

```typescript
public resetAmis(): void
```

##### `resetContainers` <a name="resetContainers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resetContainers"></a>

```typescript
public resetContainers(): void
```

##### `resetSnapshots` <a name="resetSnapshots" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resetSnapshots"></a>

```typescript
public resetSnapshots(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.amisInput">amisInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.containersInput">containersInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.snapshotsInput">snapshotsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.amis">amis</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.containers">containers</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.snapshots">snapshots</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amisInput`<sup>Optional</sup> <a name="amisInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.amisInput"></a>

```typescript
public readonly amisInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `containersInput`<sup>Optional</sup> <a name="containersInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.containersInput"></a>

```typescript
public readonly containersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `snapshotsInput`<sup>Optional</sup> <a name="snapshotsInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.snapshotsInput"></a>

```typescript
public readonly snapshotsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `amis`<sup>Required</sup> <a name="amis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.amis"></a>

```typescript
public readonly amis: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.containers"></a>

```typescript
public readonly containers: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `snapshots`<sup>Required</sup> <a name="snapshots" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.snapshots"></a>

```typescript
public readonly snapshots: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources</a>

---


### ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktn/provider-awscc'

new imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.putIncludeResources">putIncludeResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.resetIncludeResources">resetIncludeResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIncludeResources` <a name="putIncludeResources" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.putIncludeResources"></a>

```typescript
public putIncludeResources(value: ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.putIncludeResources.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources</a>

---

##### `resetIncludeResources` <a name="resetIncludeResources" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.resetIncludeResources"></a>

```typescript
public resetIncludeResources(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.includeResources">includeResources</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.includeResourcesInput">includeResourcesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction">ImagebuilderLifecyclePolicyPolicyDetailsAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeResources`<sup>Required</sup> <a name="includeResources" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.includeResources"></a>

```typescript
public readonly includeResources: ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference</a>

---

##### `includeResourcesInput`<sup>Optional</sup> <a name="includeResourcesInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.includeResourcesInput"></a>

```typescript
public readonly includeResourcesInput: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailsAction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction">ImagebuilderLifecyclePolicyPolicyDetailsAction</a>

---


### ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktn/provider-awscc'

new imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.resetUnit">resetUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.resetUnit"></a>

```typescript
public resetUnit(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched</a>

---


### ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktn/provider-awscc'

new imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.putLastLaunched">putLastLaunched</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetIsPublic">resetIsPublic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetLastLaunched">resetLastLaunched</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetRegions">resetRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetSharedAccounts">resetSharedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetTagMap">resetTagMap</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLastLaunched` <a name="putLastLaunched" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.putLastLaunched"></a>

```typescript
public putLastLaunched(value: ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.putLastLaunched.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched</a>

---

##### `resetIsPublic` <a name="resetIsPublic" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetIsPublic"></a>

```typescript
public resetIsPublic(): void
```

##### `resetLastLaunched` <a name="resetLastLaunched" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetLastLaunched"></a>

```typescript
public resetLastLaunched(): void
```

##### `resetRegions` <a name="resetRegions" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetRegions"></a>

```typescript
public resetRegions(): void
```

##### `resetSharedAccounts` <a name="resetSharedAccounts" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetSharedAccounts"></a>

```typescript
public resetSharedAccounts(): void
```

##### `resetTagMap` <a name="resetTagMap" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetTagMap"></a>

```typescript
public resetTagMap(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.lastLaunched">lastLaunched</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.isPublicInput">isPublicInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.lastLaunchedInput">lastLaunchedInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.regionsInput">regionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.sharedAccountsInput">sharedAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.tagMapInput">tagMapInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.isPublic">isPublic</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.sharedAccounts">sharedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.tagMap">tagMap</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastLaunched`<sup>Required</sup> <a name="lastLaunched" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.lastLaunched"></a>

```typescript
public readonly lastLaunched: ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference</a>

---

##### `isPublicInput`<sup>Optional</sup> <a name="isPublicInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.isPublicInput"></a>

```typescript
public readonly isPublicInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `lastLaunchedInput`<sup>Optional</sup> <a name="lastLaunchedInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.lastLaunchedInput"></a>

```typescript
public readonly lastLaunchedInput: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched</a>

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.regionsInput"></a>

```typescript
public readonly regionsInput: string[];
```

- *Type:* string[]

---

##### `sharedAccountsInput`<sup>Optional</sup> <a name="sharedAccountsInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.sharedAccountsInput"></a>

```typescript
public readonly sharedAccountsInput: string[];
```

- *Type:* string[]

---

##### `tagMapInput`<sup>Optional</sup> <a name="tagMapInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.tagMapInput"></a>

```typescript
public readonly tagMapInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `isPublic`<sup>Required</sup> <a name="isPublic" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.isPublic"></a>

```typescript
public readonly isPublic: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `sharedAccounts`<sup>Required</sup> <a name="sharedAccounts" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.sharedAccounts"></a>

```typescript
public readonly sharedAccounts: string[];
```

- *Type:* string[]

---

##### `tagMap`<sup>Required</sup> <a name="tagMap" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.tagMap"></a>

```typescript
public readonly tagMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis</a>

---


### ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktn/provider-awscc'

new imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.putAmis">putAmis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.resetAmis">resetAmis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.resetTagMap">resetTagMap</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAmis` <a name="putAmis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.putAmis"></a>

```typescript
public putAmis(value: ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.putAmis.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis</a>

---

##### `resetAmis` <a name="resetAmis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.resetAmis"></a>

```typescript
public resetAmis(): void
```

##### `resetTagMap` <a name="resetTagMap" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.resetTagMap"></a>

```typescript
public resetTagMap(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.amis">amis</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.amisInput">amisInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.tagMapInput">tagMapInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.tagMap">tagMap</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amis`<sup>Required</sup> <a name="amis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.amis"></a>

```typescript
public readonly amis: ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference</a>

---

##### `amisInput`<sup>Optional</sup> <a name="amisInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.amisInput"></a>

```typescript
public readonly amisInput: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis</a>

---

##### `tagMapInput`<sup>Optional</sup> <a name="tagMapInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.tagMapInput"></a>

```typescript
public readonly tagMapInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagMap`<sup>Required</sup> <a name="tagMap" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.tagMap"></a>

```typescript
public readonly tagMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules</a>

---


### ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktn/provider-awscc'

new imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.resetRetainAtLeast">resetRetainAtLeast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRetainAtLeast` <a name="resetRetainAtLeast" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.resetRetainAtLeast"></a>

```typescript
public resetRetainAtLeast(): void
```

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.resetUnit"></a>

```typescript
public resetUnit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.retainAtLeastInput">retainAtLeastInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.retainAtLeast">retainAtLeast</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter">ImagebuilderLifecyclePolicyPolicyDetailsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `retainAtLeastInput`<sup>Optional</sup> <a name="retainAtLeastInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.retainAtLeastInput"></a>

```typescript
public readonly retainAtLeastInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `retainAtLeast`<sup>Required</sup> <a name="retainAtLeast" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.retainAtLeast"></a>

```typescript
public readonly retainAtLeast: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailsFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter">ImagebuilderLifecyclePolicyPolicyDetailsFilter</a>

---


### ImagebuilderLifecyclePolicyPolicyDetailsList <a name="ImagebuilderLifecyclePolicyPolicyDetailsList" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktn/provider-awscc'

new imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.get"></a>

```typescript
public get(index: number): ImagebuilderLifecyclePolicyPolicyDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderLifecyclePolicyPolicyDetails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a>[]

---


### ImagebuilderLifecyclePolicyPolicyDetailsOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailsOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktn/provider-awscc'

new imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putExclusionRules">putExclusionRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.resetExclusionRules">resetExclusionRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putAction"></a>

```typescript
public putAction(value: ImagebuilderLifecyclePolicyPolicyDetailsAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction">ImagebuilderLifecyclePolicyPolicyDetailsAction</a>

---

##### `putExclusionRules` <a name="putExclusionRules" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putExclusionRules"></a>

```typescript
public putExclusionRules(value: ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putExclusionRules.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules</a>

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putFilter"></a>

```typescript
public putFilter(value: ImagebuilderLifecyclePolicyPolicyDetailsFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter">ImagebuilderLifecyclePolicyPolicyDetailsFilter</a>

---

##### `resetExclusionRules` <a name="resetExclusionRules" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.resetExclusionRules"></a>

```typescript
public resetExclusionRules(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.exclusionRules">exclusionRules</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.actionInput">actionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction">ImagebuilderLifecyclePolicyPolicyDetailsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.exclusionRulesInput">exclusionRulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter">ImagebuilderLifecyclePolicyPolicyDetailsFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.action"></a>

```typescript
public readonly action: ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference</a>

---

##### `exclusionRules`<sup>Required</sup> <a name="exclusionRules" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.exclusionRules"></a>

```typescript
public readonly exclusionRules: ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.filter"></a>

```typescript
public readonly filter: ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailsAction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction">ImagebuilderLifecyclePolicyPolicyDetailsAction</a>

---

##### `exclusionRulesInput`<sup>Optional</sup> <a name="exclusionRulesInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.exclusionRulesInput"></a>

```typescript
public readonly exclusionRulesInput: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailsFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter">ImagebuilderLifecyclePolicyPolicyDetailsFilter</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderLifecyclePolicyPolicyDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a>

---


### ImagebuilderLifecyclePolicyResourceSelectionOutputReference <a name="ImagebuilderLifecyclePolicyResourceSelectionOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktn/provider-awscc'

new imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.putRecipes">putRecipes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resetRecipes">resetRecipes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resetTagMap">resetTagMap</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRecipes` <a name="putRecipes" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.putRecipes"></a>

```typescript
public putRecipes(value: IResolvable | ImagebuilderLifecyclePolicyResourceSelectionRecipes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.putRecipes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes">ImagebuilderLifecyclePolicyResourceSelectionRecipes</a>[]

---

##### `resetRecipes` <a name="resetRecipes" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resetRecipes"></a>

```typescript
public resetRecipes(): void
```

##### `resetTagMap` <a name="resetTagMap" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resetTagMap"></a>

```typescript
public resetTagMap(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.recipes">recipes</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList">ImagebuilderLifecyclePolicyResourceSelectionRecipesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.recipesInput">recipesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes">ImagebuilderLifecyclePolicyResourceSelectionRecipes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.tagMapInput">tagMapInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.tagMap">tagMap</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `recipes`<sup>Required</sup> <a name="recipes" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.recipes"></a>

```typescript
public readonly recipes: ImagebuilderLifecyclePolicyResourceSelectionRecipesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList">ImagebuilderLifecyclePolicyResourceSelectionRecipesList</a>

---

##### `recipesInput`<sup>Optional</sup> <a name="recipesInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.recipesInput"></a>

```typescript
public readonly recipesInput: IResolvable | ImagebuilderLifecyclePolicyResourceSelectionRecipes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes">ImagebuilderLifecyclePolicyResourceSelectionRecipes</a>[]

---

##### `tagMapInput`<sup>Optional</sup> <a name="tagMapInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.tagMapInput"></a>

```typescript
public readonly tagMapInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagMap`<sup>Required</sup> <a name="tagMap" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.tagMap"></a>

```typescript
public readonly tagMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderLifecyclePolicyResourceSelection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a>

---


### ImagebuilderLifecyclePolicyResourceSelectionRecipesList <a name="ImagebuilderLifecyclePolicyResourceSelectionRecipesList" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktn/provider-awscc'

new imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.get"></a>

```typescript
public get(index: number): ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes">ImagebuilderLifecyclePolicyResourceSelectionRecipes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderLifecyclePolicyResourceSelectionRecipes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes">ImagebuilderLifecyclePolicyResourceSelectionRecipes</a>[]

---


### ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference <a name="ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktn/provider-awscc'

new imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.resetSemanticVersion">resetSemanticVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSemanticVersion` <a name="resetSemanticVersion" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.resetSemanticVersion"></a>

```typescript
public resetSemanticVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.semanticVersionInput">semanticVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.semanticVersion">semanticVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes">ImagebuilderLifecyclePolicyResourceSelectionRecipes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `semanticVersionInput`<sup>Optional</sup> <a name="semanticVersionInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.semanticVersionInput"></a>

```typescript
public readonly semanticVersionInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `semanticVersion`<sup>Required</sup> <a name="semanticVersion" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.semanticVersion"></a>

```typescript
public readonly semanticVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderLifecyclePolicyResourceSelectionRecipes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes">ImagebuilderLifecyclePolicyResourceSelectionRecipes</a>

---



