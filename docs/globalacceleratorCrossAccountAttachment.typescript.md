# `globalacceleratorCrossAccountAttachment` Submodule <a name="`globalacceleratorCrossAccountAttachment` Submodule" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalacceleratorCrossAccountAttachment <a name="GlobalacceleratorCrossAccountAttachment" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_cross_account_attachment awscc_globalaccelerator_cross_account_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer"></a>

```typescript
import { globalacceleratorCrossAccountAttachment } from '@cdktn/provider-awscc'

new globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment(scope: Construct, id: string, config: GlobalacceleratorCrossAccountAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig">GlobalacceleratorCrossAccountAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig">GlobalacceleratorCrossAccountAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.putResources">putResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetPrincipals">resetPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putResources` <a name="putResources" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.putResources"></a>

```typescript
public putResources(value: IResolvable | GlobalacceleratorCrossAccountAttachmentResources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.putResources.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources">GlobalacceleratorCrossAccountAttachmentResources</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.putTags"></a>

```typescript
public putTags(value: IResolvable | GlobalacceleratorCrossAccountAttachmentTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags">GlobalacceleratorCrossAccountAttachmentTags</a>[]

---

##### `resetPrincipals` <a name="resetPrincipals" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetPrincipals"></a>

```typescript
public resetPrincipals(): void
```

##### `resetResources` <a name="resetResources" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetResources"></a>

```typescript
public resetResources(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GlobalacceleratorCrossAccountAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isConstruct"></a>

```typescript
import { globalacceleratorCrossAccountAttachment } from '@cdktn/provider-awscc'

globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isTerraformElement"></a>

```typescript
import { globalacceleratorCrossAccountAttachment } from '@cdktn/provider-awscc'

globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isTerraformResource"></a>

```typescript
import { globalacceleratorCrossAccountAttachment } from '@cdktn/provider-awscc'

globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.generateConfigForImport"></a>

```typescript
import { globalacceleratorCrossAccountAttachment } from '@cdktn/provider-awscc'

globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GlobalacceleratorCrossAccountAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlobalacceleratorCrossAccountAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlobalacceleratorCrossAccountAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_cross_account_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GlobalacceleratorCrossAccountAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.attachmentArn">attachmentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList">GlobalacceleratorCrossAccountAttachmentResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList">GlobalacceleratorCrossAccountAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.principalsInput">principalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.resourcesInput">resourcesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources">GlobalacceleratorCrossAccountAttachmentResources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags">GlobalacceleratorCrossAccountAttachmentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.principals">principals</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `attachmentArn`<sup>Required</sup> <a name="attachmentArn" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.attachmentArn"></a>

```typescript
public readonly attachmentArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.resources"></a>

```typescript
public readonly resources: GlobalacceleratorCrossAccountAttachmentResourcesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList">GlobalacceleratorCrossAccountAttachmentResourcesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.tags"></a>

```typescript
public readonly tags: GlobalacceleratorCrossAccountAttachmentTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList">GlobalacceleratorCrossAccountAttachmentTagsList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `principalsInput`<sup>Optional</sup> <a name="principalsInput" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.principalsInput"></a>

```typescript
public readonly principalsInput: string[];
```

- *Type:* string[]

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: IResolvable | GlobalacceleratorCrossAccountAttachmentResources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources">GlobalacceleratorCrossAccountAttachmentResources</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | GlobalacceleratorCrossAccountAttachmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags">GlobalacceleratorCrossAccountAttachmentTags</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.principals"></a>

```typescript
public readonly principals: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalacceleratorCrossAccountAttachmentConfig <a name="GlobalacceleratorCrossAccountAttachmentConfig" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.Initializer"></a>

```typescript
import { globalacceleratorCrossAccountAttachment } from '@cdktn/provider-awscc'

const globalacceleratorCrossAccountAttachmentConfig: globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.name">name</a></code> | <code>string</code> | The Friendly identifier of the attachment. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.principals">principals</a></code> | <code>string[]</code> | Principals to share the resources with. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.resources">resources</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources">GlobalacceleratorCrossAccountAttachmentResources</a>[]</code> | Resources shared using the attachment. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags">GlobalacceleratorCrossAccountAttachmentTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_cross_account_attachment#tags GlobalacceleratorCrossAccountAttachment#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Friendly identifier of the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_cross_account_attachment#name GlobalacceleratorCrossAccountAttachment#name}

---

##### `principals`<sup>Optional</sup> <a name="principals" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.principals"></a>

```typescript
public readonly principals: string[];
```

- *Type:* string[]

Principals to share the resources with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_cross_account_attachment#principals GlobalacceleratorCrossAccountAttachment#principals}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.resources"></a>

```typescript
public readonly resources: IResolvable | GlobalacceleratorCrossAccountAttachmentResources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources">GlobalacceleratorCrossAccountAttachmentResources</a>[]

Resources shared using the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_cross_account_attachment#resources GlobalacceleratorCrossAccountAttachment#resources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | GlobalacceleratorCrossAccountAttachmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags">GlobalacceleratorCrossAccountAttachmentTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_cross_account_attachment#tags GlobalacceleratorCrossAccountAttachment#tags}.

---

### GlobalacceleratorCrossAccountAttachmentResources <a name="GlobalacceleratorCrossAccountAttachmentResources" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources.Initializer"></a>

```typescript
import { globalacceleratorCrossAccountAttachment } from '@cdktn/provider-awscc'

const globalacceleratorCrossAccountAttachmentResources: globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources.property.cidr">cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_cross_account_attachment#cidr GlobalacceleratorCrossAccountAttachment#cidr}. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources.property.endpointId">endpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_cross_account_attachment#endpoint_id GlobalacceleratorCrossAccountAttachment#endpoint_id}. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_cross_account_attachment#region GlobalacceleratorCrossAccountAttachment#region}. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_cross_account_attachment#cidr GlobalacceleratorCrossAccountAttachment#cidr}.

---

##### `endpointId`<sup>Optional</sup> <a name="endpointId" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_cross_account_attachment#endpoint_id GlobalacceleratorCrossAccountAttachment#endpoint_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_cross_account_attachment#region GlobalacceleratorCrossAccountAttachment#region}.

---

### GlobalacceleratorCrossAccountAttachmentTags <a name="GlobalacceleratorCrossAccountAttachmentTags" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags.Initializer"></a>

```typescript
import { globalacceleratorCrossAccountAttachment } from '@cdktn/provider-awscc'

const globalacceleratorCrossAccountAttachmentTags: globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags.property.key">key</a></code> | <code>string</code> | Key of the tag. Value can be 1 to 127 characters. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags.property.value">value</a></code> | <code>string</code> | Value for the tag. Value can be 1 to 255 characters. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Key of the tag. Value can be 1 to 127 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_cross_account_attachment#key GlobalacceleratorCrossAccountAttachment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value for the tag. Value can be 1 to 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_cross_account_attachment#value GlobalacceleratorCrossAccountAttachment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GlobalacceleratorCrossAccountAttachmentResourcesList <a name="GlobalacceleratorCrossAccountAttachmentResourcesList" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.Initializer"></a>

```typescript
import { globalacceleratorCrossAccountAttachment } from '@cdktn/provider-awscc'

new globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.get"></a>

```typescript
public get(index: number): GlobalacceleratorCrossAccountAttachmentResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources">GlobalacceleratorCrossAccountAttachmentResources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlobalacceleratorCrossAccountAttachmentResources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources">GlobalacceleratorCrossAccountAttachmentResources</a>[]

---


### GlobalacceleratorCrossAccountAttachmentResourcesOutputReference <a name="GlobalacceleratorCrossAccountAttachmentResourcesOutputReference" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer"></a>

```typescript
import { globalacceleratorCrossAccountAttachment } from '@cdktn/provider-awscc'

new globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.resetCidr">resetCidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.resetEndpointId">resetEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidr` <a name="resetCidr" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.resetCidr"></a>

```typescript
public resetCidr(): void
```

##### `resetEndpointId` <a name="resetEndpointId" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.resetEndpointId"></a>

```typescript
public resetEndpointId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.endpointIdInput">endpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.endpointId">endpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources">GlobalacceleratorCrossAccountAttachmentResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `endpointIdInput`<sup>Optional</sup> <a name="endpointIdInput" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.endpointIdInput"></a>

```typescript
public readonly endpointIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlobalacceleratorCrossAccountAttachmentResources;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources">GlobalacceleratorCrossAccountAttachmentResources</a>

---


### GlobalacceleratorCrossAccountAttachmentTagsList <a name="GlobalacceleratorCrossAccountAttachmentTagsList" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.Initializer"></a>

```typescript
import { globalacceleratorCrossAccountAttachment } from '@cdktn/provider-awscc'

new globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.get"></a>

```typescript
public get(index: number): GlobalacceleratorCrossAccountAttachmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags">GlobalacceleratorCrossAccountAttachmentTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlobalacceleratorCrossAccountAttachmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags">GlobalacceleratorCrossAccountAttachmentTags</a>[]

---


### GlobalacceleratorCrossAccountAttachmentTagsOutputReference <a name="GlobalacceleratorCrossAccountAttachmentTagsOutputReference" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer"></a>

```typescript
import { globalacceleratorCrossAccountAttachment } from '@cdktn/provider-awscc'

new globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags">GlobalacceleratorCrossAccountAttachmentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlobalacceleratorCrossAccountAttachmentTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags">GlobalacceleratorCrossAccountAttachmentTags</a>

---



