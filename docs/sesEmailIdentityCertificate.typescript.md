# `sesEmailIdentityCertificate` Submodule <a name="`sesEmailIdentityCertificate` Submodule" id="@cdktn/provider-awscc.sesEmailIdentityCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesEmailIdentityCertificate <a name="SesEmailIdentityCertificate" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/ses_email_identity_certificate awscc_ses_email_identity_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.Initializer"></a>

```typescript
import { sesEmailIdentityCertificate } from '@cdktn/provider-awscc'

new sesEmailIdentityCertificate.SesEmailIdentityCertificate(scope: Construct, id: string, config: SesEmailIdentityCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificateConfig">SesEmailIdentityCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificateConfig">SesEmailIdentityCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SesEmailIdentityCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.isConstruct"></a>

```typescript
import { sesEmailIdentityCertificate } from '@cdktn/provider-awscc'

sesEmailIdentityCertificate.SesEmailIdentityCertificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.isTerraformElement"></a>

```typescript
import { sesEmailIdentityCertificate } from '@cdktn/provider-awscc'

sesEmailIdentityCertificate.SesEmailIdentityCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.isTerraformResource"></a>

```typescript
import { sesEmailIdentityCertificate } from '@cdktn/provider-awscc'

sesEmailIdentityCertificate.SesEmailIdentityCertificate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.generateConfigForImport"></a>

```typescript
import { sesEmailIdentityCertificate } from '@cdktn/provider-awscc'

sesEmailIdentityCertificate.SesEmailIdentityCertificate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SesEmailIdentityCertificate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SesEmailIdentityCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SesEmailIdentityCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/ses_email_identity_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SesEmailIdentityCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.certificateArnInput">certificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.emailIdentityInput">emailIdentityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.fromAddressInput">fromAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.emailIdentity">emailIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.fromAddress">fromAddress</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.certificateArnInput"></a>

```typescript
public readonly certificateArnInput: string;
```

- *Type:* string

---

##### `emailIdentityInput`<sup>Optional</sup> <a name="emailIdentityInput" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.emailIdentityInput"></a>

```typescript
public readonly emailIdentityInput: string;
```

- *Type:* string

---

##### `fromAddressInput`<sup>Optional</sup> <a name="fromAddressInput" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.fromAddressInput"></a>

```typescript
public readonly fromAddressInput: string;
```

- *Type:* string

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `emailIdentity`<sup>Required</sup> <a name="emailIdentity" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.emailIdentity"></a>

```typescript
public readonly emailIdentity: string;
```

- *Type:* string

---

##### `fromAddress`<sup>Required</sup> <a name="fromAddress" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.fromAddress"></a>

```typescript
public readonly fromAddress: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SesEmailIdentityCertificateConfig <a name="SesEmailIdentityCertificateConfig" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificateConfig.Initializer"></a>

```typescript
import { sesEmailIdentityCertificate } from '@cdktn/provider-awscc'

const sesEmailIdentityCertificateConfig: sesEmailIdentityCertificate.SesEmailIdentityCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificateConfig.property.certificateArn">certificateArn</a></code> | <code>string</code> | The ARN of the AWS Certificate Manager certificate to associate with the sender. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificateConfig.property.emailIdentity">emailIdentity</a></code> | <code>string</code> | The email identity that owns the sender the certificate is associated with. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificateConfig.property.fromAddress">fromAddress</a></code> | <code>string</code> | The sender the certificate signs for. For an email address identity this is the identity itself. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificateConfig.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

The ARN of the AWS Certificate Manager certificate to associate with the sender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/ses_email_identity_certificate#certificate_arn SesEmailIdentityCertificate#certificate_arn}

---

##### `emailIdentity`<sup>Required</sup> <a name="emailIdentity" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificateConfig.property.emailIdentity"></a>

```typescript
public readonly emailIdentity: string;
```

- *Type:* string

The email identity that owns the sender the certificate is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/ses_email_identity_certificate#email_identity SesEmailIdentityCertificate#email_identity}

---

##### `fromAddress`<sup>Required</sup> <a name="fromAddress" id="@cdktn/provider-awscc.sesEmailIdentityCertificate.SesEmailIdentityCertificateConfig.property.fromAddress"></a>

```typescript
public readonly fromAddress: string;
```

- *Type:* string

The sender the certificate signs for. For an email address identity this is the identity itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/ses_email_identity_certificate#from_address SesEmailIdentityCertificate#from_address}

---



