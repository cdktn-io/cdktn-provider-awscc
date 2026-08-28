# `iamManagedPolicy` Submodule <a name="`iamManagedPolicy` Submodule" id="@cdktn/provider-awscc.iamManagedPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamManagedPolicy <a name="IamManagedPolicy" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iam_managed_policy awscc_iam_managed_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer"></a>

```typescript
import { iamManagedPolicy } from '@cdktn/provider-awscc'

new iamManagedPolicy.IamManagedPolicy(scope: Construct, id: string, config: IamManagedPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig">IamManagedPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig">IamManagedPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.resetGroups">resetGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.resetManagedPolicyName">resetManagedPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.resetRoles">resetRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.resetUsers">resetUsers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGroups` <a name="resetGroups" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.resetGroups"></a>

```typescript
public resetGroups(): void
```

##### `resetManagedPolicyName` <a name="resetManagedPolicyName" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.resetManagedPolicyName"></a>

```typescript
public resetManagedPolicyName(): void
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetRoles` <a name="resetRoles" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.resetRoles"></a>

```typescript
public resetRoles(): void
```

##### `resetUsers` <a name="resetUsers" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.resetUsers"></a>

```typescript
public resetUsers(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IamManagedPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.isConstruct"></a>

```typescript
import { iamManagedPolicy } from '@cdktn/provider-awscc'

iamManagedPolicy.IamManagedPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.isTerraformElement"></a>

```typescript
import { iamManagedPolicy } from '@cdktn/provider-awscc'

iamManagedPolicy.IamManagedPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.isTerraformResource"></a>

```typescript
import { iamManagedPolicy } from '@cdktn/provider-awscc'

iamManagedPolicy.IamManagedPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.generateConfigForImport"></a>

```typescript
import { iamManagedPolicy } from '@cdktn/provider-awscc'

iamManagedPolicy.IamManagedPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IamManagedPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IamManagedPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IamManagedPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iam_managed_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IamManagedPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.attachmentCount">attachmentCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.createDate">createDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.defaultVersionId">defaultVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.isAttachable">isAttachable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.permissionsBoundaryUsageCount">permissionsBoundaryUsageCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.policyArn">policyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.updateDate">updateDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.groupsInput">groupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.managedPolicyNameInput">managedPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.policyDocumentInput">policyDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.rolesInput">rolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.usersInput">usersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.groups">groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.managedPolicyName">managedPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.policyDocument">policyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.roles">roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.users">users</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `attachmentCount`<sup>Required</sup> <a name="attachmentCount" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.attachmentCount"></a>

```typescript
public readonly attachmentCount: number;
```

- *Type:* number

---

##### `createDate`<sup>Required</sup> <a name="createDate" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.createDate"></a>

```typescript
public readonly createDate: string;
```

- *Type:* string

---

##### `defaultVersionId`<sup>Required</sup> <a name="defaultVersionId" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.defaultVersionId"></a>

```typescript
public readonly defaultVersionId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isAttachable`<sup>Required</sup> <a name="isAttachable" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.isAttachable"></a>

```typescript
public readonly isAttachable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `permissionsBoundaryUsageCount`<sup>Required</sup> <a name="permissionsBoundaryUsageCount" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.permissionsBoundaryUsageCount"></a>

```typescript
public readonly permissionsBoundaryUsageCount: number;
```

- *Type:* number

---

##### `policyArn`<sup>Required</sup> <a name="policyArn" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.policyArn"></a>

```typescript
public readonly policyArn: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `updateDate`<sup>Required</sup> <a name="updateDate" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.updateDate"></a>

```typescript
public readonly updateDate: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.groupsInput"></a>

```typescript
public readonly groupsInput: string[];
```

- *Type:* string[]

---

##### `managedPolicyNameInput`<sup>Optional</sup> <a name="managedPolicyNameInput" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.managedPolicyNameInput"></a>

```typescript
public readonly managedPolicyNameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `policyDocumentInput`<sup>Optional</sup> <a name="policyDocumentInput" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.policyDocumentInput"></a>

```typescript
public readonly policyDocumentInput: string;
```

- *Type:* string

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.rolesInput"></a>

```typescript
public readonly rolesInput: string[];
```

- *Type:* string[]

---

##### `usersInput`<sup>Optional</sup> <a name="usersInput" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.usersInput"></a>

```typescript
public readonly usersInput: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

---

##### `managedPolicyName`<sup>Required</sup> <a name="managedPolicyName" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.managedPolicyName"></a>

```typescript
public readonly managedPolicyName: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* string[]

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.users"></a>

```typescript
public readonly users: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamManagedPolicyConfig <a name="IamManagedPolicyConfig" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.Initializer"></a>

```typescript
import { iamManagedPolicy } from '@cdktn/provider-awscc'

const iamManagedPolicyConfig: iamManagedPolicy.IamManagedPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.policyDocument">policyDocument</a></code> | <code>string</code> | The JSON policy document that you want to use as the content for the new policy. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.description">description</a></code> | <code>string</code> | A friendly description of the policy. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.groups">groups</a></code> | <code>string[]</code> | The name (friendly name, not ARN) of the group to attach the policy to. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.managedPolicyName">managedPolicyName</a></code> | <code>string</code> | The friendly name of the policy. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.path">path</a></code> | <code>string</code> | The path for the policy. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.roles">roles</a></code> | <code>string[]</code> | The name (friendly name, not ARN) of the role to attach the policy to. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.users">users</a></code> | <code>string[]</code> | The name (friendly name, not ARN) of the IAM user to attach the policy to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

The JSON policy document that you want to use as the content for the new policy.

You must provide policies in JSON format in IAM. However, for CFN templates formatted in YAML, you can provide the policy in JSON or YAML format. CFN always converts a YAML policy to JSON format before submitting it to IAM.
 The maximum length of the policy document that you can pass in this operation, including whitespace, is listed below. To view the maximum character counts of a managed policy with no whitespaces, see [IAM and character quotas](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html#reference_iam-quotas-entity-length).
 To learn more about JSON policy grammar, see [Grammar of the IAM JSON policy language](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_grammar.html) in the *IAM User Guide*. 
 The [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex) used to validate this parameter is a string of characters consisting of the following:
  +  Any printable ASCII character ranging from the space character (``\u0020``) through the end of the ASCII character range
  +  The printable characters in the Basic Latin and Latin-1 Supplement character set (through ``\u00FF``)
  +  The special characters tab (``\u0009``), line feed (``\u000A``), and carriage return (``\u000D``)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iam_managed_policy#policy_document IamManagedPolicy#policy_document}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A friendly description of the policy.

Typically used to store information about the permissions defined in the policy. For example, "Grants access to production DynamoDB tables."
 The policy description is immutable. After a value is assigned, it cannot be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iam_managed_policy#description IamManagedPolicy#description}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

The name (friendly name, not ARN) of the group to attach the policy to.

This parameter allows (through its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iam_managed_policy#groups IamManagedPolicy#groups}

---

##### `managedPolicyName`<sup>Optional</sup> <a name="managedPolicyName" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.managedPolicyName"></a>

```typescript
public readonly managedPolicyName: string;
```

- *Type:* string

The friendly name of the policy.

If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
  If you specify a name, you must specify the ``CAPABILITY_NAMED_IAM`` value to acknowledge your template's capabilities. For more information, see [Acknowledging Resources in Templates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-capabilities).
  Naming an IAM resource can cause an unrecoverable error if you reuse the same template in multiple Regions. To prevent this, we recommend using ``Fn::Join`` and ``AWS::Region`` to create a Region-specific name, as in the following example: ``{"Fn::Join": ["", [{"Ref": "AWS::Region"}, {"Ref": "MyResourceName"}]]}``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iam_managed_policy#managed_policy_name IamManagedPolicy#managed_policy_name}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The path for the policy.

For more information about paths, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
 This parameter is optional. If it is not included, it defaults to a slash (/).
 This parameter allows (through its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (``\u0021``) through the DEL character (``\u007F``), including most punctuation characters, digits, and upper and lowercased letters.
  You cannot use an asterisk (*) in the path name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iam_managed_policy#path IamManagedPolicy#path}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* string[]

The name (friendly name, not ARN) of the role to attach the policy to.

This parameter allows (per its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
  If an external policy (such as ``AWS::IAM::Policy`` or ``AWS::IAM::ManagedPolicy``) has a ``Ref`` to a role and if a resource (such as ``AWS::ECS::Service``) also has a ``Ref`` to the same role, add a ``DependsOn`` attribute to the resource to make the resource depend on the external policy. This dependency ensures that the role's policy is available throughout the resource's lifecycle. For example, when you delete a stack with an ``AWS::ECS::Service`` resource, the ``DependsOn`` attribute ensures that CFN deletes the ``AWS::ECS::Service`` resource before deleting its role's policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iam_managed_policy#roles IamManagedPolicy#roles}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.users"></a>

```typescript
public readonly users: string[];
```

- *Type:* string[]

The name (friendly name, not ARN) of the IAM user to attach the policy to.

This parameter allows (through its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iam_managed_policy#users IamManagedPolicy#users}

---



