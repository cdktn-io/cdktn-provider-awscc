# `certificatemanagerAcmeExternalAccountBinding` Submodule <a name="`certificatemanagerAcmeExternalAccountBinding` Submodule" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificatemanagerAcmeExternalAccountBinding <a name="CertificatemanagerAcmeExternalAccountBinding" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_external_account_binding awscc_certificatemanager_acme_external_account_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer"></a>

```typescript
import { certificatemanagerAcmeExternalAccountBinding } from '@cdktn/provider-awscc'

new certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding(scope: Construct, id: string, config: CertificatemanagerAcmeExternalAccountBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig">CertificatemanagerAcmeExternalAccountBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig">CertificatemanagerAcmeExternalAccountBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.putExpiration">putExpiration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.resetExpiration">resetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExpiration` <a name="putExpiration" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.putExpiration"></a>

```typescript
public putExpiration(value: CertificatemanagerAcmeExternalAccountBindingExpiration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.putExpiration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration">CertificatemanagerAcmeExternalAccountBindingExpiration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.putTags"></a>

```typescript
public putTags(value: IResolvable | CertificatemanagerAcmeExternalAccountBindingTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a>[]

---

##### `resetExpiration` <a name="resetExpiration" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.resetExpiration"></a>

```typescript
public resetExpiration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CertificatemanagerAcmeExternalAccountBinding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isConstruct"></a>

```typescript
import { certificatemanagerAcmeExternalAccountBinding } from '@cdktn/provider-awscc'

certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isTerraformElement"></a>

```typescript
import { certificatemanagerAcmeExternalAccountBinding } from '@cdktn/provider-awscc'

certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isTerraformResource"></a>

```typescript
import { certificatemanagerAcmeExternalAccountBinding } from '@cdktn/provider-awscc'

certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.generateConfigForImport"></a>

```typescript
import { certificatemanagerAcmeExternalAccountBinding } from '@cdktn/provider-awscc'

certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CertificatemanagerAcmeExternalAccountBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CertificatemanagerAcmeExternalAccountBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CertificatemanagerAcmeExternalAccountBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_external_account_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CertificatemanagerAcmeExternalAccountBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.acmeExternalAccountBindingArn">acmeExternalAccountBindingArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.expiration">expiration</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference">CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList">CertificatemanagerAcmeExternalAccountBindingTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.acmeEndpointArnInput">acmeEndpointArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.expirationInput">expirationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration">CertificatemanagerAcmeExternalAccountBindingExpiration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.acmeEndpointArn">acmeEndpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `acmeExternalAccountBindingArn`<sup>Required</sup> <a name="acmeExternalAccountBindingArn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.acmeExternalAccountBindingArn"></a>

```typescript
public readonly acmeExternalAccountBindingArn: string;
```

- *Type:* string

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.expiration"></a>

```typescript
public readonly expiration: CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference">CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.tags"></a>

```typescript
public readonly tags: CertificatemanagerAcmeExternalAccountBindingTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList">CertificatemanagerAcmeExternalAccountBindingTagsList</a>

---

##### `acmeEndpointArnInput`<sup>Optional</sup> <a name="acmeEndpointArnInput" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.acmeEndpointArnInput"></a>

```typescript
public readonly acmeEndpointArnInput: string;
```

- *Type:* string

---

##### `expirationInput`<sup>Optional</sup> <a name="expirationInput" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.expirationInput"></a>

```typescript
public readonly expirationInput: IResolvable | CertificatemanagerAcmeExternalAccountBindingExpiration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration">CertificatemanagerAcmeExternalAccountBindingExpiration</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CertificatemanagerAcmeExternalAccountBindingTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a>[]

---

##### `acmeEndpointArn`<sup>Required</sup> <a name="acmeEndpointArn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.acmeEndpointArn"></a>

```typescript
public readonly acmeEndpointArn: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CertificatemanagerAcmeExternalAccountBindingConfig <a name="CertificatemanagerAcmeExternalAccountBindingConfig" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.Initializer"></a>

```typescript
import { certificatemanagerAcmeExternalAccountBinding } from '@cdktn/provider-awscc'

const certificatemanagerAcmeExternalAccountBindingConfig: certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.acmeEndpointArn">acmeEndpointArn</a></code> | <code>string</code> | The ARN of the ACME endpoint this binding is associated with. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.roleArn">roleArn</a></code> | <code>string</code> | The IAM role ARN for cross-account access. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.expiration">expiration</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration">CertificatemanagerAcmeExternalAccountBindingExpiration</a></code> | The expiration configuration for the external account binding. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a>[]</code> | Tags associated with the external account binding. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `acmeEndpointArn`<sup>Required</sup> <a name="acmeEndpointArn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.acmeEndpointArn"></a>

```typescript
public readonly acmeEndpointArn: string;
```

- *Type:* string

The ARN of the ACME endpoint this binding is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_external_account_binding#acme_endpoint_arn CertificatemanagerAcmeExternalAccountBinding#acme_endpoint_arn}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The IAM role ARN for cross-account access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_external_account_binding#role_arn CertificatemanagerAcmeExternalAccountBinding#role_arn}

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.expiration"></a>

```typescript
public readonly expiration: CertificatemanagerAcmeExternalAccountBindingExpiration;
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration">CertificatemanagerAcmeExternalAccountBindingExpiration</a>

The expiration configuration for the external account binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_external_account_binding#expiration CertificatemanagerAcmeExternalAccountBinding#expiration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | CertificatemanagerAcmeExternalAccountBindingTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a>[]

Tags associated with the external account binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_external_account_binding#tags CertificatemanagerAcmeExternalAccountBinding#tags}

---

### CertificatemanagerAcmeExternalAccountBindingExpiration <a name="CertificatemanagerAcmeExternalAccountBindingExpiration" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration.Initializer"></a>

```typescript
import { certificatemanagerAcmeExternalAccountBinding } from '@cdktn/provider-awscc'

const certificatemanagerAcmeExternalAccountBindingExpiration: certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration.property.type">type</a></code> | <code>string</code> | The time unit for the expiration value. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration.property.value">value</a></code> | <code>number</code> | The expiration value. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The time unit for the expiration value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_external_account_binding#type CertificatemanagerAcmeExternalAccountBinding#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

The expiration value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_external_account_binding#value CertificatemanagerAcmeExternalAccountBinding#value}

---

### CertificatemanagerAcmeExternalAccountBindingTags <a name="CertificatemanagerAcmeExternalAccountBindingTags" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags.Initializer"></a>

```typescript
import { certificatemanagerAcmeExternalAccountBinding } from '@cdktn/provider-awscc'

const certificatemanagerAcmeExternalAccountBindingTags: certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_external_account_binding#key CertificatemanagerAcmeExternalAccountBinding#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_external_account_binding#value CertificatemanagerAcmeExternalAccountBinding#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference <a name="CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.Initializer"></a>

```typescript
import { certificatemanagerAcmeExternalAccountBinding } from '@cdktn/provider-awscc'

new certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration">CertificatemanagerAcmeExternalAccountBindingExpiration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CertificatemanagerAcmeExternalAccountBindingExpiration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration">CertificatemanagerAcmeExternalAccountBindingExpiration</a>

---


### CertificatemanagerAcmeExternalAccountBindingTagsList <a name="CertificatemanagerAcmeExternalAccountBindingTagsList" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.Initializer"></a>

```typescript
import { certificatemanagerAcmeExternalAccountBinding } from '@cdktn/provider-awscc'

new certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.get"></a>

```typescript
public get(index: number): CertificatemanagerAcmeExternalAccountBindingTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CertificatemanagerAcmeExternalAccountBindingTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a>[]

---


### CertificatemanagerAcmeExternalAccountBindingTagsOutputReference <a name="CertificatemanagerAcmeExternalAccountBindingTagsOutputReference" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer"></a>

```typescript
import { certificatemanagerAcmeExternalAccountBinding } from '@cdktn/provider-awscc'

new certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CertificatemanagerAcmeExternalAccountBindingTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a>

---



