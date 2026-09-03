# `certificatemanagerAcmeDomainValidation` Submodule <a name="`certificatemanagerAcmeDomainValidation` Submodule" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificatemanagerAcmeDomainValidation <a name="CertificatemanagerAcmeDomainValidation" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/certificatemanager_acme_domain_validation awscc_certificatemanager_acme_domain_validation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer"></a>

```typescript
import { certificatemanagerAcmeDomainValidation } from '@cdktn/provider-awscc'

new certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation(scope: Construct, id: string, config: CertificatemanagerAcmeDomainValidationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig">CertificatemanagerAcmeDomainValidationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig">CertificatemanagerAcmeDomainValidationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.putPrevalidationOptions">putPrevalidationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPrevalidationOptions` <a name="putPrevalidationOptions" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.putPrevalidationOptions"></a>

```typescript
public putPrevalidationOptions(value: CertificatemanagerAcmeDomainValidationPrevalidationOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.putPrevalidationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptions">CertificatemanagerAcmeDomainValidationPrevalidationOptions</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.putTags"></a>

```typescript
public putTags(value: IResolvable | CertificatemanagerAcmeDomainValidationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags">CertificatemanagerAcmeDomainValidationTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CertificatemanagerAcmeDomainValidation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.isConstruct"></a>

```typescript
import { certificatemanagerAcmeDomainValidation } from '@cdktn/provider-awscc'

certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.isTerraformElement"></a>

```typescript
import { certificatemanagerAcmeDomainValidation } from '@cdktn/provider-awscc'

certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.isTerraformResource"></a>

```typescript
import { certificatemanagerAcmeDomainValidation } from '@cdktn/provider-awscc'

certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.generateConfigForImport"></a>

```typescript
import { certificatemanagerAcmeDomainValidation } from '@cdktn/provider-awscc'

certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CertificatemanagerAcmeDomainValidation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CertificatemanagerAcmeDomainValidation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CertificatemanagerAcmeDomainValidation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/certificatemanager_acme_domain_validation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CertificatemanagerAcmeDomainValidation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.prevalidationOptions">prevalidationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference">CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList">CertificatemanagerAcmeDomainValidationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.acmeEndpointArnInput">acmeEndpointArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.prevalidationOptionsInput">prevalidationOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptions">CertificatemanagerAcmeDomainValidationPrevalidationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags">CertificatemanagerAcmeDomainValidationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.acmeEndpointArn">acmeEndpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `prevalidationOptions`<sup>Required</sup> <a name="prevalidationOptions" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.prevalidationOptions"></a>

```typescript
public readonly prevalidationOptions: CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference">CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.tags"></a>

```typescript
public readonly tags: CertificatemanagerAcmeDomainValidationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList">CertificatemanagerAcmeDomainValidationTagsList</a>

---

##### `acmeEndpointArnInput`<sup>Optional</sup> <a name="acmeEndpointArnInput" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.acmeEndpointArnInput"></a>

```typescript
public readonly acmeEndpointArnInput: string;
```

- *Type:* string

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `prevalidationOptionsInput`<sup>Optional</sup> <a name="prevalidationOptionsInput" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.prevalidationOptionsInput"></a>

```typescript
public readonly prevalidationOptionsInput: IResolvable | CertificatemanagerAcmeDomainValidationPrevalidationOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptions">CertificatemanagerAcmeDomainValidationPrevalidationOptions</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CertificatemanagerAcmeDomainValidationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags">CertificatemanagerAcmeDomainValidationTags</a>[]

---

##### `acmeEndpointArn`<sup>Required</sup> <a name="acmeEndpointArn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.acmeEndpointArn"></a>

```typescript
public readonly acmeEndpointArn: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CertificatemanagerAcmeDomainValidationConfig <a name="CertificatemanagerAcmeDomainValidationConfig" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.Initializer"></a>

```typescript
import { certificatemanagerAcmeDomainValidation } from '@cdktn/provider-awscc'

const certificatemanagerAcmeDomainValidationConfig: certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.acmeEndpointArn">acmeEndpointArn</a></code> | <code>string</code> | The ARN of the ACME endpoint this domain validation is associated with. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.domainName">domainName</a></code> | <code>string</code> | The domain name to validate. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.prevalidationOptions">prevalidationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptions">CertificatemanagerAcmeDomainValidationPrevalidationOptions</a></code> | Prevalidation method configuration. Currently only DNS-based prevalidation is supported. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags">CertificatemanagerAcmeDomainValidationTags</a>[]</code> | Tags associated with the domain validation. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `acmeEndpointArn`<sup>Required</sup> <a name="acmeEndpointArn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.acmeEndpointArn"></a>

```typescript
public readonly acmeEndpointArn: string;
```

- *Type:* string

The ARN of the ACME endpoint this domain validation is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/certificatemanager_acme_domain_validation#acme_endpoint_arn CertificatemanagerAcmeDomainValidation#acme_endpoint_arn}

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The domain name to validate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/certificatemanager_acme_domain_validation#domain_name CertificatemanagerAcmeDomainValidation#domain_name}

---

##### `prevalidationOptions`<sup>Required</sup> <a name="prevalidationOptions" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.prevalidationOptions"></a>

```typescript
public readonly prevalidationOptions: CertificatemanagerAcmeDomainValidationPrevalidationOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptions">CertificatemanagerAcmeDomainValidationPrevalidationOptions</a>

Prevalidation method configuration. Currently only DNS-based prevalidation is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/certificatemanager_acme_domain_validation#prevalidation_options CertificatemanagerAcmeDomainValidation#prevalidation_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | CertificatemanagerAcmeDomainValidationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags">CertificatemanagerAcmeDomainValidationTags</a>[]

Tags associated with the domain validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/certificatemanager_acme_domain_validation#tags CertificatemanagerAcmeDomainValidation#tags}

---

### CertificatemanagerAcmeDomainValidationPrevalidationOptions <a name="CertificatemanagerAcmeDomainValidationPrevalidationOptions" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptions.Initializer"></a>

```typescript
import { certificatemanagerAcmeDomainValidation } from '@cdktn/provider-awscc'

const certificatemanagerAcmeDomainValidationPrevalidationOptions: certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptions.property.dnsPrevalidation">dnsPrevalidation</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation</a></code> | DNS-based prevalidation options for the domain validation. |

---

##### `dnsPrevalidation`<sup>Required</sup> <a name="dnsPrevalidation" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptions.property.dnsPrevalidation"></a>

```typescript
public readonly dnsPrevalidation: CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation;
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation</a>

DNS-based prevalidation options for the domain validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/certificatemanager_acme_domain_validation#dns_prevalidation CertificatemanagerAcmeDomainValidation#dns_prevalidation}

---

### CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation <a name="CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation.Initializer"></a>

```typescript
import { certificatemanagerAcmeDomainValidation } from '@cdktn/provider-awscc'

const certificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation: certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation.property.domainScope">domainScope</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope</a></code> | Controls which certificate types are authorized to be issued for the domain via the ACME endpoint. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | The Route 53 hosted zone ID for automatic DNS record management. |

---

##### `domainScope`<sup>Optional</sup> <a name="domainScope" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation.property.domainScope"></a>

```typescript
public readonly domainScope: CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope;
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope</a>

Controls which certificate types are authorized to be issued for the domain via the ACME endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/certificatemanager_acme_domain_validation#domain_scope CertificatemanagerAcmeDomainValidation#domain_scope}

---

##### `hostedZoneId`<sup>Optional</sup> <a name="hostedZoneId" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

The Route 53 hosted zone ID for automatic DNS record management.

When provided, the service creates the validation DNS record on the customer's behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/certificatemanager_acme_domain_validation#hosted_zone_id CertificatemanagerAcmeDomainValidation#hosted_zone_id}

---

### CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope <a name="CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope.Initializer"></a>

```typescript
import { certificatemanagerAcmeDomainValidation } from '@cdktn/provider-awscc'

const certificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope: certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope.property.exactDomain">exactDomain</a></code> | <code>string</code> | Whether certificates may be issued for the exact domain. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope.property.subdomains">subdomains</a></code> | <code>string</code> | Whether certificates may be issued for subdomains of the domain. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope.property.wildcards">wildcards</a></code> | <code>string</code> | Whether wildcard certificates may be issued for the domain. |

---

##### `exactDomain`<sup>Optional</sup> <a name="exactDomain" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope.property.exactDomain"></a>

```typescript
public readonly exactDomain: string;
```

- *Type:* string

Whether certificates may be issued for the exact domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/certificatemanager_acme_domain_validation#exact_domain CertificatemanagerAcmeDomainValidation#exact_domain}

---

##### `subdomains`<sup>Optional</sup> <a name="subdomains" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope.property.subdomains"></a>

```typescript
public readonly subdomains: string;
```

- *Type:* string

Whether certificates may be issued for subdomains of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/certificatemanager_acme_domain_validation#subdomains CertificatemanagerAcmeDomainValidation#subdomains}

---

##### `wildcards`<sup>Optional</sup> <a name="wildcards" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope.property.wildcards"></a>

```typescript
public readonly wildcards: string;
```

- *Type:* string

Whether wildcard certificates may be issued for the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/certificatemanager_acme_domain_validation#wildcards CertificatemanagerAcmeDomainValidation#wildcards}

---

### CertificatemanagerAcmeDomainValidationTags <a name="CertificatemanagerAcmeDomainValidationTags" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags.Initializer"></a>

```typescript
import { certificatemanagerAcmeDomainValidation } from '@cdktn/provider-awscc'

const certificatemanagerAcmeDomainValidationTags: certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/certificatemanager_acme_domain_validation#key CertificatemanagerAcmeDomainValidation#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/certificatemanager_acme_domain_validation#value CertificatemanagerAcmeDomainValidation#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference <a name="CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.Initializer"></a>

```typescript
import { certificatemanagerAcmeDomainValidation } from '@cdktn/provider-awscc'

new certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.resetExactDomain">resetExactDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.resetSubdomains">resetSubdomains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.resetWildcards">resetWildcards</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExactDomain` <a name="resetExactDomain" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.resetExactDomain"></a>

```typescript
public resetExactDomain(): void
```

##### `resetSubdomains` <a name="resetSubdomains" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.resetSubdomains"></a>

```typescript
public resetSubdomains(): void
```

##### `resetWildcards` <a name="resetWildcards" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.resetWildcards"></a>

```typescript
public resetWildcards(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.exactDomainInput">exactDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.subdomainsInput">subdomainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.wildcardsInput">wildcardsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.exactDomain">exactDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.subdomains">subdomains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.wildcards">wildcards</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exactDomainInput`<sup>Optional</sup> <a name="exactDomainInput" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.exactDomainInput"></a>

```typescript
public readonly exactDomainInput: string;
```

- *Type:* string

---

##### `subdomainsInput`<sup>Optional</sup> <a name="subdomainsInput" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.subdomainsInput"></a>

```typescript
public readonly subdomainsInput: string;
```

- *Type:* string

---

##### `wildcardsInput`<sup>Optional</sup> <a name="wildcardsInput" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.wildcardsInput"></a>

```typescript
public readonly wildcardsInput: string;
```

- *Type:* string

---

##### `exactDomain`<sup>Required</sup> <a name="exactDomain" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.exactDomain"></a>

```typescript
public readonly exactDomain: string;
```

- *Type:* string

---

##### `subdomains`<sup>Required</sup> <a name="subdomains" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.subdomains"></a>

```typescript
public readonly subdomains: string;
```

- *Type:* string

---

##### `wildcards`<sup>Required</sup> <a name="wildcards" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.wildcards"></a>

```typescript
public readonly wildcards: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope</a>

---


### CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference <a name="CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.Initializer"></a>

```typescript
import { certificatemanagerAcmeDomainValidation } from '@cdktn/provider-awscc'

new certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.putDomainScope">putDomainScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.resetDomainScope">resetDomainScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.resetHostedZoneId">resetHostedZoneId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDomainScope` <a name="putDomainScope" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.putDomainScope"></a>

```typescript
public putDomainScope(value: CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.putDomainScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope</a>

---

##### `resetDomainScope` <a name="resetDomainScope" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.resetDomainScope"></a>

```typescript
public resetDomainScope(): void
```

##### `resetHostedZoneId` <a name="resetHostedZoneId" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.resetHostedZoneId"></a>

```typescript
public resetHostedZoneId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.domainScope">domainScope</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.domainScopeInput">domainScopeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.hostedZoneIdInput">hostedZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainScope`<sup>Required</sup> <a name="domainScope" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.domainScope"></a>

```typescript
public readonly domainScope: CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference</a>

---

##### `domainScopeInput`<sup>Optional</sup> <a name="domainScopeInput" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.domainScopeInput"></a>

```typescript
public readonly domainScopeInput: IResolvable | CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope</a>

---

##### `hostedZoneIdInput`<sup>Optional</sup> <a name="hostedZoneIdInput" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.hostedZoneIdInput"></a>

```typescript
public readonly hostedZoneIdInput: string;
```

- *Type:* string

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation</a>

---


### CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference <a name="CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.Initializer"></a>

```typescript
import { certificatemanagerAcmeDomainValidation } from '@cdktn/provider-awscc'

new certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.putDnsPrevalidation">putDnsPrevalidation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDnsPrevalidation` <a name="putDnsPrevalidation" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.putDnsPrevalidation"></a>

```typescript
public putDnsPrevalidation(value: CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.putDnsPrevalidation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.dnsPrevalidation">dnsPrevalidation</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.dnsPrevalidationInput">dnsPrevalidationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptions">CertificatemanagerAcmeDomainValidationPrevalidationOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsPrevalidation`<sup>Required</sup> <a name="dnsPrevalidation" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.dnsPrevalidation"></a>

```typescript
public readonly dnsPrevalidation: CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference</a>

---

##### `dnsPrevalidationInput`<sup>Optional</sup> <a name="dnsPrevalidationInput" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.dnsPrevalidationInput"></a>

```typescript
public readonly dnsPrevalidationInput: IResolvable | CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CertificatemanagerAcmeDomainValidationPrevalidationOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptions">CertificatemanagerAcmeDomainValidationPrevalidationOptions</a>

---


### CertificatemanagerAcmeDomainValidationTagsList <a name="CertificatemanagerAcmeDomainValidationTagsList" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.Initializer"></a>

```typescript
import { certificatemanagerAcmeDomainValidation } from '@cdktn/provider-awscc'

new certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.get"></a>

```typescript
public get(index: number): CertificatemanagerAcmeDomainValidationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags">CertificatemanagerAcmeDomainValidationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CertificatemanagerAcmeDomainValidationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags">CertificatemanagerAcmeDomainValidationTags</a>[]

---


### CertificatemanagerAcmeDomainValidationTagsOutputReference <a name="CertificatemanagerAcmeDomainValidationTagsOutputReference" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer"></a>

```typescript
import { certificatemanagerAcmeDomainValidation } from '@cdktn/provider-awscc'

new certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags">CertificatemanagerAcmeDomainValidationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CertificatemanagerAcmeDomainValidationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags">CertificatemanagerAcmeDomainValidationTags</a>

---



