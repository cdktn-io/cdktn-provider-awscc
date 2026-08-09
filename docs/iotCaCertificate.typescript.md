# `iotCaCertificate` Submodule <a name="`iotCaCertificate` Submodule" id="@cdktn/provider-awscc.iotCaCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotCaCertificate <a name="IotCaCertificate" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_ca_certificate awscc_iot_ca_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer"></a>

```typescript
import { iotCaCertificate } from '@cdktn/provider-awscc'

new iotCaCertificate.IotCaCertificate(scope: Construct, id: string, config: IotCaCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig">IotCaCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig">IotCaCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.putRegistrationConfig">putRegistrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetAutoRegistrationStatus">resetAutoRegistrationStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetCertificateMode">resetCertificateMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetRegistrationConfig">resetRegistrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetRemoveAutoRegistration">resetRemoveAutoRegistration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetVerificationCertificatePem">resetVerificationCertificatePem</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRegistrationConfig` <a name="putRegistrationConfig" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.putRegistrationConfig"></a>

```typescript
public putRegistrationConfig(value: IotCaCertificateRegistrationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.putRegistrationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig">IotCaCertificateRegistrationConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.putTags"></a>

```typescript
public putTags(value: IResolvable | IotCaCertificateTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a>[]

---

##### `resetAutoRegistrationStatus` <a name="resetAutoRegistrationStatus" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetAutoRegistrationStatus"></a>

```typescript
public resetAutoRegistrationStatus(): void
```

##### `resetCertificateMode` <a name="resetCertificateMode" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetCertificateMode"></a>

```typescript
public resetCertificateMode(): void
```

##### `resetRegistrationConfig` <a name="resetRegistrationConfig" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetRegistrationConfig"></a>

```typescript
public resetRegistrationConfig(): void
```

##### `resetRemoveAutoRegistration` <a name="resetRemoveAutoRegistration" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetRemoveAutoRegistration"></a>

```typescript
public resetRemoveAutoRegistration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVerificationCertificatePem` <a name="resetVerificationCertificatePem" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetVerificationCertificatePem"></a>

```typescript
public resetVerificationCertificatePem(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotCaCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.isConstruct"></a>

```typescript
import { iotCaCertificate } from '@cdktn/provider-awscc'

iotCaCertificate.IotCaCertificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.isTerraformElement"></a>

```typescript
import { iotCaCertificate } from '@cdktn/provider-awscc'

iotCaCertificate.IotCaCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.isTerraformResource"></a>

```typescript
import { iotCaCertificate } from '@cdktn/provider-awscc'

iotCaCertificate.IotCaCertificate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.generateConfigForImport"></a>

```typescript
import { iotCaCertificate } from '@cdktn/provider-awscc'

iotCaCertificate.IotCaCertificate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotCaCertificate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotCaCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotCaCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_ca_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotCaCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.caCertificateId">caCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.registrationConfig">registrationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference">IotCaCertificateRegistrationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList">IotCaCertificateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.autoRegistrationStatusInput">autoRegistrationStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.caCertificatePemInput">caCertificatePemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.certificateModeInput">certificateModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.registrationConfigInput">registrationConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig">IotCaCertificateRegistrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.removeAutoRegistrationInput">removeAutoRegistrationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.verificationCertificatePemInput">verificationCertificatePemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.autoRegistrationStatus">autoRegistrationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.caCertificatePem">caCertificatePem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.certificateMode">certificateMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.removeAutoRegistration">removeAutoRegistration</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.verificationCertificatePem">verificationCertificatePem</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `caCertificateId`<sup>Required</sup> <a name="caCertificateId" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.caCertificateId"></a>

```typescript
public readonly caCertificateId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `registrationConfig`<sup>Required</sup> <a name="registrationConfig" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.registrationConfig"></a>

```typescript
public readonly registrationConfig: IotCaCertificateRegistrationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference">IotCaCertificateRegistrationConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.tags"></a>

```typescript
public readonly tags: IotCaCertificateTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList">IotCaCertificateTagsList</a>

---

##### `autoRegistrationStatusInput`<sup>Optional</sup> <a name="autoRegistrationStatusInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.autoRegistrationStatusInput"></a>

```typescript
public readonly autoRegistrationStatusInput: string;
```

- *Type:* string

---

##### `caCertificatePemInput`<sup>Optional</sup> <a name="caCertificatePemInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.caCertificatePemInput"></a>

```typescript
public readonly caCertificatePemInput: string;
```

- *Type:* string

---

##### `certificateModeInput`<sup>Optional</sup> <a name="certificateModeInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.certificateModeInput"></a>

```typescript
public readonly certificateModeInput: string;
```

- *Type:* string

---

##### `registrationConfigInput`<sup>Optional</sup> <a name="registrationConfigInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.registrationConfigInput"></a>

```typescript
public readonly registrationConfigInput: IResolvable | IotCaCertificateRegistrationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig">IotCaCertificateRegistrationConfig</a>

---

##### `removeAutoRegistrationInput`<sup>Optional</sup> <a name="removeAutoRegistrationInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.removeAutoRegistrationInput"></a>

```typescript
public readonly removeAutoRegistrationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IotCaCertificateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a>[]

---

##### `verificationCertificatePemInput`<sup>Optional</sup> <a name="verificationCertificatePemInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.verificationCertificatePemInput"></a>

```typescript
public readonly verificationCertificatePemInput: string;
```

- *Type:* string

---

##### `autoRegistrationStatus`<sup>Required</sup> <a name="autoRegistrationStatus" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.autoRegistrationStatus"></a>

```typescript
public readonly autoRegistrationStatus: string;
```

- *Type:* string

---

##### `caCertificatePem`<sup>Required</sup> <a name="caCertificatePem" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.caCertificatePem"></a>

```typescript
public readonly caCertificatePem: string;
```

- *Type:* string

---

##### `certificateMode`<sup>Required</sup> <a name="certificateMode" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.certificateMode"></a>

```typescript
public readonly certificateMode: string;
```

- *Type:* string

---

##### `removeAutoRegistration`<sup>Required</sup> <a name="removeAutoRegistration" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.removeAutoRegistration"></a>

```typescript
public readonly removeAutoRegistration: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `verificationCertificatePem`<sup>Required</sup> <a name="verificationCertificatePem" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.verificationCertificatePem"></a>

```typescript
public readonly verificationCertificatePem: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotCaCertificateConfig <a name="IotCaCertificateConfig" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.Initializer"></a>

```typescript
import { iotCaCertificate } from '@cdktn/provider-awscc'

const iotCaCertificateConfig: iotCaCertificate.IotCaCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.caCertificatePem">caCertificatePem</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_ca_certificate#ca_certificate_pem IotCaCertificate#ca_certificate_pem}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_ca_certificate#status IotCaCertificate#status}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.autoRegistrationStatus">autoRegistrationStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_ca_certificate#auto_registration_status IotCaCertificate#auto_registration_status}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.certificateMode">certificateMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_ca_certificate#certificate_mode IotCaCertificate#certificate_mode}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.registrationConfig">registrationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig">IotCaCertificateRegistrationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_ca_certificate#registration_config IotCaCertificate#registration_config}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.removeAutoRegistration">removeAutoRegistration</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_ca_certificate#remove_auto_registration IotCaCertificate#remove_auto_registration}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.verificationCertificatePem">verificationCertificatePem</a></code> | <code>string</code> | The private key verification certificate. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `caCertificatePem`<sup>Required</sup> <a name="caCertificatePem" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.caCertificatePem"></a>

```typescript
public readonly caCertificatePem: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_ca_certificate#ca_certificate_pem IotCaCertificate#ca_certificate_pem}.

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_ca_certificate#status IotCaCertificate#status}.

---

##### `autoRegistrationStatus`<sup>Optional</sup> <a name="autoRegistrationStatus" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.autoRegistrationStatus"></a>

```typescript
public readonly autoRegistrationStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_ca_certificate#auto_registration_status IotCaCertificate#auto_registration_status}.

---

##### `certificateMode`<sup>Optional</sup> <a name="certificateMode" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.certificateMode"></a>

```typescript
public readonly certificateMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_ca_certificate#certificate_mode IotCaCertificate#certificate_mode}.

---

##### `registrationConfig`<sup>Optional</sup> <a name="registrationConfig" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.registrationConfig"></a>

```typescript
public readonly registrationConfig: IotCaCertificateRegistrationConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig">IotCaCertificateRegistrationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_ca_certificate#registration_config IotCaCertificate#registration_config}.

---

##### `removeAutoRegistration`<sup>Optional</sup> <a name="removeAutoRegistration" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.removeAutoRegistration"></a>

```typescript
public readonly removeAutoRegistration: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_ca_certificate#remove_auto_registration IotCaCertificate#remove_auto_registration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IotCaCertificateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_ca_certificate#tags IotCaCertificate#tags}

---

##### `verificationCertificatePem`<sup>Optional</sup> <a name="verificationCertificatePem" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.verificationCertificatePem"></a>

```typescript
public readonly verificationCertificatePem: string;
```

- *Type:* string

The private key verification certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_ca_certificate#verification_certificate_pem IotCaCertificate#verification_certificate_pem}

---

### IotCaCertificateRegistrationConfig <a name="IotCaCertificateRegistrationConfig" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig.Initializer"></a>

```typescript
import { iotCaCertificate } from '@cdktn/provider-awscc'

const iotCaCertificateRegistrationConfig: iotCaCertificate.IotCaCertificateRegistrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_ca_certificate#role_arn IotCaCertificate#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig.property.templateBody">templateBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_ca_certificate#template_body IotCaCertificate#template_body}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig.property.templateName">templateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_ca_certificate#template_name IotCaCertificate#template_name}. |

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_ca_certificate#role_arn IotCaCertificate#role_arn}.

---

##### `templateBody`<sup>Optional</sup> <a name="templateBody" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig.property.templateBody"></a>

```typescript
public readonly templateBody: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_ca_certificate#template_body IotCaCertificate#template_body}.

---

##### `templateName`<sup>Optional</sup> <a name="templateName" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_ca_certificate#template_name IotCaCertificate#template_name}.

---

### IotCaCertificateTags <a name="IotCaCertificateTags" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags.Initializer"></a>

```typescript
import { iotCaCertificate } from '@cdktn/provider-awscc'

const iotCaCertificateTags: iotCaCertificate.IotCaCertificateTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_ca_certificate#key IotCaCertificate#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_ca_certificate#value IotCaCertificate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IotCaCertificateRegistrationConfigOutputReference <a name="IotCaCertificateRegistrationConfigOutputReference" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.Initializer"></a>

```typescript
import { iotCaCertificate } from '@cdktn/provider-awscc'

new iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resetTemplateBody">resetTemplateBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resetTemplateName">resetTemplateName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetTemplateBody` <a name="resetTemplateBody" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resetTemplateBody"></a>

```typescript
public resetTemplateBody(): void
```

##### `resetTemplateName` <a name="resetTemplateName" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resetTemplateName"></a>

```typescript
public resetTemplateName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateBodyInput">templateBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateNameInput">templateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateBody">templateBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateName">templateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig">IotCaCertificateRegistrationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `templateBodyInput`<sup>Optional</sup> <a name="templateBodyInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateBodyInput"></a>

```typescript
public readonly templateBodyInput: string;
```

- *Type:* string

---

##### `templateNameInput`<sup>Optional</sup> <a name="templateNameInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateNameInput"></a>

```typescript
public readonly templateNameInput: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `templateBody`<sup>Required</sup> <a name="templateBody" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateBody"></a>

```typescript
public readonly templateBody: string;
```

- *Type:* string

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotCaCertificateRegistrationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig">IotCaCertificateRegistrationConfig</a>

---


### IotCaCertificateTagsList <a name="IotCaCertificateTagsList" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.Initializer"></a>

```typescript
import { iotCaCertificate } from '@cdktn/provider-awscc'

new iotCaCertificate.IotCaCertificateTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.get"></a>

```typescript
public get(index: number): IotCaCertificateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotCaCertificateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a>[]

---


### IotCaCertificateTagsOutputReference <a name="IotCaCertificateTagsOutputReference" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.Initializer"></a>

```typescript
import { iotCaCertificate } from '@cdktn/provider-awscc'

new iotCaCertificate.IotCaCertificateTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotCaCertificateTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a>

---



