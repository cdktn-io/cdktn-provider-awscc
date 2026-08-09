# `ssoPermissionSet` Submodule <a name="`ssoPermissionSet` Submodule" id="@cdktn/provider-awscc.ssoPermissionSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsoPermissionSet <a name="SsoPermissionSet" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_permission_set awscc_sso_permission_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer"></a>

```typescript
import { ssoPermissionSet } from '@cdktn/provider-awscc'

new ssoPermissionSet.SsoPermissionSet(scope: Construct, id: string, config: SsoPermissionSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig">SsoPermissionSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig">SsoPermissionSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.putCustomerManagedPolicyReferences">putCustomerManagedPolicyReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.putPermissionsBoundary">putPermissionsBoundary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetCustomerManagedPolicyReferences">resetCustomerManagedPolicyReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetInlinePolicy">resetInlinePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetManagedPolicies">resetManagedPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetPermissionsBoundary">resetPermissionsBoundary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetRelayStateType">resetRelayStateType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetSessionDuration">resetSessionDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomerManagedPolicyReferences` <a name="putCustomerManagedPolicyReferences" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.putCustomerManagedPolicyReferences"></a>

```typescript
public putCustomerManagedPolicyReferences(value: IResolvable | SsoPermissionSetCustomerManagedPolicyReferences[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.putCustomerManagedPolicyReferences.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences">SsoPermissionSetCustomerManagedPolicyReferences</a>[]

---

##### `putPermissionsBoundary` <a name="putPermissionsBoundary" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.putPermissionsBoundary"></a>

```typescript
public putPermissionsBoundary(value: SsoPermissionSetPermissionsBoundary): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.putPermissionsBoundary.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary">SsoPermissionSetPermissionsBoundary</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.putTags"></a>

```typescript
public putTags(value: IResolvable | SsoPermissionSetTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags">SsoPermissionSetTags</a>[]

---

##### `resetCustomerManagedPolicyReferences` <a name="resetCustomerManagedPolicyReferences" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetCustomerManagedPolicyReferences"></a>

```typescript
public resetCustomerManagedPolicyReferences(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetInlinePolicy` <a name="resetInlinePolicy" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetInlinePolicy"></a>

```typescript
public resetInlinePolicy(): void
```

##### `resetManagedPolicies` <a name="resetManagedPolicies" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetManagedPolicies"></a>

```typescript
public resetManagedPolicies(): void
```

##### `resetPermissionsBoundary` <a name="resetPermissionsBoundary" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetPermissionsBoundary"></a>

```typescript
public resetPermissionsBoundary(): void
```

##### `resetRelayStateType` <a name="resetRelayStateType" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetRelayStateType"></a>

```typescript
public resetRelayStateType(): void
```

##### `resetSessionDuration` <a name="resetSessionDuration" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetSessionDuration"></a>

```typescript
public resetSessionDuration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SsoPermissionSet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.isConstruct"></a>

```typescript
import { ssoPermissionSet } from '@cdktn/provider-awscc'

ssoPermissionSet.SsoPermissionSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.isTerraformElement"></a>

```typescript
import { ssoPermissionSet } from '@cdktn/provider-awscc'

ssoPermissionSet.SsoPermissionSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.isTerraformResource"></a>

```typescript
import { ssoPermissionSet } from '@cdktn/provider-awscc'

ssoPermissionSet.SsoPermissionSet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.generateConfigForImport"></a>

```typescript
import { ssoPermissionSet } from '@cdktn/provider-awscc'

ssoPermissionSet.SsoPermissionSet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SsoPermissionSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsoPermissionSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsoPermissionSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_permission_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SsoPermissionSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.customerManagedPolicyReferences">customerManagedPolicyReferences</a></code> | <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList">SsoPermissionSetCustomerManagedPolicyReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.permissionsBoundary">permissionsBoundary</a></code> | <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference">SsoPermissionSetPermissionsBoundaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.permissionSetArn">permissionSetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList">SsoPermissionSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.customerManagedPolicyReferencesInput">customerManagedPolicyReferencesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences">SsoPermissionSetCustomerManagedPolicyReferences</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.inlinePolicyInput">inlinePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.instanceArnInput">instanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.managedPoliciesInput">managedPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.permissionsBoundaryInput">permissionsBoundaryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary">SsoPermissionSetPermissionsBoundary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.relayStateTypeInput">relayStateTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.sessionDurationInput">sessionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags">SsoPermissionSetTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.inlinePolicy">inlinePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.managedPolicies">managedPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.relayStateType">relayStateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.sessionDuration">sessionDuration</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `customerManagedPolicyReferences`<sup>Required</sup> <a name="customerManagedPolicyReferences" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.customerManagedPolicyReferences"></a>

```typescript
public readonly customerManagedPolicyReferences: SsoPermissionSetCustomerManagedPolicyReferencesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList">SsoPermissionSetCustomerManagedPolicyReferencesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `permissionsBoundary`<sup>Required</sup> <a name="permissionsBoundary" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: SsoPermissionSetPermissionsBoundaryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference">SsoPermissionSetPermissionsBoundaryOutputReference</a>

---

##### `permissionSetArn`<sup>Required</sup> <a name="permissionSetArn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.permissionSetArn"></a>

```typescript
public readonly permissionSetArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.tags"></a>

```typescript
public readonly tags: SsoPermissionSetTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList">SsoPermissionSetTagsList</a>

---

##### `customerManagedPolicyReferencesInput`<sup>Optional</sup> <a name="customerManagedPolicyReferencesInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.customerManagedPolicyReferencesInput"></a>

```typescript
public readonly customerManagedPolicyReferencesInput: IResolvable | SsoPermissionSetCustomerManagedPolicyReferences[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences">SsoPermissionSetCustomerManagedPolicyReferences</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `inlinePolicyInput`<sup>Optional</sup> <a name="inlinePolicyInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.inlinePolicyInput"></a>

```typescript
public readonly inlinePolicyInput: string;
```

- *Type:* string

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.instanceArnInput"></a>

```typescript
public readonly instanceArnInput: string;
```

- *Type:* string

---

##### `managedPoliciesInput`<sup>Optional</sup> <a name="managedPoliciesInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.managedPoliciesInput"></a>

```typescript
public readonly managedPoliciesInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `permissionsBoundaryInput`<sup>Optional</sup> <a name="permissionsBoundaryInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.permissionsBoundaryInput"></a>

```typescript
public readonly permissionsBoundaryInput: IResolvable | SsoPermissionSetPermissionsBoundary;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary">SsoPermissionSetPermissionsBoundary</a>

---

##### `relayStateTypeInput`<sup>Optional</sup> <a name="relayStateTypeInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.relayStateTypeInput"></a>

```typescript
public readonly relayStateTypeInput: string;
```

- *Type:* string

---

##### `sessionDurationInput`<sup>Optional</sup> <a name="sessionDurationInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.sessionDurationInput"></a>

```typescript
public readonly sessionDurationInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SsoPermissionSetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags">SsoPermissionSetTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `inlinePolicy`<sup>Required</sup> <a name="inlinePolicy" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.inlinePolicy"></a>

```typescript
public readonly inlinePolicy: string;
```

- *Type:* string

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `managedPolicies`<sup>Required</sup> <a name="managedPolicies" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.managedPolicies"></a>

```typescript
public readonly managedPolicies: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `relayStateType`<sup>Required</sup> <a name="relayStateType" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.relayStateType"></a>

```typescript
public readonly relayStateType: string;
```

- *Type:* string

---

##### `sessionDuration`<sup>Required</sup> <a name="sessionDuration" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.sessionDuration"></a>

```typescript
public readonly sessionDuration: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsoPermissionSetConfig <a name="SsoPermissionSetConfig" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.Initializer"></a>

```typescript
import { ssoPermissionSet } from '@cdktn/provider-awscc'

const ssoPermissionSetConfig: ssoPermissionSet.SsoPermissionSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.instanceArn">instanceArn</a></code> | <code>string</code> | The sso instance arn that the permission set is owned. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.name">name</a></code> | <code>string</code> | The name you want to assign to this permission set. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.customerManagedPolicyReferences">customerManagedPolicyReferences</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences">SsoPermissionSetCustomerManagedPolicyReferences</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_permission_set#customer_managed_policy_references SsoPermissionSet#customer_managed_policy_references}. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.description">description</a></code> | <code>string</code> | The permission set description. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.inlinePolicy">inlinePolicy</a></code> | <code>string</code> | The inline policy to put in permission set. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.managedPolicies">managedPolicies</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_permission_set#managed_policies SsoPermissionSet#managed_policies}. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.permissionsBoundary">permissionsBoundary</a></code> | <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary">SsoPermissionSetPermissionsBoundary</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_permission_set#permissions_boundary SsoPermissionSet#permissions_boundary}. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.relayStateType">relayStateType</a></code> | <code>string</code> | The relay state URL that redirect links to any service in the AWS Management Console. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.sessionDuration">sessionDuration</a></code> | <code>string</code> | The length of time that a user can be signed in to an AWS account. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags">SsoPermissionSetTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_permission_set#tags SsoPermissionSet#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

The sso instance arn that the permission set is owned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_permission_set#instance_arn SsoPermissionSet#instance_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name you want to assign to this permission set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_permission_set#name SsoPermissionSet#name}

---

##### `customerManagedPolicyReferences`<sup>Optional</sup> <a name="customerManagedPolicyReferences" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.customerManagedPolicyReferences"></a>

```typescript
public readonly customerManagedPolicyReferences: IResolvable | SsoPermissionSetCustomerManagedPolicyReferences[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences">SsoPermissionSetCustomerManagedPolicyReferences</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_permission_set#customer_managed_policy_references SsoPermissionSet#customer_managed_policy_references}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The permission set description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_permission_set#description SsoPermissionSet#description}

---

##### `inlinePolicy`<sup>Optional</sup> <a name="inlinePolicy" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.inlinePolicy"></a>

```typescript
public readonly inlinePolicy: string;
```

- *Type:* string

The inline policy to put in permission set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_permission_set#inline_policy SsoPermissionSet#inline_policy}

---

##### `managedPolicies`<sup>Optional</sup> <a name="managedPolicies" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.managedPolicies"></a>

```typescript
public readonly managedPolicies: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_permission_set#managed_policies SsoPermissionSet#managed_policies}.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: SsoPermissionSetPermissionsBoundary;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary">SsoPermissionSetPermissionsBoundary</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_permission_set#permissions_boundary SsoPermissionSet#permissions_boundary}.

---

##### `relayStateType`<sup>Optional</sup> <a name="relayStateType" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.relayStateType"></a>

```typescript
public readonly relayStateType: string;
```

- *Type:* string

The relay state URL that redirect links to any service in the AWS Management Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_permission_set#relay_state_type SsoPermissionSet#relay_state_type}

---

##### `sessionDuration`<sup>Optional</sup> <a name="sessionDuration" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.sessionDuration"></a>

```typescript
public readonly sessionDuration: string;
```

- *Type:* string

The length of time that a user can be signed in to an AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_permission_set#session_duration SsoPermissionSet#session_duration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SsoPermissionSetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags">SsoPermissionSetTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_permission_set#tags SsoPermissionSet#tags}.

---

### SsoPermissionSetCustomerManagedPolicyReferences <a name="SsoPermissionSetCustomerManagedPolicyReferences" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences.Initializer"></a>

```typescript
import { ssoPermissionSet } from '@cdktn/provider-awscc'

const ssoPermissionSetCustomerManagedPolicyReferences: ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_permission_set#name SsoPermissionSet#name}. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_permission_set#path SsoPermissionSet#path}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_permission_set#name SsoPermissionSet#name}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_permission_set#path SsoPermissionSet#path}.

---

### SsoPermissionSetPermissionsBoundary <a name="SsoPermissionSetPermissionsBoundary" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary.Initializer"></a>

```typescript
import { ssoPermissionSet } from '@cdktn/provider-awscc'

const ssoPermissionSetPermissionsBoundary: ssoPermissionSet.SsoPermissionSetPermissionsBoundary = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary.property.customerManagedPolicyReference">customerManagedPolicyReference</a></code> | <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference">SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_permission_set#customer_managed_policy_reference SsoPermissionSet#customer_managed_policy_reference}. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary.property.managedPolicyArn">managedPolicyArn</a></code> | <code>string</code> | The managed policy to attach. |

---

##### `customerManagedPolicyReference`<sup>Optional</sup> <a name="customerManagedPolicyReference" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary.property.customerManagedPolicyReference"></a>

```typescript
public readonly customerManagedPolicyReference: SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference">SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_permission_set#customer_managed_policy_reference SsoPermissionSet#customer_managed_policy_reference}.

---

##### `managedPolicyArn`<sup>Optional</sup> <a name="managedPolicyArn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary.property.managedPolicyArn"></a>

```typescript
public readonly managedPolicyArn: string;
```

- *Type:* string

The managed policy to attach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_permission_set#managed_policy_arn SsoPermissionSet#managed_policy_arn}

---

### SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference <a name="SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference.Initializer"></a>

```typescript
import { ssoPermissionSet } from '@cdktn/provider-awscc'

const ssoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference: ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_permission_set#name SsoPermissionSet#name}. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_permission_set#path SsoPermissionSet#path}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_permission_set#name SsoPermissionSet#name}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_permission_set#path SsoPermissionSet#path}.

---

### SsoPermissionSetTags <a name="SsoPermissionSetTags" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags.Initializer"></a>

```typescript
import { ssoPermissionSet } from '@cdktn/provider-awscc'

const ssoPermissionSetTags: ssoPermissionSet.SsoPermissionSetTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_permission_set#key SsoPermissionSet#key}. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_permission_set#value SsoPermissionSet#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_permission_set#key SsoPermissionSet#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sso_permission_set#value SsoPermissionSet#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsoPermissionSetCustomerManagedPolicyReferencesList <a name="SsoPermissionSetCustomerManagedPolicyReferencesList" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.Initializer"></a>

```typescript
import { ssoPermissionSet } from '@cdktn/provider-awscc'

new ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.get"></a>

```typescript
public get(index: number): SsoPermissionSetCustomerManagedPolicyReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences">SsoPermissionSetCustomerManagedPolicyReferences</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsoPermissionSetCustomerManagedPolicyReferences[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences">SsoPermissionSetCustomerManagedPolicyReferences</a>[]

---


### SsoPermissionSetCustomerManagedPolicyReferencesOutputReference <a name="SsoPermissionSetCustomerManagedPolicyReferencesOutputReference" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer"></a>

```typescript
import { ssoPermissionSet } from '@cdktn/provider-awscc'

new ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences">SsoPermissionSetCustomerManagedPolicyReferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsoPermissionSetCustomerManagedPolicyReferences;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences">SsoPermissionSetCustomerManagedPolicyReferences</a>

---


### SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference <a name="SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.Initializer"></a>

```typescript
import { ssoPermissionSet } from '@cdktn/provider-awscc'

new ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference">SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference">SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference</a>

---


### SsoPermissionSetPermissionsBoundaryOutputReference <a name="SsoPermissionSetPermissionsBoundaryOutputReference" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.Initializer"></a>

```typescript
import { ssoPermissionSet } from '@cdktn/provider-awscc'

new ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.putCustomerManagedPolicyReference">putCustomerManagedPolicyReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.resetCustomerManagedPolicyReference">resetCustomerManagedPolicyReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.resetManagedPolicyArn">resetManagedPolicyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomerManagedPolicyReference` <a name="putCustomerManagedPolicyReference" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.putCustomerManagedPolicyReference"></a>

```typescript
public putCustomerManagedPolicyReference(value: SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.putCustomerManagedPolicyReference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference">SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference</a>

---

##### `resetCustomerManagedPolicyReference` <a name="resetCustomerManagedPolicyReference" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.resetCustomerManagedPolicyReference"></a>

```typescript
public resetCustomerManagedPolicyReference(): void
```

##### `resetManagedPolicyArn` <a name="resetManagedPolicyArn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.resetManagedPolicyArn"></a>

```typescript
public resetManagedPolicyArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.customerManagedPolicyReference">customerManagedPolicyReference</a></code> | <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference">SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.customerManagedPolicyReferenceInput">customerManagedPolicyReferenceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference">SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.managedPolicyArnInput">managedPolicyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.managedPolicyArn">managedPolicyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary">SsoPermissionSetPermissionsBoundary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerManagedPolicyReference`<sup>Required</sup> <a name="customerManagedPolicyReference" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.customerManagedPolicyReference"></a>

```typescript
public readonly customerManagedPolicyReference: SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference">SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference</a>

---

##### `customerManagedPolicyReferenceInput`<sup>Optional</sup> <a name="customerManagedPolicyReferenceInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.customerManagedPolicyReferenceInput"></a>

```typescript
public readonly customerManagedPolicyReferenceInput: IResolvable | SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference">SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference</a>

---

##### `managedPolicyArnInput`<sup>Optional</sup> <a name="managedPolicyArnInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.managedPolicyArnInput"></a>

```typescript
public readonly managedPolicyArnInput: string;
```

- *Type:* string

---

##### `managedPolicyArn`<sup>Required</sup> <a name="managedPolicyArn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.managedPolicyArn"></a>

```typescript
public readonly managedPolicyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsoPermissionSetPermissionsBoundary;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary">SsoPermissionSetPermissionsBoundary</a>

---


### SsoPermissionSetTagsList <a name="SsoPermissionSetTagsList" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.Initializer"></a>

```typescript
import { ssoPermissionSet } from '@cdktn/provider-awscc'

new ssoPermissionSet.SsoPermissionSetTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.get"></a>

```typescript
public get(index: number): SsoPermissionSetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags">SsoPermissionSetTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsoPermissionSetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags">SsoPermissionSetTags</a>[]

---


### SsoPermissionSetTagsOutputReference <a name="SsoPermissionSetTagsOutputReference" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.Initializer"></a>

```typescript
import { ssoPermissionSet } from '@cdktn/provider-awscc'

new ssoPermissionSet.SsoPermissionSetTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags">SsoPermissionSetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsoPermissionSetTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags">SsoPermissionSetTags</a>

---



