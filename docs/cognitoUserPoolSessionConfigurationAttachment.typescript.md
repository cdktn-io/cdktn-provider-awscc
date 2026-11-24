# `cognitoUserPoolSessionConfigurationAttachment` Submodule <a name="`cognitoUserPoolSessionConfigurationAttachment` Submodule" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUserPoolSessionConfigurationAttachment <a name="CognitoUserPoolSessionConfigurationAttachment" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_session_configuration_attachment awscc_cognito_user_pool_session_configuration_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer"></a>

```typescript
import { cognitoUserPoolSessionConfigurationAttachment } from '@cdktn/provider-awscc'

new cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment(scope: Construct, id: string, config: CognitoUserPoolSessionConfigurationAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig">CognitoUserPoolSessionConfigurationAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig">CognitoUserPoolSessionConfigurationAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.putTokenSession">putTokenSession</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTokenSession` <a name="putTokenSession" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.putTokenSession"></a>

```typescript
public putTokenSession(value: CognitoUserPoolSessionConfigurationAttachmentTokenSession): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.putTokenSession.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSession">CognitoUserPoolSessionConfigurationAttachmentTokenSession</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CognitoUserPoolSessionConfigurationAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.isConstruct"></a>

```typescript
import { cognitoUserPoolSessionConfigurationAttachment } from '@cdktn/provider-awscc'

cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.isTerraformElement"></a>

```typescript
import { cognitoUserPoolSessionConfigurationAttachment } from '@cdktn/provider-awscc'

cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.isTerraformResource"></a>

```typescript
import { cognitoUserPoolSessionConfigurationAttachment } from '@cdktn/provider-awscc'

cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.generateConfigForImport"></a>

```typescript
import { cognitoUserPoolSessionConfigurationAttachment } from '@cdktn/provider-awscc'

cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CognitoUserPoolSessionConfigurationAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CognitoUserPoolSessionConfigurationAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CognitoUserPoolSessionConfigurationAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_session_configuration_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CognitoUserPoolSessionConfigurationAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.tokenSession">tokenSession</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference">CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.tokenSessionInput">tokenSessionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSession">CognitoUserPoolSessionConfigurationAttachmentTokenSession</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.userPoolIdInput">userPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.userSessionTrackingInput">userSessionTrackingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.userPoolId">userPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.userSessionTracking">userSessionTracking</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tokenSession`<sup>Required</sup> <a name="tokenSession" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.tokenSession"></a>

```typescript
public readonly tokenSession: CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference">CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference</a>

---

##### `tokenSessionInput`<sup>Optional</sup> <a name="tokenSessionInput" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.tokenSessionInput"></a>

```typescript
public readonly tokenSessionInput: IResolvable | CognitoUserPoolSessionConfigurationAttachmentTokenSession;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSession">CognitoUserPoolSessionConfigurationAttachmentTokenSession</a>

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.userPoolIdInput"></a>

```typescript
public readonly userPoolIdInput: string;
```

- *Type:* string

---

##### `userSessionTrackingInput`<sup>Optional</sup> <a name="userSessionTrackingInput" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.userSessionTrackingInput"></a>

```typescript
public readonly userSessionTrackingInput: string;
```

- *Type:* string

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

---

##### `userSessionTracking`<sup>Required</sup> <a name="userSessionTracking" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.userSessionTracking"></a>

```typescript
public readonly userSessionTracking: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserPoolSessionConfigurationAttachmentConfig <a name="CognitoUserPoolSessionConfigurationAttachmentConfig" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.Initializer"></a>

```typescript
import { cognitoUserPoolSessionConfigurationAttachment } from '@cdktn/provider-awscc'

const cognitoUserPoolSessionConfigurationAttachmentConfig: cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.tokenSession">tokenSession</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSession">CognitoUserPoolSessionConfigurationAttachmentTokenSession</a></code> | Token session settings that apply to every app client in the user pool. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.userPoolId">userPoolId</a></code> | <code>string</code> | The ID of the user pool. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.userSessionTracking">userSessionTracking</a></code> | <code>string</code> | Whether server-side user session tracking is enabled for the user pool. Requires the ESSENTIALS or PLUS feature plan. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `tokenSession`<sup>Required</sup> <a name="tokenSession" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.tokenSession"></a>

```typescript
public readonly tokenSession: CognitoUserPoolSessionConfigurationAttachmentTokenSession;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSession">CognitoUserPoolSessionConfigurationAttachmentTokenSession</a>

Token session settings that apply to every app client in the user pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_session_configuration_attachment#token_session CognitoUserPoolSessionConfigurationAttachment#token_session}

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

The ID of the user pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_session_configuration_attachment#user_pool_id CognitoUserPoolSessionConfigurationAttachment#user_pool_id}

---

##### `userSessionTracking`<sup>Required</sup> <a name="userSessionTracking" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.userSessionTracking"></a>

```typescript
public readonly userSessionTracking: string;
```

- *Type:* string

Whether server-side user session tracking is enabled for the user pool. Requires the ESSENTIALS or PLUS feature plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_session_configuration_attachment#user_session_tracking CognitoUserPoolSessionConfigurationAttachment#user_session_tracking}

---

### CognitoUserPoolSessionConfigurationAttachmentTokenSession <a name="CognitoUserPoolSessionConfigurationAttachmentTokenSession" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSession"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSession.Initializer"></a>

```typescript
import { cognitoUserPoolSessionConfigurationAttachment } from '@cdktn/provider-awscc'

const cognitoUserPoolSessionConfigurationAttachmentTokenSession: cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSession = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSession.property.maxPerUser">maxPerUser</a></code> | <code>number</code> | The maximum number of concurrent token sessions per user across all app clients. |

---

##### `maxPerUser`<sup>Required</sup> <a name="maxPerUser" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSession.property.maxPerUser"></a>

```typescript
public readonly maxPerUser: number;
```

- *Type:* number

The maximum number of concurrent token sessions per user across all app clients.

When a new session would exceed this number, the least recently used session ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_session_configuration_attachment#max_per_user CognitoUserPoolSessionConfigurationAttachment#max_per_user}

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference <a name="CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.Initializer"></a>

```typescript
import { cognitoUserPoolSessionConfigurationAttachment } from '@cdktn/provider-awscc'

new cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.maxPerUserInput">maxPerUserInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.maxPerUser">maxPerUser</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSession">CognitoUserPoolSessionConfigurationAttachmentTokenSession</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxPerUserInput`<sup>Optional</sup> <a name="maxPerUserInput" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.maxPerUserInput"></a>

```typescript
public readonly maxPerUserInput: number;
```

- *Type:* number

---

##### `maxPerUser`<sup>Required</sup> <a name="maxPerUser" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.maxPerUser"></a>

```typescript
public readonly maxPerUser: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoUserPoolSessionConfigurationAttachmentTokenSession;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSession">CognitoUserPoolSessionConfigurationAttachmentTokenSession</a>

---



