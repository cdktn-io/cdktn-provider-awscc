# `cognitoUserPoolClientSessionConfigurationAttachment` Submodule <a name="`cognitoUserPoolClientSessionConfigurationAttachment` Submodule" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUserPoolClientSessionConfigurationAttachment <a name="CognitoUserPoolClientSessionConfigurationAttachment" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_client_session_configuration_attachment awscc_cognito_user_pool_client_session_configuration_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer"></a>

```typescript
import { cognitoUserPoolClientSessionConfigurationAttachment } from '@cdktn/provider-awscc'

new cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment(scope: Construct, id: string, config: CognitoUserPoolClientSessionConfigurationAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig">CognitoUserPoolClientSessionConfigurationAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig">CognitoUserPoolClientSessionConfigurationAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.putSsoSession">putSsoSession</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSsoSession` <a name="putSsoSession" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.putSsoSession"></a>

```typescript
public putSsoSession(value: CognitoUserPoolClientSessionConfigurationAttachmentSsoSession): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.putSsoSession.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSession">CognitoUserPoolClientSessionConfigurationAttachmentSsoSession</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CognitoUserPoolClientSessionConfigurationAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.isConstruct"></a>

```typescript
import { cognitoUserPoolClientSessionConfigurationAttachment } from '@cdktn/provider-awscc'

cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.isTerraformElement"></a>

```typescript
import { cognitoUserPoolClientSessionConfigurationAttachment } from '@cdktn/provider-awscc'

cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.isTerraformResource"></a>

```typescript
import { cognitoUserPoolClientSessionConfigurationAttachment } from '@cdktn/provider-awscc'

cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.generateConfigForImport"></a>

```typescript
import { cognitoUserPoolClientSessionConfigurationAttachment } from '@cdktn/provider-awscc'

cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CognitoUserPoolClientSessionConfigurationAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CognitoUserPoolClientSessionConfigurationAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CognitoUserPoolClientSessionConfigurationAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_client_session_configuration_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CognitoUserPoolClientSessionConfigurationAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.ssoSession">ssoSession</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference">CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.ssoSessionInput">ssoSessionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSession">CognitoUserPoolClientSessionConfigurationAttachmentSsoSession</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.userPoolIdInput">userPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.userPoolId">userPoolId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ssoSession`<sup>Required</sup> <a name="ssoSession" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.ssoSession"></a>

```typescript
public readonly ssoSession: CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference">CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference</a>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `ssoSessionInput`<sup>Optional</sup> <a name="ssoSessionInput" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.ssoSessionInput"></a>

```typescript
public readonly ssoSessionInput: IResolvable | CognitoUserPoolClientSessionConfigurationAttachmentSsoSession;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSession">CognitoUserPoolClientSessionConfigurationAttachmentSsoSession</a>

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.userPoolIdInput"></a>

```typescript
public readonly userPoolIdInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserPoolClientSessionConfigurationAttachmentConfig <a name="CognitoUserPoolClientSessionConfigurationAttachmentConfig" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.Initializer"></a>

```typescript
import { cognitoUserPoolClientSessionConfigurationAttachment } from '@cdktn/provider-awscc'

const cognitoUserPoolClientSessionConfigurationAttachmentConfig: cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.clientId">clientId</a></code> | <code>string</code> | The ID of the app client. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.ssoSession">ssoSession</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSession">CognitoUserPoolClientSessionConfigurationAttachmentSsoSession</a></code> | Managed login single sign-on session settings for the app client. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.userPoolId">userPoolId</a></code> | <code>string</code> | The ID of the user pool. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The ID of the app client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_client_session_configuration_attachment#client_id CognitoUserPoolClientSessionConfigurationAttachment#client_id}

---

##### `ssoSession`<sup>Required</sup> <a name="ssoSession" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.ssoSession"></a>

```typescript
public readonly ssoSession: CognitoUserPoolClientSessionConfigurationAttachmentSsoSession;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSession">CognitoUserPoolClientSessionConfigurationAttachmentSsoSession</a>

Managed login single sign-on session settings for the app client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_client_session_configuration_attachment#sso_session CognitoUserPoolClientSessionConfigurationAttachment#sso_session}

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

The ID of the user pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_client_session_configuration_attachment#user_pool_id CognitoUserPoolClientSessionConfigurationAttachment#user_pool_id}

---

### CognitoUserPoolClientSessionConfigurationAttachmentSsoSession <a name="CognitoUserPoolClientSessionConfigurationAttachmentSsoSession" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSession"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSession.Initializer"></a>

```typescript
import { cognitoUserPoolClientSessionConfigurationAttachment } from '@cdktn/provider-awscc'

const cognitoUserPoolClientSessionConfigurationAttachmentSsoSession: cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSession = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSession.property.maxValidityMinutes">maxValidityMinutes</a></code> | <code>number</code> | The maximum time in minutes since the last authentication during which this app client can reuse an existing managed login SSO session without asking the user to sign in again. |

---

##### `maxValidityMinutes`<sup>Required</sup> <a name="maxValidityMinutes" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSession.property.maxValidityMinutes"></a>

```typescript
public readonly maxValidityMinutes: number;
```

- *Type:* number

The maximum time in minutes since the last authentication during which this app client can reuse an existing managed login SSO session without asking the user to sign in again.

0 means the app client always asks the user to sign in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_client_session_configuration_attachment#max_validity_minutes CognitoUserPoolClientSessionConfigurationAttachment#max_validity_minutes}

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference <a name="CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.Initializer"></a>

```typescript
import { cognitoUserPoolClientSessionConfigurationAttachment } from '@cdktn/provider-awscc'

new cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.maxValidityMinutesInput">maxValidityMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.maxValidityMinutes">maxValidityMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSession">CognitoUserPoolClientSessionConfigurationAttachmentSsoSession</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxValidityMinutesInput`<sup>Optional</sup> <a name="maxValidityMinutesInput" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.maxValidityMinutesInput"></a>

```typescript
public readonly maxValidityMinutesInput: number;
```

- *Type:* number

---

##### `maxValidityMinutes`<sup>Required</sup> <a name="maxValidityMinutes" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.maxValidityMinutes"></a>

```typescript
public readonly maxValidityMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoUserPoolClientSessionConfigurationAttachmentSsoSession;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSession">CognitoUserPoolClientSessionConfigurationAttachmentSsoSession</a>

---



