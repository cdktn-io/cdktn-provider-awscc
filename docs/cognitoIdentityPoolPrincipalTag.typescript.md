# `cognitoIdentityPoolPrincipalTag` Submodule <a name="`cognitoIdentityPoolPrincipalTag` Submodule" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoIdentityPoolPrincipalTag <a name="CognitoIdentityPoolPrincipalTag" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool_principal_tag awscc_cognito_identity_pool_principal_tag}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer"></a>

```typescript
import { cognitoIdentityPoolPrincipalTag } from '@cdktn/provider-awscc'

new cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag(scope: Construct, id: string, config: CognitoIdentityPoolPrincipalTagConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig">CognitoIdentityPoolPrincipalTagConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig">CognitoIdentityPoolPrincipalTagConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.resetPrincipalTags">resetPrincipalTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.resetUseDefaults">resetUseDefaults</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetPrincipalTags` <a name="resetPrincipalTags" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.resetPrincipalTags"></a>

```typescript
public resetPrincipalTags(): void
```

##### `resetUseDefaults` <a name="resetUseDefaults" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.resetUseDefaults"></a>

```typescript
public resetUseDefaults(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CognitoIdentityPoolPrincipalTag resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isConstruct"></a>

```typescript
import { cognitoIdentityPoolPrincipalTag } from '@cdktn/provider-awscc'

cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isTerraformElement"></a>

```typescript
import { cognitoIdentityPoolPrincipalTag } from '@cdktn/provider-awscc'

cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isTerraformResource"></a>

```typescript
import { cognitoIdentityPoolPrincipalTag } from '@cdktn/provider-awscc'

cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.generateConfigForImport"></a>

```typescript
import { cognitoIdentityPoolPrincipalTag } from '@cdktn/provider-awscc'

cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CognitoIdentityPoolPrincipalTag resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CognitoIdentityPoolPrincipalTag to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CognitoIdentityPoolPrincipalTag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool_principal_tag#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CognitoIdentityPoolPrincipalTag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.identityPoolIdInput">identityPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.identityProviderNameInput">identityProviderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.principalTagsInput">principalTagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.useDefaultsInput">useDefaultsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.identityPoolId">identityPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.identityProviderName">identityProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.principalTags">principalTags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.useDefaults">useDefaults</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identityPoolIdInput`<sup>Optional</sup> <a name="identityPoolIdInput" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.identityPoolIdInput"></a>

```typescript
public readonly identityPoolIdInput: string;
```

- *Type:* string

---

##### `identityProviderNameInput`<sup>Optional</sup> <a name="identityProviderNameInput" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.identityProviderNameInput"></a>

```typescript
public readonly identityProviderNameInput: string;
```

- *Type:* string

---

##### `principalTagsInput`<sup>Optional</sup> <a name="principalTagsInput" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.principalTagsInput"></a>

```typescript
public readonly principalTagsInput: string;
```

- *Type:* string

---

##### `useDefaultsInput`<sup>Optional</sup> <a name="useDefaultsInput" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.useDefaultsInput"></a>

```typescript
public readonly useDefaultsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.identityPoolId"></a>

```typescript
public readonly identityPoolId: string;
```

- *Type:* string

---

##### `identityProviderName`<sup>Required</sup> <a name="identityProviderName" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.identityProviderName"></a>

```typescript
public readonly identityProviderName: string;
```

- *Type:* string

---

##### `principalTags`<sup>Required</sup> <a name="principalTags" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.principalTags"></a>

```typescript
public readonly principalTags: string;
```

- *Type:* string

---

##### `useDefaults`<sup>Required</sup> <a name="useDefaults" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.useDefaults"></a>

```typescript
public readonly useDefaults: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoIdentityPoolPrincipalTagConfig <a name="CognitoIdentityPoolPrincipalTagConfig" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.Initializer"></a>

```typescript
import { cognitoIdentityPoolPrincipalTag } from '@cdktn/provider-awscc'

const cognitoIdentityPoolPrincipalTagConfig: cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.identityPoolId">identityPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool_principal_tag#identity_pool_id CognitoIdentityPoolPrincipalTag#identity_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.identityProviderName">identityProviderName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool_principal_tag#identity_provider_name CognitoIdentityPoolPrincipalTag#identity_provider_name}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.principalTags">principalTags</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool_principal_tag#principal_tags CognitoIdentityPoolPrincipalTag#principal_tags}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.useDefaults">useDefaults</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool_principal_tag#use_defaults CognitoIdentityPoolPrincipalTag#use_defaults}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.identityPoolId"></a>

```typescript
public readonly identityPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool_principal_tag#identity_pool_id CognitoIdentityPoolPrincipalTag#identity_pool_id}.

---

##### `identityProviderName`<sup>Required</sup> <a name="identityProviderName" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.identityProviderName"></a>

```typescript
public readonly identityProviderName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool_principal_tag#identity_provider_name CognitoIdentityPoolPrincipalTag#identity_provider_name}.

---

##### `principalTags`<sup>Optional</sup> <a name="principalTags" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.principalTags"></a>

```typescript
public readonly principalTags: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool_principal_tag#principal_tags CognitoIdentityPoolPrincipalTag#principal_tags}.

---

##### `useDefaults`<sup>Optional</sup> <a name="useDefaults" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.useDefaults"></a>

```typescript
public readonly useDefaults: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool_principal_tag#use_defaults CognitoIdentityPoolPrincipalTag#use_defaults}.

---



