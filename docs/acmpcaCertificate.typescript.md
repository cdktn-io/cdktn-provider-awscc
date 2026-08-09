# `acmpcaCertificate` Submodule <a name="`acmpcaCertificate` Submodule" id="@cdktn/provider-awscc.acmpcaCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AcmpcaCertificate <a name="AcmpcaCertificate" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate awscc_acmpca_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

new acmpcaCertificate.AcmpcaCertificate(scope: Construct, id: string, config: AcmpcaCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig">AcmpcaCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig">AcmpcaCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.putApiPassthrough">putApiPassthrough</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.putValidity">putValidity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.putValidityNotBefore">putValidityNotBefore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.resetApiPassthrough">resetApiPassthrough</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.resetTemplateArn">resetTemplateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.resetValidityNotBefore">resetValidityNotBefore</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApiPassthrough` <a name="putApiPassthrough" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.putApiPassthrough"></a>

```typescript
public putApiPassthrough(value: AcmpcaCertificateApiPassthrough): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.putApiPassthrough.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthrough">AcmpcaCertificateApiPassthrough</a>

---

##### `putValidity` <a name="putValidity" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.putValidity"></a>

```typescript
public putValidity(value: AcmpcaCertificateValidity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.putValidity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidity">AcmpcaCertificateValidity</a>

---

##### `putValidityNotBefore` <a name="putValidityNotBefore" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.putValidityNotBefore"></a>

```typescript
public putValidityNotBefore(value: AcmpcaCertificateValidityNotBefore): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.putValidityNotBefore.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBefore">AcmpcaCertificateValidityNotBefore</a>

---

##### `resetApiPassthrough` <a name="resetApiPassthrough" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.resetApiPassthrough"></a>

```typescript
public resetApiPassthrough(): void
```

##### `resetTemplateArn` <a name="resetTemplateArn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.resetTemplateArn"></a>

```typescript
public resetTemplateArn(): void
```

##### `resetValidityNotBefore` <a name="resetValidityNotBefore" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.resetValidityNotBefore"></a>

```typescript
public resetValidityNotBefore(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AcmpcaCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.isConstruct"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

acmpcaCertificate.AcmpcaCertificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.isTerraformElement"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

acmpcaCertificate.AcmpcaCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.isTerraformResource"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

acmpcaCertificate.AcmpcaCertificate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.generateConfigForImport"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

acmpcaCertificate.AcmpcaCertificate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AcmpcaCertificate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AcmpcaCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AcmpcaCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AcmpcaCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.apiPassthrough">apiPassthrough</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference">AcmpcaCertificateApiPassthroughOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.validity">validity</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference">AcmpcaCertificateValidityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.validityNotBefore">validityNotBefore</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference">AcmpcaCertificateValidityNotBeforeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.apiPassthroughInput">apiPassthroughInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthrough">AcmpcaCertificateApiPassthrough</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.certificateAuthorityArnInput">certificateAuthorityArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.certificateSigningRequestInput">certificateSigningRequestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.signingAlgorithmInput">signingAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.templateArnInput">templateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.validityInput">validityInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidity">AcmpcaCertificateValidity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.validityNotBeforeInput">validityNotBeforeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBefore">AcmpcaCertificateValidityNotBefore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.certificateAuthorityArn">certificateAuthorityArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.certificateSigningRequest">certificateSigningRequest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.signingAlgorithm">signingAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.templateArn">templateArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `apiPassthrough`<sup>Required</sup> <a name="apiPassthrough" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.apiPassthrough"></a>

```typescript
public readonly apiPassthrough: AcmpcaCertificateApiPassthroughOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference">AcmpcaCertificateApiPassthroughOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `validity`<sup>Required</sup> <a name="validity" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.validity"></a>

```typescript
public readonly validity: AcmpcaCertificateValidityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference">AcmpcaCertificateValidityOutputReference</a>

---

##### `validityNotBefore`<sup>Required</sup> <a name="validityNotBefore" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.validityNotBefore"></a>

```typescript
public readonly validityNotBefore: AcmpcaCertificateValidityNotBeforeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference">AcmpcaCertificateValidityNotBeforeOutputReference</a>

---

##### `apiPassthroughInput`<sup>Optional</sup> <a name="apiPassthroughInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.apiPassthroughInput"></a>

```typescript
public readonly apiPassthroughInput: IResolvable | AcmpcaCertificateApiPassthrough;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthrough">AcmpcaCertificateApiPassthrough</a>

---

##### `certificateAuthorityArnInput`<sup>Optional</sup> <a name="certificateAuthorityArnInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.certificateAuthorityArnInput"></a>

```typescript
public readonly certificateAuthorityArnInput: string;
```

- *Type:* string

---

##### `certificateSigningRequestInput`<sup>Optional</sup> <a name="certificateSigningRequestInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.certificateSigningRequestInput"></a>

```typescript
public readonly certificateSigningRequestInput: string;
```

- *Type:* string

---

##### `signingAlgorithmInput`<sup>Optional</sup> <a name="signingAlgorithmInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.signingAlgorithmInput"></a>

```typescript
public readonly signingAlgorithmInput: string;
```

- *Type:* string

---

##### `templateArnInput`<sup>Optional</sup> <a name="templateArnInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.templateArnInput"></a>

```typescript
public readonly templateArnInput: string;
```

- *Type:* string

---

##### `validityInput`<sup>Optional</sup> <a name="validityInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.validityInput"></a>

```typescript
public readonly validityInput: IResolvable | AcmpcaCertificateValidity;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidity">AcmpcaCertificateValidity</a>

---

##### `validityNotBeforeInput`<sup>Optional</sup> <a name="validityNotBeforeInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.validityNotBeforeInput"></a>

```typescript
public readonly validityNotBeforeInput: IResolvable | AcmpcaCertificateValidityNotBefore;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBefore">AcmpcaCertificateValidityNotBefore</a>

---

##### `certificateAuthorityArn`<sup>Required</sup> <a name="certificateAuthorityArn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.certificateAuthorityArn"></a>

```typescript
public readonly certificateAuthorityArn: string;
```

- *Type:* string

---

##### `certificateSigningRequest`<sup>Required</sup> <a name="certificateSigningRequest" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.certificateSigningRequest"></a>

```typescript
public readonly certificateSigningRequest: string;
```

- *Type:* string

---

##### `signingAlgorithm`<sup>Required</sup> <a name="signingAlgorithm" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.signingAlgorithm"></a>

```typescript
public readonly signingAlgorithm: string;
```

- *Type:* string

---

##### `templateArn`<sup>Required</sup> <a name="templateArn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.templateArn"></a>

```typescript
public readonly templateArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AcmpcaCertificateApiPassthrough <a name="AcmpcaCertificateApiPassthrough" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthrough"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthrough.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

const acmpcaCertificateApiPassthrough: acmpcaCertificate.AcmpcaCertificateApiPassthrough = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthrough.property.extensions">extensions</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions">AcmpcaCertificateApiPassthroughExtensions</a></code> | Specifies X.509 extension information for a certificate. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthrough.property.subject">subject</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject">AcmpcaCertificateApiPassthroughSubject</a></code> | Contains information about the certificate subject. |

---

##### `extensions`<sup>Optional</sup> <a name="extensions" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthrough.property.extensions"></a>

```typescript
public readonly extensions: AcmpcaCertificateApiPassthroughExtensions;
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions">AcmpcaCertificateApiPassthroughExtensions</a>

Specifies X.509 extension information for a certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#extensions AcmpcaCertificate#extensions}

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthrough.property.subject"></a>

```typescript
public readonly subject: AcmpcaCertificateApiPassthroughSubject;
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject">AcmpcaCertificateApiPassthroughSubject</a>

Contains information about the certificate subject.

The Subject field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The Subject must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#subject AcmpcaCertificate#subject}

---

### AcmpcaCertificateApiPassthroughExtensions <a name="AcmpcaCertificateApiPassthroughExtensions" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

const acmpcaCertificateApiPassthroughExtensions: acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions.property.certificatePolicies">certificatePolicies</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies">AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies</a>[]</code> | Contains a sequence of one or more policy information terms, each of which consists of an object identifier (OID) and optional qualifiers. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions.property.customExtensions">customExtensions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensions">AcmpcaCertificateApiPassthroughExtensionsCustomExtensions</a>[]</code> | Contains a sequence of one or more X.509 extensions, each of which consists of an object identifier (OID), a base64-encoded value, and the critical flag. For more information, see the [Global OID reference database.](https://docs.aws.amazon.com/https://oidref.com/2.5.29). |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions.property.extendedKeyUsage">extendedKeyUsage</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage">AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage</a>[]</code> | Specifies additional purposes for which the certified public key may be used other than basic purposes indicated in the ``KeyUsage`` extension. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions.property.keyUsage">keyUsage</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage">AcmpcaCertificateApiPassthroughExtensionsKeyUsage</a></code> | Defines one or more purposes for which the key contained in the certificate can be used. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames</a>[]</code> | The subject alternative name extension allows identities to be bound to the subject of the certificate. |

---

##### `certificatePolicies`<sup>Optional</sup> <a name="certificatePolicies" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions.property.certificatePolicies"></a>

```typescript
public readonly certificatePolicies: IResolvable | AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies">AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies</a>[]

Contains a sequence of one or more policy information terms, each of which consists of an object identifier (OID) and optional qualifiers.

For more information, see NIST's definition of [Object Identifier (OID)](https://docs.aws.amazon.com/https://csrc.nist.gov/glossary/term/Object_Identifier).
 In an end-entity certificate, these terms indicate the policy under which the certificate was issued and the purposes for which it may be used. In a CA certificate, these terms limit the set of policies for certification paths that include this certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#certificate_policies AcmpcaCertificate#certificate_policies}

---

##### `customExtensions`<sup>Optional</sup> <a name="customExtensions" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions.property.customExtensions"></a>

```typescript
public readonly customExtensions: IResolvable | AcmpcaCertificateApiPassthroughExtensionsCustomExtensions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensions">AcmpcaCertificateApiPassthroughExtensionsCustomExtensions</a>[]

Contains a sequence of one or more X.509 extensions, each of which consists of an object identifier (OID), a base64-encoded value, and the critical flag. For more information, see the [Global OID reference database.](https://docs.aws.amazon.com/https://oidref.com/2.5.29).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#custom_extensions AcmpcaCertificate#custom_extensions}

---

##### `extendedKeyUsage`<sup>Optional</sup> <a name="extendedKeyUsage" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions.property.extendedKeyUsage"></a>

```typescript
public readonly extendedKeyUsage: IResolvable | AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage">AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage</a>[]

Specifies additional purposes for which the certified public key may be used other than basic purposes indicated in the ``KeyUsage`` extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#extended_key_usage AcmpcaCertificate#extended_key_usage}

---

##### `keyUsage`<sup>Optional</sup> <a name="keyUsage" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions.property.keyUsage"></a>

```typescript
public readonly keyUsage: AcmpcaCertificateApiPassthroughExtensionsKeyUsage;
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage">AcmpcaCertificateApiPassthroughExtensionsKeyUsage</a>

Defines one or more purposes for which the key contained in the certificate can be used.

Default value for each option is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#key_usage AcmpcaCertificate#key_usage}

---

##### `subjectAlternativeNames`<sup>Optional</sup> <a name="subjectAlternativeNames" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions.property.subjectAlternativeNames"></a>

```typescript
public readonly subjectAlternativeNames: IResolvable | AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames</a>[]

The subject alternative name extension allows identities to be bound to the subject of the certificate.

These identities may be included in addition to or in place of the identity in the subject field of the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#subject_alternative_names AcmpcaCertificate#subject_alternative_names}

---

### AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies <a name="AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

const acmpcaCertificateApiPassthroughExtensionsCertificatePolicies: acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies.property.certPolicyId">certPolicyId</a></code> | <code>string</code> | Specifies the object identifier (OID) of the certificate policy under which the certificate was issued. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies.property.policyQualifiers">policyQualifiers</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers</a>[]</code> | Modifies the given ``CertPolicyId`` with a qualifier. AWS Private CA supports the certification practice statement (CPS) qualifier. |

---

##### `certPolicyId`<sup>Optional</sup> <a name="certPolicyId" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies.property.certPolicyId"></a>

```typescript
public readonly certPolicyId: string;
```

- *Type:* string

Specifies the object identifier (OID) of the certificate policy under which the certificate was issued.

For more information, see NIST's definition of [Object Identifier (OID)](https://docs.aws.amazon.com/https://csrc.nist.gov/glossary/term/Object_Identifier).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#cert_policy_id AcmpcaCertificate#cert_policy_id}

---

##### `policyQualifiers`<sup>Optional</sup> <a name="policyQualifiers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies.property.policyQualifiers"></a>

```typescript
public readonly policyQualifiers: IResolvable | AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers</a>[]

Modifies the given ``CertPolicyId`` with a qualifier. AWS Private CA supports the certification practice statement (CPS) qualifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#policy_qualifiers AcmpcaCertificate#policy_qualifiers}

---

### AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers <a name="AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

const acmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers: acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers.property.policyQualifierId">policyQualifierId</a></code> | <code>string</code> | Identifies the qualifier modifying a ``CertPolicyId``. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers.property.qualifier">qualifier</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier</a></code> | Defines the qualifier type. |

---

##### `policyQualifierId`<sup>Optional</sup> <a name="policyQualifierId" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers.property.policyQualifierId"></a>

```typescript
public readonly policyQualifierId: string;
```

- *Type:* string

Identifies the qualifier modifying a ``CertPolicyId``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#policy_qualifier_id AcmpcaCertificate#policy_qualifier_id}

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers.property.qualifier"></a>

```typescript
public readonly qualifier: AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier;
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier</a>

Defines the qualifier type.

AWS Private CA supports the use of a URI for a CPS qualifier in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#qualifier AcmpcaCertificate#qualifier}

---

### AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier <a name="AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

const acmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier: acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier.property.cpsUri">cpsUri</a></code> | <code>string</code> | Contains a pointer to a certification practice statement (CPS) published by the CA. |

---

##### `cpsUri`<sup>Optional</sup> <a name="cpsUri" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier.property.cpsUri"></a>

```typescript
public readonly cpsUri: string;
```

- *Type:* string

Contains a pointer to a certification practice statement (CPS) published by the CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#cps_uri AcmpcaCertificate#cps_uri}

---

### AcmpcaCertificateApiPassthroughExtensionsCustomExtensions <a name="AcmpcaCertificateApiPassthroughExtensionsCustomExtensions" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensions.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

const acmpcaCertificateApiPassthroughExtensionsCustomExtensions: acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensions.property.critical">critical</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies the critical flag of the X.509 extension. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensions.property.objectIdentifier">objectIdentifier</a></code> | <code>string</code> | Specifies the object identifier (OID) of the X.509 extension. For more information, see the [Global OID reference database.](https://docs.aws.amazon.com/https://oidref.com/2.5.29). |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensions.property.value">value</a></code> | <code>string</code> | Specifies the base64-encoded value of the X.509 extension. |

---

##### `critical`<sup>Optional</sup> <a name="critical" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensions.property.critical"></a>

```typescript
public readonly critical: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies the critical flag of the X.509 extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#critical AcmpcaCertificate#critical}

---

##### `objectIdentifier`<sup>Optional</sup> <a name="objectIdentifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensions.property.objectIdentifier"></a>

```typescript
public readonly objectIdentifier: string;
```

- *Type:* string

Specifies the object identifier (OID) of the X.509 extension. For more information, see the [Global OID reference database.](https://docs.aws.amazon.com/https://oidref.com/2.5.29).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#object_identifier AcmpcaCertificate#object_identifier}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensions.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Specifies the base64-encoded value of the X.509 extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#value AcmpcaCertificate#value}

---

### AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage <a name="AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

const acmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage: acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage.property.extendedKeyUsageObjectIdentifier">extendedKeyUsageObjectIdentifier</a></code> | <code>string</code> | Specifies a custom ``ExtendedKeyUsage`` with an object identifier (OID). |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage.property.extendedKeyUsageType">extendedKeyUsageType</a></code> | <code>string</code> | Specifies a standard ``ExtendedKeyUsage`` as defined as in [RFC 5280](https://docs.aws.amazon.com/https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.12). |

---

##### `extendedKeyUsageObjectIdentifier`<sup>Optional</sup> <a name="extendedKeyUsageObjectIdentifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage.property.extendedKeyUsageObjectIdentifier"></a>

```typescript
public readonly extendedKeyUsageObjectIdentifier: string;
```

- *Type:* string

Specifies a custom ``ExtendedKeyUsage`` with an object identifier (OID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#extended_key_usage_object_identifier AcmpcaCertificate#extended_key_usage_object_identifier}

---

##### `extendedKeyUsageType`<sup>Optional</sup> <a name="extendedKeyUsageType" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage.property.extendedKeyUsageType"></a>

```typescript
public readonly extendedKeyUsageType: string;
```

- *Type:* string

Specifies a standard ``ExtendedKeyUsage`` as defined as in [RFC 5280](https://docs.aws.amazon.com/https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.12).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#extended_key_usage_type AcmpcaCertificate#extended_key_usage_type}

---

### AcmpcaCertificateApiPassthroughExtensionsKeyUsage <a name="AcmpcaCertificateApiPassthroughExtensionsKeyUsage" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

const acmpcaCertificateApiPassthroughExtensionsKeyUsage: acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage.property.crlSign">crlSign</a></code> | <code>boolean \| cdktn.IResolvable</code> | Key can be used to sign CRLs. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage.property.dataEncipherment">dataEncipherment</a></code> | <code>boolean \| cdktn.IResolvable</code> | Key can be used to decipher data. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage.property.decipherOnly">decipherOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | Key can be used only to decipher data. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage.property.digitalSignature">digitalSignature</a></code> | <code>boolean \| cdktn.IResolvable</code> | Key can be used for digital signing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage.property.encipherOnly">encipherOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | Key can be used only to encipher data. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage.property.keyAgreement">keyAgreement</a></code> | <code>boolean \| cdktn.IResolvable</code> | Key can be used in a key-agreement protocol. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage.property.keyCertSign">keyCertSign</a></code> | <code>boolean \| cdktn.IResolvable</code> | Key can be used to sign certificates. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage.property.keyEncipherment">keyEncipherment</a></code> | <code>boolean \| cdktn.IResolvable</code> | Key can be used to encipher data. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage.property.nonRepudiation">nonRepudiation</a></code> | <code>boolean \| cdktn.IResolvable</code> | Key can be used for non-repudiation. |

---

##### `crlSign`<sup>Optional</sup> <a name="crlSign" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage.property.crlSign"></a>

```typescript
public readonly crlSign: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Key can be used to sign CRLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#crl_sign AcmpcaCertificate#crl_sign}

---

##### `dataEncipherment`<sup>Optional</sup> <a name="dataEncipherment" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage.property.dataEncipherment"></a>

```typescript
public readonly dataEncipherment: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Key can be used to decipher data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#data_encipherment AcmpcaCertificate#data_encipherment}

---

##### `decipherOnly`<sup>Optional</sup> <a name="decipherOnly" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage.property.decipherOnly"></a>

```typescript
public readonly decipherOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Key can be used only to decipher data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#decipher_only AcmpcaCertificate#decipher_only}

---

##### `digitalSignature`<sup>Optional</sup> <a name="digitalSignature" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage.property.digitalSignature"></a>

```typescript
public readonly digitalSignature: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Key can be used for digital signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#digital_signature AcmpcaCertificate#digital_signature}

---

##### `encipherOnly`<sup>Optional</sup> <a name="encipherOnly" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage.property.encipherOnly"></a>

```typescript
public readonly encipherOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Key can be used only to encipher data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#encipher_only AcmpcaCertificate#encipher_only}

---

##### `keyAgreement`<sup>Optional</sup> <a name="keyAgreement" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage.property.keyAgreement"></a>

```typescript
public readonly keyAgreement: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Key can be used in a key-agreement protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#key_agreement AcmpcaCertificate#key_agreement}

---

##### `keyCertSign`<sup>Optional</sup> <a name="keyCertSign" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage.property.keyCertSign"></a>

```typescript
public readonly keyCertSign: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Key can be used to sign certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#key_cert_sign AcmpcaCertificate#key_cert_sign}

---

##### `keyEncipherment`<sup>Optional</sup> <a name="keyEncipherment" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage.property.keyEncipherment"></a>

```typescript
public readonly keyEncipherment: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Key can be used to encipher data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#key_encipherment AcmpcaCertificate#key_encipherment}

---

##### `nonRepudiation`<sup>Optional</sup> <a name="nonRepudiation" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage.property.nonRepudiation"></a>

```typescript
public readonly nonRepudiation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Key can be used for non-repudiation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#non_repudiation AcmpcaCertificate#non_repudiation}

---

### AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames <a name="AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

const acmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames: acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames.property.directoryName">directoryName</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName</a></code> | Contains information about the certificate subject. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames.property.dnsName">dnsName</a></code> | <code>string</code> | Represents ``GeneralName`` as a DNS name. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames.property.ediPartyName">ediPartyName</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName</a></code> | Represents ``GeneralName`` as an ``EdiPartyName`` object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames.property.ipAddress">ipAddress</a></code> | <code>string</code> | Represents ``GeneralName`` as an IPv4 or IPv6 address. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames.property.otherName">otherName</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName</a></code> | Represents ``GeneralName`` using an ``OtherName`` object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames.property.registeredId">registeredId</a></code> | <code>string</code> | Represents ``GeneralName`` as an object identifier (OID). |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames.property.rfc822Name">rfc822Name</a></code> | <code>string</code> | Represents ``GeneralName`` as an [RFC 822](https://docs.aws.amazon.com/https://datatracker.ietf.org/doc/html/rfc822) email address. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames.property.uniformResourceIdentifier">uniformResourceIdentifier</a></code> | <code>string</code> | Represents ``GeneralName`` as a URI. |

---

##### `directoryName`<sup>Optional</sup> <a name="directoryName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames.property.directoryName"></a>

```typescript
public readonly directoryName: AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName;
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName</a>

Contains information about the certificate subject.

The certificate can be one issued by your private certificate authority (CA) or it can be your private CA certificate. The Subject field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The Subject must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate. The DN must be unique for each entity, but your private CA can issue more than one certificate with the same DN to the same entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#directory_name AcmpcaCertificate#directory_name}

---

##### `dnsName`<sup>Optional</sup> <a name="dnsName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

Represents ``GeneralName`` as a DNS name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#dns_name AcmpcaCertificate#dns_name}

---

##### `ediPartyName`<sup>Optional</sup> <a name="ediPartyName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames.property.ediPartyName"></a>

```typescript
public readonly ediPartyName: AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName;
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName</a>

Represents ``GeneralName`` as an ``EdiPartyName`` object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#edi_party_name AcmpcaCertificate#edi_party_name}

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

Represents ``GeneralName`` as an IPv4 or IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#ip_address AcmpcaCertificate#ip_address}

---

##### `otherName`<sup>Optional</sup> <a name="otherName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames.property.otherName"></a>

```typescript
public readonly otherName: AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName;
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName</a>

Represents ``GeneralName`` using an ``OtherName`` object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#other_name AcmpcaCertificate#other_name}

---

##### `registeredId`<sup>Optional</sup> <a name="registeredId" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames.property.registeredId"></a>

```typescript
public readonly registeredId: string;
```

- *Type:* string

Represents ``GeneralName`` as an object identifier (OID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#registered_id AcmpcaCertificate#registered_id}

---

##### `rfc822Name`<sup>Optional</sup> <a name="rfc822Name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames.property.rfc822Name"></a>

```typescript
public readonly rfc822Name: string;
```

- *Type:* string

Represents ``GeneralName`` as an [RFC 822](https://docs.aws.amazon.com/https://datatracker.ietf.org/doc/html/rfc822) email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#rfc_822_name AcmpcaCertificate#rfc_822_name}

---

##### `uniformResourceIdentifier`<sup>Optional</sup> <a name="uniformResourceIdentifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames.property.uniformResourceIdentifier"></a>

```typescript
public readonly uniformResourceIdentifier: string;
```

- *Type:* string

Represents ``GeneralName`` as a URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#uniform_resource_identifier AcmpcaCertificate#uniform_resource_identifier}

---

### AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName <a name="AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

const acmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName: acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.commonName">commonName</a></code> | <code>string</code> | For CA and end-entity certificates in a private PKI, the common name (CN) can be any string within the length limit. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.country">country</a></code> | <code>string</code> | Two-digit code that specifies the country in which the certificate subject located. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.customAttributes">customAttributes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes</a>[]</code> | Contains a sequence of one or more X.500 relative distinguished names (RDNs), each of which consists of an object identifier (OID) and a value. For more information, see NIST?s definition of [Object Identifier (OID)](https://docs.aws.amazon.com/https://csrc.nist.gov/glossary/term/Object_Identifier).   Custom attributes cannot be used in combination with standard attributes. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.distinguishedNameQualifier">distinguishedNameQualifier</a></code> | <code>string</code> | Disambiguating information for the certificate subject. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.generationQualifier">generationQualifier</a></code> | <code>string</code> | Typically a qualifier appended to the name of an individual. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.givenName">givenName</a></code> | <code>string</code> | First name. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.initials">initials</a></code> | <code>string</code> | Concatenation that typically contains the first letter of the *GivenName*, the first letter of the middle name if one exists, and the first letter of the *Surname*. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.locality">locality</a></code> | <code>string</code> | The locality (such as a city or town) in which the certificate subject is located. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.organization">organization</a></code> | <code>string</code> | Legal name of the organization with which the certificate subject is affiliated. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.organizationalUnit">organizationalUnit</a></code> | <code>string</code> | A subdivision or unit of the organization (such as sales or finance) with which the certificate subject is affiliated. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.pseudonym">pseudonym</a></code> | <code>string</code> | Typically a shortened version of a longer *GivenName*. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.serialNumber">serialNumber</a></code> | <code>string</code> | The certificate serial number. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.state">state</a></code> | <code>string</code> | State in which the subject of the certificate is located. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.surname">surname</a></code> | <code>string</code> | Family name. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.title">title</a></code> | <code>string</code> | A title such as Mr. |

---

##### `commonName`<sup>Optional</sup> <a name="commonName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.commonName"></a>

```typescript
public readonly commonName: string;
```

- *Type:* string

For CA and end-entity certificates in a private PKI, the common name (CN) can be any string within the length limit.

Note: In publicly trusted certificates, the common name must be a fully qualified domain name (FQDN) associated with the certificate subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#common_name AcmpcaCertificate#common_name}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

Two-digit code that specifies the country in which the certificate subject located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#country AcmpcaCertificate#country}

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.customAttributes"></a>

```typescript
public readonly customAttributes: IResolvable | AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes</a>[]

Contains a sequence of one or more X.500 relative distinguished names (RDNs), each of which consists of an object identifier (OID) and a value. For more information, see NIST?s definition of [Object Identifier (OID)](https://docs.aws.amazon.com/https://csrc.nist.gov/glossary/term/Object_Identifier).   Custom attributes cannot be used in combination with standard attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#custom_attributes AcmpcaCertificate#custom_attributes}

---

##### `distinguishedNameQualifier`<sup>Optional</sup> <a name="distinguishedNameQualifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.distinguishedNameQualifier"></a>

```typescript
public readonly distinguishedNameQualifier: string;
```

- *Type:* string

Disambiguating information for the certificate subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#distinguished_name_qualifier AcmpcaCertificate#distinguished_name_qualifier}

---

##### `generationQualifier`<sup>Optional</sup> <a name="generationQualifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.generationQualifier"></a>

```typescript
public readonly generationQualifier: string;
```

- *Type:* string

Typically a qualifier appended to the name of an individual.

Examples include Jr. for junior, Sr. for senior, and III for third.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#generation_qualifier AcmpcaCertificate#generation_qualifier}

---

##### `givenName`<sup>Optional</sup> <a name="givenName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.givenName"></a>

```typescript
public readonly givenName: string;
```

- *Type:* string

First name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#given_name AcmpcaCertificate#given_name}

---

##### `initials`<sup>Optional</sup> <a name="initials" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.initials"></a>

```typescript
public readonly initials: string;
```

- *Type:* string

Concatenation that typically contains the first letter of the *GivenName*, the first letter of the middle name if one exists, and the first letter of the *Surname*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#initials AcmpcaCertificate#initials}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.locality"></a>

```typescript
public readonly locality: string;
```

- *Type:* string

The locality (such as a city or town) in which the certificate subject is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#locality AcmpcaCertificate#locality}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

Legal name of the organization with which the certificate subject is affiliated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#organization AcmpcaCertificate#organization}

---

##### `organizationalUnit`<sup>Optional</sup> <a name="organizationalUnit" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.organizationalUnit"></a>

```typescript
public readonly organizationalUnit: string;
```

- *Type:* string

A subdivision or unit of the organization (such as sales or finance) with which the certificate subject is affiliated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#organizational_unit AcmpcaCertificate#organizational_unit}

---

##### `pseudonym`<sup>Optional</sup> <a name="pseudonym" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.pseudonym"></a>

```typescript
public readonly pseudonym: string;
```

- *Type:* string

Typically a shortened version of a longer *GivenName*.

For example, Jonathan is often shortened to John. Elizabeth is often shortened to Beth, Liz, or Eliza.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#pseudonym AcmpcaCertificate#pseudonym}

---

##### `serialNumber`<sup>Optional</sup> <a name="serialNumber" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

The certificate serial number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#serial_number AcmpcaCertificate#serial_number}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

State in which the subject of the certificate is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#state AcmpcaCertificate#state}

---

##### `surname`<sup>Optional</sup> <a name="surname" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.surname"></a>

```typescript
public readonly surname: string;
```

- *Type:* string

Family name.

In the US and the UK, for example, the surname of an individual is ordered last. In Asian cultures the surname is typically ordered first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#surname AcmpcaCertificate#surname}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

A title such as Mr.

or Ms., which is pre-pended to the name to refer formally to the certificate subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#title AcmpcaCertificate#title}

---

### AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes <a name="AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

const acmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes: acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes.property.objectIdentifier">objectIdentifier</a></code> | <code>string</code> | Specifies the object identifier (OID) of the attribute type of the relative distinguished name (RDN). |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes.property.value">value</a></code> | <code>string</code> | Specifies the attribute value of relative distinguished name (RDN). |

---

##### `objectIdentifier`<sup>Optional</sup> <a name="objectIdentifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes.property.objectIdentifier"></a>

```typescript
public readonly objectIdentifier: string;
```

- *Type:* string

Specifies the object identifier (OID) of the attribute type of the relative distinguished name (RDN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#object_identifier AcmpcaCertificate#object_identifier}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Specifies the attribute value of relative distinguished name (RDN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#value AcmpcaCertificate#value}

---

### AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName <a name="AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

const acmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName: acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName.property.nameAssigner">nameAssigner</a></code> | <code>string</code> | Specifies the name assigner. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName.property.partyName">partyName</a></code> | <code>string</code> | Specifies the party name. |

---

##### `nameAssigner`<sup>Optional</sup> <a name="nameAssigner" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName.property.nameAssigner"></a>

```typescript
public readonly nameAssigner: string;
```

- *Type:* string

Specifies the name assigner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#name_assigner AcmpcaCertificate#name_assigner}

---

##### `partyName`<sup>Optional</sup> <a name="partyName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName.property.partyName"></a>

```typescript
public readonly partyName: string;
```

- *Type:* string

Specifies the party name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#party_name AcmpcaCertificate#party_name}

---

### AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName <a name="AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

const acmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName: acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName.property.typeId">typeId</a></code> | <code>string</code> | Specifies an OID. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName.property.value">value</a></code> | <code>string</code> | Specifies an OID value. |

---

##### `typeId`<sup>Optional</sup> <a name="typeId" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName.property.typeId"></a>

```typescript
public readonly typeId: string;
```

- *Type:* string

Specifies an OID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#type_id AcmpcaCertificate#type_id}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Specifies an OID value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#value AcmpcaCertificate#value}

---

### AcmpcaCertificateApiPassthroughSubject <a name="AcmpcaCertificateApiPassthroughSubject" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

const acmpcaCertificateApiPassthroughSubject: acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.commonName">commonName</a></code> | <code>string</code> | For CA and end-entity certificates in a private PKI, the common name (CN) can be any string within the length limit. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.country">country</a></code> | <code>string</code> | Two-digit code that specifies the country in which the certificate subject located. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.customAttributes">customAttributes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributes">AcmpcaCertificateApiPassthroughSubjectCustomAttributes</a>[]</code> | Contains a sequence of one or more X.500 relative distinguished names (RDNs), each of which consists of an object identifier (OID) and a value. For more information, see NIST?s definition of [Object Identifier (OID)](https://docs.aws.amazon.com/https://csrc.nist.gov/glossary/term/Object_Identifier).   Custom attributes cannot be used in combination with standard attributes. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.distinguishedNameQualifier">distinguishedNameQualifier</a></code> | <code>string</code> | Disambiguating information for the certificate subject. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.generationQualifier">generationQualifier</a></code> | <code>string</code> | Typically a qualifier appended to the name of an individual. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.givenName">givenName</a></code> | <code>string</code> | First name. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.initials">initials</a></code> | <code>string</code> | Concatenation that typically contains the first letter of the *GivenName*, the first letter of the middle name if one exists, and the first letter of the *Surname*. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.locality">locality</a></code> | <code>string</code> | The locality (such as a city or town) in which the certificate subject is located. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.organization">organization</a></code> | <code>string</code> | Legal name of the organization with which the certificate subject is affiliated. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.organizationalUnit">organizationalUnit</a></code> | <code>string</code> | A subdivision or unit of the organization (such as sales or finance) with which the certificate subject is affiliated. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.pseudonym">pseudonym</a></code> | <code>string</code> | Typically a shortened version of a longer *GivenName*. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.serialNumber">serialNumber</a></code> | <code>string</code> | The certificate serial number. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.state">state</a></code> | <code>string</code> | State in which the subject of the certificate is located. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.surname">surname</a></code> | <code>string</code> | Family name. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.title">title</a></code> | <code>string</code> | A title such as Mr. |

---

##### `commonName`<sup>Optional</sup> <a name="commonName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.commonName"></a>

```typescript
public readonly commonName: string;
```

- *Type:* string

For CA and end-entity certificates in a private PKI, the common name (CN) can be any string within the length limit.

Note: In publicly trusted certificates, the common name must be a fully qualified domain name (FQDN) associated with the certificate subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#common_name AcmpcaCertificate#common_name}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

Two-digit code that specifies the country in which the certificate subject located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#country AcmpcaCertificate#country}

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.customAttributes"></a>

```typescript
public readonly customAttributes: IResolvable | AcmpcaCertificateApiPassthroughSubjectCustomAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributes">AcmpcaCertificateApiPassthroughSubjectCustomAttributes</a>[]

Contains a sequence of one or more X.500 relative distinguished names (RDNs), each of which consists of an object identifier (OID) and a value. For more information, see NIST?s definition of [Object Identifier (OID)](https://docs.aws.amazon.com/https://csrc.nist.gov/glossary/term/Object_Identifier).   Custom attributes cannot be used in combination with standard attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#custom_attributes AcmpcaCertificate#custom_attributes}

---

##### `distinguishedNameQualifier`<sup>Optional</sup> <a name="distinguishedNameQualifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.distinguishedNameQualifier"></a>

```typescript
public readonly distinguishedNameQualifier: string;
```

- *Type:* string

Disambiguating information for the certificate subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#distinguished_name_qualifier AcmpcaCertificate#distinguished_name_qualifier}

---

##### `generationQualifier`<sup>Optional</sup> <a name="generationQualifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.generationQualifier"></a>

```typescript
public readonly generationQualifier: string;
```

- *Type:* string

Typically a qualifier appended to the name of an individual.

Examples include Jr. for junior, Sr. for senior, and III for third.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#generation_qualifier AcmpcaCertificate#generation_qualifier}

---

##### `givenName`<sup>Optional</sup> <a name="givenName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.givenName"></a>

```typescript
public readonly givenName: string;
```

- *Type:* string

First name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#given_name AcmpcaCertificate#given_name}

---

##### `initials`<sup>Optional</sup> <a name="initials" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.initials"></a>

```typescript
public readonly initials: string;
```

- *Type:* string

Concatenation that typically contains the first letter of the *GivenName*, the first letter of the middle name if one exists, and the first letter of the *Surname*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#initials AcmpcaCertificate#initials}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.locality"></a>

```typescript
public readonly locality: string;
```

- *Type:* string

The locality (such as a city or town) in which the certificate subject is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#locality AcmpcaCertificate#locality}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

Legal name of the organization with which the certificate subject is affiliated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#organization AcmpcaCertificate#organization}

---

##### `organizationalUnit`<sup>Optional</sup> <a name="organizationalUnit" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.organizationalUnit"></a>

```typescript
public readonly organizationalUnit: string;
```

- *Type:* string

A subdivision or unit of the organization (such as sales or finance) with which the certificate subject is affiliated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#organizational_unit AcmpcaCertificate#organizational_unit}

---

##### `pseudonym`<sup>Optional</sup> <a name="pseudonym" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.pseudonym"></a>

```typescript
public readonly pseudonym: string;
```

- *Type:* string

Typically a shortened version of a longer *GivenName*.

For example, Jonathan is often shortened to John. Elizabeth is often shortened to Beth, Liz, or Eliza.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#pseudonym AcmpcaCertificate#pseudonym}

---

##### `serialNumber`<sup>Optional</sup> <a name="serialNumber" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

The certificate serial number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#serial_number AcmpcaCertificate#serial_number}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

State in which the subject of the certificate is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#state AcmpcaCertificate#state}

---

##### `surname`<sup>Optional</sup> <a name="surname" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.surname"></a>

```typescript
public readonly surname: string;
```

- *Type:* string

Family name.

In the US and the UK, for example, the surname of an individual is ordered last. In Asian cultures the surname is typically ordered first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#surname AcmpcaCertificate#surname}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

A title such as Mr.

or Ms., which is pre-pended to the name to refer formally to the certificate subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#title AcmpcaCertificate#title}

---

### AcmpcaCertificateApiPassthroughSubjectCustomAttributes <a name="AcmpcaCertificateApiPassthroughSubjectCustomAttributes" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributes.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

const acmpcaCertificateApiPassthroughSubjectCustomAttributes: acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributes.property.objectIdentifier">objectIdentifier</a></code> | <code>string</code> | Specifies the object identifier (OID) of the attribute type of the relative distinguished name (RDN). |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributes.property.value">value</a></code> | <code>string</code> | Specifies the attribute value of relative distinguished name (RDN). |

---

##### `objectIdentifier`<sup>Optional</sup> <a name="objectIdentifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributes.property.objectIdentifier"></a>

```typescript
public readonly objectIdentifier: string;
```

- *Type:* string

Specifies the object identifier (OID) of the attribute type of the relative distinguished name (RDN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#object_identifier AcmpcaCertificate#object_identifier}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributes.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Specifies the attribute value of relative distinguished name (RDN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#value AcmpcaCertificate#value}

---

### AcmpcaCertificateConfig <a name="AcmpcaCertificateConfig" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

const acmpcaCertificateConfig: acmpcaCertificate.AcmpcaCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.certificateAuthorityArn">certificateAuthorityArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) for the private CA issues the certificate. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.certificateSigningRequest">certificateSigningRequest</a></code> | <code>string</code> | The certificate signing request (CSR) for the certificate. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.signingAlgorithm">signingAlgorithm</a></code> | <code>string</code> | The name of the algorithm that will be used to sign the certificate to be issued. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.validity">validity</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidity">AcmpcaCertificateValidity</a></code> | The period of time during which the certificate will be valid. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.apiPassthrough">apiPassthrough</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthrough">AcmpcaCertificateApiPassthrough</a></code> | Specifies X.509 certificate information to be included in the issued certificate. An ``APIPassthrough`` or ``APICSRPassthrough`` template variant must be selected, or else this parameter is ignored. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.templateArn">templateArn</a></code> | <code>string</code> | Specifies a custom configuration template to use when issuing a certificate. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.validityNotBefore">validityNotBefore</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBefore">AcmpcaCertificateValidityNotBefore</a></code> | Information describing the start of the validity period of the certificate. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `certificateAuthorityArn`<sup>Required</sup> <a name="certificateAuthorityArn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.certificateAuthorityArn"></a>

```typescript
public readonly certificateAuthorityArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) for the private CA issues the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#certificate_authority_arn AcmpcaCertificate#certificate_authority_arn}

---

##### `certificateSigningRequest`<sup>Required</sup> <a name="certificateSigningRequest" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.certificateSigningRequest"></a>

```typescript
public readonly certificateSigningRequest: string;
```

- *Type:* string

The certificate signing request (CSR) for the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#certificate_signing_request AcmpcaCertificate#certificate_signing_request}

---

##### `signingAlgorithm`<sup>Required</sup> <a name="signingAlgorithm" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.signingAlgorithm"></a>

```typescript
public readonly signingAlgorithm: string;
```

- *Type:* string

The name of the algorithm that will be used to sign the certificate to be issued.

This parameter should not be confused with the ``SigningAlgorithm`` parameter used to sign a CSR in the ``CreateCertificateAuthority`` action.
  The specified signing algorithm family (RSA or ECDSA) must match the algorithm family of the CA's secret key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#signing_algorithm AcmpcaCertificate#signing_algorithm}

---

##### `validity`<sup>Required</sup> <a name="validity" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.validity"></a>

```typescript
public readonly validity: AcmpcaCertificateValidity;
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidity">AcmpcaCertificateValidity</a>

The period of time during which the certificate will be valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#validity AcmpcaCertificate#validity}

---

##### `apiPassthrough`<sup>Optional</sup> <a name="apiPassthrough" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.apiPassthrough"></a>

```typescript
public readonly apiPassthrough: AcmpcaCertificateApiPassthrough;
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthrough">AcmpcaCertificateApiPassthrough</a>

Specifies X.509 certificate information to be included in the issued certificate. An ``APIPassthrough`` or ``APICSRPassthrough`` template variant must be selected, or else this parameter is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#api_passthrough AcmpcaCertificate#api_passthrough}

---

##### `templateArn`<sup>Optional</sup> <a name="templateArn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.templateArn"></a>

```typescript
public readonly templateArn: string;
```

- *Type:* string

Specifies a custom configuration template to use when issuing a certificate.

If this parameter is not provided, PCAshort defaults to the ``EndEntityCertificate/V1`` template. For more information about PCAshort templates, see [Using Templates](https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#template_arn AcmpcaCertificate#template_arn}

---

##### `validityNotBefore`<sup>Optional</sup> <a name="validityNotBefore" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.validityNotBefore"></a>

```typescript
public readonly validityNotBefore: AcmpcaCertificateValidityNotBefore;
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBefore">AcmpcaCertificateValidityNotBefore</a>

Information describing the start of the validity period of the certificate.

This parameter sets the ?Not Before" date for the certificate.
 By default, when issuing a certificate, PCAshort sets the "Not Before" date to the issuance time minus 60 minutes. This compensates for clock inconsistencies across computer systems. The ``ValidityNotBefore`` parameter can be used to customize the ?Not Before? value. 
 Unlike the ``Validity`` parameter, the ``ValidityNotBefore`` parameter is optional.
 The ``ValidityNotBefore`` value is expressed as an explicit date and time, using the ``Validity`` type value ``ABSOLUTE``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#validity_not_before AcmpcaCertificate#validity_not_before}

---

### AcmpcaCertificateValidity <a name="AcmpcaCertificateValidity" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidity.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

const acmpcaCertificateValidity: acmpcaCertificate.AcmpcaCertificateValidity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidity.property.type">type</a></code> | <code>string</code> | Specifies whether the ``Value`` parameter represents days, months, or years. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidity.property.value">value</a></code> | <code>number</code> | A long integer interpreted according to the value of ``Type``, below. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Specifies whether the ``Value`` parameter represents days, months, or years.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#type AcmpcaCertificate#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidity.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

A long integer interpreted according to the value of ``Type``, below.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#value AcmpcaCertificate#value}

---

### AcmpcaCertificateValidityNotBefore <a name="AcmpcaCertificateValidityNotBefore" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBefore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBefore.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

const acmpcaCertificateValidityNotBefore: acmpcaCertificate.AcmpcaCertificateValidityNotBefore = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBefore.property.type">type</a></code> | <code>string</code> | Specifies whether the ``Value`` parameter represents days, months, or years. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBefore.property.value">value</a></code> | <code>number</code> | A long integer interpreted according to the value of ``Type``, below. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBefore.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Specifies whether the ``Value`` parameter represents days, months, or years.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#type AcmpcaCertificate#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBefore.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

A long integer interpreted according to the value of ``Type``, below.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate#value AcmpcaCertificate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList <a name="AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

new acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.get"></a>

```typescript
public get(index: number): AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies">AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies">AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies</a>[]

---


### AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference <a name="AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

new acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.putPolicyQualifiers">putPolicyQualifiers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.resetCertPolicyId">resetCertPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.resetPolicyQualifiers">resetPolicyQualifiers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPolicyQualifiers` <a name="putPolicyQualifiers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.putPolicyQualifiers"></a>

```typescript
public putPolicyQualifiers(value: IResolvable | AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.putPolicyQualifiers.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers</a>[]

---

##### `resetCertPolicyId` <a name="resetCertPolicyId" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.resetCertPolicyId"></a>

```typescript
public resetCertPolicyId(): void
```

##### `resetPolicyQualifiers` <a name="resetPolicyQualifiers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.resetPolicyQualifiers"></a>

```typescript
public resetPolicyQualifiers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.property.policyQualifiers">policyQualifiers</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.property.certPolicyIdInput">certPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.property.policyQualifiersInput">policyQualifiersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.property.certPolicyId">certPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies">AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policyQualifiers`<sup>Required</sup> <a name="policyQualifiers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.property.policyQualifiers"></a>

```typescript
public readonly policyQualifiers: AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList</a>

---

##### `certPolicyIdInput`<sup>Optional</sup> <a name="certPolicyIdInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.property.certPolicyIdInput"></a>

```typescript
public readonly certPolicyIdInput: string;
```

- *Type:* string

---

##### `policyQualifiersInput`<sup>Optional</sup> <a name="policyQualifiersInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.property.policyQualifiersInput"></a>

```typescript
public readonly policyQualifiersInput: IResolvable | AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers</a>[]

---

##### `certPolicyId`<sup>Required</sup> <a name="certPolicyId" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.property.certPolicyId"></a>

```typescript
public readonly certPolicyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies">AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies</a>

---


### AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList <a name="AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

new acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.get"></a>

```typescript
public get(index: number): AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers</a>[]

---


### AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference <a name="AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

new acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.putQualifier">putQualifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.resetPolicyQualifierId">resetPolicyQualifierId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.resetQualifier">resetQualifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putQualifier` <a name="putQualifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.putQualifier"></a>

```typescript
public putQualifier(value: AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.putQualifier.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier</a>

---

##### `resetPolicyQualifierId` <a name="resetPolicyQualifierId" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.resetPolicyQualifierId"></a>

```typescript
public resetPolicyQualifierId(): void
```

##### `resetQualifier` <a name="resetQualifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.resetQualifier"></a>

```typescript
public resetQualifier(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.property.qualifier">qualifier</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.property.policyQualifierIdInput">policyQualifierIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.property.qualifierInput">qualifierInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.property.policyQualifierId">policyQualifierId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.property.qualifier"></a>

```typescript
public readonly qualifier: AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference</a>

---

##### `policyQualifierIdInput`<sup>Optional</sup> <a name="policyQualifierIdInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.property.policyQualifierIdInput"></a>

```typescript
public readonly policyQualifierIdInput: string;
```

- *Type:* string

---

##### `qualifierInput`<sup>Optional</sup> <a name="qualifierInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.property.qualifierInput"></a>

```typescript
public readonly qualifierInput: IResolvable | AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier</a>

---

##### `policyQualifierId`<sup>Required</sup> <a name="policyQualifierId" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.property.policyQualifierId"></a>

```typescript
public readonly policyQualifierId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers</a>

---


### AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference <a name="AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

new acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.resetCpsUri">resetCpsUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpsUri` <a name="resetCpsUri" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.resetCpsUri"></a>

```typescript
public resetCpsUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.property.cpsUriInput">cpsUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.property.cpsUri">cpsUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpsUriInput`<sup>Optional</sup> <a name="cpsUriInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.property.cpsUriInput"></a>

```typescript
public readonly cpsUriInput: string;
```

- *Type:* string

---

##### `cpsUri`<sup>Required</sup> <a name="cpsUri" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.property.cpsUri"></a>

```typescript
public readonly cpsUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier</a>

---


### AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList <a name="AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

new acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.get"></a>

```typescript
public get(index: number): AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensions">AcmpcaCertificateApiPassthroughExtensionsCustomExtensions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AcmpcaCertificateApiPassthroughExtensionsCustomExtensions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensions">AcmpcaCertificateApiPassthroughExtensionsCustomExtensions</a>[]

---


### AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference <a name="AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

new acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.resetCritical">resetCritical</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.resetObjectIdentifier">resetObjectIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCritical` <a name="resetCritical" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.resetCritical"></a>

```typescript
public resetCritical(): void
```

##### `resetObjectIdentifier` <a name="resetObjectIdentifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.resetObjectIdentifier"></a>

```typescript
public resetObjectIdentifier(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.criticalInput">criticalInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.objectIdentifierInput">objectIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.critical">critical</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.objectIdentifier">objectIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensions">AcmpcaCertificateApiPassthroughExtensionsCustomExtensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `criticalInput`<sup>Optional</sup> <a name="criticalInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.criticalInput"></a>

```typescript
public readonly criticalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `objectIdentifierInput`<sup>Optional</sup> <a name="objectIdentifierInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.objectIdentifierInput"></a>

```typescript
public readonly objectIdentifierInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.critical"></a>

```typescript
public readonly critical: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `objectIdentifier`<sup>Required</sup> <a name="objectIdentifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.objectIdentifier"></a>

```typescript
public readonly objectIdentifier: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AcmpcaCertificateApiPassthroughExtensionsCustomExtensions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensions">AcmpcaCertificateApiPassthroughExtensionsCustomExtensions</a>

---


### AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList <a name="AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

new acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.get"></a>

```typescript
public get(index: number): AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage">AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage">AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage</a>[]

---


### AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference <a name="AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

new acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.resetExtendedKeyUsageObjectIdentifier">resetExtendedKeyUsageObjectIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.resetExtendedKeyUsageType">resetExtendedKeyUsageType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExtendedKeyUsageObjectIdentifier` <a name="resetExtendedKeyUsageObjectIdentifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.resetExtendedKeyUsageObjectIdentifier"></a>

```typescript
public resetExtendedKeyUsageObjectIdentifier(): void
```

##### `resetExtendedKeyUsageType` <a name="resetExtendedKeyUsageType" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.resetExtendedKeyUsageType"></a>

```typescript
public resetExtendedKeyUsageType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.property.extendedKeyUsageObjectIdentifierInput">extendedKeyUsageObjectIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.property.extendedKeyUsageTypeInput">extendedKeyUsageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.property.extendedKeyUsageObjectIdentifier">extendedKeyUsageObjectIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.property.extendedKeyUsageType">extendedKeyUsageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage">AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `extendedKeyUsageObjectIdentifierInput`<sup>Optional</sup> <a name="extendedKeyUsageObjectIdentifierInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.property.extendedKeyUsageObjectIdentifierInput"></a>

```typescript
public readonly extendedKeyUsageObjectIdentifierInput: string;
```

- *Type:* string

---

##### `extendedKeyUsageTypeInput`<sup>Optional</sup> <a name="extendedKeyUsageTypeInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.property.extendedKeyUsageTypeInput"></a>

```typescript
public readonly extendedKeyUsageTypeInput: string;
```

- *Type:* string

---

##### `extendedKeyUsageObjectIdentifier`<sup>Required</sup> <a name="extendedKeyUsageObjectIdentifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.property.extendedKeyUsageObjectIdentifier"></a>

```typescript
public readonly extendedKeyUsageObjectIdentifier: string;
```

- *Type:* string

---

##### `extendedKeyUsageType`<sup>Required</sup> <a name="extendedKeyUsageType" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.property.extendedKeyUsageType"></a>

```typescript
public readonly extendedKeyUsageType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage">AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage</a>

---


### AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference <a name="AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

new acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resetCrlSign">resetCrlSign</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resetDataEncipherment">resetDataEncipherment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resetDecipherOnly">resetDecipherOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resetDigitalSignature">resetDigitalSignature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resetEncipherOnly">resetEncipherOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resetKeyAgreement">resetKeyAgreement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resetKeyCertSign">resetKeyCertSign</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resetKeyEncipherment">resetKeyEncipherment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resetNonRepudiation">resetNonRepudiation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCrlSign` <a name="resetCrlSign" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resetCrlSign"></a>

```typescript
public resetCrlSign(): void
```

##### `resetDataEncipherment` <a name="resetDataEncipherment" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resetDataEncipherment"></a>

```typescript
public resetDataEncipherment(): void
```

##### `resetDecipherOnly` <a name="resetDecipherOnly" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resetDecipherOnly"></a>

```typescript
public resetDecipherOnly(): void
```

##### `resetDigitalSignature` <a name="resetDigitalSignature" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resetDigitalSignature"></a>

```typescript
public resetDigitalSignature(): void
```

##### `resetEncipherOnly` <a name="resetEncipherOnly" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resetEncipherOnly"></a>

```typescript
public resetEncipherOnly(): void
```

##### `resetKeyAgreement` <a name="resetKeyAgreement" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resetKeyAgreement"></a>

```typescript
public resetKeyAgreement(): void
```

##### `resetKeyCertSign` <a name="resetKeyCertSign" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resetKeyCertSign"></a>

```typescript
public resetKeyCertSign(): void
```

##### `resetKeyEncipherment` <a name="resetKeyEncipherment" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resetKeyEncipherment"></a>

```typescript
public resetKeyEncipherment(): void
```

##### `resetNonRepudiation` <a name="resetNonRepudiation" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resetNonRepudiation"></a>

```typescript
public resetNonRepudiation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.crlSignInput">crlSignInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.dataEnciphermentInput">dataEnciphermentInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.decipherOnlyInput">decipherOnlyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.digitalSignatureInput">digitalSignatureInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.encipherOnlyInput">encipherOnlyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.keyAgreementInput">keyAgreementInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.keyCertSignInput">keyCertSignInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.keyEnciphermentInput">keyEnciphermentInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.nonRepudiationInput">nonRepudiationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.crlSign">crlSign</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.dataEncipherment">dataEncipherment</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.decipherOnly">decipherOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.digitalSignature">digitalSignature</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.encipherOnly">encipherOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.keyAgreement">keyAgreement</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.keyCertSign">keyCertSign</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.keyEncipherment">keyEncipherment</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.nonRepudiation">nonRepudiation</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage">AcmpcaCertificateApiPassthroughExtensionsKeyUsage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `crlSignInput`<sup>Optional</sup> <a name="crlSignInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.crlSignInput"></a>

```typescript
public readonly crlSignInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dataEnciphermentInput`<sup>Optional</sup> <a name="dataEnciphermentInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.dataEnciphermentInput"></a>

```typescript
public readonly dataEnciphermentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `decipherOnlyInput`<sup>Optional</sup> <a name="decipherOnlyInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.decipherOnlyInput"></a>

```typescript
public readonly decipherOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `digitalSignatureInput`<sup>Optional</sup> <a name="digitalSignatureInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.digitalSignatureInput"></a>

```typescript
public readonly digitalSignatureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `encipherOnlyInput`<sup>Optional</sup> <a name="encipherOnlyInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.encipherOnlyInput"></a>

```typescript
public readonly encipherOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `keyAgreementInput`<sup>Optional</sup> <a name="keyAgreementInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.keyAgreementInput"></a>

```typescript
public readonly keyAgreementInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `keyCertSignInput`<sup>Optional</sup> <a name="keyCertSignInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.keyCertSignInput"></a>

```typescript
public readonly keyCertSignInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `keyEnciphermentInput`<sup>Optional</sup> <a name="keyEnciphermentInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.keyEnciphermentInput"></a>

```typescript
public readonly keyEnciphermentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nonRepudiationInput`<sup>Optional</sup> <a name="nonRepudiationInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.nonRepudiationInput"></a>

```typescript
public readonly nonRepudiationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `crlSign`<sup>Required</sup> <a name="crlSign" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.crlSign"></a>

```typescript
public readonly crlSign: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dataEncipherment`<sup>Required</sup> <a name="dataEncipherment" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.dataEncipherment"></a>

```typescript
public readonly dataEncipherment: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `decipherOnly`<sup>Required</sup> <a name="decipherOnly" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.decipherOnly"></a>

```typescript
public readonly decipherOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `digitalSignature`<sup>Required</sup> <a name="digitalSignature" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.digitalSignature"></a>

```typescript
public readonly digitalSignature: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `encipherOnly`<sup>Required</sup> <a name="encipherOnly" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.encipherOnly"></a>

```typescript
public readonly encipherOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `keyAgreement`<sup>Required</sup> <a name="keyAgreement" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.keyAgreement"></a>

```typescript
public readonly keyAgreement: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `keyCertSign`<sup>Required</sup> <a name="keyCertSign" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.keyCertSign"></a>

```typescript
public readonly keyCertSign: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `keyEncipherment`<sup>Required</sup> <a name="keyEncipherment" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.keyEncipherment"></a>

```typescript
public readonly keyEncipherment: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nonRepudiation`<sup>Required</sup> <a name="nonRepudiation" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.nonRepudiation"></a>

```typescript
public readonly nonRepudiation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AcmpcaCertificateApiPassthroughExtensionsKeyUsage;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage">AcmpcaCertificateApiPassthroughExtensionsKeyUsage</a>

---


### AcmpcaCertificateApiPassthroughExtensionsOutputReference <a name="AcmpcaCertificateApiPassthroughExtensionsOutputReference" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

new acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.putCertificatePolicies">putCertificatePolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.putCustomExtensions">putCustomExtensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.putExtendedKeyUsage">putExtendedKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.putKeyUsage">putKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.putSubjectAlternativeNames">putSubjectAlternativeNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.resetCertificatePolicies">resetCertificatePolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.resetCustomExtensions">resetCustomExtensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.resetExtendedKeyUsage">resetExtendedKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.resetKeyUsage">resetKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.resetSubjectAlternativeNames">resetSubjectAlternativeNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCertificatePolicies` <a name="putCertificatePolicies" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.putCertificatePolicies"></a>

```typescript
public putCertificatePolicies(value: IResolvable | AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.putCertificatePolicies.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies">AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies</a>[]

---

##### `putCustomExtensions` <a name="putCustomExtensions" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.putCustomExtensions"></a>

```typescript
public putCustomExtensions(value: IResolvable | AcmpcaCertificateApiPassthroughExtensionsCustomExtensions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.putCustomExtensions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensions">AcmpcaCertificateApiPassthroughExtensionsCustomExtensions</a>[]

---

##### `putExtendedKeyUsage` <a name="putExtendedKeyUsage" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.putExtendedKeyUsage"></a>

```typescript
public putExtendedKeyUsage(value: IResolvable | AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.putExtendedKeyUsage.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage">AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage</a>[]

---

##### `putKeyUsage` <a name="putKeyUsage" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.putKeyUsage"></a>

```typescript
public putKeyUsage(value: AcmpcaCertificateApiPassthroughExtensionsKeyUsage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.putKeyUsage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage">AcmpcaCertificateApiPassthroughExtensionsKeyUsage</a>

---

##### `putSubjectAlternativeNames` <a name="putSubjectAlternativeNames" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.putSubjectAlternativeNames"></a>

```typescript
public putSubjectAlternativeNames(value: IResolvable | AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.putSubjectAlternativeNames.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames</a>[]

---

##### `resetCertificatePolicies` <a name="resetCertificatePolicies" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.resetCertificatePolicies"></a>

```typescript
public resetCertificatePolicies(): void
```

##### `resetCustomExtensions` <a name="resetCustomExtensions" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.resetCustomExtensions"></a>

```typescript
public resetCustomExtensions(): void
```

##### `resetExtendedKeyUsage` <a name="resetExtendedKeyUsage" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.resetExtendedKeyUsage"></a>

```typescript
public resetExtendedKeyUsage(): void
```

##### `resetKeyUsage` <a name="resetKeyUsage" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.resetKeyUsage"></a>

```typescript
public resetKeyUsage(): void
```

##### `resetSubjectAlternativeNames` <a name="resetSubjectAlternativeNames" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.resetSubjectAlternativeNames"></a>

```typescript
public resetSubjectAlternativeNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.certificatePolicies">certificatePolicies</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.customExtensions">customExtensions</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList">AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.extendedKeyUsage">extendedKeyUsage</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList">AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.keyUsage">keyUsage</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference">AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.certificatePoliciesInput">certificatePoliciesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies">AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.customExtensionsInput">customExtensionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensions">AcmpcaCertificateApiPassthroughExtensionsCustomExtensions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.extendedKeyUsageInput">extendedKeyUsageInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage">AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.keyUsageInput">keyUsageInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage">AcmpcaCertificateApiPassthroughExtensionsKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.subjectAlternativeNamesInput">subjectAlternativeNamesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions">AcmpcaCertificateApiPassthroughExtensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificatePolicies`<sup>Required</sup> <a name="certificatePolicies" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.certificatePolicies"></a>

```typescript
public readonly certificatePolicies: AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList</a>

---

##### `customExtensions`<sup>Required</sup> <a name="customExtensions" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.customExtensions"></a>

```typescript
public readonly customExtensions: AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList">AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList</a>

---

##### `extendedKeyUsage`<sup>Required</sup> <a name="extendedKeyUsage" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.extendedKeyUsage"></a>

```typescript
public readonly extendedKeyUsage: AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList;
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList">AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList</a>

---

##### `keyUsage`<sup>Required</sup> <a name="keyUsage" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.keyUsage"></a>

```typescript
public readonly keyUsage: AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference">AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference</a>

---

##### `subjectAlternativeNames`<sup>Required</sup> <a name="subjectAlternativeNames" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.subjectAlternativeNames"></a>

```typescript
public readonly subjectAlternativeNames: AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList</a>

---

##### `certificatePoliciesInput`<sup>Optional</sup> <a name="certificatePoliciesInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.certificatePoliciesInput"></a>

```typescript
public readonly certificatePoliciesInput: IResolvable | AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies">AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies</a>[]

---

##### `customExtensionsInput`<sup>Optional</sup> <a name="customExtensionsInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.customExtensionsInput"></a>

```typescript
public readonly customExtensionsInput: IResolvable | AcmpcaCertificateApiPassthroughExtensionsCustomExtensions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensions">AcmpcaCertificateApiPassthroughExtensionsCustomExtensions</a>[]

---

##### `extendedKeyUsageInput`<sup>Optional</sup> <a name="extendedKeyUsageInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.extendedKeyUsageInput"></a>

```typescript
public readonly extendedKeyUsageInput: IResolvable | AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage">AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage</a>[]

---

##### `keyUsageInput`<sup>Optional</sup> <a name="keyUsageInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.keyUsageInput"></a>

```typescript
public readonly keyUsageInput: IResolvable | AcmpcaCertificateApiPassthroughExtensionsKeyUsage;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage">AcmpcaCertificateApiPassthroughExtensionsKeyUsage</a>

---

##### `subjectAlternativeNamesInput`<sup>Optional</sup> <a name="subjectAlternativeNamesInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.subjectAlternativeNamesInput"></a>

```typescript
public readonly subjectAlternativeNamesInput: IResolvable | AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AcmpcaCertificateApiPassthroughExtensions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions">AcmpcaCertificateApiPassthroughExtensions</a>

---


### AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList <a name="AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

new acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.get"></a>

```typescript
public get(index: number): AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes</a>[]

---


### AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference <a name="AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

new acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.resetObjectIdentifier">resetObjectIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetObjectIdentifier` <a name="resetObjectIdentifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.resetObjectIdentifier"></a>

```typescript
public resetObjectIdentifier(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.property.objectIdentifierInput">objectIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.property.objectIdentifier">objectIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectIdentifierInput`<sup>Optional</sup> <a name="objectIdentifierInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.property.objectIdentifierInput"></a>

```typescript
public readonly objectIdentifierInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `objectIdentifier`<sup>Required</sup> <a name="objectIdentifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.property.objectIdentifier"></a>

```typescript
public readonly objectIdentifier: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes</a>

---


### AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference <a name="AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

new acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.putCustomAttributes">putCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetCommonName">resetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetCustomAttributes">resetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetDistinguishedNameQualifier">resetDistinguishedNameQualifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetGenerationQualifier">resetGenerationQualifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetGivenName">resetGivenName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetInitials">resetInitials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetLocality">resetLocality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetOrganizationalUnit">resetOrganizationalUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetPseudonym">resetPseudonym</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetSerialNumber">resetSerialNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetSurname">resetSurname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomAttributes` <a name="putCustomAttributes" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.putCustomAttributes"></a>

```typescript
public putCustomAttributes(value: IResolvable | AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.putCustomAttributes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes</a>[]

---

##### `resetCommonName` <a name="resetCommonName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetCommonName"></a>

```typescript
public resetCommonName(): void
```

##### `resetCountry` <a name="resetCountry" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetCountry"></a>

```typescript
public resetCountry(): void
```

##### `resetCustomAttributes` <a name="resetCustomAttributes" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetCustomAttributes"></a>

```typescript
public resetCustomAttributes(): void
```

##### `resetDistinguishedNameQualifier` <a name="resetDistinguishedNameQualifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetDistinguishedNameQualifier"></a>

```typescript
public resetDistinguishedNameQualifier(): void
```

##### `resetGenerationQualifier` <a name="resetGenerationQualifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetGenerationQualifier"></a>

```typescript
public resetGenerationQualifier(): void
```

##### `resetGivenName` <a name="resetGivenName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetGivenName"></a>

```typescript
public resetGivenName(): void
```

##### `resetInitials` <a name="resetInitials" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetInitials"></a>

```typescript
public resetInitials(): void
```

##### `resetLocality` <a name="resetLocality" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetLocality"></a>

```typescript
public resetLocality(): void
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetOrganization"></a>

```typescript
public resetOrganization(): void
```

##### `resetOrganizationalUnit` <a name="resetOrganizationalUnit" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetOrganizationalUnit"></a>

```typescript
public resetOrganizationalUnit(): void
```

##### `resetPseudonym` <a name="resetPseudonym" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetPseudonym"></a>

```typescript
public resetPseudonym(): void
```

##### `resetSerialNumber` <a name="resetSerialNumber" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetSerialNumber"></a>

```typescript
public resetSerialNumber(): void
```

##### `resetState` <a name="resetState" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetState"></a>

```typescript
public resetState(): void
```

##### `resetSurname` <a name="resetSurname" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetSurname"></a>

```typescript
public resetSurname(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.customAttributes">customAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.commonNameInput">commonNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.countryInput">countryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.customAttributesInput">customAttributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.distinguishedNameQualifierInput">distinguishedNameQualifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.generationQualifierInput">generationQualifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.givenNameInput">givenNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.initialsInput">initialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.localityInput">localityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.organizationalUnitInput">organizationalUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.pseudonymInput">pseudonymInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.serialNumberInput">serialNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.surnameInput">surnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.commonName">commonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.distinguishedNameQualifier">distinguishedNameQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.generationQualifier">generationQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.givenName">givenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.initials">initials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.locality">locality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.organizationalUnit">organizationalUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.pseudonym">pseudonym</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.surname">surname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customAttributes`<sup>Required</sup> <a name="customAttributes" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.customAttributes"></a>

```typescript
public readonly customAttributes: AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList</a>

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.commonNameInput"></a>

```typescript
public readonly commonNameInput: string;
```

- *Type:* string

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.countryInput"></a>

```typescript
public readonly countryInput: string;
```

- *Type:* string

---

##### `customAttributesInput`<sup>Optional</sup> <a name="customAttributesInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.customAttributesInput"></a>

```typescript
public readonly customAttributesInput: IResolvable | AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes</a>[]

---

##### `distinguishedNameQualifierInput`<sup>Optional</sup> <a name="distinguishedNameQualifierInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.distinguishedNameQualifierInput"></a>

```typescript
public readonly distinguishedNameQualifierInput: string;
```

- *Type:* string

---

##### `generationQualifierInput`<sup>Optional</sup> <a name="generationQualifierInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.generationQualifierInput"></a>

```typescript
public readonly generationQualifierInput: string;
```

- *Type:* string

---

##### `givenNameInput`<sup>Optional</sup> <a name="givenNameInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.givenNameInput"></a>

```typescript
public readonly givenNameInput: string;
```

- *Type:* string

---

##### `initialsInput`<sup>Optional</sup> <a name="initialsInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.initialsInput"></a>

```typescript
public readonly initialsInput: string;
```

- *Type:* string

---

##### `localityInput`<sup>Optional</sup> <a name="localityInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.localityInput"></a>

```typescript
public readonly localityInput: string;
```

- *Type:* string

---

##### `organizationalUnitInput`<sup>Optional</sup> <a name="organizationalUnitInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.organizationalUnitInput"></a>

```typescript
public readonly organizationalUnitInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `pseudonymInput`<sup>Optional</sup> <a name="pseudonymInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.pseudonymInput"></a>

```typescript
public readonly pseudonymInput: string;
```

- *Type:* string

---

##### `serialNumberInput`<sup>Optional</sup> <a name="serialNumberInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.serialNumberInput"></a>

```typescript
public readonly serialNumberInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `surnameInput`<sup>Optional</sup> <a name="surnameInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.surnameInput"></a>

```typescript
public readonly surnameInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.commonName"></a>

```typescript
public readonly commonName: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `distinguishedNameQualifier`<sup>Required</sup> <a name="distinguishedNameQualifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.distinguishedNameQualifier"></a>

```typescript
public readonly distinguishedNameQualifier: string;
```

- *Type:* string

---

##### `generationQualifier`<sup>Required</sup> <a name="generationQualifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.generationQualifier"></a>

```typescript
public readonly generationQualifier: string;
```

- *Type:* string

---

##### `givenName`<sup>Required</sup> <a name="givenName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.givenName"></a>

```typescript
public readonly givenName: string;
```

- *Type:* string

---

##### `initials`<sup>Required</sup> <a name="initials" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.initials"></a>

```typescript
public readonly initials: string;
```

- *Type:* string

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.locality"></a>

```typescript
public readonly locality: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `organizationalUnit`<sup>Required</sup> <a name="organizationalUnit" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.organizationalUnit"></a>

```typescript
public readonly organizationalUnit: string;
```

- *Type:* string

---

##### `pseudonym`<sup>Required</sup> <a name="pseudonym" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.pseudonym"></a>

```typescript
public readonly pseudonym: string;
```

- *Type:* string

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `surname`<sup>Required</sup> <a name="surname" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.surname"></a>

```typescript
public readonly surname: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName</a>

---


### AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference <a name="AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

new acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.resetNameAssigner">resetNameAssigner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.resetPartyName">resetPartyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNameAssigner` <a name="resetNameAssigner" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.resetNameAssigner"></a>

```typescript
public resetNameAssigner(): void
```

##### `resetPartyName` <a name="resetPartyName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.resetPartyName"></a>

```typescript
public resetPartyName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.property.nameAssignerInput">nameAssignerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.property.partyNameInput">partyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.property.nameAssigner">nameAssigner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.property.partyName">partyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameAssignerInput`<sup>Optional</sup> <a name="nameAssignerInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.property.nameAssignerInput"></a>

```typescript
public readonly nameAssignerInput: string;
```

- *Type:* string

---

##### `partyNameInput`<sup>Optional</sup> <a name="partyNameInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.property.partyNameInput"></a>

```typescript
public readonly partyNameInput: string;
```

- *Type:* string

---

##### `nameAssigner`<sup>Required</sup> <a name="nameAssigner" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.property.nameAssigner"></a>

```typescript
public readonly nameAssigner: string;
```

- *Type:* string

---

##### `partyName`<sup>Required</sup> <a name="partyName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.property.partyName"></a>

```typescript
public readonly partyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName</a>

---


### AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList <a name="AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

new acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.get"></a>

```typescript
public get(index: number): AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames</a>[]

---


### AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference <a name="AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

new acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.resetTypeId">resetTypeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTypeId` <a name="resetTypeId" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.resetTypeId"></a>

```typescript
public resetTypeId(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.property.typeIdInput">typeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.property.typeId">typeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeIdInput`<sup>Optional</sup> <a name="typeIdInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.property.typeIdInput"></a>

```typescript
public readonly typeIdInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `typeId`<sup>Required</sup> <a name="typeId" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.property.typeId"></a>

```typescript
public readonly typeId: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName</a>

---


### AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference <a name="AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

new acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.putDirectoryName">putDirectoryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.putEdiPartyName">putEdiPartyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.putOtherName">putOtherName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resetDirectoryName">resetDirectoryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resetDnsName">resetDnsName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resetEdiPartyName">resetEdiPartyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resetOtherName">resetOtherName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resetRegisteredId">resetRegisteredId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resetRfc822Name">resetRfc822Name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resetUniformResourceIdentifier">resetUniformResourceIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDirectoryName` <a name="putDirectoryName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.putDirectoryName"></a>

```typescript
public putDirectoryName(value: AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.putDirectoryName.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName</a>

---

##### `putEdiPartyName` <a name="putEdiPartyName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.putEdiPartyName"></a>

```typescript
public putEdiPartyName(value: AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.putEdiPartyName.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName</a>

---

##### `putOtherName` <a name="putOtherName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.putOtherName"></a>

```typescript
public putOtherName(value: AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.putOtherName.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName</a>

---

##### `resetDirectoryName` <a name="resetDirectoryName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resetDirectoryName"></a>

```typescript
public resetDirectoryName(): void
```

##### `resetDnsName` <a name="resetDnsName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resetDnsName"></a>

```typescript
public resetDnsName(): void
```

##### `resetEdiPartyName` <a name="resetEdiPartyName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resetEdiPartyName"></a>

```typescript
public resetEdiPartyName(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetOtherName` <a name="resetOtherName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resetOtherName"></a>

```typescript
public resetOtherName(): void
```

##### `resetRegisteredId` <a name="resetRegisteredId" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resetRegisteredId"></a>

```typescript
public resetRegisteredId(): void
```

##### `resetRfc822Name` <a name="resetRfc822Name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resetRfc822Name"></a>

```typescript
public resetRfc822Name(): void
```

##### `resetUniformResourceIdentifier` <a name="resetUniformResourceIdentifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resetUniformResourceIdentifier"></a>

```typescript
public resetUniformResourceIdentifier(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.directoryName">directoryName</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.ediPartyName">ediPartyName</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.otherName">otherName</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.directoryNameInput">directoryNameInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.dnsNameInput">dnsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.ediPartyNameInput">ediPartyNameInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.otherNameInput">otherNameInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.registeredIdInput">registeredIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.rfc822NameInput">rfc822NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.uniformResourceIdentifierInput">uniformResourceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.registeredId">registeredId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.rfc822Name">rfc822Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.uniformResourceIdentifier">uniformResourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directoryName`<sup>Required</sup> <a name="directoryName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.directoryName"></a>

```typescript
public readonly directoryName: AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference</a>

---

##### `ediPartyName`<sup>Required</sup> <a name="ediPartyName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.ediPartyName"></a>

```typescript
public readonly ediPartyName: AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference</a>

---

##### `otherName`<sup>Required</sup> <a name="otherName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.otherName"></a>

```typescript
public readonly otherName: AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference</a>

---

##### `directoryNameInput`<sup>Optional</sup> <a name="directoryNameInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.directoryNameInput"></a>

```typescript
public readonly directoryNameInput: IResolvable | AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName</a>

---

##### `dnsNameInput`<sup>Optional</sup> <a name="dnsNameInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.dnsNameInput"></a>

```typescript
public readonly dnsNameInput: string;
```

- *Type:* string

---

##### `ediPartyNameInput`<sup>Optional</sup> <a name="ediPartyNameInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.ediPartyNameInput"></a>

```typescript
public readonly ediPartyNameInput: IResolvable | AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName</a>

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `otherNameInput`<sup>Optional</sup> <a name="otherNameInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.otherNameInput"></a>

```typescript
public readonly otherNameInput: IResolvable | AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName</a>

---

##### `registeredIdInput`<sup>Optional</sup> <a name="registeredIdInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.registeredIdInput"></a>

```typescript
public readonly registeredIdInput: string;
```

- *Type:* string

---

##### `rfc822NameInput`<sup>Optional</sup> <a name="rfc822NameInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.rfc822NameInput"></a>

```typescript
public readonly rfc822NameInput: string;
```

- *Type:* string

---

##### `uniformResourceIdentifierInput`<sup>Optional</sup> <a name="uniformResourceIdentifierInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.uniformResourceIdentifierInput"></a>

```typescript
public readonly uniformResourceIdentifierInput: string;
```

- *Type:* string

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `registeredId`<sup>Required</sup> <a name="registeredId" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.registeredId"></a>

```typescript
public readonly registeredId: string;
```

- *Type:* string

---

##### `rfc822Name`<sup>Required</sup> <a name="rfc822Name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.rfc822Name"></a>

```typescript
public readonly rfc822Name: string;
```

- *Type:* string

---

##### `uniformResourceIdentifier`<sup>Required</sup> <a name="uniformResourceIdentifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.uniformResourceIdentifier"></a>

```typescript
public readonly uniformResourceIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames</a>

---


### AcmpcaCertificateApiPassthroughOutputReference <a name="AcmpcaCertificateApiPassthroughOutputReference" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

new acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.putExtensions">putExtensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.putSubject">putSubject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.resetExtensions">resetExtensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.resetSubject">resetSubject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExtensions` <a name="putExtensions" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.putExtensions"></a>

```typescript
public putExtensions(value: AcmpcaCertificateApiPassthroughExtensions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.putExtensions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions">AcmpcaCertificateApiPassthroughExtensions</a>

---

##### `putSubject` <a name="putSubject" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.putSubject"></a>

```typescript
public putSubject(value: AcmpcaCertificateApiPassthroughSubject): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.putSubject.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject">AcmpcaCertificateApiPassthroughSubject</a>

---

##### `resetExtensions` <a name="resetExtensions" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.resetExtensions"></a>

```typescript
public resetExtensions(): void
```

##### `resetSubject` <a name="resetSubject" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.resetSubject"></a>

```typescript
public resetSubject(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.property.extensions">extensions</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference">AcmpcaCertificateApiPassthroughExtensionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.property.subject">subject</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference">AcmpcaCertificateApiPassthroughSubjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.property.extensionsInput">extensionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions">AcmpcaCertificateApiPassthroughExtensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.property.subjectInput">subjectInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject">AcmpcaCertificateApiPassthroughSubject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthrough">AcmpcaCertificateApiPassthrough</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.property.extensions"></a>

```typescript
public readonly extensions: AcmpcaCertificateApiPassthroughExtensionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference">AcmpcaCertificateApiPassthroughExtensionsOutputReference</a>

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.property.subject"></a>

```typescript
public readonly subject: AcmpcaCertificateApiPassthroughSubjectOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference">AcmpcaCertificateApiPassthroughSubjectOutputReference</a>

---

##### `extensionsInput`<sup>Optional</sup> <a name="extensionsInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.property.extensionsInput"></a>

```typescript
public readonly extensionsInput: IResolvable | AcmpcaCertificateApiPassthroughExtensions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions">AcmpcaCertificateApiPassthroughExtensions</a>

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.property.subjectInput"></a>

```typescript
public readonly subjectInput: IResolvable | AcmpcaCertificateApiPassthroughSubject;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject">AcmpcaCertificateApiPassthroughSubject</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AcmpcaCertificateApiPassthrough;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthrough">AcmpcaCertificateApiPassthrough</a>

---


### AcmpcaCertificateApiPassthroughSubjectCustomAttributesList <a name="AcmpcaCertificateApiPassthroughSubjectCustomAttributesList" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

new acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.get"></a>

```typescript
public get(index: number): AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributes">AcmpcaCertificateApiPassthroughSubjectCustomAttributes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AcmpcaCertificateApiPassthroughSubjectCustomAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributes">AcmpcaCertificateApiPassthroughSubjectCustomAttributes</a>[]

---


### AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference <a name="AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

new acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.resetObjectIdentifier">resetObjectIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetObjectIdentifier` <a name="resetObjectIdentifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.resetObjectIdentifier"></a>

```typescript
public resetObjectIdentifier(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.property.objectIdentifierInput">objectIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.property.objectIdentifier">objectIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributes">AcmpcaCertificateApiPassthroughSubjectCustomAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectIdentifierInput`<sup>Optional</sup> <a name="objectIdentifierInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.property.objectIdentifierInput"></a>

```typescript
public readonly objectIdentifierInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `objectIdentifier`<sup>Required</sup> <a name="objectIdentifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.property.objectIdentifier"></a>

```typescript
public readonly objectIdentifier: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AcmpcaCertificateApiPassthroughSubjectCustomAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributes">AcmpcaCertificateApiPassthroughSubjectCustomAttributes</a>

---


### AcmpcaCertificateApiPassthroughSubjectOutputReference <a name="AcmpcaCertificateApiPassthroughSubjectOutputReference" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

new acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.putCustomAttributes">putCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetCommonName">resetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetCustomAttributes">resetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetDistinguishedNameQualifier">resetDistinguishedNameQualifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetGenerationQualifier">resetGenerationQualifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetGivenName">resetGivenName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetInitials">resetInitials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetLocality">resetLocality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetOrganizationalUnit">resetOrganizationalUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetPseudonym">resetPseudonym</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetSerialNumber">resetSerialNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetSurname">resetSurname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomAttributes` <a name="putCustomAttributes" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.putCustomAttributes"></a>

```typescript
public putCustomAttributes(value: IResolvable | AcmpcaCertificateApiPassthroughSubjectCustomAttributes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.putCustomAttributes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributes">AcmpcaCertificateApiPassthroughSubjectCustomAttributes</a>[]

---

##### `resetCommonName` <a name="resetCommonName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetCommonName"></a>

```typescript
public resetCommonName(): void
```

##### `resetCountry` <a name="resetCountry" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetCountry"></a>

```typescript
public resetCountry(): void
```

##### `resetCustomAttributes` <a name="resetCustomAttributes" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetCustomAttributes"></a>

```typescript
public resetCustomAttributes(): void
```

##### `resetDistinguishedNameQualifier` <a name="resetDistinguishedNameQualifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetDistinguishedNameQualifier"></a>

```typescript
public resetDistinguishedNameQualifier(): void
```

##### `resetGenerationQualifier` <a name="resetGenerationQualifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetGenerationQualifier"></a>

```typescript
public resetGenerationQualifier(): void
```

##### `resetGivenName` <a name="resetGivenName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetGivenName"></a>

```typescript
public resetGivenName(): void
```

##### `resetInitials` <a name="resetInitials" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetInitials"></a>

```typescript
public resetInitials(): void
```

##### `resetLocality` <a name="resetLocality" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetLocality"></a>

```typescript
public resetLocality(): void
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetOrganization"></a>

```typescript
public resetOrganization(): void
```

##### `resetOrganizationalUnit` <a name="resetOrganizationalUnit" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetOrganizationalUnit"></a>

```typescript
public resetOrganizationalUnit(): void
```

##### `resetPseudonym` <a name="resetPseudonym" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetPseudonym"></a>

```typescript
public resetPseudonym(): void
```

##### `resetSerialNumber` <a name="resetSerialNumber" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetSerialNumber"></a>

```typescript
public resetSerialNumber(): void
```

##### `resetState` <a name="resetState" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetState"></a>

```typescript
public resetState(): void
```

##### `resetSurname` <a name="resetSurname" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetSurname"></a>

```typescript
public resetSurname(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.customAttributes">customAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList">AcmpcaCertificateApiPassthroughSubjectCustomAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.commonNameInput">commonNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.countryInput">countryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.customAttributesInput">customAttributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributes">AcmpcaCertificateApiPassthroughSubjectCustomAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.distinguishedNameQualifierInput">distinguishedNameQualifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.generationQualifierInput">generationQualifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.givenNameInput">givenNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.initialsInput">initialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.localityInput">localityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.organizationalUnitInput">organizationalUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.pseudonymInput">pseudonymInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.serialNumberInput">serialNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.surnameInput">surnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.commonName">commonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.distinguishedNameQualifier">distinguishedNameQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.generationQualifier">generationQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.givenName">givenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.initials">initials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.locality">locality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.organizationalUnit">organizationalUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.pseudonym">pseudonym</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.surname">surname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject">AcmpcaCertificateApiPassthroughSubject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customAttributes`<sup>Required</sup> <a name="customAttributes" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.customAttributes"></a>

```typescript
public readonly customAttributes: AcmpcaCertificateApiPassthroughSubjectCustomAttributesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList">AcmpcaCertificateApiPassthroughSubjectCustomAttributesList</a>

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.commonNameInput"></a>

```typescript
public readonly commonNameInput: string;
```

- *Type:* string

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.countryInput"></a>

```typescript
public readonly countryInput: string;
```

- *Type:* string

---

##### `customAttributesInput`<sup>Optional</sup> <a name="customAttributesInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.customAttributesInput"></a>

```typescript
public readonly customAttributesInput: IResolvable | AcmpcaCertificateApiPassthroughSubjectCustomAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributes">AcmpcaCertificateApiPassthroughSubjectCustomAttributes</a>[]

---

##### `distinguishedNameQualifierInput`<sup>Optional</sup> <a name="distinguishedNameQualifierInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.distinguishedNameQualifierInput"></a>

```typescript
public readonly distinguishedNameQualifierInput: string;
```

- *Type:* string

---

##### `generationQualifierInput`<sup>Optional</sup> <a name="generationQualifierInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.generationQualifierInput"></a>

```typescript
public readonly generationQualifierInput: string;
```

- *Type:* string

---

##### `givenNameInput`<sup>Optional</sup> <a name="givenNameInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.givenNameInput"></a>

```typescript
public readonly givenNameInput: string;
```

- *Type:* string

---

##### `initialsInput`<sup>Optional</sup> <a name="initialsInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.initialsInput"></a>

```typescript
public readonly initialsInput: string;
```

- *Type:* string

---

##### `localityInput`<sup>Optional</sup> <a name="localityInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.localityInput"></a>

```typescript
public readonly localityInput: string;
```

- *Type:* string

---

##### `organizationalUnitInput`<sup>Optional</sup> <a name="organizationalUnitInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.organizationalUnitInput"></a>

```typescript
public readonly organizationalUnitInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `pseudonymInput`<sup>Optional</sup> <a name="pseudonymInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.pseudonymInput"></a>

```typescript
public readonly pseudonymInput: string;
```

- *Type:* string

---

##### `serialNumberInput`<sup>Optional</sup> <a name="serialNumberInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.serialNumberInput"></a>

```typescript
public readonly serialNumberInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `surnameInput`<sup>Optional</sup> <a name="surnameInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.surnameInput"></a>

```typescript
public readonly surnameInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.commonName"></a>

```typescript
public readonly commonName: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `distinguishedNameQualifier`<sup>Required</sup> <a name="distinguishedNameQualifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.distinguishedNameQualifier"></a>

```typescript
public readonly distinguishedNameQualifier: string;
```

- *Type:* string

---

##### `generationQualifier`<sup>Required</sup> <a name="generationQualifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.generationQualifier"></a>

```typescript
public readonly generationQualifier: string;
```

- *Type:* string

---

##### `givenName`<sup>Required</sup> <a name="givenName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.givenName"></a>

```typescript
public readonly givenName: string;
```

- *Type:* string

---

##### `initials`<sup>Required</sup> <a name="initials" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.initials"></a>

```typescript
public readonly initials: string;
```

- *Type:* string

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.locality"></a>

```typescript
public readonly locality: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `organizationalUnit`<sup>Required</sup> <a name="organizationalUnit" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.organizationalUnit"></a>

```typescript
public readonly organizationalUnit: string;
```

- *Type:* string

---

##### `pseudonym`<sup>Required</sup> <a name="pseudonym" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.pseudonym"></a>

```typescript
public readonly pseudonym: string;
```

- *Type:* string

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `surname`<sup>Required</sup> <a name="surname" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.surname"></a>

```typescript
public readonly surname: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AcmpcaCertificateApiPassthroughSubject;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject">AcmpcaCertificateApiPassthroughSubject</a>

---


### AcmpcaCertificateValidityNotBeforeOutputReference <a name="AcmpcaCertificateValidityNotBeforeOutputReference" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

new acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBefore">AcmpcaCertificateValidityNotBefore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AcmpcaCertificateValidityNotBefore;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBefore">AcmpcaCertificateValidityNotBefore</a>

---


### AcmpcaCertificateValidityOutputReference <a name="AcmpcaCertificateValidityOutputReference" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktn/provider-awscc'

new acmpcaCertificate.AcmpcaCertificateValidityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidity">AcmpcaCertificateValidity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AcmpcaCertificateValidity;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidity">AcmpcaCertificateValidity</a>

---



