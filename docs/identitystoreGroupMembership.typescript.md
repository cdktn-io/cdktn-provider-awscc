# `identitystoreGroupMembership` Submodule <a name="`identitystoreGroupMembership` Submodule" id="@cdktn/provider-awscc.identitystoreGroupMembership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentitystoreGroupMembership <a name="IdentitystoreGroupMembership" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_group_membership awscc_identitystore_group_membership}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer"></a>

```typescript
import { identitystoreGroupMembership } from '@cdktn/provider-awscc'

new identitystoreGroupMembership.IdentitystoreGroupMembership(scope: Construct, id: string, config: IdentitystoreGroupMembershipConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig">IdentitystoreGroupMembershipConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig">IdentitystoreGroupMembershipConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.putMemberId">putMemberId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMemberId` <a name="putMemberId" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.putMemberId"></a>

```typescript
public putMemberId(value: IdentitystoreGroupMembershipMemberId): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.putMemberId.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberId">IdentitystoreGroupMembershipMemberId</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IdentitystoreGroupMembership resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.isConstruct"></a>

```typescript
import { identitystoreGroupMembership } from '@cdktn/provider-awscc'

identitystoreGroupMembership.IdentitystoreGroupMembership.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.isTerraformElement"></a>

```typescript
import { identitystoreGroupMembership } from '@cdktn/provider-awscc'

identitystoreGroupMembership.IdentitystoreGroupMembership.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.isTerraformResource"></a>

```typescript
import { identitystoreGroupMembership } from '@cdktn/provider-awscc'

identitystoreGroupMembership.IdentitystoreGroupMembership.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.generateConfigForImport"></a>

```typescript
import { identitystoreGroupMembership } from '@cdktn/provider-awscc'

identitystoreGroupMembership.IdentitystoreGroupMembership.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IdentitystoreGroupMembership resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentitystoreGroupMembership to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentitystoreGroupMembership that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_group_membership#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IdentitystoreGroupMembership to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.memberId">memberId</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference">IdentitystoreGroupMembershipMemberIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.membershipId">membershipId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.identityStoreIdInput">identityStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.memberIdInput">memberIdInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberId">IdentitystoreGroupMembershipMemberId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.identityStoreId">identityStoreId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `memberId`<sup>Required</sup> <a name="memberId" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.memberId"></a>

```typescript
public readonly memberId: IdentitystoreGroupMembershipMemberIdOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference">IdentitystoreGroupMembershipMemberIdOutputReference</a>

---

##### `membershipId`<sup>Required</sup> <a name="membershipId" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.membershipId"></a>

```typescript
public readonly membershipId: string;
```

- *Type:* string

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `identityStoreIdInput`<sup>Optional</sup> <a name="identityStoreIdInput" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.identityStoreIdInput"></a>

```typescript
public readonly identityStoreIdInput: string;
```

- *Type:* string

---

##### `memberIdInput`<sup>Optional</sup> <a name="memberIdInput" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.memberIdInput"></a>

```typescript
public readonly memberIdInput: IResolvable | IdentitystoreGroupMembershipMemberId;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberId">IdentitystoreGroupMembershipMemberId</a>

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `identityStoreId`<sup>Required</sup> <a name="identityStoreId" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.identityStoreId"></a>

```typescript
public readonly identityStoreId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentitystoreGroupMembershipConfig <a name="IdentitystoreGroupMembershipConfig" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.Initializer"></a>

```typescript
import { identitystoreGroupMembership } from '@cdktn/provider-awscc'

const identitystoreGroupMembershipConfig: identitystoreGroupMembership.IdentitystoreGroupMembershipConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.groupId">groupId</a></code> | <code>string</code> | The unique identifier for a group in the identity store. |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.identityStoreId">identityStoreId</a></code> | <code>string</code> | The globally unique identifier for the identity store. |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.memberId">memberId</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberId">IdentitystoreGroupMembershipMemberId</a></code> | An object containing the identifier of a group member. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

The unique identifier for a group in the identity store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_group_membership#group_id IdentitystoreGroupMembership#group_id}

---

##### `identityStoreId`<sup>Required</sup> <a name="identityStoreId" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.identityStoreId"></a>

```typescript
public readonly identityStoreId: string;
```

- *Type:* string

The globally unique identifier for the identity store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_group_membership#identity_store_id IdentitystoreGroupMembership#identity_store_id}

---

##### `memberId`<sup>Required</sup> <a name="memberId" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.memberId"></a>

```typescript
public readonly memberId: IdentitystoreGroupMembershipMemberId;
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberId">IdentitystoreGroupMembershipMemberId</a>

An object containing the identifier of a group member.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_group_membership#member_id IdentitystoreGroupMembership#member_id}

---

### IdentitystoreGroupMembershipMemberId <a name="IdentitystoreGroupMembershipMemberId" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberId.Initializer"></a>

```typescript
import { identitystoreGroupMembership } from '@cdktn/provider-awscc'

const identitystoreGroupMembershipMemberId: identitystoreGroupMembership.IdentitystoreGroupMembershipMemberId = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberId.property.userId">userId</a></code> | <code>string</code> | The identifier for a user in the identity store. |

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberId.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

The identifier for a user in the identity store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_group_membership#user_id IdentitystoreGroupMembership#user_id}

---

## Classes <a name="Classes" id="Classes"></a>

### IdentitystoreGroupMembershipMemberIdOutputReference <a name="IdentitystoreGroupMembershipMemberIdOutputReference" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.Initializer"></a>

```typescript
import { identitystoreGroupMembership } from '@cdktn/provider-awscc'

new identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.property.userIdInput">userIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberId">IdentitystoreGroupMembershipMemberId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentitystoreGroupMembershipMemberId;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberId">IdentitystoreGroupMembershipMemberId</a>

---



